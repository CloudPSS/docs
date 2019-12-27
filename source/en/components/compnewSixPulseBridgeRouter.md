---
title: Six-pulse Thyristor Bridge
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3005
order: 200

classname: newSixPulseBridgeRouter
symbol: newSixValveBridge
---
## Basic Description
{% compsymbol newSixValveBridge %}

> **This component is used to model a six-pulse thyristor bridge.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Thyristor Direction |  | Thyristor direction | Select | Select "Up" or "Down". "Up" signifies rectifier operation, whereas "Down" signifies inverter operation |
| Enable Snubber Circuit? |  | Enable snubber circuit? | Select | Select "Yes" or "No" to enable or disable the snubber circuit |
| Transformer Phase Config |  | Transformer phase configuration | Select | Select "+30 Deg", "0 Deg (Y-Dlead)", "-30 Deg (Y-Y or D-D)" or "-60 Deg (Y-Dlag)". This input is dependent on the converter transformer configuration |
| Firing Order Angle Type |  | Firing angle type | Select | Select the angle unit as "Angle in Radians" or "Angle in Degrees" |
| Unblock Time | s | Unblock time | Real number (Const) | Before this time, this component is locked |

### Phase Locked Oscillator
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Rated Frequency | Hz | Rated frequency | Real number (Const) | Rated frequency of this electrical system |
| PLO Proportional Gain |  | PLO proportional gain | Real number (Const) | Proportional gain of PLO |
| PLO Integral Gain |  | PLO integral gain | Real number (Const) | Integral gain of PLO |
| PLO Reference Voltage |  | PLO reference voltage | Select |  Select the reference voltage of PLO including or excluding the zero-order component |

### Valve Data
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Thyristor ON  Resistance | Ω |  | Real number (Const) | Equivalent resistance when thyristor is on |
| Thyristor OFF Resistance | Ω |  | Real number (Const) | Equivalent resistance when thyristor is off |
| Forward Voltage Drop | kV |  | Real number (Const) | The voltage drop when thyristor is on |
| Forward Breakover Voltage | kV |  | Real number (Const) | Forward breakover voltage of thyristor. Thyristor will be forced into conduction if this voltage is exceeded |
| Reverse Withstand Voltage | kV |  | Real number (Const) | Reverse withstand voltage of thyristor. Thyristor will be forced into conduction in the reverse direction if this voltage is exceeded |
| Protected Against Forward Breakover |  |  | Select | Select "Yes" or "No", If "Yes" is selected, the valve group will send a firing pulse just before the "Forward Breakover Voltage" is exceeded, avoiding permanent failure to the thyristor |
| Snubber Resistance | Ω |  | Real number (Const) | Resistance of RC snubber resistance, only valid when "Enable Snubber Circuit" is "Yes" |
| Snubber Capacitance | uF |  | Real number (Const) | Capacitance of RC snubber resistance, only valid when "Enable Snubber Circuit" is "Yes" |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Thyristor Voltage Vector \[kV\] | Thyristor voltage | Text | Enter the measurement signal label of the voltage of thyristor, starting with #, such as #Vd |
| Thyristor Current Vector \[kA\] | Thyristor current | Text | Enter the measurement signal label of the current of thyristor, starting with #, such as #Id |
| Measured Alpha Angle \[Rad\] | Alpha angle | Text | Enter the measurement signal label of the alpha angle of thyristor, starting with #, such as #Alpha |
| Measured Gamma Angle \[Rad\] | Gamma angle | Text | Enter the measurement signal label of the gamma angle of thyristor, starting with #, such as #Gamma |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin AC | 3×1 | Pin connected to AC system |
| Pin Up | Auto | Pin of thyristor bridge up-terminal |
| Pin Down | Auto | Pin of thyristor bridge down-terminal |
| Com. Bus | 3×1 | |
| KB | Auto | |
| AO | Auto | |

## Using Instructions



## See Also


