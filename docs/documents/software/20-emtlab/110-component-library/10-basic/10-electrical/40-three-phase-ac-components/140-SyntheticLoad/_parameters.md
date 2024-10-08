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
| Name | `Name` | 文本 | 元件名称<br/>此处输入综合负荷模型名称，可缺省 |
| Rated Power | `Smva` | 实数 [MVA] | 系统额定容量 |
| Rated Stator Voltage \(L\-L, RMS\) | `V` | 实数 [kV] | 额定线电压有效值 |
| Base Operation Frequency | `freq` | 实数 [Hz] | 额定频率 |
| Stator Neutral Resistance | `Rneut` | 实数 [Ω] | 定子中性点电阻 |
| Model Type | `Model` | 选择 | 负荷模型类型<br/>选择负荷模型类型为 'Static Load Only' 或 'Induction Motor & Static Load' |

#### Load Data

Load Data

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Active Power | `P0` | 实数 [MW] | 综合负荷消耗的有功功率 |
| Initial Reactive Power | `Q0` | 实数 [MVar] | 综合负荷消耗的感性无功功率 |
| Dynamic Load Ratio | `Pper` | 实数 | 动态负荷的有功功率占综合负荷总有功功率的比值 |
| Ap \(Static Load Parameter\) | `ApL` | 实数 | 有功-电压静特性参数， Ap+Bp+Cp=1 |
| Aq \(Static Load Parameter\) | `AqL` | 实数 | 无功-电压静特性参数， Aq+Bq+Cq=1 |
| Bp \(Static Load Parameter\) | `BpL` | 实数 | 有功-电压静特性参数， Ap+Bp+Cp=1 |
| Bq \(Static Load Parameter\) | `BqL` | 实数 | 无功-电压静特性参数， Aq+Bq+Cq=1 |
| Voltage Index for P | `NP` | 实数 | 有功功率-电压指数<br/>有功功率-电压指数$NP$ |
| Voltage Index for Q | `NQ` | 实数 | 无功功率-电压指数<br/>无功功率-电压指数$NQ$ |
| Freq Index for P | `KPF` | 实数 | 有功功率-频率系数<br/>有功功率-频率系数$K_{PF}$ |
| Freq Index for Q | `KQF` | 实数 | 无功功率-频率系数<br/>无功功率-频率系数$K_{QF}$ |

#### Induction Motor Data

Induction Motor Data

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Magnetizing Parameter Format | `XmType` | 选择 | 选择输入激磁电抗Xm或定子开路转子回路时间常数Tdol' |
| Stator Resistance | `Rspu` | 实数 [p\.u\.] | 定子绕组电阻 |
| Rotor Resistance | `Rrpu` | 实数 [p\.u\.] | 转子绕组电阻 |
| Stator Leakage Reactance | `Xlspu` | 实数 [p\.u\.] | 定子绕组漏电抗 |
| Rotor Leakage Reactance | `Xlrpu` | 实数 [p\.u\.] | 转子绕组漏电抗 |
| Magnetizing Reactance | `Xmdpu` | 实数 [p\.u\.] | 励磁电抗（Xmd） |
| Stator Open\-Curcuit Time Constant | `Tdop` | 实数 [s] | 定子开路时间常数 |

#### Rotor Equation

Rotor Equation

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Mechanical Torque Type | `TmType` | 选择 | 机械转矩计算模型选择<br/>选择自动计算的机械转矩计算模型，分为 Tm=KL(α+(1-α)(1-s)^p)  与  Tm=Tm(Aω^2+Bω+C) 两种模型 |
| Inertia Constant | `Tj` | 实数 [s] | 惯性时间常数<br/>此处应填写惯性时间常数 $T_J=2H$，其中$H$为惯性常数（北美和欧洲参数形式） |
| α \(Type\-1 parameter\) | `Ka` | 实数 | 与转速无关的阻力矩系数, Tm=KL(α+(1-α)(1-s)^p) |
| p \(Type\-1 parameter\) | `Kp` | 实数 | 与转速有关的阻力矩方次, Tm=KL(α+(1-α)(1-s)^p) |
| A \(Type\-5 parameter\) | `A` | 实数 | 阻力矩与转速平方相关的比例系数, Tm=Tm(Aω^2+Bω+C) |
| B \(Type\-5 parameter\) | `B` | 实数 | 阻力矩与转速相关的比例系数, Tm=Tm(Aω^2+Bω+C) |

#### Initial Condition

