---
title: 三相三绕组变压器
date: 2018/8/1 14:40:44
type: components
classname: _Transformer_3p3w
symbol: Transformer_3p3w
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 |  |
| <span id="comp_params_param_SN1">Winding #1 Rated Power</span> | MVA | 绕组1额定容量 | 实数 |  |
| <span id="comp_params_param_SN2">Winding #2 Rated Power</span> | MVA | 绕组2额定容量 | 实数 |  |
| <span id="comp_params_param_SN3">Winding #3 Rated Power</span> | MVA | 绕组2额定容量 | 实数 |  |
| <span id="comp_params_param_V1N">Winding #1 Rated Voltage (L-L, RMS)</span> | kV | 绕组1额定线电压有效值 | 实数 |  |
| <span id="comp_params_param_V2N">Winding #2 Rated Voltage (L-L, RMS)</span> | kV | 绕组2额定线电压有效值 | 实数 |  |
| <span id="comp_params_param_V3N">Winding #3 Rated Voltage (L-L, RMS)</span> | kV | 绕组2额定线电压有效值 | 实数 |  |
| <span id="comp_params_param_fn">Base Operation Frequency</span> | Hz | 额定频率 | 实数 |  |
| <span id="comp_params_param_Type1">Winding #1 Type</span> |  | 绕组1连接类型 | 选择 |  |
| <span id="comp_params_param_Type2">Winding #2 Type</span> |  | 绕组2连接类型 | 选择 |  |
| <span id="comp_params_param_Type3">Winding #3 Type</span> |  | 绕组3连接类型 | 选择 |  |
| <span id="comp_params_param_Lag">Delta Lags or Leads Y</span> |  | Delta连接方式 | 选择 |  |
| <span id="comp_params_param_R1n">Winding #1 Neutral Point Resistance</span> | Ω | 绕组1中性点电阻 | 实数 |  |
| <span id="comp_params_param_R2n">Winding #2 Neutral Point Resistance</span> | Ω | 绕组2中性点电阻 | 实数 |  |
| <span id="comp_params_param_R3n">Winding #3 Neutral Point Resistance</span> | Ω | 绕组3中性点电阻 | 实数 |  |
| <span id="comp_params_param_XT1">Winding #1 Equivalent Leakage Reactance</span> | p.u. | 绕组1等值漏电抗 | 实数 |  |
| <span id="comp_params_param_XT2">Winding #2 Equivalent Leakage Reactance</span> | p.u. | 绕组2等值漏电抗 | 实数 |  |
| <span id="comp_params_param_XT3">Winding #3 Equivalent Leakage Reactance</span> | p.u. | 绕组3等值漏电抗 | 实数 |  |
| <span id="comp_params_param_RT1">Winding #1 Equivalent Leakage Resistance</span> | p.u. | 绕组1等值漏电阻 | 实数 |  |
| <span id="comp_params_param_RT2">Winding #2 Equivalent Leakage Resistance</span> | p.u. | 绕组2等值漏电阻 | 实数 |  |
| <span id="comp_params_param_RT3">Winding #3 Equivalent Leakage Resistance</span> | p.u. | 绕组3等值漏电阻 | 实数 |  |
| <span id="comp_params_param_GM">Magnetization Conductance</span> | p.u. | 励磁电导 | 实数 |  |
| <span id="comp_params_param_BM">Magnetization Admittance</span> | p.u. | 励磁电纳 | 实数 |  |

