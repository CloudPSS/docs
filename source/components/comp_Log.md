---
title: 对数函数
date: 2018/8/1 14:40:44
type: components
classname: _Log
symbol: Log
author: 
categories: 
- control
- math
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件实现对数运算，可配置底数为10、自然常数e或自定义常数a。函数式为：**
> $y(t) = \log u(t)$或$y(t) = \ln u(t)$或$y(t) = {\log _a}u(t)$，$u(t)>0$。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入对数函数名称 |
| <span id="comp_params_param_Type">Logarithm Type</span> |  | 底数选择 | 选择 | 选择该对数函数的底数为10、自然常数e或自定义常数a |
| <span id="comp_params_param_a">Value of Base a</span> |  | 底数a的值 | 实数 | 当选择底数为a时，此处输入底数a的值 |

[Name]: #comp_params_param_Name "Name"
[Logarithm Type]: #comp_params_param_Type "Logarithm Type"
[Value of Base a]: #comp_params_param_a "Value of Base a"

## <span id="comp_example">测试模型</span>
[<test Log>](<test link>)显示了对数函数的典型应用。

## <span id="comp_seealso">相关元件</span>
[<指数函数>](<test link>)
    



