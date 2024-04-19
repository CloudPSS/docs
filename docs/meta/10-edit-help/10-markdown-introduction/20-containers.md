---
title: 文档块
---

## 引用

如：

```md quote
> Level1
>
> > Level2
>
> {/* 退出层级需要一行空行 */}
>
> Level1
```

效果：

> Level1
>
> > Level2
>
> {/* 退出层级需要一行空行 */}
>
> Level1

:::info
同理，引用结束需要一行空行。
:::

## 定义

如：

```md
有效值

: 在相同的电阻上分别通过直流电流和交流电流，
  经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，
  则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
  $$
  G_{rms} = \sqrt{\frac{1}{T} \int_{-\frac{T}{2} } ^{\frac{T}{2} }{ g(t)^{2} \operatorname{d}\! t } }
  $$
  正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2}}$ ，
  约 $0.707$ 倍。
```

效果：

有效值

: 在相同的电阻上分别通过直流电流和交流电流，
  经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，
  则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
  $$
  G_{rms} = \sqrt{\frac{1}{T} \int_{-\frac{T}{2} } ^{\frac{T}{2} }{ g(t)^{2} \operatorname{d}\! t } }
  $$
  正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2}}$ ，
  约 $0.707$ 倍。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="多个定义" label="多个定义">

```md
Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.
```

Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

</TabItem>
<TabItem value="多条义项" label="多条义项">

```md
Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.
:   An American computer company.
```

Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.
:   An American computer company.

</TabItem>
<TabItem value="多个术语" label="多个术语">
```md
Term 1
Term 2
:   Definition a
```

Term 1
Term 2
:   Definition a
</TabItem>
<TabItem value="复杂定义" label="复杂定义">

在术语和定义间添加空行，以使用多行的复杂定义。

```md
Apple

:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

:   An American computer company.

Orange

:    The fruit of an evergreen tree of the genus Citrus.
```

Apple

:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

:   An American computer company.

Orange

:    The fruit of an evergreen tree of the genus Citrus.
</TabItem>
</Tabs>

## 摘要

```md
:::summary[摘要*标题*]
内容
:::
```

:::summary[摘要*标题*]
内容
:::

## 容器

显示一个特定样式的容器。

如：

```md pullquote
:::note
note
:::

:::tip
tip
:::

:::caution
caution
:::

:::warning
warning
:::

:::danger
danger
:::

::::info
info

:::info[Your Title **with** some _Markdown_ `syntax`!]
info 2
:::
::::
```

效果：

:::note
note
:::

:::tip
tip
:::

:::caution
caution
:::

:::warning
warning
:::

:::danger
danger
:::

::::info
info

:::info[Your Title **with** some _Markdown_ `syntax`!]
info 2
:::
::::
