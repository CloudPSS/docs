
---
title: 电容
date: 2018/8/1 14:40:44
type: components
categories: 
- electric
- basic
- passive
classname: CapacitorRouter
symbol: Capacitor
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真电容器。
+ 通过Dimension选择该器件为单相电容还是三相电容。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入电容器名称 |
| <span id="comp_params_param_Dim">Dimension</span> |  | 单相电容或是三相电容？ | 选择 | 选择“SinglePhase”或“ThreePhase”以决定这是单相电容或是三相电容 |
| <span id="comp_params_param_C">Capacitance</span> | μF | 电容值 | 实数 | 输入电容器电容值，单位为μF |

[Name]: #comp_params_param_Name "Name"
[Dimension]: #comp_params_param_Dim "Dimension"
[Capacitance]: #comp_params_param_C "Capacitance"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Current \[kA\]</span> | 电容电流 | 文本 | 此处输入电容流过电流信号的标签，以#号开头，如#I1 |
| <span id="comp_params_param_V">Voltage \[kV\]</span> | 电容电压 | 文本 | 此处输入电容两端电压信号的标签，以#号开头，如#V1 |

[Current \[kA\]]: #comp_params_param_I "Current \[kA\]"
[Voltage \[kV\]]: #comp_params_param_V "Voltage \[kV\]"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了电容的典型应用。

## <span id="comp_seealso">相关元件</span>
[<电感>](<test link>)、[<电阻>](<test link>)、[< RLC支路>](<test link>)





