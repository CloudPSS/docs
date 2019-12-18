---
title: 积分器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 200

classname: _newIntegrator
symbol: newIntegrator
---
## 基本描述
{% compsymbol newIntegrator %}

> **该元件用以实现积分器。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入积分器的名称（可缺省） |
| Time Constant | s | 时间常数 | 实数（常量） | 积分器的时间常数 |
| Initial Output Value |  | 初始输出值 | 实数（常量） | 积分器的初始输出值 |
| Limit Output? |  | 是否限制输出 | 选择 | 选择是否限制该环节的输出，可配置为“Fixed Limits”或“Dynamic Limits” |
| Resettable? |  | 积分器是否可重置？ | 选择 | 选择积分器是否可重置 |

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
| Output | 1×1 | 输出端口|
| Reset Trigger | 1×1 |重置触发输入端口，高电平触发，仅当“Resettable” 项为“Yes”时该端口有效|
| Reset Value | 1×1 |重置后元件输出值的输入端口，高电平触发，仅当“Resettable” 项为“Yes”时该端口有效 |

## 使用说明



## 相关元件

[微分器](comp_newDerivative.html)、[PI控制器](comp_newPICtrl.html)
