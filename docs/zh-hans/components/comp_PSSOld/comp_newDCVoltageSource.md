---
title: 直流电压源
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 200

classname: _newDCVoltageSource
symbol: newDCVoltageSource
---
## 基本描述


> **该元件用以建模直流电压源。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 | 此处输入直流电压源的名称（可缺省） |
| Is This Source Grounded? |  | 电压源一端是否接地？ | 选择 | 选择“Yes”或“No”以使电压源一端接地或不接地 |
| Rated Voltage Magnitude | kV | 输出电压幅值 | 实数（常量） | 电压源输出电压幅值 |
| Resistance | Ω | 内阻 | 实数（常量） | 电压源额定内阻 |
| Start-up Type |  | 启动方式 | 选择 | 选择电压源启动发式为“Linear Ramp”或“Real Pole Ramp” |
| Voltage Ramp Up Time | s | 启动时间 | 实数（常量） | 输入斜坡启动时间，仅当“启动方式"项为“Linear Ramp”时生效 |
| Voltage Time Constant | s | 启动时间常数 | 实数（常量） | 输入极点时间常数，仅当“启动方式”项为“RealPoleRamp”时生效 |

### Fault Setting
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | 是否为故障电压源 | 选择 | 选择“Yes”或“No”以选择是否为故障电压源|
| Fault Start Time | s | 故障开始时间 | 实数（常量） | 故障开始的时间，仅当“是否为故障电压源”项选择"Yes"时有效 |
| Fault End Time | s | 故障结束时间 | 实数（常量） | 故障结束的时间，仅当“是否为故障电压源”项选择"Yes"时有效 |
| Drop Ratio | p.u. | 故障电压降 | 实数（常量） | 故障时间电压的标幺值，仅当“是否为故障电压源”项选择"Yes"时有效|

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签，以#号开头，如#Va |
| Source Current \[kA\] | 电压源输出电流 | 文本 | 此处输入电压源输出电流量测信号的标签，以#号开头，如#Ia |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 1×1 |电压源的负端（参考方向），仅当电压源非接地时有效 |
| Pin + | 1×1 |电压源的正端（参考方向）|

## 使用说明

::: info
若电压源的内阻为0，CloudPSS会自动选择为`理想电压源`模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。
:::


## 相关元件



[直流电流源](comp_newDCCurrentSource.md)
