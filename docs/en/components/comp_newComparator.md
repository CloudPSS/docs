---
title: Comparator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3005
order: 100

classname: _newComparator
symbol: newComparator
---
## Basic Description
{% compsymbol newComparator %}

> **This component compares two input signals and outputs a rectangular wave.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Expression |  | Expression | Select | Select the comparison logic |
| If True Output Value |  | The output value if expression is true | Real number（Const） | The output value if expression is true |
| If False Output Value |  | The output value if expression is false | Real number（Const） | The output value if expression is false |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| A | 1×1 | Input pin A |
| B | 1×1 | Input pin B |
| Output 1 | 1×1 | Output pin 1 |
| Output 2 | 1×1 | Output pin 2 |

## Using Instructions

{% pullquote info %}
The expression an be configured as A >= B or A < B.
+  If the expression is true, the output pin1 outputs the true value, and the output pin2 outputs the false value.
+ If the expression is false, the output pin1 outputs the false value, and the output pin2 outputs the true value.
{% endpullquote %}

## See Also

[Hysteresis Comparator](comp_newHysteresis.md)

