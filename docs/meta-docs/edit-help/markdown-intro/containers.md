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

## 详情

```md
<details>
<summary>Toggle me!</summary>
<div>
This is the **detailed** content
$$
X = 1
$$   
<details>
<summary>
## Nested toggle! Some surprise inside...
</summary>
<div>
😲😲😲😲😲
</div>
</details>
</div>
</details>
```

<details>
<summary>Toggle me!</summary>
<div>
This is the **detailed** content
$$
X = 1
$$   
<details>
<summary>
## Nested toggle! Some surprise inside...
</summary>
<div>
😲😲😲😲😲
</div>
</details>
</div>
</details>

## 容器

显示一个特定样式的容器。

如：

```md pullquote
:::tip
tip
:::

:::note[Your Title **with** some _Markdown_ `syntax`!]
note
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

:::info
info 2
:::
::::
```

效果：

:::tip
tip
:::

:::note[Your Title **with** some _Markdown_ `syntax`!]
note
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

:::info
info 2
:::
::::
