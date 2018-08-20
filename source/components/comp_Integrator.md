---
title: 积分器
date: 2018/8/1 14:40:44
type: components
classname: _Integrator
symbol: Integrator
author: 
categories: 
- control
- basic
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件实现对输入信号的积分运算。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入积分器名称 |
| <span id="comp_params_param_T">Time Constant</span> | s | 时间常数 | 实数 | 积分器的时间常数 |
| <span id="comp_params_param_Yo">Initial Output Value</span> |  | 初始输出值 | 实数 | 积分器的初始输出值 |

[Name]: #comp_params_param_Name "Name"
[Time Constant]: #comp_params_param_T "Time Constant"
[Initial Output Value]: #comp_params_param_Yo "Initial Output Value"

## <span id="comp_example">测试模型</span>
[<test Integrator>](<test link>)显示了积分器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<微分器>](<test link>)



