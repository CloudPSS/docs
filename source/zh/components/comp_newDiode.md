---
title: 二极管
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/5 10:03:10

type: components
category: 3003
order: 100

classname: _newDiode
symbol: newDiode
---
## 基本描述
{% compsymbol newDiode %}

> **该元件用以建模电力二极管。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入二极管的名称（可缺省） |
| Enable Snubber Circuit? |  | 有无缓冲电路 | 选择 | 选择“Yes”或“No”以启用或禁用二极管并联的缓冲电路 |
| ON Resistance | Ω | 导通电阻 | 实数（常量） | 二极管导通时的等效电阻 |
| OFF Resistance | Ω | 关断电阻 | 实数（常量） | 二极管关断时的等效电阻 |
| Forward Voltage Drop | kV | 正向导通压降 | 实数（常量） | 二极管导通时的等效压降 |
| Forward Breakover Voltage | kV | 正向击穿电压 | 实数（常量） | 二极管正向击穿电压，当正向超过这个数值时，二极管将被正向击穿 |
| Reverse Withstand Voltage | kV | 反向耐受电压 | 实数（常量） | 二极管反向耐受电压，当反向超过这个数值时，二极管将被反向击穿 |
| Minimum Extinction Time | s | 导通延迟时间 | 实数（常量） | 二极管导通延迟时间，即从接受到导通信号到电气导通的时间间隔 |
| Snubber Resistance | Ω | 缓冲电路电阻 | 实数（常量） | 二极管并联RC缓冲电路的电阻，仅当“有无缓冲电路”选择"Yes"时有效 |
| Snubber Capacitance | μF | 缓冲电路电容 | 实数（常量） | 二极管并联RC缓冲电路的电容，仅当“有无缓冲电路”选择"Yes"时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Current (Snubber Excluded) \[kA\] | 二极管支路电流（不含缓冲电路） | 文本 | 此处输入不含缓冲电路的支路电流信号量测信号的标签，以#号开头，如#Is1 |
| Total Current \[kA\] | 二极管总电流 | 文本 | 此处输入流过二极管及缓冲电路的总电流信号量测信号的标签，以#号开头，如#Is2 |
| Branch Voltage \[kV\] | 支路电压 | 文本 | 此处输入支路电压量测信号的标签，以#号开头，如#Vd |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 自动 |二极管阳极 |                   
| Pin - | 自动 |二极管阴极 |                   

## 使用说明



## 相关元件

[晶闸管](comp_newThyristor.html)、[IGBT](comp_newIGBT.html)
