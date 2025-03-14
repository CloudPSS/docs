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
| Name | `Name` | 文本 | 元件名称<br/>此处输入多模块SST的名称 |
| No\. of Sub\-Modules | `N` | 整数 | 子模块数量 |
| IGBT On Resistance | `RIon` | 实数 [Ω] | IGBT导通电阻 |
| IGBT Off Resistance | `RIoff` | 实数 [Ω] | IGBT关断电阻 |
| Diode On Resistance | `RDon` | 实数 [Ω] | 二极管导通电阻 |
| Diode Off Resistance | `RDoff` | 实数 [Ω] | 二极管关断电阻 |
| Capacitance of C1 | `C` | 实数 [F] | 电容C1容值 |
| Initial Voltage of C1 | `V0` | 实数 [kV] | 电容C1初始电压 |
| Capacitance of C2 | `C1` | 实数 [F] | 电容C2容值 |
| Initial Voltage of C2 | `V1` | 实数 [kV] | 电容C2初始电压 |

#### Transformer

Transformer

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Rated Power | `Tmva` | 实数 [MVA] | 额定容量<br/>变压器每侧绕组的额定容量$S_N$（所填变压器参数的功率基值） |
| Winding \#1 Rated Voltage \(RMS\) | `Vp` | 实数 [kV] | 绕组#1额定电压有效值<br/>绕组1的额定线电压有效值$V_{1N}$（所填变压器参数的电压基值） |
| Winding \#2 Rated Voltage \(RMS\) | `Vs` | 实数 [kV] | 绕组#2额定电压有效值<br/>绕组2的额定线电压有效值$V_{2N}$（所填变压器参数的电压基值） |
| Base Operation Frequency | `Fre` | 实数 [Hz] | 额定频率<br/>变压器的额定频率$f_n$ |
| Leakage Reactance | `Xl` | 实数 [p\.u\.] | 漏电抗<br/>变压器的等值漏电抗$X_T$  ，可由变压器短路实验或变压器铭牌得出 |
| No Load Losses | `Rloss` | 实数 [p\.u\.] | 空载损耗<br/>变压器的空载损耗$P_0$，可由变压器空载实验或变压器铭牌得出 |
| Copper Losses | `Closs` | 实数 [p\.u\.] | 铜耗<br/>变压器的铜耗$P_Cu$，可由变压器短路实验或变压器铭牌得出 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| IGBT Voltage Vector \[kV\] | `VT` | 虚拟引脚（输出） | IGBT电压向量<br/>此处输入IGBT 的电压向量量测信号的标签（12Nx1维），如 Vt |
| IGBT Current Vector \[kA\] | `It` | 虚拟引脚（输出） | IGBT电流向量<br/>此处输入IGBT 的电流向量量测信号的标签（12Nx1维），如 It |
| Diode Current Vector \[kA\] | `Id` | 虚拟引脚（输出） | 二极管电流向量<br/>此处输入二极管的电流向量量测信号的标签（12Nx1维），如 Id |
| Winding Voltage Vector \[kV\] | `Vps` | 虚拟引脚（输出） | 变压器初/次级绕组电压向量<br/>此处输入变压器初/次级绕组电压量测信号的标签（2Nx1维），如 Vps |
| Winding Current Vector \[kA\] | `Ips` | 虚拟引脚（输出） | 变压器初/次级绕组电流向量<br/>此处输入变压器初/次级绕组电流量测信号的标签（2Nx1维），如 Ips |
| Terminal Voltage Vector of C2 \[kV\] | `Vdc1` | 虚拟引脚（输出） | 电容C2端电压向量<br/>此处输入直流电容C2电压量测信号的标签（Nx1维），如 Vc |


</slot>
