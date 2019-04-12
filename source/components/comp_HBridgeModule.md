---
title: H桥模块
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 555
order: 400

classname: _HBridgeModule
symbol: HBridgeModule
---
## 基本描述
{% compsymbol HBridgeModule %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| IGBT On Resistance | Ω | IGBT导通电阻 | 实数（常量） |  |
| IGBT Off Resistance | Ω | IGBT关断电阻 | 实数（常量） |  |
| Diode On Resistance | Ω | 二极管导通电阻 | 实数（常量） |  |
| Diode Off Resistance | Ω | 二极管关断电阻 | 实数（常量） |  |
| DC Side Capacitance | F | 直流侧电容值 | 实数（常量） |  |
| Initial Capacitor Voltage | kV | 初始电容电压 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| IGBT Voltage Vector \[kV\] | IGBT电压向量(4*1) | 文本 |  |
| IGBT Current Vector \[kA\] | IGBT电流向量(4*1) | 文本 |  |
| Diode Current Vector \[kA\] | 二极管电流向量(4*1) | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| AC + | 1×1 | |
| AC - | 1×1 | |
| DC + | 1×1 | |
| DC - | 1×1 | |
| GS | 4×1 | |
| KB | 1×1 | |

## 使用说明

## 测试模型
[]()显示了H桥模块的典型应用。

## 相关元件

