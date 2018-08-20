---
title: 一阶惯性环节
date: 2018/8/1 14:40:44
type: components
classname: _RealPole
symbol: RealPole
author: 
categories: 
- control
- linear-transfer
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件实现对输入信号加入一阶惯性环节。
+ 可设置元件输出上、下限以及其初始值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入一阶惯性环节名称 |
| <span id="comp_params_param_Gain">Gain</span> |  | 增益 | 实数 | 一阶惯性环节的增益 |
| <span id="comp_params_param_Tc">Time Constant</span> | s | 时间常数 | 实数 | 一阶惯性环节的时间常数 |
| <span id="comp_params_param_Max">Maximum</span> |  | 输出上限 | 实数 | 一阶惯性环节的输出上限 |
| <span id="comp_params_param_Min">Minimum</span> |  | 输出下限 | 实数 | 一阶惯性环节的输出下限 |
| <span id="comp_params_param_Init">Initial Value</span> |  | 初始值 | 实数 | 一阶惯性环节的初始值 |

[Name]: #comp_params_param_Name "Name"
[Gain]: #comp_params_param_Gain "Gain"
[Time Constant]: #comp_params_param_Tc "Time Constant"
[Maximum]: #comp_params_param_Max "Maximum"
[Minimum]: #comp_params_param_Min "Minimum"
[Initial Value]: #comp_params_param_Init "Initial Value"

## <span id="comp_example">测试模型</span>
[<test RealPole>](<test link>)显示了一阶惯性环节的典型应用。

## <span id="comp_seealso">相关元件</span>
[<PI控制器>](<test link>)、[<微分极点>](<test link>)、[<超前滞后校正>](<test link>)




