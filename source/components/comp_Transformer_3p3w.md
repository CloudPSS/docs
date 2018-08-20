---
title: 三相三绕组变压器
date: 2018/8/1 14:40:44
type: components
classname: _Transformer_3p3w
symbol: Transformer_3p3w
author: 
categories: 
- electric
- ac-system
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真三相三绕组组式变压器。
    + 采用经典建模方法^[刘天琪. 现代电力系统分析理论与方法[M]. 中国电力出版社, 2007.]。
    + 绕组参数支持编辑。
    + 支持考虑磁芯饱和特性。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入变压器名称 |
| <span id="comp_params_param_SN1">Winding #1 Rated Power</span> | MVA | 绕组1额定容量 | 实数 | 绕组1的额定功率$S_{1N}$ |
| <span id="comp_params_param_SN2">Winding #2 Rated Power</span> | MVA | 绕组2额定容量 | 实数 | 绕组2的额定功率$S_{2N}$ |
| <span id="comp_params_param_SN3">Winding #3 Rated Power</span> | MVA | 绕组3额定容量 | 实数 | 绕组3的额定功率$S_{3N}$ |
| <span id="comp_params_param_V1N">Winding #1 Rated Voltage (L-L, RMS)</span> | kV | 绕组1额定线电压有效值 | 实数 | 绕组1的额定电压有效值$V_{1N}$ |
| <span id="comp_params_param_V2N">Winding #2 Rated Voltage (L-L, RMS)</span> | kV | 绕组2额定线电压有效值 | 实数 | 绕组2的额定电压有效值$V_{2N}$ |
| <span id="comp_params_param_V3N">Winding #3 Rated Voltage (L-L, RMS)</span> | kV | 绕组3额定线电压有效值 | 实数 | 绕组3的额定电压有效值$V_{3N}$ |
| <span id="comp_params_param_fn">Base Operation Frequency</span> | Hz | 额定频率 | 实数 | 变压器所在电气系统的基频频率$f_n$ |
| <span id="comp_params_param_Type1">Winding #1 Type</span> |  | 绕组1连接类型 | 选择 | 选择绕组1的连接类型为星形(Y)或三角形(Delta) |
| <span id="comp_params_param_Type2">Winding #2 Type</span> |  | 绕组2连接类型 | 选择 | 选择绕组2的连接类型为星形(Y)或三角形(Delta) |
| <span id="comp_params_param_Type3">Winding #3 Type</span> |  | 绕组3连接类型 | 选择 | 选择绕组3的连接类型为星形(Y)或三角形(Delta) |
| <span id="comp_params_param_Lag">Delta Lags or Leads Y</span> |  | Delta连接方式 | 选择 | 选择Delta连接绕组电压超前或滞后Y连接绕组电压30°，仅当有绕组为三角形连接时起作用 |
| <span id="comp_params_param_R1n">Winding #1 Neutral Point Resistance</span> | Ω | 绕组1中性点电阻 | 实数 | 绕组1的中性点电阻$r_{1n}$，仅在星形连接下起作用 |
| <span id="comp_params_param_R2n">Winding #2 Neutral Point Resistance</span> | Ω | 绕组2中性点电阻 | 实数 | 绕组2的中性点电阻$r_{2n}$，仅在星形连接下起作用 |
| <span id="comp_params_param_R3n">Winding #3 Neutral Point Resistance</span> | Ω | 绕组3中性点电阻 | 实数 | 绕组3的中性点电阻$r_{3n}$，仅在星形连接下起作用 |
| <span id="comp_params_param_XT1">Winding #1 Equivalent Leakage Reactance</span> | p.u. | 绕组1等值漏电抗 | 实数 | 绕组1的等值电抗$X_{T1}$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_XT2">Winding #2 Equivalent Leakage Reactance</span> | p.u. | 绕组2等值漏电抗 | 实数 | 绕组2的等值电抗$X_{T2}$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_XT3">Winding #3 Equivalent Leakage Reactance</span> | p.u. | 绕组3等值漏电抗 | 实数 | 绕组3的等值电抗$X_{T3}$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_RT1">Winding #1 Equivalent Leakage Resistance</span> | p.u. | 绕组1等值漏电阻 | 实数 | 绕组1的等值电阻$R_{T1}$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_RT2">Winding #2 Equivalent Leakage Resistance</span> | p.u. | 绕组2等值漏电阻 | 实数 | 绕组2的等值电阻$R_{T2}$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_RT3">Winding #3 Equivalent Leakage Resistance</span> | p.u. | 绕组3等值漏电阻 | 实数 | 绕组3的等值电阻$R_{T3}$，可由变压器短路实验或变压器铭牌得出 |
| <span id="comp_params_param_GM">Magnetization Conductance</span> | p.u. | 励磁电导 | 实数 | 变压器器励磁电导$G_M$，可由变压器空载实验或变压器铭牌得出 |
| <span id="comp_params_param_BM">Magnetization Admittance</span> | p.u. | 励磁电纳 | 实数 | 变压器器励磁电纳$B_M$，可由变压器空载实验或变压器铭牌得出 |

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
| <span id="comp_params_param_Saten">Saturation enabled</span> |  | 考虑饱和特性 | 选择 | 选择“是”或“否”以启用或禁用铁心饱和度 |
| <span id="comp_params_param_Place">Place Saturation on Winding</span> |  | 励磁绕组位置 | 选择 | 选择励磁绕组位置，考虑饱和特性时，饱和电流由该位置注入 |
| <span id="comp_params_param_Xac">Air Core Reactance</span> | p.u. | 空心电抗 | 实数 | 变压器空心电抗$X_{ac}$，通常大约是等值电抗的两倍 |
| <span id="comp_params_param_Trd">Rush Decay Time Constant</span> | s | 涌流衰减时间 | 实数 | 变压器浪涌电流的衰减时间$t_{at}$ |
| <span id="comp_params_param_Vk">Knee Voltage</span> | p.u. | 拐点电压 | 实数 | 对应于饱和曲线拐点的电压$V_{if}$ |
| <span id="comp_params_param_Trfc">Time to Release Flux Clipping</span> | s | 启动时间 | 实数 | 为防止启动不稳定，需要在一段时间内不计算或限制计算磁链值，该时间即为启动时间$t_{st}$ |