Initial Condition

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Initial Parameter Format | `ParamType` | 选择 | 异步电机初始参数输入类型<br/>选择异步电机初始参数输入类型，分为 None (Motor Rated Power = System Based Power) ，Input Initial Slip s0 (Type-1) 以及 Input Initial Load Factor Mlf (Type-5) 三种方式 |
| Initial Voltage Magnitude | `V_mag` | 实数 [p\.u\.] | 潮流稳态相电压标幺值<br/>初始电压幅值，可以由潮流程序修改，与其相连的母线电压一致。 |
| Initial Slip s₀ | `s0` | 实数 | 初始滑差 s₀ |
| Initial Load Factor Mlf | `Mlf` | 实数 | 初始负载率 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 3 Phase Load Current Vector \[kA\] | `Is` | 虚拟引脚（输出） | 综合负荷三相线电流<br/>此处输入综合负荷三相线电流量测信号的标签（1x1维），如 Is |
| RMS Load Current \[p\.u\.\] | `Isrms` | 虚拟引脚（输出） | 综合负荷三相线电流有效值<br/>此处输入综合负荷三相线电流有效值量测信号的标签（1x1维），如 Isrms |
| RMS Stator Voltage \[p\.u\.\] | `Vsrms` | 虚拟引脚（输出） | 定子端三相电压有效值<br/>此处输入定子端三相电压有效值量测信号的标签（1x1维），如 Vsrms |
| Active Power \[MW\] | `P` | 虚拟引脚（输出） | 定子侧有功功率<br/>此处输入定子端输出有功功率信号量测信号的标签（1x1维），如 P |
| Reactive Power \[MVar\] | `Q` | 虚拟引脚（输出） | 定子侧无功功率<br/>此处输入定子端输出无功功率信号量测信号的标签（1x1维），如 Q |

#### Monitoring \(Induction Motor\)

Monitoring (Induction Motor)

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 3 Phase Stator Current \[kA\] | `IsIM` | 虚拟引脚（输出） | 定子端三相线电流<br/>此处输入定子端三相线电流量测信号的标签（1x1维），如 IsIM |
| RMS Stator Current \[p\.u\.\] | `IsrmsIM` | 虚拟引脚（输出） | 定子端三相线电流有效值<br/>此处输入定子端三相线电流有效值量测信号的标签（1x1维），如 IsrmsIM |
| 3 Phase Rotor Current \[kA\] | `Ir` | 虚拟引脚（输出） | 转子端三相线电流<br/>此处输入转子端三相线电流量测信号的标签（1x1维），如 Ir |
| Mechanical Speed \[p\.u\.\] | `wr` | 虚拟引脚（输出） | 转子机械转速<br/>此处输入转子机械转速量测信号的标签（1x1维），如 wr |
| Motor Slip s \[p\.u\.\] | `so` | 虚拟引脚（输出） | 转子转差率s<br/>此处输入转子转差率s量测信号的标签（1x1维），如 so |
| Rotor Position \[Rad\] | `theta` | 虚拟引脚（输出） | 转子角位置<br/>此处输入转子角位置量测信号的标签（1x1维），如 theta |
| Electrical Torque \[p\.u\.\] | `Te` | 虚拟引脚（输出） | 电磁转矩<br/>此处输入电磁转矩量测信号的标签（1x1维），如 Te |
| Mechanical Torque \[p\.u\.\] | `Tm` | 虚拟引脚（输出） | 机械转矩<br/>此处输入机械转矩信号量测信号的标签（1x1维），如 Tm |
| Mechanical Speed \(Initialization\) \[p\.u\.\] | `wr0` | 虚拟引脚（输出） | 稳态启动的转子机械转速（可用于感应电机初始化）<br/>此处输入稳态启动的转子机械转速量测信号的标签（1x1维），如 wr0 |
| Mechanical Torque \(Initialization\) \[p\.u\.\] | `Tm0` | 虚拟引脚（输出） | 根据公式计算的PSASP模型机械转矩（可用于感应电机Tm的输入）<br/>此处输入机械转矩量测信号的标签（1x1维），如 Tm0 |
| Motor Rated Power Sb \[MVA\] | `Sbo` | 虚拟引脚（输出） | 感应电机额定容量（可经由初始转差或负荷率计算）<br/>此处输入感应电机额定容量量测信号的标签（1x1维），如 Sbo |
| Active Power \(Induction Motor\) \[MW\] | `PIMo` | 虚拟引脚（输出） | 感应电机定子侧有功功率<br/>此处输入感应电机定子侧有功功率信号量测信号的标签（1x1维），如 PIMo |
| Reactive Power \(Induction Motor\) \[MW\] | `QIMo` | 虚拟引脚（输出） | 感应电机定子侧无功功率<br/>此处输入感应电机定子侧无功功率信号量测信号的标签（1x1维），如 QIMo |


</slot>
