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
| Source Name | `Name` | 文本 | 元件名称  <br/> 此处输入直流电流源的名称（可缺省） |
| Is This Source Grounded? | `Grnd` | 选择 | 电流源一端是否接地？ <br/>  选择 `Yes` 或 `No` 以使电流源负端接地或不接地 |
| Rated Current Magnitude | `Im` | 实数 [kA] | 输出电流幅值 |
| Start\-up Type | `Init` | 选择 | 启动方式  <br/>  选择电流源启动发式为 `Linear Ramp` 或 `Real Pole Ramp` |
| Current Ramp Up Time | `Tr` | 实数 [s] | 启动时间  <br/>  输入斜坡启动时间，仅当**启动方式**项为 `LinearRamp` 时生效 |
| Current Time Constant | `Tconstant` | 实数 [s] | 启动时间常数  <br/>  输入极点时间常数，仅当**启动方式**项为 `RealPoleRamp` 时生效 |

#### Fault Setting

Fault Setting

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Is This a Fault Source ? | `Fault` | 选择 | 是否为故障电源  <br/>  选择 `Yes` 或 `No` 以选择是否为故障电源 |
| Fault Start Time | `Tfs` | 实数 [s] | 故障开始时间  <br/> 故障开始的时间，仅当**是否为故障电源**项选择 `Yes` 时有效 |
| Fault End Time | `Tfe` | 实数 [s] | 故障结束时间  <br/> 故障结束的时间，仅当**是否为故障电源**项选择 `Yes` 时有效 |
| Drop Ratio | `Dr` | 实数 [p\.u\.] | 故障电流降  <br/>  故障期间电流的标幺值，仅当**是否为故障电源**项选择 `Yes` 时有效 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Source Voltage \[kV\] | `V` | 虚拟引脚（输出） | 电流源端电压  <br/>  此处输入电流源电压量测信号的标签，如 V |
| Source Current \[kA\] | `I` | 虚拟引脚（输出） | 电流源输出电流  <br/>  此处输入电流源输出电流量测信号的标签，如 I |


</slot>