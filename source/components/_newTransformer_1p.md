---
title: 单相变压器
author: 
author_email:

date: 2018/12/3 15:48:31
updated: 2018/12/3 15:48:31

type: components
category: 3001
order: 700

classname: _newTransformer_1p
symbol: newTransformer_1p
---
## 基本描述
{% compsymbol newTransformer_1p %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Rated Power | MVA | 额定容量 | 实数（常量） |  |
| Winding #1 Rated Voltage (RMS) | kV | 绕组#1额定电压有效值 | 实数（常量） |  |
| Winding #2 Rated Voltage (RMS) | kV | 绕组#2额定电压有效值 | 实数（常量） |  |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） |  |
| Leakage Reactance | p.u. | 等值漏电抗 | 实数（常量） |  |
| Leakage Resistance | p.u. | 等值漏电阻 | 实数（常量） |  |
| Magnetization Conductance | p.u. | 励磁电导 | 实数（常量） |  |
| Magnetizing Current | % | 空载励磁电流 | 实数（常量） |  |
| Tap Changer |  | 变压器分接头选择 | 选择 |  |

### Saturation
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Saturation Enabled |  | 考虑饱和特性? | 选择 |  |
| Place Saturation on |  | 励磁绕组位置 | 选择 |  |
| Air Core Reactance | p.u. | 空心电抗 | 实数（常量） |  |
| Rush Decay Time Constant | s | 涌流衰减时间 | 实数（常量） |  |
| Knee Voltage | p.u. | 拐点电压 | 实数（常量） |  |
| Time to Release Flux Clipping | s | 启动时间 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Winding #1 Current \[kA\] | 绕组1电流 | 文本 |  |
| Winding #2 Current \[kA\] | 绕组2电流 | 文本 |  |
| Magnetizing Current \[kA\] | 励磁电流 | 文本 |  |
| Flux Linkage \[KWb-N\] | 磁链 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin #1+ | 1×1 | |                   
| Pin #1- | 1×1 | |                   
| Pin #2+ | 1×1 | |                   
| Pin #2- | 1×1 | |                   
| Tap | 1×1 | |                   
| Tap | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了单相变压器的典型应用。

## 相关元件


