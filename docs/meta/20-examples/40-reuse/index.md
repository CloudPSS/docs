---
title: 重用内容
description: 通过 import 重用其他页面的内容
---

导入并使用组件：

```tsx
import Comp from './_comp.md';

<Comp name="XXX" ieslab dslab >

![普通模型项目的接口标签页](./2.png)

![元件项目的接口标签页](./1.png)

![元件项目](./3.png)

</Comp>
```

以下为来自组件的内容：

---

import Comp from './_comp.md';

<Comp name="XXX" ieslab dslab >

![普通模型项目的接口标签页](./2.png)

![元件项目的接口标签页](./1.png)

![元件项目](./3.png)

</Comp>
