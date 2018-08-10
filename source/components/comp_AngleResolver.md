---
title: 角度转换器
date: 2018/8/1 14:40:44
type: components
classname: _AngleResolver
symbol: AngleResolver
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件实现输入角度信号从角度制转化到弧度制，或者从弧度制转换到角度制。可通过Configuration/Input Is in，Output Is in进行选择。
+ 配置Output Range可选择元件的输出范围为0到2π(360°)或-π(-180°)到π(180°)。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> | 元件名称 | 文本 | 此处输入角度转换器名称 |
| <span id="comp_params_param_IPUnit">Input Is in</span> | 输入类型 | 选择 | 选择输入为弧度制还是角度制 |
| <span id="comp_params_param_OPUnit">Output Is in</span> | 输出类型 | 选择 | 选择输出为弧度制还是角度制 |
| <span id="comp_params_param_Range">Output Range</span> | 输出范围 | 选择 | 选择输出范围为0到2π或-π到π |

[Name]: #comp_params_param_Name "Name"
[Input is in]: #comp_params_param_IPUnit "Input is in"
[Output is in]: #comp_params_param_OPUnit "Output is in"
[Output Range]: #comp_params_param_Range "Output Range"

## <span id="comp_example">测试模型</span>
[<test AngleResolver>](<test link>)显示了角度转换器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<三角函数>](<test link>)




