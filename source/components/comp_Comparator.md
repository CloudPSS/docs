---
title: 比较器
date: 2018/8/1 14:40:44
type: components
classname: _Comparator
symbol: Comparator
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件用以比较两个输入信号大小，并输出矩形波。
- 输入引脚为A，B。通过选择Configuratio/Expression确定比较器的判据，如：A>=B，A<B。判据为真，则上输出引脚输出设定真值，下输出引脚输出设定假值。判据为假，则上输出引脚输出设定假值，下输出引脚输出设定真值。
- 典型应用为：输入为正弦调制波、三角载波，输出产生互补开关信号驱动开关元件。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入比较器名称 |
| <span id="comp_params_param_Expression">Expression</span> |  | 表达式 | 选择 | 选择比较器的比较逻辑 |
| <span id="comp_params_param_True">If True Output Value</span> |  | 为真输出值 | 实数 | 当比较逻辑为真时的输出值 |
| <span id="comp_params_param_False">If False Output Value</span> |  | 为假输出值 | 实数 | 当比较逻辑为假时的输出值 |

[Name]: #comp_params_param_Name "Name"
[Expression]: #comp_params_param_Expression "Expression"
[If True Output Value]: #comp_params_param_True "If True Output Value"
[If False Output Value]: #comp_params_param_False "If False Output Value"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了比较器的典型应用。




