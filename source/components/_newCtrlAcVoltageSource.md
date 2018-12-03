---
title: 受控交流电压源(VF)
author: 
author_email:

date: 2018/12/3 15:48:31
updated: 2018/12/3 15:48:31

type: components
category: 3002
order: 600

classname: _newCtrlAcVoltageSource
symbol: newCtrlVFACSource
---
## 基本描述
{% compsymbol newCtrlVFACSource %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 元件名称 | 文本 |  |
| Is This Source Grounded? |  | 电压源是否接地？ | 选择 |  |
| No. of Phases |  | 电压源相数 | 选择 |  |
| Function Type |  | 函数类型 | 选择 |  |
| Initial Frequency | Hz | 初始频率 | 实数（常量） |  |
| Initial Phase | Deg | 初始电压相位 | 实数（常量） |  |
| Resistance | Ω | 内阻 | 实数（常量） |  |
| Start-up Type |  | 启动方式 | 选择 |  |
| Voltage Ramp Up Time | s | 启动时间 | 实数（常量） |  |
| Voltage Input Time Constant | s | 启动时间常数 | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电压源端电压 | 文本 |  |
| Source Current \[kA\] | 电压源输出电流 | 文本 |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Source Voltage Vector \[kV\] | 电压源端电压 | 文本 |  |
| 3 Phase Source Current Vector \[kA\] | 电压源输出电流 | 文本 |  |
| RMS Source Voltage \[kV\] | 电压源电压均方根值 | 文本 |  |
| RMS Source Current \[kA\] | 电压源电流均方根值 | 文本 |  |
| Active Power \[MW\] | 有功功率 | 文本 |  |
| Reactive Power \[MVar\] | 无功功率 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 由参数控制 | |                   
| Pin + | 由参数控制 | |                   
| Voltage \[kV, L-G, Pk\] | 1×1 | |                   
| Frequency \[Hz\] | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了受控交流电压源(VF)的典型应用。

## 相关元件


