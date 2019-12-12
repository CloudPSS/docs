---
title: 选择器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 800

classname: _newSelector
symbol: newSelector
---
## 基本描述
{% compsymbol newSelector %}

> **该元件根据控制端信号，选择输出信号为某一输入信号(非控制信号)。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入选择器的名称（可缺省） |
| Select A When |  | 选择A的判据 | 选择 | 选择器的选择判据 |
| Threshold |  | 阈值 | 实数（常量） | 判据的阈值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| A | 1×1 |输入端口A |                   
| B | 1×1 |输入端口B |                   
| Ctrl | 1×1 |控制输入端 |                   
| Output | 1×1 |输出端 |                   

## 使用说明

{% pullquote info %}
配置“Select A When”、“Threshold”确定选择器判据，如：Ctrl ≥ Threshold，Ctrl < Threshold。
+ 当输入控制信号满足判据条件时，元件输出信号选择为信号A。
+ 当输入控制信号不满足判据条件时，元件输出信号选择为信号B。
{% endpullquote %}


## 相关元件


