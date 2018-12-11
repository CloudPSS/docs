---
title: 三相三绕组变压器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 800

classname: _newTransformer_3p3w
symbol: newTransformer_3p3w
---
## 基本描述
{% compsymbol newTransformer_3p3w %}

> **该元件用以建模三相三绕组变压器（单线图，中性点内置）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入三相三绕组变压器的名称（可缺省） |
| Winding #1 Rated Power | MVA | 绕组#1额定容量 | 实数（常量） | 绕组1的额定容量$S_{1N}$（所填变压器参数的功率基值） |
| Winding #2 Rated Power | MVA | 绕组#2额定容量 | 实数（常量） | 绕组2的额定容量$S_{2N}$（所填变压器参数的功率基值） |
| Winding #3 Rated Power | MVA | 绕组#3额定容量 | 实数（常量） | 绕组3的额定容量$S_{3N}$（所填变压器参数的功率基值） |
| Winding #1 Rated Voltage (L-L, RMS) | kV | 绕组#1额定线电压有效值 | 实数（常量） | 绕组1的额定电压有效值$V_{1N}$（所填变压器参数的电压基值） |
| Winding #2 Rated Voltage (L-L, RMS) | kV | 绕组#2额定线电压有效值 | 实数（常量） | 绕组2的额定电压有效值$V_{2N}$（所填变压器参数的电压基值） |
| Winding #3 Rated Voltage (L-L, RMS) | kV | 绕组#3额定线电压有效值 | 实数（常量） | 绕组3的额定电压有效值$V_{3N}$（所填变压器参数的电压基值） |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） | 变压器的额定频率$f_n$ |
| Winding #1 Type |  | 绕组#1连接类型 | 选择 | 选择绕组1的连接类型为星形(Y)或三角形(Delta) |
| Winding #2 Type |  | 绕组#2连接类型 | 选择 | 选择绕组2的连接类型为星形(Y)或三角形(Delta) |
| Winding #3 Type |  | 绕组#3连接类型 | 选择 | 选择绕组3的连接类型为星形(Y)或三角形(Delta) |
| Delta Lags or Leads Y |  | Delta绕组连接方式 | 选择 |选择Delta连接绕组电压超前或滞后Y连接绕组电压30°，仅当有绕组为三角形连接时起作用  |
| Winding #1 Neutral Point Resistance | Ω | 绕组#1中性点电阻 | 实数（常量） | 绕组1的中性点电阻$r_{1n}$，仅在星形连接下起作用 |
| Winding #2 Neutral Point Resistance | Ω | 绕组#2中性点电阻 | 实数（常量） | 绕组2的中性点电阻$r_{2n}$，仅在星形连接下起作用 |
| Winding #3 Neutral Point Resistance | Ω | 绕组#3中性点电阻 | 实数（常量） | 绕组3的中性点电阻$r_{3n}$，仅在星形连接下起作用 |
| Positive Sequence Leakage Reactance (#1-#2) | p.u. | 绕组(#1-#2)正序漏电抗 | 实数（常量） | 绕组1的等值电抗$X_{T1}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Reactance (#1-#3) | p.u. | 绕组(#1-#3)正序漏电抗 | 实数（常量） | 绕组2的等值电抗$X_{T2}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Reactance (#2-#3) | p.u. | 绕组(#2-#3)正序漏电抗 | 实数（常量） | 绕组3的等值电抗$X_{T3}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Resistance (#1-#2) | p.u. | #1-#2绕组正序漏电阻 | 实数（常量） | 绕组1的等值电阻$R_{T1}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Resistance (#1-#3) | p.u. | #1-#3绕组正序漏电阻 | 实数（常量） | 绕组2的等值电阻$R_{T2}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Resistance (#2-#3) | p.u. | #2-#3绕组正序漏电阻 | 实数（常量） | 绕组3的等值电阻$R_{T3}$，可由变压器短路实验或变压器铭牌得出 |
| Magnetization Conductance | p.u. | 励磁电导(空载损耗标幺值) | 实数（常量） | 变压器器励磁电导$G_M$，可由变压器空载实验或变压器铭牌得出 |
| Magnetizing Current | % | 空载励磁电流 | 实数（常量） | 变压器器空载励磁电流$I_M$，可由变压器空载实验或变压器铭牌得出 |
| Tap Changer |  | 变压器分接头选择 | 选择 | 选择变压器分接头位置（无/绕组1/绕组2/绕组3）  |
| Initial Tap Ratio |  | 初始分接头档位 | 实数（常量） | 填写变压器初始分接头档位下的标幺值变比 |

### Saturation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Saturation Enabled |  | 考虑饱和特性? | 选择 | 选择“是”或“否”以开启或关闭铁芯饱和特性的建模 |
| Place Saturation on |  | 励磁绕组位置 | 选择 | 选择励磁绕组的添加位置，考虑饱和特性时，饱和电流由该位置注入 |
| Air Core Reactance | p.u. | 空心电抗 | 实数（常量） | 变压器空心电抗，通常大约是等值漏电抗的两倍 |
| Rush Decay Time Constant | s | 涌流衰减时间 | 实数（常量） | 变压器励磁涌流的衰减时间常数 |
| Knee Voltage | p.u. | 拐点电压 | 实数（常量） | 对应于饱和曲线拐点的电压 |
| Time to Release Flux Clipping | s | 启动时间 | 实数（常量） | 为防止启动不稳定，需要在一段时间内不计算或限制计算磁链值，该时间即为启动时间 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Winding #1 Line Current Vector \[kA\] | 绕组1三相线电流 | 文本 | 此处输入变压器绕组1三相线电流量测信号的标签（3×1维），以#号开头，如#I1ll |
| Winding #1 Phase Current Vector \[kA\] | 绕组1三相相电流 | 文本 | 此处输入变压器绕组1三相相电流量测信号的标签（3×1维），以#号开头，如#I1lg |
| Winding #2 Line Current Vector \[kA\] | 绕组2三相线电流 | 文本 | 此处输入变压器绕组1三相线电流量测信号的标签（3×1维），以#号开头，如#I2ll |
| Winding #2 Phase Current Vector \[kA\] | 绕组2三相相电流 | 文本 | 此处输入变压器绕组2三相相电流量测信号的标签（3×1维），以#号开头，如#I12g |
| Winding #3 Line Current Vector \[kA\] | 绕组3三相线电流 | 文本 | 此处输入变压器绕组1三相线电流量测信号的标签（3×1维），以#号开头，如#I3ll |
| Winding #3 Phase Current Vector \[kA\] | 绕组3三相相电流 | 文本 | 此处输入变压器绕组3三相相电流量测信号的标签（3×1维），以#号开头，如#I3g |
| Winding #1 RMS Line Current \[kA\] | 绕组1线电流均方根值 | 文本 | 此处输入变压器绕组1电流有效值量测信号的标签（1×1维），以#号开头，如#I1rms |
| Winding #2 RMS Line Current \[kA\] | 绕组2线电流均方根值 | 文本 | 此处输入变压器绕组2电流有效值量测信号的标签（1×1维），以#号开头，如#I2rms |
| Winding #3 RMS Line Current \[kA\] | 绕组3线电流均方根值 | 文本 | 此处输入变压器绕组3电流有效值量测信号的标签（1×1维），以#号开头，如#I3rms |
| Winding #1 Active Power \[MW\] | 绕组1有功功率 | 文本 | 此处输入变压器绕组1有功功率量测信号的标签（1×1维），以#号开头，如#P1 |
| Winding #1 Reactive Power \[MVar\] | 绕组1无功功率 | 文本 | 此处输入变压器绕组1无功功率量测信号的标签（1×1维），以#号开头，如#Q1 |
| Winding #2 Active Power \[MW\] | 绕组2有功功率 | 文本 | 此处输入变压器绕组1有功功率量测信号的标签（1×1维），以#号开头，如#P2 |
| Winding #2 Reactive Power \[MVar\] | 绕组2无功功率 | 文本 | 此处输入变压器绕组1无功功率量测信号的标签（1×1维），以#号开头，如#Q2 |
| Winding #3 Active Power \[MW\] | 绕组3有功功率 | 文本 | 此处输入变压器绕组1有功功率量测信号的标签（1×1维），以#号开头，如#P3 |
| Winding #3 Reactive Power \[MVar\] | 绕组3无功功率 | 文本 | 此处输入变压器绕组1无功功率量测信号的标签（1×1维），以#号开头，如#Q3 |
| 3 Phase Magnetizing Current \[kA\] | 三相励磁电流 | 文本 | 此处输入变压器励磁电流量测信号的标签（3×1维），以#号开头，如#Im |
| 3 Phase Flux Linkage \[KWb-N\] | 三相磁链 | 文本 | 此处输入变压器磁链量测信号的标签（3×1维），以#号开头，如#Flux |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin #1 | 3×1 | 变压器绕组1接线端 |                   
| Pin #2 | 3×1 | 变压器绕组2接线端 |                   
| Pin #3 | 3×1 | 变压器绕组3接线端 |                   
| Tap1 | 1×1 | 变压器绕组1的分接头，输入变比控制信号 |                   
| Tap2 | 1×1 | 变压器绕组2的分接头，输入变比控制信号 |                   
| Tap3 | 1×1 | 变压器绕组3的分接头，输入变比控制信号 |                    

## 使用说明


## 测试模型
[<test name>](<test link>)显示了三相三绕组变压器的典型应用。

## 相关元件


