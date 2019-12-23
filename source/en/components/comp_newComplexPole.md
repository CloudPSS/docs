---
title: Second Order Complex Pole
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
## Basic Description
{% compsymbol newComplexPole %}

> **This component simulates the second-order transfer function and can be configured as the following nine second-order filters (the current version only supports the first two).**
>  + 1-Low Pass
>  + 2-Mid Pass  
>  + ~~3-High Pass~~  
>  + ~~4-High Reject~~  
>  + ~~5-Mid Reject~~  
>  + ~~6-Low Reject~~  
>  + ~~7-High Reject~~  
>  + ~~8-Mid Reject~~  
>  + ~~9-Low Reject~~

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Gain |  | Gain | Real number（Variable） | Gain of second order complex pole |
| Damping Ratio |  | Damping ratio | Real number（Variable） | Damping ratio of second order complex pole|
| Characteristic Frequency | Hz | Characteristic frequency | Real number（Const） | Characteristic frequency of second order complex pole |
| Function code |  | Function type | Select | Select function type |

### Limit
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Limit Output? |  | Limit output? | Select | Select whether limit the output of transfer function or not. |
| Limit Output Speed? |  | Limit output speed? | Select | Select whether limit the output speed of transfer function or not |
| Output Up Limit |  | Output up limit | Real number（Variable） | Output maximum limit of transfer function，only valid when "Limit Output" is "Yes" |
| Output Down Limit |  | Output down limit | Real number（Variable） | Output minimum limit of transfer function，only valid when "Limit Output" is "Yes" |
| Output Speed Up Limit |  | Output speed up limit | Real number（Variable） | Output speed maximum limit of transfer function，only valid when "Limit Output Speed" is "Yes" |
| Output Speed Down Limit |  | Output speed down limit | Real number（Variable） | Output speed minimum limit of transfer function，only valid when "Limit Output Speed" is "Yes" |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin |

## Using Instructions



## See Also

[Zero-point](comp_newZero.html)、[高阶传递函数](comp_newNthOrderTransFunc.html)、[超前滞后校正](comp_newLeadLag.html)
