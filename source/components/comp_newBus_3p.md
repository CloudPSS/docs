---
title: 三相交流母线
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 500

classname: _newBus_3p
symbol: newBus_3p
---
## 基本描述
{% compsymbol newBus_3p %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 母线名称 | 文本 |  |
| Voltage Magnitude (L-L, RMS) | p.u. | 母线电压幅值 | 实数（常量） |  |
| Voltage Angle | Deg | 母线电压相位 | 实数（常量） |  |
| Base Voltage (L-L, RMS) | kV | 母线电压基值 | 实数（常量） |  |
| Rated Frequency | Hz | 额定频率 | 实数（常量） |  |
| Ramping Time | s | 斜坡启动时间(仅初始化用) | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Voltage Vector \[kV\] | 三相电压 | 文本 |  |
| RMS Voltage \[kV\] | 电压均方根值 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了三相交流母线的典型应用。

## 相关元件


