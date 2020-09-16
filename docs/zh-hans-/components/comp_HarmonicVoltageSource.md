---
title: 谐波电压源
author:
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 1100

classname: _HarmonicVoltageSource
symbol: HarmonicVoltageSource
---

## 基本描述

{% compsymbol HarmonicVoltageSource %}

> **该元件用以建模谐波电压源。**

## 参数列表

### Configuration

| 参数名                           | 单位 | 备注                 |     类型     | 描述                                                     |
| :------------------------------- | :--- | :------------------- | :----------: | :------------------------------------------------------- |
| Source Name                      |      | 元件名称             |     文本     | 此处输入谐波电压源的名称（可缺省）                       |
| Is This Source Grounded?         |      | 电压源是否接地？     |     选择     | 选择“Yes”或“No”以使电压源负端接地或不接地                |
| Phase Number                     |      | 相数                 |     选择     | 选择电压源为单相或三相                                   |
| Harmonic Voltage Magnitude (RMS) | kV   | 谐波电压幅值         | 实数（常量） | 谐波电压幅值                                             |
| Harmonic Function Type           |      | 谐波电压函数类型     |     选择     | 选择谐波电压为正弦表达式或余弦表达式                     |
| Harmonic Voltage Frequency       | Hz   | 谐波电压频率         | 实数（常量） | 谐波电压频率                                             |
| Initial Phase Angle              | Deg  | 初始电压相位         | 实数（常量） | 电压源在 t=0 时刻的相位                                  |
| Start-up Type                    |      | 启动方式             |     选择     | 选择电压源启动发式为“Linear Ramp”或“Real Pole Ramp”      |
| Voltage Ramp Up Time             | s    | 启动时间             | 实数（常量） | 输入斜坡启动时间，仅当“启动方式"项为“Linear Ramp”时生效  |
| Voltage Time Constant            | s    | 启动时间常数         | 实数（常量） | 输入极点时间常数，仅当“启动方式”项为“RealPoleRamp”时生效 |
| Injecting Delay                  | s    | 谐波电压注入延迟时间 | 实数（常量） | 谐波电压注入延迟时间                                     |

### Monitoring

| 参数名                | 备注               | 类型 | 描述                                               |
| :-------------------- | :----------------- | :--: | :------------------------------------------------- |
| Source Voltage \[kV\] | 谐波电压源端电压   | 文本 | 此处输入电压源电压量测信号的标签，以#号开头，如#Va |
| Source Current \[kA\] | 谐波电压源输出电流 | 文本 | 此处输入电压源电流量测信号的标签，以#号开头，如#Ia |

## 端口列表

| 端口名 |  数据维数  | 描述                                                 |
| :----- | :--------: | :--------------------------------------------------- |
| Pin -  | 由参数控制 | 谐波电压源的负端（参考方向），仅当电压源非接地时有效 |
| Pin +  | 由参数控制 | 谐波电压源的正端（参考方向）                         |

## 使用说明

## 相关元件

[谐波电流源](comp_HarmonicCurrentSource.html)
