---
title: 6 Pulse Bridge
author: 
author_email:

date: 2018/12/3 17:35:06
updated: 2018/12/3 17:35:06

type: components
category: 1
order: 0

classname: SixPulseBridgeRouter
symbol: SixPulseBridgeNew
---
## 基本描述
{% compsymbol SixPulseBridgeNew %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Thyristor Direction |  |  | 选择 |  |
| Firing Order Input |  |  | 选择 |  |
| Use Snubber Circuit |  |  | 选择 |  |
| Transformer Phase Config |  |  | 选择 |  |
| Unblock Time | s |  | 实数（常量） |  |

### PLO
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Frequency | Hz |  | 实数（常量） |  |
| PLO Proportional Gain |  |  | 实数（常量） |  |
| PLO Integral Gain |  |  | 实数（常量） |  |
| PLO Reference Voltage |  |  | 选择 |  |

### Valve Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Thyristor ON  Resistance | ohm |  | 实数（常量） |  |
| Thyristor OFF Resistance | ohm |  | 实数（常量） |  |
| Forward Voltage Drop | kV |  | 实数（常量） |  |
| Forward Breakover Voltage | kV |  | 实数（常量） |  |
| Reverse Withstand Voltage | kV |  | 实数（常量） |  |
| Protected Against Forward Breakover |  |  | 选择 |  |
| Snubber Resistance | ohm |  | 实数（常量） |  |
| Snubber Capacitance | uF |  | 实数（常量） |  |

### Internal Outputs
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Firing Pulse Array(6) Name |  | 文本 |  |
| Valve Voltages Array(6) Name |  | 文本 |  |
| Valve Current Array(6) Name |  | 文本 |  |
| Snubber Circuit Current Array(6) Name |  | 文本 |  |
| alpha angle |  | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
|  | 3×1 | |                   
|  | 自动 | |                   
|  | 自动 | |                   
|  | 3×1 | |                   
|  | 自动 | |                   
|  | 自动 | |                   
|  | 自动 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了6 Pulse Bridge的典型应用。

## 相关元件


