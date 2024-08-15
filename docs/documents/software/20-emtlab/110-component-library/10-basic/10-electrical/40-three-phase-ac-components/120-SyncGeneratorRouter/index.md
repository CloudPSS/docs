---
title: "同步发电机"
description: "同步发电机"
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

### 使用说明

**同步发电机的启动方法**

CloudPSS 提供了 3 种同步发电机的启动方法，通过修改参数表的`Initial Condition`栏内参数可以选择不同的启动方式。具体如下： 

**1.平启动**

    设定`Initial Condition`->`Startup Type`为`from Zero-state`，即可实现平启动，相当于不采用任何特殊启动方法。

    需要说明的是，**平启动**模式下，同步发电机量测标识中`稳态开路电势 Ef0 量测信号`、`稳态机械转矩 Tm0 量测信号`无意义。

**2.稳态启动**

    设定`Initial Condition`->`Startup Type`为`from Steady-state`，即稳态启动。此时电机需要设置`Initial Voltage Magnitude`（初始相电压标幺值）, `Initial Voltage Phase`（初始相电压相位），`Initial Active Power`（初始有功功率），`Initial Reactive Power`（初始无功功率）四个参数。此类启动方式适用于整个系统从潮流断面直接启动，详见 [潮流断面启动](../../../../../60-power-flow/30-initializing-from-power-flow-results/index.md) 功能。

**3.电压源转电机**

    设定`Initial Condition`栏中`Startup Type`为`Source to Machine`，即电压源转电机启动类型。此时需要指定`Ramping Time`（电压爬升时间），`Initial Voltage Magnitude`（初始相电压标幺值），`Initial Voltage Phase`（初始相电压相位），以及`Source to Machine Transition Signal`（电压源-电机切换信号）动态参数，动态参数的使用详见 [参数及引脚体系](../../../../../../20-emtlab/40-simstudio/30-modeling/10-params-variables-pins/index.md)。如：可填入`@S2M`。`@S2M`信号由一个阶跃信号发生器产生，是一个从 0 阶跃到 1 的信号。在`@S2M`为 0 时，电机为一个理想电压源，其幅值和相位线性爬升至`Initial Voltage Magnitude`，`Initial Voltage Phase`两参数给定的端电压值。当`@S2M`信号阶跃到 1 时，电压源切换为电机。

    需要说明的是，**电压源转电机**模式下，同步发电机量测标识中`稳态开路电势 Ef0 量测信号`、`稳态机械转矩 Tm0 量测信号`、`转子角量测信号`以及`Q 轴与端电压相量夹角信号`在`@S2M`信号为 1 前，均无意义。

**同步发电机转子转速解锁信号**

默认情况下，无论选择转速控制模式还是转矩控制模式，同步发电机的转子均处在额定转速下的锁转速模式。需要用户提供`Rotor Unlocking Signal`动态参数来进行解锁。如：可填入`@L2N`。`@L2N` 信号由一个阶跃信号发生器产生，是一个从 0 阶跃到 1 的信号。在`@L2N`为 0 时，转速恒定为额定转速。当`@L2N`信号阶跃到 1 时，转速放开。在转速控制模式下，转速与输入的受控信号相同；在转矩控制下，转速由转速方程控制。

## 案例

## 常见问题
