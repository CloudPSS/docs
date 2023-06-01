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


> **该元件实现dq坐标轴到αβ坐标轴的互相转换功能。**

## 参数列表
### Configuration
| 参数名                      | 备注       | 类型  | 描述                                  |
| :-------------------------- | :--------- | :---: | :------------------------------------ |
| Name                        | 元件名称   | 文本  | 此处输dq-αβ坐标转换器的名称（可缺省） |
| Direction of Transformation | 变换方向   | 选择  | 选择变换的方向为dq-αβ或αβ-dq          |
| Rotating Frame Alignment    | 旋转轴对齐 | 选择  | 选择坐标变换的d轴与A相对齐或滞后90度  |


## 端口列表

| 端口名 | 数据维数 | 描述                     |
| :----- | :------: | :----------------------- |
| Theta  |   1×1    | 输入相角端口             |
| α      |   1×1    | αβ-dq变换时α轴的输入端口 |
| β      |   1×1    | αβ-dq变换时β轴的输入端口 |
| d      |   1×1    | αβ-dq变换时d轴的输出端口 |
| q      |   1×1    | αβ-dq变换时q轴的输出端口 |
| d      |   1×1    | dq-αβ变换时d轴的输入端口 |
| q      |   1×1    | dq-αβ变换时q轴的输入端口 |
| α      |   1×1    | dq-αβ变换时α轴的输出端口 |
| β      |   1×1    | dq-αβ变换时β轴的输出端口 |

## 使用说明

![坐标位置](./XYtoDQ1.png )

当选择**d轴与a相对齐**时，其相对位置为图所示。计算公式为：
+ **αβ到dq变换**
$$\begin{bmatrix}
U_{\mathrm d }\\ 
U_{\mathrm q }
\end{bmatrix}
=\begin{bmatrix}
\mathrm{cos}\theta  &\mathrm{sin}\theta\\ 
-\mathrm{sin}\theta &\mathrm{cos}\theta
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
\mathrm{cos}\theta  &-\mathrm{sin}\theta\\ 
\mathrm{sin}\theta &\mathrm{cos}\theta
\end{bmatrix}
\begin{bmatrix}
U_{\mathrm d }\\ 
U_{\mathrm q }
\end{bmatrix}$$

![坐标位置](./XYtoDQ2.png)

当选择**d轴滞后a相90°**时，其相对位置为图所示。计算公式为：
+ **αβ到dq变换**
$$\begin{bmatrix}
U_{\mathrm d }\\ 
U_{\mathrm q }
\end{bmatrix}
=\begin{bmatrix}
\mathrm{sin}\theta  &-\mathrm{cos}\theta\\ 
\mathrm{cos}\theta &\mathrm{sin}\theta
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
\mathrm{sin}\theta  &\mathrm{cos}\theta\\ 
-\mathrm{cos}\theta &\mathrm{sin}\theta
\end{bmatrix}
\begin{bmatrix}
U_{\mathrm d }\\ 
U_{\mathrm q }
\end{bmatrix}$$

## 相关元件

[Park变换器](../ParkTransform/index.md)、[Clark变换器](../ClarkTransform/index.md)