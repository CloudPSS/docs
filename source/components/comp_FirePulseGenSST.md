---
title: SST脉冲发生器
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: -555
order: 1000

classname: _FirePulseGenSST
symbol: FirePulseGenSST
---
## 基本描述
{% compsymbol FirePulseGenSST %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Number of SST Modules |  | SST模块的数量 | 实数（常量） |  |
| HB Carrier Frequency | Hz | H桥载波的频率 | 实数（常量） |  |
| DAB Carrier Frequency | Hz | DAB载波的频率 | 实数（常量） |  |
| Is All Input Duty the Same? |  | 所有模块输入Duty是否一致？ | 选择 |  |
| Is All Input Uref the Same? |  | 所有模块输入Uref是否一致？ | 选择 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Duty | 由参数控制 | |
| Duty | 1×1 | |
| Uref | 由参数控制 | |
| Uref | 1×1 | |
| Gate | 由参数控制 | |

## 使用说明

## 测试模型
[]()显示了SST脉冲发生器的典型应用。

## 相关元件