[Saturation enabled]: #comp_params_param_Saten "Saturation enabled"
[Place Saturation on Winding]: #comp_params_param_Place "Place Saturation on Winding"
[Air Core Reactance]: #comp_params_param_Xac "Air Core Reactance"
[Rush Decay Time Constant]: #comp_params_param_Trd "Rush Decay Time Constant"
[Knee Voltage]: #comp_params_param_Vk "Knee Voltage"
[Time to Release Flux Clipping]: #comp_params_param_Trfc "Time to Release Flux Clipping"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_IA1">Winding #1 Phase A Current \[kA\]</span> | 绕组1的A相电流 | 文本 | 此处输入变压器绕组1的A相电流信号标签，以#号开头，如#IA1 |
| <span id="comp_params_param_IB1">Winding #1 Phase B Current \[kA\]</span> | 绕组1的B相电流 | 文本 | 此处输入变压器绕组1的B相电流信号标签，以#号开头，如#IB1 |
| <span id="comp_params_param_IC1">Winding #1 Phase C Current \[kA\]</span> | 绕组1的C相电流 | 文本 | 此处输入变压器绕组1的C相电流信号标签，以#号开头，如#IC1 |
| <span id="comp_params_param_IA2">Winding #2 Phase A Current \[kA\]</span> | 绕组2的A相电流 | 文本 | 此处输入变压器绕组2的A相电流信号标签，以#号开头，如#IA2 |
| <span id="comp_params_param_IB2">Winding #2 Phase B Current \[kA\]</span> | 绕组2的B相电流 | 文本 | 此处输入变压器绕组2的B相电流信号标签，以#号开头，如#IB2 |
| <span id="comp_params_param_IC2">Winding #2 Phase C Current \[kA\]</span> | 绕组2的C相电流 | 文本 | 此处输入变压器绕组2的C相电流信号标签，以#号开头，如#IC2 |
| <span id="comp_params_param_IA3">Winding #3 Phase A Current \[kA\]</span> | 绕组3的A相电流 | 文本 | 此处输入变压器绕组3的A相电流信号标签，以#号开头，如#IA3 |
| <span id="comp_params_param_IB3">Winding #3 Phase B Current \[kA\]</span> | 绕组3的B相电流 | 文本 | 此处输入变压器绕组3的B相电流信号标签，以#号开头，如#IB3 |
| <span id="comp_params_param_IC3">Winding #3 Phase C Current \[kA\]</span> | 绕组3的C相电流 | 文本 | 此处输入变压器绕组3的C相电流信号标签，以#号开头，如#IC3 |
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
### 变压器连接形式
通过选择不同的绕组类型及Delta连接方式，可构成不同的变压器连接形式。

