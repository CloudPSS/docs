
---
title: 脉冲发生器
date: 2018/8/1 14:40:44
type: components
classname: _PulseGen
symbol: PulseGen
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真指定频率的脉冲发生器。
+ 脉冲发生器可用于确定线性控制系统的频率响应。
+ 可以指定第一个脉冲的出现时间，以及脉冲发生的频率。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_F">Frequency</span> | Hz | 脉冲信号频率 | 实数 | 输入脉冲信号发生的频率，单位为Hz |
| <span id="comp_params_param_Height">Height of Pulse</span> |  | 脉冲峰值 | 实数 | 输入脉冲波的峰值 |
| <span id="comp_params_param_T0">Time of First Pulse</span> | s | 第一个脉冲的发生时间 | 实数 | 仿真开始后，在经过这个时间后，发生器开始才产生脉冲波。 |

[Frequency]: #comp_params_param_F "Frequency"
[Height of Pulse]: #comp_params_param_Height "Height of Pulse"
[Time of First Pulse]: #comp_params_param_T0 "Time of First Pulse"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了脉冲发生器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<方波发生器>](<test link>)、[<正弦波发生器>](<test link>)、[<三角波发生器>](<test link>)





