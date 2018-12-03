---
title: 积分器
author: 
author_email:

date: 2018/12/3 17:35:06
updated: 2018/12/3 17:35:06

type: components
category: -3003
order: 200

classname: _newIntegrator
symbol: newIntegrator
---
## 基本描述
{% compsymbol newIntegrator %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Time Constant | s | 时间常数 | 实数（常量） |  |
| Initial Output Value |  | 初始输出值 | 实数（常量） |  |
| Limit Output? |  | 是否限制输出 | 选择 |  |
| Resettable? |  | 积分器是否可重置？ | 选择 |  |

### Fixed Limits
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Maximum Limit |  | 输出上限 | 实数（常量） |  |
| Minimum Limit |  | 输出下限 | 实数（常量） |  |

### Dynamic Limits
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Maximum Limit | 输出上限（以@开头的信号名） | 文本 |  |
| Minimum Limit | 输出下限（以@开头的信号名） | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 | |                   
| Output | 1×1 | |                   
| Reset Trigger | 1×1 | |                   
| Reset Value | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了积分器的典型应用。

## 相关元件


