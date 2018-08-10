
---
title: 受控电压源
date: 2018/8/1 14:40:44
type: components
classname: _CtrlVoltageSource
symbol: CtrlVoltageSource
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真含有内阻的受控电压源。
+ 控制信号为设定的电压值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Source Name</span> |  | 电压源名称 | 文本 | 此处输入受控电压源名称 |
| <span id="comp_params_param_Grnd">Is Star Point Grounded?</span> |  | 电压源一端是否接地（中性点是否接地） | 选择 | 选择“Yes”或“No”以使电压源一端接地或不接地。 |
| <span id="comp_params_param_R">Resistance</span> | Ω | 电压源内阻值 | 实数 | 电压源额定内阻，单位为Ω。 |

[Source Name]: #comp_params_param_Name "Source Name"
[Is Star Point Grounded?]: #comp_params_param_Grnd "Is Star Point Grounded?"
[Resistance]: #comp_params_param_R "Resistance"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Source Current \[kA\]</span> | 电压源的电流 | 文本 | 此处输入电压源电流信号的标签，以#号开头，如#Is1。 |

[Source Current \[kA\]]: #comp_params_param_I "Source Current \[kA\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了受控电压源的典型应用。

## <span id="comp_seealso">相关元件</span>
[<受控电流源>](<test link>)





