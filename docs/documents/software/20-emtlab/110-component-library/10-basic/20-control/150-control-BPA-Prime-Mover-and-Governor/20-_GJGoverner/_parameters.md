<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### 调节系统模型2（GJ）

调节系统模型2（GJ）

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| T1 | `T1` | 实数 [s] | 转速测量环节时间常数T1（秒） |
| ε | `eps` | 实数 [p\.u\.] | 转速偏差死区ε（相对系统频率的标么值，死区为±0.5ε） |
| K1 | `K1` | 实数 [p\.u\.] | 转速偏差放大倍数K1 |
| 控制方式 | `I` | 选择 | 控制方式选择，（各种方式下，一次调频均能自动投入） |
| Kp | `Kp` | 实数 [p\.u\.] | PID比例环节倍数KP |
| Kd | `Kd` | 实数 [p\.u\.] | PID微分环节倍数KD |
| Ki | `Ki` | 实数 [p\.u\.] | PID积分环节倍数KI |
| INTG\_MAX | `INTG_MAX` | 实数 [p\.u\.] | PID积分环节限幅上限INTG_MAX |
| INTG\_MIN | `INTG_MIN` | 实数 [p\.u\.] | PID积分环节限幅下限INTG_MIN |
| PID\_MAX | `PID_MAX` | 实数 [p\.u\.] | 调压器放大器的时间常数（秒） |
| PID\_MIN | `PID_MIN` | 实数 [p\.u\.] | PID输出限幅环节的下限PID_MIN |
| K2 | `K2` | 实数 | 负荷控制前馈系数。 |
| Wmax | `Wmax` | 实数 [p\.u\.] | 一次调频负荷上限 |
| Wmin | `Wmin` | 实数 [p\.u\.] | 一次调频负荷下限 |

#### 调节系统模型2继续卡（GJ\+）

调节系统模型2继续卡（GJ+）

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| TW\_DELAY | `TW_DELAY` | 实数 [s] | 频率输入信号的纯延迟时间（秒） |
| TP\_DELAY | `TP_DELAY` | 实数 [s] | 功率反馈信号的纯延迟时间（秒） |
| TR | `TR` | 实数 [s] | 功率反馈信号对应的一阶惯性环节时间常数（秒） |
| TW2\_delay | `TW2_delay` | 实数 [s] | 频率信号放大后的纯延迟时间（秒） |
| TW\_DELAY\_PID | `TW_DELAY_PID` | 实数 [s] | 频率信号放大后输入PID的纯延迟时间（秒） |
| DPup | `DPup` | 实数 [p\.u\./s] | 频率信号放大后输入PID信号的上升速率限制（ pu/秒） |
| DPdown | `DPdown` | 实数 [p\.u\./s] | 频率信号放大后输入PID信号的下降速率限制（ pu/秒） |


</slot>
