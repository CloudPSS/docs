---
title: 采样保持
date: 2018/8/1 14:40:44
type: components
classname: _SampleHold
symbol: SampleHold
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件根据hold端特性对输入信号进行保持输出。**
> + 当hold端由0变为1时，保持输出该时刻对应的输入信号数值直到hold端为0。
> + 当hold端为0时，输出等于输入。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> | 元件名称 | 文本 | 填写元件的名称 |

[Name]: #comp_params_param_Name "Name"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了采样保持的典型应用。

## <span id="comp_seealso">相关元件</span>
[<采样>](<test link>)



