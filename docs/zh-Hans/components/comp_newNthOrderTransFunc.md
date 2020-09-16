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

{% compsymbol newNthOrderTransFunc %}

> **该元件用以实现高阶传递函数（1-10 阶）。**

## 参数列表

### Configuration

| 参数名        | 单位 | 备注       |     类型     | 描述                                 |
| :------------ | :--- | :--------- | :----------: | :----------------------------------- |
| Name          |      | 元件名称   |     文本     | 此处输入高阶传递函数的名称（可缺省） |
| Order of N(s) |      | N(s)的次数 |     选择     | 分子项的阶数                         |
| Order of D(s) |      | D(s)的次数 |     选择     | 分母项的阶数                         |
| Gain          |      | 增益       | 实数（常量） | 高阶传递函数的增益                   |

### Numerator Coefficients

| 参数名               | 单位 | 备注             |     类型     | 描述               |
| :------------------- | :--- | :--------------- | :----------: | :----------------- |
| Constant Coefficient |      | 分子常系数       | 实数（常量） | 分子常数项的值     |
| Coefficient of s     |      | 分子 1 次项系数  | 实数（常量） | 分子 1 次项的系数  |
| Coefficient of s^2   |      | 分子 2 次项系数  | 实数（常量） | 分子 2 次项的系数  |
| Coefficient of s^3   |      | 分子 3 次项系数  | 实数（常量） | 分子 3 次项的系数  |
| Coefficient of s^4   |      | 分子 4 次项系数  | 实数（常量） | 分子 4 次项的系数  |
| Coefficient of s^5   |      | 分子 5 次项系数  | 实数（常量） | 分子 5 次项的系数  |
| Coefficient of s^6   |      | 分子 6 次项系数  | 实数（常量） | 分子 6 次项的系数  |
| Coefficient of s^7   |      | 分子 7 次项系数  | 实数（常量） | 分子 7 次项的系数  |
| Coefficient of s^8   |      | 分子 8 次项系数  | 实数（常量） | 分子 8 次项的系数  |
| Coefficient of s^9   |      | 分子 9 次项系数  | 实数（常量） | 分子 9 次项的系数  |
| Coefficient of s^10  |      | 分子 10 次项系数 | 实数（常量） | 分子 10 次项的系数 |

### Denominator Coefficients

| 参数名               | 单位 | 备注             |     类型     | 描述               |
| :------------------- | :--- | :--------------- | :----------: | :----------------- |
| Constant Coefficient |      | 分母常系数       | 实数（常量） | 分母常数项的值     |
| Coefficient of s     |      | 分母 1 次项系数  | 实数（常量） | 分母 1 次项的系数  |
| Coefficient of s^2   |      | 分母 2 次项系数  | 实数（常量） | 分母 2 次项的系数  |
| Coefficient of s^3   |      | 分母 3 次项系数  | 实数（常量） | 分母 3 次项的系数  |
| Coefficient of s^4   |      | 分母 4 次项系数  | 实数（常量） | 分母 4 次项的系数  |
| Coefficient of s^5   |      | 分母 5 次项系数  | 实数（常量） | 分母 5 次项的系数  |
| Coefficient of s^6   |      | 分母 6 次项系数  | 实数（常量） | 分母 6 次项的系数  |
| Coefficient of s^7   |      | 分母 7 次项系数  | 实数（常量） | 分母 7 次项的系数  |
| Coefficient of s^8   |      | 分母 8 次项系数  | 实数（常量） | 分母 8 次项的系数  |
| Coefficient of s^9   |      | 分母 9 次项系数  | 实数（常量） | 分母 9 次项的系数  |
| Coefficient of s^10  |      | 分母 10 次项系数 | 实数（常量） | 分母 10 次项的系数 |

## 端口列表

| 端口名 | 数据维数 | 描述     |
| :----- | :------: | :------- |
| Input  |   1×1    | 输入端口 |
| Output |   1×1    | 输出端口 |

## 使用说明

## 相关元件

[二阶传递函数](comp_newComplexPole.html)、[超前滞后校正](comp_newLeadLag.html)、[一阶惯性环节](comp_newRealPole.html)
