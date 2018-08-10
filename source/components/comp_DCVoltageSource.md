
---
title: 直流电压源
date: 2018/8/1 14:40:44
type: components
classname: _DCVoltageSource
symbol: DCVoltageSource
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真含内阻的直流电压源。
+ 通过Fault Setting / Is This a Fault Source ?选择这是否为一个故障电压源。故障电压源将在指定时间内改变电压值至设定的故障值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Source Name</span> |  | 元件名称 | 文本 | 此处输入电压源名称  |
| <span id="comp_params_param_Grnd">Is Star Point Grounded?</span> |  | 电压源一端是否接地（中性点是否接地） | 选择 | 选择“Yes”或“No”以使电压源一端接地或不接地。 |
| <span id="comp_params_param_Vm">Rated Voltage Magnitude</span> | kV | 输出电压幅值 | 实数 | 电压源额定电压幅值，单位为kA。 |
| <span id="comp_params_param_R">Resistance</span> | Ω | 内阻 | 实数 | 电压源额定内阻，单位为Ω。 |
| <span id="comp_params_param_Init">InitilaType</span> |  | 启动方式 | 选择 | 选择“LinearRamp”或“RealPoleRamp”以选择极点方式或斜坡启动。 |
| <span id="comp_params_param_Tc">Ramp Up Time</span> | s | 启动时间 | 实数 | 输入极点时间常数或斜坡时间，单位为秒。 |

[Source Name]: #comp_params_param_Name "Source Name"
[Is Star Point Grounded?]: #comp_params_param_Grnd "Is Star Point Grounded?"
[Rated Voltage Magnitude]: #comp_params_param_Vm "Rated Voltage Magnitude"
[Resistance]: #comp_params_param_R "Resistance"
[InitilaType]: #comp_params_param_Init "InitilaType"
[Ramp Up Time]: #comp_params_param_Tc "Ramp Up Time"

### <span id="comp_params_group_Fault">Fault Setting</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Fault">Is This a Fault Source ?</span> |  | 是否为故障电压源 | 选择 | 选择“Yes”或“No”以选择是否为故障电压源。 |
| <span id="comp_params_param_Tfs">Fault Start Time</span> | s | 故障开始时间 | 实数 | 开始故障的时间，这个值仅在“是否为故障电压源”项选择"Yes"时有效。 |
| <span id="comp_params_param_Tfe">Fault End Time</span> | s | 故障结束时间 | 实数 | 结束故障的时间，这个值仅在“是否为故障电压源”项选择"Yes"时有效。 |
| <span id="comp_params_param_Dr">Drop Ratio</span> | p.u. | 故障电压降 | 实数 | 故障时间内，电压的标幺值，这个值仅在“是否为故障电压源”项选择"Yes"时有效。 |

[Is This a Fault Source ?]: #comp_params_param_Fault "Is This a Fault Source ?"
[Fault Start Time]: #comp_params_param_Tfs "Fault Start Time"
[Fault End Time]: #comp_params_param_Tfe "Fault End Time"
[Drop Ratio]: #comp_params_param_Dr "Drop Ratio"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Source Current \[kA\]</span> | 电压源输出电流 | 文本 | 此处输入电压源电流信号的标签，以#号开头，如#Is1。 |

[Source Current \[kA\]]: #comp_params_param_I "Source Current \[kA\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了直流电压源的典型应用。

## <span id="comp_seealso">相关元件</span>
[<直流电流源>](<test link>)





