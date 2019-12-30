---
title: IEEE 标准系统
type: examples
author: lzy
author_email: lzy@live.in
category: 1800
order: 100
---

## 描述

IEEE 标准系统的介绍见[电磁暂态仿真案例](IEEE39.html)。

## 模型参数

除了[电磁暂态仿真案例](IEEE39.html)中描述的参数外，需要为电机参数进行以下配置，这些参数在发电机元件的 Power Flow Data 栏。

|  | Bus Type | Injected Active Power [MW] | Bus Voltage Magnitude [p.u.] | Bus Voltage Angle [Deg] |
| :--- | :-: | --: | ----: | -: |
| Gen30 | PV | 250 | 1.047 | -  |
| Gen31 | PV | 660 | 0.982 | -  |
| Gen32 | PV | 650 | 0.983 | -  |
| Gen33 | PV | 632 | 0.997 | -  |
| Gen34 | PV | 508 | 1.012 | -  |
| Gen35 | PV | 650 | 1.049 | -  |
| Gen36 | PV | 560 | 1.063 | -  |
| Gen37 | PV | 540 | 1.027 | -  |
| Gen38 | PV | 830 | 1.026 | -  |
| Gen39 | Slack | - | 1.03 | 0  |

## 仿真流程

在潮流计算选项卡中，使用默认仿真参数，点击“开始”进行潮流计算流程。

得到的潮流计算结果如下图所示。

![仿真结果](./IEEE39PF/Results.png "IEEE 标准算例潮流计算结果")

在结果页面，潮流的计算结果分为母线、传输线、串联 RLC、两绕组变压器、三绕组变压器 5 个页面显示。

母线页面中，$V_m, V_a$ 为母线的电压；$P_{gen}, Q_{gen}$、$P_{load}, Q_{load}$、$P_{shunt}, Q_{shunt}$ 分别为发电机注入功率、恒功率负载消耗功率和恒阻抗负载消耗功率；$P_{res}, Q_{res}$ 表示当前母线上的功率不平衡量，即
$$S_{res} = S_{gen} - S_{load} - S_{shunt} - S_{branch}$$
其中 $S_{branch}$ 表示母线连接支路上的流出功率。对于计算收敛的潮流解，$P_{res}, Q_{res}$ 均为接近 0 的值。

传输线、串联RLC、两绕组变压器页面中，$P_{ij}, Q_{ij}, P_{ij}, Q_{ji}$ 分别表示 from bus 和 to bus 流出的功率，$P_{loss}, Q_{loss}$ 表示线路上的功率损耗，有 
$$S_{loss} = S_{ij} + S_{ji}$$

对于三绕组变压器，类似地，有 
$$S_{loss} = S_{i} + S_{j} + S_{k}$$

点击“写入潮流断面”，可以将潮流计算得到的结果作为元件启动参数填入各元件。

点击“数据下载”，在弹出的对话框中选择需要下载的数据，点击“数据下载”按钮，即可将潮流计算的结果作为 Excel 表格下载到本地。如下图所示。

![数据下载](./IEEE39PF/Download.png "“数据下载”对话框")


































