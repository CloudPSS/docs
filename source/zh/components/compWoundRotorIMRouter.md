---
title: 绕线式感应电机
author: 
author_email:

date: 2019/12/23
updated: 2019/12/23

type: components
category: 3009
order: 2000

classname: WoundRotorIMRouter
symbol: WoundIM
---
## 基本描述
{% compsymbol BLDC %}

> **该元件用以建模绕线式感应电机。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入绕线式感应电机名称，可缺省 |
| Rated Power | MVA | 额定容量 | 实数（常量） | 绕线式感应电机额定容量 |
| Rated Stator Voltage (L-L, RMS) | kV | 额定线电压有效值 | 实数（常量） | 绕线式感应电机额定线电压有效值 |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） | 绕线式感应电机额定频率 |
| Stator / Rotor Turns Ratio | kA | 定/转子绕组匝数比（变比） | 实数（常量） | 绕线式感应电机定/转子绕组匝数比（变比） |
| Is Stator Neutral Grounded? |  | 定子中性点是否接地？ | 选择 | 选择yes代表中性点直接接地，选择no将引出中性点引脚。 |
| Number of Pole Pairs | p.u. | 极对数 | 整数（常量） | 填入电机极对数 |
| Model Type |  | 选择转子端口种类 | 选择 | 选择转子端口为电气端口或控制端口。 |
| Parameter Format |  | 参数输入类型 | 选择 | 可选择有名值输入模式或标幺值输入模式。 |

### Actual Value Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | Ω | 定子绕组电阻 | 实数（常量） | 无 |
| Rotor Resistance | Ω | 转子绕组电阻 | 实数（常量） | 无 |
| Stator Leakage Reactance | H | 定子绕组漏电抗 | 实数（常量） | 无 |
| Rotor Leakage Reactance | H | 转子绕组漏电抗 | 实数（常量） | 无 |
| Magnetizing Reactance | H | 励磁电抗（Xmd） | 实数（常量） | 无 |

### Per-unit Value Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Stator Resistance | p.u. | 定子绕组电阻 | 实数（常量） | 无 |
| Rotor Resistance | p.u. | 转子绕组电阻 | 实数（常量） | 无 |
| Stator Leakage Reactance | p.u. | 定子绕组漏电抗 | 实数（常量） | 无 |
| Rotor Leakage Reactance | p.u. | 转子绕组漏电抗 | 实数（常量） | 无 |
| Magnetizing Reactance | p.u. | 励磁电抗（Xmd） | 实数（常量） | 无 |

### Rotor Equation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Inertia Constant | s | 发电机转子惯性时间常数 | 实数（常量） | 此处应填写惯性时间常数$T_J=2H$，其中H为惯性常数（北美和欧洲参数形式） |
| Damping Constant | s | 机械阻尼时间常数 | 实数（常量） |  |
| Initial Rotor Speed | s | 电机初始转速 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Stator Current \[kA\] | 定子端三相线电流瞬时值 | 文本 | 此处输入定子端三相线电流瞬时值量测信号的标签，以#号开头，如#Is |
| RMS Stator Current \[p.u.\] | 定子端三相电流有效值量测信号 | 文本 | 此处输入定子端三相电流有效值量测信号量测信号的标签，以#号开头，如#Irms |
| RMS Stator Voltage \[p.u.\] | 定子端三相电压有效值 | 文本 | 此处输入定子端三相电压有效值量测信号的标签，以#号开头，如#Vrms |
| Mechanical Speed \[p.u.\] | 转子机械转速量测信号 | 文本 | 此处输入转子机械转速量测信号的标签，以#号开头，如#w |
| Rotor Position \[Rad\] | 转子角位置量测信号 | 文本 | 此处输入转子角位置量测信号的标签，以#号开头，如#Theta |
| Electrical Torque \[p.u.\] | 电磁转矩量测信号 | 文本 | 此处输入电磁转矩量测信号的标签，以#号开头，如#Te |
| Mechanical Torque \[p.u.\] | 机械转矩量测信号 | 文本 | 此处输入机械转矩量测信号的标签，以#号开头，如#Tm |
| Active Power \[MW\] | 定子侧有功功率 | 文本 | 此处输入定子端输出有功功率信号量测信号的标签，以#号开头，如#Pmsr |
| Reactive Power \[MVar\] | 定子侧无功功率 | 文本 | 此处输入定子端输出无功功率信号量测信号的标签，以#号开头，如#Qmsr |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Stator Port \[p.u.\] | 3×1 | 定子端引脚（单线图） |
| Rotor Port \[p.u.\] | 3×1 | 转子端电气引脚（单线图） |
| Neutral Point \[p.u.\] | 1×1 | 中性点引脚 |
| Input Rotor Voltage \[p.u.\] | 3×1 | 转子端输入控制引脚（单线图） |
| Input Speed \[p.u.\] | 1×1 | 转速信号输入引脚，转速控制模式 |
| Control Switch Signal \[p.u.\] | 1×1 | 切换控制模式，0为转速控制，1为转矩控制 |
| Input Torque \[p.u.\] | 1×1 | 转矩信号输入引脚，转矩控制模式 |
| Measured Rotor Current \[p.u.\] | 1×1 | 转矩信号输入引脚，转矩控制模式 |


## 相关元件


