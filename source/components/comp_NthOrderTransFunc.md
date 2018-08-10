---
title: 高阶传递函数
date: 2018/8/1 14:40:44
type: components
classname: _NthOrderTransFunc
symbol: NthOrderTransFunc
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

+ 该元件可实现高阶传递函数（1-10阶）。
+ 当选择传递函数分子及分母的阶数时，参数栏会相应显示所需填写的各项系数。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 此处输入高阶传递函数的名称 |
| <span id="comp_params_param_m">Order of N(s)</span> |  | N(s)的次数 | 选择 | 分子项的阶数 |
| <span id="comp_params_param_n">Order of D(s)</span> |  | D(s)的次数 | 选择 | 分母项的阶数 |
| <span id="comp_params_param_G">Gain</span> |  | 增益 | 实数 | 高阶传递函数的增益 |

[Name]: #comp_params_param_Name "Name"
[Order of N(s)]: #comp_params_param_m "Order of N(s)"
[Order of D(s)]: #comp_params_param_n "Order of D(s)"
[Gain]: #comp_params_param_G "Gain"

### <span id="comp_params_group_NumeratorCoefficients">Numerator Coefficients</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_N0">Constant Coefficient</span> |  | 分子常系数 | 实数 | 分子常数项的值 |
| <span id="comp_params_param_N1">Coefficient of s</span> |  | 分子1次项系数 | 实数 | 分子1次项的系数 |
| <span id="comp_params_param_N2">Coefficient of s^2</span> |  | 分子2次项系数 | 实数 | 分子2次项的系数 |
| <span id="comp_params_param_N3">Coefficient of s^3</span> |  | 分子3次项系数 | 实数 | 分子3次项的系数 |
| <span id="comp_params_param_N4">Coefficient of s^4</span> |  | 分子4次项系数 | 实数 | 分子4次项的系数 |
| <span id="comp_params_param_N5">Coefficient of s^5</span> |  | 分子5次项系数 | 实数 | 分子5次项的系数 |
| <span id="comp_params_param_N6">Coefficient of s^6</span> |  | 分子6次项系数 | 实数 | 分子6次项的系数 |
| <span id="comp_params_param_N7">Coefficient of s^7</span> |  | 分子7次项系数 | 实数 | 分子7次项的系数 |
| <span id="comp_params_param_N8">Coefficient of s^8</span> |  | 分子8次项系数 | 实数 | 分子8次项的系数 |
| <span id="comp_params_param_N9">Coefficient of s^9</span> |  | 分子9次项系数 | 实数 | 分子9次项的系数 |
| <span id="comp_params_param_N10">Coefficient of s^10</span> |  | 分子10次项系数 | 实数 | 分子10次项的系数 |

[Constant Coefficient]: #comp_params_param_N0 "Constant Coefficient"
[Coefficient of s]: #comp_params_param_N1 "Coefficient of s"
[Coefficient of s^2]: #comp_params_param_N2 "Coefficient of s^2"
[Coefficient of s^3]: #comp_params_param_N3 "Coefficient of s^3"
[Coefficient of s^4]: #comp_params_param_N4 "Coefficient of s^4"
[Coefficient of s^5]: #comp_params_param_N5 "Coefficient of s^5"
[Coefficient of s^6]: #comp_params_param_N6 "Coefficient of s^6"
[Coefficient of s^7]: #comp_params_param_N7 "Coefficient of s^7"
[Coefficient of s^8]: #comp_params_param_N8 "Coefficient of s^8"
[Coefficient of s^9]: #comp_params_param_N9 "Coefficient of s^9"
[Coefficient of s^10]: #comp_params_param_N10 "Coefficient of s^10"

### <span id="comp_params_group_DenominatorCoefficients">Denominator Coefficients</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_D0">Constant Coefficient</span> |  | 分母常系数 | 实数 | 分母常数项的值 |
| <span id="comp_params_param_D1">Coefficient of s</span> |  | 分母1次项系数 | 实数 | 分母1次项的系数 |
| <span id="comp_params_param_D2">Coefficient of s^2</span> |  | 分母2次项系数 | 实数 | 分母2次项的系数 |
| <span id="comp_params_param_D3">Coefficient of s^3</span> |  | 分母3次项系数 | 实数 | 分母3次项的系数 |
| <span id="comp_params_param_D4">Coefficient of s^4</span> |  | 分母4次项系数 | 实数 | 分母4次项的系数 |
| <span id="comp_params_param_D5">Coefficient of s^5</span> |  | 分母5次项系数 | 实数 | 分母5次项的系数 |
| <span id="comp_params_param_D6">Coefficient of s^6</span> |  | 分母6次项系数 | 实数 | 分母6次项的系数 |
| <span id="comp_params_param_D7">Coefficient of s^7</span> |  | 分母7次项系数 | 实数 | 分母7次项的系数 |
| <span id="comp_params_param_D8">Coefficient of s^8</span> |  | 分母8次项系数 | 实数 | 分母8次项的系数 |
| <span id="comp_params_param_D9">Coefficient of s^9</span> |  | 分母9次项系数 | 实数 | 分母9次项的系数 |
| <span id="comp_params_param_D10">Coefficient of s^10</span> |  | 分母10次项系数 | 实数 | 分母10次项的系数 |

[Constant Coefficient-2]: #comp_params_param_D0 "Constant Coefficient"
[Coefficient of s-2]: #comp_params_param_D1 "Coefficient of s"
[Coefficient of s^2-2]: #comp_params_param_D2 "Coefficient of s^2"
[Coefficient of s^3-2]: #comp_params_param_D3 "Coefficient of s^3"
[Coefficient of s^4-2]: #comp_params_param_D4 "Coefficient of s^4"
[Coefficient of s^5-2]: #comp_params_param_D5 "Coefficient of s^5"
[Coefficient of s^6-2]: #comp_params_param_D6 "Coefficient of s^6"
[Coefficient of s^7-2]: #comp_params_param_D7 "Coefficient of s^7"
[Coefficient of s^8-2]: #comp_params_param_D8 "Coefficient of s^8"
[Coefficient of s^9-2]: #comp_params_param_D9 "Coefficient of s^9"
[Coefficient of s^10-2]: #comp_params_param_D10 "Coefficient of s^10"

## <span id="comp_example">测试模型</span>
[<test NthOrderTransFunc>](<test link>)显示了高阶传递函数的典型应用。

## <span id="comp_seealso">相关元件</span>
[<二阶传递函数>](<test link>)



