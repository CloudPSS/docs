---
title: 电阻
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 200

classname: newResistorRouter
symbol: newResistor
---
## 基本描述


> **该元件用以建模单相或三相电阻（单线图模式）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入电阻的名称（可缺省） |
| Dimension |  | 单相电阻或是三相电阻？ | 选择 | 选择电阻为单相或三相 |
| Resistance | Ω | （每相）电阻值 | 实数（常量） | 电阻值 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Branch Current \[kA\] | 电阻电流 | 文本 | 此处输入电阻电流量测信号的标签（维数自动），以#号开头，如#Ir |
| Branch Voltage \[kV\] | 电阻电压 | 文本 | 此处输入电阻电压量测信号的标签（维数自动），以#号开头，如#Vr |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 自动 |电阻正端（参考方向）|
| Pin - | 自动 |电阻负端（参考方向）|

## 使用说明



## 相关元件

[电容](../CapacitorWithInitValue/index.md)、[电感](../Inductor/index.md)
