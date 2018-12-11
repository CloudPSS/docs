---
title: 受控电流源
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 400

classname: _newCtrlCurrentSource
symbol: newCtrlCurrentSource
---
## 基本描述
{% compsymbol newCtrlCurrentSource %}

> **该元件用以建模受控电流源。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Name | 元件名称 | 文本 | 此处输入受控电流源的名称（可缺省） |
| Is This Source Grounded? | 电源一端是否接地？ | 选择 | 选择“Yes”或“No”以使电流源负端接地或不接地 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电流源端电压 | 文本 | 此处输入电流源电压量测信号的标签，以#号开头，如#Va |
| Source Current \[kA\] | 电流源输出电流 | 文本 | 此处输入电流源电流量测信号的标签，以#号开头，如#Ia |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 1×1 |电流源的负端（参考方向），仅当电源非接地时有效 |                   
| Pin + | 1×1 |电流源的正端（参考方向）|                   
| Ctrl | 1×1 |受控输入端 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了受控电流源的典型应用。

## 相关元件


