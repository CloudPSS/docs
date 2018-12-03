---
title: 单相交流电压源
author: 
author_email:

date: 2018/12/3 15:48:32
updated: 2018/12/3 15:48:32

type: components
category: 3002
order: 300

classname: _newACVoltageSource_1p
symbol: newACVoltageSource_1p
---
## 基本描述
{% compsymbol newACVoltageSource_1p %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 |  |
| Is This Source Grounded? |  | 电压源一端是否接地？ | 选择 |  |
| Rated Voltage (L-G, RMS) | kV | 相电压有效值 | 实数（常量） |  |
| Function Type |  | 函数类型 | 选择 |  |
| Initial Phase | Deg | 初始相位 | 实数（常量） |  |
| Frequency | Hz | 频率 | 实数（常量） |  |
| Resistance | Ω | 内阻 | 实数（常量） |  |
| Start-up Type |  | 启动方式 | 选择 |  |
| Voltage Ramp Up Time | s | 启动时间 | 实数（常量） |  |
| Voltage Input Time Constant | s | 启动时间常数 | 实数（常量） |  |

### Fault Setting
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Is This a Fault Source ? |  | 是否为故障电压源 | 选择 |  |
| Fault Start Time | s | 故障开始时间 | 实数（常量） |  |
| Fault End Time | s | 故障结束时间 | 实数（常量） |  |
| Drop Ratio | p.u. | 故障电压降 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电压源端电压 | 文本 |  |
| Source Current \[kA\] | 电压源输出电流 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 1×1 | |                   
| Pin + | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了单相交流电压源的典型应用。

## 相关元件


