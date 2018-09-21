---
title: 斜坡函数发生器
date: 2018/9/17 11:19:58
type: components
classname: _newRampGen
symbol: newRampGen
author: 
categories: 
- control
- signal-generator
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件用以产生斜坡信号。**

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入胁迫函数发生器的名称 |
| <span id="comp_params_param_T1">Ramping Start Time</span> | s | 斜坡沿开始时刻T1 | 实数 | 斜坡沿开始时刻 |
| <span id="comp_params_param_T2">Ramping End Time</span> | s | 斜坡沿结束时刻T2(>T1) | 实数 | 斜坡沿结束时刻 |
| <span id="comp_params_param_Pk">Peak Output</span> |  | 饱和(峰值)输出 | 实数 | 斜坡信号的最大饱和输出值 |

[Name]: #comp_params_param_Name "Name"
[Ramping Start Time]: #comp_params_param_T1 "Ramping Start Time"
[Ramping End Time]: #comp_params_param_T2 "Ramping End Time"
[Peak Output]: #comp_params_param_Pk "Peak Output"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了斜坡函数发生器的典型应用。

## <span id="comp_seealso">相关元件</span>


