---
title: 浪涌发生器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 900

classname: _newSurgeGen
symbol: newSurgeGen
---
## 基本描述
{% compsymbol newSurgeGen %}

> **该元件用以产生浪涌信号。** 
> $$f\left( t \right) = \left\{ \begin{aligned}
> & {0, t < {T_1}} \\
> & { \frac{ { {P_k} } } { { {T_2} - {T_1} } }\left( {t - {T_1} } \right), {T_1} \leqslant t < {T_2} } \\
> & { {P_k}, {T_2} \leqslant t < {T_3} } \\
> & { \frac{ { {P_k} } } { { {T_4} - {T_3} } }\left( { {T_4} - t} \right), {T_3} \leqslant t < {T_4} } \\
> & { 0, {T_4} \leqslant t} \\ 
> \end{aligned} \right.$$ 

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入浪涌发生器的名称（可缺省） |
| Start Time of Up Slope | s | 上升沿开始时刻T1 | 实数（常量） | 上升沿开始时刻$T_1$  |
| End Time of Up Slope | s | 上升沿结束时刻T2(>T1) | 实数（常量） | 上升沿结束时刻$T_2$ |
| Start Time of Down Slope | s | 下降沿开始时刻T3(>T2) | 实数（常量） | 下降沿开始时刻$T_3$ |
| End Time of Down Slope | s | 下降沿结束时刻T4(>T3) | 实数（常量） | 下降沿结束时刻$T_4$ |
| Peak Output |  | 峰值输出 | 实数（常量） | 峰值输出$P_k$ | 

 
## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 1×1 |输出端口 |                   
 
## 使用说明



## 相关元件

[陷落发生器](/components/comp_newDropGen.html)
