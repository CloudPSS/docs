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

> **该元件用以建模三相同步电机。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入同步电机名称，可缺省 |
| Poles |  | 极数（不是极对数） | 整数（常量） | 电机级数，为极对数的两倍 |
| Rated Power | MVA | 额定容量 | 实数（常量） | 电机额定容量，也是电机标幺值系统的基准容量 |
| Rated Voltage (L-G, RMS) | kV | 额定相电压有效值 | 实数（常量） | 电机额定相电压有效值 |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） | 电机额定电频率，非转子转动频率 |
| Neutral Resistance | p.u. | 中性点电阻 | 实数（常量） | 电机定子侧中性点的接地电阻，基值同定子绕组参数的基值 |
| Parameter Format |  | 参数输入方式 | 选择 | 可选择Equivalent Circuit Data（等效电路参数）和Experimental Data（试验参数）两种参数输入方法 |

### Equivalent Circuit Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | 定子电阻 | 实数（常量） | 无 |
| Stator Leakage Reactance | p.u. | 定子漏电抗 | 实数（常量） | 无 |
| Q-Axis Synch. Reactance | p.u. | q轴同步电抗 | 实数（常量） | 无 |
| D-Axis Synch. Reactance | p.u. | d轴同步电抗 | 实数（常量） | 无 |
| Field Resistance | p.u. | d轴励磁绕组电阻 | 实数（常量） | 无 |
| Field Leakage Reactance | p.u. | d轴励磁绕组漏电抗 | 实数（常量） | 无 |
| D-Axis Damper Resistance | p.u. | d轴阻尼D绕组电阻 | 实数（常量） | 无 |
| D-Axis Damper Leakage Reactance | p.u. | d轴阻尼D绕组漏电抗 | 实数（常量） | 无 |
| Q-Axis Damper No. 1 Resistance | p.u. | q轴阻尼绕组1电阻（g绕组） | 实数（常量） | 无 |
| Q-Axis Damper No. 1 Leakage Reactance | p.u. | q轴阻尼绕组1漏电抗（g绕组） | 实数（常量） | 无 |
| Q-Axis Damper No. 2 Resistance | p.u. | q轴阻尼绕组2电阻（Q绕组） | 实数（常量） | 无 |
| Q-Axis Damper No. 2 Leakage Reactance | p.u. | q轴阻尼绕组2漏电抗（Q绕组） | 实数（常量） | 无 |

### Experimental Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | 定子电阻 | 实数（常量） | 无 |
| Stator Leakage Reactance | p.u. | 定子漏电抗 | 实数（常量） | 无 |
| D-Axis Synch. Reactance | p.u. | d轴同步电抗 | 实数（常量） | 无 |
| D-Axis Transient Reactance | p.u. | d轴暂态电抗 | 实数（常量） | 无 |
| D-Axis Sub-Transient Reactance | p.u. | d轴次暂态电抗 | 实数（常量） | 无 |
| Q-Axis Sync. Reactance | p.u. | q轴同步电抗 | 实数（常量） | 无 |
| Q-Axis Transient Reactance | p.u. | q轴暂态电抗 | 实数（常量） | 无 |
| Q-Axis Sub-Transient Reactance | p.u. | q轴次暂态电抗 | 实数（常量） | 无 |
| D-Axis Transient Time (Open Circuit) | s | d轴励磁f绕组、定子开路时间常数 | 实数（常量） | 无 |
| D-Axis Sub-Transient Time (Open Circuit) | s | d轴阻尼D绕组、定子开路时间常数 | 实数（常量） | 无 |
| Q-Axis Transient Time (Open Circuit) | s | q轴阻尼g绕组、定子开路时间常数 | 实数（常量） | 无 |
| Q-Axis Sub-Transient Time (Open Circuit) | s | q轴阻尼Q绕组、定子开路时间常数 | 实数（常量） | 无 |

### Rotor Equation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Control Type |  | 选择控制类型 | 选择 | 选择Speed Control（转速控制）或Torque Control（转矩控制）模式 |
| Inertia Constant | s | 发电机转子惯性时间常数 | 实数（常量） | 此处应填写惯性时间常数$T_J=2H$，其中H为惯性常数（北美和欧洲参数形式） |
| Damping Constant | s | 机械阻尼时间常数 | 实数（常量） |  |

