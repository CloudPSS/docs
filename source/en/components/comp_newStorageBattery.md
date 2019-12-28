---
title: Lead-acid Battery
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3006
order: 200

classname: _newStorageBattery
symbol: newStorageBattery
---
## Basic Description
{% compsymbol newStorageBattery %}

> **This component is used to model the lead-acid battery.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Battery Capacity | Ah | Battery capacity | Real number (Const) | Capacity of the battery |
| Voltage at Fully Charged Point | V | Voltage at fully charged point | Real number (Const) | Voltage at fully charged point |
| Voltage at End of Exponential Zone | V | Voltage at end of exponential zone | Real number (Const) | Voltage at end of exponential zone |
| Discharged Capacity at End of Exponential Zone | Ah | Discharged capacity at end of exponential zone | Real number (Const) | Discharged capacity at end of exponential zone |
| Voltage at End of Nominal Zone | V | Voltage at end of nominal zone (Nominal voltage) | Real number (Const) | Voltage at end of nominal zone |
| Discharged Capacity at End of Nominal Zone | Ah | Discharged capacity at end of nominal zone | Real number (Const) | Discharged capacity at end of nominal zone |
| Nominal Discharging Current | A | Nominal discharging current | Real number (Const) | Nominal discharging current |
| Inner Resistance | Ω | Inner resistance | Real number (Const) | Inner resistance of the battery |
| Initial State of Charge (SOC) |  | Initial state of charge (SOC) | Real number (Const) | Initial State of Charge (SOC) |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | Voltage of battery | Text | Enter the measurement signal label of the output voltage of lead-acid battery, starting with #, such as #Vb |
| Source Current \[kA\] | Current of battery | Text | Enter the measurement signal label of the output current of lead-acid battery, starting with #, such as #Ib |
| Output Power \[MW\] | Power of battery | Text | Enter the measurement signal label of the output power of lead-acid battery, starting with #, such as #Pb |
| State of Charge, SOC \[p.u.\] | SOC | Text | Enter the measurement signal label of the SOC of lead-acid battery, starting with #, such as #Sb |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin - | 1×1 | Negative terminal |
| Pin + | 1×1 | Positive terminal |

## Using Instructions



## See Also


