---
title: NLM2Ref
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3009
order: 200

classname: _FirePulseGenNLM2Ref
symbol: NLM2Ref
---
## Basic Description
{% compsymbol NLM2Ref %}

> **This component realizes the nearest level modulation and capacitance voltage balancing algorithms in MMC applications.**

## Parameter
### Configuration
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Name | Name of component | Text | Enter the name of this component |
| No. of Sub-modules | Number of sub-modules | Integer（Const） | Number of sub-modules |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Vcp | Auto | Input pin of upper bridge capacitor voltage |
| Vcn | Auto | Input pin of lower bridge capacitor voltage |
| Vpref | Auto | Input pin of upper bridge reference voltage |
| Vnref | Auto | Input pin of lower bridge reference voltage |
| Ip | Auto | Input pin of upper bridge inductor voltage |
| In | Auto | Input pin of lower bridge inductor voltage |
| Gp | Auto | Output pin of upper bridge switcher signal |
| Gn | Auto | Output pin of lower bridge switcher signal |

## Using Instructions



## See Also

[Half-Bridge Submodule](comp_MultiHalfBridgeModule.html)
