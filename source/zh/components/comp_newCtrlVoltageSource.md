---
title: 受控电压源
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3002
order: 500

classname: _newCtrlVoltageSource
symbol: newCtrlVoltageSource
---
## 基本描述
{% compsymbol newCtrlVoltageSource %}

> **该元件用以建模受控电压源。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Source Name |  | 电压源名称 | 文本 | 此处输入受控电压源的名称（可缺省） |
| Is This Source Grounded? |  | 电压源一端是否接地？ | 选择 | 选择“Yes”或“No”以使电压源负端接地或不接地 |
| Resistance | Ω | 电压源内阻值 | 实数（常量） | 电压源内阻 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Source Voltage \[kV\] | 电压源端电压 | 文本 | 此处输入电压源电压量测信号的标签，以#号开头，如#Va |
| Source Current \[kA\] | 电压源的电流 | 文本 | 此处输入电压源电流量测信号的标签，以#号开头，如#Ia |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin - | 自动 |电压源的负端（参考方向），仅当电压源非接地时有效 |
| Pin + | 自动 |电压源的正端（参考方向）|
| Ctrl | 自动 |受控输入端，该端口输入为1时，对应输出电压为1V|

## 使用说明

{% pullquote info %}
若电压源的内阻为0，CloudPSS会自动选择为`理想电压源`模型。但多个理想电压源不能并联或成环状连接（违背基尔霍夫回路电压定律）。
{% endpullquote %}


## 相关元件

[受控电压源(VP)](comp_newCtrlVPAcVoltageSource.html)、[受控电压源(VF)](comp_newCtrlAcVoltageSource.html)、[受控电流源](comp_newCtrlCurrentSource.html)
