# 评论系统和分析工具配置指南

## 评论系统（Giscus）

本博客模板使用 Giscus 作为评论系统。要启用它：

1. 确保您的 GitHub 仓库已启用 Discussions 功能
2. 访问 https://giscus.app/ 并配置您的设置
3. 在 `src/config.ts` 中更新 `Comment.giscus` 配置：
   - `repo`: GitHub 仓库名称 (格式: "username/repo")
   - `repoId`: 仓库 ID（从 Giscus 配置页面获取）
   - `category`: Discussion 类别名称
   - `categoryId`: 类别 ID（从 Giscus 配置页面获取）

4. 设置环境变量：
   ```bash
   COMMENT_ENABLE=true
   ```

## Google Analytics

1. 在 Google Analytics 中创建属性
2. 获取您的测量 ID (格式: G-XXXXXXXXXX)
3. 在 `src/config.ts` 中更新 `GoogleAnalytics` 配置：
   - `enable`: 设置为 true
   - `id`: 设置为您的测量 ID

4. 或者通过环境变量设置：
   ```bash
   GOOGLE_ANALYTICS_ID=your-ga-id
   ```

## Umami Analytics

1. 设置 Umami 服务（自托管或使用 Umami Cloud）
2. 在 `src/config.ts` 中更新 `UmamiAnalytics` 配置：
   - `enable`: 设置为 true
   - `dataWebsiteID`: 您的网站 ID

## 环境变量配置

您也可以通过环境变量来配置这些服务。创建 `.env` 文件：

```env
# 启用评论系统
COMMENT_ENABLE=true

# 启用 Google Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# 启用 Umami Analytics
UMAMI_ENABLE=true
UMAMI_WEBSITE_ID=your-website-id
UMAMI_HOST_URL=https://your-umami-instance.com
```

注意：在部署到生产环境时，确保设置这些环境变量。