---
title: 一阶惯性环节
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 600

classname: _newRealPole
symbol: newRealPole
---
## 基本描述
{% compsymbol newRealPole %}

> **该元件用以实现一阶惯性环节。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入一阶惯性环节的名称（可缺省） |
| Gain |  | 增益 | 实数（常量） | 一阶惯性环节的增益 |
| Time Constant | s | 时间常数 | 实数（常量） |一阶惯性环节的超前时间常数|
| Initialization Type |  | 初始化方法 | 选择 | 选择该环节的初始化方法为“稳态”的“任意值” |
| Initial Value |  | 初始值 | 实数（常量） | 一阶惯性环节的初始值 |
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

[二阶传递函数](comp_newComplexPole.html)、[超前滞后校正](comp_newLeadLag.html)、[高阶传递函数](comp_newNthOrderTransFunc.html)
