---
title: Heat Source
author: 
author_email:

date: 2018/12/4 18:05:35
updated: 2018/12/4 18:05:35

type: components
category: 10000
order: 1000

classname: HeatSource
symbol: heat1
---
## Basic Description


> **This component refers to the equipment that supplies heat (or cold) to the heating system.**

## Parameter
### Hydraulic control condition
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Specify Mass Flowrate? |  | Specify mass flowrate? | Select | Heat medium flow circulating through the heat source, here choose whether to set the heat flow to a specified value |
| Mass flowrate | kg/s | Mass Flowrate | Table | Enter the specified value of the heat medium flow at different time points |
| Specify Return Pressure? |  | Specify return pressure? | Select | Heat medium pressure at the heat source inlet, here choose whether to set the return water pressure to a specified value |
| Return Pressure | MPa | Return pressure | Table | Enter the specified value of the return water pressure at different time points |
| Specify Pressure Increment? |  | Specify pressure increment? | Select | The pressure increasement inside the heat source, here choose whether to set the return water pressure to a specified value |
| Pressure Increment | MPa | Pressure increment | Table | Enter the specified value of the station boost at different time points |

### Thermal control condition
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Specify Heat Supply? |  | Specify heat supply? | Select | Heat output from the heat source, here select whether to set the heat supply to a specified value |
| Heat supply | kW | Heat Supply | Table | Enter the specified value of heat supply at different time points |
| Specify Supply Temperature? |  | Specify supply temperature? | Select | The temperature of the heat medium at the outlet of the heat source. Here, choose whether to set the heating temperature to a specified value |
| Supply Temperature | ℃ | Supply temperature | Table | Enter the specified value of the heating temperature at different time points |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input&Output | 1×1 | Represent the input and output connection points of the component at the same time |

## Using Instructions

::: tip
In the current version, the heat source should be used as a starting point when the heat source is connected to other components, otherwise it is easy to cause errors.
:::

## See Also


