---
title: 直流电机
author: 
author_email:

date: 2019/12/23
updated: 2019/12/23

type: components
category: 3009
order: 3003

classname: _DCMachine
symbol: DCMachine
---
## 基本描述


> **该元件用以建模直流电机。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入直流电机名称，可缺省 |
| Rated Armature Voltage | kV | 额定电枢电压 | 实数（常量） | 直流电机额定电枢电压 |
| Rated Armature Current | kA | 额定电枢电流 | 实数（常量） | 直流电机额定电枢电流 |
| Rated Field Current | kA | 额定励磁电流 | 实数（常量） | 直流电机额定励磁电流 |
| Speed at which Magetizing data is specified | p.u. | 确定电磁感应关系曲线时的转速 | 实数（常量） | 在确定电磁感应关系曲线时采用的转速，一般填写默认值1即可 |
| Magnetizing Data |  | 电磁感应曲线形式 | 选择 | 目前只可选择指数曲线形式。 |
| Armature Reaction |  | 电枢响应类型选择 | 选择 | 目前只可选择忽略电枢响应。 |

### Winding Parameters
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Armature Resistance | Ω | 电枢电阻 | 实数（常量） | 无 |
| Armature Inductance | H | 电枢电感 | 实数（常量） | 无 |
| Field Resistance | Ω | 励磁电阻 | 实数（常量） | 无 |
| Field Inductance | H | 励磁电感 | 实数（常量） | 无 |

### Magnetizing Curve Equation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Saturated Noload Voltage | p.u. | 饱和空载电压 | 实数（常量） | 为电磁感应曲线的比例系数常数。 |
| Saturation Constant | p.u. | 电磁感应曲线常数 | 实数（常量） | 为电磁感应曲线的指数系数常数。 |

### Rotor Equation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Control Type |  | 选择控制类型 | 选择 | 选择Speed Control（转速控制）或Torque Control（转矩控制）模式 |
| Inertia Constant | s | 发电机转子惯性时间常数 | 实数（常量） | 此处应填写惯性时间常数$T_J=2H$，其中H为惯性常数（北美和欧洲参数形式） |
| Damping Constant | s | 机械阻尼时间常数 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Rotor Speed \[p.u.\] | 转速量测信号 | 文本 | 此处输入转速量测信号量测信号的标签，以#号开头，如#w |
| Armature EMF \[kV\] | 电枢电动势测量信号 | 文本 | 此处输入电枢电动势测量信号的标签，以#号开头，如#Ea |
| Armature Voltage \[kV\] | 电枢电压测量信号 | 文本 | 此处输入电枢电压测量信号的标签，以#号开头，如#Va |
| Armature Current \[kA\] | 电枢电流测量信号 | 文本 | 此处输入电枢电流测量信号的标签，以#号开头，如#Ia |
| Field Current \[kA\] | 励磁电流测量信号 | 文本 | 此处输入励磁电流测量信号的标签，以#号开头，如#Irms |
| Electromagnetic Power \[MW\] | 电磁功率测量信号 | 文本 | 此处输入电磁功率测量信号的标签，以#号开头，如#Pe |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Armature + | 1×1 | 电枢绕组+端 |
| Armature - | 1×1 | 电枢绕组-端 |
| Field + | 1×1 | 励磁绕组+端 |
| Field - | 1×1 | 励磁绕组-端 |
| w | 1×1 | 电机转速输入引脚，转速控制模式 |
| Tm | 1×1 | 机械转矩信号输入引脚，转矩控制模式 |
| Te | 1×1 | 电磁转矩信号输出引脚 |


## 相关元件


