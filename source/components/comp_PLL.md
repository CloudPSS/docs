---
title: 锁相环
date: 2018/8/1 14:40:44
type: components
classname: _PLL
symbol: PLL
author: 
categories: 
- control
- advanced
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件是一个三相π控制的锁相环，可以产生一个在0°到360°变化的，与输入电压Va同步或锁相的斜升信号theta。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 填写元件的名称 |
| <span id="comp_params_param_P">Proportional Gain</span> |  | 比例增益 | 实数 | 填写比例增益的数值 |
| <span id="comp_params_param_I">Integral Gain</span> |  | 积分增益 | 实数 |填写积分增益的数值  |
| <span id="comp_params_param_Voltage">Base Voltage</span> | kV | 电压基值 | 实数 |填写电压基值  |
| <span id="comp_params_param_F">Base Frequency</span> | Hz | 频率基值 | 实数 | 填写频率基值 |
| <span id="comp_params_param_Offset">Offset Angle to PLL</span> | Deg | PLL输出波形相移 | 实数 |填写输出波形的相移角度  |
| <span id="comp_params_param_T">Initialization Time</span> | s | 启动时间，即PLL输出屏蔽时间 | 实数 | 填写启动时间，在此时间之前输出信号将被屏蔽 |
| <span id="comp_params_param_UL">Upper Tracking Limit</span> | p.u. | 被跟踪频率上限 | 实数 |填写被跟踪频率的上限  |
| <span id="comp_params_param_LL">Lower Tracking Limit</span> | p.u. | 被跟踪频率下限 | 实数 |填写被跟踪频率的下限  |

[Name]: #comp_params_param_Name "Name"
[Proportional Gain]: #comp_params_param_P "Proportional Gain"
[Integral Gain]: #comp_params_param_I "Integral Gain"
[Base Voltage]: #comp_params_param_Voltage "Base Voltage"
[Base Frequency]: #comp_params_param_F "Base Frequency"
[Offset Angle to PLL]: #comp_params_param_Offset "Offset Angle to PLL"
[Initialization Time]: #comp_params_param_T "Initialization Time"
[Upper Tracking Limit]: #comp_params_param_UL "Upper Tracking Limit"
[Lower Tracking Limit]: #comp_params_param_LL "Lower Tracking Limit"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Fo">Tracked Frequency \[Hz\]</span> | 被跟踪频率信号 | 文本 |填写被跟踪频率信号的名称  |
| <span id="comp_params_param_Error">Error Signal</span> | 错误信号 | 文本 |填写错误信号的名称 |

[Tracked Frequency \[Hz\]]: #comp_params_param_Fo "Tracked Frequency \[Hz\]"
[Error Signal]: #comp_params_param_Error "Error Signal"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了锁相环的典型应用。

## <span id="comp_seealso">相关元件</span>
[<PLO>](<test link>)




