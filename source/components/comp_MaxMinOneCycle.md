---
title: 周期最大/小值
date: 2018/8/1 14:40:44
type: components
classname: _MaxMinOneCycle
symbol: MaxMinOneCycle
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件通过定义一个时间窗口，滑动求取输入信号在窗口内的最大/最小值。
- 可通过Configuration/Fundamental Frequency定义时间窗口对应的频率。
- 可通过Configuration/Function选择求取最大或最小值。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入周期最大/最小值的名称 |
| <span id="comp_params_param_F">Fundamental Frequency</span> | Hz | 频率 | 实数 | 周期时间窗口对应的频率 |
| <span id="comp_params_param_Func">Function</span> |  | 选择最大或最小功能 | 选择 | 选择功能为为周期最大值或周期最小值 |

[Name]: #comp_params_param_Name "Name"
[Fundamental Frequency]: #comp_params_param_F "Fundamental Frequency"
[Function]: #comp_params_param_Func "Function"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了周期最大/小值的典型应用。

## <span id="comp_seealso">相关元件</span>
[<最大/最小值>](<test link>)



