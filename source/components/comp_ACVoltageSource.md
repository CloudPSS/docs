---
title: 交流电压源
date: 2018/8/1 14:40:44
type: components
classname: _ACVoltageSource
symbol: ACVoltageSource
author: 
order: 9
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Source Name</span> |  | 元件名称 | 文本 |  |
| <span id="comp_params_param_Grnd">Is Star Point Grounded?</span> |  | 电压源一端是否接地（中性点是否接地） | 选择 |  |
| <span id="comp_params_param_Dim">Dimension</span> |  | 电压源是单相还是三相 | 选择 |  |
| <span id="comp_params_param_Vm">Rated Voltage (L-L, RMS)</span> | kV | 线电压有效值 | 实数 |  |
| <span id="comp_params_param_Ph">Initial Phase</span> | Deg | 初始相位 | 实数 |  |
| <span id="comp_params_param_f">Frequency</span> | Hz | 频率 | 实数 |  |
| <span id="comp_params_param_R">Resistance</span> | Ω | 内阻 | 实数 |  |
| <span id="comp_params_param_Init">Initial Type</span> |  | 启动方式 | 选择 |  |
| <span id="comp_params_param_Tc">Ramp Up Time</span> | s | 启动时间 | 实数 |  |

[Source Name]: #comp_params_param_Name "Source Name"
[Is Star Point Grounded?]: #comp_params_param_Grnd "Is Star Point Grounded?"
[Dimension]: #comp_params_param_Dim "Dimension"
[Rated Voltage (L-L, RMS)]: #comp_params_param_Vm "Rated Voltage (L-L, RMS)"
[Initial Phase]: #comp_params_param_Ph "Initial Phase"
[Frequency]: #comp_params_param_f "Frequency"
[Resistance]: #comp_params_param_R "Resistance"
[Initial Type]: #comp_params_param_Init "Initial Type"
[Ramp Up Time]: #comp_params_param_Tc "Ramp Up Time"

### <span id="comp_params_group_Fault">Fault Setting</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Fault">Is This a Fault Source ?</span> |  | 是否为故障电压源 | 选择 |  |
| <span id="comp_params_param_Tfs">Fault Start Time</span> | s | 故障开始时间 | 实数 |  |
| <span id="comp_params_param_Tfe">Fault End Time</span> | s | 故障结束时间 | 实数 |  |
| <span id="comp_params_param_Dr">Drop ratio</span> | p.u. | 故障电压降 | 实数 |  |

[Is This a Fault Source ?]: #comp_params_param_Fault "Is This a Fault Source ?"
[Fault Start Time]: #comp_params_param_Tfs "Fault Start Time"
[Fault End Time]: #comp_params_param_Tfe "Fault End Time"
[Drop ratio]: #comp_params_param_Dr "Drop ratio"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Source current \[kA\]</span> | 电压源输出电流 | 文本 |  |

[Source current \[kA\]]: #comp_params_param_I "Source current \[kA\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了交流电压源的典型应用。

## <span id="comp_seealso">相关元件</span>

## <span id="comp_ref">参考文献</span>



