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
| Rated Power | `Smva` | 实数 [MVA] | 额定容量 |
| Rated Stator Voltage \(L\-L, RMS\) | `V` | 实数 [kV] | 额定线电压有效值 |
| Base Operation Frequency | `freq` | 实数 [Hz] | 额定频率 |
| Stator / Rotor Turns Ratio | `TurnRatio` | 实数 | 定/转子绕组匝数比（变比） |
| Is Stator Neutral Grounded? | `Neut` | 选择 | 定子中性点是否接地？ |
| Model Type | `Model` | 选择 | 选择转子端口种类 |
| Constant Conductance Matrix | `ConstGMat` | 布尔 | 是否选用恒等效导纳矩阵的模型。仅在选用电气转子引脚模型时可选。 |
| Parameter Format | `ParamType` | 选择 | 参数输入类型 |

#### Actual Value Data

Actual Value Data

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Stator Resistance | `Rs` | 实数 [Ω] | 定子绕组电阻 |
| Rotor Resistance | `Rr` | 实数 [Ω] | 转子绕组电阻 |
| Stator Leakage Reactance | `Xls` | 实数 [Ω] | 定子绕组漏电抗 |
| Rotor Leakage Reactance | `Xlr` | 实数 [Ω] | 转子绕组漏电抗 |
| Magnetizing Reactance | `Xmd` | 实数 [Ω] | 励磁电抗（Xmd） |

#### Per\-unit Value Data

Per-unit Value Data

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Stator Resistance | `Rspu` | 实数 [p\.u\.] | 定子绕组电阻 |
| Rotor Resistance | `Rrpu` | 实数 [p\.u\.] | 转子绕组电阻 |
| Stator Leakage Reactance | `Xlspu` | 实数 [p\.u\.] | 定子绕组漏电抗 |
| Rotor Leakage Reactance | `Xlrpu` | 实数 [p\.u\.] | 转子绕组漏电抗 |
| Magnetizing Reactance | `Xmdpu` | 实数 [p\.u\.] | 励磁电抗（Xmd） |

#### Rotor Equation

Rotor Equation

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Inertia Constant | `Tj` | 实数 [s] | 惯性时间常数 |
| Mechanical Damping | `Dm` | 实数 [p\.u\.] | 机械阻尼 |
| Initial Rotor Speed | `InitW` | 实数 [p\.u\.] | 电机初始转速 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 3 Phase Stator Current \[kA\] | `Is` | 虚拟引脚（输出） | 定子端三相线电流 |
| RMS Stator Current \[p\.u\.\] | `Isrms` | 虚拟引脚（输出） | 定子端三相线电流有效值 |
| RMS Stator Voltage \[p\.u\.\] | `Vsrms` | 虚拟引脚（输出） | 定子端三相电压有效值 |
| Mechanical Speed \[p\.u\.\] | `wr` | 虚拟引脚（输出） | 转子机械转速 |
| Rotor Position \[Rad\] | `theta` | 虚拟引脚（输出） | 转子角位置 |
| Electrical Torque \[p\.u\.\] | `Te` | 虚拟引脚（输出） | 电磁转矩 |
| Mechanical Torque \[p\.u\.\] | `Tm` | 虚拟引脚（输出） | 机械转矩 |
| Active Power \[MW\] | `P` | 虚拟引脚（输出） | 定子侧有功功率 |
| Reactive Power \[MW\] | `Q` | 虚拟引脚（输出） | 定子侧无功功率 |


</slot>
