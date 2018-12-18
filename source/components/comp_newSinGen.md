---
title: 正弦发生器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 300

classname: _newSinGen
symbol: newSinGen
---
## 基本描述
{% compsymbol newSinGen %}

> **该元件用以产生单相或三相，定频率、相位、幅值、偏置的正弦信号。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入正弦发生器的名称（可缺省） |
| Frequency | Hz | 信号频率 | 实数（常量） | 输出正弦波的频率 |
| Magnitude |  | 幅值 | 实数（常量） | 输出正弦波的幅值 |
| Initial Phase | Deg | 初始相位 | 实数（常量） | 输出正弦波的初始相位 |
| Function Type |  | 函数类型 | 选择 | 选择正弦表达式为“Sine”或“Cosine”  |
| Offset |  | 偏移量 | 实数（常量） | 输出正弦波的在纵轴上的偏移量 |
| Dimension |  | 单相或三相输出 | 选择 | 选择输出为单相还是三相 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 1×1 |输出端口，仅当单相输出时有效 |                   
| Output A | 1×1 |输出端口A，仅当三相输出时有效 |                   
| Output B | 1×1 |输出端口B，仅当三相输出时有效 |                   
| Output C | 1×1 |输出端口C，仅当三相输出时有效 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了正弦发生器的典型应用。

## 相关元件

[可调正弦波发生器](/components/comp_newAFPMGen.html)
