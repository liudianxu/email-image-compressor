'use client';

import { useCallback, useRef, useState } from 'react';

const PRESETS = [
  { id: '1mb', label: 'Under 1 MB — safest for any inbox', bytes: 1 * 1024 * 1024 },
  { id: '5mb', label: 'Under 5 MB — several photos in one email', bytes: 5 * 1024 * 1024 },
  { id: '10mb', label: 'Under 10 MB — just below Outlook limit', bytes: 10 * 1024 * 1024 },
  { id: 'custom', label: 'Custom size…', bytes: 0 },
];

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not read this image.'));
    };
    img.src = url;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
}

/**
 * Compress one image towards targetBytes.
 * Strategy: downscale big photos, then binary-search JPEG quality.
 * If the smallest quality still overshoots, shrink dimensions and retry.
 */
async function compressFile(file, targetBytes, onProgress) {
  const img = await loadImage(file);
  const original = { w: img.width, h: img.height };

  const attempts = [
    { maxWidth: 2400, qRange: [0.5, 0.95] },
    { maxWidth: 1600, qRange: [0.4, 0.9] },
    { maxWidth: 1100, qRange: [0.3, 0.8] },
  ];

  let best = null;

  for (const attempt of attempts) {
    let w = original.w;
    let h = original.h;
    if (w > attempt.maxWidth) {
      h = Math.round((h * attempt.maxWidth) / w);
      w = attempt.maxWidth;
    }

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // Flatten transparency onto white (JPEG has no alpha).
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);

    let lo = attempt.qRange[0];
    let hi = attempt.qRange[1];
    let roundBest = null;

    for (let i = 0; i < 7; i++) {
      const q = (lo + hi) / 2;
      const blob = await canvasToBlob(canvas, 'image/jpeg', q);
      if (blob && blob.size <= targetBytes) {
        roundBest = { blob, q, w, h };
        lo = q; // try higher quality
      } else {
        hi = q; // go lower
      }
      if (onProgress) onProgress(i / 7);
    }

    if (roundBest) {
      best = roundBest;
      break; // met the target at this size — done
    }

    // Could not hit target at this width even at lowest quality.
    // Keep the smallest blob we saw and shrink dimensions next round.
    const fallback = await canvasToBlob(canvas, 'image/jpeg', attempt.qRange[0]);
    if (fallback && (!best || fallback.size < best.blob.size)) {
      best = { blob: fallback, q: attempt.qRange[0], w, h };
    }
  }

  return best;
}

