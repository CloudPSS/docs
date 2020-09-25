---
title: IEEE标准系统
type: examples
author: tanzhd
category: 1500
order: 500
author_email: tanzhd@foxmail.com
---

## 描述
在CloudPSS移频电磁暂态平台中的IEEE39节点算例与电磁暂态平台中基本一致，详见[IEEE标准系统](IEEE39.md)。

这里仅展示某次仿真的结果。

## 仿真

作为演示，这里选择从零启动（即S2M启动）方式，点击`仿真控制->开始`后选择计算节点，即可得到暂态结果。

下面展示某次仿真的运行结果，仿真步长为1ms，注意在2s-2.1s间，16号母线处发生了三相接地短路故障。

所有电机的功角波形如图所示：

![电机功角](IEEE39SFEMT/RASFEMT.png "电机功角")

所有电机的转速波形如图所示：

![电机转速](IEEE39SFEMT/wrSFEMT.png "电机转速")

所有电机的端电压标幺值仿真结果如图所示：

![电机的端电压标幺值](IEEE39SFEMT/VTSFEMT.png "电机的端电压标幺值")

所有电机的端电流标幺值仿真结果如图所示：

![机端瞬时功率](IEEE39SFEMT/ITSFEMT.png "机端瞬时功率")

以37号节点为例，在故障前后处机端A相电压波形的仿真结果为（图中同时展示了解析包络信号的实部、虚部、模和原信号）：

![机端电压波形](IEEE39SFEMT/Ib37SFEMT.png "机端电压波形")