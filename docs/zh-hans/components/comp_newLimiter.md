---
title: 限幅器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 100

classname: _newLimiter
symbol: newLimiter
---
## 基本描述
{% compsymbol newLimiter %}

> **该元件用以实现对输入信号的限幅输出功能。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入限幅器的名称（可缺省） |
| Limit Type |  | 限幅种类 | 选择 | 选择限幅器的种类，可配置为“Fixed Limits”或“Dynamic Limits” |
| Upper Limit |  | 限幅器上限 | 实数（常量） | 元件输出上限，仅当“限幅器种类”配置为“Fixed Limits”时有效 |
| Lower Limit |  | 限幅器下限 | 实数（常量） | 元件输出下限，仅当“限幅器种类”配置为“Fixed Limits”时有效 |
| Upper Limit Signal |  | 限幅器上限（以@开头的信号名） | 文本 | 元件输出上限，仅当“限幅器种类”配置为“Dynamic Limits”时有效 |
| Lower Limit Signal |  | 限幅器下限（以@开头的信号名） | 文本 | 元件输出下限，仅当“限幅器种类”配置为“Dynamic Limits”时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件


