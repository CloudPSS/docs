---
title: Current Meter
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3000
order: 300

classname: _NewCurrentMeter
symbol: newCurrentMeter
---
## Basic Description
{% compsymbol newCurrentMeter %}

> **This component is used to measure the branch current, and the output unit is kA.**

## Parameter
### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Dimension | Dimension | Select | Select single-phase or three-phase current-meter |
| Name for Current Signal \[kA\] | Name for current signal | Text |  Enter the measurement signal label of the current signal, starting with #, such as #Ia |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Auto | Positive terminal of current meter |
| Pin - | Auto | Negative terminal of current meter |

## Using Instructions

{% pullquote tip %}
Multiple current meter components cannot be connected in parallel.
{% endpullquote %}


## See Also

[Voltage Meter](comp_NewVoltageMeter.html), [Branch Voltage Meter](comp_NewBranchVoltageMeter.html)
