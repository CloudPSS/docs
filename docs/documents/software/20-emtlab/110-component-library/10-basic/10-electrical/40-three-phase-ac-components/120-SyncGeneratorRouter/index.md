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

**同步发电机等效电路参数折算方法**

同步发电机参数输入方式选用Equivalent Circuit Data（等效电路参数）时，可以基于试验参数通过下述折算方法进行设置：  
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



## 案例

## 常见问题
