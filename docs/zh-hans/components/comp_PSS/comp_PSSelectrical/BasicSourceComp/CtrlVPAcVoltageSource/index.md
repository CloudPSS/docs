---
title: 受控交流电压源(VP)
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 700

classname: _newCtrlVPAcVoltageSource
symbol: newCtrlVPACSource
---
## 基本描述

<!-- ![受控交流电压源（VP）](./受控交流电压源（VP）.png) -->
> **该元件用以建模幅值、相位可控的单相或三相交流电压源。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 | 此处输入受控电压源的名称（可缺省） |
| Is This Source Grounded? |  | 电压源是否接地？ | 选择 | 选择“Yes”或“No”以使电压源负端接地或不接地 |
| No. of Phases |  | 电压源相数 | 选择 | 选择电压源为单相或三相 |
| Function Type |  | 函数类型 | 选择 |  选择电压源为正弦表达式或余弦表达式 |
| Frequency | Hz | 频率 | 实数（常量） | 电压源的频率 |
| Resistance | Ω | 内阻 | 实数（常量） | 电压源的内阻 |
| Start-up Type |  | 启动方式 | 选择 | 选择电压源启动发式为“Linear Ramp”或“Real Pole Ramp” |
| Voltage Ramp Up Time | s | 启动时间 | 实数（常量） | 输入斜坡启动时间，仅当“启动方式"项为“Linear Ramp”时生效 |
| Voltage Input Time Constant | s | 启动时间常数 | 实数（常量） |输入极点时间常数，仅当“启动方式”项为“RealPoleRamp”时生效  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签，以#号开头，如#Va。仅当电压源相数为单相时有效 |
| Source Current \[kA\] | 电压源输出电流 | 文本 | 此处输入电压源电流量测信号的标签，以#号开头，如#Ia。仅当电压源相数为单相时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Source Voltage Vector \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签（3×1维），以#号开头，如#Vabc。仅当电压源相数为三相时有效 |
| 3 Phase Source Current Vector \[kA\] | 电压源输出电流 | 文本 | 此处输入电压源电流量测信号的标签（3×1维），以#号开头，如#Iabc。仅当电压源相数为三相时有效 |
| RMS Source Voltage \[kV\] | 电压源电压均方根值 | 文本 | 此处输入电压源电压有效值量测信号的标签（1×1维），以#号开头，如#Vrms。仅当电压源相数为三相时有效 |
| RMS Source Current \[kA\] | 电压源电流均方根值 | 文本 | 此处输入电压源电流有效值量测信号的标签（1×1维），以#号开头，如#Irms。仅当电压源相数为三相时有效 |
| Active Power \[MW\] | 有功功率 | 文本 | 此处输入电压源有功功率量测信号的标签（1×1维），以#号开头，如#P。仅当电压源相数为三相时有效 |
| Reactive Power \[MVar\] | 无功功率 | 文本 | 此处输入电压源无功功率量测信号的标签（1×1维），以#号开头，如#Q。仅当电压源相数为三相时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 由参数控制 | 电压源的负端（参考方向），仅当电压源非接地时有效|
| Pin + | 由参数控制 |电压源的正端（参考方向）|
| Voltage \[kV, L-G, Pk\] | 1×1 |电压幅值控制输入端 |
| Phase \[Deg\] | 1×1 |电压相位控制输入端 |

## 使用说明

::: info
若电压源的内阻为0，CloudPSS会自动选择为`理想电压源`模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。
:::


## 相关元件

[受控交流电压源(VF)](../CtrlVFAcVoltageSource.md)、[受控电压源](../CtrlVoltageSource.md)
