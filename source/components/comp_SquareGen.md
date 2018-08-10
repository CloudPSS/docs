
---
title: 方波发生器
date: 2018/8/1 14:40:44
type: components
classname: _SquareGen
symbol: SquareGen
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件用以仿真指定频率的方波发生器。
+ 可通过调节占空比，来调整波形的形状。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_F">Frequency</span> | Hz | 信号频率 | 实数 | 输入方波的频率，单位为Hz |
| <span id="comp_params_param_Max">Max Output Level</span> |  | 信号最大值 | 实数 | 输入方波的最大值 |
| <span id="comp_params_param_Min">Min Output Level</span> |  | 信号最小值 | 实数 | 输入方波的最小值 |
| <span id="comp_params_param_Duty">Duty</span> |  | 占空比 | 实数 | 输入方波的占空比，即最大值的时间占整个开关周期的比例 |
| <span id="comp_params_param_Phase">Initial phase</span> | Deg | 初始相位 | 实数 | 输入方波的初始相位，单位为度°，值在-360至360之间 |

[Frequency]: #comp_params_param_F "Frequency"
[Max Output Level]: #comp_params_param_Max "Max Output Level"
[Min Output Level]: #comp_params_param_Min "Min Output Level"
[Duty]: #comp_params_param_Duty "Duty"
[Initial phase]: #comp_params_param_Phase "Initial phase"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了方波发生器的典型应用。

## <span id="comp_seealso">相关元件</span>
[<三角波发生器>](<test link>)、[<正弦波发生器>](<test link>)、[<脉冲发生器>](<test link>)





