---
title: CloudPSS同步电机标幺值和有名值系统
type: guide
author: songyk
---
CloudPSS中的标幺值同步电机模型采用了$X_{ad}$基值系统[^Kundur]。参与电磁暂态计算时，标幺值应转换为有名值，此时，为保证实际电感矩阵可逆，CloudPSS采用了以归算到定子侧的转子电流为状态量的同步电机有名值模型[^Krause]。该模型具备$X_{ad}$基值系统下的标幺值电感矩阵对称的优点，便于后续计算分析。现对其标幺值与有名值之间变换关系做简要介绍。


## CloudPSS中有名值同步电机方程及参数归算

文献[^Kundur] (P196)中，dq坐标轴下的发电机原始电压方程和磁链方程可表达为如下形式：

$$\begin{gathered}
  { {\mathbf{v} }_{dq0s} } = { {\mathbf{r} }_s}{ {\mathbf{i} }_{dq0s} } + {\omega _r}{\left[ {\begin{array}{ccc}
  { - {\lambda _{qs} } }&{ {\lambda _{ds} } }&0 
\end{array} } \right]^T} + p{ {\mathbf{\lambda } }_{dq0s} } \\ 
  { {\mathbf{v} }_{qdr} } = { {\mathbf{r} }_r}{ {\mathbf{i} }_{qdr} } + p{ {\mathbf{\lambda } }_{dqr} } \\ 
  { {\mathbf{\lambda } }_{dq0s} } = {\left[ {\begin{array}{ccc}
  { {\lambda _{ds} } }&{ {\lambda _{qs} } }&{ {\lambda _{0s} } } 
\end{array} } \right]^T} \\ 
  { {\mathbf{\lambda } }_{dqr} } = {\left[ {\begin{array}{ccc}
  { {\lambda _f} }&{ {\lambda _D} }&{ {\lambda _g} }&{ {\lambda _Q} } 
\end{array} } \right]^T} \\ 
  { {\mathbf{r} }_s} = diag\left( { {r_s},{r_s},{r_s} } \right) \\ 
  { {\mathbf{r} }_r} = diag\left( { {r_f},{r_D},{r_g},{r_Q} } \right) \\ 
\end{gathered}$$

$$
\left[
  {\begin{array}{cc}
  { { {\mathbf{\lambda } }_{dq0s} } } \\ 
  { { {\mathbf{\lambda } }_{dqr} } } 
  \end{array} }
\right] = \left[
  {\begin{array}{c}
    {\lambda _{ds} } \\ 
    {\lambda _{qs} } \\
    {\lambda _{0s} } \\ 
    { {\lambda _f} } \\ 
    { {\lambda _D} } \\ 
    { {\lambda _g} } \\ 
    { {\lambda _Q} } 
  \end{array} }
\right] = \left[
  {\begin{array}{ccccccc}
    { {L_{ls} } + {L_{md} } }&0&0&{ {M_{af} } }&{ {M_{aD} } }&0&0 \\ 
    0&{ {L_{ls} } + {L_{mq} } }&0&0&0&{ {M_{ag} } }&{ {M_{aQ} } } \\ 
    0&0&{ {L_{ls} } }&0&0&0&0 \\ 
    {\tfrac{3}{2}{M_{af} } }&0&0&{ {L_{lf} } + {L_{mf} } }&{ {M_{fD} } }&0&0 \\ 
    {\tfrac{3}{2}{M_{aD} } }&0&0&{ {M_{fD} } }&{ {L_{lD} } + {L_{mD} } }&0&0 \\ 
    0&{\tfrac{3}{2}{M_{ag} } }&0&0&0&{ {L_{lg} } + {L_{mg} } }&{ {M_{gQ} } } \\ 
    0&{\tfrac{3}{2}{M_{aQ} } }&0&0&0&{ {M_{gQ} } }&{ {L_{lQ} } + {L_{mQ} } } 
  \end{array} }
\right] \left[
  {\begin{array}{c}
    { {i_{ds} } } \\ 
    { {i_{qs} } } \\ 
    { {i_{0s} } } \\ 
    { {i_f} } \\ 
    { {i_D} } \\ 
    { {i_g} } \\ 
    { {i_Q} } 
  \end{array} }
\right]
$$

由文献[^Krause]可知，上述有名值模型中定转子以及转子绕组之间的互感参数与$L_{md}$和$L_{mq}$具备如下关系：

