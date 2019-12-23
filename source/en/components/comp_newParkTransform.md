---
title: Park Transformer
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
## Basic Description
{% compsymbol newParkTransform %}

> **This component performs Park transformation and inverse Park transformation.**

## Parameter
### Configuration
| Parameter name | Remark | Type | Description |
| :-------------------------- | :--------- | :---: | :----------------------------------- |
| Name | Name of component | Text  | Enter the name of this component |
| Direction of Transformation | Direction of transformation | Select | Select Park transformation or inverse Park transformation  |
| Rotating Frame Alignment | Rotating frame alignment | Select  | Select the d-axis of coordinate transformer is aligned with phase A or delay 90 degrees |


## Pin List

| Pin name | Dimension | Description |
| :----- | :------: | :------------------------ |
| Theta  |   1×1    |                           |
| d      |   1×1    | Input pin of d-axis during Inverse Park transformation |
| q      |   1×1    | Input pin of q-axis during Inverse Park transformation |
| A      |   1×1    | Output pin of phase A during Inverse Park transformation |
| B      |   1×1    | Output pin of phase B during Inverse Park transformation |
| C      |   1×1    | Output pin of phase C during Inverse Park transformation |
| A      |   1×1    | Input pin of phase A during Park transformation |
| B      |   1×1    | Input pin of phase B during Park transformation |
| C      |   1×1    | Input pin of phase C during Park transformation |
| d      |   1×1    | Output pin of d-axis during Park transformation |
| q      |   1×1    | Output pin of q-axis during Park transformation |

## Using Instructions

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

## See Aslo

[Clark Transformer](comp_newClarkTransform.html)、[dq-αβ Coordinates Transformer](comp_newXYtoDQ.html)
