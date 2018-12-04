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

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Gain |  | 增益 | 实数（常量） |  |
| Time Constant | s | 时间常数 | 实数（常量） |  |
| Initialization Type |  | 初始化方法 | 选择 |  |
| Initial Value |  | 初始值 | 实数（常量） |  |
| Limit Output? |  | 是否限制输出 | 选择 |  |

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

## 使用说明


## 测试模型
[<test name>](<test link>)显示了一阶惯性环节的典型应用。

## 相关元件


