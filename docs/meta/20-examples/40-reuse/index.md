---
title: 重用内容
description: 通过 import 重用其他页面的内容
---

导入内容：

```tsx
import Hello from './_hello-comp.md';
import Comp from './_comp-comp.md';
```

import Hello from './_hello-comp.md';
import Comp from './_comp-comp.md';

以下为来自组件的内容：
```tsx
<Hello name="Alice" />
```

> <Hello name="Alice" />

使用默认参数：
```tsx
<Hello />
```

> <Hello />

传递内容：
```tsx
<Hello>
  :::note
  内容
  :::
</Hello>
```

> <Hello>
>   :::note
>   内容
>   :::
> </Hello>

组件嵌套：

```tsx
<Comp compName={frontMatter.title} />
```

> <Comp compName={frontMatter.title} />