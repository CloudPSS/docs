---
title: 微分极点
date: 2018/8/1 14:40:44
type: components
classname: _DiffPole
symbol: DiffPole
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件实现对输入信号加入微分极点环节。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入微分极点环节名称 |
| <span id="comp_params_param_G">Gain</span> |  | 增益 | 实数 | 超前微分极点环节的增益 |
| <span id="comp_params_param_T">Time Constant</span> | s | 时间常数 | 实数 | 微分极点环节的时间常数 |
| <span id="comp_params_param_Init">Initial Value</span> |  | 初始值 | 实数 | 微分极点环节的初始值 |

[Name]: #comp_params_param_Name "Name"
[Gain]: #comp_params_param_G "Gain"
[Time Constant]: #comp_params_param_T "Time Constant"
[Initial Value]: #comp_params_param_Init "Initial Value"

## <span id="comp_example">测试模型</span>
[<test DiffPole>](<test link>)显示了微分极点的典型应用。

## <span id="comp_seealso">相关元件</span>
[<PI控制器>](<test link>)、[<一阶惯性关节>](<test link>)、[<超前滞后校正>](<test link>)



