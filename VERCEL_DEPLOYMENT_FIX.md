# Vercel部署404错误解决方案

## 问题描述
在Vercel部署后出现大量404错误，主要涉及以下资源：
- CSS文件：`app.css`, `extract.css`
- JavaScript文件：`app.js`, `cookie-consent-configs.js`, `addtoany-page.js`
- 图片文件：各种PNG、JPG、SVG文件
- **页面路由问题**：`/work` 和 `/contact` 页面无法访问

## 问题原因
1. **路径不一致**：HTML文件中的资源路径使用相对路径（如`assets/css/app.css`），但在Vercel部署时需要绝对路径
2. **Vercel配置不完整**：缺少正确的静态资源路由配置
3. **项目结构问题**：HTML文件分布在根目录和`public/`目录，导致路径解析混乱
4. **空文件问题**：根目录下的`work.html`和`contact.html`是空文件，而完整内容在`public/`目录下

## 解决方案

### 1. 更新vercel.json配置
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    },
    {
      "src": "public/**/*",
      "use": "@vercel/static"
    },
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/assets/(.*)",
      "dest": "/public/assets/$1"
    },
    {
      "src": "/about",
      "dest": "/public/about.html"
    },
    {
      "src": "/work",
      "dest": "/public/work.html"
    },
    {
      "src": "/service",
      "dest": "/public/service.html"
    },
    {
      "src": "/contact",
      "dest": "/public/contact.html"
    },
    {
      "src": "/(.*\\.(css|js|png|jpg|jpeg|gif|svg|ico|webp))",
      "dest": "/public/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### 2. 修复HTML文件中的资源路径
将所有HTML文件中的相对路径改为绝对路径：
- `assets/css/app.css` → `/assets/css/app.css`
- `assets/js/app.js` → `/assets/js/app.js`
- `assets/images/logo.png` → `/assets/images/logo.png`

### 3. 修复CSS文件中的路径
在`public/assets/css/app.css`中修复以下路径：
- `background-image: /assets/images/logo.png` → `background-image: url(/assets/images/logo.png)`
- `background-image: /assets/hero-background-image.png` → `background-image: url(../hero-background-image.png)`

### 4. 路由配置修复
**关键修复**：所有页面路由现在都指向`public/`目录下的完整HTML文件：
- `/work` → `/public/work.html`（完整29KB文件，而非根目录下的1字节空文件）
- `/contact` → `/public/contact.html`（完整37KB文件，而非根目录下的1字节空文件）
- `/about` → `/public/about.html`
- `/service` → `/public/service.html`

## 部署步骤
1. 确保所有HTML文件中的资源路径都使用绝对路径（以`/`开头）
2. 更新`vercel.json`配置文件，确保所有页面路由指向正确的文件
3. 提交代码到Git仓库
4. 重新部署到Vercel

## 验证方法
部署完成后：
1. 访问 `/work` 和 `/contact` 页面，确认能正常加载
2. 检查浏览器开发者工具的网络面板，确保所有资源都能正确加载，没有404错误
3. 测试所有导航链接是否正常工作

## 注意事项
- 本地开发时相对路径可以正常工作，但在生产环境中需要使用绝对路径
- 确保`public/assets/`目录下的所有静态资源都存在
- 根目录下的空HTML文件可以删除，或者确保与`public/`目录下的文件保持同步
- 如果仍有404错误，检查文件路径是否正确 