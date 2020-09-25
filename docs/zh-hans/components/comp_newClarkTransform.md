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

> **该元件实现Clark变换和逆Clark变换计算。**

## 参数列表
### Configuration
| 参数名                      | 备注     | 类型  | 描述                                   |
| :-------------------------- | :------- | :---: | :------------------------------------- |
| Name                        | 元件名称 | 文本  | 此处输入Clark变换器的名称（可缺省）    |
| Direction of Transformation | 变换方向 | 选择  | 选择变换的方向为Clark变换或逆Clark变换 |


## 端口列表

| 端口名 | 数据维数 | 描述                       |
| :----- | :------: | :------------------------- |
| α      |   1×1    | 逆Clark变换时α轴的输入端口 |
| β      |   1×1    | 逆Clark变换时β轴的输入端口 |
| A      |   1×1    | 逆Clark变换时A相的输出端口 |
| B      |   1×1    | 逆Clark变换时B相的输出端口 |
| C      |   1×1    | 逆Clark变换时C相的输出端口 |
| A      |   1×1    | Clark变换时A相的输入端口   |
| B      |   1×1    | Clark变换时B相的输入端口   |
| C      |   1×1    | Clark变换时C相的输入端口   |
| α      |   1×1    | Clark变换时α轴的输出端口   |
| β      |   1×1    | Clark变换时β轴的输出端口   |

## 使用说明

![坐标位置](comp_newClarkTransform/Clark.png "坐标位置")
αβ轴为静止坐标轴，其相对位置为图所示。Park变换及逆Park变换的计算公式为：
 + **Clark变换**
$$\begin{bmatrix}
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
$$\begin{bmatrix}
U_{a}\\ 
U_{b}\\ 
U_{c}
\end{bmatrix}
=
\begin{bmatrix}
1 &0 \\ 
 -\frac{1}{2}&\frac{\sqrt3}{2} \\ 
 -\frac{1}{2}& -\frac{\sqrt3}{2}
\end{bmatrix}
\begin{bmatrix}
U_{\alpha }\\ 
U_{\beta }
\end{bmatrix}$$

## 相关元件

[Park变换器](comp_newParkTransform.md)、[dq-αβ坐标转换器](comp_newXYtoDQ.md)
