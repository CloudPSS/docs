---
title: dq-αβ坐标转换器
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3007
order: 300

classname: _newXYtoDQ
symbol: newXYtoDQ
---

## 基本描述

{% compsymbol newXYtoDQ %}

> **该元件实现 dq 坐标轴到 αβ 坐标轴的互相转换功能。**

## 参数列表

### Configuration

| 参数名                      | 备注       | 类型 | 描述                                       |
| :-------------------------- | :--------- | :--: | :----------------------------------------- |
| Name                        | 元件名称   | 文本 | 此处输 dq-αβ 坐标转换器的名称（可缺省）    |
| Direction of Transformation | 变换方向   | 选择 | 选择变换的方向为 dq-αβ 或 αβ-dq            |
| Rotating Frame Alignment    | 旋转轴对齐 | 选择 | 选择坐标变换的 d 轴与 A 相对齐或滞后 90 度 |

## 端口列表

| 端口名 | 数据维数 | 描述                        |
| :----- | :------: | :-------------------------- |
| Theta  |   1×1    | 输入相角端口                |
| α      |   1×1    | αβ-dq 变换时 α 轴的输入端口 |
| β      |   1×1    | αβ-dq 变换时 β 轴的输入端口 |
| d      |   1×1    | αβ-dq 变换时 d 轴的输出端口 |
| q      |   1×1    | αβ-dq 变换时 q 轴的输出端口 |
| d      |   1×1    | dq-αβ 变换时 d 轴的输入端口 |
| q      |   1×1    | dq-αβ 变换时 q 轴的输入端口 |
| α      |   1×1    | dq-αβ 变换时 α 轴的输出端口 |
| β      |   1×1    | dq-αβ 变换时 β 轴的输出端口 |

## 使用说明

![坐标位置](comp_newXYtoDQ/t1.png '坐标位置')
当选择**d 轴与 a 相对齐**时，其相对位置为图所示。计算公式为：

- **αβ 到 dq 变换**

$$
U_{d }\\
U_{q }
\end{bmatrix}
=\begin{bmatrix}
cos\theta  &sin\theta\\
-sin\theta &cos\theta
\end{bmatrix}
\begin{bmatrix}
U_{\alpha}\\
U_{\beta}
\end{bmatrix}$$
+ **dq到αβ变换**
$$

U*{\alpha}\\
U*{\beta}
\end{bmatrix}
=\begin{bmatrix}
cos\theta &-sin\theta\\
sin\theta &cos\theta
\end{bmatrix}
\begin{bmatrix}
U*{d }\\
U*{q }
\end{bmatrix}\$\$

![坐标位置](comp_newXYtoDQ/t2.png '坐标位置')
当选择**d 轴滞后 a 相 90°**时，其相对位置为图所示。计算公式为：

- **αβ 到 dq 变换**

$$
U_{d }\\
U_{q }
\end{bmatrix}
=\begin{bmatrix}
sin\theta  &-cos\theta\\
cos\theta &sin\theta
\end{bmatrix}
\begin{bmatrix}
U_{\alpha}\\
U_{\beta}
\end{bmatrix}$$
+ **dq到αβ变换**
$$

U*{\alpha}\\
U*{\beta}
\end{bmatrix}
=\begin{bmatrix}
sin\theta &cos\theta\\
-cos\theta &sin\theta
\end{bmatrix}
\begin{bmatrix}
U*{d }\\
U*{q }
\end{bmatrix}\$\$

## 相关元件

[Park 变换器](comp_newParkTransform.html)、[Clark 变换器](comp_newClarkTransform.html)
