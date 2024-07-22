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
| \[Rc\] Load Compensating Resistance | `Rc` | 实数 [p\.u\.] | 负荷补偿电阻 |
| \[Xc\] Load Compensating Reactance | `Xc` | 实数 [p\.u\.] | 负荷补偿电抗 |
| \[TR\] Transducer Time Constant | `TR` | 实数 [s] | Vc滤波时间常数 |

#### EXST1\_PTI Forward Lead\-Lag Parameters

EXST1_PTI Forward Lead-Lag Parameters

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| \[TC\] Lead Time Constant | `TC` | 实数 [s] | 超前滞后环节超前时间常数 |
| \[TB\] Lag Time Constant | `TB` | 实数 [s] | 超前滞后环节滞后时间常数 |

#### EXST1\_PTI Feedback and Regulator Parameters

EXST1_PTI Feedback and Regulator Parameters

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| \[KF\] Rate Feedback Gain | `KF` | 实数 [p\.u\.] | 速率反馈微分环节比例参数 |
| \[TF\] Rate Feedback Time Constant | `TF` | 实数 [s] | 速率反馈微分环节时间常数 |
| \[KA\] Regular Gain | `KA` | 实数 [p\.u\.] | 调节器比例参数 |
| \[TA\] Regulator Time Constant | `TA` | 实数 [s] | 调节器时间常数 |

#### EXST1\_PTI Field Circuit Constants

EXST1_PTI Field Circuit Constants

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| \[VRMAX\] Maximum Field Voltage | `VRMAX` | 实数 [p\.u\.] | Maximum Field Voltage |
| \[VRMIN\] Minimum Field Voltage | `VRMIN` | 实数 [p\.u\.] | Minimum Field Voltage |
| \[KC\] Field Current Commutating Impedance | `KC` | 实数 [p\.u\.] | Field Current Commutating Impedance |
| \[VIMAX\] Upper Limit on Error Signal | `VIMAX` | 实数 [p\.u\.] | 电压差值信号上限 |
| \[VIMIN\] Lower Limit on Error Signal | `VIMIN` | 实数 [p\.u\.] | 电压差值信号下限 |


</slot>