---
title: 滞环比较器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 200

classname: _newHysteresis
symbol: newHysteresis
---
## 基本描述


> **该元件实现对输入信号的滞环比较并输出矩形波。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入滞环比较器的名称（可缺省） |
| Logic 1 Input Level |  | 当输入大于设定值时，输出为1 | 实数（常量） | 滞环带的上限，需保证上限大于下限 |
| Logic 0 Input Level |  | 当输入小于设定值时，输出为0 | 实数（常量） | 滞环带的下限，需保证上限大于下限 |
| Invert Output? |  | 输出是否取反？ | 选择 | 选择输出是否取反 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[比较器](../Comparator/index.md)
