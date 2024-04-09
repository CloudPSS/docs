---
title: 适配暗色主题
---

## 使用 `themed` 自动适配主题

导入图片时，在路径末尾添加 `#themed`；或使用组件时，添加 `className="themed"`。可自动适配暗色主题。

如：

```markdown
![自动主题图片](./intro1.png#themed)

import React from './undraw_docusaurus_react.svg';

<figure>
    <React className="themed" height="300" />
    <figcaption>自动主题图片</figcaption>
</figure>
```

效果：

![自动主题图片](./intro1.png#themed)

import React from './undraw_docusaurus_react.svg';

<figure>
    <React className="themed" height="300" />
    <figcaption>自动主题图片</figcaption>
</figure>

## 使用 `light/dark-mode-only` 适配特定主题

类似地，使用 `#light-mode-only`（`className="light-mode-only"`） 和 `#dark-mode-only`（`className="dark-mode-only"`） 可以指定图片/组件只在特定主题下显示。

如：

```markdown
import Tree from './undraw_docusaurus_tree.svg';
import Mountain from './undraw_docusaurus_mountain.svg';

<figure>
    <Tree className="light-mode-only" width="300" height="auto" />
    <Mountain className="dark-mode-only" width="300" height="auto" />
    <figcaption>自动切换图片</figcaption>
</figure>
```

效果：

import Tree from './undraw_docusaurus_tree.svg';
import Mountain from './undraw_docusaurus_mountain.svg';

<figure>
    <Tree className="light-mode-only" width="300" height="auto" />
    <Mountain className="dark-mode-only" width="300" height="auto" />
    <figcaption>自动切换图片</figcaption>
</figure>
