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

> **该元件用于产生多模块SST的脉冲信号。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Number of SST Modules |  | SST模块的数量 | 实数（常量） | SST模块的数量 |
| HB Carrier Frequency | Hz | H桥载波的频率 | 实数（常量） | H桥载波的频率$f_{HB}$ |
| DAB Carrier Frequency | Hz | DAB载波的频率 | 实数（常量） | DAB载波的频率$f_{DAB}$ |
| Is All Input Duty the Same? |  | 所有模块输入Duty是否一致？ | 选择 | 所有模块输入Duty是否一致？ |
| Is All Input Uref the Same? |  | 所有模块输入Uref是否一致？ | 选择 | 所有模块输入Uref是否一致？ |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Duty | 由参数控制 |DAB控制的等效占空比，所有模块输入Duty不一致时有效，其维数为模块数N |
| Duty | 1×1 |DAB控制的等效占空比，所有模块输入Duty一致时有效，其维数为1 |
| Uref | 由参数控制 |H桥控制的参考电压，所有模块输入Uref不一致时有效，其维数为模块数N |
| Uref | 1×1 |H桥控制的参考电压，所有模块输入Uref一致时有效，其维数为1 |
| Gate | 由参数控制 | 输出开关脉冲信号，维数为12N*1。依次按照第一个模块的开关1\~12，到第N个模块的开关1\~12|

## 使用说明
一个模块SST脉冲发生器的控制框图如图所示：
![控制框图](comp_SSTgen/SSTgen.png)
+ 输入Duty信号经过限幅及采样处理后，用于产生不同相位差的三角载波信号，载波幅值为[0,1]，频率为$f_{DAB}$。数值0.5与两个载波比较后产生S1~S8的开关信号。
+ 输入Uref与三角载波比较后产生S9、S10的开关信号。载波幅值为[-1，1]，频率为$f_{HB}$。Uref乘以-1，与三角载波比较后产生S11、S12的开关信号。

下图示出了SST脉冲发生器的单元测试算例，算例详见[Test_NSSTs](https://www.cloudpss.net/editor/?id=1187)。
![单元测试图](comp_VSCModule/SSTN.png)
图中SST脉冲发生器配置为所以模块输入Duty、Uref都一致，模块数为10。该模块只需两个输入，即可产生10个模块SST对应的全部开关信号。
## 相关元件
[多模块SST](/components/comp_NSSTsModule.html)
