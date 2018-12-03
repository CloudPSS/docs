---
title: 六脉动晶闸管桥
author: 
author_email:

date: 2018/12/3 15:57:45
updated: 2018/12/3 15:57:45

type: components
category: 555
order: 0

classname: newSixPulseBridgeRoutertest
symbol: newSixValveBridgetest
---
## 基本描述
{% compsymbol newSixValveBridgetest %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Thyristor Direction |  | 晶闸管方向 | 选择 |  |
| Enable Snubber Circuit? |  | 是否考虑缓冲电路 | 选择 |  |
| Transformer Phase Config |  | 换向变压器相移 | 选择 |  |
| Firing Order Angle Type |  | 触发角类型 | 选择 |  |
| Unblock Time | s | 在该时刻前当前元件处于闭锁状态 | 实数（常量） |  |

### Phase Locked Oscillator
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Frequency | Hz | 额定频率 | 实数（常量） |  |
| PLO Proportional Gain |  | 锁相振荡器比例增益 | 实数（常量） |  |
| PLO Integral Gain |  | 锁相振荡器积分增益 | 实数（常量） |  |
| PLO Reference Voltage |  |  | 选择 |  |

### Valve Data
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Thyristor ON  Resistance | Ω |  | 实数（常量） |  |
| Thyristor OFF Resistance | Ω |  | 实数（常量） |  |
| Forward Voltage Drop | kV |  | 实数（常量） |  |
| Forward Breakover Voltage | kV |  | 实数（常量） |  |
| Reverse Withstand Voltage | kV |  | 实数（常量） |  |
| Protected Against Forward Breakover |  |  | 选择 |  |
| Snubber Resistance | Ω |  | 实数（常量） |  |
| Snubber Capacitance | uF |  | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Thyristor Voltage Vector \[kV\] | 晶闸管电压向量 | 文本 |  |
| Thyristor Current Vector \[kA\] | 晶闸管电流向量 | 文本 |  |
| Measured Alpha Angle \[Rad\] | 触发角量测 | 文本 |  |
| Measured Gamma Angle \[Rad\] | 熄弧角量测 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin AC | 3×1 | |                   
| Pin Up | 自动 | |                   
| Pin Down | 自动 | |                   
| Com. Bus | 3×1 | |                   
| KB | 自动 | |                   
| AO | 1×1 | |                   
| AO | 6×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了六脉动晶闸管桥的典型应用。

## 相关元件


