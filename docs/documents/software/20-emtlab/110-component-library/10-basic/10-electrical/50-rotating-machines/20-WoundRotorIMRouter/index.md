---
title: "绕线式感应电机"
description: 本元件为 CloudPSS 平台下的三相绕线式异步电机标准模型，支持标幺值/国际单位制参数化，定转子三相端口全部独立引出，适用于双馈风力发电机，大功率调速传动，软启动仿真等场景，支持电磁暂态高精度与大规模快速仿真两种模式。
tags:
- emtlab
- components
---

:::tip
本元件定转子绕组端口全部可访问，可外接转子侧变流器构建双馈风力发电系统，或外接可变电阻实现电机软启动；若无需访问转子绕组，请使用笼型感应电机元件。
:::

![绕线式感应电机](./wound-induction-motor.png "绕线式感应电机")

## 元件描述

绕线式感应电机（Wound Rotor Induction Machine）为异步电机的一类，定子与转子均为三相绕组结构，转子绕组通过滑环引出外部端口，支持外接励磁、调速或软启动电路。本元件采用三相静止abc坐标系下的相域（Phase Domain）标幺值模型，完整模拟电机电磁暂态、机电暂态与饱和特性，转子参数全部归算至定子侧。

## 原始数学方程

所有方程基于三相静止abc坐标系（相域模型），标幺值体系：

### 1. 电压方程

定转子电压方程统一写成矩阵形式：

$$
\begin{bmatrix} \mathbf{u_s} \\ \mathbf{u_r} \end{bmatrix} = 
\begin{bmatrix} \mathbf{R_{SS}} & \mathbf{0} \\ \mathbf{0} & \mathbf{R_{RR}} \end{bmatrix}
\begin{bmatrix} \mathbf{i_s} \\ \mathbf{i_r} \end{bmatrix} + 
\frac{d}{dt}\begin{bmatrix} \boldsymbol{\lambda_s} \\ \boldsymbol{\lambda_r} \end{bmatrix}
$$

其中：
- $\mathbf{u_s} = [u_{as}, u_{bs}, u_{cs}]^T$：定子三相电压向量
- $\mathbf{u_r} = [u_{ar}, u_{br}, u_{cr}]^T$：转子三相电压向量（归算至定子侧）
- $\mathbf{i_s} = [i_{as}, i_{bs}, i_{cs}]^T$：定子三相电流向量
- $\mathbf{i_r} = [i_{ar}, i_{br}, i_{cr}]^T$：转子三相电流向量（归算至定子侧）
- $\boldsymbol{\lambda_s}$：定子磁链向量
- $\boldsymbol{\lambda_r}$：转子磁链向量
- $\mathbf{R_{SS}} = R_s \mathbf{I}$：定子电阻对角矩阵
- $\mathbf{R_{RR}} = R_r \mathbf{I}$：转子电阻对角矩阵

### 2. 磁链方程

磁链与电流满足如下关系：

$$
\begin{bmatrix} \boldsymbol{\lambda_s} \\ \boldsymbol{\lambda_r} \end{bmatrix} = 
\begin{bmatrix} \mathbf{L_{SS}} & \mathbf{L_{SR}} \\ \mathbf{L_{SR}}^T & \mathbf{L_{RR}} \end{bmatrix}
\begin{bmatrix} \mathbf{i_s} \\ \mathbf{i_r} \end{bmatrix}
$$

电感分块矩阵分为定子自感、转子自感、定转子互感三部分。

#### 定子电感矩阵 $\mathbf{L_{SS}}$

定子电感矩阵与转子位置无关，由漏感和主电感两部分组成：

$$
\mathbf{L_{SS}} = L_{ls} \mathbf{\hat{I}} + \mathbf{L_{SS}^m}
$$

对于三相电机，主电感子矩阵为：

$$
\mathbf{L_{SS}^m} = L_m \begin{bmatrix}
1 & -\dfrac{1}{2} & -\dfrac{1}{2} \\[6pt]
-\dfrac{1}{2} & 1 & -\dfrac{1}{2} \\[6pt]
-\dfrac{1}{2} & -\dfrac{1}{2} & 1
\end{bmatrix}
$$

#### 转子电感矩阵 $\mathbf{L_{RR}}$

转子电感矩阵与转子位置无关，结构与定子电感矩阵对称：

$$
\mathbf{L_{RR}} = L_{lr} \mathbf{\hat{I}} + \mathbf{L_{RR}^m}
$$

对于三相电机，主电感子矩阵为：

$$
\mathbf{L_{RR}^m} = L_m \begin{bmatrix}
1 & -\dfrac{1}{2} & -\dfrac{1}{2} \\[6pt]
-\dfrac{1}{2} & 1 & -\dfrac{1}{2} \\[6pt]
-\dfrac{1}{2} & -\dfrac{1}{2} & 1
\end{bmatrix}
$$

