---
title: 二阶传递函数
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 900

classname: _newComplexPole
symbol: newComplexPole
---
## 基本描述
{% compsymbol newComplexPole %}

> **该元件用以建模二阶传递函数，可配置为以下9种二阶滤波器**
>   + 1-Low Pass
>  + 2-Mid Pass  
>  + 3-High Pass  
>  + 4-High Reject  
>  + 5-Mid Reject  
>  + 6-Low Reject  
>  + 7-High Reject  
>  + 8-Mid Reject  
>  + 9-Low Reject

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入二阶传递函数的名称（可缺省） |
| Gain |  | 增益 | 实数（变量） | 二阶传递函数的增益 |
| Damping Ratio |  | 阻尼比 | 实数（变量） | 二阶传递函数的阻尼比 |
| Characteristic Frequency | Hz | 特征频率 | 实数（常量） | 二阶传递函数的特征频率 |
| Function code |  | 函数类型 | 选择 | 选择二阶传递函数类型 |

### Limit
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Limit Output? |  | 是否限制输出 | 选择 | 选择是否限制二阶传递函数的输出 |
| Limit Output Speed? |  | 是否限制输出速度 | 选择 | 选择是否限制二阶传递函数的输出速度 |
| Output Up Limit |  | 输出上限 | 实数（变量） | 二阶传递函数的输出上限，仅当“是否限制输出”项为“Yes”时有效 |
| Output Down Limit |  | 输出下限 | 实数（变量） | 二阶传递函数的输出下限，仅当“是否限制输出”项为“Yes”时有效 |
| Output Speed Up Limit |  | 输出速度上限 | 实数（变量） | 二阶传递函数的输出速度上限，仅当“是否限制输出速度”项为“Yes”时有效 |
| Output Speed Down Limit |  | 输出速度下限 | 实数（变量） | 二阶传递函数的输出速度下限，仅当“是否限制输出速度”项为“Yes”时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 | 输入端口|                   
| Output | 1×1 | 输出端口|                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了二阶传递函数的典型应用。

## 相关元件

[零点](/components/comp_newZero.html)、[高阶传递函数](/components/comp_newNthOrderTransFunc.html)、[超前滞后校正](/components/comp_newLeadLag.html)
