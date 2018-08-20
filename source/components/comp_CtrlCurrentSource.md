
---
title: 受控电流源
date: 2018/8/1 14:40:44
type: components
classname: _CtrlCurrentSource
symbol: CtrlCurrentSource
author: 
categories: 
- electric
- basic
- source
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真受控电流源。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Source Name</span> | 元件名称 | 文本 | 此处输入受控电流源名称 |
| <span id="comp_params_param_Grnd">Is Star Point Grounded?</span> | 电流源一端是否接地 | 选择 | 选择“Yes”或“No”以使电流源一端接地或不接地。 |

[Source Name]: #comp_params_param_Name "Source Name"
[Is Star Point Grounded?]: #comp_params_param_Grnd "Is Star Point Grounded?"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_I">Source Current \[kA\]</span> | 电流源的电流 | 文本 | 此处输入电流源电流信号的标签，以#号开头，如#Is1。 |

[Source Current \[kA\]]: #comp_params_param_I "Source Current \[kA\]"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了受控电流源的典型应用。

## <span id="comp_seealso">相关元件</span>
[<受控电压源>](<test link>)





