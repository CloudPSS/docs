---
title: Pipeline
author: 
author_email:

date: 2018/12/4 18:05:35
updated: 2018/12/4 18:05:35

type: components
category: 10000
order: 0001

classname: Pipeline
symbol: Heat0
---
## Basic Description

![管道元件](comp_HeatingSystem/pipeline.png)

> **This component is the main equipment for heat transfer in the heating system, which realizes the interconnection between other components in the system.**

## Parameter
### Supply pipeline
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Pipe Inter Diameter | mm | Pipe inter diameter | Real number (Const) | Pipe inter diameter of the pipeline |
| Pipe Thickness | mm | Pipe thickness | Real number (Const) | Pipe thickness of the pipeline |
| Pipe Roughness | mm | Pipe roughness | Real number (Const) | Pipe roughnessof the pipeline |
| Environment Temperature | ℃ | Environment temperature | Real number (Const) | Environment temperature around the pipeline |
| Total Heat Transfer Coefficient | W/(m²·℃) | Total heat transfer coefficient | Real number (Const) | Total heat transfer coefficient between the pipeline and the environment |

### Return pipeline
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Copy Supply Pipeline |  | Copy supply pipeline | Button | Copy the parameters of supply pipeline to the return pipeline |
| Pipe Inter Diameter | mm | Pipe inter diameter | Real number (Const) | Pipe inter diameter of the pipeline |
| Pipe Thickness | mm | Pipe thickness | Real number (Const) | Pipe thickness of the pipeline |
| Pipe Roughness | mm | Pipe roughness | Real number (Const) | Pipe roughnessof the pipeline |
| Environment Temperature | ℃ | Environment temperature | Real number (Const) | Environment temperature around the pipeline |
| Total Heat Transfer Coefficient | W/(m²·℃) | Total heat transfer coefficient | Real number (Const) | Total heat transfer coefficient between the pipeline and the environment |

### Pipeline profile
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Pipe Profile | m,m | Pipe profile | Table | Set the length and elevation data of the pipeline |

## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Input | 1×1 | Input of pipeline |
| Output | 1×1 | Output of pipeline |

## Using Instructions

::: info
Currently, the default water supply pipeline and the water return pipeline are represented by the same connection, that is, have the same connection relationship.
:::

## See Also


