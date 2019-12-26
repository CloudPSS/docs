---
title: Photovoltaic Source
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3006
order: 100

classname: _newPVSource
symbol: newPVSource
---
## Basic Description
{% compsymbol newPVSource %}

> **This component can be used to model a photovoltaic (PV) source. The photovoltaic source is assumed to consist of several strings of PV modules connected in parallel, where each string can consist of a number of PV modules connected in series. All PV modules in the array are assumed identical.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| No. of Cells Connected in Series |  | Number of cells connected in series | Integer (Const) | Number of PV modules connected in series in the PV array, M |
| No. of Cells Series in Parallel |  | Number of cells series in parallel | Integer (Const) | Number of PV modules connected in parallel in the PV array, N |
| Rated Irradiation | W/m^2 | Rated irradiation | Real number (Const) | Rated irradiation of PV array |
| Rated Temperature | °C | Rated temperature | Real number (Const) | Rated temperature of PV array |

### Equivalent Circuit Parameters
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Rated Open-Circuit Voltage | V | Rated open-circuit voltage | Real number (Const) | Rated open-circuit voltage of the PV array |
| Rated Short-Circuit Current | A | Rated short-circuit current | Real number (Const) | Rated short-circuit current of the PV array |
| Voltage at Maximum Power Point | V | Voltage at maximum power point | Real number (Const) | Voltage at maximum power point of the PV array  |
| Current at Maximum Power Point | A | Current at maximum power point | Real number (Const) | Current at maximum power point of the PV array |
| Compensation Parameter α | 1/℃ | Compensation parameter α | Real number (Const) |  Compensation parameter α |
| Compensation Parameter β |  | Compensation parameter β | Real number (Const) | Compensation parameter β |
| Compensation Parameter γ | 1/℃ | Compensation parameter γ | Real number (Const) |  Compensation parameter γ |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| PV Array Output Power \[MW\] | PV array output power | Text | Enter the measurement signal label of the output power of PV array, starting with #, such as #Ppv |
| PV Array Branch Voltage \[kV\] | PV array voltage | Text | Enter the measurement signal label of the branch voltage of PV array, starting with #, such as #Vpv |
| PV Array Branch Current \[kV\] | PV array current | Text | Enter the measurement signal label of the branch current of PV array, starting with #, such as #Ipv |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | 1×1 | Positive terminal of PV array |
| Pin + | 1×1 | Negative terminal of PV array |
| T | 1×1 | Input pin of temperature |
| G | 1×1 | Input pin of irradiation |

## Using Instructions



## See Also


