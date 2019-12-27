---
title: IGBT
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3003
order: 300

classname: _newIGBT
symbol: newIGBT
---
## Basic Description
{% compsymbol newIGBT %}

> **This component is use to model the IGBT.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Enable Snubber Circuit? |  | Enable snubber circuit? | Select | Select "Yes" or "No" to enable or disable the snubber circuit paralleled with IGBT |
| ON Resistance | Ω | ON resistance | Real number (Const) | Resistance of IGBT when in the on state |
| OFF Resistance | Ω | OFF resistance | Real number (Const) | Resistance of IGBT when in the off stateIGBT |
| Forward Voltage Drop | kV | Forward voltage drop | Real number (Const) | Forward voltage drop of IGBT. The voltage drop when the IGBT is on |
| Forward Breakover Voltage | kV | Forward breakover voltage | Real number (Const) | Forward breakover voltage of IGBT. IGBT will be forced into conduction if this voltage is exceeded |
| Reverse Withstand Voltage | kV | Reverse withstand voltage | Real number (Const) | Reverse withstand voltage of IGBT. IGBT will be forced into conduction in the reverse direction if this voltage is exceededIGBT |
| Minimum Extinction Time | s | Minimum extinction time | Real number (Const) | Minimum extinction time of IGBT. The time interval between the reception of the turn-on signal and the actual conduction |
| Snubber Resistance | Ω | Snubber resistance | Real number (Const) | Resistance of RC snubber resistance, only valid when "Enable Snubber Circuit" is "Yes" |
| Snubber Capacitance | μF | Snubber capacitance | Real number (Const) | Resistance of RC snubber resistance, only valid when "Enable Snubber Circuit" is "Yes" |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Current (Snubber Excluded) \[kA\] | Current (Snubber excluded) | Text | Enter the measurement signal label of the branch current excluding Snubber circuit, starting with #, such as #Is1 |
| Total Current \[kA\] | Total current | Text | Enter the measurement signal label of the total current including Snubber circuit, starting with #, such as #Is2 |
| Branch Voltage \[kV\] | Branch voltage | Text | Enter the measurement signal label of the branch voltage, starting with #, such as #Vs |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | 1×1 | Collector of IGBT |
| Pin - | 1×1 | Emitter of IGBT |
| Gate | 1×1 | Gate of IGBT. Control signal should be input here |

## Using Instructions



## See Also

[Diode](comp_newDiode.html), [Thyristor](comp_newThyristor.html)
