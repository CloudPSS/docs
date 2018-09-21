---
title: 选择器
date: 2018/8/1 14:40:44
type: components
classname: _Selector
symbol: Selector
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件根据控制端信号，选择输出信号为某一输入信号(非控制信号)。**

> 配置Expression、Threshold确定选择器判据，如：Ctrl>Threshold，Ctrl=Threshold，Ctrl < Threshold。
> + 当输入控制信号满足判据条件时，元件输出信号选择为信号A。
> + 当输入控制信号不满足判据条件时，元件输出信号选择为信号B。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入选择器名称 |
| <span id="comp_params_param_Expression">Expression</span> |  | 判据 | 选择 | 选择器的选择判据 |
| <span id="comp_params_param_Threshold">Threshold</span> |  | 阈值 | 实数 | 判据的阈值 |

[Name]: #comp_params_param_Name "Name"
[Expression]: #comp_params_param_Expression "Expression"
[Threshold]: #comp_params_param_Threshold "Threshold"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了选择器的典型应用。




