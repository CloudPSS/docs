---
title: 常用概念
description: IESLab 建模仿真的常用概念
sidebar_position: 10
---

本节主要介绍IESLab 建模仿真的常用概念，主要包含：综合能源系统相关定义、建模仿真的原理及算法、边界条件定义及常见问题，帮助您快速了解综合能源系统建模仿真相关概念及原理。

**目录**

 1.	[综合能源](./#什么是综合能源系统)

 2.	[建模仿真](./#系统建模)

 3.	[边界条件](./#边界条件)

## 什么是综合能源系统

综合能源系统 (Integrated Energy Systems, IES) 又叫多能源系统，是指化石能源、可再生新能源、地热、生物能等**多种异质能源**通过能量的**转化、存储与传输**来满足电、冷、热、气**多种用能需求**，多能源系统**协调供能**和**互补耦合**的能源系统。

综合能源系统示意图如下：

![综合能源系统示意图 =x400](./IES-structure.png )

综合能源系统的主要特点有：

**耦合**：多种异质能源系统存在耦合关系复杂  
**互补**：间歇性新能源与可调能源、清洁能源与高排放能源互补，满足电冷热气多种用能需求  
**协同**：多种能源在规划、生产、转换、存储、调度和消费等全生命周期的多时空协同  
**高效**：不同品味梯级利用，优化能源转换形式和能源结构，提升能源利用效率  
**低碳**：充分消纳可再生能源，分布式减少输运损耗，引导低碳用能


## 建模与仿真

综合能源系统建模仿真主要是对系统进行建模并仿真计算。

**建模**：设备模型（源-网-荷-储、耦合设备）、网络模型（流体网络、电网潮流）

**仿真**：各能源子系统独立仿真+分解协调求解；或联立统一求解

![综合能源系统建模仿真 =x300](./simulation.png )

### 设备建模

**设备模型**主要分为**电力系统设备、热力系统设备和耦合设备**；参考电力系统中的**源-网-荷-储**，热力系统也可以按照源-网-荷-储建立设备模型。在综合能源系统的设备模型中，耦合设备模型是比较关键的，会影响不同的能源系统；例如热泵对于电力系统是电负荷，而对于热力系统就是热源。通常采用**能量枢纽 energy hub**模型，通过**系数矩阵**来表示不同能源转换的关系。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="热力设备">

热力系统设备以**热泵**为例。

热泵是通过消耗少量的逆循环机械能驱使热量从低温物体流向高温物体的冷热源装置，可以用电热转换的通用模型来表示：其耦合模型为耗电量与制冷制热量的关系方程，可利用能效比COP将耦合方程和热力方程结合起来；其热力系统方程包含**水力方程**（描述热力系统中流动循环的冷流体流量与压力关系）和制冷制热量的**热力方程**；

![热泵 =x300](./IES-CH-1Heatpump.png )

 水力模型：
 $$
 \mathrm{\Delta}p = p_{in} - p_{out} = k*m*|m|/\rho^{2}
 $$
 热力模型    
 $$
 P*{cop} = m(h_{in}-h_{out})
 $$
 式中：${\Delta}p$是进出口压差(kPa)，$p_{in}、p_{out}$分别为流体进出口压力(kPa)，$k$是局部压降系数 (kPa/(m³·s⁻¹)²),$m$是质量流量(kg/s)，$\rho$是密度（kg/ m³），$P$是额定用电功率(kW)，${cop}$是性能系数，$h_{in},h_{out}$分别为工质的进出口比焓（kj/kg）。

</TabItem>
<TabItem value="py" label="电力设备">

电力系统设备以**风机**为例。

常见的风力发电机为**水平轴三叶片风机**，风机功率主要由**风速**计算，可用**分段非线性**的风速功率模型来描述。

![风机 =x300](./IES-Generator-2WT.png )

**二次函数模型**
 $$
 P=0\qquad(u≤u_ci 或 u≥u_co )
 $$

$$
P=\frac{u^2}{(u_R^3-u_{ci}^2 )}P_R-\frac{u_{ci}^2}{(u_R^2-u_ci^2 )}P_R\qquad(u_ci≤u≤u_R)
$$
 
$$
P=P_R\qquad(u_R<u<u_{co} )
$$

式中，u为风机轮毂高度处的风速；$u_{ci}$为切入风速；$u_{co}$为切出风速；$u_R$为额定风速；$P_R$为额定输出功率

</TabItem>
</Tabs>


### 能流网络建模

**网络模型**主要包括**热力潮流**和**电网潮流**模型。

<Tabs>
<TabItem value="js" label="热力潮流">

水力方程包含**质量守恒**方程（连续方程）和**压力方程**（运动方程，为热网中流体循环运动的方程），热力方程也叫**能量守恒**方程，表征温度关系

**水力模型**  
质量守恒：
 $$
 \underset{i=1}{\overset{N_{in}}{\sum}}m_{\left(i,in\right)} = \underset{i=1}{\overset{N_{out}}{\sum}}m_{\left(i,out\right)}
 $$
压力平衡 
$$
𝑝_{(1,𝑖𝑛)} = 𝑝_{(N,𝑖𝑛)}
$$   
 $$
{\sum}（m_{out}H_{out}）={\sum}（m_{in}H_{in}）
 $$
 式中：$m_{in}、m_{out}$是进出口质量流量(kg/s)，$p_{in}、p_{out}$分别为流体进出口压力(kPa)，$H_{in},H_{out}$分别为工质的进出口比焓（kj/kg）。

</TabItem>
<TabItem value="py" label="电力潮流">

在电力系统中，潮流方程是描述电力系统稳态运行特性的基本数学方程。表征**有功功率P、无功功率Q、电压V，相角θ**等电气量之间的关系，潮流计算可以分为**节点法和支路法**。节点法是以注入节点的电流或者功率和节点电压作为系统的状态变量并求解方程，支路法以配电网的支路电流或者支路功率作为系统状态方程的状态量。

对于系统各母线，注入功率等于流出功率，节点电压以极坐标形式表示时，潮流功率方程式如下所示：

$$
P_i = \left|V_i\right|\underset{}{\overset{n}{\sum}}\left|V_j\right|(G_{ij}cos⁡\theta_{ij}+B_{ij}sin⁡\theta_{ij})
$$

$$
Q_i = \left|V_i\right|\underset{}{\overset{n}{\sum}}\left|V_j\right|(G_{ij}sin\theta_{ij} - B_{ij}cos\theta_{ij})
$$

式中，$G$是导纳的实部，代表电导；$B$是导纳的虚部，代表电纳，导纳可以表示为$G + jB$

</TabItem>
</Tabs>


### 仿真模拟

**计算流程**
综合能源系统的仿真计算主要有两种方法：**独立求解和联立求解**。

独立求解首先通过分解算法将系统分为不同能源字系统，然后各能源子系统独立求解，在耦合设备处通过协调算法迭代达到整个系统的收敛；联立统一求解则一般通过 **Newton-Raphson** 法统一迭代求解。 一般而言，独立求解计算的效率速度更优，鲁棒性更好；联立统一迭代则更依赖于系统初值，更容易不收敛。

**求解算法**

综合能源系统稳态能量流方程组具有**非线性**，可利用 **Newton-Raphson** 法迭代求解。但牛顿法依赖于系统初值，容易不收敛，可能导致整个综合能源系统无法求解。

或将非线性方程进行**线性简化**，但计算精度低；

也可以利用**解耦**思想，将非线性方程进行解耦求解。如强非线性的水热力方程组，一般而言，管网运动主要由水力方程决定，水力方程会影响热力计算，但热力方程一般不会影响水力循环，因此平台将水力方程和热力方程解耦，先求解水力方程，水力方程求解后，流体质量流量变为已知，带入热力方程通常使得热力方程线性化，很容易求解。



## 边界条件

真实物理世界中的综合能源系统有其明确的**边界和运行规律**，如能源系统的建筑边界范围、系统运行策略和控制逻辑等；在平台的综合能源系统**数字孪生**镜像中进行仿真模拟时，同样也需要参照真实物理世界的参数进行设置。

为对综合能源系统进行仿真模拟计算，需要设置合理的**已知条件**。主要包括：综合能源系统边界、电源出力、负荷曲线、源网储设备元件基础参数、初始状态、运行方式和时序策略等（以下简称边界条件）。

:::tip
平台无法在不输入边界条件的情况下直接给出运行策略和结果。只有录入了**合理的边界条件**后才可对系统进行高效准确的仿真模拟，计算系统在该策略下的状态；若录入的边界条件有误，导致**模型方程不封闭**，可能无法计算。同时平台增强了计算鲁棒性，对于部分元件设备，即使用户输入了错误的运行策略，仍可能得到仿真结果，但需自行对计算结果进行分析。
:::


### 电力系统潮流边界

潮流是电力系统分析中最基本、最重要的概念,潮流计算是电力系统规划、运行、调度与控制的基础。对于潮流计算中的设备节点，根据其控制特性一般可归结为 **PV** 节点和 **PQ** 节点。

PQ节点：给定节点的**有功功率P和无功功率Q**，待求的是节点的电压和相位（V，δ）。电力系统中绝大多数节点属于这一类型，如**变电配电设备**和**用电负荷**都是PQ节点，变电配电设备一般有功P为零，负荷需要录入绑定功率曲线（P，Q）。在一些情况下，系统中某些发电厂送出的功率在一定时间内为固定时，如制定出力曲线的风机光伏等新能源电站，也作为PQ节点。


PV节点：给定节点的**有功功率P和电压幅值V**，待求的是节点的无功功率和相位（Q，δ）。PV节点一般是选择有一定无功储备的发电厂和具有可调无功电源设备的变电所作为PV节点。在电力系统中，这一类节点的数目很少。

此外，还有一种特殊的节点，即**slack bus**，用于解决潮流计算中，对未知状态下的系统进行潮流计算的一种特殊节点，即**理想大电源/平衡节点/计算参考节点**， **slack bus** 通常假定其**电压幅值恒定不变**，其**有功功率和无功功率**的变化由系统中其他节点电压幅值和相位的变化决定。平台的**外部电源**元件即为**slack bus**。

请注意，平台的综合能源系统以**外部电源**为唯一平衡节点。请不要搭建多个外部电源元件。

### 热力系统仿真边界

类比于电力系统中的潮流，冷热系统中也有热力潮流。其仿真计算边界参数主要包括**水力**计算边界和**热力**计算边界。

在平台中，水力系统参数（质量流量）主要受**泵和流动阻力**（管网和设备阻力）影响，需要设置合理的**循环水泵运行策略**和**管网设备阻力**（局部压降系数，单位kPa/(m³·s⁻¹)²），无需指定复杂的节点压力和质量流量即可计算。

热力系统主要计算**热源、网损、储热水罐和负荷**的温度，其中，冷热负荷为**给定热功率**模式，热源可选**功率/出口温度**模式，对于**温度运行模式**，设备功率由进出口温差与流量计算得到;对于**功率运行**模式，温度则由功率与流量计算得到。


### 边界条件常见问题

可以不设置边界条件吗？  
:    不可用，只有设置边界条件后系统才能够进行仿真模拟。

边界条件设置错了怎么办？  
:    边界条件的设置存在一定门槛，需要对仿真和系统运行有一定的基础知识。系统会按照设定的边界条件进行仿真模拟，如边界条件设置不对，系统的运行状态有误，可以检查运行结果判断边界条件是否有误。后续IESLab也将增加更多错误提升，提升用户友好度。

电力系统有哪些常见的边界条件设置错误？
:    1.设置了多个外部电源，一个项目拓扑只能有一个外部电源；2. 相同电压等级的电力系统中设置了多个不同的基准电压；3. 对于复杂运行方式的元件（如　MMC），边界条件设置错误。

热力系统有哪些常见的边界条件设置错误？
:    1.系统拓扑搭建有误，如供热设备与冷负荷直连；2.功率模式设置错误：如设备挡位和台数不对；3. 温度运行模式设置错误：温度设置有误；4.功率模式和温度模式并行时，功率过大，导致温度运行模式的设备被迫提供预期相反的供能。

流体流量很小，温差很大，不符合正常情况，原因是什么？  
:    很可能是边界条件设置得不对，可能是： 1.没有离心泵元件，没有离心泵提供循环动力，流体难以克服局部阻力摩擦阻力等流动；2.离心泵选型或参数设置有误，导致流量过小；3 功率参数设置有误；4. 算例边界条件设置不对，计算无法收敛。