---
title: 超前滞后校正
date: 2018/8/1 14:40:44
type: components
classname: _LeadLag
symbol: LeadLag
author: 
categories: 
- control
- linear-transfer
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件实现对输入信号的超前滞后校正。其传递函数如下。

$$G\frac{ {1 + s{T_{lead} } } }{ {1 + s{T_{lag} } } }$$


## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入超前滞后校正元件名称 |
| <span id="comp_params_param_G">Gain</span> |  | 增益 | 实数 | 超前滞后校正环节的增益 |
| <span id="comp_params_param_T1">Lead Time Constant</span> | s | 超前时间常数 | 实数 | 超前滞后校正环节的超前时间常数 |
| <span id="comp_params_param_T2">Lag Time Constant</span> | s | 滞后时间常数 | 实数 | 超前滞后校正环节的滞后时间常数 |
| <span id="comp_params_param_Init">Initial Value</span> |  | 初始值 | 实数 | 超前滞后校正环节的初始值 |

[Name]: #comp_params_param_Name "Name"
[Gain]: #comp_params_param_G "Gain"
[Lead Time Constant]: #comp_params_param_T1 "Lead Time Constant"
[Lag Time Constant]: #comp_params_param_T2 "Lag Time Constant"
[Initial Value]: #comp_params_param_Init "Initial Value"

## <span id="comp_example">测试模型</span>
[<test LeadLag>](<test link>)显示了超前滞后校正的典型应用。

## <span id="comp_seealso">相关元件</span>
[< PI控制器>](<test link>)、[<一阶惯性关节>](<test link>)、[<微分极点>](<test link>)



