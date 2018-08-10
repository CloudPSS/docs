---
title: 延时环节
date: 2018/8/1 14:40:44
type: components
classname: _Delay
symbol: Delay
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件对Laplace表达式$e^{sT}$进行建模，其中T是延迟时间，S是拉普拉斯算子。 
- 实现原理为：离散的输入信号被放置在队列中，随着时间的推移，信号值移动到队列的末尾，并被放置在输出线上。可通过Configuration/Delay Time配置信号被延迟输出的时间。
- 如果延迟时间比仿真时间步长大得多，那么队列的大小可能变得过大。为了防止这种情况，采用在指定的时间延迟中，仅对输入值采样N次并放置在队列中。可通过Max Sample Points配置采样点数N，点数越高，信号还原越好，但存储消耗越大，用户需平衡两者的取值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入延时环节的名称 |
| <span id="comp_params_param_Td">Delay Time</span> | s | 延迟时间 | 实数 | 输出信号相比于输入信号的延迟时间 |
| <span id="comp_params_param_Sp">Max Sample Points</span> |  | 最大采样点 | 整数 | 延迟时间内的最大采样点数 |

[Name]: #comp_params_param_Name "Name"
[Delay Time]: #comp_params_param_Td "Delay Time"
[Max Sample Points]: #comp_params_param_Sp "Max Sample Points"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了延时环节的典型应用。