$$\begin{gathered}
  {M_{af} } = \left( {\frac{ { {N_f} } }{ { {N_a} } } } \right)\left( {\frac{2}{3} } \right){L_{md} } \\ 
  {M_{aD} } = \left( {\frac{ { {N_D} } }{ { {N_a} } } } \right)\left( {\frac{2}{3} } \right){L_{md} } \\ 
  {M_{ag} } = \left( {\frac{ { {N_g} } }{ { {N_a} } } } \right)\left( {\frac{2}{3} } \right){L_{mq} } \\ 
  {M_{aQ} } = \left( {\frac{ { {N_Q} } }{ { {N_a} } } } \right)\left( {\frac{2}{3} } \right){L_{mq} } \\ 
  {L_{mf} } = {\left( {\frac{ { {N_f} } }{ { {N_a} } } } \right)^2}\left( {\frac{2}{3} } \right){L_{md} } \\ 
  {L_{mD} } = {\left( {\frac{ { {N_D} } }{ { {N_a} } } } \right)^2}\left( {\frac{2}{3} } \right){L_{md} } \\ 
  {L_{mg} } = {\left( {\frac{ { {N_g} } }{ { {N_a} } } } \right)^2}\left( {\frac{2}{3} } \right){L_{mq} } \\ 
  {L_{mQ} } = {\left( {\frac{ { {N_Q} } }{ { {N_a} } } } \right)^2}\left( {\frac{2}{3} } \right){L_{mq} } \\ 
  {M_{fD} } = \left( {\frac{ { {N_D} } }{ { {N_f} } } } \right){L_{mf} } = \left( {\frac{ { {N_f} } }{ { {N_D} } } } \right){L_{mD} } \\ 
  {M_{gQ} } = \left( {\frac{ { {N_Q} } }{ { {N_g} } } } \right){L_{mg} } = \left( {\frac{ { {N_g} } }{ { {N_Q} } } } \right){L_{mQ} } \\ 
\end{gathered}$$

可见，上述电感矩阵并不满足对称特性。为保证对称性，文献[^Krause]定义了一种<font color=#FF0000>折算到定子侧的转子变量</font>，即

