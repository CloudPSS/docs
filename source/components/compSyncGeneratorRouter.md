---
title: 同步发电机
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 900

classname: SyncGeneratorRouter
symbol: SyncGen
---
## 基本描述
{% compsymbol SyncGen %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Poles |  | 极数（不是极对数） | 整数（常量） |  |
| Rated Power | MVA | 额定容量 | 实数（常量） |  |
| Rated Voltage (L-G, RMS) | kV | 额定相电压有效值 | 实数（常量） |  |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） |  |
| Neutral Resistance | p.u. | 中性点电阻 | 实数（常量） |  |
| Parameter Format |  | 参数输入方式 | 选择 |  |

### Equivalent Circuit Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | 定子电阻 | 实数（常量） |  |
| Stator Leakage Reactance | p.u. | 定子漏电抗 | 实数（常量） |  |
| Q-Axis Synch. Reactance | p.u. | q轴同步电抗 | 实数（常量） |  |
| D-Axis Synch. Reactance | p.u. | d轴同步电抗 | 实数（常量） |  |
| Field Resistance | p.u. | d轴励磁绕组电阻 | 实数（常量） |  |
| Field Leakage Reactance | p.u. | d轴励磁绕组漏电抗 | 实数（常量） |  |
| D-Axis Damper Resistance | p.u. | d轴阻尼D绕组电阻 | 实数（常量） |  |
| D-Axis Damper Leakage Reactance | p.u. | d轴阻尼D绕组漏电抗 | 实数（常量） |  |
| Q-Axis Damper No. 1 Resistance | p.u. | q轴阻尼绕组1电阻（g绕组） | 实数（常量） |  |
| Q-Axis Damper No. 1 Leakage Reactance | p.u. | q轴阻尼绕组1漏电抗（g绕组） | 实数（常量） |  |
| Q-Axis Damper No. 2 Resistance | p.u. | q轴阻尼绕组2电阻（Q绕组） | 实数（常量） |  |
| Q-Axis Damper No. 2 Leakage Reactance | p.u. | q轴阻尼绕组2漏电抗（Q绕组） | 实数（常量） |  |

### Experimental Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | 定子电阻 | 实数（常量） |  |
| Stator Leakage Reactance | p.u. | 定子漏电抗 | 实数（常量） |  |
| D-Axis Synch. Reactance | p.u. | d轴同步电抗 | 实数（常量） |  |
| D-Axis Transient Reactance | p.u. | d轴暂态电抗 | 实数（常量） |  |
| D-Axis Sub-Transient Reactance | p.u. | d轴次暂态电抗 | 实数（常量） |  |
| Q-Axis Sync. Reactance | p.u. | q轴同步电抗 | 实数（常量） |  |
| Q-Axis Transient Reactance | p.u. | q轴暂态电抗 | 实数（常量） |  |
| Q-Axis Sub-Transient Reactance | p.u. | q轴次暂态电抗 | 实数（常量） |  |
| D-Axis Transient Time (Open Circuit) | s | d轴励磁f绕组、定子开路时间常数 | 实数（常量） |  |
| D-Axis Sub-Transient Time (Open Circuit) | s | d轴阻尼D绕组、定子开路时间常数 | 实数（常量） |  |
| Q-Axis Transient Time (Open Circuit) | s | q轴阻尼g绕组、定子开路时间常数 | 实数（常量） |  |
| Q-Axis Sub-Transient Time (Open Circuit) | s | q轴阻尼Q绕组、定子开路时间常数 | 实数（常量） |  |

### Rotor Equation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Control Type |  | 选择控制类型 | 选择 |  |
| Inertia Constant | s | 发电机转子惯性时间常数 | 实数（常量） |  |
| Damping Constant | s | 机械阻尼时间常数 | 实数（常量） |  |

### Initial Condition
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Startup Type |  |  | 选择 |  |
| Ramping Time | s | 爬坡时间 | 实数（常量） |  |
| Initial Voltage Magnitude | p.u. | 初始相电压标幺值 | 实数（常量） |  |
| Initial Voltage Phase | Deg | 初始相电压相位 | 实数（常量） |  |
| Initial Active Power | MW | 初始有功功率 | 实数（常量） |  |
| Initial Reactive Power | MVar | 初始无功功率 | 实数（常量） |  |
| Source to Machine Transition Signal |  | 电压源-电机切换信号 | 文本 |  |
| Rotor Unlocking Signal |  | 转子方程解锁信号 | 文本 |  |

### Power Flow Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | 节点类型 | 选择 |  |
| Injected Active Power | MW | 节点注入有功功率 | 实数（常量） |  |
| Injected Reactive Power | MVar | 节点注入无功功率 | 实数（常量） |  |
| Bus Voltage Magnitude | p.u. | 母线电压幅值 | 实数（常量） |  |
| Bus Voltage Angle | Deg | 母线电压相位 | 实数（常量） |  |
| Lower Voltage Limit | p.u. | 母线电压下限 | 实数（常量） |  |
| Upper Voltage Limit | p.u. | 母线电压上限 | 实数（常量） |  |
| Lower Reactive Power Limit | MVar | 无功功率下限 | 实数（常量） |  |
| Upper Reactive Power Limit | MVar | 无功功率上限 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source to Machine Signal | 电压源-电机切换信号 | 文本 |  |
| Rotor Unlocking Signal | 转子方程解锁信号 | 文本 |  |
| Initial Open-Circuit Voltage (Ef) \[p.u.\] | 稳态开路电势Ef0量测信号 | 文本 |  |
| Initial Mechanical Torque \[p.u.\] | 稳态机械转矩Tm0量测信号 | 文本 |  |
| Rotor Speed \[p.u.\] | 转速量测信号 | 文本 |  |
| Rotor Angle \[Rad\] | 转子角量测信号 | 文本 |  |
| Load Angle \[Rad\] | Q轴与端电压相量夹角 | 文本 |  |
| Terminal RMS Voltage \[p.u.\] | 定子端电压有效值量测信号 | 文本 |  |
| Terminal RMS Current \[p.u.\] | 定子端电流有效值量测信号 | 文本 |  |
| Terminal Active Power \[MW\] | 定子端输出有功功率信号 | 文本 |  |
| Terminal Reactive Power \[MVar\] | 定子端输出无功功率信号 | 文本 |  |
| Terminal 3 Phase Current Vector \[kA\] | 定子端三相电流 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Stator Port | 3×1 | |                   
| w | 1×1 | |                   
| Tm | 1×1 | |                   
| Te | 1×1 | |                   
| Ef | 1×1 | |                   
| If | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了同步发电机的典型应用。

## 相关元件


