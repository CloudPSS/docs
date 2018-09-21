
---
title: 脉冲发生器
date: 2018/8/1 14:40:44
type: components
classname: _PulseGen
symbol: PulseGen
author: 
categories: 
- control
- signal-generator
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件用以产生指定频率的脉冲信号，脉冲持续时间为一个仿真步长。**

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_F">Frequency</span> | Hz | 脉冲信号频率 | 实数 | 输出脉冲信号的频率 |
| <span id="comp_params_param_Height">Height of Pulse</span> |  | 脉冲峰值 | 实数 | 输出脉冲波的峰值 |
| <span id="comp_params_param_T0">Time of First Pulse</span> | s | 第一个脉冲的发生时间 | 实数 | 第一个脉冲的发生时间 |

[Frequency]: #comp_params_param_F "Frequency"
[Height of Pulse]: #comp_params_param_Height "Height of Pulse"
[Time of First Pulse]: #comp_params_param_T0 "Time of First Pulse"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了脉冲发生器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<方波发生器>](<test link>)、[<正弦波发生器>](<test link>)、[<三角波发生器>](<test link>)