### Initial Condition
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Startup Type |  |  | 选择 | 选择发电机初始化类型，分为from Zero-state（平启动），from Steady-state（稳态启动），VT Ramping（端电压爬升启动），Ef Ramping（励磁电压爬升启动）和Source to Machine（电压源转电机）五种方式 |
| Ramping Time | s | 爬坡时间 | 实数（常量） | 选择VT Ramping和Ef Ramping模式时需要指定 |
| Initial Voltage Magnitude | p.u. | 初始相电压标幺值 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式时需指定 |
| Initial Voltage Phase | Deg | 初始相电压相位 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式时需指定 |
| Initial Active Power | MW | 初始有功功率 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式时需指定 |
| Initial Reactive Power | MVar | 初始无功功率 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式时需指定 |
| Source to Machine Transition Signal |  | 电压源-电机切换信号 | 文本 | 电压源向电机切换的触发信号名称，填写以@符号开头的字符串名，如@S2M。选择Source to Machine模式时需指定 |
| Rotor Unlocking Signal |  | 转子方程解锁信号 | 文本 | 控制转子运动方程解锁的信号名，填写以@符号开头的字符串名，如@L2N。若此处为空，则电机转子始终处于转速锁定状态 |

### Power Flow Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | 节点类型 | 选择 | 该功能暂未开放 |
| Injected Active Power | MW | 节点注入有功功率 | 实数（常量） | 该功能暂未开放 |
| Injected Reactive Power | MVar | 节点注入无功功率 | 实数（常量） | 该功能暂未开放 |
| Bus Voltage Magnitude | p.u. | 母线电压幅值 | 实数（常量） | 该功能暂未开放 |
| Bus Voltage Angle | Deg | 母线电压相位 | 实数（常量） | 该功能暂未开放 |
| Lower Voltage Limit | p.u. | 母线电压下限 | 实数（常量） | 该功能暂未开放 |
| Upper Voltage Limit | p.u. | 母线电压上限 | 实数（常量） | 该功能暂未开放 |
| Lower Reactive Power Limit | MVar | 无功功率下限 | 实数（常量） | 该功能暂未开放 |
| Upper Reactive Power Limit | MVar | 无功功率上限 | 实数（常量） | 该功能暂未开放 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source to Machine Signal | 电压源-电机切换信号 | 文本 | 此处输入电压源-电机切换信号量测信号的标签，以#号开头，如#S2M |
| Rotor Unlocking Signal | 转子方程解锁信号 | 文本 | 此处输入转子方程解锁信号量测信号的标签，以#号开头，如#L2N |
| Initial Open-Circuit Voltage (Ef) \[p.u.\] | 稳态开路电势Ef0量测信号 | 文本 | 此处输入稳态开路电势Ef0量测信号量测信号的标签，以#号开头，如#Ef0 |
| Initial Mechanical Torque \[p.u.\] | 稳态机械转矩Tm0量测信号 | 文本 | 此处输入稳态机械转矩Tm0量测信号量测信号的标签，以#号开头，如#Tm0 |
| Rotor Speed \[p.u.\] | 转速量测信号 | 文本 | 此处输入转速量测信号量测信号的标签，以#号开头，如#w |
| Rotor Angle \[Rad\] | 转子角量测信号 | 文本 | 此处输入转子角量测信号量测信号的标签，以#号开头，如#Theta |
| Load Angle \[Rad\] | Q轴与端电压相量夹角 | 文本 | 此处输入Q轴与端电压相量夹角量测信号的标签，以#号开头，如#LA |
| Terminal RMS Voltage \[p.u.\] | 定子端电压有效值量测信号 | 文本 | 此处输入定子端电压有效值量测信号量测信号的标签，以#号开头，如#Vrms |
| Terminal RMS Current \[p.u.\] | 定子端电流有效值量测信号 | 文本 | 此处输入定子端电流有效值量测信号量测信号的标签，以#号开头，如#Irms |
| Terminal Active Power \[MW\] | 定子端输出有功功率信号 | 文本 | 此处输入定子端输出有功功率信号量测信号的标签，以#号开头，如#Pmsr |
| Terminal Reactive Power \[MVar\] | 定子端输出无功功率信号 | 文本 | 此处输入定子端输出无功功率信号量测信号的标签，以#号开头，如#Qmsr |
| Terminal 3 Phase Current Vector \[kA\] | 定子端三相电流 | 文本 | 此处输入定子端三相电流量测信号的标签，以#号开头，如#Iabc |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Stator Port | 3×1 | 定子端引脚（单线图） |                   
| w | 1×1 | 转速信号输入引脚，转速控制模式 |                   
| Tm | 1×1 | 机械转矩信号输入引脚，转矩控制模式 |                   
| Te | 1×1 | 电磁转矩信号输出引脚 |                   
| Ef | 1×1 | 励磁电动势输入引脚 |                   
| If | 1×1 | 励磁电流输出引脚 |                   

## 使用说明

同步电机标幺值与有名值的转换关系，请参考[CloudPSS同步电机标幺值和有名值系统](/other/SyncGenPerUnitSystem.html)。


## 测试模型
[<test name>](<test link>)显示了同步发电机的典型应用。

## 相关元件


