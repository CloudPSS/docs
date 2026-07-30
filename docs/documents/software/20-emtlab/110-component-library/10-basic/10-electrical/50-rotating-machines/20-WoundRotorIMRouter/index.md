---
title: "绕线式感应电机"
description: "本元件为 CloudPSS 平台下的三相绕线式感应电机元件，采用相域（Phase Domain）建模，支持 abc 三相静止坐标系下的电磁暂态仿真。适用于异步电机调速、风力发电、工业传动等场景的暂态分析与控制算法验证。"
tags:
- emtlab
- components
---


![绕线式感应电机](./wound-rotor-induction-motor.png "绕线式感应电机")

## 元件定义

绕线式感应电机是基于相域建模的三相异步电机元件，在 abc 三相静止坐标系下直接求解定子与转子的电压方程、磁链方程与电磁转矩方程，无需进行 dq 坐标变换。元件支持绕线式转子结构，转子绕组可通过滑环外接电阻或电力电子装置，适用于绕线式异步电机调速、双馈风力发电、串级调速等系统的电磁暂态仿真。

## 元件说明

### 工作原理

元件在 abc 三相静止坐标系下建立定子与转子电压方程、磁链方程、电磁转矩方程和运动方程。该模型不进行 dq0 坐标变换，因此可以直接描述三相不平衡、转子外接电阻以及转子位置变化引起的相间互感变化。

#### 1. 符号规定

- 定子三相绕组：a、b、c，相电阻 $R_s$，相电感 $L_s$
- 转子三相绕组：ar、br、cr，相电阻 $R_r$，相电感 $L_r$
- 转子位置角：$\theta_r$（转子 a 相与定子 a 相的夹角）
- 极对数：$n_p$
- 转动惯量：$J$
- 机械角速度：$\omega_m$

#### 2. 电压方程

定子侧与转子侧的电压方程均采用电阻压降 + 磁链微分的矩阵形式：

$$
\begin{bmatrix}
v_{sa} \\ v_{sb} \\ v_{sc}
\end{bmatrix}
=
\begin{bmatrix}
R_s & 0 & 0 \\
0 & R_s & 0 \\
0 & 0 & R_s
\end{bmatrix}
\begin{bmatrix}
i_{sa} \\ i_{sb} \\ i_{sc}
\end{bmatrix}
+
\frac{d}{dt}
\begin{bmatrix}
\psi_{sa} \\ \psi_{sb} \\ \psi_{sc}
\end{bmatrix}
$$

$$
\begin{bmatrix}
v_{ra} \\ v_{rb} \\ v_{rc}
\end{bmatrix}
=
\begin{bmatrix}
R_r & 0 & 0 \\
0 & R_r & 0 \\
0 & 0 & R_r
\end{bmatrix}
\begin{bmatrix}
i_{ra} \\ i_{rb} \\ i_{rc}
\end{bmatrix}
+
\frac{d}{dt}
\begin{bmatrix}
\psi_{ra} \\ \psi_{rb} \\ \psi_{rc}
\end{bmatrix}
$$

其中 $\psi_s$ 为定子磁链向量，$\psi_r$ 为转子磁链向量。

#### 3. 磁链方程

磁链与电流的关系采用分块矩阵形式表示，包含定子自感、转子自感和定转子互感三部分：

$$
\begin{bmatrix}
\boldsymbol{\psi_s} \\
\boldsymbol{\psi_r}
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{L_{SS}} & \mathbf{L_{SR}}(\theta_r) \\
\mathbf{L_{SR}}^T(\theta_r) & \mathbf{L_{RR}}
\end{bmatrix}
\begin{bmatrix}
\mathbf{i_s} \\
\mathbf{i_r}
\end{bmatrix}
$$

其中：
- $\mathbf{L_{SS}}$：定子电感矩阵，包含定子自感与定子相间互感，为常数矩阵
- $\mathbf{L_{RR}}$：转子电感矩阵，包含转子自感与转子相间互感，为常数矩阵
- $\mathbf{L_{SR}}(\theta_r)$：定转子互感矩阵，随转子位置角 $\theta_r$ 变化，是时变矩阵

