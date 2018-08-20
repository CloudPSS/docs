---
title: 逻辑门
date: 2018/8/1 14:40:44
type: components
classname: _LogicGate
symbol: LogicGate
author: 
categories: 
- control
- discrete
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件提供基本逻辑运算，可通过Configuration/Gate Type将其配置为：
    - 与门：当且仅当所有输入信号为1，输出信号为1。
    - 或门：若任一输入信号为1，则输出信号为1。
    - 异或门：如果两个输入信号不相同，则输出信号为1；如果两个输入信号相同，输出信号为0。
    - 非门：如果输入信号为1，则输出信号为0；如果输入信号为0，则输出信号为1。


## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> | 元件名称 | 文本 |填写元件的名称  |
| <span id="comp_params_param_Type">Gate Type</span> |  | 选择 |选择逻辑门的种类  |

[Name]: #comp_params_param_Name "Name"
[Gate Type]: #comp_params_param_Type "Gate Type"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了逻辑门的典型应用。




