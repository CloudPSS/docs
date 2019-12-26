---
title: Three-phase Two-winding Transformer
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 700

classname: _newTransformer_3p2w
symbol: newTransformer_3p2w
---
## Basic Description
{% compsymbol newTransformer_3p2w %}

> **This component is used to model a three-phase two-winding transformer with built-in neutral point.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Rated Power | MVA | Rated power | Real number (Const) | The 3-phase apparent power rating of the transformer, $S_N$ |
| Winding #1 Rated Voltage (L-L, RMS) | kV | Winding #1 rated RMS line voltage | Real number (Const) | The RMS line voltage rating of the winding #1, $V_{1N}$ |
| Winding #2 Rated Voltage (L-L, RMS) | kV | Winding #1 rated RMS line voltage | Real number (Const) | The RMS line voltage rating of the winding #2, $V_{2N}$ |
| Base Operation Frequency | Hz | Rated frequency | Real number (Const) | Rated frequency of transformer, $f_n$ |
| Winding #1 Type |  | Winding #1 connection type | Select | Select the connection type for the winding #1, "Y" or "Delta" connected |
| Winding #2 Type |  | Winding #2 connection type | Select | Select the connection type for the winding #2, "Y" or "Delta" connected |
| Delta Lags or Leads Y |  | Delta lags or leads Y | Select | Select "Leads 30°" or "Lags 30°", only valid when winding type is "Delta" |
| Winding #1 Neutral Point Resistance | Ω | Winding #1 neutral point resistance | Real number (Const) | Neutral point resistance of winding #1, $r_{1n}$, only valid when winding type is "Star" |
| Winding #2 Neutral Point Resistance | Ω | Winding #2 neutral point resistance | Real number (Const) | Neutral point resistance of winding #2, $r_{2n}$, only valid when winding type is "Star" |
| Positive Sequence Leakage Reactance | p.u. | Positive sequence leakage reactance | Real number (Const) | The total positive sequence leakage reactance of the transformer, $X_T$, which can be derived from transformer short-circuit test or the nameplate of transformer |
| Positive Sequence Leakage Resistance | p.u. | Positive sequence leakage resistance | Real number (Const) | The total positive sequence leakage resistance of the transformer, $R_T$, which can be derived from transformer short-circuit test or the nameplate of transformer |
| Magnetization Conductance | p.u. | Magnetization Conductance | Real number (Const) | Magnetization conductance of transformer, $G_M$, which can be derived from transformer no-load test or the nameplate of transformer |
| Magnetizing Current | % | Magnetizing current | Real number (Const) | The magnetizing current of transformer, $I_M$, which can be derived from transformer no-load test or the nameplate of transformer |
| Tap Changer |  | Select tap changer | Select | Select tap changer position as "None", "Winding #1", or "Winding #2" |
| Initial Tap Ratio |  | Initial tap ratio | Real number (Const) | The initial tap ratio of transformer |

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
| Winding #1 Line Current Vector \[kA\] | Winding #1 line current | Text | Enter the label of the line current of the transformer winding #1 (dimension 3×1), starting with #, such as #I1ll |
| Winding #1 Phase Current Vector \[kA\] | Winding #1 phase current | Text | Enter the label of the phase current of the transformer winding #1 (dimension 3×1), starting with #, such as #I1lg |
| Winding #2 Line Current Vector \[kA\] | Winding #2 line current | Text | Enter the label of the line current of the transformer winding #2 (dimension 3×1), starting with #, such as #I2ll |
| Winding #2 Phase Current Vector \[kA\] | Winding #2 phase current | Text | Enter the label of the phase current of the transformer winding #2 (dimension 3×1), starting with #, such as #I2lg |
| Winding #1 RMS Line Current \[kA\] | Winding #1 RMS line current | Text | Enter the label of the RMS line current of the transformer winding #1 (dimension 1×1), starting with #, such as #I1rms |
| Winding #2 RMS Line Current \[kA\] | Winding #2 RMS line current | Text | Enter the label of the RMS line current of the transformer winding #2 (dimension 1×1), starting with #, such as #I2rms |
| Winding #1 Active Power \[MW\] | Winding #1 active power | Text | Enter the label of the active power of the transformer winding #1 (dimension 1×1), starting with #, such as #P1 |
| Winding #1 Reactive Power \[MVar\] | Winding #1 reactive power | Text | Enter the label of the reactive power of the transformer winding #1 (dimension 1×1), starting with #, such as #Q1 |
| Winding #2 Active Power \[MW\] | Winding #2 active power | Text | Enter the label of the active power of the transformer winding #2 (dimension 1×1), starting with #, such as #P2 |
| Winding #2 Reactive Power \[MVar\] | Winding #2 reactive power | Text | Enter the label of the reactive power of the transformer winding #2 (dimension 1×1), starting with #, such as #Q2 |
| 3 Phase Magnetizing Current \[kA\] | 3-phase magnetizing current | Text | Enter the label of the 3-phase magnetizing current of the transformer (dimension 3×1), starting with #, such as #Im |
| 3 Phase Flux Linkage \[KWb-N\] | 3-phase flux linkage | Text | Enter the label of the 3-phase flux linkage current of the transformer (dimension 3×1), starting with #, such as #Flux |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin #1 | 3×1 | Terminal of winding #1 |
| Pin #2 | 3×1 | Terminal of winding #2 |
| Tap1 | 1×1 | Tap of transformer winding #1, and input ratio control signal |
| Tap2 | 1×1 | Tap of transformer winding #2, and input ratio control signal |

## Using Instructions



## See Also

[Single-phase Transformer](comp_newTransformer_1p.html)、[Three-phase Three-winding Transformer](comp_newTransformer_3p3w.html)
