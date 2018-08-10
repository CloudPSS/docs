
---
title: series RLC
date: 2018/8/1 14:40:44
type: components
classname: SeriesRLCRouter
symbol: RLC
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以RLC串联支路。该元件可以作为电力滤波器使用。
+ 通过Dimension选择该器件为单相电阻还是三相电阻。
+ 通过各个Enable选项，可以启用/禁用电感或电容。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入RLC串联支路名称 |
| <span id="comp_params_param_Dim">Dimension of RLC</span> |  | 相数 | 选择 | 选择“SinglePhase”或“ThreePhase”以决定这是单相支路或是三相支路 |
| <span id="comp_params_param_ER">Enable R?</span> |  | 使能电阻支路 | 选择 | 选择“Yes”或“No”以决定启用或禁用电阻 |
| <span id="comp_params_param_EL">Enable L?</span> |  | 使能电感支路 | 选择 | 选择“Yes”或“No”以决定启用或禁用电感 |
| <span id="comp_params_param_EC">Enable C?</span> |  | 使能电容支路 | 选择 | 选择“Yes”或“No”以决定启用或禁用电容 |
| <span id="comp_params_param_R">Resistance</span> | Ω | 电阻值 | 实数 | 输入电阻值，单位为Ω |
| <span id="comp_params_param_L">Inductance</span> | H | 电感值 | 实数 | 输入电感器电感值，单位为μF |
| <span id="comp_params_param_C">Capacitance</span> | F | 电容值 | 实数 | 输入电容器电容值，单位为μF |

[Name]: #comp_params_param_Name "Name"
[Dimension of RLC]: #comp_params_param_Dim "Dimension of RLC"
[Enable R?]: #comp_params_param_ER "Enable R?"
[Enable L?]: #comp_params_param_EL "Enable L?"
[Enable C?]: #comp_params_param_EC "Enable C?"
[Resistance]: #comp_params_param_R "Resistance"
[Inductance]: #comp_params_param_L "Inductance"
[Capacitance]: #comp_params_param_C "Capacitance"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了series RLC的典型应用。

## <span id="comp_seealso">相关元件</span>
[<电容>](<test link>)、[<电感>](<test link>)、[<电阻>](<test link>)




