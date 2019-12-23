---
title: Angle Resolver
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 300

classname: _newAngleResolver
symbol: newAngleResolver
---
## Basic Description
{% compsymbol newAngleResolver %}

> **This component converts an input angle signal from degrees to radians, or radians to degrees.  The output range can be selected as 0 to 2π or π to -π.**

## Parameter
### Configuration
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Name | Name of component | Text | Enter the name of this component |
| Input in | Input type | Select | Enter the name of this component |
| Output in | Output type | Select | Select the format of output signal to deg or rad |
| Output Range | Output range | Select | Select output angle range to 0~2π or -π~π |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input pin |
| Output | 1×1 | Output pin |

## Using Instructions

{% pullquote info %}
+ 配置Configuration/Input Is in、Output Is in选择输入角度信号从角度制转化到弧度制，或者从弧度制转换到角度制。
+ 配置Output Range选择输出范围为0到2π(360°)或-π(-180°)到π(180°)。
{% endpullquote %}

## See Also


