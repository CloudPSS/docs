---
title: 三相不对称潮流计算原理介绍
order: 100
author: AP
---

CloudPSS SimStudio提供了配电网三相不对称潮流计算功能，可以依据网络参数进行三相不对称潮流计算，并将计算结果写入元件启动参数，实现稳态启动。

## 配电网三相不对称元件建模

1. **传输线模型**

![传输线模型](./传输线模型.png "传输线模型" =x240)

采用 **集中线路参数模型**，其中线路两侧电压和电流满足式（1）

$${{\bf{I}}_{6 \times 6}}=\begin{bmatrix}
{{\bf{Z}}_{3 \times 3}^{ - 1} + {\mathop{\rm j}\nolimits} \frac{{{\omega _k}}}{2} \times {{\bf{C}}_{3 \times 3}}}&{ - {\bf{Z}}_{3 \times 3}^{ - 1}}\\
{ - {\bf{Z}}_{3 \times 3}^{ - 1}} &{{\bf{Z}}_{3 \times 3}^{ - 1} + {\mathop{\rm j}\nolimits} \frac{{{\omega _k}}}{2} \times {{\bf{C}}_{3 \times 3}}}
\end{bmatrix}
{{\bf{V}}_{6 \times 6}}
{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (1)$$

式中，$I_{6x6}$是传输线两侧电流，为6x1阶矩阵；$V_{6x1}$是传输线两侧电压，为为6x1阶矩阵；$w_k$是系统额定角频率；线路阻抗矩阵$Z_{3x3}$和电容矩阵$C_{3x3}$如下所示：

$$
Z_{3\times3}=\begin{bmatrix}
{{R_{aa}}} & {{R_{ab}}}&{{R_{ac}}}\\ 
{{R_{ab}}} & {{R_{bb}}}&{{R_{bc}}}\\
{{R_{ac}}} & {{R_{bc}}}&{{R_{cc}}}\\ 
\end{bmatrix}+\begin{bmatrix}
{{X_{aa}}} & {{X_{ab}}}&{{X_{ac}}}\\ 
{{X_{ab}}} & {{X_{bb}}}&{{X_{bc}}}\\
{{X_{ac}}} & {{X_{bc}}}&{{X_{cc}}}\\ 
\end{bmatrix} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (2)$$

式中：$R_{axa}$和$X_{axa}$是线路自电阻和自电抗；$R_{axb}$和$X_{axb}$是线路互电阻和互电抗。

$$
C_{3\times3}=\begin{bmatrix}
{{C_{aa}}}+{C_{ab}}+{C_{ac}} & {{-C_{ab}}}&{{-C_{ac}}}\\ 
{{-C_{ab}}} &{{C_{bb}}}+{C_{ab}}+{C_{bc}}&{{-R_{bc}}}\\
{{-C_{ac}}} & {{-C_{bc}}}&{{C_{cc}}}+{C_{ac}}+{C_{bc}}\\ 
\end{bmatrix} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (3)$$

式中:$C_{axa}$是线路自电容； 是$C_{axb}$线路互电容。

2. **变压器模型**

以Y-D型连接方式变压器为例，对变压器原理进行介绍，该类型变压器拓扑结构如图所示:

![变压器模型](./变压器模型.png "变压器模型" =x400)

变压器两侧电流和电压的关系如下所示：

$$
\begin{bmatrix}
{{I_{1}}}\\ 
{{I_{2}}}\\ 
{{I_{3}}}\\ 
{{I_{4}}}\\ 
{{I_{5}}}\\ 
{{I_{6}}}\\ 
{{I_{7}}}\\ 
\end{bmatrix}=Y_{prim}*\begin{bmatrix}
{{V_{1}}}\\ 
{{V_{2}}}\\ 
{{V_{3}}}\\ 
{{V_{4}}}\\ 
{{V_{5}}}\\ 
{{V_{6}}}\\ 
{{V_{7}}}\\ 
\end{bmatrix} (4)$$

式中：$Y_prim$是变压器的节点导纳矩阵，由下式计算：

$${Y_{prim}}{\rm{ = }}A*N*B*Z_B^{ - 1}*{B^T}*{N^T}*{A^T} (5)$$

式中：$Z_B$是变压器的短路阻抗矩阵，是3x3矩阵。$B$表示等效阻抗电流与$1V$等效变压器两侧电流的关系矩阵，是$6x3$矩阵。$N$表示变压器两侧电流与$1V$等效变压器模型的关系矩阵，是$4x2$矩阵。矩阵$A$与变压器接线方式有关，表示节点电流与支路电流关系的矩阵。

1. **负荷模型**
以Y型连接恒功率负荷为例，该式的表达式如式（6）所示：

$$
\begin{bmatrix}
{{S_{La}}}\\ 
{{S_{Lb}}}\\ 
{{S_{Lc}}}\\ 
\end{bmatrix}=\begin{bmatrix}
{{P_{La}}+jQ_{La}}\\ 
{{P_{Lb}}+jQ_{Lb}}\\ 
{{P_{Lc}}+jQ_{Lc}}\\ 
\end{bmatrix} (6)$$

式中： $P_La$是负荷的有功功率； $Q_La$是负荷的无功功率。

## 基本原理

CloudPSS采用 **三相牛顿法** 进行潮流计算。它将非线性方程的求解变成反复的求解线性方程，逐步接近非线性方程解的过程，通常称为逐次线性化过程。  

用三相牛顿法求解潮流问题的步骤如下：

（1）**列写功率注入方程**
配电网的节点电压方程可以表示如下：

$$\mathbf{V}_{nodal}^{a,b,c}={{\left[ {{\mathbf{Y}}_{system}} \right]}^{-1}}\times \mathbf{I}_{nodal}^{a,b,c} (7)$$

式中：${V}_{nodal}^{a,b,c}$是节点电压；${I}_{nodal}^{a,b,c}$是节点注入电流；${Y}_{system}$是节点导纳矩阵。
对于节点k，三相注入视在功率可以表示如下：

$$\mathbf{S}_{k}^{a,b,c}=\left[ \mathbf{V}_{k}^{a,b,c} \right]\times {{\left[ \mathbf{I}_{k,inj}^{a,b,c} \right]}^{conj}} (8)$$

节点k的三相注入电流${I}_{k,inj}^{a,b,c}$ 表示与节点k相连的支路电流总和，如下所示：

$$I_{k,inj}^{a,b,c}=\sum\limits_{j=1.j\ne i}^{nbr}{I_{kj}^{a,b,c}} (9)$$

将式（8）和式（9）带入式（7）可以求得节点注入功率：

$$P_{k}^{m}=\left| V_{k}^{m} \right|\sum\limits_{j=1}^{n}{\sum\limits_{m=a}^{c}{\left| V_{j}^{m} \right|}(G_{kj}^{{{m}_{k}}{{m}_{j}}}\cos \theta _{kj}^{{{m}_{k}}{{m}_{j}}}+B_{kj}^{{{m}_{k}}{{m}_{j}}}\sin \theta _{kj}^{{{m}_{k}}{{m}_{j}}})\ \ \ \ } (10)$$

$$Q_{k}^{m}=\left| V_{k}^{m} \right|\sum\limits_{j=1}^{n}{\sum\limits_{m=a}^{c}{\left| V_{j}^{m} \right|}(G_{kj}^{{{m}_{k}}{{m}_{j}}}\sin \theta _{kj}^{{{m}_{k}}{{m}_{j}}}-B_{kj}^{{{m}_{k}}{{m}_{j}}}\cos \theta _{kj}^{{{m}_{k}}{{m}_{j}}})\ \ \ \ }  (11)$$

其中，$G_{kj}^{{{m}_{k}}{{m}_{j}}}$ 和$B_{kj}^{{{m}_{k}}{{m}_{j}}}$是节点j和节点k间的电导和电纳；$\theta_{kj}^{{{m}_{k}}{{m}_{j}}}$是节点j和节点k间的相角差。$m$表示相位。

（2）**计算功率不平衡列向量**

1.计算功率偏差列向量

$$\Delta S = {[\Delta P,\Delta Q]^T}{\rm{ = }}\begin{array}{l}
[\Delta P_{\rm{1}}^{\rm{a}},\Delta P_{\rm{1}}^b,\Delta P_{\rm{1}}^c,...,\Delta P_{n - 1}^{\rm{a}},\Delta P_{n - 1}^b,\Delta P_{n - 1}^c,\\
{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} \Delta Q_{\rm{1}}^{\rm{a}},\Delta Q_{\rm{1}}^b,\Delta Q_{\rm{1}}^c,...,\Delta Q_{\rm{m}}^{\rm{a}},\Delta Q_m^b,\Delta Q_m^c,{]^T}
\end{array} (12)$$

$PQ$母线的功率不平衡量为该节点的功率给定值与用当前电压计算出来的实际功率的偏差，可表示为

$$\Delta P_{k}^{m}=P_{k}^{m}-\left| V_{k}^{m} \right|\sum\limits_{j=1}^{n}{\sum\limits_{m=a}^{c}{\left| V_{j}^{m} \right|}(G_{kj}^{{{m}_{k}}{{m}_{j}}}\cos \theta _{kj}^{{{m}_{k}}{{m}_{j}}}+B_{kj}^{{{m}_{k}}{{m}_{j}}}\sin \theta _{kj}^{{{m}_{k}}{{m}_{j}}})\ \ \ \ } (13)$$

$$\Delta Q_{k}^{m}=Q_{k}^{m}-\left| V_{k}^{m} \right|\sum\limits_{j=1}^{n}{\sum\limits_{m=a}^{c}{\left| V_{j}^{m} \right|}(G_{kj}^{{{m}_{k}}{{m}_{j}}}\sin \theta _{kj}^{{{m}_{k}}{{m}_{j}}}-B_{kj}^{{{m}_{k}}{{m}_{j}}}\cos \theta _{kj}^{{{m}_{k}}{{m}_{j}}}))\ \ \ \ } (14)$$

