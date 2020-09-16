---
title: 六脉动晶闸管桥
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3005
order: 200

classname: newSixPulseBridgeRouter
symbol: newSixValveBridge
---

## 基本描述

{% compsymbol newSixValveBridge %}

> **该元件用于建模六脉动晶闸管桥。**

## 参数列表

### Configuration

| 参数名                   | 单位 | 备注                           |     类型     | 描述                                            |
| :----------------------- | :--- | :----------------------------- | :----------: | :---------------------------------------------- |
| Name                     |      | 元件名称                       |     文本     | 此处输入六脉动晶闸管桥的名称                    |
| Thyristor Direction      |      | 晶闸管方向                     |     选择     | 选择晶闸管方向为上或下                          |
| Enable Snubber Circuit?  |      | 是否考虑缓冲电路               |     选择     | 选择“Yes”或“No”以启用或禁用晶闸管并联的缓冲电路 |
| Transformer Phase Config |      | 换向变压器相移                 |     选择     | 选择换向变压器的相移                            |
| Firing Order Angle Type  |      | 触发角类型                     |     选择     | 选择换向角的单位为弧度制或角度制                |
| Unblock Time             | s    | 在该时刻前当前元件处于闭锁状态 | 实数（常量） | 闭锁时间                                        |

### Phase Locked Oscillator

| 参数名                | 单位 | 备注               |     类型     | 描述                                     |
| :-------------------- | :--- | :----------------- | :----------: | :--------------------------------------- |
| Rated Frequency       | Hz   | 额定频率           | 实数（常量） | 所在电气系统的额定频率                   |
| PLO Proportional Gain |      | 锁相振荡器比例增益 | 实数（常量） | 锁相振荡器比例增益                       |
| PLO Integral Gain     |      | 锁相振荡器积分增益 | 实数（常量） | 锁相振荡器积分增益                       |
| PLO Reference Voltage |      |                    |     选择     | 选择锁相振荡器的参考电压是否去掉零序分量 |

### Valve Data

| 参数名                              | 单位 | 备注 |     类型     | 描述                                                            |
| :---------------------------------- | :--- | :--- | :----------: | :-------------------------------------------------------------- |
| Thyristor ON Resistance             | Ω    |      | 实数（常量） | 晶闸管导通时的等效电阻                                          |
| Thyristor OFF Resistance            | Ω    |      | 实数（常量） | 晶闸管关断时的等效电阻                                          |
| Forward Voltage Drop                | kV   |      | 实数（常量） | 晶闸管导通时的等效压降                                          |
| Forward Breakover Voltage           | kV   |      | 实数（常量） | 晶闸管正向击穿电压，当正向超过这个数值时，二极管将被正向击穿    |
| Reverse Withstand Voltage           | kV   |      | 实数（常量） | 晶闸管反向耐受电压，当反向超过这个数值时，二极管将被反向击穿    |
| Protected Against Forward Breakover |      |      |     选择     | 晶闸管的击穿保护电压，大于该值时闭锁                            |
| Snubber Resistance                  | Ω    |      | 实数（常量） | 晶闸管并联 RC 缓冲电路的电阻，仅当“有无缓冲电路”选择"Yes"时有效 |
| Snubber Capacitance                 | uF   |      | 实数（常量） | 晶闸管并联 RC 缓冲电路的电容，仅当“有无缓冲电路”选择"Yes"时有效 |

### Monitoring

| 参数名                          | 备注           | 类型 | 描述                                                       |
| :------------------------------ | :------------- | :--: | :--------------------------------------------------------- |
| Thyristor Voltage Vector \[kV\] | 晶闸管电压向量 | 文本 | 此处输入晶闸管电压向量信号量测信号的标签，以#号开头，如#Vd |
| Thyristor Current Vector \[kA\] | 晶闸管电流向量 | 文本 | 此处输入晶闸管电流向量信号量测信号的标签，以#号开头，如#Id |
| Measured Alpha Angle \[Rad\]    | 触发角量测     | 文本 | 此处输入晶闸触发角信号量测信号的标签，以#号开头，如#Alpha  |
| Measured Gamma Angle \[Rad\]    | 熄弧角量测     | 文本 | 此处输入晶闸熄弧角信号量测信号的标签，以#号开头，如#Gamma  |

## 端口列表

| 端口名   | 数据维数 | 描述           |
| :------- | :------: | :------------- |
| Pin AC   |   3×1    | 交流接线端     |
| Pin Up   |   自动   | 晶闸管桥的上端 |
| Pin Down |   自动   | 晶闸管桥的下端 |
| Com. Bus |   3×1    |                |
| KB       |   自动   |                |
| AO       |   自动   |                |

## 使用说明

## 相关元件
