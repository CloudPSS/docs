---
title: dq-αβ Coordinates Transformer
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
## Basic Description
{% compsymbol newXYtoDQ %}

> **This component performs transformation from αβ to dq, or dq to αβ.**

## Parameter
### Configuration
| Parameter | Remark | Type | Description |
| :-------------------------- | :--------- | :---: | :------------------------------------ |
| Name | Name of component | Text  | Enter the name of this component |
| Direction of Transformation | Direction of transformation | Select | Select dq-αβ transformation or αβ-dq transformation |
| Rotating Frame Alignment | Rotating frame alignment | Select | Select the d-axis is aligned with phase A or delay 90 degrees |


## Pin List

| Pin name | Dimension | Description |
| :----- | :------: | :----------------------- |
| Theta  |   1×1    | Input pin of angle |
| α      |   1×1    | Input pin of α-axis during αβ-dq transformation |
| β      |   1×1    | Input pin of β-axis during αβ-dq transformation |
| d      |   1×1    | Output pin of d-axis during αβ-dq transformation |
| q      |   1×1    | Output pin of q-axis during αβ-dq transformation |
| d      |   1×1    | Input pin of d-axis during dq-αβ transformation |
| q      |   1×1    | Input pin of q-axis during dq-αβ transformation |
| α      |   1×1    | Output pin of α-axis during dq-αβ transformation |
| β      |   1×1    | Output pin of β-axis during dq-αβ transformation |

## Using Instructions

![坐标位置](comp_newXYtoDQ/t1.png "坐标位置")
当选择**d轴与a相对齐**时，其相对位置为图所示。计算公式为：
+ **αβ到dq变换**
$$\begin{bmatrix}
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
$$\begin{bmatrix}
U_{\alpha}\\ 
U_{\beta} 
\end{bmatrix}
=\begin{bmatrix}
cos\theta  &-sin\theta\\ 
sin\theta &cos\theta
\end{bmatrix}
\begin{bmatrix}
U_{d }\\ 
U_{q }
\end{bmatrix}$$

![坐标位置](comp_newXYtoDQ/t2.png "坐标位置")
当选择**d轴滞后a相90°**时，其相对位置为图所示。计算公式为：
+ **αβ到dq变换**
$$\begin{bmatrix}
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
$$\begin{bmatrix}
U_{\alpha}\\ 
U_{\beta} 
\end{bmatrix}
=\begin{bmatrix}
sin\theta  &cos\theta\\ 
-cos\theta &sin\theta
\end{bmatrix}
\begin{bmatrix}
U_{d }\\ 
U_{q }
\end{bmatrix}$$

## See Also

[Park Transformer](comp_newParkTransform.html)、[Clark Transformer](comp_newClarkTransform.html)
