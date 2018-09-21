---
title: 采样
date: 2018/8/1 14:40:44
type: components
classname: _Sample
symbol: Sample
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件在离散区间内对连续输入信号进行采样，并保持输出直到下一个采样点。**

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 填写元件的名称 |
| <span id="comp_params_param_Control">Sampling Type Control</span> |  | 采样速率控制 | 选择 |选择采样的方式  |
| <span id="comp_params_param_Rate">Sampling Rate</span> | Hz | 采样速率 | 实数 | 当选择固定频率触发采样时，输入该频率 |

[Name]: #comp_params_param_Name "Name"
[Sampling Type Control]: #comp_params_param_Control "Sampling Type Control"
[Sampling Rate]: #comp_params_param_Rate "Sampling Rate"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了采样的典型应用。

## <span id="comp_seealso">相关元件</span>
[<采样保持>](<test link>)




