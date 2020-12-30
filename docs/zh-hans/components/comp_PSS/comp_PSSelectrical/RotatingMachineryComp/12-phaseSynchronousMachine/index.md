---
title: 十二相同步发电机
author: 
author_email:

date: 2019/12/23
updated: 2019/12/23

type: components
category: 3009
order: 3003

classname: SyncGeneratorBase12p
symbol: 十二相同步发电机
---

## 参数列表

### Configuration




| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Name |  | 元件名称 | 文本 |  |
| Poles |  | 极数（不是极对数） | 整数（常量） |  |
| Rated Power | MVA | 额定容量 | 实数（常量） |  |
| Rated Voltage (L-G, RMS) | kV | 额定相电压有效值 | 实数（常量） |  |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） |  |
| Neutral Resistance | p.u. | 中性点电阻 | 实数（常量） |  |
| Parameter Format |  | 参数输入方式 | 选择 |  |
| Model Type |  | 选择电机模型 | 选择 |  |

### Equivalent Circuit Data

Equivalent Circuit Data


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| [Rs] Stator Resistance | p.u. | 定子电阻 | 实数（常量） |  |
| [Xqy] Q-Axis Synch. Reactance | p.u. | q轴同步电抗 | 实数（常量） |  |
| [Xdy] D-Axis Synch. Reactance | p.u. | d轴同步电抗 | 实数（常量） |  |
| [X0y] 0-Axis Synch. Reactance | p.u. | 0轴同步电抗 | 实数（常量） |  |
| [Xdm1] D-Axis Mutual Resistance 1 | p.u. | D轴定子绕组互抗（相隔1个或3个绕组） | 实数（常量） |  |
| [Xdm1] 0-Axis Mutual Resistance 1 | p.u. | 0轴定子绕组互抗（相隔1个或3个绕组） | 实数（常量） |  |
| [Xqdm1] D- To Q-Axis Mutual Resistance 1 | p.u. | D-Q轴间定子绕组互抗（相隔1个或3个绕组） | 实数（常量） |  |
| [Xdm2] D-Axis Mutual Resistance 2 | p.u. | D轴定子绕组互抗（相隔2个绕组） | 实数（常量） |  |
| [Xdm2] 0-Axis Mutual Resistance 2 | p.u. | 0轴定子绕组互抗（相隔2个绕组） | 实数（常量） |  |
| [Xqdm2] D- To Q-Axis Mutual Resistance 2 | p.u. | D-Q轴间定子绕组互抗（相隔2个绕组） | 实数（常量） |  |
| [Rfd] Field Resistance | p.u. | d轴励磁绕组电阻 | 实数（常量） |  |
| [Xlfd] Field Leakage Reactance | p.u. | d轴励磁绕组漏电抗 | 实数（常量） |  |
| [Rkd] D-Axis Damper Resistance | p.u. | d轴阻尼D绕组电阻 | 实数（常量） |  |
| [Xlkd] D-Axis Damper Leakage Reactance | p.u. | d轴阻尼D绕组漏电抗 | 实数（常量） |  |
| [Rkq1] Q-Axis Damper No. 1 Resistance | p.u. | q轴阻尼绕组1电阻（g绕组） | 实数（常量） |  |
| [Xlkq1] Q-Axis Damper No. 1 Leakage Reactance | p.u. | q轴阻尼绕组1漏电抗（g绕组） | 实数（常量） |  |
| [Rkq2] Q-Axis Damper No. 2 Resistance | p.u. | q轴阻尼绕组2电阻（Q绕组） | 实数（常量） |  |
| [Xlkq2] Q-Axis Damper No. 2 Leakage Reactance | p.u. | q轴阻尼绕组2漏电抗（Q绕组） | 实数（常量） |  |

### Experimental Data

Experimental Data


| 参数名 |  描述 | 类型 | 备注 |
| ------ |  ---- |:----:| ---- |


### Rotor Equation

Rotor Equation


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Control Type |  | 选择控制类型 | 选择 |  |
| Inertia Constant | s | 发电机转子惯性时间常数 | 实数（常量） |  |
| Damping Constant | s | 机械阻尼时间常数 | 实数（常量） |  |

### Initial Condition

Initial Condition


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Startup Type |  |  | 选择 |  |
| Ramping Time | s | 爬坡时间 | 实数（常量） |  |
| Initial Voltage Magnitude | p.u. | 初始相电压标幺值 | 实数（常量） |  |
| Initial Voltage Phase | Deg | 初始相电压相位 | 实数（常量） |  |
| Initial Active Power | MW | 初始有功功率 | 实数（常量） |  |
| Initial Reactive Power | MVar | 初始无功功率 | 实数（常量） |  |
| Source to Machine Transition Signal |  | 电压源-电机切换信号 | 虚拟引脚（输入） |  |
| Rotor Unlocking Signal |  | 转子方程解锁信号 | 虚拟引脚（输入） |  |

### Monitoring

Monitoring


| 参数名 |  描述 | 类型 | 备注 |
| ------ |  ---- |:----:| ---- |
| Source to Machine Signal |  电压源-电机切换信号 | 虚拟引脚（输出） |  |
| Rotor Unlocking Signal |  转子方程解锁信号 | 虚拟引脚（输出） |  |
| Initial Open-Circuit Voltage (Ef) [p.u.] |  稳态开路电势Ef0量测信号 | 虚拟引脚（输出） |  |
| Initial Mechanical Torque [p.u.] |  稳态机械转矩Tm0量测信号 | 虚拟引脚（输出） |  |
| Rotor Speed [p.u.] |  转速量测信号 | 虚拟引脚（输出） |  |
| Rotor Angle [Rad] |  转子角量测信号 | 虚拟引脚（输出） |  |
| Load Angle (Q-axis Leads Va)[Rad] |  Q轴与端电压相量夹角 | 虚拟引脚（输出） |  |
| Load Angle (Q-axis Leads ωₛ*t)[Rad] |  Q轴与同步旋转坐标系夹角 | 虚拟引脚（输出） |  |
| Terminal RMS Voltage [p.u.] |  定子端电压有效值量测信号 | 虚拟引脚（输出） |  |
| Terminal RMS Current [p.u.] |  定子端电流有效值量测信号 | 虚拟引脚（输出） |  |
| Terminal Active Power [MW] |  定子端输出有功功率信号 | 虚拟引脚（输出） |  |
| Terminal Reactive Power [MVar] |  定子端输出无功功率信号 | 虚拟引脚（输出） |  |
| Terminal Current Vector [kA] |  定子端多相电流 | 虚拟引脚（输出） |  |



## 端口列表

| 端口名 | 描述 | 类型 | 数据维数 |
| ------ | ---- |:----:|:--------:|
| Stator Port |  | 电气 | 12 x 1 |
| w |  | 输入 | 1 x 1 |
| Tm |  | 输入 | 1 x 1 |
| Te |  | 输出 | 1 x 1 |
| Ef |  | 输入 | 1 x 1 |
| If |  | 输出 | 1 x 1 |




