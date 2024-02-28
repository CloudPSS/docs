---
title: 重用内容
sidebar_position: 300
---


可以将 MarkDown 文件内容导入。导入声明上下必须各有一行空白行。

对于仅用于重用内容的 MarkDown 文件，可以以 `_` 作为文件名前缀，将文件定义为组件。

如：

```jsx title="_hello-comp.md"
这是一个 MarkDown 组件。

你好，{props.name ?? "用户"}！
```

```jsx title="some-doc.md"
import Hello from './_hello-comp.md';

<Hello name="Alice" />
```

结果为：

这是一个 MarkDown 组件。

你好，Alice！

效果参考[重用内容](../../examples/reuse/index.md)。