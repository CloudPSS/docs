
---
title: 电感
date: 2018/8/1 14:40:44
type: components
classname: InductorRouter
symbol: Inductor
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真电感器。
+ 通过Dimension选择该器件为单相电感还是三相电感。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入电感名称 |
| <span id="comp_params_param_Dim">Dimension</span> |  | 单相电感或是三相电感？ | 选择 | 选择“SinglePhase”或“ThreePhase”以决定这是单相电感或是三相电感 |
| <span id="comp_params_param_L">Inductance</span> | H | （每相）电感值 | 实数 | 输入电感器电感值，单位为μF |

[Name]: #comp_params_param_Name "Name"
[Dimension]: #comp_params_param_Dim "Dimension"
[Inductance]: #comp_params_param_L "Inductance"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Current \[kA\]</span> | 电感电流 | 文本 | 此处输入电感流过电流信号的标签，以#号开头，如#I1 |
| <span id="comp_params_param_V">Voltage \[kV\]</span> | 电感电压 | 文本 | 此处输入电感两端电压信号的标签，以#号开头，如#V1 |

[Current \[kA\]]: #comp_params_param_I "Current \[kA\]"
[Voltage \[kV\]]: #comp_params_param_V "Voltage \[kV\]"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了电感的典型应用。

## <span id="comp_seealso">相关元件</span>
[<电容>](<test link>)、[<电阻>](<test link>)、[< RLC支路>](<test link>)





