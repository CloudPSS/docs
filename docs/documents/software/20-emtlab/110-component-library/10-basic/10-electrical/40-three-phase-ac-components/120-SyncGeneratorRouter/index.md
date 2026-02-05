---
title: "同步发电机"
description: "同步发电机"
tags:
- emtlab
- components
---

## 元件定义

该元件用以建模三相同步电机。

## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

## 使用说明

### 同步电机基础模型

CloudPSS中的电机基于Xad基值系统下的全阶模型[^1]进行建模，基础电压方程如下：

$$
\begin{gathered}
  { {\mathbf{v} }_{dq0s} } = { {\mathbf{r} }_s}{ {\mathbf{i} }_{dq0s} } + {\omega _r}{\left[ {\begin{array}{ccc}
  { - {\lambda _{qs} } }&{ {\lambda _{ds} } }&0 
\end{array} } \right]^T} + p{ {\mathbf{\lambda } }_{dq0s} } \\ 
  { {\mathbf{v} }_{dqr}' } = { {\mathbf{r} }_r'}{ {\mathbf{i} }_{dqr}' } + p{ {\mathbf{\lambda } }_{dqr}' } \\ 
\end{gathered}
$$
其中，${ {\mathbf{v} }_{dq0s} }$ 和 ${ {\mathbf{v} }_{dqr}' }$ 分别为dq轴坐标系下定子和转子电压向量（折算到定子侧）， ${\mathbf{i} }_{dq0s}$ 和 ${\mathbf{i} }_{dqr}'$ 分别为dq轴坐标系下定子和转子电流向量（转算到定子侧），${ {\mathbf{\mathbf{\lambda }} }_{dq0s} }$ 和 ${ {\mathbf{\mathbf{\lambda }} }_{dqr}' }$ 分别为dq轴坐标系下定子和转子磁链向量（折算到定子侧）。
${\mathbf{r} }_s$和${\mathbf{r} }_r'$分别为定子、转子侧的电阻矩阵（折算到定子侧），可展开如下：
$$
\begin{gathered}
  { {\mathbf{r} }_s} = diag\left( { {r_s},{r_s},{r_s} } \right) \\ 
  { {\mathbf{r} }_r'} = diag\left( { {r_f}',{r_D}',{r_g}',{r_Q}' } \right) \\ 
\end{gathered}
$$

<!-- 转子电流、磁链及绕组阻抗相关的折算方法详见下文。 -->

基础磁链方程如下：

$$
\left[
  {\begin{array}{cc}
  { { {\mathbf{\lambda } }_{dq0s} } } \\ 
  { { {\mathbf{\lambda } }_{dqr}' } } 
  \end{array} }
\right] = \left[
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
    { {L_{ls} } + {L_{ad} } }&0&0&{ {L_{ad} } }&{ {L_{ad} } }&0&0 \\ 
    0&{ {L_{ls} } + {L_{aq} } }&0&0&0&{ {L_{aq} } }&{ {L_{aq} } } \\ 
    0&0&{ {L_{ls} } }&0&0&0&0 \\ 
    { {L_{ad} } }&0&0&{ { {L}_{lf}'} + {L_{ad} } }&{ {L_{ad} } }&0&0 \\ 
    { {L_{ad} } }&0&0&{ {L_{ad} } }&{ { {L}_{lD}'} + {L_{ad} } }&0&0 \\ 
    0&{ {L_{aq} } }&0&0&0&{ { {L}_{lg}'} + {L_{aq} } }&{ {L_{aq} } } \\ 
    0&{ {L_{aq} } }&0&0&0&{ {L_{aq} } }&{ { {L}_{lQ}'} + {L_{aq} } } 
\end{array} } \right]\left[ {\begin{array}{ccccccc}
  { {i_{ds} } } \\ 
  { {i_{qs} } } \\ 
  { {i_{0s} } } \\ 
  { { {i}_f'} } \\ 
  { { {i}_D'} } \\ 
  { { {i}_g'} } \\ 
  { { {i}_Q'} } 
\end{array} } \right]
$$

转矩计算方法如下：
$$
{T_e} = \frac{{3P}}{4}\left( {{\lambda _{md}}{i_{qs}} - {\lambda _{mq}}{i_{ds}}} \right)
$$

其中，$\lambda _{md}$ 和 $\lambda _{mq}$ 分别为d轴和q轴的互磁链，计算如下。

$$
\begin{array}{l}
{\lambda _{md}} = {L_{ad}}\left( {{i_{ds}} + {{i'}_f} + {{i'}_D}} \right)\\
{\lambda _{mq}} = {L_{aq}}\left( {{i_{qs}} + {{i'}_g} + {{i'}_Q}} \right)
\end{array}
$$

转子运动方程如下：

$$
{T_m} - {T_e} = J\frac{{d\omega }}{{dt}} + D\omega 
$$

其中，$\omega$ 为电机转速。

以上公式中，电机参数符号释义如下：

| 参数符号 | 参数定义        |  参数符号 | 参数定义        | 
|------------|---------------------|------------|---------------------|
| ${L}_{ls}$       | 定子漏电感                            | ${r}_{s}$       | 定子电阻                            |
| ${L}_{lf}'$      | d轴励磁绕组漏电感（转算到定子侧）     | ${r}_{f}'$      | d轴励磁绕组（转算到定子侧）     |
| ${L}_{lD}'$      | d轴等值阻尼绕组D漏电感（转算到定子侧）| ${r}_{D}'$      | d轴阻尼绕组D电阻（转算到定子侧）|
| ${L}_{lg}'$      | q轴等值阻尼绕组g漏电感（转算到定子侧）| ${r}_{g}'$      | q轴阻尼绕组g电阻（转算到定子侧）|
| ${L}_{lQ}'$      | q轴等值阻尼绕组Q漏电感（转算到定子侧）| ${r}_{Q}'$      | q轴阻尼绕组Q电阻（转算到定子侧）|
| ${L}_{ad}$       | d轴互感（转算到定子侧）             |    $J$    |   电机转动惯量           |
| ${L}_{aq}$       | q轴互感（转算到定子侧）             |    $D$    |   电机阻尼系数           |

$X_{ad}$基值系统中，转子电感及电流、磁链折算到定子侧的方法可参考文献[^Krause]，包括：

$$
\begin{gathered}
  { {i}_j'}{\text{ = } }\left( {\frac{ {\text{2} } }{ {\text{3} } } } \right)\left( {\frac{ { {N_j} } }{ { {N_a} } } } \right){i_j} \\ 
  { {v}_j'} = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){v_j} \\ 
  { {\lambda }_j'} = \left( {\frac{ { {N_a} } }{ { {N_j} } } } \right){\lambda _j} \\ 
  { {r}_j'} = \left( {\frac{3}{2} } \right){\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)^2}{r_j} \\ 
  { {L}_{lj}'} = \left( {\frac{3}{2} } \right){\left( {\frac{ { {N_a} } }{ { {N_j} } } } \right)^2}{L_{lj} } \\ 
  j = f,D,g,Q \\ 
\end{gathered}
$$

其中，$N_j$为转子绕组$j (j=f,D,g,Q)$的匝数，$N_a$为定子绕组匝数，${i_j}$, ${v_j}$, ${\lambda }_j$分别为转子绕组原始电流、电压及磁链，${r_j}$, ${L_{lj}}$分别为转子绕组原始电阻和漏感。

进一步CloudPSS中的电机电磁暂态建模方法主要分为 `PD (Constant Conductance)` 模型[^PD]和 `VBR-dq0` 模型[^VBR]，具体可参考相应论文。

### 标幺值系统基值计算方法

在CloudPSS中，电机参数采用标幺值进行输入。其基值主要通过输入参数中的 `V`(额定相电压有效值，以下记为$V_N$)、`freq`(额定频率，以下记为$f_b$)和`P`（极对数，以下记为$p$）进行计算。

以下是关键基值计算方法：
<!-- \begin{gathered}
  {\omega _B} = 2\pi {f_B} \\
  {v_{fB} } = {v_{DB} } = {v_{gB} } = {v_{QB} } = {v_{sB} } = \sqrt 2 {v_N} \\
  {i_{fB} } = {i_{DB} } = {i_{gB} } = {i_{QB} } = {i_{sB} } = \frac{2}{3}\frac{ { {S_b} } }{ { {v_{sB} } } } \\
  {\lambda _{fB} } = {\lambda _{DB} } = {\lambda _{gB} } = {\lambda _{QB} } = {\lambda _{sB} } = \frac{ { {v_{sB} } } }{ { {\omega _B} } } \\
  {T_B} = \frac{p}{2}\frac{ { {S_b} } }{ { {\omega _B} } }
  \end{gathered} -->


- 定子电压的基值与折合到定子侧的转子电压基值一致，计算如下：
  
  $$
  {v_{fB} } = {v_{DB} } = {v_{gB} } = {v_{QB} } = {v_{sB} } = \sqrt 2 {v_N}
  $$

- 定子电流的基值与折合到定子侧的转子电流基值一致，计算如下：
  
  $$
  {i_{fB} } = {i_{DB} } = {i_{gB} } = {i_{QB} } = {i_{sB} } = \frac{2}{3}\frac{ { {S_b} } }{ { {v_{sB} } } } = \frac{\sqrt 2}{3}\frac{ { {S_b} } }{ { {v_{N} } } }
  $$

- 定子阻抗的标幺值基值与折合到定子侧的转子阻抗基值一致，计算如下：
  
  $$
  {z_{fB} } = {z_{DB} } = {z_{gB} } = {z_{QB} } = {z_{sB} } = \frac{ { v_{sB} }^2 }{ {S_b }} = 3 \frac{ { v_{N} }^2 }{ {S_b }}
  $$

- 定子磁链的标幺值基值与折合到定子侧的转子磁链基值一致，计算如下：
  
  $$
  {\lambda _{fB} } = {\lambda _{DB} } = {\lambda _{gB} } = {\lambda _{QB} } = {\lambda _{sB} } = \frac{ { {v_{sB} } } }{ { 2\pi{f_B} } } = \frac{ { \sqrt 2 {v_{N} } } }{ { 2\pi{f_B} } }
  $$

- 转矩的标幺值基值计算如下：
  $$
  {T _{eB} } = \frac{ p }{ 2 } \frac{ S }{ { 2\pi{f_B} } }
  $$

- 在标幺值系统下，转子运动方程中的转动惯量 $J$ 和输入参数中的转动惯量时间常数 $T_j$ （单位为 $s$）的转换关系如下：
  $$
  {J_B} = {T _{eB} } {T_j} = \frac{ p }{ 2 } \frac{ S }{ { 2\pi{f_B} } } {T_j}
  $$

### 同步发电机等效电路参数折算方法

同步发电机提供**电机试验参数**和**等效电路参数**两种参数录入方式。以电机试验参数折算等效电路参数的方法如下。  
首先列出折算过程中涉及的所有符号及其定义：

| 试验参数符号 | 试验参数定义        | 等效电路参数符号 | 等效电路参数定义     |  
|------------|---------------------|----------------|-------------------------|  
| $r_a$      | 定子电阻             | $R_s$          | 定子电阻                |  
| $x_l$      | 定子漏电抗           | $X_{ls}$       | 定子漏电抗              |  
| $x_d$      | d轴同步电抗          | $X_d$          | d轴同步电抗             |  
| $x_q$      | q轴同步电抗          | $X_q$          | q轴同步电抗             |  
| $x'_d$     | d轴暂态电抗       |  -             |  -                     |  
| $x''_d$    | d轴次暂态电抗     | -              |  -                     |  
| $x'_q$     | q轴暂态电抗       | -              |   -                    |  
| $x''_q$    | q轴次暂态电抗     | -              |   -                    |  
| $T'_{d0}$  | d轴励磁f绕组开路时间常数   | -              |  -                     |  
| $T''_{d0}$ | d轴阻尼D绕组开路时间常数 | -              |  -                     |  
| $T'_{q0}$  | q轴阻尼g绕组开路时间常数   | -              |   -                    |  
| $T''_{q0}$ | q轴阻尼Q绕组开路时间常数 | -              |   -                    |  
| -          | -                   | $X_{ad}$       | d轴电枢反应电抗          |  
| -          | -                   | $X_{aq}$       | q轴电枢反应电抗          | 
| -          | -                   | $R_{fd}$       | d轴励磁绕组电阻          |  
| -          | -                   | $X_{lfd}$      | d轴励磁绕组漏电抗        | 
| -          | -                   | $R_{kd}$       | d轴阻尼D绕组电阻         |  
| -          | -                   | $X_{lkd}$      | d轴阻尼D绕组漏电抗       |  
| -          |  -                  | $R_{kqg}$      | q轴阻尼绕组1电阻(g绕组)   | 
| -          |  -                  | $X_{lkqg}$     | q轴阻尼绕组1漏电抗(g绕组) |  
| -          |  -                  | $R_{kqQ}$      | q轴阻尼绕组2电阻(Q绕组)   |  
| -          | -                   | $X_{lkqQ}$     | q轴阻尼绕组2漏电抗(Q绕组) |  

具体折算步骤如下：
+ 1、等效电路参数中的定子电阻、定子漏电抗、q轴同步电抗、d轴同步电抗等基础参数直接由试验参数映射得到：  
<center>
$R_s = r_a$; $X_{ls} = x_l$; $X_q = x_q$; $X_d = x_d$
</center>  
+ 2、计算d轴、q轴电枢反应电抗，作为折算过程的中间变量：
<center>
$X_{ad} = x_d - x_l$; $X_{aq} = x_q - x_l$
</center>  
+ 3、计算d轴励磁绕组电阻、漏电抗参数：
<center>
$X_{lfd} = \frac{X_{ad}^2}{x_d - x'_d} - X_{ad}$; $R_{fd} = \frac{X_{lfd} + X_{ad}}{2\pi f \cdot T'_{d0}}$
</center> 
+ 4、计算d轴阻尼D绕组电阻、漏电抗参数：  
      + 首先判断是否存在D绕组，若$|x'_d - x''_d| < 10^{-6}\ \text{p.u.}$，则不存在D绕组，设置
    <center>
    $X_{lkd} = 10^6\ \text{p.u.}; R_{kd} = 10^6\ \text{p.u.}$
    </center>
      + 若存在D绕组，则设置
    <center>
    $X_{lkd} = \frac{(x'_d - x_l)^2}{x'_d - x''_d} + x_l - x'_d$; $R_{kd} = \frac{(x'_d - x_l)^2}{(x'_d - x''_d) \cdot 2\pi f \cdot T''_{d0}}$
    </center> 
+ 5、计算q轴阻尼绕组1（g绕组）电阻、漏电抗参数：  
      + 首先判断是否存在g绕组，若$|x_q - x'_q| < 10^{-6}\ \text{p.u.}$ 或 $T'_{q0} < 10^{-6}\ \text{s}$ 或 $x'_q < 10^{-6}\ \text{p.u.}$ 或 $T'_{q0} > 500\ \text{s}$，则不存在g绕组，设置
    <center>
    $X_{lkqg}=10^6\ \text{p.u.}$; $R_{kqg}=10^6\ \text{p.u.}$; $x'_q = x_q$
    </center>
      + 若存在g绕组，则设置
    <center>
    $X_{lkqg} = \frac{X_{aq}^2}{x_q - x'_q} - X_{aq}$; $R_{kqg} = \frac{X_{lkqg} + X_{aq}}{2\pi f \cdot T'_{q0}}$
    </center> 
+ 6、计算q轴阻尼绕组2（Q绕组）电阻、漏电抗参数：  
      + 首先判断是否存在Q绕组，若$|x'_q - x''_q| < 10^{-6}\ \text{p.u.}$ 或 $T''_{q0} < 10^{-6}\ \text{s}$，则不存在Q绕组，设置
    <center>
    $X_{lkqQ}=10^6\ \text{p.u.}$; $R_{kqQ}=10^6\ \text{p.u.}$
    </center>
      + 若存在Q绕组，则设置
    <center>
    $X_{lkqQ} = \frac{(x'_q - x_l)^2}{x'_q - x''_q} + x_l - x'_q$; $R_{kqQ} = \frac{(x'_q - x_l)^2}{(x'_q - x''_q) \cdot 2\pi f \cdot T''_{q0}}$
    </center> 




### 同步发电机的启动方法

CloudPSS 提供了 3 种同步发电机的启动方法，通过修改参数表的`Initial Condition`栏内参数可以选择不同的启动方式。具体如下： 

#### 1. 平启动

    设定`Initial Condition`->`Startup Type`为`from Zero-state`，即可实现平启动，相当于不采用任何特殊启动方法。

    需要说明的是，**平启动**模式下，同步发电机量测标识中`稳态开路电势 Ef0 量测信号`、`稳态机械转矩 Tm0 量测信号`无意义。

#### 2. 电压源转电机

    设定`Initial Condition`栏中`Startup Type`为`Source to Machine`，即电压源转电机启动类型。此时需要指定`Ramping Time`（电压爬升时间），`Initial Voltage Magnitude`（初始相电压标幺值），`Initial Voltage Phase`（初始相电压相位），以及`Source to Machine Transition Signal`（电压源-电机切换信号）动态参数，动态参数的使用详见 [参数及引脚体系](../../../../../../20-emtlab/40-simstudio/30-modeling/10-params-variables-pins/index.md)。如：可填入`@S2M`。`@S2M`信号由一个阶跃信号发生器产生，是一个从 0 阶跃到 1 的信号。在`@S2M`为 0 时，电机为一个理想电压源，其幅值和相位线性爬升至`Initial Voltage Magnitude`，`Initial Voltage Phase`两参数给定的端电压值。当`@S2M`信号阶跃到 1 时，电压源切换为电机。

    需要说明的是，**电压源转电机**模式下，同步发电机量测标识中`稳态开路电势 Ef0 量测信号`、`稳态机械转矩 Tm0 量测信号`、`转子角量测信号`以及`Q 轴与端电压相量夹角信号`在`@S2M`信号为 1 前，均无意义。

#### 3. 斜坡等效电压源启动

    设定`Initial Condition`栏中`Startup Type`为`Ramping Equivalent Voltage`，即斜坡等效电压源启动启动类型。此时需要指定`Ramping Time`（电压爬升时间），`Initial Voltage Magnitude`（初始相电压标幺值），`Initial Voltage Phase`（初始相电压相位），`Initial Active Power`（初始有功功率），`Initial Reactive Power`（初始无功功率），以及`Source to Machine Transition Signal`（电压源-电机切换信号）动态参数，动态参数的使用详见 [参数及引脚体系](../../../../../../20-emtlab/40-simstudio/30-modeling/10-params-variables-pins/index.md)。如：可填入`@S2M`。`@S2M`信号由一个阶跃信号发生器产生，是一个从 0 阶跃到 1 的信号。
    
    该启动方法与电压源转电机的启动方法类似，区别在于在`@S2M`为 0 时，电机为一个串联导纳矩阵的电压源，其导纳矩阵`G`与电机的电磁暂态仿真等效导纳矩阵一致（可参考论文[^PD]及[^VBR]），电压源的幅值和相位由功率及端口电压确定。当`@S2M`信号阶跃到 1 时，由含内阻电压源切换为电机，该启动方式的优势在于切换过程无需修改系统导纳矩阵。

    需要说明的是，**电压源转电机**模式下，同步发电机量测标识中`稳态开路电势 Ef0 量测信号`、`稳态机械转矩 Tm0 量测信号`、`转子角量测信号`以及`Q 轴与端电压相量夹角信号`在`@S2M`信号为 1 前，均无意义。

#### 同步发电机转子转速解锁信号

默认情况下，无论选择转速控制模式还是转矩控制模式，同步发电机的转子均处在额定转速下的锁转速模式。需要用户提供`Rotor Unlocking Signal`动态参数来进行解锁。如：可填入`@L2N`。`@L2N` 信号由一个阶跃信号发生器产生，是一个从 0 阶跃到 1 的信号。在`@L2N`为 0 时，转速恒定为额定转速。当`@L2N`信号阶跃到 1 时，转速放开。在转速控制模式下，转速与输入的受控信号相同；在转矩控制下，转速由转速方程控制。  

设定`Initial Condition`->`Startup Type`为`from Steady-state`，即稳态启动。此时电机需要设置`Initial Voltage Magnitude`（初始相电压标幺值）, `Initial Voltage Phase`（初始相电压相位），`Initial Active Power`（初始有功功率），`Initial Reactive Power`（初始无功功率）四个参数。此类启动方式适用于整个系统从潮流断面直接启动，详见 [潮流断面启动](../../../../../60-power-flow/30-initializing-from-power-flow-results/index.md) 功能。

## 案例

可参考[单机无穷大系统的潮流计算和电磁暂态仿真](../../../../../30-quick-start/20-start-from-scratch/index.md)文档。

## 常见问题

## 参考文献

[^1]: Kundur, Prabha, Neal J. Balu, and Mark G. Lauby. Power system stability and control. Vol. 7. New York: McGraw-hill, 1994.

[^Krause]: Krause, Paul, et al. Analysis of electric machinery and drive systems. Vol. 75. John Wiley & Sons, 2013.

[^PD]: 1. Xia, Y. et al. An Efficient Phase Domain Synchronous Machine Model With Constant Equivalent Admittance Matrix. IEEE Trans. Power Delivery 34, 929–940 (2019).
 [下载论文](./xia-pd-model.pdf)

[^VBR]: Wang, L. & Jatskevich, J. A Voltage-Behind-Reactance Synchronous Machine Model for the EMTP-Type Solution. IEEE Trans. Power Syst. 21, 1539–1549 (2006).
 [下载论文](./wang-vbr-model.pdf)



