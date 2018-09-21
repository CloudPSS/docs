---
title: 陷落发生器
date: 2018/9/17 11:19:58
type: components
classname: _newDropGen
symbol: newDropGen
author:
categories: 
- control
- signal-generator
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件用以产生陷落信号。**

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入陷落发生器的名称 |
| <span id="comp_params_param_T1">Drop Time</span> | s | 陷落时刻T1 | 实数 | 陷落发生的时间 |
| <span id="comp_params_param_T2">Recover Time</span> | s | 恢复时刻T2(>T1) | 实数 | 陷落恢复的时间 |
| <span id="comp_params_param_INIT">Initial Value</span> |  | 初始值 | 实数 | 陷落发生器初始输出值 |
| <span id="comp_params_param_Drop">Drop Value</span> |  | 陷落值 | 实数 | 发生陷落后的输出值 |

[Name]: #comp_params_param_Name "Name"
[Drop Time]: #comp_params_param_T1 "Drop Time"
[Recover Time]: #comp_params_param_T2 "Recover Time"
[Initial Value]: #comp_params_param_INIT "Initial Value"
[Drop Value]: #comp_params_param_Drop "Drop Value"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了陷落发生器的典型应用。

## <span id="comp_seealso">相关元件</span>


