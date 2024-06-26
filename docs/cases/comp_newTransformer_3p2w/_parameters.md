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
| Name | `Name` | 文本 | 元件名称 |
| Rated Power | `Tmva` | 实数 [MVA] | 额定容量 |
| Winding \#1 Rated Voltage \(L\-L, RMS\) | `V1` | 实数 [kV] | 绕组#1额定线电压有效值 |
| Winding \#2 Rated Voltage \(L\-L, RMS\) | `V2` | 实数 [kV] | 绕组#2额定线电压有效值 |
| Base Operation Frequency | `f` | 实数 [Hz] | 额定频率 |
| Winding \#1 Type | `YD1` | 选择 | 绕组#1连接类型 |
| Winding \#2 Type | `YD2` | 选择 | 绕组#2连接类型 |
| Delta Lags or Leads Y | `Lead` | 选择 | Delta绕组连接方式 |
| Winding \#1 Neutral Point Resistance | `Rn1` | 实数 [Ω] | 绕组#1中性点电阻 |
| Winding \#2 Neutral Point Resistance | `Rn2` | 实数 [Ω] | 绕组#2中性点电阻 |
| Positive Sequence Leakage Reactance | `Xl` | 实数 [p\.u\.] | 正序漏电抗 |
| Positive Sequence Leakage Resistance | `Rl` | 实数 [p\.u\.] | 正序漏电阻 |
| Magnetization Conductance | `Gm` | 实数 [p\.u\.] | 励磁电导 |
| Magnetizing Current | `Im1` | 实数 [%] | 空载励磁电流 |
| Tap Changer | `Tap` | 选择 | 变压器分接头选择 |
| Initial Tap Ratio | `InitTap` | 实数 | 初始分接头档位 |

#### Configuration\-SFEMT

Configuration (For Shifted Frequency EMT)

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Numerical Integration Method | `NIM` | 选择 | 数值积分方法选择（仅对移频电磁暂态仿真有效） |

#### Saturation

Saturation

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Saturation Enabled | `Enab` | 选择 | 考虑饱和特性? |
| Place Saturation on | `Sat` | 选择 | 励磁绕组位置 |
| Air Core Reactance | `Xac` | 实数 [p\.u\.] | 空心电抗 |
| Rush Decay Time Constant | `Tdc` | 实数 [s] | 涌流衰减时间 |
| Knee Voltage | `Xknee` | 实数 [p\.u\.] | 拐点电压 |
| Time to Release Flux Clipping | `Txk` | 实数 [s] | 启动时间 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Winding \#1 Line Current Vector \[kA\] | `I1` | 虚拟引脚（输出） | 绕组1三相线电流 |
| Winding \#1 Phase Current Vector \[kA\] | `I1p` | 虚拟引脚（输出） | 绕组1三相相电流 |
| Winding \#2 Line Current Vector \[kA\] | `I2` | 虚拟引脚（输出） | 绕组2三相线电流 |
| Winding \#2 Phase Current Vector \[kA\] | `I2p` | 虚拟引脚（输出） | 绕组2三相相电流 |
| Winding \#1 RMS Line Current \[kA\] | `I1rms` | 虚拟引脚（输出） | 绕组1线电流均方根值 |
| Winding \#2 RMS Line Current \[kA\] | `I2rms` | 虚拟引脚（输出） | 绕组2线电流均方根值 |
| Winding \#1 Active Power \[MW\] | `P1` | 虚拟引脚（输出） | 绕组1有功功率 |
| Winding \#1 Reactive Power \[MVar\] | `Q1` | 虚拟引脚（输出） | 绕组1无功功率 |
| Winding \#2 Active Power \[MW\] | `P2` | 虚拟引脚（输出） | 绕组2有功功率 |
| Winding \#2 Reactive Power \[MVar\] | `Q2` | 虚拟引脚（输出） | 绕组2无功功率 |
| 3 Phase Magnetizing Current \[kA\] | `Im` | 虚拟引脚（输出） | 三相励磁电流 |
| 3 Phase Flux Linkage \[KWb\-N\] | `Flux` | 虚拟引脚（输出） | 三相磁链 |


</slot>
