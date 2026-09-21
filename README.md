# CompressFor.Email — 给邮件压图片的工具站

**这站是干嘛的：** 老外发邮件经常被弹回来："附件太大"（Outlook 上限 20MB、Gmail 25MB）。这个站让他们把照片拖进来，几秒钟压到能发出去的大小。图片全程在自己浏览器里处理，不上传服务器。

**为什么选这个题：** "compress image for email" 是真实搜索词，大厂（ilovepdf 们）不屑于单独做这个细分场景，新站有机会排上去。零服务器成本，Vercel 免费托管。

---

## 三步上线（老板操作版）

### 第 1 步：本地看一眼（5 分钟）
电脑装好 Node.js（18 以上）后，在这个文件夹打开命令行：

```
npm install
npm run dev
```

浏览器打开 http://localhost:3000 ——拖张照片进去试试，压完能下载就说明没问题。

### 第 2 步：放到 GitHub（10 分钟）
1. 注册/登录 GitHub，新建一个仓库，名字叫 `email-image-compressor`
2. 命令行里（还是在这个文件夹）：
```
git init
git add .
git commit -m "first site"
git remote add origin https://github.com/你的用户名/email-image-compressor.git
git push -u origin main
```

### 第 3 步：部署上线（10 分钟，全程免费）
1. 打开 vercel.com，用 GitHub 账号登录
2. 点 "Add New Project" → 选刚才那个仓库 → 点 "Deploy"
3. 一分钟后你就有一个 `xxx.vercel.app` 的网址，站就活着了

**买域名（可选，$10/年）：** 在 Cloudflare 买 `compressfor.email` 或 `compressforemail.com`，在 Vercel 设置里绑上。有真域名 Google 才更认。

---

## 上线之后做什么（顺序别乱）

1. **第 1 天**：去 search.google.com/search-console 用 Gmail 登录，添加站点，提交网址——这一步是"告诉 Google 我存在"
2. **第 1 周**：在 Vercel 设置里确认 sitemap（Next.js 自带 /sitemap.xml）
3. **第 1-3 个月**：等待 + 观察。在 Search Console 里看 "compress image for email" 这类词的排名有没有慢慢往上爬。**这期间没有流量是正常的，不是失败**
4. **有流量后（日均 100+ 访问）**：申请 Google AdSense，挂广告位——这是第一个收入开关

## 赚钱路径（人话版）

- 短期：AdSense 广告费（流量起来后，$300-500/月是第一目标）
- 中期：加付费功能（批量 50 张、去水印、高清优先）
- 长期：把这套流程复制到第二个站（Java API 型，吃你后端老本）

## 文件结构（不用记，给查错用）

```
app/page.jsx            首页（SEO 文案 + FAQ）
app/layout.jsx          网站框架（页头页脚）
app/globals.css         全部样式
app/privacy/page.jsx    隐私政策（AdSense 审核要查）
app/terms/page.jsx      使用条款
components/CompressorTool.jsx   压缩工具本体（核心代码）
```

## 压缩逻辑（技术备忘）

用户选目标大小（1MB/5MB/10MB/自定义）→ 大图先缩到 2400px 宽 → JPEG 质量二分法找"能压进目标的最大质量" → 压不进就降尺寸再试 → 输出 JPG。纯 canvas 实现，无任何后端。
