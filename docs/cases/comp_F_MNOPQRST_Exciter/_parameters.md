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
| Model Type | `Model` | 选择 | 模型类型选择 |
| Is Over\-Excitation Enabled? | `OverExcitationEnabled` | 选择 | 过励限制是否接入 |
| Is Under\-Excitation Enabled? | `UnderExcitationEnabled` | 选择 | 欠励限制是否接入 |

#### AVR Parameters 1

AVR Parameters 1

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| TR | `TR` | 实数 [s] | 调节器输入滤波器时间常数（秒） |
| K | `K` | 实数 [p\.u\.] | 调节器增益（pu） |
| Kv | `Kv` | 实数 [p\.u\.] | 比例积分或纯积分调节选择因子 |
| T1 | `T1` | 实数 [s] | 电压调节器时间常数1（秒） |
| T2 | `T2` | 实数 [s] | 电压调节器时间常数2（秒） |
| T3 | `T3` | 实数 [s] | 电压调节器时间常数3（秒） |
| T4 | `T4` | 实数 [s] | 电压调节器时间常数4（秒） |
| KA | `KA` | 实数 [p\.u\.] | 调压器增益（pu） |
| TA | `TA` | 实数 [s] | 调压器放大器的时间常数（秒） |
| KF | `KF` | 实数 [p\.u\.] | 调压器稳定回路增益（pu） |
| TF | `TF` | 实数 [s] | 调压器稳定回路时间常数（秒） |
| KH | `KH` | 实数 [p\.u\.] | 励磁机电流反馈增益（pu） |

#### AVR Parameters 2

AVR Parameters 2

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| VAMAX | `VAMAX` | 实数 [pu] | 调节器最大内部电压（pu） |
| VAMIN | `VAMIN` | 实数 [p\.u\.] | 调节器最小内部电压（pu） |
| KB | `KB` | 实数 [p\.u\.] | 第二级调节器增益（pu） |
| T5 | `T5` | 实数 [s] | 第二级调节器时间常数（秒） |
| KE | `KE` | 实数 [p\.u\.] | 励磁机自励磁系数（pu） |
| TE | `TE` | 实数 [s] | 励磁机时间常数（秒） |
| C1 | `C1` | 实数 [p\.u\.] | 用于求取励磁机饱和系数Se的参数，Se=C1*exp(C2*Efd) |
| C2 | `C2` | 实数 [p\.u\.] | 用于求取励磁机饱和系数Se的参数，Se=C1*exp(C2*Efd) |
| VRMAX | `VRMAX` | 实数 [p\.u\.] | 电压调节器最大输出（pu） |
| VRMIN | `VRMIN` | 实数 [p\.u\.] | 电压调节器最小输出（pu） |
| KC | `KC` | 实数 [p\.u] | 换相电抗的整流器负载因子 |
| KD | `KD` | 实数 [p\.u] | 去磁因子（pu） |
| EFDMAX | `EFDMAX` | 实数 [p\.u] | 最大励磁电压（pu） |

#### Over\-Excitation Limiter

Over-Excitation Limiter

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| KL1 | `KL1` | 实数 [p\.u] | 励磁机励磁电流限制增益（pu） |
| VL1R | `VL1R` | 实数 [p\.u] | 励磁机电流限制（pu） |

#### Numerical Integration Configuration

Numerical Integration Configuration

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Enable Loop Iteration | `Enab_Loop_Iter` | 布尔 | 允许利用迭代解环，可以解决部分数值不稳定问题，提高计算精度，但会降低效率。建议在Kf>0时开启。 |
| Max Loop Iteration | `Max_Loop_Iter` | 实数 | 解环时的最大迭代次数 |
| Tolerance | `Tol_Loop_Iter` | 实数 | 解环迭代收敛的容许误差。 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Vr Measure | `Vro` | 虚拟引脚（输出） | 内部量Vr输出信号 |
| Vf Measure | `Vfo` | 虚拟引脚（输出） | 内部量Vf输出信号 |
| Va Measure | `Vao` | 虚拟引脚（输出） | 内部量Va输出信号 |


</slot>
