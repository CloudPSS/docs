---
title: Park变换器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3007
order: 100

classname: _newParkTransform
symbol: newParkTransform
---
## 基本描述
{% compsymbol newParkTransform %}

> **该元件实现Park变换和逆Park变换计算。**

## 参数列表
### Configuration
| 参数名                      | 备注       | 类型  | 描述                                 |
| :-------------------------- | :--------- | :---: | :----------------------------------- |
| Name                        | 元件名称   | 文本  | 此处输入Park变换器的名称（可缺省）   |
| Direction of Transformation | 变换方向   | 选择  | 选择变换的方向为Park变换或Park变换   |
| Rotating Frame Alignment    | 旋转轴对齐 | 选择  | 选择坐标变换的d轴与A相对齐或滞后90度 |


## 端口列表

| 端口名 | 数据维数 | 描述                      |
| :----- | :------: | :------------------------ |
| Theta  |   1×1    |                           |
| d      |   1×1    | 逆Park变换时d轴的输入端口 |
| q      |   1×1    | 逆Park变换时q轴的输入端口 |
| A      |   1×1    | 逆Park变换时a相的输出端口 |
| B      |   1×1    | 逆Park变换时b相的输出端口 |
| C      |   1×1    | 逆Park变换时c相的输出端口 |
| A      |   1×1    | Park变换时a相的输入端口   |
| B      |   1×1    | Park变换时b相的输入端口   |
| C      |   1×1    | Park变换时c相的输入端口   |
| d      |   1×1    | Park变换时d轴相的输出端口 |
| q      |   自动   | Park变换时q轴的输出端口   |

## 使用说明

![坐标位置](comp_newParkTransform/park.png "坐标位置")
当选择**d轴与a相对齐**时，Park变换及逆Park变换的计算公式为：
+ **Park变换**
$$\begin{bmatrix}
U_{d }\\ 
U_{q}\\
U_{0 }
\end{bmatrix}
=\frac{2}{3}*\begin{bmatrix}
cos\theta &cos(\theta -2\pi/3) &cos(\theta +2\pi/3) \\ 
 -sin(\theta )&-sin(\theta -2\pi/3) &-sin(\theta +2\pi/3)\\
 1/2& 1/2& 1/2
\end{bmatrix}
\begin{bmatrix}
U_{a}\\ 
U_{b}\\ 
U_{c}
\end{bmatrix}$$
+ **逆Park变换**
$$\begin{bmatrix}
U_{a }\\ 
U_{b}\\
U_{c }
\end{bmatrix}
=\begin{bmatrix}
cos\theta &  -sin(\theta )&1 \\ 
cos(\theta -2\pi/3)&-sin(\theta -2\pi/3) &1\\
cos(\theta +2\pi/3) &-sin(\theta +2\pi/3) & 1
\end{bmatrix}
\begin{bmatrix}
U_{d}\\ 
U_{q}\\ 
U_{0}
\end{bmatrix}$$
{% pullquote tip %}
**注意**：传统Park变换中，d轴超前q轴。dq轴位置如上图**红线**所示。PSCAD中采用了q轴超前d轴，如上图**蓝线**所示。因此相同输入下，本元件得出的q轴分量与PSCAD的结果正负相反。
{% endpullquote %}

![坐标位置](comp_newParkTransform/park1.png "坐标位置")
当选择**d轴滞后a相90°**时，dq轴位置如上图**绿线**所示。Park变换及逆Park变换的计算公式为：
+ **Park变换**
$$\begin{bmatrix}
U_{d }\\ 
U_{q}\\
U_{0 }
\end{bmatrix}
=\frac{2}{3}*\begin{bmatrix}
sin(\theta )&sin(\theta -2\pi/3) &sin(\theta +2\pi/3)\\
cos\theta &cos(\theta -2\pi/3) &cos(\theta +2\pi/3) \\ 
 1/2& 1/2& 1/2
\end{bmatrix}
\begin{bmatrix}
U_{a}\\ 
U_{b}\\ 
U_{c}
\end{bmatrix}$$
+ **逆Park变换**
$$\begin{bmatrix}
U_{a }\\ 
U_{b}\\
U_{c }
\end{bmatrix}
=\begin{bmatrix}
sin(\theta )&cos\theta   &1 \\ 
sin(\theta -2\pi/3) &cos(\theta -2\pi/3)&1\\
sin(\theta +2\pi/3) &cos(\theta +2\pi/3) & 1
\end{bmatrix}
\begin{bmatrix}
U_{d}\\ 
U_{q}\\ 
U_{0}
\end{bmatrix}$$

## 相关元件

[Clark变换器](/components/comp_newClarkTransform.html)、[dq-αβ坐标转换器](/components/comp_newXYtoDQ.html)
