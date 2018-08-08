---
title: 单相变压器
date: 2018/8/1 14:40:44
type: components
classname: _Transformer_1p
symbol: Transformer_1p
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 |  |
| <span id="comp_params_param_SN">Rated Power</span> | MVA | 额定容量 | 实数 |  |
| <span id="comp_params_param_V1">Winding #1 Rated Voltage(RMS)</span> | kV | 绕组1额定电压有效值 | 实数 |  |
| <span id="comp_params_param_V2">Winding #2 Rated Voltage(RMS)</span> | kV | 绕组2额定电压有效值 | 实数 |  |
| <span id="comp_params_param_fn">Base Operation Frequency</span> | Hz | 额定频率 | 实数 |  |
| <span id="comp_params_param_XT">Equivalent Leakage Reactance</span> | p.u. | 等值漏电抗 | 实数 |  |
| <span id="comp_params_param_RT">Equivalent Leakage Resistance</span> | p.u. | 等值漏电阻 | 实数 |  |
| <span id="comp_params_param_GM">Magnetization Conductance</span> | p.u. | 励磁电导 | 实数 |  |
| <span id="comp_params_param_BM">Magnetization Admittance</span> | p.u. | 励磁电纳 | 实数 |  |

[Name]: #comp_params_param_Name "Name"
[Rated Power]: #comp_params_param_SN "Rated Power"
[Winding #1 Rated Voltage(RMS)]: #comp_params_param_V1 "Winding #1 Rated Voltage(RMS)"
[Winding #2 Rated Voltage(RMS)]: #comp_params_param_V2 "Winding #2 Rated Voltage(RMS)"
[Base Operation Frequency]: #comp_params_param_fn "Base Operation Frequency"
[Equivalent Leakage Reactance]: #comp_params_param_XT "Equivalent Leakage Reactance"
[Equivalent Leakage Resistance]: #comp_params_param_RT "Equivalent Leakage Resistance"
[Magnetization Conductance]: #comp_params_param_GM "Magnetization Conductance"
[Magnetization Admittance]: #comp_params_param_BM "Magnetization Admittance"

### <span id="comp_params_group_Saturation">Saturation</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Saten">Saturation enabled</span> |  | 考虑饱和特性 | 选择 |  |
| <span id="comp_params_param_Place">Place Saturation on Winding</span> |  | 励磁绕组位置 | 选择 |  |
| <span id="comp_params_param_Xac">Air Core Reactance</span> | p.u. | 空心电抗 | 实数 |  |
| <span id="comp_params_param_Trd">Rush Decay Time Constant</span> | s | 涌流衰减时间 | 实数 |  |
| <span id="comp_params_param_Vk">Knee Voltage</span> | p.u. | 拐点电压 | 实数 |  |
| <span id="comp_params_param_Trfc">Time to Release Flux Clipping</span> | s | 启动时间 | 实数 |  |

[Saturation enabled]: #comp_params_param_Saten "Saturation enabled"
[Place Saturation on Winding]: #comp_params_param_Place "Place Saturation on Winding"
[Air Core Reactance]: #comp_params_param_Xac "Air Core Reactance"
[Rush Decay Time Constant]: #comp_params_param_Trd "Rush Decay Time Constant"
[Knee Voltage]: #comp_params_param_Vk "Knee Voltage"
[Time to Release Flux Clipping]: #comp_params_param_Trfc "Time to Release Flux Clipping"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_IL1">Winding #1 Current \[kA\]</span> | 绕组1电流信号 | 文本 |  |
| <span id="comp_params_param_IL2">Winding #2 Current \[kA\]</span> | 绕组2电流信号 | 文本 |  |
| <span id="comp_params_param_IM">Magnetizing Current \[kA\]</span> | 励磁电流信号 | 文本 |  |
| <span id="comp_params_param_FLUX">Flux Linkage \[KWb-N\]</span> | 磁链信号 | 文本 |  |

[Winding #1 Current \[kA\]]: #comp_params_param_IL1 "Winding #1 Current \[kA\]"
[Winding #2 Current \[kA\]]: #comp_params_param_IL2 "Winding #2 Current \[kA\]"
[Magnetizing Current \[kA\]]: #comp_params_param_IM "Magnetizing Current \[kA\]"
[Flux Linkage \[KWb-N\]]: #comp_params_param_FLUX "Flux Linkage \[KWb-N\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了单相变压器的典型应用。

## <span id="comp_seealso">相关元件</span>

## <span id="comp_ref">参考文献</span>



