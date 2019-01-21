---
title: 比较器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 100

classname: _newComparator
symbol: newComparator
---
## 基本描述
{% compsymbol newComparator %}

> **该元件对两个输入信号比较，并输出矩形波。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入比较器的名称（可缺省） |
| Expression |  | 比较表达式 | 选择 | 选择比较器的比较逻辑 |
| If True Output Value |  | 为真时的输出值 | 实数（常量） | 当比较逻辑为真时的输出值 |
| If False Output Value |  | 为假时的输出值 | 实数（常量） | 当比较逻辑为假时的输出值 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| A | 1×1 |输入端口A |                   
| B | 1×1 |输入端口B |                   
| Output 1 | 1×1 |输出端口1 |                   
| Output 2 | 1×1 |输出端口2，输出逻辑为输出端口1相反 |                   

## 使用说明

{% pullquote info %}
配置Expression确定比较器的判据，如：A>=B，A< B。
+ 判据为真，则上输出引脚输出设定真值，下输出引脚输出设定假值。
+ 判据为假，则上输出引脚输出设定假值，下输出引脚输出设定真值。
{% endpullquote %}

## 相关元件

[滞环比较器](/components/comp_newHysteresis.html)