$$\begin{gathered}
  { {i}_j'}{\text{ = } }\left( {\frac{ {\text{2} } }{ {\text{3} } } } \right)\left( {\frac{ { {N_j} } }{ { {N_a} } } } \right){i_j} \\ 
  { {v}_j'} = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){v_j} \\ 
  { {\lambda }_j'} = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){\lambda _j} \\ 
  j = f,D,g,Q \\ 
\end{gathered}$$

用上述变量替换原始电机方程中的转子变量，可得到“折算到定子侧”的有名值电压和磁链方程，即参与电磁暂态计算的电机有名值方程。

$$\begin{gathered}
  { {\mathbf{v} }_{dq0s} } = { {\mathbf{r} }_s}{i_{dq0s} } + {\omega _r}{\left[ {\begin{array}{ccc}
  { - {\lambda _{qs} } }&{ {\lambda _{ds} } }&0 
\end{array} } \right]^T} + p{ {\mathbf{\lambda } }_{dq0s} } \\ 
  { { {\mathbf{v} } }_{qdr}'} = { { {\mathbf{r} } }_r'}{ {i}_{qdr}'} + p{ { {\mathbf{\lambda } } }_{dqr}'} \\ 
  { {\mathbf{r} }_s} = diag\left( { {r_s},{r_s},{r_s} } \right) \\ 
  { {\mathbf{r} }_r'} = diag\left( { { {r}_f'},{ {r}_D'},{ {r}_g'},{ {r}_Q'} } \right) \\ 
\end{gathered}$$

$$\left[
  {\begin{array}{c}
    { {\lambda _{ds} } } \\
    {\lambda _{qs} } \\
    {\lambda _{0s} } \\
    { { {\lambda }_f'} } \\ 
    { { {\lambda }_D'} } \\ 
    { { {\lambda }_g'} } \\ 
    { { {\lambda }_Q'} } 
  \end{array} }
\right] = \left[
  {\begin{array}{ccccccc}
    { {L_{ls} } + {L_{md} } }&0&0&{ {L_{md} } }&{ {L_{md} } }&0&0 \\ 
    0&{ {L_{ls} } + {L_{mq} } }&0&0&0&{ {L_{mq} } }&{ {L_{mq} } } \\ 
    0&0&{ {L_{ls} } }&0&0&0&0 \\ 
    { {L_{md} } }&0&0&{ { {L}_{lf}'} + {L_{md} } }&{ {L_{md} } }&0&0 \\ 
    { {L_{md} } }&0&0&{ {L_{md} } }&{ { {L}_{lD}'} + {L_{md} } }&0&0 \\ 
    0&{ {L_{mq} } }&0&0&0&{ { {L}_{lg}'} + {L_{mq} } }&{ {L_{mq} } } \\ 
    0&{ {L_{mq} } }&0&0&0&{ {L_{mq} } }&{ { {L}_{lQ}'} + {L_{mq} } } 
\end{array} } \right]\left[ {\begin{array}{ccccccc}
  { {i_{ds} } } \\ 
  { {i_{qs} } } \\ 
  { {i_{0s} } } \\ 
  { { {i}_f'} } \\ 
  { { {i}_D'} } \\ 
  { { {i}_g'} } \\ 
  { { {i}_Q'} } 
\end{array} } \right]$$

其中，

$$\begin{gathered}
  { {r}_j'} = \left( {\frac{3}{2} } \right){\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)^2}{r_j} \\ 
  { {L}_{lj}'} = \left( {\frac{3}{2} } \right){\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)^2}{L_{lj} } \\ 
  j = f,D,g,Q \\ 
\end{gathered}$$

需特别注意的是，该有名值方程使用的并非实际的转子绕组参数，而是归算到定子侧的转子绕组有名值参数。在实际使用有名值同步电机方程时，用户需按照上述方法进行归算，<font color=#FF0000>填写转子绕组参数归算到定子侧的参数值</font>。

## $X_{ad}$标幺值参数与CloudPSS有名值同步电机参数转换方法

CloudPSS采用$X_{ad}$基值系统，其标幺值同步电机模型是在上述模型基础上，内置了标幺值向有名值的归算流程。用户在选择标幺值输入模式时，系统会自动将输入参数归算到有名值。

在$X_{ad}$基值系统中，互感标幺值具备如下关系：

$$\begin{gathered}
  L_{md}^* = M_{af}^* = M_{aD}^* = M_{fD}^* = M_{ad}^* \\
  L_{mq}^* = M_{ag}^* = M_{aQ}^* = M_{gQ}^* = M_{aq}^* \\ 
\end{gathered}$$

根据转子绕组互感基值定义可知转子各绕组的电流基值与定子电流基值的关系如下（文献[^Krause]，P82），

$$\begin{gathered}
  {i_{jB} } = \frac{ { {L_{md} } } }{ { {M_{aj} } } }{i_{sB} } = \left( {\frac{3}{2} } \right)\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){i_{sB} },j = f,D \\
  {i_{jB} } = \frac{ { {L_{mq} } } }{ { {M_{aj} } } }{i_{sB} } = \left( {\frac{3}{2} } \right)\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){i_{sB} },j = g,Q \\ 
\end{gathered} $$

由上式可得折算到定子侧的转子电流基值，即：

$${i_{jB}'} = \left( {\frac{2}{3} } \right)\left( {\frac{ { {N_j} } }{ { {N_a} } } } \right){i_{jB} } = \left( {\frac{2}{3} } \right)\left( {\frac{ { {N_j} } }{ { {N_a} } } } \right) \times \left( {\frac{3}{2} } \right)\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){i_{sB} } = {i_{sB} }$$

进而可得<font color=#FF0000>折算到定子侧的转子电压、转子磁链基值</font>，即：

$${v_{jB}'} = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){v_{jB} } = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)\frac{ { {S_b} } }{ { {i_{jB} } } } = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right) \times \left( {\frac{2}{3} } \right)\left( {\frac{ { {N_j} } }{ { {N_a} } } } \right)\frac{ { {S_b} } }{ { {i_{sB} } } } = {v_{sB} }$$

$${\lambda _{jB}'} = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){\lambda _{jB} } = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)\frac{ { {v_{jB} } } }{ { {\omega _B} } } = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)\left( {\frac{2}{3} } \right)\left( {\frac{ { {N_j} } }{ { {N_a} } } } \right)\frac{ { {S_b} } }{ { {\omega _B}{i_{sB} } } } = \frac{ { {v_{sB} } } }{ { {\omega _B} } } = {\lambda _{sB} }$$

因此，所有绕组共享一套基值电流。由$X_{ad}$基值系统向CloudPSS电机有名值方程进行参数转化时，所有绕组共享一套基值系统，即：

$$\begin{gathered}
  {\omega _B} = 2\pi {f_B} \\
  {v_{fB} } = {v_{DB} } = {v_{gB} } = {v_{QB} } = {v_{sB} } = \sqrt 2 {v_N} \\
  {i_{fB} } = {i_{DB} } = {i_{gB} } = {i_{QB} } = {i_{sB} } = \frac{2}{3}\frac{ { {S_b} } }{ { {v_{sB} } } } \\
  {\lambda _{fB} } = {\lambda _{DB} } = {\lambda _{gB} } = {\lambda _{QB} } = {\lambda _{sB} } = \frac{ { {v_{sB} } } }{ { {\omega _B} } } \\
  {T_B} = \frac{p}{2}\frac{ { {S_b} } }{ { {\omega _B} } }
  \end{gathered}
$$

## 相关元件
[<同步发电机>](<test link>)


[^Kundur]: Kundur, Prabha, Neal J. Balu, and Mark G. Lauby. Power system stability and control. Vol. 7. New York: McGraw-hill, 1994.

[^Krause]: Krause, Paul, et al. Analysis of electric machinery and drive systems. Vol. 75. John Wiley & Sons, 2013.