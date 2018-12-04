---
title: 三相故障电阻
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 600

classname: _newFaultResistor_3p
symbol: newFaultResistance_3p
---
## 基本描述
{% compsymbol newFaultResistance_3p %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Initial Resistance | Ω | 初始电阻 | 实数（常量） |  |
| Fault Start Time | s | 故障开始时刻 | 实数（变量） |  |
| Fault End Time | s | 故障结束时刻 | 实数（变量） |  |
| Fault Resistance | Ω | 故障期间电阻 | 实数（变量） |  |
| Fault Type |  | 故障类型 | 选择 |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Branch Current \[kA\] | 三相电阻故障电流 | 文本 |  |
| 3 Phase Branch Voltage \[kV\] | 三相电阻故障电压 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 | |                   
| Pin - | 3×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了三相故障电阻的典型应用。

## 相关元件


