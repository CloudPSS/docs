---
title: 分段线性函数
date: 2018/9/17 11:19:58
type: components
classname: _PiecewiseLinear
symbol: PiecewiseLinear
author: 
categories: 
- control
- non-linear
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

> **该元件根据设定参数生成分段线性函数，输入信号根据该函数，输出对应在线段上的值。**

> 需要设定的参数为：两个固定的坐标点($x_1$,$y_1$)、($x_2$,$y_2$)，以及坐标点左右两侧的斜率$K_l$、$K_r$。函数式为：
> $$\begin{array}{l}
y(t) = {K_l}u(t) + {y_1} - {K_l}{x_1},u(t) \le {x_1}\\
y(t) = \frac{ { {y_2} - {y_1} } }{ { {x_2} - {x_1} } }u(t) + \frac{ { {y_1}{x_2} - {y_2}{x_1} } }{ { {x_2} - {x_1} } },{x_1} < u(t) \le {x_2}\\
y(t) = {K_r}u(t) + {y_2} - {K_r}{x_2},u(t) > {x_2}
\end{array}$$

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 |  |
| <span id="comp_params_param_x1">First Input Threshold</span> |  | (x1,y1)点横坐标 | 实数 |  |
| <span id="comp_params_param_y1">First Threshold Output</span> |  | (x1,y1)点纵坐标 | 实数 |  |
| <span id="comp_params_param_x2">Second Input Threshold</span> |  | (x2,y2)点横坐标 | 实数 |  |
| <span id="comp_params_param_y2">Second Threshold Output</span> |  | (x2,y2)点纵坐标 | 实数 |  |
| <span id="comp_params_param_kl">Gain Below First Threshold</span> |  | (x1,y1)点左侧斜率 | 实数 |  |
| <span id="comp_params_param_kr">Gain Above Second Threshold</span> |  | (x2,y2)点右侧斜率 | 实数 |  |

[Name]: #comp_params_param_Name "Name"
[First Input Threshold]: #comp_params_param_x1 "First Input Threshold"
[First Threshold Output]: #comp_params_param_y1 "First Threshold Output"
[Second Input Threshold]: #comp_params_param_x2 "Second Input Threshold"
[Second Threshold Output]: #comp_params_param_y2 "Second Threshold Output"
[Gain Below First Threshold]: #comp_params_param_kl "Gain Below First Threshold"
[Gain Above Second Threshold]: #comp_params_param_kr "Gain Above Second Threshold"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了分段线性函数的典型应用。

## <span id="comp_seealso">相关元件</span>


