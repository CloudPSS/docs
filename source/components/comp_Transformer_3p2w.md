---
title: 三相双绕组变压器
date: 2018/8/1 14:40:44
type: components
classname: _Transformer_3p2w
symbol: Transformer_3p2w
author: 
categories: 
- electric
- ac-system
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真三相两绕组组式变压器。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入变压器名称 |
| <span id="comp_params_param_SN">Rated Power</span> | MVA | 额定容量 | 实数 | 变压器的额定功率$S_N$ |
| <span id="comp_params_param_V1N">Winding #1 Rated Voltage (L-L, RMS)</span> | kV | 绕组1额定线电压有效值 | 实数 | 绕组1的额定线电压有效值$V_{1N}$ |
| <span id="comp_params_param_V2N">Winding #2 Rated Voltage (L-L, RMS)</span> | kV | 绕组2额定线电压有效值 | 实数 | 绕组2的额定线电压有效值$V_{2N}$ |
| <span id="comp_params_param_fn">Base Operation Frequency</span> | Hz | 额定频率 | 实数 | 变压器所在电气系统的基频频率$f_n$ |
| <span id="comp_params_param_Type1">Winding #1 Type</span> |  | 绕组1连接类型 | 选择 | 选择绕组1的连接类型为星形(Y)或三角形(Delta) |
| <span id="comp_params_param_Type2">Winding #2 Type</span> |  | 绕组2连接类型 | 选择 | 选择绕组2的连接类型为星形(Y)或三角形(Delta) |
| <span id="comp_params_param_Lag">Delta Lags or Leads Y</span> |  | Delta连接方式 | 选择 | 选择Delta连接绕组电压超前或滞后Y连接绕组电压30°，仅当有绕组为三角形连接时起作用。 |
| <span id="comp_params_param_R1n">Winding #1 Neutral Point Resistance</span> | Ω | 绕组1中性点电阻 | 实数 | 绕组1的中性点电阻$r_{1n}$，仅在星形连接下起作用 |
| <span id="comp_params_param_R2n">Winding #2 Neutral Point Resistance</span> | Ω | 绕组2中性点电阻 | 实数 | 绕组2的中性点电阻$r_{1n}$，仅在星形连接下起作用 |
| <span id="comp_params_param_XT">Equivalent Leakage Reactance</span> | p.u. | 等值漏电抗 | 实数 | 变压器的等值漏电抗$X_T$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_RT">Equivalent Leakage Resistance</span> | p.u. | 等值漏电阻 | 实数 | 变压器的等值漏电抗$R_T$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_GM">Magnetization Conductance</span> | p.u. | 励磁电导 | 实数 | 变压器器励磁电导$G_M$，可由变压器空载实验或变压器铭牌得出 |
| <span id="comp_params_param_BM">Magnetization Admittance</span> | p.u. | 励磁电纳 | 实数 | 变压器器励磁电纳$B_M$，可由变压器空载实验或变压器铭牌得出 |

