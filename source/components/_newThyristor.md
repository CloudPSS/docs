---
title: 晶闸管
author: 
author_email:

date: 2018/12/3 15:57:45
updated: 2018/12/3 15:57:45

type: components
category: 3003
order: 200

classname: _newThyristor
symbol: newThyristor
---
## 基本描述
{% compsymbol newThyristor %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Enable Snubber Circuit? |  | 有无缓冲电路 | 选择 |  |
| ON Resistance | Ω | 导通电阻 | 实数（常量） |  |
| OFF Resistance | Ω | 关断电阻 | 实数（常量） |  |
| Forward Voltage Drop | kV | 正向导通压降 | 实数（常量） |  |
| Forward Breakover Voltage | kV | 正向击穿电压 | 实数（常量） |  |
| Reverse Withstand Voltage | kV | 反向耐受电压 | 实数（常量） |  |
| Minimum Extinction Time | s | 导通延迟时间 | 实数（常量） |  |
| Snubber Resistance | Ω | 缓冲电路电阻 | 实数（常量） |  |
| Snubber Capacitance | μF | 缓冲电路电容 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Current (Snubber Excluded) \[kA\] | 晶闸管支路电流（不含缓冲电路） | 文本 |  |
| Total Current \[kA\] | 晶闸管总电流 | 文本 |  |
| Branch Voltage \[kV\] | 支路电压 | 文本 |  |
| Last Turn On Time \[s\] | 最近一次开通时间 | 文本 |  |
| Last Turn Off Time \[s\] | 最近一次关断时间 | 文本 |  |
| Alpha Angle \[s\] | 实际触发角（延迟触发时间） | 文本 |  |
| Gamma Angle \[s\] | 实际熄弧角（关断后承受负电压持续时间） | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 自动 | |                   
| Pin - | 自动 | |                   
| Gate | 自动 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了晶闸管的典型应用。

## 相关元件


