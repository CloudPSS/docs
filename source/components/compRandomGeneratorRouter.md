---
title: 随机数生成器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 1100

classname: RandomGeneratorRouter
symbol: newRandom
---
## 基本描述
{% compsymbol newRandom %}

> **该元件用于产生随机数据，可选择4种随机数产生方式。**
> + Uniform Int Distribution:统一整数分布
> + Uniform Real Distribution:统一实数分布
> + Weibull Distribution:威布尔分布
> + Normal Distribution:正常分布
> + Binomial Distribution:二项式分布

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Generating Frequency | Hz | 随机数生成频率 | 实数（常量） | 随机数生成频率 |
| Random Function Type |  | 随机数函数种类 | 选择 | 选择随机数函数种类为“统一整数分布”，“统一实数分布”，“威布尔分布”，“正常分布”以及“二项式分布” |

### Function Parameters
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Lower Bound of Range |  |  | 实数（常量） | 随机数的下限，仅当函数种类为“为统一整数分布”、“统一实数分布”和“威布尔分布”时有效 |
| Upper Bound of Range |  |  | 实数（常量） | 随机数的上限，仅当函数种类为“为统一整数分布”、“统一实数分布”和“威布尔分布”时有效 |
| Mean / Expected value |  |  | 实数（常量） | 平均值/期望值，仅当仅当函数种类为“正常分布” 时有效|
| Standard Deviation |  |  | 实数（常量） | 标准差，仅当仅当函数种类为“正常分布” 时有效 |
| Times of Bernoulli Experiment |  | 伯努利试验次数 | 实数（常量） | 伯努利试验次数，仅当函数种类为“二项式分布”时有效 |
| Probability of Success |  |  | 实数（常量） | 成功概率，仅当函数种类为“二项式分布”时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Output | 1×1 |输出端口 |                   

## 使用说明



## 相关元件


