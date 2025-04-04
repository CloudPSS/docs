<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### Configuration

Configuration

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Name | `Name` | 文本 | 元件名称<br/>此处输入三相双绕组变压器的名称（可缺省） |
| Winding \#1 Rated Power | `Tmva1` | 实数 [MVA] | 绕组#1额定容量<br/>绕组1的额定容量$S_{1N}$（所填变压器参数的功率基值） |
| Winding \#2 Rated Power | `Tmva2` | 实数 [MVA] | 绕组#2额定容量<br/>绕组2的额定容量$S_{2N}$（所填变压器参数的功率基值） |
| Winding \#3 Rated Power | `Tmva3` | 实数 [MVA] | 绕组#3额定容量<br/>绕组3的额定容量$S_{3N}$（所填变压器参数的功率基值） |
| Winding \#1 Rated Voltage \(L\-L, RMS\) | `V1` | 实数 [kV] | 绕组#1额定线电压有效值<br/>绕组1的额定电压有效值 $V_{1N}$（所填变压器参数的电压基值） |
| Winding \#2 Rated Voltage \(L\-L, RMS\) | `V2` | 实数 [kV] | 绕组#2额定线电压有效值<br/>绕组2的额定电压有效值  $V_{2N}$（所填变压器参数的电压基值） |
| Winding \#3 Rated Voltage \(L\-L, RMS\) | `V3` | 实数 [kV] | 绕组#3额定线电压有效值<br/>绕组3的额定电压有效值  $V_{3N}$（所填变压器参数的电压基值） |
| Base Operation Frequency | `f` | 实数 [Hz] | 额定频率<br/>变压器的额定频率$f_n$ |
| Winding \#1 Type | `YD1` | 选择 | 绕组#1连接类型<br/>选择绕组1的连接类型为星形(Y)或三角形(Delta) |
| Winding \#2 Type | `YD2` | 选择 | 绕组#2连接类型<br/>选择绕组2的连接类型为星形(Y)或三角形(Delta) |
| Winding \#3 Type | `YD3` | 选择 | 绕组#3连接类型<br/>选择绕组3的连接类型为星形(Y)或三角形(Delta) |
| Delta Lags or Leads Y | `Lead` | 选择 | Delta绕组连接方式<br/>选择Delta连接绕组电压超前或滞后Y连接绕组电压30°，仅当有绕组为三角形连接时起作用 |
| Winding \#1 Neutral Point Resistance | `Rn1` | 实数 [Ω] | 绕组#1中性点电阻<br/>绕组1的中性点接地电阻$r_{1n}$，仅在星形连接下有效 |
| Winding \#2 Neutral Point Resistance | `Rn2` | 实数 [Ω] | 绕组#2中性点电阻<br/>绕组2的中性点接地电阻$r_{2n}$，仅在星形连接下有效 |
| Winding \#3 Neutral Point Resistance | `Rn3` | 实数 [Ω] | 绕组#3中性点电阻<br/>绕组3的中性点接地电阻$r_{3n}$，仅在星形连接下有效 |
| Positive Sequence Leakage Reactance \(\#1\-\#2\) | `Xl12` | 实数 [p\.u\.] | 绕组(#1-#2)正序漏电抗<br/>绕组1的等值电抗  $X_{T1}$​  ，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Reactance \(\#1\-\#3\) | `Xl13` | 实数 [p\.u\.] | 绕组(#1-#3)正序漏电抗<br/>绕组2的等值电抗  $X_{T2}$​  ，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Reactance \(\#2\-\#3\) | `Xl23` | 实数 [p\.u\.] | 绕组(#2-#3)正序漏电抗<br/>绕组3的等值电抗  $X_{T3}$​  ，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Resistance \(\#1\-\#2\) | `Rl12` | 实数 [p\.u\.] | #1-#2绕组正序漏电阻<br/>绕组1的等值漏电阻$R_{T1}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Resistance \(\#1\-\#3\) | `Rl13` | 实数 [p\.u\.] | #1-#3绕组正序漏电阻<br/>绕组2的等值漏电阻$R_{T2}$，可由变压器短路实验或变压器铭牌得出 |
| Positive Sequence Leakage Resistance \(\#2\-\#3\) | `Rl23` | 实数 [p\.u\.] | #2-#3绕组正序漏电阻<br/>绕组3的等值漏电阻$R_{T3}$，可由变压器短路实验或变压器铭牌得出 |
| Magnetization Conductance | `Gm` | 实数 [p\.u\.] | 励磁电导(空载损耗标幺值)<br/>变压器励磁电导$G_M$，可由变压器空载实验或变压器铭牌得出 |
| Magnetizing Current | `Im1` | 实数 [%] | 空载励磁电流<br/>变压器器空载励磁电流$I_M$，可由变压器空载实验或变压器铭牌得出 |
| Tap Changer | `Tap` | 选择 | 变压器分接头选择<br/>选择变压器分接头位置（无/绕组1/绕组2/绕组3） |
| Initial Tap Ratio | `InitTap` | 实数 | 初始分接头档位<br/>填写变压器初始分接头档位下的标幺值变比 |

#### Configuration\-SFEMT

Configuration (For Shifted Frequency EMT)

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Numerical Integration Method | `NIM` | 选择 | 数值积分方法选择（仅对移频电磁暂态仿真有效） |

#### Saturation

Saturation

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Saturation Enabled | `Enab` | 选择 | 考虑饱和特性?<br/>选择“是”或“否”以开启或关闭铁芯饱和特性的建模 |
| Place Saturation on | `Sat` | 选择 | 励磁绕组位置<br/>选择励磁绕组的添加位置，考虑饱和特性时，饱和电流由该位置注入 |
| Air Core Reactance | `Xair` | 实数 [p\.u\.] | 空心电抗<br/>变压器空心电抗，通常大约是等值漏电抗的两倍 |
| Rush Decay Time Constant | `Tdc` | 实数 [s] | 涌流衰减时间<br/>变压器励磁涌流的衰减时间常数 |
| Knee Voltage | `Xknee` | 实数 [p\.u\.] | 拐点电压<br/>对应于饱和曲线拐点的电压 |
| Time to Release Flux Clipping | `Txk` | 实数 [s] | 启动时间<br/>为防止启动不稳定，需要在一段时间内不计算或限制计算磁链值，该时间即为启动时间 |

#### Power Flow Data

Power Flow Data

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Center Bus Voltage Magnitude | `pf_V` | 实数 [p\.u\.] | 中心节点电压幅值 |
| Center Bus Voltage Angle | `pf_Theta` | 实数 [Deg] | 中心节点电压相位 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Winding \#1 Line Current Vector \[kA\] | `I1` | 虚拟引脚（输出） | 绕组1三相线电流<br/>此处输入变压器绕组1三相线电流量测信号的标签（3×1维），如 I1ll |
| Winding \#1 Phase Current Vector \[kA\] | `I1p` | 虚拟引脚（输出） | 绕组1三相相电流<br/>此处输入变压器绕组1三相相电流量测信号的标签（3×1维），如 I1lg |
| Winding \#2 Line Current Vector \[kA\] | `I2` | 虚拟引脚（输出） | 绕组2三相线电流<br/>此处输入变压器绕组1三相线电流量测信号的标签（3×1维），如 I2ll |
| Winding \#2 Phase Current Vector \[kA\] | `I2p` | 虚拟引脚（输出） | 绕组2三相相电流<br/>此处输入变压器绕组2三相相电流量测信号的标签（3×1维），如 I12g |
| Winding \#3 Line Current Vector \[kA\] | `I3` | 虚拟引脚（输出） | 绕组3三相线电流<br/>此处输入变压器绕组1三相线电流量测信号的标签（3×1维），如 I3ll |
| Winding \#3 Phase Current Vector \[kA\] | `I3p` | 虚拟引脚（输出） | 绕组3三相相电流<br/>此处输入变压器绕组3三相相电流量测信号的标签（3×1维），如 I3g |
| Winding \#1 RMS Line Current \[kA\] | `I1rms` | 虚拟引脚（输出） | 绕组1线电流均方根值<br/>此处输入变压器绕组1电流有效值量测信号的标签（1×1维），如 I1rms |
| Winding \#2 RMS Line Current \[kA\] | `I2rms` | 虚拟引脚（输出） | 绕组2线电流均方根值<br/>此处输入变压器绕组2电流有效值量测信号的标签（1×1维），如 I2rms |
| Winding \#3 RMS Line Current \[kA\] | `I3rms` | 虚拟引脚（输出） | 绕组3线电流均方根值<br/>此处输入变压器绕组3电流有效值量测信号的标签（1×1维），如 I3rms |
| Winding \#1 Active Power \[MW\] | `P1` | 虚拟引脚（输出） | 绕组1有功功率<br/>此处输入变压器绕组1有功功率量测信号的标签（1×1维），如 P1 |
| Winding \#1 Reactive Power \[MVar\] | `Q1` | 虚拟引脚（输出） | 绕组1无功功率<br/>此处输入变压器绕组1无功功率量测信号的标签（1×1维），如 Q1 |
| Winding \#2 Active Power \[MW\] | `P2` | 虚拟引脚（输出） | 绕组2有功功率<br/>此处输入变压器绕组1有功功率量测信号的标签（1×1维），如 P2 |
| Winding \#2 Reactive Power \[MVar\] | `Q2` | 虚拟引脚（输出） | 绕组2无功功率<br/>此处输入变压器绕组1无功功率量测信号的标签（1×1维），如 Q2 |
| Winding \#3 Active Power \[MW\] | `P3` | 虚拟引脚（输出） | 绕组3有功功率<br/>此处输入变压器绕组1有功功率量测信号的标签（1×1维），如 P3 |
| Winding \#3 Reactive Power \[MVar\] | `Q3` | 虚拟引脚（输出） | 绕组3无功功率<br/>此处输入变压器绕组1无功功率量测信号的标签（1×1维），如 Q3 |
| 3 Phase Magnetizing Current \[kA\] | `Im` | 虚拟引脚（输出） | 三相励磁电流<br/>此处输入变压器励磁电流量测信号的标签（3×1维），如 Im |
| 3 Phase Flux Linkage \[KWb\-N\] | `Flux` | 虚拟引脚（输出） | 三相磁链<br/>此处输入变压器磁链量测信号的标签（3×1维），如 Flux |


</slot>
