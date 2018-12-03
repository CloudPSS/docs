---
title: 直流电流源
author: 
author_email:

date: 2018/12/3 15:57:46
updated: 2018/12/3 15:57:46

type: components
category: 3002
order: 100

classname: _newDCCurrentSource
symbol: newDCCurrentSource
---
## 基本描述
{% compsymbol newDCCurrentSource %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 |  |
| Is This Source Grounded? |  | 电流源一端是否接地？ | 选择 |  |
| Rated Current Magnitude | kA | 输出电流幅值 | 实数（常量） |  |
| Start-up Type |  | 启动方式 | 选择 |  |
| Current Ramp Up Time | s | 启动时间 | 实数（常量） |  |
| Current Time Constant | s | 启动时间常数 | 实数（常量） |  |

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
| Source Voltage \[kV\] | 电流源端电压 | 文本 |  |
| Source Current \[kA\] | 电流源输出电流 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 1×1 | |                   
| Pin + | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了直流电流源的典型应用。

## 相关元件


