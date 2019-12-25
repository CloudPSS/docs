---
title: Fixed Load
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 200

classname: _newExpLoad_3p
symbol: newExpLoad
---
## Basic Description
{% compsymbol newExpLoad %}

> **This component models the load characteristics as a function of voltage magnitude and frequency, where the load real and reactive power our considered separately using the well known expressions:**
> $$\begin{gathered}
  P = {P_N}{\left( {\frac{V}{ { {V_N} } } } \right)^{NP} }\left( {1 + {K_{PF}}\Delta f} \right) \\
  Q = {Q_N}{\left( {\frac{V}{ { {V_N} } } } \right)^{NQ} }\left( {1 + {K_{QF}}\Delta f} \right) \\ 
\end{gathered}$$

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of fixed load (Default) |
| Rated Voltage (L-L, RMS) | kV | Rated voltage (L-L, RMS) | Real number (Const) | Rated voltage (L-L, RMS), $V_N$ |
| Rated Frequency | Hz | Rated frequency | Real number (Const) | Rated frequency, $f_N$ |
| Rated Active Power (3 Phase) | MW | Rated active power | Real number (Const) | Rated active power, $P_N$ |
| Rated Reactive Power (3 Phase) | MVar | Rated reactive power into load, where inductive load is entered as + in value  | Real number (Const) | Rated reactive power, $Q_N$ |
| Voltage Index for P |  | Voltage index for P | Real number (Const) | Voltage index for P, $NP$ |
| Voltage Index for Q |  | Voltage index for Q | Real number (Const)实数（常量） | Voltage index for Q, $NQ$ |
| Freq Index for P |  | Freq index for P | Real number (Const) | Freq index for P, $K_{PF}$ |
| Freq Index for Q |  | Freq index for Q | Real number (Const) | Freq index for Q, $K_{QF}$ |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| 3 Phase Current Vector \[kA\] | 3-phase current | Text | Enter the measurement signal label of the 3-phase current of fixed load（3×1）, starting with #, such as #labc |
| RMS Current \[kA\] | RMS current | Text | Enter the measurement signal label of the 3-phase current rms value of fixed load（1×1）, starting with #, such as #lrms |
| Active Power \[MW\] | Active power | Text | Enter the measurement signal label of the active power, starting with #, such as #P |
| Reactive Power \[MVar\] | Reactive power | Text | Enter the measurement signal label of the reactive power, starting with #, such as #Q |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Pin + | 3×1 | Pin of fixed load |

## Using Instructions



## See Also