PV节点电压幅值给定，不作为变量。同时，该点无法预先给定无功功率。PV节点的无功功率不平衡量不作为约束条件，因此，在迭代过程中只列出PV节点的有功功率偏差方程。

2.计算雅可比矩阵

$$J=\left[ \begin{matrix}
   H & N  \\
   J & L  \\
\end{matrix} \right]
 (15)$$

雅可比矩阵的元素如下所示：
非对角元素：

$$\left. \begin{array}{l}
{H_{ij}^{pm}} =  - {V_i}^{p}{V_j}^{m}({G_{ij}^{pm}}\sin {\theta _{ij}^{pm}} - {B_{ij}^{pm}}\sin {\theta _{ij}^{pm}})\\
{N_{ij}^{pm}} =  - {V_i}^{p}{V_j}^{m}({G_{ij}^{pm}}\cos {\theta _{ij}^{pm}} + {B_{ij}^{pm}}\sin {\theta _{ij}^{pm}})\\
{J_{ij}^{pm}} = {V_i}^{p}{V_j}^{m}({G_{ij}^{pm}}\cos {\theta _{ij}^{pm}} + {B_{ij}}\sin {\theta _{ij}^{pm}})\\
{L_{ij}^{pm}} =  - {V_i}^{p}{V_j}^{m}({G_{ij}^{pm}}\sin {\theta _{ij}^{pm}} - {B_{ij}}\cos {\theta _{ij}^{pm}})
\end{array} \right\}{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (16)$$

对角元素：

$$\left. \begin{array}{l}
H_{ii}^{pm} = V_i^p\sum\limits_{j \in i} {V_j^m(G_{ij}^{pm}\sin \theta _{ij}^{pm} - B_{ij}^{pm}\sin \theta _{ij}^{pm}} )\\
N_{ii}^{pm} =-V_i^p\sum\limits_{j \in i} {V_j^m(G_{ij}^{pm}\cos \theta _{ij}^{pm} + B_{ij}^{pm}\sin \theta _{ij}^{pm}})-2V{_i^{p^2}}G_{ii}^{pm}\\
J_{ij}^{pm} = V_i^p\sum\limits_{j \in i} {V_j^m(G_{ij}^{pm}\cos \theta _{ij}^{pm} + B_{ij}^{pm}\sin \theta _{ij}^{pm}} )\\
L_{ij}^{pm} =  - V_i^p\sum\limits_{j \in i} {V_j^m(G_{ij}^{pm}\sin \theta _{ij}^{pm} - B_{ij}^{pm}\cos \theta _{ij}^{pm}} ) + 2V{_i^{p^2}}B_{ii}^{pm}
\end{array} \right\} (17)$$

