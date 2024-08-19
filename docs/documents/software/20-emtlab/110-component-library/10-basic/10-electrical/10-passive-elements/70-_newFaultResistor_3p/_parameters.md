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
| Name | `Name` | 文本 | 元件名称  <br/> 此处输入故障电阻的名称（可缺省） |
| Initial Resistance | `Init` | 实数 [Ω] | 初始电阻 |
| Fault Start Time | `fs` | 实数 [s] | 故障开始时刻 |
| Fault End Time | `fe` | 实数 [s] | 故障结束时刻 |
| Fault Resistance | `chg` | 实数 [Ω] | 故障期间电阻 |
| Fault Type | `ft` | 选择 | 故障类型  <br/> 选择故障的类型（A相、B相、C相、AB相、BC相、AC相、ABC相） |
| Fault Clear Type | `fct` | 选择 | 故障清除时刻  <br/>  选择故障清除时刻为过零时刻或任意时刻 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 3 Phase Branch Current \[kA\] | `I` | 虚拟引脚（输出） | 三相电阻故障电流  <br/> 此处输入电阻端电流量测信号的标签（3×1维），比如Iabc |
| 3 Phase Branch Voltage \[kV\] | `V` | 虚拟引脚（输出） | 三相电阻故障电压 <br/> 此处输入电阻端电压量测信号的标签（3×1维），比如Vabc |


</slot>