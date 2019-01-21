---
title: 逻辑门
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3006
order: 400

classname: _newLogicGate
symbol: newLogicGate3
---
## 基本描述
{% compsymbol newLogicGate %}
{% compsymbol newLogicGate1 %}
{% compsymbol newLogicGate2 %}  
{% compsymbol newLogicGate3 %}

> **该元件实现四类基本逻辑运算：与、或、非、异或。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输入逻辑门的名称（可缺省） |
| Gate Type |  | 选择 | 选择逻辑门种类为与门、或门、异或门以及非门 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input 1 | 自动 |输入端口1，仅当“逻辑门种类”为与门时有效 |                   
| Input 2 | 自动 |输入端口2，仅当“逻辑门种类”为与门时有效 |                   
| Output  | 自动 |输出端口，仅当“逻辑门种类”为与门时有效 |                   
| Input 1 | 自动 |输入端口1，仅当“逻辑门种类”为或门时有效 |                   
| Input 2 | 自动 |输入端口2，仅当“逻辑门种类”为或门时有效 |                   
| Output  | 自动 |输出端口，仅当“逻辑门种类”为或门时有效 |                   
| Input 1 | 自动 |输入端口1，仅当“逻辑门种类”为异或门时有效 |                   
| Input 2 | 自动 |输入端口2，仅当“逻辑门种类”为异或门时有效 |                   
| Output  | 自动 |输出端口，仅当“逻辑门种类”为异或门时有效 |                   
| Input   | 自动 |输入端口，仅当“逻辑门种类”为非门时有效 |                   
| Output  | 自动 |输出端口，仅当“逻辑门种类”为非门时有效 |                   

## 使用说明

{% pullquote info %}
配置Gate Type可实现：
+ 与门：当且仅当所有输入信号为1，输出信号为1。
+ 或门：若任一输入信号为1，则输出信号为1。
+ 异或门：如果两个输入信号不相同，则输出信号为1；如果两个输入信号相同，输出信号为0。
+ 非门：如果输入信号为1，则输出信号为0；如果输入信号为0，则输出信号为1。
{% endpullquote %}

## 相关元件


