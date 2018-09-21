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

> **该元实现对输入信号限幅输出。**

> 配置Limit Type可选择限幅器的类型为静态限幅器或动态限幅器，动态限幅器的限幅上下限在仿真过程中可变。
> + 当输入信号大于限幅上限时，元件输出该上限值。
> + 当输入信号小于限幅下限时，元件输出该下限值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入限幅器的名称 |
| <span id="comp_params_param_Limtype">Limit Type</span> |  | 限幅种类 | 选择 | 选择限幅器为动态或静态 |
| <span id="comp_params_param_UL">Upper Limit</span> |  | 限幅器上限 | 实数 | 限幅器输出的最大值 |
| <span id="comp_params_param_LL">Lower Limit</span> |  | 限幅器下限 | 实数 | 限幅器输出的最小值 |
| <span id="comp_params_param_DUL">Upper Limit Signal</span> |  | 限幅器上限信号 | 文本 | 动态限幅器上限对应的信号名称 |
| <span id="comp_params_param_DLL">Lower Limit Signal</span> |  | 限幅器下限信号 | 文本 | 动态限幅器下限对应的信号名称 |

[Name]: #comp_params_param_Name "Name"
[Upper Limit]: #comp_params_param_UL "Upper Limit"
[Lower Limit]: #comp_params_param_LL "Lower Limit"
[Limit Type]: #comp_params_param_Limtype "Limit Type"
[Upper Limit Signal]: #comp_params_param_DUL "Upper Limit Signal"
[Lower Limit Signal]: #comp_params_param_DLL "Lower Limit Signal"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了限幅器的典型应用。






