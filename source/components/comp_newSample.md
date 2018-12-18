---
title: 采样
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 400

classname: _newSample
symbol: newSample
---
## 基本描述
{% compsymbol newSample %}

> **该元件在离散区间内对连续输入信号进行采样，并保持输出直到下一个采样点。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |此处输入采样元件的名称（可缺省） |
| Sampling Type Control |  | 采样速率控制 | 选择 | 选择采样的方式为内部或外部脉冲 |
| Sampling Rate | Hz | 采样速率 | 实数（常量） | 采样的速率，仅当采样速率控制选择为内部时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |                   
| Pulse | 1×1 |外部脉冲输入端口，仅当采样速率控制选择为外部脉冲时有效 |                   
| Output | 1×1 |输出端口 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了采样的典型应用。

## 相关元件

[采样保持](/components/comp_newSampleHold.html)
