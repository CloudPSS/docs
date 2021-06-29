---
title: Single-phase Transformer
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3001
order: 700

classname: _newTransformer_1p
symbol: newTransformer_1p
---
## Basic Description


> **This component is used to model a single-phase two-winding transformer.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Rated Power | MVA | Rated power | Real number (Const) | The apparent power rating of the transformer, $S_N$ |
| Winding #1 Rated Voltage (RMS) | kV | Winding #1 rated RMS voltage | Real number (Const) | The RMS voltage rating of the winding #1, $V_{1N}$ |
| Winding #2 Rated Voltage (RMS) | kV | Winding #2 rated RMS voltage | Real number (Const) | The RMS voltage rating of the winding #2, $V_{2N}$ |
| Base Operation Frequency | Hz | Rated frequency | Real number (Const) | Rated frequency of transformer, $f_n$ |
| Leakage Reactance | p.u. | Leakage reactance | Real number (Const) | The total leakage reactance of transformer, $X_T$. This can be calculated based on short-circuit test results or the nameplate of transformer |
| Leakage Resistance | p.u. | Leakage resistance | Real number (Const) | The total leakage resistance of transformer, $R_T$. This can be calculated based on short-circuit test results or the nameplate of transformer |
| Magnetization Conductance | p.u. | Magnetization conductance | Real number (Const) | Magnetization conductance of transformer, $G_M$, which can be derived from transformer no-load test or the nameplate of transformer |
| Magnetizing Current | % | Magnetizing current | Real number (Const) | The magnetizing current of transformer, $I_M$, which can be derived from transformer no-load test or the nameplate of transformer |
| Tap Changer |  | Select tap changer | Select | Select tap changer position as "None", "Winding #1", or "Winding #2" |

### Saturation
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Saturation Enabled |  | Saturation enabled? | Select | Select "Yes" or "No" to enable or disable  the core saturation routine in modeling |
| Place Saturation on |  | The position of saturation | Select | Select the winding number will place the saturation current injection directly on that winding |
| Air Core Reactance | p.u. | Air core reactance | Real number (Const) | The air core reactance is usually approximately twice the leakage reactance |
| Rush Decay Time Constant | s | rush decay time constant | Real number (Const) | The decay time constant for the transformer magnetizing rush current |
| Knee Voltage | p.u. | Knee voltage | Real number (Const) | The knee point voltage corresponding to the the knee point of the saturation curve |
| Time to Release Flux Clipping | s | Startup time | Real number (Const) | Time interval from start-up in which the model will 'clip' the calculated flux linkage values. This is simply a modeling 'trick' to prevent instability at start-up |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Winding #1 Current \[kA\] | Winding #1 current | Text | Enter the label of the current of the transformer winding #1, starting with #, such as#IL1 |
| Winding #2 Current \[kA\] | Winding #2 current | Text | Enter the label of the current of the transformer winding #2 here, starting with #, such as#IL2 |
| Magnetizing Current \[kA\] | Magnetizing current | Text | Enter the label of the magnetizing current, starting with #, such as #IM |
| Flux Linkage \[KWb-N\] | Flux linkage | Text | Enter the label of the Flux Linkage, starting with #, such as #FLUX |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin #1+ | 1×1 | Positive terminal of Winding #1 |
| Pin #1- | 1×1 | Negative terminal of Winding #1 |
| Pin #2+ | 1×1 | Positive terminal of Winding #2 |
| Pin #2- | 1×1 | Negative terminal of Winding #2 |
| Tap1 | 1×1 | Tap of transformer winding #1, and input ratio control signal |
| Tap2 | 1×1 | Tap of transformer winding #2, and input ratio control signal |

## Using Instructions



## See Also

[Three-phase Two-winding Transformer](comp_newTransformer_3p2w.md), [Three-phase Three-winding Transformer](comp_newTransformer_3p3w.md)
