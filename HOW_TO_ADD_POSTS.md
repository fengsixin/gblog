# 如何添加新文章

要向您的博客添加新文章，您需要在 `src/content/posts` 目录下创建新的 Markdown (`.md`) 或 MDX (`.mdx`) 文件。

## 文章前言格式

每篇文章都需要在开头包含以下 YAML 前言：

```yaml
---
title: "文章标题"
description: "文章描述，在列表页显示"
banner: "/images/your-banner.jpg"  # 文章横幅图片
pubDate: "2025-10-09"             # 发布日期
category: "技术"                  # 分类，需要在 src/content/categories 中存在
tags: ["JavaScript", "前端"]        # 标签列表
toc: true                        # 是否显示目录
selected: true                   # 是否在精选文章中显示（可选）
---
```

## 分类设置

您还需要在 `src/content/categories` 目录下创建或编辑分类文件，例如 `技术.md`:

```yaml
---
title: "技术"
description: "技术相关的文章"
---
```

## 图片处理

- 您可以将图片放在 `public/images` 目录下
- 或者在文章中使用外部图片链接