---
title: 高阶传递函数
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 1000

classname: _newNthOrderTransFunc
symbol: newNthOrderTransFunc
---
## 基本描述


> **该元件用以实现高阶传递函数（1-10阶）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入高阶传递函数的名称（可缺省） |
| Order of N(s) |  | N(s)的次数 | 选择 | 分子项的阶数 |
| Order of D(s) |  | D(s)的次数 | 选择 | 分母项的阶数 |
| Gain |  | 增益 | 实数（常量） | 高阶传递函数的增益 |

### Numerator Coefficients
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Constant Coefficient |  | 分子常系数 | 实数（常量） | 分子常数项的值 |
| Coefficient of s |  | 分子1次项系数 | 实数（常量） | 分子1次项的系数 |
| Coefficient of s^2 |  | 分子2次项系数 | 实数（常量） | 分子2次项的系数 |
| Coefficient of s^3 |  | 分子3次项系数 | 实数（常量） | 分子3次项的系数 |
| Coefficient of s^4 |  | 分子4次项系数 | 实数（常量） | 分子4次项的系数 |
| Coefficient of s^5 |  | 分子5次项系数 | 实数（常量） | 分子5次项的系数 |
| Coefficient of s^6 |  | 分子6次项系数 | 实数（常量） | 分子6次项的系数 |
| Coefficient of s^7 |  | 分子7次项系数 | 实数（常量） | 分子7次项的系数 |
| Coefficient of s^8 |  | 分子8次项系数 | 实数（常量） | 分子8次项的系数 |
| Coefficient of s^9 |  | 分子9次项系数 | 实数（常量） | 分子9次项的系数 |
| Coefficient of s^10 |  | 分子10次项系数 | 实数（常量） | 分子10次项的系数 |

### Denominator Coefficients
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Constant Coefficient |  | 分母常系数 | 实数（常量） | 分母常数项的值 |
| Coefficient of s |  | 分母1次项系数 | 实数（常量） | 分母1次项的系数 |
| Coefficient of s^2 |  | 分母2次项系数 | 实数（常量） | 分母2次项的系数 |
| Coefficient of s^3 |  | 分母3次项系数 | 实数（常量） | 分母3次项的系数 |
| Coefficient of s^4 |  | 分母4次项系数 | 实数（常量） | 分母4次项的系数 |
| Coefficient of s^5 |  | 分母5次项系数 | 实数（常量） | 分母5次项的系数 |
| Coefficient of s^6 |  | 分母6次项系数 | 实数（常量） | 分母6次项的系数 |
| Coefficient of s^7 |  | 分母7次项系数 | 实数（常量） | 分母7次项的系数 |
| Coefficient of s^8 |  | 分母8次项系数 | 实数（常量） | 分母8次项的系数 |
| Coefficient of s^9 |  | 分母9次项系数 | 实数（常量） | 分母9次项的系数 |
| Coefficient of s^10 |  | 分母10次项系数 | 实数（常量） | 分母10次项的系数 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[二阶传递函数](comp_newComplexPole.md)、[超前滞后校正](comp_newLeadLag.md)、[一阶惯性环节](comp_newRealPole.md)
