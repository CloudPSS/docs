---
title: 半桥子模块
author: 
author_email:

date: 2018/12/3 15:57:46
updated: 2018/12/3 15:57:46

type: components
category: 3005
order: 100

classname: _MultiHalfBridgeModule
symbol: HBM
---
## 基本描述
{% compsymbol HBM %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| No. of Sub-Modules |  | 子模块数量 | 整数（常量） |  |
| Capacitance Per Sub-Module | F | 子模块电容 | 实数（常量） |  |
| Initial Capacitor Voltage | kV | 初始电容电压 | 实数（常量） |  |
| Capacitor Leakage Resistance | Ω | 电容泄露电阻 | 实数（常量） |  |
| IGBT ON Resistance | Ω | IGBT导通电阻 | 实数（常量） |  |
| IGBT OFF Resistance | Ω | IGBT关断电阻 | 实数（常量） |  |
| Diode ON Resistance | Ω | 二极管导通电阻 | 实数（常量） |  |
| Diode OFF Resistance | Ω | 二极管关断电阻 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Capacitor Voltage Vector \[kV\] | 电容电压向量 | 文本 |  |
| Capacitor Current Vector \[kA\] | 电容充电电流向量 | 文本 |  |
| IGBT A Voltage Vector \[kV\] | IGBT(A)电压向量 | 文本 |  |
| IGBT A Current Vector \[kA\] | IGBT(A)电流向量 | 文本 |  |
| Diode A Voltage Vector \[kV\] | 二极管(A)电压向量 | 文本 |  |
| Diode A Current Vector \[kA\] | 二极管(A)电流向量 | 文本 |  |
| IGBT B Voltage Vector \[kV\] | IGBT(B)电压向量 | 文本 |  |
| IGBT B Current Vector \[kA\] | IGBT(B)电流向量 | 文本 |  |
| Diode B Voltage Vector \[kV\] | 二极管(B)电压向量 | 文本 |  |
| Diode B Current Vector \[kA\] | 二极管(B)电流向量 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 1×1 | |                   
| Pin - | 1×1 | |                   
| Gate | 由参数控制 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了半桥子模块的典型应用。

## 相关元件


