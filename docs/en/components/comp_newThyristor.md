---
title: Thyristor
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3003
order: 200

classname: _newThyristor
symbol: newThyristor
---
## Basic Description
{% compsymbol newThyristor %}

> **This component is used to model the thyristor.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Enable Snubber Circuit? |  | Enable snubber circuit? | Select | Select “Yes” or “No”to enable or disable the snubber circuit paralleled with thyristor |
| ON Resistance | Ω | ON resistance | Real number (Const) | Resistance of thyristor when in the on state |
| OFF Resistance | Ω | OFF resistance | Real number (Const) | Resistance of thyristor when in the off state |
| Forward Voltage Drop | kV | Forward voltage drop | Real number (Const) | Forward voltage drop of thyristor. The voltage drop when the diode is on |
| Forward Breakover Voltage | kV | Forward breakover voltage | Real number (Const) | Forward breakover voltage of thyristor. Thyristor will be forced into conduction if this voltage is exceeded |
| Reverse Withstand Voltage | kV | Reverse withstand voltage | Real number (Const) | Reverse withstand voltage of thyristor. Thyristor will be forced into conduction in the reverse direction if this voltage is exceeded |
| Minimum Extinction Time | s | Minimum extinction time | Real number (Const) | Minimum extinction time of thyristor. The time interval between the reception of the turn-on signal and the actual conduction |
| Snubber Resistance | Ω | Snubber ciruit resistance | Real number (Const) | Resistance of RC snubber circuit, only valid when "Enable Snubber Circuit" is "Yes" |
| Snubber Capacitance | μF | Snubber circuit capacitance | Real number (Const) | Capacitance of RC snubber circuit, only valid when "Enable Snubber Circuit" is "Yes" |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Current (Snubber Excluded) \[kA\] | Thyristor current (Snubber Excluded) | Text | Enter the measurement signal label of the branch current excluding snubber circuit, starting with #, such as #Is1 |
| Total Current \[kA\] | Thyristor total current | Text | Enter the measurement signal label of the total current including snubber circuit, starting with #, such as #Is2 |
| Branch Voltage \[kV\] | Branch Voltage | Text | Enter the measurement signal label of the branch voltage, starting with #, such as #Vt |
| Last Turn On Time \[s\] | Last turn on time | Text | Enter the measurement signal label of the last turn-on time, starting with #, such as #Ton |
| Last Turn Off Time \[s\] | Last turn off time | Text | Enter the measurement signal label of the last turn-off time, starting with #, such as #Toff |
| Alpha Angle \[s\] | Actual trigger angle | Text | Enter the measurement signal label of the alpha angle, starting with #, such as #Alpha |
| Gamma Angle \[s\] | Actual extinction angle | Text | Enter the measurement signal label of the gamma angle, starting with #, such as #Gamma |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | Auto | Positive pin of thyristor |
| Pin - | Auto | Negative pin of thyristor |
| Gate | Auto | Gate pin of thyristor. Control signal should be input here |

## Using Instructions



## See Also

[Diode](comp_newDiode.md), [IGBT](comp_newIGBT.md)
