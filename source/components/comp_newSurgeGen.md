---
title: 浪涌发生器
date: 2018/9/17 11:19:58
type: components
classname: _newSurgeGen
symbol: newSurgeGen
author: 
categories: 
- control
- signal-generator
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件用以产生浪涌信号。**

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 |  |
| <span id="comp_params_param_T1">Start Time of Up Slope</span> | s | 上升沿开始时刻T1 | 实数 | 浪涌上升沿开始时刻 |
| <span id="comp_params_param_T2">End Time of Up Slope</span> | s | 上升沿结束时刻T2(>T1) | 实数 | 浪涌上升沿结束时刻 |
| <span id="comp_params_param_T3">Start Time of Down Slope</span> | s | 下降沿开始时刻T3(>T2) | 实数 | 浪涌下降沿开始时刻 |
| <span id="comp_params_param_T4">End Time of Down Slope</span> | s | 下降沿结束时刻T4(>T3) | 实数 | 浪涌下降沿结束时刻 |
| <span id="comp_params_param_Pk">Peak Output</span> |  | 峰值输出 | 实数 |  |

[Name]: #comp_params_param_Name "Name"
[Start Time of Up Slope]: #comp_params_param_T1 "Start Time of Up Slope"
[End Time of Up Slope]: #comp_params_param_T2 "End Time of Up Slope"
[Start Time of Down Slope]: #comp_params_param_T3 "Start Time of Down Slope"
[End Time of Down Slope]: #comp_params_param_T4 "End Time of Down Slope"
[Peak Output]: #comp_params_param_Pk "Peak Output"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了浪涌发生器的典型应用。

## <span id="comp_seealso">相关元件</span>


