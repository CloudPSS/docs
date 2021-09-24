---
title: 速度限幅器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 500

classname: _newSpeedLimiter
symbol: newSpeedLimiter
---
## 基本描述
 **该元件用以实现对输入信号变化速率的限幅输出功能。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入速度限幅器的名称（可缺省） |
| Maximum Increase Rate |  | 上升斜率最大值 | 实数（常量） | 上升斜率最大值 |
| Maximum Decrease Rate |  | 下降斜率最大值 | 实数（常量） | 下降斜率最大值 |
| Initial Value |  | 零时刻初始值 | 实数（常量） | 零时刻初始值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |


## 使用说明



## 相关元件

[限幅器](../Limiter/index.md)
