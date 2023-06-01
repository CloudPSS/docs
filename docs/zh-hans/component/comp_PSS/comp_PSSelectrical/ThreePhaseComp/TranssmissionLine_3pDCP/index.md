---
title: 三相长传输线[解耦]
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 401

classname: _TLine_Bergeron_3p_Decoupled
symbol: TLine_Bergeron_3p_Decoupled
---
## 基本描述


> **该元件为三相长传输线，用于分网解耦。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Line ID |  | 相同的ID代表同一根传输线，用于Bergeron模型分网并行计算 | 文本 |  |
| Steady-state Frequency | Hz | 额定频率 | 实数（常量） |  |
| Length of Line | km | 线路长度 | 实数（常量） |  |
| Parameter Format |  | 参数输入方式 | 选择 | 选择参数输入方式，标幺值和有名值两种 |
| 0 Seq. Data |  | 零序参数输入方法 | 选择 | 选择是否输入零序参数，若选择否，则零序参数与正序参数相同 |
| Has the Data Been Corrected for Long Line Effects? |  | 填入的线路参数是否已进行过长导线修正? | 选择 | 选择Yes或No，表示所填参数是否进行过长导线修正 |
| Model Type |  | 传输线模型种类 | 选择 | 选择传输线模型种类：Bergeron Line Model（贝格隆分布参数模型）或Lumped π-Model（π型集总参数模型）|

### R, X, B (p.u.)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Voltage (L-L, RMS) | kV | 额定电压 | 实数（常量） | 输入额定电压（电压基值） |
| Rated Power Capacity | MVA | 额定容量 | 实数（常量） | 输入额定容量（容量基值） |
| +/- Seq. Resistance | p.u./km | 单位长度正序电阻 | 实数（常量） | 输入单位长度正序电阻标幺值$R_1$ |
| +/- Seq. Inductive Reactance | p.u./km | 单位长度正序电抗 | 实数（常量） | 输入单位长度正序电抗标幺值$X_1$ |
| +/- Seq. Capacitive Susceptance | p.u./km | 单位长度正序电纳 | 实数（常量） | 输入单位长度正序电纳标幺值$B_1$ |
| 0 Seq. Resistance | p.u./km | 单位长度零序电阻 | 实数（常量） | 输入单位长度零序电阻标幺值$R_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Inductive Reactance | p.u./km | 单位长度零序电抗 | 实数（常量） | 输入单位长度零序电抗标幺值$X_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Capacitive Susceptance | p.u./km | 单位长度零序电纳 | 实数（常量） | 输入单位长度零序电纳标幺值$B_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |

### R, Xl, Xc (Ω)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| +/- Seq. Resistance | Ω/km | 单位长度正序电阻 | 实数（常量） | 输入单位长度正序电阻有名值$R_1$ |
| +/- Seq. Inductive Reactance | Ω/km | 单位长度正序感抗 | 实数（常量） | 输入单位长度正序串联电抗有名值$X_{l1}$ |
| +/- Seq. Capacitive Reactance | MΩ*km | 单位长度正序容抗 | 实数（常量） | 输入单位长度正序并联容抗有名值$X_{c1}$ |
| 0 Seq. Resistance | Ω/km | 单位长度零序电阻 | 实数（常量） | 输入单位长度零序电阻有名值$R_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Inductive Reactance | Ω/km | 单位长度零序感抗 | 实数（常量） | 输入单位长度零序串联电抗有名值$X_{l0}$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Capacitive Reactance | MΩ*km | 单位长度零序容抗 | 实数（常量） | 输入单位长度零序并联容抗有名值$X_{c0}$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Voltage Vector (Terminal) \[kA\] | 本侧端口电压向量 |  | 此处输入传输线本侧端口电压量测信号的标签（3×1维），以#号开头，如#Vabc |
| 3 Phase Current Vector (Terminal) \[kA\] | 本侧端口电流向量 |  | 此处输入传输线本侧端口电流量测信号的标签（3×1维），以#号开头，如#Iabc |
| RMS Current (Terminal) \[kA\] | 本侧端口电流均方根值 |  | 此处输入传输线本侧端口电流有效值量测信号的标签（1×1维），以#号开头，如#Irms |
| Active Power (Terminal) \[MW\] | 本侧端口有功功率（流入端口为正） |  | 此处输入传输线本侧端口有功功率量测信号的标签（1×1维），以#号开头，如#P |
| Reactive Power (Terminal) \[MVar\] | 本侧端口无功功率（流入端口的感性无功为正） |  | 此处输入传输线本侧端口无功功率量测信号的标签（1×1维），以#号开头，如#Q |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Electrical Pin | 3×1 | 电气 |
| 3-Phase Voltage(Other Side) | 3×1 | 另一端电压量测值 |
| 3-Phase Current(Other Side) | 3×1 | 另一端电流量测值 |

## 使用说明

 
## 相关元件


