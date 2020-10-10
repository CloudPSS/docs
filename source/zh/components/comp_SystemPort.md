---
title: 系统端口
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 30000
order: 101

classname: _SubSysPort
symbol: SystemPort
---
## 基本描述
{% compsymbol SystemPort %}

> **该元件为系统对外连接的端口，可配置为电气端口，输入端口或输出端口。**

## 参数列表
### Configuration
| 参数名 |备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- | :--- |
| Name |  元件名称 | 文本 | 此处输入绝对值函数的名称（可缺省） |
| Port ID | 端口ID | 整数（常量） | 端口的ID值，当子系统的端口列表按该ID值由小到大依次排列 |
| Port Type | 端口类型 | 选择 | 选择不同的端口类型，“电气端口”、“输入端口”和“输出端口” |
| Dimension X | 行数 | 整数（常量） | 端口数据的维度，行数 |
| Dimension Y | 列数 | 整数（常量） | 端口数据的维度，列数 |
| Direction | 端口位置 | 选择 | 端口位于子系统图标的位置，可选择“左侧”或者“右侧” |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | X×Y |当端口类型选择“输入端口”时有效|
| Output | X×Y |当端口类型选择“输出端口”时有效|
| Electrical | X×Y |当端口类型选择“电气端口”时有效|

## 使用说明

### 端口使用
在系统中增加或删减该元件，系统图标的端口也会相应增加或删减，并且根据该元件设置的位置，即左侧或右侧，在系统图标的相应位置显示端口。系统图标端口的排列顺序根据该元件端口ID由小到大依次排列。

### 端口类型
当系统端口与电气元件相连时，该元件对应的端口类型应为“电气端口”；
当系统端口与控制元件相连，且为输入时，该元件对应的端口类型应为“输入端口”；
当系统端口与控制元件相连，且为输出时，该元件对应的端口类型应为“输出端口”。

### 端口维度
系统端口的数据维度与外部连接元件保持一致。以三相交流系统为例，当系统端口与三相元件相连时，该元件端口类型应为“电气端口”，且维度应设置为“3*1”。当系统端口与控制元件相连时，根据控制流程计算得到相应的维度。

系统端口在系统创建时的应用详见[系统功能](../features/System.html)

## 相关元件
