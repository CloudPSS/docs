---
title: 多模块SST
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: 555
order: 900

classname: _NSSTsModule
symbol: NSSTsModule
---
## 基本描述
{% compsymbol NSSTsModule %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| No. of Sub-Modules |  | 子模块数量 | 整数（常量） |  |
| IGBT On Resistance | Ω | IGBT导通电阻 | 实数（常量） |  |
| IGBT Off Resistance | Ω | IGBT关断电阻 | 实数（常量） |  |
| Diode On Resistance | Ω | 二极管导通电阻 | 实数（常量） |  |
| Diode Off Resistance | Ω | 二极管关断电阻 | 实数（常量） |  |
| Capacitance of C1 | F | 电容C1容值 | 实数（常量） |  |
| Initial Voltage of C1 | kV | 电容C1初始电压 | 实数（常量） |  |
| Capacitance of C2 | F | 电容C2容值 | 实数（常量） |  |
| Initial Voltage of C2 | kV | 电容C2初始电压 | 实数（常量） |  |

### Transformer
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Power | MVA | 额定容量 | 实数（常量） |  |
| Winding #1 Rated Voltage (RMS) | kV | 绕组#1额定电压有效值 | 实数（常量） |  |
| Winding #2 Rated Voltage (RMS) | kV | 绕组#2额定电压有效值 | 实数（常量） |  |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） |  |
| Leakage Reactance | p.u. | 漏电抗 | 实数（常量） |  |
| No Load Losses | p.u. | 空载损耗 | 实数（常量） |  |
| Copper Losses | p.u. | 铜耗 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| IGBT Voltage Vector \[kV\] | IGBT电压向量(12N*1) | 文本 |  |
| IGBT Current Vector \[kA\] | IGBT电流向量(12N*1) | 文本 |  |
| Diode Current Vector \[kA\] | 二极管电流向量(12N*1) | 文本 |  |
| Winding Voltage Vector \[kV\] | 变压器初/次级绕组电压向量(2N*1) | 文本 |  |
| Winding Current Vector \[kA\] | 变压器初/次级绕组电流向量(2N*1) | 文本 |  |
| Terminal Voltage Vector of C2 \[kV\] | 电容C2端电压向量(N*1) | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| A | 1×1 | |
| B | 1×1 | |
| DC+ | 1×1 | |
| DC- | 1×1 | |
| GS | 由参数控制 | |
| KB | 1×1 | |

## 使用说明

## 测试模型
[]()显示了多模块SST的典型应用。

## 相关元件

