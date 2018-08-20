---
title: 限幅器
date: 2018/8/1 14:40:44
type: components
classname: _Limiter
symbol: Limiter
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以对输入信号进行限幅处理，当输入信号超过限幅值时，以限幅值输出。
+ 通过配置Configuration/Upper Limit及Lower Limit可确定限幅器的上下限。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入限幅器的名称 |
| <span id="comp_params_param_UL">Upper Limit</span> |  | 限幅器上限 | 实数 | 限幅器输出的最大值 |
| <span id="comp_params_param_LL">Lower Limit</span> |  | 限幅器下限 | 实数 | 限幅器输出的最小值 |

[Name]: #comp_params_param_Name "Name"
[Upper Limit]: #comp_params_param_UL "Upper Limit"
[Lower Limit]: #comp_params_param_LL "Lower Limit"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了限幅器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<动态限幅器>](<test link>)




