---
title: 支路电压表
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3000
order: 100

classname: _NewBranchVoltageMeter
symbol: newBranchVoltageMeter
---
## 基本描述


> **该元件用以测量支路电压，输出单位为kV。**

## 参数列表
### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Dimension | 相数 | 选择 | 选择电压测量为单相或三相 |
| Name for Voltage Signal \[kV\] | 电压量测名称 | 文本 | 此处输入测量所得电压信号的标签，以#号开头，如#Va |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 由参数控制 |电压表的正接线端 |
| Pin - | 由参数控制 | 电压表的负接线端|

## 使用说明



## 相关元件

[电压表](comp_NewVoltageMeter.md)、[电流表](comp_NewCurrentMeter.md)
