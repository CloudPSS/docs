---
title: 分段线性函数
date: 2018/8/1 14:40:44
type: components
classname: _PiecewiseLinear
symbol: PiecewiseLinear
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件通过填入简单参数产生三段线性函数。
- 配置时需在Configuration/First/Second Threshold及First/Second Threshold Output写入两个固定折线拐点的坐标，以及在Gain Leads First Threshold、Gain Lags Second Threshold写入起始斜率和结束斜率。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入分段线性函数的名称 |
| <span id="comp_params_param_X1">First Input Threshold</span> |  | x1 | 实数 | 第一个拐点的x轴坐标 |
| <span id="comp_params_param_y1">First Threshold Output</span> |  | y1 | 实数 | 第一个拐点的y轴坐标 |
| <span id="comp_params_param_x2">Second Input Threshold</span> |  | x2 | 实数 | 第二个拐点的x轴坐标 |
| <span id="comp_params_param_y2">Second Threshold Output</span> |  | y2 | 实数 | 第二个拐点的y轴坐标 |
| <span id="comp_params_param_kl">Gain Leads First Threshold</span> |  | Kl | 实数 | 起始斜率 |
| <span id="comp_params_param_kr">Gain Lags Second Threshold</span> |  | Kr | 实数 | 结束斜率 |

[Name]: #comp_params_param_Name "Name"
[First Input Threshold]: #comp_params_param_X1 "First Input Threshold"
[First Threshold Output]: #comp_params_param_y1 "First Threshold Output"
[Second Input Threshold]: #comp_params_param_x2 "Second Input Threshold"
[Second Threshold Output]: #comp_params_param_y2 "Second Threshold Output"
[Gain Leads First Threshold]: #comp_params_param_kl "Gain Leads First Threshold"
[Gain Lags Second Threshold]: #comp_params_param_kr "Gain Lags Second Threshold"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了分段线性函数的典型应用。




