---
title: 文档块
order: 20
---

## 引用

如：

```md quote
> Level1
>
> > Level2
>
>  <!-- 退出层级需要一行空行-->
>
> Level1
```

效果：

> Level1
>
> > Level2
>
>  <!-- 退出层级需要一行空行-->
>
> Level1

:::info
同理，引用结束需要一行空行。
:::

## 定义

如：

```tex deflist
有效值
: 在相同的电阻上分别通过直流电流和交流电流，经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
  $$ G_{rms} = \sqrt{\frac{1}{T} \int_{-\frac{T}{2} } ^{\frac{T}{2} }{ g(t)^{2} \operatorname{d}\! t } } $$
: 正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2}}$ ，约 $0.707$ 倍。

另一个定义
~ 也可以使用波浪线。
  通过缩进确定定义的范围。
~ 另起一段。
  ...
```

效果：

有效值
: 在相同的电阻上分别通过直流电流和交流电流，经过一个交流周期的时间，如果它们在电阻上所消耗的电能相等的话，则把该直流电流（电压）的大小作为交流电流（电压）的有效值。
  $$ G_{rms} = \sqrt{\frac{1}{T} \int_{-\frac{T}{2} } ^{\frac{T}{2} }{ g(t)^{2} \operatorname{d}\! t } } $$
: 正弦电流（电压）的有效值等于其最大值（幅值）的 $\frac{1}{\sqrt{2} }$ ，约 $0.707$ 倍。

另一个定义
~ 也可以使用波浪线。
通过缩进确定定义的范围。
~ 另起一段。
...

:::info
定义的前后需要空行分隔。
:::

## 摘要

显示一个可以折叠的文档块。

```md details
:::summary 摘要标题
内容
:::
```

效果：

:::summary 摘要标题
内容
:::

## 容器

显示一个特定样式的容器。

如：

```md pullquote
:::tip
tip
:::

:::question
question
:::

:::success
success
:::

:::fail 自定义[内容](#)
fail
:::

:::warning
warning
:::

:::error
error
:::

::::info
info

:::info
info 2
:::
::::
```

效果：

:::tip
tip
:::

:::question
question
:::

:::success
success
:::

:::fail 自定义[内容](#)
fail
:::

:::warning
warning
:::

:::error
error
:::

::::info
info

:::info
info 2
:::
::::
