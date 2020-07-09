---
title: Surge Generator
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3008
order: 900

classname: _newSurgeGen
symbol: newSurgeGen
---
## Basic Description
{% compsymbol newSurgeGen %}

> **This component is used to generate a surge wave.** 
> $$f\left( t \right) = \left\{ \begin{aligned}
> & {0, t < {T_1} } \\
> & { \frac{ { {P_k} } } { { {T_2} - {T_1} } }\left( {t - {T_1} } \right), {T_1} \leqslant t < {T_2} } \\
> & { {P_k}, {T_2} \leqslant t < {T_3} } \\
> & { \frac{ { {P_k} } } { { {T_4} - {T_3} } }\left( { {T_4} - t} \right), {T_3} \leqslant t < {T_4} } \\
> & { 0, {T_4} \leqslant t} \\ 
> \end{aligned} \right.$$ 

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of this component |
| Start Time of Up Slope | s | Start time of up slope T1 | Real number (Const) | Start time of up slope $T_1$  |
| End Time of Up Slope | s | End time of up slope T2(>T1) | Real number (Const) | End time of up slope $T_2$ |
| Start Time of Down Slope | s | Start time of down slope T3(>T2) | Real number (Const) | Start time of down slope $T_3$ |
| End Time of Down Slope | s | End time of down slopeT4(>T3) | Real number (Const) | End time of down slope $T_4$ |
| Peak Output |  | Peak output | Real number (Const) | Peak output $P_k$ |

 
## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| Output | 1×1 | Output pin |
 
## Using Instructions



## See Also

[Drop Generator](comp_newDropGen.html)
