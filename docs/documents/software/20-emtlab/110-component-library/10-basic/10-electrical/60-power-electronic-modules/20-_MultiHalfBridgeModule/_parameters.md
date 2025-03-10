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
| Name | `Name` | 文本 | 元件名称<br/>此处输入半桥子模块的名称 |
| No\. of Sub\-Modules | `N` | 整数 | 子模块数量 |
| Capacitance Per Sub\-Module | `C` | 实数 [F] | 子模块电容 |
| Initial Capacitor Voltage | `V0` | 实数 [kV] | 初始电容电压 |
| Capacitor Leakage Resistance | `Rp` | 实数 [Ω] | 电容泄露电阻 |
| IGBT ON Resistance | `RIon` | 实数 [Ω] | IGBT导通电阻 |
| IGBT OFF Resistance | `RIoff` | 实数 [Ω] | IGBT关断电阻 |
| Diode ON Resistance | `RDon` | 实数 [Ω] | 二极管导通电阻 |
| Diode OFF Resistance | `RDoff` | 实数 [Ω] | 二极管关断电阻 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Capacitor Voltage Vector \[kV\] | `VcName` | 虚拟引脚（输出） | 电容电压向量<br/>此处输入半桥子模块电容电压信号量测信号的标签（Nx1维），如 Vc |
| Capacitor Current Vector \[kA\] | `IcName` | 虚拟引脚（输出） | 电容充电电流向量<br/>此处输入半桥子模块电容电流信号量测信号的标签（Nx1维），如 Ic |
| IGBT A Voltage Vector \[kV\] | `VtaName` | 虚拟引脚（输出） | IGBT(A)电压向量<br/>此处输入半桥子模块中IGBT(A)的电压信号量测信号的标签（Nx1维），如 Va |
| IGBT A Current Vector \[kA\] | `ItaName` | 虚拟引脚（输出） | IGBT(A)电流向量<br/>此处输入半桥子模块中IGBT(A)的电流信号量测信号的标签（Nx1维），如 Ia |
| Diode A Voltage Vector \[kV\] | `VdaName` | 虚拟引脚（输出） | 二极管(A)电压向量<br/>此处输入半桥子模块中二极管(A)的电压信号量测信号的标签（Nx1维），如 Vda |
| Diode A Current Vector \[kA\] | `IdaName` | 虚拟引脚（输出） | 二极管(A)电流向量<br/>此处输入半桥子模块中二极管(A)的电流信号量测信号的标签（Nx1维），如 Ida |
| IGBT B Voltage Vector \[kV\] | `VtbName` | 虚拟引脚（输出） | IGBT(B)电压向量<br/>此处输入半桥子模块中IGBT(B)的电压信号量测信号的标签（Nx1维），如 Vb |
| IGBT B Current Vector \[kA\] | `ItbName` | 虚拟引脚（输出） | IGBT(B)电流向量<br/>此处输入半桥子模块中IGBT(B)的电流信号量测信号的标签（Nx1维），如 Ib |
| Diode B Voltage Vector \[kV\] | `VdbName` | 虚拟引脚（输出） | 二极管(B)电压向量<br/>此处输入半桥子模块中二极管(B)的电压信号量测信号的标签（Nx1维），如 Vdb |
| Diode B Current Vector \[kA\] | `IdbName` | 虚拟引脚（输出） | 二极管(B)电流向量<br/>此处输入半桥子模块中二极管(B)的电流信号量测信号的标签（Nx1维），如 Idb |


</slot>
