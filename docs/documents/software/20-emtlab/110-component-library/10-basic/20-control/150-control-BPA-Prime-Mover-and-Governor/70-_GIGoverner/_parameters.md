<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### 调节系统模型1（GI）

调节系统模型1（GI）

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| T1 | `T1` | 实数 [s] | 转速测量环节时间常数T1（秒） |
| ε | `eps` | 实数 [p\.u\.] | 转速偏差死区ε（相对系统频率的标么值，死区为±0.5ε） |
| K | `K` | 实数 [p\.u\.] | 转速偏差放大倍数K |
| 负荷自动开关 | `I_la` | 选择 | 控制方式选择，（各种方式下，一次调频均能自动投入） |
| Kp1 | `Kp1` | 实数 [p\.u\.] | 负荷控制器PID比例环节倍数1 |
| Kd1 | `Kd1` | 实数 [p\.u\.] | 负荷控制器PID微分环节倍1 |
| Ki1 | `Ki1` | 实数 [p\.u\.] | 负荷控制器PID积分环节倍数1 |
| INTG\_MAX1 | `INTG_MAX1` | 实数 [p\.u\.] | PID积分环节限幅上限INTG_MAX1 |
| INTG\_MIN1 | `INTG_MIN1` | 实数 [p\.u\.] | PID积分环节限幅下限INTG_MIN1 |
| PID\_MAX1 | `PID_MAX1` | 实数 [p\.u\.] | 调压器放大器的时间常数1（秒） |
| PID\_MIN1 | `PID_MIN1` | 实数 [p\.u\.] | PID输出限幅环节的下限PID_MIN1 |
| 负荷前馈开关位置 | `I_lf` | 选择 | 负荷前馈开关位置， 1-投入， 2-切除，无缺省值，必须填写。 |
| Wmax | `Wmax` | 实数 [p\.u\.] | 一次调频负荷上限 |
| Wmin | `Wmin` | 实数 [p\.u\.] | 一次调频负荷下限 |

#### 调节系统模型1继续卡（GI\+）

调节系统模型1继续卡（GI+）

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 调节级压力自动开关 | `I_p` | 选择 | 调节级压力自动开关； 1-投入， 2-切除；无缺省值，必须填写 |
| Kp2 | `Kp2` | 实数 | 调节级压力控制器PID比例环节倍数KP2 |
| Kd2 | `Kd2` | 实数 [s] | 功率反馈信号的纯延迟时间（秒） |
| Ki2 | `Ki2` | 实数 | 调节级压力控制器PID积分环节倍数KI2 |
| INTG\_MAX2 | `INTG_MAX2` | 实数 [p\.u\.] | 调节级压力控制器PID积分环节限幅上限2 |
| INTG\_MIN2 | `INTG_MIN2` | 实数 [p\.u\.] | 调节级压力控制器PID积分环节限幅下限2 |
| PID\_MAX2 | `PID_MAX2` | 实数 [p\.u\.] | 调节级压力控制器PID输出限幅环节的上限 |
| PID\_MIN2 | `PID_MIN2` | 实数 [p\.u\.] | 调节级压力控制器PID输出限幅环节的下限 |
| CON\_MAX | `CON_MAX` | 实数 [p\.u\.] | 电液调节系统输出上限，标幺值(p.u.) |
| CON\_MIN | `CON_MIN` | 实数 [p\.u\.] | 电液调节系统输出下限，标幺值(p.u.) |


</slot>