3.**迭代求解**

基于牛顿-拉夫逊的配电网三相潮流算法可以如下的表达式：

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
\end{bmatrix} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (18)$$

由上式可求得第k+1次迭代的修正量：

$$
\begin{bmatrix}
{{\theta ^p}^{(k + 1)}}\\
{{V^p}^{(k + 1)}}
\end{bmatrix}=\begin{bmatrix}
{{\theta ^p}^{(k )}}\\
{{V^p}^{(k )}}
\end{bmatrix}\begin{bmatrix}
{\Delta {{{\theta ^p}^{(k + 1)}}}}\\
{\Delta {{V^p}^{(k + 1)}}}
\end{bmatrix} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} (19)$$

这样反复迭代计算，直至所有节点$\Delta V < \varepsilon$和$\Delta \theta<n$ 为止。



::: info

三相牛顿法的基本步骤可以总结如下：

（1）形成系统三相节点导纳矩阵；  
（2）给各节点电压相角赋初值。	  
（3）求出修正方程式的常数项向量。  
（4）求出雅可比矩阵元素。  
（5）求节点各相电压相角修正向量。  
（6）求取节点电压的新值。  
（7）检查是否收敛，如不收敛，则以各节点电压的新值作为初值自第3步重新开始进行下一次迭代，否则转入下一步。  
（8）计算支路功率分布，PV节点无功功率和平衡节点注入功率。  
:::