#### 定转子互感矩阵 $\mathbf{L_{SR}}$

定转子互感矩阵随转子位置角 $\theta$ 变化，第 $m$ 行第 $n$ 列元素为：

$$
L_{SR}^{mn} = L_m \cos\left(\theta - (m-1)\alpha_s + (n-1)\alpha_r\right)
$$

对于三相电机（$\alpha_s = \alpha_r = 2\pi/3$），矩阵展开为：

$$
\mathbf{L_{SR}} = L_m \begin{bmatrix}
\cos\theta & \cos\left(\theta+\dfrac{2\pi}{3}\right) & \cos\left(\theta-\dfrac{2\pi}{3}\right) \\[6pt]
\cos\left(\theta-\dfrac{2\pi}{3}\right) & \cos\theta & \cos\left(\theta+\dfrac{2\pi}{3}\right) \\[6pt]
\cos\left(\theta+\dfrac{2\pi}{3}\right) & \cos\left(\theta-\dfrac{2\pi}{3}\right) & \cos\theta
\end{bmatrix}
$$

### 3. 电磁转矩方程

电磁转矩由定转子互感随转子位置变化产生：

$$
T_e = \mathbf{i_s}^T \frac{\partial \mathbf{L_{SR}}}{\partial \theta} \mathbf{i_r}
$$

对于三相电机，展开形式为：

$$
T_e = N_p L_m \left[ (i_{as}i_{ar} + i_{bs}i_{br} + i_{cs}i_{cr}) \sin\theta + \dots \right]
$$

其中 $N_p$ 为极对数，转矩方向满足电动机惯例。

### 4. 离散化形式

采用梯形积分法对电压方程进行离散化，得到历史电流源等效形式：

$$
\mathbf{u}(t) + \mathbf{u}(t-\Delta t) = \left( \mathbf{R} + \frac{2}{\Delta t}\mathbf{L}(t) \right) \mathbf{i}(t) + \left( \mathbf{R} - \frac{2}{\Delta t}\mathbf{L}(t-\Delta t) \right) \mathbf{i}(t-\Delta t)
$$
## 元件说明

### 属性
CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](/docs/documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/20-WoundRotorIMRouter/_parameters.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters />

### 引脚

import Pins from './_pins.md'

<Pins />

### 使用说明

#### 1. ModelType参数说明，区别与使用建议
**ModelType**用于选择电机转子端口种类，包括电气端口和控制端口两类。
| 模式名称 | 核心特性 | 适用场景 | 使用建议 |
|----------|----------|----------|----------|
| 电气端口 | 元件内部完整求解电机电磁暂态方程，定转子端口仅作电气连接 | 电机本体特性仿真，空载启动，故障暂态分析 | 优先选择，精度最高 |
| 控制端口 | 开放电磁状态量与控制接口，可输入三相电压信号和量测电流信号 | 自定义控制策略，双馈风机矢量控制，算法验证 | 仅需自定义控制时选用 |

#### 2. ConstGMat参数说明，区别与使用建议
**ConstGMat**用于是否选择恒等效导纳矩阵模型，仅适用于电气转子端口模型。
| 模式名称 | 核心特性 | 适用场景 | 使用建议 |
|----------|----------|----------|----------|
| 变导纳矩阵 | 每步更新节点电导矩阵，完整模拟电感动态变化 | 高精度暂态仿真，故障分析，启动过程 | 速度慢，精度高|
| 恒定导纳矩阵 | 全程使用固定电导矩阵，仅更新历史电流源 | 大规模风电场，长时间序列仿真 | 速度快，精度可能数值不稳定 |

## 案例
### 1. ConstGMat模块两种参数下的案例文档链接
- 电机中ConstGMat模块选用恒定导纳矩阵时，
> 案例链接：[CloudPSS开源算例：双馈风机01型-平均模型-标准模型-v1](https://cloudpss.net/model/open-cloudpss/WTG_DFIG_01-avm-std-v1b3)
- 电机中ConstGMat模块选用变导纳矩阵时，
> 案例链接：[CloudPSS开源算例：双馈风机01型-快速详细模型-标准模型-v1](https://cloudpss.net/model/open-cloudpss/WTG_DFIG_01-fdm-std-v1b3)

### 2. ModelType模块选择为Control时的案例文档链接
> 案例链接：[CloudPSS开源算例：双馈电机双PWM平均化控制](https://cloudpss.net/model/CloudPSS/DFIG_AVM)

## 常见问题

**绕线式和笼型感应电机的区别？**
: 笼型电机转子绕组短路封闭，无法外接；绕线式电机转子端口引出，可外接变流器，电阻实现调速，软启动，是双馈风机的标准电机结构。

**转子参数需要归算吗？**
: 本元件转子参数已自动归算至定子侧，直接输入电机铭牌参数即可。## 元件说明

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>


## 案例

## 常见问题