[Name]: #comp_params_param_Name "Name"
[Winding #1 Rated Power]: #comp_params_param_SN1 "Winding #1 Rated Power"
[Winding #2 Rated Power]: #comp_params_param_SN2 "Winding #2 Rated Power"
[Winding #3 Rated Power]: #comp_params_param_SN3 "Winding #3 Rated Power"
[Winding #1 Rated Voltage (L-L, RMS)]: #comp_params_param_V1N "Winding #1 Rated Voltage (L-L, RMS)"
[Winding #2 Rated Voltage (L-L, RMS)]: #comp_params_param_V2N "Winding #2 Rated Voltage (L-L, RMS)"
[Winding #3 Rated Voltage (L-L, RMS)]: #comp_params_param_V3N "Winding #3 Rated Voltage (L-L, RMS)"
[Base Operation Frequency]: #comp_params_param_fn "Base Operation Frequency"
[Winding #1 Type]: #comp_params_param_Type1 "Winding #1 Type"
[Winding #2 Type]: #comp_params_param_Type2 "Winding #2 Type"
[Winding #3 Type]: #comp_params_param_Type3 "Winding #3 Type"
[Delta Lags or Leads Y]: #comp_params_param_Lag "Delta Lags or Leads Y"
[Winding #1 Neutral Point Resistance]: #comp_params_param_R1n "Winding #1 Neutral Point Resistance"
[Winding #2 Neutral Point Resistance]: #comp_params_param_R2n "Winding #2 Neutral Point Resistance"
[Winding #3 Neutral Point Resistance]: #comp_params_param_R3n "Winding #3 Neutral Point Resistance"
[Winding #1 Equivalent Leakage Reactance]: #comp_params_param_XT1 "Winding #1 Equivalent Leakage Reactance"
[Winding #2 Equivalent Leakage Reactance]: #comp_params_param_XT2 "Winding #2 Equivalent Leakage Reactance"
[Winding #3 Equivalent Leakage Reactance]: #comp_params_param_XT3 "Winding #3 Equivalent Leakage Reactance"
[Winding #1 Equivalent Leakage Resistance]: #comp_params_param_RT1 "Winding #1 Equivalent Leakage Resistance"
[Winding #2 Equivalent Leakage Resistance]: #comp_params_param_RT2 "Winding #2 Equivalent Leakage Resistance"
[Winding #3 Equivalent Leakage Resistance]: #comp_params_param_RT3 "Winding #3 Equivalent Leakage Resistance"
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
| <span id="comp_params_param_IA1">Winding #1 Phase A Current \[kA\]</span> | 绕组1的A相电流信号 | 文本 |  |
| <span id="comp_params_param_IB1">Winding #1 Phase B Current \[kA\]</span> | 绕组1的B相电流信号 | 文本 |  |
| <span id="comp_params_param_IC1">Winding #1 Phase C Current \[kA\]</span> | 绕组1的C相电流信号 | 文本 |  |
| <span id="comp_params_param_IA2">Winding #2 Phase A Current \[kA\]</span> | 绕组2的A相电流信号 | 文本 |  |
| <span id="comp_params_param_IB2">Winding #2 Phase B Current \[kA\]</span> | 绕组2的B相电流信号 | 文本 |  |
| <span id="comp_params_param_IC2">Winding #2 Phase C Current \[kA\]</span> | 绕组2的C相电流信号 | 文本 |  |
| <span id="comp_params_param_IA3">Winding #3 Phase A Current \[kA\]</span> | 绕组3的A相电流信号 | 文本 |  |
| <span id="comp_params_param_IB3">Winding #3 Phase B Current \[kA\]</span> | 绕组3的B相电流信号 | 文本 |  |
| <span id="comp_params_param_IC3">Winding #3 Phase C Current \[kA\]</span> | 绕组3的C相电流信号 | 文本 |  |
| <span id="comp_params_param_IMA">Phase A Magnetizing Current \[kA\]</span> | A相励磁电流信号 | 文本 |  |
| <span id="comp_params_param_IMB">Phase B Magnetizing Current \[kA\]</span> | B相励磁电流信号 | 文本 |  |
| <span id="comp_params_param_IMC">Phase C Magnetizing Current \[kA\]</span> | C相励磁电流信号 | 文本 |  |
| <span id="comp_params_param_FLUXA">Phase A Flux Linkage \[KWb-N\]</span> | A相磁链信号 | 文本 |  |
| <span id="comp_params_param_FLUXB">Phase B Flux Linkage \[KWb-N\]</span> | B相磁链信号 | 文本 |  |
| <span id="comp_params_param_FLUXC">Phase C Flux Linkage \[KWb-N\]</span> | C相磁链信号 | 文本 |  |

[Winding #1 Phase A Current \[kA\]]: #comp_params_param_IA1 "Winding #1 Phase A Current \[kA\]"
[Winding #1 Phase B Current \[kA\]]: #comp_params_param_IB1 "Winding #1 Phase B Current \[kA\]"
[Winding #1 Phase C Current \[kA\]]: #comp_params_param_IC1 "Winding #1 Phase C Current \[kA\]"
[Winding #2 Phase A Current \[kA\]]: #comp_params_param_IA2 "Winding #2 Phase A Current \[kA\]"
[Winding #2 Phase B Current \[kA\]]: #comp_params_param_IB2 "Winding #2 Phase B Current \[kA\]"
[Winding #2 Phase C Current \[kA\]]: #comp_params_param_IC2 "Winding #2 Phase C Current \[kA\]"
[Winding #3 Phase A Current \[kA\]]: #comp_params_param_IA3 "Winding #3 Phase A Current \[kA\]"
[Winding #3 Phase B Current \[kA\]]: #comp_params_param_IB3 "Winding #3 Phase B Current \[kA\]"
[Winding #3 Phase C Current \[kA\]]: #comp_params_param_IC3 "Winding #3 Phase C Current \[kA\]"
[Phase A Magnetizing Current \[kA\]]: #comp_params_param_IMA "Phase A Magnetizing Current \[kA\]"
[Phase B Magnetizing Current \[kA\]]: #comp_params_param_IMB "Phase B Magnetizing Current \[kA\]"
[Phase C Magnetizing Current \[kA\]]: #comp_params_param_IMC "Phase C Magnetizing Current \[kA\]"
[Phase A Flux Linkage \[KWb-N\]]: #comp_params_param_FLUXA "Phase A Flux Linkage \[KWb-N\]"
[Phase B Flux Linkage \[KWb-N\]]: #comp_params_param_FLUXB "Phase B Flux Linkage \[KWb-N\]"
[Phase C Flux Linkage \[KWb-N\]]: #comp_params_param_FLUXC "Phase C Flux Linkage \[KWb-N\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了三相三绕组变压器的典型应用。

## <span id="comp_seealso">相关元件</span>

## <span id="comp_ref">参考文献</span>



