---
title: SST脉冲发生器
author:

author_email:

date: 2019/4/12 10:20:50
updated: 2019/4/12 10:20:50

type: components
category: -3009
order: 300

classname: _FirePulseGenSST
symbol: FirePulseGenSST
---

## 基本描述

{% compsymbol FirePulseGenSST %}

> **该元件用于产生多模块 SST 的脉冲信号。**

## 参数列表

### Configuration

| 参数名                      | 单位 | 备注                         |     类型     | 描述                         |
| :-------------------------- | :--- | :--------------------------- | :----------: | :--------------------------- |
| Number of SST Modules       |      | SST 模块的数量               | 实数（常量） | SST 模块的数量               |
| HB Carrier Frequency        | Hz   | H 桥载波的频率               | 实数（常量） | H 桥载波的频率$f_{HB}$       |
| DAB Carrier Frequency       | Hz   | DAB 载波的频率               | 实数（常量） | DAB 载波的频率$f_{DAB}$      |
| Is All Input Duty the Same? |      | 所有模块输入 Duty 是否一致？ |     选择     | 所有模块输入 Duty 是否一致？ |
| Is All Input Uref the Same? |      | 所有模块输入 Uref 是否一致？ |     选择     | 所有模块输入 Uref 是否一致？ |

## 端口列表

| 端口名 |  数据维数  | 描述                                                                                       |
| :----- | :--------: | :----------------------------------------------------------------------------------------- |
| Duty   | 由参数控制 | DAB 控制的等效占空比，所有模块输入 Duty 不一致时有效，其维数为模块数 N                     |
| Duty   |    1×1     | DAB 控制的等效占空比，所有模块输入 Duty 一致时有效，其维数为 1                             |
| Uref   | 由参数控制 | H 桥控制的参考电压，所有模块输入 Uref 不一致时有效，其维数为模块数 N                       |
| Uref   |    1×1     | H 桥控制的参考电压，所有模块输入 Uref 一致时有效，其维数为 1                               |
| Gate   | 由参数控制 | 输出开关脉冲信号，维数为 12N\*1。依次按照第一个模块的开关 1\~12，到第 N 个模块的开关 1\~12 |

## 使用说明

一个模块 SST 脉冲发生器的控制框图如图所示：
![控制框图](comp_SSTgen/SSTgen.png)

- 输入 Duty 信号经过限幅及采样处理后，用于产生不同相位差的三角载波信号，载波幅值为[0,1]，频率为$f_{DAB}$。数值 0.5 与两个载波比较后产生 S1~S8 的开关信号。
- 输入 Uref 与三角载波比较后产生 S9、S10 的开关信号。载波幅值为[-1，1]，频率为$f_{HB}$。Uref 乘以-1，与三角载波比较后产生 S11、S12 的开关信号。

下图示出了 SST 脉冲发生器的单元测试算例，算例详见[Test_NSSTs](https://www.cloudpss.net/editor/?id=1187)。
![单元测试图](comp_VSCModule/SSTN.png)
图中 SST 脉冲发生器配置为所以模块输入 Duty、Uref 都一致，模块数为 10。该模块只需两个输入，即可产生 10 个模块 SST 对应的全部开关信号。

## 相关元件

[多模块 SST](comp_NSSTsModule.html)
