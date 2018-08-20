---
title: 二阶传递函数
date: 2018/8/1 14:40:44
type: components
classname: _ComplexPole
symbol: ComplexPole
author: 
categories: 
- control
- linear-transfer
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件可通过Configuration/Function Code选择为以下9种二阶滤波器之一：
  + 1-Low Pass
  + 2-Mid Pass  
  + 3-High Pass  
  + 4-High Reject  
  + 5-Mid Reject  
  + 6-Low Reject  
  + 7-High Reject  
  + 8-Mid Reject  
  + 9-Low Reject
+ 低于特征频率的频率称为低频，特征频率附近的频率被称为中频，高于特征频率的频率称为高频。
+ 滤波器类型7、8、9与类型4、5、6类似，其相差180°的相位。
+ 可通过选择Limit/Limit Output及Limit Output Speed限制输出幅值或限制输出速度。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入二阶传递函数的名称 |
| <span id="comp_params_param_G">Gain</span> |  | 增益 | 实数 | 二阶传递函数的增益 |
| <span id="comp_params_param_z">Damping Ratio</span> |  | 阻尼比 | 实数 | 二阶传递函数的阻尼比 |
| <span id="comp_params_param_Fo">Characteristic Frequency</span> | Hz | 特征频率 | 实数 | 二阶传递函数的特征频率 |
| <span id="comp_params_param_Type">Function code</span> |  | 函数类型 | 选择 | 选择二阶传递函数类型 |

[Name]: #comp_params_param_Name "Name"
[Gain]: #comp_params_param_G "Gain"
[Damping Ratio]: #comp_params_param_z "Damping Ratio"
[Characteristic Frequency]: #comp_params_param_Fo "Characteristic Frequency"
[Function code]: #comp_params_param_Type "Function code"

### <span id="comp_params_group_Limit">Limit</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Limit">Limit Output?</span> |  | 是否限制输出 | 选择 | 选择是否限制二阶传递函数的输出 |
| <span id="comp_params_param_LimitS">Limit Output Speed?</span> |  | 是否限制输出速度 | 选择 | 选择是否限制二阶传递函数的输出速度 |
| <span id="comp_params_param_Up">Output Up Limit</span> |  | 输出上限 | 实数 | 二阶传递函数的输出上限 |
| <span id="comp_params_param_Do">Output Down Limit</span> |  | 输出下限 | 实数 | 二阶传递函数的输出下限 |
| <span id="comp_params_param_Ups">Output Speed Up Limit</span> |  | 输出速度上限 | 实数 | 二阶传递函数的输出速度上限 |
| <span id="comp_params_param_Dos">Output Speed Down Limit</span> |  | 输出速度下限 | 实数 | 二阶传递函数的输出速度下限 |

[Limit Output?]: #comp_params_param_Limit "Limit Output?"
[Limit Output Speed?]: #comp_params_param_LimitS "Limit Output Speed?"
[Output Up Limit]: #comp_params_param_Up "Output Up Limit"
[Output Down Limit]: #comp_params_param_Do "Output Down Limit"
[Output Speed Up Limit]: #comp_params_param_Ups "Output Speed Up Limit"
[Output Speed Down Limit]: #comp_params_param_Dos "Output Speed Down Limit"

## <span id="comp_example">测试模型</span>
[<test ComplexPole>](<test link>)显示了二阶传递函数的典型应用。

## <span id="comp_seealso">相关元件</span>
[<高阶传递函数>](<test link>)




