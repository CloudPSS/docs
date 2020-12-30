---
title: 多模块SST
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 3005
order: 900

classname: _NSSTsModule
symbol: NSSTsModule
---
## 基本描述

> **该元件为多模块固态变压器(SST)电路的快速化仿真模型。通过填写模块数N，可快速形成包含12*N个开关管的大型电力电子网络。该元件在保持与详细电磁暂态模型精度相当的同时，其独特的快速仿真建模方法还可极大减小仿真时间，提高仿真效率。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| No. of Sub-Modules |  | 子模块数量 | 整数（常量） | 子模块数量 |
| IGBT On Resistance | Ω | IGBT导通电阻 | 实数（常量） | IGBT导通电阻 |
| IGBT Off Resistance | Ω | IGBT关断电阻 | 实数（常量） | IGBT关断电阻 |
| Diode On Resistance | Ω | 二极管导通电阻 | 实数（常量） | 二极管导通电阻 |
| Diode Off Resistance | Ω | 二极管关断电阻 | 实数（常量） | 二极管关断电阻 |
| Capacitance of C1 | F | 电容C1容值 | 实数（常量） | 电容C1容值 |
| Initial Voltage of C1 | kV | 电容C1初始电压 | 实数（常量） | 电容C1初始电压 |
| Capacitance of C2 | F | 电容C2容值 | 实数（常量） | 电容C2容值 |
| Initial Voltage of C2 | kV | 电容C2初始电压 | 实数（常量） | 电容C2初始电压 |

### Transformer
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Power | MVA | 额定容量 | 实数（常量） | 变压器每侧绕组的额定容量$S_N$（所填变压器参数的功率基值） |
| Winding #1 Rated Voltage (RMS) | kV | 绕组#1额定电压有效值 | 实数（常量） | 绕组1额定电压有效值$V_{1N}$（所填变压器参数的电压基值） |
| Winding #2 Rated Voltage (RMS) | kV | 绕组#2额定电压有效值 | 实数（常量） | 绕组2额定电压有效值$V_{2N}$（所填变压器参数的电压基值） |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） | 变压器的额定频率$f_n$ |
| Leakage Reactance | p.u. | 漏电抗 | 实数（常量） | 变压器的等值漏电抗$X_T$，可由变压器短路实验或变压器铭牌得出 |
| No Load Losses | p.u. | 空载损耗 | 实数（常量） | 变压器的空载损耗$P_0$，可由变压器空载实验或变压器铭牌得出 |
| Copper Losses | p.u. | 铜耗 | 实数（常量） | 变压器的铜耗$P_Cu$，可由变压器短路实验或变压器铭牌得出 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| IGBT Voltage Vector \[kV\] | IGBT电压向量(12N*1) | 文本 | 此处输入IBGT的电压向量量测信号的标签，以#号开头，如#Vt，其维数为12N\*1 |
| IGBT Current Vector \[kA\] | IGBT电流向量(12N*1) | 文本 | 此处输I入BGT的电流向量量测信号的标签，以#号开头，如#It，其维数为12N\*1 |
| Diode Current Vector \[kA\] | 二极管电流向量(12N*1) | 文本 | 此处输入二极管的电流向量量测信号的标签，以#号开头，如#Id，其维数为12N\*1 |
| Winding Voltage Vector \[kV\] | 变压器初/次级绕组电压向量(2N*1) | 文本 | 此处输入变压器初/次级绕组电压量测信号的标签，以#号开头，如#Vps，其维数为2N\*1|
| Winding Current Vector \[kA\] | 变压器初/次级绕组电流向量(2N*1) | 文本 | 此处输入变压器初/次级绕组电流量测信号的标签，以#号开头，如#Ips，其维数为2N\*1 |
| Terminal Voltage Vector of C2 \[kV\] | 电容C2端电压向量(N*1) | 文本 | 此处输入直流电容C2电压量测信号的标签，以#号开头，如#Vc，其维数为N\*1 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| A | 1×1 | 交流侧接线端口的正端（A端） |
| B | 1×1 | 交流侧接线端口的负端（B端）|
| DC+ | 1×1 | 直流侧接线端口的正端 |
| DC- | 1×1 | 直流侧接线端口的负端 |
| GS | 由参数控制 | 输入开关脉冲信号，维数为12N\*1。依次按照第一个模块的开关1\~12，到第N个模块的开关1\~12。 |
| KB | 1×1 | 模块闭锁信号输入端，输入0则闭锁全部开关信号，输入非零则不闭锁 |

## 使用说明
多模块SST的电路图及开关编号如图所示：

![电路图](./NSSTs1.png)

下图示出了SST脉冲发生器的单元测试算例，算例详见[Test_NSSTs](https://www.cloudpss.net/editor/?id=1187)。

![单元测试图](./NSSTs2.png)

图中SST脉冲发生器配置为所以模块输入Duty、Uref都一致，模块数为10。该模块只需两个输入，即可产生10个模块SST对应的全部开关信号。该信号的维数为12N*1。如果不使用SST脉冲发生器，则需要利用**ChannelMerge**元件将所有的开关信号进行合并。合并方式如`端口列表`中GS的输入信号要求进行。

## 相关元件
[SST脉冲发生器](../../../comp_PSSControl/HVDCControlComp/FirePulseGenSST/index.md)
