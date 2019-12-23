---
title: Controlled AC Voltage Source (VP)
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 700

classname: _newCtrlVPAcVoltageSource
symbol: newCtrlVPACSource
---
## Basic Description
{% compsymbol newCtrlVPACSource %}

> **This component is used to model a single-phase or three-phase AC voltage source with controllable amplitude and phase.**

## Parameter
### Configuration
| Parameter name参数名 | Unit单位 | Remark备注 | Type类型 | Description描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | Name of component元件名称 | Text文本 | Enter the name of controlled voltage source (Default) |
| Is This Source Grounded? |  | Is this source grounded? | Select选择 | Select "Yes" or "No" to ground or unground the Negative terminal of voltage source选择“Yes”或“No”以使电压源负端接地或不接地 |
| No. of Phases |  | Number of phases电压源相数 | Select选择 | Select single-phase or three-phase source选择电压源为单相或三相 |
| Function Type |  | Function type函数类型 | Select选择 |  Select the signal type as "Sin" or "Cos"选择电压源为正弦表达式或余弦表达式 |
| Frequency | Hz | Frequency频率 | Real number (Const)实数（常量） | Frequency of the controlled voltage source电压源的频率 |
| Resistance | Ω | Resistance内阻 | Real number (Const)实数（常量） | Resistance of the controlled voltage source电压源的内阻 |
| Start-up Type |  | Start-up type启动方式 | Select选择 | Select the start-up type of controlled voltage source as "Linear Ramp" or "Real Pole Ramp"选择电压源启动发式为“Linear Ramp”或“Real Pole Ramp” |
| Voltage Ramp Up Time | s | Startup time启动时间 | Real number (Const)实数（常量） | Enter the voltage ramping time, only valid when "Start-up Type" is "Linear Ramp"输入斜坡启动时间，仅当“启动方式"项为“Linear Ramp”时生效 |
| Voltage Input Time Constant | s | Startup time constant启动时间常数 | Real number (Const)实数（常量） | 输入极点时间常数，仅当“启动方式”项为“RealPoleRamp”时生效  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签，以#号开头，如#Va。仅当电压源相数为单相时有效 |
| Source Current \[kA\] | 电压源输出电流 | 文本 | 此处输入电压源电流量测信号的标签，以#号开头，如#Ia。仅当电压源相数为单相时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Source Voltage Vector \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签（3×1维），以#号开头，如#Vabc。仅当电压源相数为三相时有效 |
| 3 Phase Source Current Vector \[kA\] | 电压源输出电流 | 文本 | 此处输入电压源电流量测信号的标签（3×1维），以#号开头，如#Iabc。仅当电压源相数为三相时有效 |
| RMS Source Voltage \[kV\] | 电压源电压均方根值 | 文本 | 此处输入电压源电压有效值量测信号的标签（1×1维），以#号开头，如#Vrms。仅当电压源相数为三相时有效 |
| RMS Source Current \[kA\] | 电压源电流均方根值 | 文本 | 此处输入电压源电流有效值量测信号的标签（1×1维），以#号开头，如#Irms。仅当电压源相数为三相时有效 |
| Active Power \[MW\] | 有功功率 | 文本 | 此处输入电压源有功功率量测信号的标签（1×1维），以#号开头，如#P。仅当电压源相数为三相时有效 |
| Reactive Power \[MVar\] | 无功功率 | 文本 | 此处输入电压源无功功率量测信号的标签（1×1维），以#号开头，如#Q。仅当电压源相数为三相时有效 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 由参数控制 | 电压源的负端（参考方向），仅当电压源非接地时有效|
| Pin + | 由参数控制 |电压源的正端（参考方向）|
| Voltage \[kV, L-G, Pk\] | 1×1 |电压幅值控制输入端 |
| Phase \[Deg\] | 1×1 |电压相位控制输入端 |

## 使用说明

{% pullquote info %}
若电压源的内阻为0，CLoudPSS会自动选择为`理想电压源`模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。
{% endpullquote %}


## 相关元件

[受控电压源(VF)](comp_newCtrlAcVoltageSource.html)、[受控电压源](comp_newCtrlVoltageSource.html)
