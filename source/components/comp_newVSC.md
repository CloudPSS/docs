---
title: 电压源变换器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3005
order: 300

classname: _newVSC
symbol: newVSC
---
## 基本描述
{% compsymbol newVSC %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Unblock Time | s | 在该时刻前当前元件处于闭锁状态 | 实数（常量） |  |

### Valve Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| IGBT/Diode ON  Resistance | Ω | IGBT/二极管导通电阻 | 实数（常量） |  |
| IGBT/Diode OFF  Resistance | Ω | IGBT/二极管关断电阻 | 实数（常量） |  |
| Forward Voltage Drop | kV |  | 实数（常量） |  |
| Forward Breakover Voltage | kV |  | 实数（常量） |  |
| Reverse Withstand Voltage | kV |  | 实数（常量） |  |
| Protected Against Forward Breakover |  |  | 选择 |  |
| Snubber Resistance | Ω |  | 实数（常量） |  |
| Snubber Capacitance | uF |  | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| IGBT Voltage Vector \[kV\] | IGBT电压向量（1-6号） | 文本 |  |
| IGBT Current Vector \[kA\] | IGBT电流向量（1-6号） | 文本 |  |
| Diode Voltage Vector \[kV\] | 二极管电压向量（1-6号） | 文本 |  |
| Diode Current Vector \[kA\] | 二极管电流向量（1-6号） | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| AC Pin | 3×1 | |                   
| DC + | 1×1 | |                   
| DC - | 1×1 | |                   
| KB | 1×1 | |                   
| GS | 6×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了电压源变换器的典型应用。

## 相关元件


