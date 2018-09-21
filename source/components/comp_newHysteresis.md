---
title: 滞环比较器
date: 2018/9/17 11:19:58
type: components
classname: _newHysteresis
symbol: newHysteresis
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件对输入信号进行定范围的滞环比较，输出矩形波。**

> + 当输入信号大于Logic 1 Input Level设定的值时，输出高电平1，并维持输出直至状态改变。
> + 当输入信号小于Logic 0 Input Level设定的值时，输出低电平0，并维持输出直至状态改变。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入滞环比较器的名称 |
| <span id="comp_params_param_HL">Logic 1 Input Level</span> |  | 当输入大于设定值时，输出为1 | 实数 | 当输入大于设定值时，输出为1 |
| <span id="comp_params_param_LL">Logic 0 Input Level</span> |  | 当输入小于设定值时，输出为0 | 实数 | 当输入小于设定值时，输出为0 |
| <span id="comp_params_param_Inv">Invert Output?</span> |  | 输出是否取反？ | 选择 | 输出是否取反？ |

[Name]: #comp_params_param_Name "Name"
[Logic 1 Input Level]: #comp_params_param_HL "Logic 1 Input Level"
[Logic 0 Input Level]: #comp_params_param_LL "Logic 0 Input Level"
[Invert Output?]: #comp_params_param_Inv "Invert Output?"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了滞环比较器的典型应用。

## <span id="comp_seealso">相关元件</span>