[Name]: #comp_params_param_Name "Name"
[Rated Power]: #comp_params_param_SN "Rated Power"
[Winding #1 Rated Voltage (L-L, RMS)]: #comp_params_param_V1N "Winding #1 Rated Voltage (L-L, RMS)"
[Winding #2 Rated Voltage (L-L, RMS)]: #comp_params_param_V2N "Winding #2 Rated Voltage (L-L, RMS)"
[Base Operation Frequency]: #comp_params_param_fn "Base Operation Frequency"
[Winding #1 Type]: #comp_params_param_Type1 "Winding #1 Type"
[Winding #2 Type]: #comp_params_param_Type2 "Winding #2 Type"
[Delta Lags or Leads Y]: #comp_params_param_Lag "Delta Lags or Leads Y"
[Winding #1 Neutral Point Resistance]: #comp_params_param_R1n "Winding #1 Neutral Point Resistance"
[Winding #2 Neutral Point Resistance]: #comp_params_param_R2n "Winding #2 Neutral Point Resistance"
[Equivalent Leakage Reactance]: #comp_params_param_XT "Equivalent Leakage Reactance"
[Equivalent Leakage Resistance]: #comp_params_param_RT "Equivalent Leakage Resistance"
[Magnetization Conductance]: #comp_params_param_GM "Magnetization Conductance"
[Magnetization Admittance]: #comp_params_param_BM "Magnetization Admittance"

### <span id="comp_params_group_Saturation">Saturation</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Saten">Saturation enabled</span> |  | 考虑饱和特性 | 选择 | 选择“是”或“否”以启用或禁用铁心饱和度 |
| <span id="comp_params_param_Place">Place Saturation on Winding</span> |  | 励磁绕组位置 | 选择 | 选择励磁绕组位置，考虑饱和特性时，饱和电流由该位置注入 |
| <span id="comp_params_param_Xac">Air Core Reactance</span> | p.u. | 空心电抗 | 实数 | 变压器空心电抗，通常大约是等值电抗的两倍 |
| <span id="comp_params_param_Trd">Rush Decay Time Constant</span> | s | 涌流衰减时间 | 实数 | 变压器浪涌电流的衰减时间 |
| <span id="comp_params_param_Vk">Knee Voltage</span> | p.u. | 拐点电压 | 实数 | 对应于饱和曲线拐点的电压 |
| <span id="comp_params_param_Trfc">Time to Release Flux Clipping</span> | s | 启动时间 | 实数 | 为防止启动不稳定，需要在一段时间内不计算或限制计算磁链值，该时间即为启动时间 |

[Saturation enabled]: #comp_params_param_Saten "Saturation enabled"
[Place Saturation on Winding]: #comp_params_param_Place "Place Saturation on Winding"
[Air Core Reactance]: #comp_params_param_Xac "Air Core Reactance"
[Rush Decay Time Constant]: #comp_params_param_Trd "Rush Decay Time Constant"
[Knee Voltage]: #comp_params_param_Vk "Knee Voltage"
[Time to Release Flux Clipping]: #comp_params_param_Trfc "Time to Release Flux Clipping"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_IA1">Winding #1 Phase A Current \[kA\]</span> | 绕组1的A相电流 | 文本 |  此处输入变压器绕组1的A相电流信号标签，以#号开头，如#IA1 |
| <span id="comp_params_param_IB1">Winding #1 Phase B Current \[kA\]</span> | 绕组1的B相电流 | 文本 |  此处输入变压器绕组1的B相电流信号标签，以#号开头，如#IB1 |
| <span id="comp_params_param_IC1">Winding #1 Phase C Current \[kA\]</span> | 绕组1的C相电流 | 文本 |  此处输入变压器绕组1的C相电流信号标签，以#号开头，如#IC1 |
| <span id="comp_params_param_IA2">Winding #2 Phase A Current \[kA\]</span> | 绕组2的A相电流 | 文本 | 此处输入变压器绕组2的A相电流信号标签，以#号开头，如#IA2 |
| <span id="comp_params_param_IB2">Winding #2 Phase B Current \[kA\]</span> | 绕组2的B相电流 | 文本 | 此处输入变压器绕组2的B相电流信号标签，以#号开头，如#IB2 |
| <span id="comp_params_param_IC2">Winding #2 Phase C Current \[kA\]</span> | 绕组2的C相电流 | 文本 | 此处输入变压器绕组2的C相电流信号标签，以#号开头，如#IC2 |
| <span id="comp_params_param_IMA">Phase A Magnetizing Current \[kA\]</span> | A相励磁电流 | 文本 | 此处输入变压器A相励磁电流信号的标签，以#号开头，如#IMA |
| <span id="comp_params_param_IMB">Phase B Magnetizing Current \[kA\]</span> | B相励磁电流 | 文本 | 此处输入变压器B相励磁电流信号的标签，以#号开头，如#IMB |
| <span id="comp_params_param_IMC">Phase C Magnetizing Current \[kA\]</span> | C相励磁电流 | 文本 | 此处输入变压器C相励磁电流信号的标签，以#号开头，如#IMC |
| <span id="comp_params_param_FLUXA">Phase A Flux Linkage \[KWb-N\]</span> | A相磁链 | 文本 | 此处输入变压器A相磁链信号的标签，以#号开头，如#FLUXA |
| <span id="comp_params_param_FLUXB">Phase B Flux Linkage \[KWb-N\]</span> | B相磁链 | 文本 | 此处输入变压器B相磁链信号的标签，以#号开头，如#FLUXB |
| <span id="comp_params_param_FLUXC">Phase C Flux Linkage \[KWb-N\]</span> | C相磁链 | 文本 | 此处输入变压器C相磁链信号的标签，以#号开头，如#FLUXC |

[Winding #1 Phase A Current \[kA\]]: #comp_params_param_IA1 "Winding #1 Phase A Current \[kA\]"
[Winding #1 Phase B Current \[kA\]]: #comp_params_param_IB1 "Winding #1 Phase B Current \[kA\]"
[Winding #1 Phase C Current \[kA\]]: #comp_params_param_IC1 "Winding #1 Phase C Current \[kA\]"
[Winding #2 Phase A Current \[kA\]]: #comp_params_param_IA2 "Winding #2 Phase A Current \[kA\]"
[Winding #2 Phase B Current \[kA\]]: #comp_params_param_IB2 "Winding #2 Phase B Current \[kA\]"
[Winding #2 Phase C Current \[kA\]]: #comp_params_param_IC2 "Winding #2 Phase C Current \[kA\]"
[Phase A Magnetizing Current \[kA\]]: #comp_params_param_IMA "Phase A Magnetizing Current \[kA\]"
[Phase B Magnetizing Current \[kA\]]: #comp_params_param_IMB "Phase B Magnetizing Current \[kA\]"
[Phase C Magnetizing Current \[kA\]]: #comp_params_param_IMC "Phase C Magnetizing Current \[kA\]"
[Phase A Flux Linkage \[KWb-N\]]: #comp_params_param_FLUXA "Phase A Flux Linkage \[KWb-N\]"
[Phase B Flux Linkage \[KWb-N\]]: #comp_params_param_FLUXB "Phase B Flux Linkage \[KWb-N\]"
[Phase C Flux Linkage \[KWb-N\]]: #comp_params_param_FLUXC "Phase C Flux Linkage \[KWb-N\]"


## <span id="comp_remarks">参数说明</span>
### 绕组等值阻抗
+ 在已知漏阻抗的情况下，可直接填写该项。
+ 未知时，可由变压器短路实验或铭牌参数得出。

设已知参数为短路损耗$P_k$(单位：KW)，短路电压百分比$V_k\%$。具体解算公式如下:

变压器短路损耗近似等于铜耗，可得出等值电阻的有名值及标幺值分别为：
$${R_T} = \frac{ { {P_k} } }{ {1000} }\frac{ {V_N^2} }{ {S_N^2} },{R_{T*} } = \frac{ { {P_k} } }{ {1000{S_N} } }$$
短路电压约等于变压器电抗在额定电流下产生的压降，可得出等值电抗的有名值及标幺值分别为：
$${X_T} = \frac{ { {V_k}\% } }{ {100} }\frac{ {V_N^2} }{ {S_N^{} } } , {X_{T*} } = \frac{ { {V_k}\% } }{ {100} }$$

### 励磁导纳
+ 在已知励磁导纳的情况下，可直接填写该项。
+ 未知时，可由变压器空载实验或铭牌参数得出。

设已知参数为空载损耗$\Delta {P_0}$(单位：KW)以及励磁电流百分比$I_0\%$。具体解算公式如下:

空载损耗近似等于铁耗，可得出励磁电导的有名值及标幺值分别为：
$${G_T} = \frac{ {\Delta {P_0} } }{ {1000V_N^2} },{G_{T*} } = \frac{ {\Delta {P_0} } }{ {1000{S_N} } }$$
空载电流包含有功分量和无功分量，有功分量很小，因此空载电流近似等于无功分量。可得出励磁电纳的有名值及标幺值分别为：
$${B_T} = \frac{ { {I_0}\% } }{ {100} }{\kern 1pt} {\kern 1pt} \frac{ { {S_N} } }{ {V_N^2} } ,{B_{T*} } = \frac{ { {I_0}\% } }{ {100} }$$

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了三相双绕组变压器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<单相变压器>](<test link>)、[<三相三绕组变压器>](<test link>)




