---
title: 电感
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 300

classname: newInductorRouter
symbol: newInductor
---
## 基本描述

<!-- ![电感](./电感.png) -->
> **该元件用以建模单相或三相电感（单线图）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入电感的名称（可缺省） |
| Dimension |  | 单相电感或是三相电感 | 选择 | 选择电感为单相或三相 |
| Inductance | H | （每相）电感值 | 实数（常量） | 电感值 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | 电感电流 | 文本 | 此处输入电感电流量测信号的标签（维数自动），以#号开头，如#Il |
| Branch Voltage \[kV\] | 电感电压 | 文本 | 此处输入电感电压量测信号的标签（维数自动），以#号开头，如#Vl |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 自动 |电感正端（参考方向）|
| Pin - | 自动 |电感负端（参考方向）|

## 使用说明



## 相关元件

[电阻](../Resistor/index.md)、[电容](../CapacitorWithInitValue/index.md)