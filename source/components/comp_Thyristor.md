
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

+ 该元件用以仿真电力晶闸管。
+ 通过Configuration/Enable Snubber Circuit?选择有无RC缓冲器与该器件并联。
+ 该元件采用Ron/Roff建模方法，二极管通过两极间的电压控制电阻阻值切换。
+ 仿真在所有开关动作中会自动调用插值算法，以便计算切换的确切时刻。
+ 仿真程序自动采用CDA处理，避免震荡产生。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入晶闸管名称 |
| <span id="comp_params_param_Snubber">Enable Snubber Circuit?</span> |  | 有无缓冲电路 | 选择 | 选择“Yes”或“No”以启用或禁用晶闸管并联的缓冲电路。 |
| <span id="comp_params_param_Ron">ON Resistance</span> | Ω | 导通电阻 | 实数 | 此处输入晶闸管导通时的等效电阻，单位为Ω。 |
| <span id="comp_params_param_Roff">OFF Resistance</span> | Ω | 关断电阻 | 实数 | 此处输入晶闸管关断时的等效电阻，单位为Ω。 |
| <span id="comp_params_param_Vfd">Forward Voltage Drop</span> | kV | 正向导通压降 | 实数 | 此处输入晶闸管导通时的等效压降，单位为kV。 |
| <span id="comp_params_param_Vfb">Forward Breakover Voltage</span> | kV | 正向击穿电压 | 实数 | 此处输入晶闸管正向击穿电压，当正向超过这个数值时，晶闸管将被正向击穿。单位为kV。 |
| <span id="comp_params_param_Vrw">Reverse Withstand Voltage</span> | kV | 反向耐受电压 | 实数 | 此处输入晶闸管反向耐受电压，当反向超过这个数值时，晶闸管将被反向击穿。单位为kV。 |
| <span id="comp_params_param_Tme">Minimum Extinction Time</span> | s | 导通延迟时间 | 实数 | 此处输入晶闸管导通延迟时间，即从接受到导通信号到电气导通的时间间隔，单位为s。 |
| <span id="comp_params_param_Rs">Snubber Resistance</span> | Ω | 缓冲电路电阻 | 实数 | 此处输入晶闸管并联RC缓冲电路的电阻，仅当“有无缓冲电路”选择"Yes"时有效，单位为Ω。 |
| <span id="comp_params_param_Cs">Snubber Capacitance</span> | μF | 缓冲电路电容 | 实数 | 此处输入晶闸管并联RC缓冲电路的电容，仅当“有无缓冲电路”选择"Yes"时有效，单位为μF。 |

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
| <span id="comp_params_param_I">Current (Snubber Excluded) \[kA\]</span> | 晶闸管支路电流（不含缓冲电路） | 文本 | 此处输入不含缓冲电路的支路电流信号的标签，以#号开头，如#Is1。 |
| <span id="comp_params_param_Itotal">Total Current \[kA\]</span> | 晶闸管总电流 | 文本 |  此处输入流过晶闸管及缓冲电路的总电流信号的标签，以#号开头，如#Is2。 |

[Current (Snubber Excluded) \[kA\]]: #comp_params_param_I "Current (Snubber Excluded) \[kA\]"
[Total Current \[kA\]]: #comp_params_param_Itotal "Total Current \[kA\]"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了晶闸管的典型应用。

## <span id="comp_seealso">相关元件</span>
[< IGBT>](<test link>)、[<二极管>](<test link>)
