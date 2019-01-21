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

> **该元件用于建模三相电压源变换器。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入电压源变换器的名称 |
| Unblock Time | s | 在该时刻前当前元件处于闭锁状态 | 实数（常量） | 初始闭锁时间 |

### Valve Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| IGBT/Diode ON  Resistance | Ω | IGBT/二极管导通电阻 | 实数（常量） | IGBT导通时的等效电阻 |
| IGBT/Diode OFF  Resistance | Ω | IGBT/二极管关断电阻 | 实数（常量） | IGBT关断时的等效电阻 |
| Forward Voltage Drop | kV |  | 实数（常量） | IGBT导通时的等效压降 |
| Forward Breakover Voltage | kV |  | 实数（常量） | IGBT正向击穿电压，当正向超过这个数值时，二极管将被正向击穿 |
| Reverse Withstand Voltage | kV |  | 实数（常量） | IGBT反向耐受电压，当反向超过这个数值时，二极管将被反向击穿 |
| Protected Against Forward Breakover |  |  | 选择 | IGBT的击穿保护电压，大于该值时闭锁 |
| Snubber Resistance | Ω |  | 实数（常量） | IGBT并联RC缓冲电路的电阻 |
| Snubber Capacitance | uF |  | 实数（常量） | IGBT并联RC缓冲电路的电容 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| IGBT Voltage Vector \[kV\] | IGBT电压向量（1-6号） | 文本 | 此处输入IGBT电压向量信号量测信号的标签，以#号开头，如#Vt |
| IGBT Current Vector \[kA\] | IGBT电流向量（1-6号） | 文本 | 此处输入IGBT电流向量信号量测信号的标签，以#号开头，如#It |
| Diode Voltage Vector \[kV\] | 二极管电压向量（1-6号） | 文本 | 此处输入二极管电压向量信号量测信号的标签，以#号开头，如#Vd |
| Diode Current Vector \[kA\] | 二极管电流向量（1-6号） | 文本 | 此处输入二极管电流向量信号量测信号的标签，以#号开头，如#Id  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| AC Pin | 3×1 |交流接线端口 |                   
| DC + | 1×1 | 直流侧正端|                   
| DC - | 1×1 |直流侧负端 |                   
| KB | 1×1 |闭锁信号输入端 |                   
| GS | 6×1 |开关信号输入端 |                   

## 使用说明



## 相关元件


