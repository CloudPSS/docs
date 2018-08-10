---
title: 采样保持
date: 2018/8/1 14:40:44
type: components
classname: _SampleHold
symbol: SampleHold
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件功能为：根据hold端特性对输入信号进行保持输出。
- 可通过Configuration/Number of AND Gate Hold Inputs配置hold端口为单输入或双输入。
    - 单输入：当hold从0变化为1时，保持输出该时刻对应的输入信号数值。当hold=0时，输出等于输入。
    - 双输入：仅当两个hold输入相与为1时，保持当前输出。否则输出等于输入。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> | 元件名称 | 文本 | 填写元件的名称 |
| <span id="comp_params_param_Inputs">Number of AND Gate Hold Inputs</span> | 控制信号数量 | 选择 | 选择hold端口输入信号的数量，最多两个 |

[Name]: #comp_params_param_Name "Name"
[Number of AND Gate Hold Inputs]: #comp_params_param_Inputs "Number of AND Gate Hold Inputs"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了采样保持的典型应用。

## <span id="comp_seealso">相关元件</span>
[<采样>](<test link>)



