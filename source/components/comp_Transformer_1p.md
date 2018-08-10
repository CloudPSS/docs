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

+ 该元件用以仿真单相两绕组组式变压器。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入变压器名称 |
| <span id="comp_params_param_SN">Rated Power</span> | MVA | 额定容量 | 实数 | 变压器的额定功率$S_N$ |
| <span id="comp_params_param_V1">Winding #1 Rated Voltage(RMS)</span> | kV | 绕组1额定电压有效值 | 实数 |  绕组1额定电压有效值$V_{1N}$ |
| <span id="comp_params_param_V2">Winding #2 Rated Voltage(RMS)</span> | kV | 绕组2额定电压有效值 | 实数 |  绕组2额定电压有效值$V_{2N}$ |
| <span id="comp_params_param_fn">Base Operation Frequency</span> | Hz | 额定频率 | 实数 | 变压器所在电气系统的基频频率$f_n$ |
| <span id="comp_params_param_XT">Equivalent Leakage Reactance</span> | p.u. | 等值漏电抗 | 实数 | 变压器的等值漏电抗$X_T$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_RT">Equivalent Leakage Resistance</span> | p.u. | 等值漏电阻 | 实数 |  变压器的等值漏电阻$R_T$可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_GM">Magnetization Conductance</span> | p.u. | 励磁电导 | 实数 | 变压器器励磁电导$G_M$，可由变压器空载实验或变压器铭牌得出 |
| <span id="comp_params_param_BM">Magnetization Admittance</span> | p.u. | 励磁电纳 | 实数 | 变压器器励磁电纳$B_M$，可由变压器空载实验或变压器铭牌得出 |

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
| <span id="comp_params_param_Saten">Saturation enabled</span> |  | 考虑饱和特性 | 选择 | 选择“是”或“否”以启用或禁用铁心饱和度 |
| <span id="comp_params_param_Place">Place Saturation on Winding</span> |  | 励磁绕组位置 | 选择 | 选择励磁绕组位置，考虑饱和特性时，饱和电流由该位置注入。 |
| <span id="comp_params_param_Xac">Air Core Reactance</span> | p.u. | 空心电抗 | 实数 | 变压器空心电抗，通常大约是等值电抗的两倍 |
| <span id="comp_params_param_Trd">Rush Decay Time Constant</span> | s | 涌流衰减时间 | 实数 | 变压器浪涌电流的衰减时间，单位s |
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
| <span id="comp_params_param_IL1">Winding #1 Current \[kA\]</span> | 绕组1电流 | 文本 | 此处输入变压器绕组1电流信号的标签，以#号开头，如#IL1 |
| <span id="comp_params_param_IL2">Winding #2 Current \[kA\]</span> | 绕组2电流号 | 文本 | 此处输入变压器绕组2电流信号的标签，以#号开头，如#IL2 |
| <span id="comp_params_param_IM">Magnetizing Current \[kA\]</span> | 励磁电流 | 文本 | 此处输入变压器励磁电流信号的标签，以#号开头，如#IM |
| <span id="comp_params_param_FLUX">Flux Linkage \[KWb-N\]</span> | 磁链 | 文本 | 此处输入变压器磁链信号的标签，以#号开头，如#FLUX |

[Winding #1 Current \[kA\]]: #comp_params_param_IL1 "Winding #1 Current \[kA\]"
[Winding #2 Current \[kA\]]: #comp_params_param_IL2 "Winding #2 Current \[kA\]"
[Magnetizing Current \[kA\]]: #comp_params_param_IM "Magnetizing Current \[kA\]"
[Flux Linkage \[KWb-N\]]: #comp_params_param_FLUX "Flux Linkage \[KWb-N\]"


## <span id="comp_remarks">参数说明</span>
### [A] 绕组等值阻抗
+ 在已知漏阻抗的情况下，可直接填写该项。
+ 未知时，可由变压器短路实验或铭牌参数得出。

设已知参数为短路损耗$P_k$(单位：KW)，短路电压百分比$V_k\%$。具体解算公式如下:

变压器短路损耗近似等于铜耗，可得出等值电阻的有名值及标幺值分别为：
$${R_T} = \frac{ { {P_k} } }{ {1000} }\frac{ {V_N^2} }{ {S_N^2} }{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} ,{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {R_{T*} } = \frac{ { {P_k} } }{ {1000{S_N} } }$$
短路电压约等于变压器电抗在额定电流下产生的压降，可得出等值电抗的有名值及标幺值分别为：
$${X_T} = \frac{ { {V_k}\% } }{ {100} }\frac{ {V_N^2} }{ {S_N^{} } }{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} ,{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {X_{T*} } = \frac{ { {V_k}\% } }{ {100} }$$

### [B] 励磁导纳
+ 在已知励磁导纳的情况下，可直接填写该项。
+ 未知时，可由变压器空载实验或铭牌参数得出。

设已知参数为空载损耗$\Delta {P_0}$(单位：KW)以及励磁电流百分比$I_0\%$。具体解算公式如下:

空载损耗近似等于铁耗，可得出励磁电导的有名值及标幺值分别为：
$${G_T} = \frac{ {\Delta {P_0} } }{ {1000V_N^2} }{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} ,{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {G_{T*} } = \frac{ {\Delta {P_0} } }{ {1000{S_N} } }$$
空载电流包含有功分量和无功分量，有功分量很小，因此空载电流近似等于无功分量。可得出励磁电纳的有名值及标幺值分别为：
$${B_T} = \frac{ { {I_0}\% } }{ {100} }{\kern 1pt} {\kern 1pt} \frac{ { {S_N} } }{ {V_N^2} }{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} ,{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {B_{T*} } = \frac{ { {I_0}\% } }{ {100} }$$

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了单相变压器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<三相两绕组变压器>](<test link>)、[<三相三绕组变压器>](<test link>)




