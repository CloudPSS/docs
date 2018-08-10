---
title: 采样
date: 2018/8/1 14:40:44
type: components
classname: _Sample
symbol: Sample
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件在离散区间内对一个连续输入信号进行采样，并保持输出直到下一个采样点。
- 可通过Configuration/Sampling Type Control采样触发信号为内部(固定频率触发)或外部脉冲信号。
- 采用外部信号触发时，可通过Configuration/External Pulse Type选择脉冲类型为插值或非插值。
    - 对于非插值脉冲，输入量应为标量；
    - 对于插值脉冲，输入量应为二元数列。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 填写元件的名称 |
| <span id="comp_params_param_Control">Sampling Type Control</span> |  | 采样速率控制 | 选择 |选择采样的方式  |
| <span id="comp_params_param_Rate">Sampling Rate</span> | Hz | 采样速率 | 实数 | 当选择固定频率触发采样时，输入该频率 |
| <span id="comp_params_param_Type">External Pulse Type</span> |  | 脉冲种类 | 选择 | 选择外部脉冲信号触发采样时，选择脉冲信号的种类 |

[Name]: #comp_params_param_Name "Name"
[Sampling Type Control]: #comp_params_param_Control "Sampling Type Control"
[Sampling Rate]: #comp_params_param_Rate "Sampling Rate"
[External Pulse Type]: #comp_params_param_Type "External Pulse Type"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了采样的典型应用。

## <span id="comp_seealso">相关元件</span>
[<采样保持>](<test link>)




