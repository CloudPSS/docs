---
title: 电容
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 402

classname: newCapacitorRouterWithInitValue
symbol: newCapacitorRouterWithInitValue
---
## 基本描述

<!-- ![电容](./电阻.png) -->
> **该元件用以建模不带初始电压的单相或三相电容（单线图）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入电容的名称（可缺省） |
| Dimension |  | 单相电容或是三相电容 | 选择 | 选择电容为单相或三相 |
| Capacitance | μF | 电容值 | 实数（常量） | 电容值 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | 电容电流 | 文本 | 此处输入电容电流量测信号的标签（维数自动），以#号开头，如#Ic |
| Branch Voltage \[kV\] | 电容电压 | 文本 | 此处输入电容电压量测信号的标签（维数自动），以#号开头，如#Vc |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 自动 |电容正端（参考方向）|
| Pin - | 自动 |电容负端（参考方向）|

## 使用说明



## 相关元件

[电感](../Inductor/index.md)、[电阻](../Resistor/index.md)、[电容](../CapacitorWithInitValue/index.md)
