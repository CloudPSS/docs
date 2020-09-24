---
title: Clark变换器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3007
order: 200

classname: _newClarkTransform
symbol: newClarkTransform
---

## 基本描述

{% compsymbol newClarkTransform %}

> **该元件实现 Clark 变换和逆 Clark 变换计算。**

## 参数列表

### Configuration

| 参数名                      | 备注     | 类型 | 描述                                       |
| :-------------------------- | :------- | :--: | :----------------------------------------- |
| Name                        | 元件名称 | 文本 | 此处输入 Clark 变换器的名称（可缺省）      |
| Direction of Transformation | 变换方向 | 选择 | 选择变换的方向为 Clark 变换或逆 Clark 变换 |

## 端口列表

| 端口名 | 数据维数 | 描述                           |
| :----- | :------: | :----------------------------- |
| α      |   1×1    | 逆 Clark 变换时 α 轴的输入端口 |
| β      |   1×1    | 逆 Clark 变换时 β 轴的输入端口 |
| A      |   1×1    | 逆 Clark 变换时 A 相的输出端口 |
| B      |   1×1    | 逆 Clark 变换时 B 相的输出端口 |
| C      |   1×1    | 逆 Clark 变换时 C 相的输出端口 |
| A      |   1×1    | Clark 变换时 A 相的输入端口    |
| B      |   1×1    | Clark 变换时 B 相的输入端口    |
| C      |   1×1    | Clark 变换时 C 相的输入端口    |
| α      |   1×1    | Clark 变换时 α 轴的输出端口    |
| β      |   1×1    | Clark 变换时 β 轴的输出端口    |

## 使用说明

![坐标位置](comp_newClarkTransform/Clark.png '坐标位置')
αβ 轴为静止坐标轴，其相对位置为图所示。Park 变换及逆 Park 变换的计算公式为：

- **Clark 变换**

$$
U_{\alpha }\\
U_{\beta }
\end{bmatrix}
=\frac{2}{3}*\begin{bmatrix}
1 &-\frac{1}{2}  &-\frac{1}{2} \\
 0&\frac{\sqrt{3}}{2}  &-\frac{\sqrt{3}}{2}
\end{bmatrix}
\begin{bmatrix}
U_{a}\\
U_{b}\\
U_{c}
\end{bmatrix}$$

+ **逆Clark变换**
$$

U*{a}\\
U*{b}\\
U*{c}
\end{bmatrix}
=
\begin{bmatrix}
1 &0 \\
-\frac{1}{2}&\frac{\sqrt3}{2} \\
-\frac{1}{2}& -\frac{\sqrt3}{2}
\end{bmatrix}
\begin{bmatrix}
U*{\alpha }\\
U\_{\beta }
\end{bmatrix}\$\$

## 相关元件

[Park 变换器](comp_newParkTransform.md)、[dq-αβ 坐标转换器](comp_newXYtoDQ.md)
