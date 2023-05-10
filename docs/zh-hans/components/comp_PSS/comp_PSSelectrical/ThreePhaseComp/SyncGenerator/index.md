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
| Model Type |  | 选择电机模型 | 选择 | 可选择PD(Constant Conductance) 和VBR-dq0 两种电机模型 |

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
| Damping Constant | p.u. | 机械阻尼系数 | 实数（常量） |  |

### Initial Condition
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Startup Type |  |  | 选择 | 选择发电机初始化类型，分为from Zero-state（平启动），from Steady-state（稳态启动）和Source to Machine（电压源转电机）三种方式 |
| Ramping Time | s | 爬坡时间 | 实数（常量） | Source to Machine启动方式下，需指定电压爬升时间 |
| Initial Voltage Magnitude | p.u. | 初始相电压标幺值 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式和Source to Machine模式时需指定 |
| Initial Voltage Phase | Deg | 初始相电压相位 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式和Source to Machine模式时需指定 |
| Initial Active Power | MW | 初始有功功率 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式时需指定 |
| Initial Reactive Power | MVar | 初始无功功率 | 实数（常量） | 来自潮流计算结果，选择from Steady-state模式时需指定 |
| Source to Machine Transition Signal |  | 电压源-电机切换信号 | 文本 | 电压源向电机切换的触发信号名称，填写以@符号开头的字符串名，如@S2M。选择Source to Machine模式时需指定 |
| Rotor Unlocking Signal |  | 转子方程解锁信号 | 文本 | 控制转子运动方程解锁的信号名，填写以@符号开头的字符串名，如@L2N。若此处为空，则电机转子始终处于转速锁定状态 |

### Power Flow Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Bus Type |  | 节点类型 | 选择 | 用于潮流计算功能，指定电源所在母线的节点类型 |
| Injected Active Power | MW | 节点注入有功功率 | 实数（常量） | 用于潮流计算功能，对 PV、PQ 节点有效 |
| Injected Reactive Power | MVar | 节点注入无功功率 | 实数（常量） | 用于潮流计算功能，对 PQ 节点有效 |
| Bus Voltage Magnitude | p.u. | 母线电压幅值 | 实数（常量） | 用于潮流计算功能，对 PV、平衡节点有效 |
| Bus Voltage Angle | Deg | 母线电压相位 | 实数（常量） | 用于潮流计算功能，对平衡节点有效 |
| Lower Voltage Limit | p.u. | 母线电压下限 | 实数（常量） | 用于潮流计算功能，对 PQ 节点有效 |
| Upper Voltage Limit | p.u. | 母线电压上限 | 实数（常量） | 用于潮流计算功能，对 PQ 节点有效 |
| Lower Reactive Power Limit | MVar | 无功功率下限 | 实数（常量） | 用于潮流计算功能，对 PV、平衡节点有效 |
| Upper Reactive Power Limit | MVar | 无功功率上限 | 实数（常量） | 用于潮流计算功能，对 PV、平衡节点有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source to Machine Signal | 电压源-电机切换信号 | 文本 | 此处输入电压源-电机切换信号量测信号的标签，以#号开头，如#S2M |
| Rotor Unlocking Signal | 转子方程解锁信号 | 文本 | 此处输入转子方程解锁信号量测信号的标签，以#号开头，如#L2N |
| Initial Open-Circuit Voltage (Ef) \[p.u.\] | 稳态开路电势Ef0量测信号 | 文本 | 此处输入稳态开路电势Ef0量测信号量测信号的标签，以#号开头，如#Ef0 |
| Initial Mechanical Torque \[p.u.\] | 稳态机械转矩Tm0量测信号 | 文本 | 此处输入稳态机械转矩Tm0量测信号量测信号的标签，以#号开头，如#Tm0 |
| Rotor Speed \[p.u.\] | 转速量测信号 | 文本 | 此处输入转速量测信号量测信号的标签，以#号开头，如#w |
| Rotor Angle \[Rad\] | 转子角量测信号 | 文本 | 此处输入转子角量测信号量测信号的标签，以#号开头，如#Theta |
| Load Angle (Q-axis leads Va) \[Rad\] | Q轴与端电压相量夹角 | 文本 | 此处输入Q轴与端电压相量夹角量测信号的标签，以#号开头，如#LA |
| Load Angle (Q-axis leads ωₛ*t) \[Rad\] | Q轴与同步旋转坐标系夹角 | 文本 | 此处输入Q轴与同步旋转坐标系夹角量测信号的标签，以#号开头，如#LA1 |
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

同步电机标幺值与有名值的转换关系，请参考[CloudPSS同步电机标幺值和有名值系统](../../../../../other/SyncGenPerUnitSystem.md)。

### 同步发电机的启动方法

CloudPSS提供了3种同步发电机的启动方法，通过修改参数表的`Initial Condition`栏内参数可以选择不同的启动方式。具体如下： 
 
1.	平启动

    设定`Initial Condition`->`Startup Type`为`from Zero-state`，即可实现平启动，相当于不采用任何特殊启动方法。

    需要说明的是，`平启动`模式下，同步发电机量测标识中`稳态开路电势Ef0量测信号`、`稳态机械转矩Tm0量测信号`无意义。

2.	稳态启动

    设定`Initial Condition`->`Startup Type`为`from Steady-state`，即稳态启动。此时电机需要设置`Initial Voltage Magnitude`（初始相电压标幺值）, `Initial Voltage Phase`（初始相电压相位），`Initial Active Power`（初始有功功率），`Initial Reactive Power`（初始无功功率）四个参数。此类启动方式适用于整个系统从潮流断面直接启动，详见[潮流断面启动](../../../../../features/EMTP/Initialization/index.md)功能。

3.	电压源转电机

    设定`Initial Condition`栏中`Startup Type`为`Source to Machine`，即电压源转电机启动类型。此时需要指定`Ramping Time`（电压爬升时间），`Initial Voltage Magnitude`（初始相电压标幺值），`Initial Voltage Phase`（初始相电压相位），以及`Source to Machine Transition Signal`(电压源-电机切换信号)动态参数，动态参数的使用详见[参数及引脚体系](../../../../../features/Basic/ParameterSystem/index.md)。如：可填入`@S2M`。`@S2M`信号由一个阶跃信号发生器产生，是一个从0阶跃到1的信号。在`@S2M`为0时，电机为一个理想电压源，其幅值和相位线性爬升至`Initial Voltage Magnitude`，`Initial Voltage Phase`两参数给定的端电压值。当`@S2M`信号阶跃到1时，电压源切换为电机。

    需要说明的是，`电压源转电机`模式下，同步发电机量测标识中`稳态开路电势Ef0量测信号`、`稳态机械转矩Tm0量测信号`、`转子角量测信号`以及`Q轴与端电压相量夹角`信号在`@S2M`信号为1前，均无意义。

### 同步发电机转子转速解锁信号

默认情况下，无论选择转速控制模式还是转矩控制模式，同步发电机的转子均处在额定转速下的锁转速模式。需要用户提供`Rotor Unlocking Signal`动态参数来进行解锁。如：可填入`@L2N`。`@L2N`信号由一个阶跃信号发生器产生，是一个从0阶跃到1的信号。在`@L2N`为0时，转速恒定为额定转速。当`@L2N`信号阶跃到1时，转速放开。在转速控制模式下，转速与输入的受控信号相同；在转矩控制下，转速由转速方程控制。

## 相关元件


