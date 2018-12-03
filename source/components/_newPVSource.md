---
title: 光伏电池单元
author: 
author_email:

date: 2018/12/3 15:48:31
updated: 2018/12/3 15:48:31

type: components
category: 3006
order: 0

classname: _newPVSource
symbol: newPVSource
---
## 基本描述
{% compsymbol newPVSource %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 名称 | 文本 |  |
| No. of Cells Connected in Series |  | 阵列串联模块数 | 整数（常量） |  |
| No. of Cells Series in Parallel |  | 阵列并联模块数 | 整数（常量） |  |
| Rated Irradiation | W/m^2 | 额定辐照度 | 实数（常量） |  |
| Rated Temperature | °C | 额定温度 | 实数（常量） |  |

### Equivalent Circuit Parameters
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Open-Circuit Voltage | V | 额定开路电压 | 实数（常量） |  |
| Rated Short-Circuit Current | A | 额定短路电流 | 实数（常量） |  |
| Voltage at Maximum Power Point | V | 最大功率点 | 实数（常量） |  |
| Current at Maximum Power Point | A | 串联电阻 | 实数（常量） |  |
| Compensation Parameter α | 1/℃ | 补偿系数α | 实数（常量） |  |
| Compensation Parameter β |  | 补偿系数β | 实数（常量） |  |
| Compensation Parameter γ | 1/℃ | 补偿系数γ | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| PV Array Output Power \[MW\] | 模组输出功率 | 文本 |  |
| PV Array Branch Voltage \[kV\] | 光伏阵列输出电压 | 文本 |  |
| PV Array Branch Current \[kV\] | 光伏阵列输出电流 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 1×1 | |                   
| Pin + | 1×1 | |                   
| T | 1×1 | |                   
| G | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了光伏电池单元的典型应用。

## 相关元件


