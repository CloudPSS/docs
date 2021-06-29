---
title: Random Number Generator
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
## Basic Description


> **This component is used to generate a random output signal by following methods:**
> + Uniform Int Distribution
> + Uniform Real Distribution
> + Weibull Distribution
> + Normal Distribution
> + Binomial Distribution

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Generating Frequency | Hz | Generating frequency | Real number (Const) |  Frequency of generating random number |
| Random Function Type |  | Random function type | Select | Select function type of random number as "Uniform Int Distribution",  "Uniform Real Distribution", "Weibull Distribution", "Normal Distribution" and "Binomial Distribution" |

### Function Parameters
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Lower Bound of Range |  |  | Real number (Const) | Lower limit of random number, only valid when function type is "Uniform Int Distribution", "Uniform Real Distribution" or "Weibull Distribution" |
| Upper Bound of Range |  |  | Real number (Const) | Upper limit of random number, only valid when function type is "Uniform Int Distribution", "Uniform Real Distribution" or "Weibull Distribution" |
| Mean/Expected value |  |  | Real number (Const) | Mean/expected value, only valid when function type is "Normal Distribution" |
| Standard Deviation |  |  | Real number (Const) | Standard deviation, only valid when function type is "Normal Distribution" |
| Times of Bernoulli Experiment |  |   | Real number (Const) | Times of Bernoulli experiment, only valid when function type is "Binomial Distribution" |
| Probability of Success |  |  | Real number (Const) | Probability of success, only valid when function type is "Binomial Distribution" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also


