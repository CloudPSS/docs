---
title: 潮流计算仿真原理介绍
order: 100
author: AP
---

CloudPSS SimStudio提供了潮流计算功能，可以依据网络参数进行潮流计算，并将计算结果写入元件启动参数，实现稳态启动。

## 基本原理

CloudPSS采用 **牛顿一拉夫逊法(Newton-Raphson法)** 进行潮流计算。牛顿-拉夫逊法是解非线性方程有效的方法，它将非线性方程的求解变成反复的求解线性方程，逐步接近非线性方程解的过程，通常称为逐次线性化过程。  

用牛顿-拉夫逊法求解潮流问题的步骤如下：

::: info

（1）**计算功率不平衡列向量**

$$\Delta S = {[\Delta P,\Delta Q]^T}{\rm{ = }}{[\Delta {P_1},...,\Delta {P_{{\rm{n - }}1}},{\kern 1pt} \Delta {Q_1},...,\Delta {Q_m},]^T}{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (1)$$

式（1）表示了一个有n个母线的系统的功率不平衡矩阵，其中有$m$个PQ母线，$n-m-1$个PV母线，1个平衡母线。   

PQ母线的功率不平衡量为该节点的功率给定值与用当前电压计算出来的实际功率的偏差，可表示为：

$$\left\{ \begin{array}{l}
\Delta {P_i} = {P_i} - \left| {{V_i}} \right|\sum\limits_{j = 1}^n {\left| {{V_j}} \right|} ({G_{ij}}\cos {\theta _{ij}} + {B_{ij}}\sin {\theta _{ij}})\\
\Delta {Q_i} = {Q_i} - \left| {{V_i}} \right|\sum\limits_{j = 1}^n {\left| {{V_j}} \right|({G_{ij}}\sin {\theta _{ij}} - {B_{ij}}\cos {\theta _{ij}})} 
\end{array} \right.{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (2)$$

其中，$i=1,2,...,m.$

PV节点电压幅值给定，不作为变量。同时，该点无法预先给定无功功率。PV节点的无功功率不平衡量不作为约束条件，因此，在迭代过程中只列出PV节点的**有功功率偏差方程。**

$$\Delta {P_i} = {P_i} - \left| {{V_i}} \right|\sum\limits_{j = 1}^n {\left| {{V_j}} \right|} ({G_{ij}}\cos {\theta _{ij}} + {B_{ij}}\sin {\theta _{ij}}){\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (3)$$

其中，$i=1,2,...,n-m-1.$

:::

::: info

（2）**计算雅可比矩阵**

$$J=\begin{bmatrix}
H & N\\ 
J & L\\
\end{bmatrix} {\kern 1pt} (4)$$

雅可比矩阵的元素如下所示:

**非对角元素：**

$$\left. \begin{array}{l}
{H_{ij}} =  - {V_i}{V_j}({G_{ij}}\sin {\theta _{ij}} - {B_{ij}}\sin {\theta _{ij}})\\
{N_{ij}} =  - {V_i}{V_j}({G_{ij}}\cos {\theta _{ij}} + {B_{ij}}\sin {\theta _{ij}})\\
{J_{ij}} = {V_i}{V_j}({G_{ij}}\cos {\theta _{ij}} + {B_{ij}}\sin {\theta _{ij}})\\
{L_{ij}} =  - {V_i}{V_j}({G_{ij}}\sin {\theta _{ij}} - {B_{ij}}\cos {\theta _{ij}})
\end{array} \right\}{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (5)$$

**对角元素：**

$$\left. \begin{array}{l}
{H_{ii}} = {Q_{\rm{i}}} + {B_{ii}}V_i^2\\
{N_{ii}} =  - {P_{\rm{i}}} - {G_{ii}}V_i^2\\
{J_{ii}} =  - {P_{\rm{i}}} + {G_{ii}}V_i^2\\
{L_{ii}} =  - {Q_{\rm{i}}} + {B_{ii}}V_i^2
\end{array} \right\}{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (6)$$

:::

::: info

（3）**基于牛顿-拉夫逊的配电网三相潮流算法可以如下的表达式：**

$$
\begin{bmatrix}
{\Delta P}\\ 
{\Delta Q}\\
\end{bmatrix}=\begin{bmatrix}
H & N\\ 
J & L\\
\end{bmatrix}\begin{bmatrix}
{\Delta \theta }\\
{{V^{ - 1}}\Delta V}
\end{bmatrix} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (7)$$

其中$\Delta V$为节点电压幅值的修正量：

由上式可求得第k+1次迭代的修正量：

$$
\begin{bmatrix}
{{\theta ^{(k + 1)}}}\\
{{V^{(k + 1)}}}
\end{bmatrix}=\begin{bmatrix}
{{\theta ^{(k)}}}\\
{{V^{(k)}}}
\end{bmatrix}\begin{bmatrix}
{\Delta {\theta ^{(k + 1)}}}\\
{\Delta {V^{(k + 1)}}}
\end{bmatrix} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (8)$$


这样反复迭代计算，直至所有节点$\Delta V < \varepsilon$和$\Delta \theta<n$ 为止。

:::

::: info

基于牛顿-拉夫逊的潮流算法的基本步骤可以总结如下：

（1）形成节点导纳矩阵；  
（2）给各节点电压相角赋初值。	  
（3）给各节点电压相角代入式2、式3，求出修正方程式的常数项向量。  
（4）将节点电压相角带入式5、式6，求出雅可比矩阵元素。  
（5）求解方程式7，求节点各相电压相角修正向量。  
（6）根据式8，求取节点电压的新值。  
（7）检查是否收敛，如不收敛，则以各节点电压的新值作为初值自第3步重新开始进行下一次迭代，否则转入下一步。  
（8）计算支路功率分布，PV节点无功功率和平衡节点注入功率。  
:::



