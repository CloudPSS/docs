---
title: 超前滞后校正
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 800

classname: _newLeadLag
symbol: newLeadLag
---
## 基本描述


> **该元件用以实现超前滞后校正环节。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入超前滞后校正的名称（可缺省） |
| Gain |  | 增益 | 实数（常量） | 超前滞后校正环节的增益 |
| Lead Time Constant | s | 超前时间常数 | 实数（常量） | 超前滞后校正环节的超前时间常数 |
| Lag Time Constant | s | 滞后时间常数 | 实数（常量） | 超前滞后校正环节的滞后时间常数 |
| Initialization Type |  | 初始化方法 | 选择 | 选择该环节的初始化方法为“稳态”的“任意值”  |
| Initial Value |  | 初始值 | 实数（常量） | 超前滞后校正环节的初始值 |
| Limit Output? |  | 是否限制输出 | 选择 | 选择是否限制该环节的输出，可配置为“Fixed Limits”或“Dynamic Limits” |

### Fixed Limits
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | 输出上限 | 实数（常量） | 元件输出上限，仅当“限制输出”配置为“Fixed Limits”时有效 |
| Minimum Limit |  | 输出下限 | 实数（常量） | 元件输出下限，仅当“限制输出”配置为“Fixed Limits”时有效 |

### Dynamic Limits
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Maximum Limit | 输出上限（以@开头的信号名） | 文本 | 元件输出上限，仅当“限制输出”配置为“Dynamic Limits”时有效 |
| Minimum Limit | 输出下限（以@开头的信号名） | 文本 | 元件输出下限，仅当“限制输出”配置为“Dynamic Limits”时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[一阶惯性环节](comp_newRealPole.md)、[二阶传递函数](comp_newComplexPole.md)、[微分极点](comp_newDiffPole.md)
