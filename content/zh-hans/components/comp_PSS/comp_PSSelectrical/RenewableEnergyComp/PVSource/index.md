---
title: 光伏电池单元
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3006
order: 100

classname: _newPVSource
symbol: newPVSource
---
## 基本描述

> **该元件用以建模N*M的光伏阵列，其假定构成光伏阵列的所有光伏单元特性都相同**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 名称 | 文本 | 此处输入光伏电池单元的名称（可缺省） |
| No. of Cells Connected in Series |  | 阵列串联模块数 | 整数（常量） | 光伏阵列串联模块数M |
| No. of Cells Series in Parallel |  | 阵列并联模块数 | 整数（常量） | 光伏阵列并联模块数N |
| Rated Irradiation | W/m^2 | 额定辐照度 | 实数（常量） | 光伏阵列的参考辐照度 |
| Rated Temperature | °C | 额定温度 | 实数（常量） | 光伏阵列的参考温度 |

### Equivalent Circuit Parameters
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Open-Circuit Voltage | V | 额定开路电压 | 实数（常量） | 光伏单元的额定开路电压 |
| Rated Short-Circuit Current | A | 额定短路电流 | 实数（常量） | 光伏单元的额定短路电流 |
| Voltage at Maximum Power Point | V | 最大功率点 | 实数（常量） |光伏单元的最大功率点  |
| Current at Maximum Power Point | A | 串联电阻 | 实数（常量） | 等效串联内阻 |
| Compensation Parameter α | 1/℃ | 补偿系数α | 实数（常量） |  补偿系数α |
| Compensation Parameter β |  | 补偿系数β | 实数（常量） | 补偿系数β |
| Compensation Parameter γ | 1/℃ | 补偿系数γ | 实数（常量） |  补偿系数γ |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| PV Array Output Power \[MW\] | 模组输出功率 | 文本 | 此处输入光伏阵列输出功率量测信号的标签，以#号开头，如#Ppv |
| PV Array Branch Voltage \[kV\] | 光伏阵列输出电压 | 文本 | 此处输入光伏阵列输出电压量测信号的标签，以#号开头，如#Vpv |
| PV Array Branch Current \[kV\] | 光伏阵列输出电流 | 文本 | 此处输入光伏阵列输出电流量测信号的标签，以#号开头，如#Ipv |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 1×1 |光伏阵列正端（参考方向）|
| Pin + | 1×1 | 光伏阵列负端（参考方向）|
| T | 1×1 |温度输入端口 |
| G | 1×1 |光照强度输入端口 |

## 使用说明



## 相关元件


