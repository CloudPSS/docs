---
title: FFT
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 700

classname: _newFFT
symbol: newFFT
---
## Basic Description


> **This component is used to implement FFT (Fast Fourier Transformation) analysis.**

## Parameter
### Configuration
| Parameter name | Unit | Remark | Type | Description |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | Name of component | Text | Enter the name of the component |
| Type |  | Output type | Select | Select output type as "1 Phase"、 "2 Phase"、 "3 Phase" or "3 Phase SLD" |
| Number of Harmonics |  | Harmonic number | Select | Select harmonic number |
| Base Frequency | Hz | Base frequency | Real number (Const) | Base frequency |
| Magnitude Output |  | Magnitude output | Select | Select magnitude output as "RMS" or "Peak" |
| Phase Output Unit |  | Phase output unit | Select | Select phase output unit as "Rad" or "Deg" |
| Phase Output Reference |  | Phase output reference | Select | Select phase output as "Sin" or "Cos" |
| Anti-aliasing Filter? |  | Anti-aliasing filter? | Select | Select "Yes" or "No" to enable or disable the anti-aliasing filter |
| Frequency Tracking？ |  | Frequency tracking? | Select | Select to track the frequency or not |

### Monitoring
| Parameter name | Remark | Type | Description |
| :--- | :--- | :--: | :--- |
| Frequency Output \[Hz\] | Frequency output | Text | Enter the measurement signal label of frequency output, starting with #, such as #f |


## Pin List

| Pin name | Dimension | Description |
| :--- | :--:  | :--- |
| X | 1×1 | Signal input pin, only valid when Output Type is 1 Phase |
| Mag | Controlled by parameter | Output pin of magnitude or RMS value, only valid when Output Type is 1 Phase |
| Ph | Controlled by parameter | Output pin of phase, only valid when Output Type is 1 Phase |
| DC | 1×1 | Output pin of DC component, only valid when Output Type is 1 Phase |
| X1 | 1×1 | Input pin of Phase A, only valid when Output Type is 2 Phase |
| X2 | 1×1 | Input pin of Phase B, only valid when Output Type is 2 Phase |
| Mag1 | Controlled by parameter | Output pin of Phase A Magnitude or RMS value, only valid when Output Type is 2 Phase |
| Mag2 | Controlled by parameter | Output pin of Phase B Magnitude or RMS value, only valid when Output Type is 2 Phase |
| Ph1 | Controlled by parameter | Output pin of Phase A phase, only valid when Output Type is 2 Phase |
| Ph2 | Controlled by parameter | Output pin of Phase B phase, only valid when Output Type is 2 Phase |
| DC1 | 1×1 | Output pin of Phase A DC component, only valid when Output Type is 2 Phase |
| DC2 | 1×1 | Output pin of Phase B DC component, only valid when Output Type is 2 Phase |
| X1 | 1×1 | Input pin of Phase A, only valid when Output Type is 3 Phase |
| X2 | 1×1 | Input pin of Phase B, only valid when Output Type is 3 Phase |
| X3 | 1×1 | Input pin of Phase C, only valid when Output Type is 3 Phase |
| Mag1 | Controlled by parameter |Output pin of Phase A Magnitude or RMS value, only valid when Output Type is 3 Phase |
| Mag2 | Controlled by parameter |Output pin of Phase B Magnitude or RMS value, only valid when Output Type is 3 Phase |
| Mag3 | Controlled by parameter |Output pin of Phase C Magnitude or RMS value, only valid when Output Type is 3 Phase |
| Ph1 | Controlled by parameter |Output pin of Phase A phase, only valid when Output Type is 3 Phase |
| Ph2 | Controlled by parameter |Output pin of Phase B phase, only valid when Output Type is 3 Phase |
| Ph3 | Controlled by parameter |Output pin of Phase C phase, only valid when Output Type is 3 Phase |
| DC1 | 1×1 |Output pin of Phase A DC component, only valid when Output Type is 3 Phase |
| DC2 | 1×1 |Output pin of Phase B DC component, only valid when Output Type is 3 Phase |
| DC3 | 1×1 |Output pin of Phase C DC component, only valid when Output Type is 3 Phase |
| X | 3×1 |Input pin of 3 phase ABC，only valid when Output Type is 3 Phase SLD |
| Mag1 | Controlled by parameter |Output pin of Phase A Magnitude or RMS value, only valid when Output Type is 3 Phase SLD |
| Mag2 | Controlled by parameter |Output pin of Phase B Magnitude or RMS value, only valid when Output Type is 3 Phase SLD |
| Mag3 | Controlled by parameter |Output pin of Phase C Magnitude or RMS value, only valid when Output Type is 3 Phase SLD |
| Ph1 | Controlled by parameter |Output pin of Phase A phase, only valid when Output Type is 3 Phase SLD |
| Ph2 | Controlled by parameter |Output pin of Phase B phase, only valid when Output Type is 3 Phase SLD |
| Ph3 | Controlled by parameter |Output pin of Phase C phase, only valid when Output Type is 3 Phase SLD |
| DC1 | 1×1 |Output pin of Phase A DC component, only valid when Output Type is 3 Phase SLD |
| DC2 | 1×1 |Output pin of Phase B DC component, only valid when Output Type is 3 Phase SLD |
| DC3 | 1×1 |Output pin of Phase C DC component, only valid when Output Type is 3 Phase SLD |


## Using Instructions



## See Also