export default function CompressorTool() {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);
  const [preset, setPreset] = useState('10mb');
  const [customMB, setCustomMB] = useState('2');
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const targetBytes = useCallback(() => {
    if (preset === 'custom') {
      const mb = Math.max(0.1, parseFloat(customMB) || 1);
      return Math.round(mb * 1024 * 1024);
    }
    const p = PRESETS.find((x) => x.id === preset);
    return p ? p.bytes : 10 * 1024 * 1024;
  }, [preset, customMB]);

  const addFiles = useCallback((fileList) => {
    const imgs = Array.from(fileList).filter((f) => /^image\//.test(f.type));
    setItems((prev) => [
      ...prev,
      ...imgs.map((f) => ({
        id: crypto.randomUUID(),
        file: f,
        status: 'ready',
        originalSize: f.size,
        resultSize: null,
        quality: null,
        url: null,
        note: null,
      })),
    ]);
  }, []);

  const run = useCallback(async () => {
    setBusy(true);
    const target = targetBytes();
    const queue = items.filter((it) => it.status === 'ready' || it.status === 'error');
    for (const it of queue) {
      setItems((prev) => prev.map((x) => (x.id === it.id ? { ...x, status: 'working', note: null } : x)));
      try {
        const result = await compressFile(it.file, target);
        if (!result) throw new Error('compression failed');
        const url = URL.createObjectURL(result.blob);
        setItems((prev) =>
          prev.map((x) =>
            x.id === it.id
              ? {
                  ...x,
                  status: 'done',
                  resultSize: result.blob.size,
                  quality: result.q,
                  url,
                  note: result.blob.size > target ? 'Closest achievable — try a smaller target or resize further' : null,
                }
              : x
          )
        );
      } catch (e) {
        setItems((prev) =>
          prev.map((x) => (x.id === it.id ? { ...x, status: 'error', note: e.message } : x))
        );
      }
    }
    setBusy(false);
  }, [items, targetBytes]);

  const download = useCallback((item) => {
    const a = document.createElement('a');
    a.href = item.url;
    a.download = item.file.name.replace(/\.(jpe?g|png|webp|bmp)$/i, '') + '-for-email.jpg';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  const downloadAll = useCallback(() => {
    items.filter((it) => it.status === 'done').forEach((it, i) => {
      setTimeout(() => download(it), i * 350);
    });
  }, [items, download]);

  const doneItems = items.filter((it) => it.status === 'done');
  const readyCount = items.filter((it) => it.status === 'ready' || it.status === 'error').length;

  return (
    <div>
      <div
        className={`drop ${dragOver ? 'over' : ''}`}
        onClick={() => inputRef.current && inputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          addFiles(e.dataTransfer.files);
        }}
      >
        <div className="big">Drop images here, or click to choose</div>
        <div className="hint">JPG / PNG / WebP — multiple files supported. Nothing is uploaded.</div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={(e) => {
            if (e.target.files) addFiles(e.target.files);
            e.target.value = '';
          }}
        />
      </div>

      {items.length > 0 && (
        <>
          <div className="controls">
            <label htmlFor="target">Target size:</label>
            <select id="target" value={preset} onChange={(e) => setPreset(e.target.value)}>
              {PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            {preset === 'custom' && (
              <input
                type="number"
                min="0.1"
                step="0.5"
                value={customMB}
                onChange={(e) => setCustomMB(e.target.value)}
                aria-label="Custom target size in MB"
              />
            )}
            <span style={{ color: 'var(--muted)', fontSize: 13 }}>MB</span>
            <button className="btn primary" onClick={run} disabled={busy || readyCount === 0}>
              {busy ? 'Compressing…' : readyCount > 0 ? `Compress ${readyCount} image${readyCount > 1 ? 's' : ''}` : 'All done'}
            </button>
            {doneItems.length > 1 && (
              <button className="btn ghost" onClick={downloadAll}>
                Download all
              </button>
            )}
          </div>

          <ul className="results">
            {items.map((it) => (
              <li key={it.id}>
                {it.status === 'done' && it.url ? (
                  <img className="thumb" src={it.url} alt="" />
                ) : (
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 8,
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      color: 'var(--muted)',
                      flexShrink: 0,
                    }}
                  >
                    {it.status === 'working' ? '…' : 'IMG'}
                  </div>
                )}
                <span className="name">{it.file.name}</span>
                <span className="meta">
                  {formatBytes(it.originalSize)}
                  {it.resultSize ? ` → ${formatBytes(it.resultSize)}` : ''}
                </span>
                {it.resultSize && (
                  <span className={it.resultSize > targetBytes() ? 'warn' : 'saved'}>
                    −{Math.max(0, Math.round((1 - it.resultSize / it.originalSize) * 100))}%
                  </span>
                )}
                {it.status === 'done' && (
                  <button className="btn ghost" style={{ padding: '6px 14px' }} onClick={() => download(it)}>
                    Download
                  </button>
                )}
                {it.status === 'working' && <span className="meta">compressing…</span>}
                {it.status === 'error' && <span className="meta warn">{it.note}</span>}
                {it.note && it.status === 'done' && <span className="meta warn">{it.note}</span>}
                <button
                  className="btn ghost"
                  style={{ padding: '4px 10px', fontSize: 12 }}
                  aria-label={`Remove ${it.file.name}`}
                  onClick={() => setItems((prev) => prev.filter((x) => x.id !== it.id))}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <p className="note">
            Output is JPG (transparent areas become white). Quality is auto-tuned to squeeze under
            your target size while keeping the photo crisp.
          </p>
        </>
      )}
    </div>
  );
}
