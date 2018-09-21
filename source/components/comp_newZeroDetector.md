---
title: 过零检测器
date: 2018/9/17 11:19:58
type: components
classname: _newZeroDetector
symbol: newZeroDetector
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件实现对输入信号过零检测。**

> + 当检测到输入信号由负变化到非负时，输出幅值为1的单位脉冲。
> + 当检测到输入信号由正变化到非正时，输出幅值为-1的单位脉冲。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> | 元件名称 | 文本 | 此处输入过零检测器的名称 |

[Name]: #comp_params_param_Name "Name"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了过零检测器的典型应用。

## <span id="comp_seealso">相关元件</span>


