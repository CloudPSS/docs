---
title: 电流表
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3000
order: 300

classname: _NewCurrentMeter
symbol: newCurrentMeter
---
## 基本描述


> **该元件用以测量支路电流，输出单位为kA。**

## 参数列表
### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Dimension | 相数 | 选择 | 选择电流测量为单相或三相 |
| Name for Current Signal \[kA\] | 电流量测名称 | 文本 |  此处输入测量所得电流信号的标签，以#号开头，如#Ia |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 自动 |电流表的正接线端 |
| Pin - | 自动 |电流表的负接线端 |

## 使用说明

::: tip
多个电流表元件不能并联。
:::


## 相关元件

[电压表](comp_NewVoltageMeter.md)、[支路电压表](comp_NewBranchVoltageMeter.md)
