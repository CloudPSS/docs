---
title: "综合负荷模型"
description: "本元件为 **CloudPSS** 平台下的一次负荷元件，支持静态负荷以及静态负荷与感应电动机动态负荷并联两种建模方式，可用于描述负荷在电压扰动、频率偏移和故障暂态过程中的综合响应。"
tags:
- emtlab
- components
---


![综合负荷模型](./composite-load-model.png "综合负荷模型")

## 元件定义

综合负荷模型用于模拟同一负荷节点下多类用电设备的等效响应特性。模型支持两种工作方式：一是仅包含静态负荷支路，二是采用静态负荷与感应电动机（IM）动态负荷并联的综合结构。

## 元件说明

### 工作原理

元件整体可视为静态负荷支路与感应电动机动态支路并联接入三相电网。静态支路根据端电压和频率修正吸收功率；感应电动机支路根据电气参数、转差率、机械转矩和转子运动方程计算定子侧吸收功率。核心结构如下：

![综合负荷模型拓扑原理](./composite-load-principle.png "综合负荷模型拓扑原理图")

### 1. 静态负荷分量

静态负荷采用扩展 ZIP 形式。令：

$$
k_V=\frac{V}{V_N}
$$

其中，$V$ 为元件端电压有效值，$V_N$ 为额定线电压有效值。静态负荷有功、无功功率按下式计算：

$$
\begin{cases}
P=P_N\left[A_P\left(\frac{V}{V_N}\right)^{N_P}+B_P\left(\frac{V}{V_N}\right)+C_P\right]\left(1+K_{PF}\Delta f\right)\\
Q=Q_N\left[A_Q\left(\frac{V}{V_N}\right)^{N_Q}+B_Q\left(\frac{V}{V_N}\right)
+C_Q\right]\left(1+K_{QF}\Delta f\right)\end{cases}
$$

其中：
$P_N$ 和 $Q_N$ 分别表示静态负荷支路的有功、无功功率基准值。
$$
C_P=1-A_P-B_P
$$

$$
C_Q=1-A_Q-B_Q
$$

参数含义如下：

- $A_P$、$A_Q$：电压指数项系数；
- $B_P$、$B_Q$：一次电压项系数；
- $C_P$、$C_Q$：常数功率项系数，由 $A_P+B_P+C_P=1$ 和 $A_Q+B_Q+C_Q=1$ 自动确定；
- $N_P$：有功功率电压指数；$N_Q$：无功功率电压指数；
- $K_{PF}$、$K_{QF}$：有功、无功功率频率修正系数；
- $\Delta f$：频率偏差量，表示实际频率相对额定频率的偏移。

#### 2. 感应电动机IM动态分量
动态分量模拟三相感应电动机的机电暂态特性，核心状态方程：

##### （1）转差率定义

$$
S=\frac{\omega_1-\omega}{\omega_1}
$$

- $\omega_1$：电网同步角速度
- $\omega$：电机转子机械角速度
- $S$：电机转差率，额定工况下通常为0.01~0.05

##### （2）转子运动方程

$$
J\frac{d\omega}{dt}=T_e-T_m
$$

- $J$：电机转动惯量
- $T_e$：电机电磁转矩
- $T_m$：机械负载转矩（可通过外部信号端口输入）

#### 3. 综合负荷总功率
并网点总有功、无功功率为静态分量与动态分量叠加：

$$
\begin{cases}
P_{\Sigma}=P+P_{IM}\\
Q_{\Sigma}=Q+Q_{IM}
\end{cases}
$$

- $P$,$Q$ 为静态负荷支路按电压和频率修正后的实际有功、无功功率；$P_{IM},Q_{IM}$为感应电动机定子侧吸收的有功、无功功率
  
#### 4. 初始参数输入方式

**Initial Parameter Format**用于选择感应电动机初始参数的给定方式。该参数包含三种选项：

    - None (Motor Rated Power = System Based Power)：不手动输入初始滑差或初始负载率，电机额定容量按系统基准容量处理；
    - Input Initial Slip s0 (Type-1)：手动输入初始滑差 s0；
    - Input Initial Load Factor Mlf (Type-5)：手动输入初始负载率 Mlf。

### 属性
**CloudPSS** 元件包含统一的**属性**选项，其配置方法详见 [参数卡](/docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚
import Pins from './_pins.md'

<Pins/>


## 常见问题

**静态负荷和动态负荷的占比如何设置？**
: 工程建模时可根据负荷组成选取初值：工业场景中电动机负荷比例通常较高，可适当提高动态负荷比例；居民或商业场景中静态负荷比例通常较高，可适当降低动态负荷比例。具体取值应结合实际负荷构成或测试数据确定。
