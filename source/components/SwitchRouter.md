---
title: Power electronic switch
author: 
author_email:

date: 2018/12/3 15:57:46
updated: 2018/12/3 15:57:46

type: components
category: 1
order: 0

classname: SwitchRouter
symbol: Switch
---
## 基本描述
{% compsymbol Switch %}

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Device Type |  | 选择 |  |
| Enable Snubber Circuit? |  | 选择 |  |

### Main Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Thyristor ON  Resistance | ohm |  | 实数（常量） |  |
| Thyristor OFF Resistance | ohm |  | 实数（常量） |  |
| Forward Voltage Drop | kV |  | 实数（常量） |  |
| Forward Breakover Voltage | kV |  | 实数（常量） |  |
| Reverse Withstand Voltage | kV |  | 实数（常量） |  |
| Minimum Extinction Time | us |  | 实数（常量） |  |
| Snubber Resistance | ohm |  | 实数（常量） |  |
| Snubber Capacitance | uF |  | 实数（常量） |  |
| Protected against Forward Breakover? |  |  | 选择 |  |

### Internal Output Variables
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Current in device (snubber excluded) |  | 文本 |  |
| Total Current in device |  | 文本 |  |
| Voltage across the device |  | 文本 |  |
| Time of last turn on |  | 文本 |  |
| Time of last turn off |  | 文本 |  |
| Alpha in seconds |  | 文本 |  |
| Gamma in seconds |  | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
|  | 自动 | |                   
|  | 自动 | |                   
|  | 自动 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了Power electronic switch的典型应用。

## 相关元件


