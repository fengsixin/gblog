# 图标和图像替换指南

要替换博客中的图标和图像，请按照以下说明操作：

## 需要替换的图像文件

1. **brand_logo.jpeg** - 品牌标志图像，用于Open Graph卡片
   - 尺寸：建议 1200x600 像素
   - 位置：src/images/brand_logo.jpeg

2. **favicon_icon.png** - 网站图标
   - 尺寸：180x180 像素
   - 位置：src/images/favicon_icon.png

3. **favicon_icon.svg** - SVG格式的网站图标
   - 位置：src/images/favicon_icon.svg

4. **home.png** - 首页显示的图像
   - 位置：src/images/home.png

5. **default_home_og.png** - 默认的Open Graph图像
   - 位置：src/images/default_home_og.png

## 替换步骤

1. 准备好相应的图像文件
2. 将新图像文件复制到 `src/images/` 目录，并使用相同的文件名
3. 重新启动开发服务器以查看更改
4. 运行 `npm run build` 以确保构建正确

## 图像要求

- 使用适当尺寸的图像以优化性能
- PNG和JPEG格式应压缩以减小文件大小
- SVG格式可提供更好的缩放效果