{% pullquote info %}
所有绕组的首端都是同极性端，当选择所有绕组都为Y连接时，变压器的联结组为Yy0(1#2#)及Yy0(1#3#)。

选择Delta连接绕组电压超前或滞后Y连接绕组电压30°的连接图如下：
![元件图标](cq.png)
例如，绕组1选择为Y连接，绕组2选择为Delta连接，Delta连接方式选择为超前，变压器的联结组为Yd11(1#2#)。
{% endpullquote %}

### 绕组等值阻抗
+ 在已知正序漏阻抗的情况下，可直接填写该项。
+ 未知时，可由变压器短路实验或铭牌给定参数得出。

设已知参数为短路损耗$\Delta P_{12}$，$\Delta P_{23}$，$\Delta P_{31}$(单位：KW)，短路试验电压百分比$V_{12}\%$，$V_{23}\%$，$V_{31}\%$(单位：p.u.)，具体解算公式如下：

当三个绕组容量不相同时，需要将短路损耗功率进行折算到同一容量$S_N$基准下面：
$$\Delta {P_{S12} } = {\Delta P_{12} }{\left( {\frac{ { {S_N} } }{ {\min \left[ { {S_{1N} },{S_{2N} } } \right]} } } \right)^2}$$
$$\Delta {P_{S23} } = {\Delta P_{23} }{\left( {\frac{ { {S_N} } }{ {\min \left[ { {S_{2N} },{S_{3N} } } \right]} } } \right)^2}$$
$$\Delta {P_{S31} } = {\Delta P_{31} }{\left( {\frac{ { {S_N} } }{ {\min \left[ { {S_{1N} },{S_{3N} } } \right]} } } \right)^2}$$
进而求得每个绕组的短路损耗：
$$\Delta {P_{S1} } = \frac{1}{2}\left( {\Delta {P_{S12} } + \Delta {P_{S31} } - \Delta {P_{S23} } } \right)$$
$$\Delta {P_{S2} } = \frac{1}{2}\left( {\Delta {P_{S12} } + \Delta {P_{S23} } - \Delta {P_{S31} } } \right)$$
$$\Delta {P_{S3} } = \frac{1}{2}\left( {\Delta {P_{S23} } + \Delta {P_{S31} } - \Delta {P_{S12} } } \right)$$
因此可得出各绕组等值电阻的有名值及标幺值分别为：
$${R_{Ti} } = \frac{ {\Delta {P_{Si} } } }{ {1000{S_N} } }\frac{ {V_{i,act}^2} }{ { {S_N} } }$$
$${R_{Ti}^*} = \frac{ {\Delta P_{Si} } }{ {1000{S_N} } }\frac{ {V_{i,act}^2} }{ { {S_N} } }\frac{ { {S_B} } }{ {V_{i,B}^2} }$$
同理，可求得每个绕组的短路电压百分比：
$${V_1}\%  = \frac{1}{2}\left( { {V_{12} }\%  + {V_{31} }\%  - {V_{23} }\% } \right)$$
$${V_2}\%  = \frac{1}{2}\left( { {V_{12} }\%  + {V_{23} }\%  - {V_{31} }\% } \right)$$
$${V_3}\%  = \frac{1}{2}\left( { {V_{23} }\%  + {V_{31} }\%  - {V_{12} }\% } \right)$$
因此可得出各绕组等值电感的有名值及标幺值分别为：
$${X_{Ti} } = \frac{ { {V_i}\% } }{ {100} }\frac{ {V_{i,act}^2} }{ { {S_N} } }$$
$${X_{Ti}^*} = \frac{ {V_i\% } }{ {100} }\frac{ {V_{i,act}^2} }{ { {S_N} } }\frac{ { {S_B} } }{ {V_{i,B}^2} }$$

### 励磁导纳
+ 在已知励磁导纳的情况下，可直接填写该项。
+ 未知时，可由变压器空载实验或铭牌给定参数得出。

设已知参数为空载损耗$\Delta {P_0}$(单位：KW)以及励磁电流百分比$I_0\%$ (单位：p.u.)。具体解算公式如下$^{[2]}$:
励磁电导$G_M$（单位：mho），归算到绕组1侧，即：
$${G_M} = \frac{ {\Delta {P_0} } }{ {1000V_{1,N}^2} }$$
其标幺值为：
$${G_M^*} = \frac{ {\Delta {P_0} } }{ {1000V_{i,N}^2} }\frac{ {V_{i,B}^2} }{ { {S_B} } }$$
励磁电纳$B_M$（单位：mho），归算到绕组1侧，即：
$${B_M} = \frac{ { {I_0}\% } }{ {100} }\frac{ { {S_N} } }{ {V_{1,N}^2} }$$
其标幺值为：
$${B_M^*} = \frac{ { {I_0}\% } }{ {100} }\frac{ { {S_N} } }{ {V_{i,N}^2} }\frac{ {V_{i,B}^{\text{2} } } }{ { {S_B} } }$$


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了三相三绕组变压器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<单相变压器>](<test link>)、[<三相二绕组变压器>](<test link>)