定转子互感矩阵的各元素随转子位置按余弦规律变化：

$$
L_{SR,ij} = M_{sr} \cos\left(\theta_r + \frac{2\pi}{3}(k_i - k_j)\right)
$$

其中 $M_{sr}$ 为定转子同轴绕组的最大互感，$k_i$、$k_j$ 为各相的相位编号。

#### 4. 电磁转矩方程

电磁转矩通过磁场储能对转子位置角求导得到，形式为：

$$
T_e = \frac{1}{2} n_p \mathbf{i}^T \frac{\partial \mathbf{L}}{\partial \theta_r} \mathbf{i}
$$

展开后可表示为定转子电流与互感偏导数的乘积形式：

$$
T_e = n_p \mathbf{i_s}^T \cdot \frac{\partial \mathbf{L_{SR}}}{\partial \theta_r} \cdot \mathbf{i_r}
$$

电磁转矩与机械转矩的差值决定了转子的角加速度：

$$
J \frac{d\omega_m}{dt} = T_e - T_m - B\omega_m
$$

其中 $T_m$ 为机械负载转矩，$B$ 为阻尼系数。

#### 5. 离散化形式

电磁暂态仿真中，磁链微分方程采用梯形法进行离散化。离散化后，电机在外部电路中等效为诺顿电流源并联导纳矩阵的形式，与外部网络统一联立求解。

对于相域感应电机，定、转子互感会随转子位置变化而变化，因此等效导纳矩阵的处理方式会影响计算速度和数值稳定性。元件根据端口形式和导纳矩阵更新方式提供不同工作模式。

### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](/docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>


### 使用说明
#### ModelType 与 ConstGMat 工作模式说明

**ModelType**用于选择电机端口形式，**ConstGMat**用于选择导纳矩阵更新方式。二者共同决定绕线式感应电机的工作模式。

需要注意的是：当**ModelType**选择电气端口时，导纳矩阵可选择定导纳矩阵或变导纳矩阵；当**ModelType**选择外部控制端口时，元件仅采用定导纳矩阵。因此，该元件实际包含以下三种工作模式。

| 工作模式 | **ModelType** |**ConstGMat**| 端口形式 | 导纳矩阵方式 | 核心特性 | 适用场景 | 使用建议 |
|---|---:|---:|---|---|---|---|---|
| 电气端口-定导纳矩阵 | 1 | 0 | 电气端口 | 定导纳矩阵 | 元件内部求解电机电磁暂态方程，仿真过程中节点导纳矩阵保持不变，仅更新历史电流源项 | 多机系统、大规模风电场等 | 计算速度较快，会有数值不稳定问题 |
| 电气端口-变导纳矩阵 | 1 | 1 | 电气端口 | 变导纳矩阵 | 元件内部求解电机电磁暂态方程，并在每个仿真步长更新节点导纳矩阵，以反映转子位置变化引起的互感变化 | 电机启动、故障暂态、单机或小规模系统高精度仿真 | 数值稳定，但计算速度较慢 |
| 外部控制端口-定导纳矩阵 | 0 | 不生效 | 外部控制端口 | 定导纳矩阵 | 开放电机状态量与控制接口，外部控制器参与电磁量或控制量计算，电机本体作为受控执行单元 | 自定义电机控制策略、双馈风机转子侧控制、先进调速算法验证等 | 需要外部控制器参与建模使用，须配合外部控制逻辑 |

## 案例

### 1. （变导纳矩阵）算例
[**双馈风机01型-快速详细模型-标准模型-v1**](cloudpss:/model/open-cloudpss/WTG_DFIG_01-fdm-std-v1b3)  

### 2. （定导纳矩阵）算例
[**双馈风机01型-平均模型-标准模型-v1**](cloudpss:/model/open-cloudpss/WTG_DFIG_01-avm-std-v1b3)  

### 3. （外部控制端口）算例
[**双馈电机双 PWM 平均化控制**](https://cloudpss.net/model/zzx18193725965/DFIG_AVM)  

## 常见问题

**绕线式感应电机可否构造成笼型感应电机？**

: 可以近似构造。将转子端口短接，绕线式感应电机可近似等效为笼型感应电机。

