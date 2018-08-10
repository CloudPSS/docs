---
title: PI控制器
date: 2018/8/1 14:40:44
type: components
classname: _PICtrl
symbol: PICtrl
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件实现对输入信号的比例积分环节。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入PI控制器名称 |
| <span id="comp_params_param_Gain">Proportional Gain</span> |  | 比例增益 | 实数 | PI控制器的比例增益 |
| <span id="comp_params_param_Tc">Integral Time Constant</span> | s | 积分时间常数 | 实数 | PI控制器的积分时间常数 |
| <span id="comp_params_param_Max">Maximum Limit</span> |  | 输出上限 | 实数 | PI控制器的输出上限 |
| <span id="comp_params_param_Min">Minimum Limit</span> |  | 输出下限 | 实数 | PI控制器的输出下限 |
| <span id="comp_params_param_Init">Initial Output of Integrator</span> |  | 积分器初始输出值 | 实数 | PI控制器的初始输出值 |

[Name]: #comp_params_param_Name "Name"
[Proportional Gain]: #comp_params_param_Gain "Proportional Gain"
[Integral Time Constant]: #comp_params_param_Tc "Integral Time Constant"
[Maximum Limit]: #comp_params_param_Max "Maximum Limit"
[Minimum Limit]: #comp_params_param_Min "Minimum Limit"
[Initial Output of Integrator]: #comp_params_param_Init "Initial Output of Integrator"

## <span id="comp_example">测试模型</span>
[<test PICtrl>](<test link>)显示了PI控制器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<超前滞后校正>](<test link>)、[<一阶惯性关节>](<test link>)、[<微分极点>](<test link>)




