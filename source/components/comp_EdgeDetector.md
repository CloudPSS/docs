---
title: 边缘检测器
date: 2018/8/1 14:40:44
type: components
classname: _EdgeDetector
symbol: EdgeDetector
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件实现对输入信号的跳变检测。**

> 定义当前输入信号$u(t)$与上一时步输入信号$u(t - \Delta t)$的差值为$\Delta u$。
> + 若$\Delta u>0.5$，元件输出Positive Value定义的值；
> + 若$\Delta u<-0.5$，元件输出Negative Value定义的值；
> + 若$0.5>\Delta u>-0.5$，元件输出No Transition定义的值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入边缘检测器的名称 |
| <span id="comp_params_param_P">Positive Value</span> |  | 上升输出值 | 实数 | 当检测到输入上升沿的输出值 |
| <span id="comp_params_param_NT">No Transition</span> |  | 无变化输出值 | 实数 | 当检测到输入无变化时的输出值 |
| <span id="comp_params_param_N">Negative Value</span> |  | 下降输出值 | 实数 | 当检测到输入下降沿的输出值 |

[Name]: #comp_params_param_Name "Name"
[Positive Value]: #comp_params_param_P "Positive Value"
[No Transition]: #comp_params_param_NT "No Transition"
[Negative Value]: #comp_params_param_N "Negative Value"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了边缘检测器的典型应用。




