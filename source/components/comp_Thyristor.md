---
title: 晶闸管
date: 2018/8/1 14:40:44
type: components
classname: _Thyristor
symbol: Thyristor
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 |  |
| <span id="comp_params_param_Snubber">Enable Snubber Circuit?</span> |  | 有无缓冲电路 | 选择 |  |
| <span id="comp_params_param_Ron">ON Resistance</span> | Ω | 导通电阻 | 实数 |  |
| <span id="comp_params_param_Roff">OFF Resistance</span> | Ω | 关断电阻 | 实数 |  |
| <span id="comp_params_param_Vfd">Forward Voltage Drop</span> | kV | 正向导通压降 | 实数 |  |
| <span id="comp_params_param_Vfb">Forward Breakover Voltage</span> | kV | 正向击穿电压 | 实数 |  |
| <span id="comp_params_param_Vrw">Reverse Withstand Voltage</span> | kV | 反向耐受电压 | 实数 |  |
| <span id="comp_params_param_Tme">Minimum Extinction Time</span> | s | 导通延迟时间 | 实数 |  |
| <span id="comp_params_param_Rs">Snubber Resistance</span> | Ω | 缓冲电路电阻 | 实数 |  |
| <span id="comp_params_param_Cs">Snubber Capacitance</span> | μF | 缓冲电路电容 | 实数 |  |

[Name]: #comp_params_param_Name "Name"
[Enable Snubber Circuit?]: #comp_params_param_Snubber "Enable Snubber Circuit?"
[ON Resistance]: #comp_params_param_Ron "ON Resistance"
[OFF Resistance]: #comp_params_param_Roff "OFF Resistance"
[Forward Voltage Drop]: #comp_params_param_Vfd "Forward Voltage Drop"
[Forward Breakover Voltage]: #comp_params_param_Vfb "Forward Breakover Voltage"
[Reverse Withstand Voltage]: #comp_params_param_Vrw "Reverse Withstand Voltage"
[Minimum Extinction Time]: #comp_params_param_Tme "Minimum Extinction Time"
[Snubber Resistance]: #comp_params_param_Rs "Snubber Resistance"
[Snubber Capacitance]: #comp_params_param_Cs "Snubber Capacitance"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Current (Snubber Excluded) \[kA\]</span> | 晶闸管支路电流（不含缓冲电路） | 文本 |  |
| <span id="comp_params_param_Itotal">Total Current \[kA\]</span> | 晶闸管总电流 | 文本 |  |

[Current (Snubber Excluded) \[kA\]]: #comp_params_param_I "Current (Snubber Excluded) \[kA\]"
[Total Current \[kA\]]: #comp_params_param_Itotal "Total Current \[kA\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了晶闸管的典型应用。

## <span id="comp_seealso">相关元件</span>

## <span id="comp_ref">参考文献</span>



