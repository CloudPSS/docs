---
title: 配电网并联电容/电抗器
author: AP
author_email: 631913616@qq.com

date: 2022/1/7 14:41:00
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 200

classname: DShunt
symbol: DShunt
---
## 基本描述


> **该元件用以建模配电网并联电容/电抗器（单线图）。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入并联电容/电抗器的名称（可缺省） |
| Rated Frequency | Hz | 额定频率 | 实数（常量） | 此处输入额定频率$f_N$ |
| Connection Type |  | 连接类型 | 选择 | 此处输入元件连接类型，有“Wye” 和 “Delta”连接两种 |

### Wye
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| ShuntType_wye |  | 连接类型 | 选择 | 有A相，B相，C相，A相B相，B相C相，A相C相和A相B相C相7种,当“Connection Type”选择“Wye”时有效 |
| Phase A Input Capacity | kVar | A相投入容量 | 实数（常量） |  A相投入容量$S_a$,当“ShuntType_wye”选择“Phase A Shunt”， “Phase AB Shunt”，“Phase AC Shunt”和“Phase ABC Shunt”时有效 |
| Phase A Rated Voltage | kV | A相额定电压有效值 | 实数（常量） |  A相额定电压有效值$V_a$,当“ShuntType_wye”选择“Phase A Shunt”， “Phase AB Shunt”，“Phase AC Shunt”和“Phase ABC Shunt”时有效 |
| Phase B Input Capacity | kVar | B相投入容量 | 实数（常量） |  B相投入容量$S_b$,,当“ShuntType_wye”选择“Phase B Shunt”， “Phase AB Shunt”，“Phase BC Shunt”和“Phase ABC Shunt”时有效 |
| Phase B Rated Voltage | kV | B相额定电压有效值 | 实数（常量） |  B相额定电压有效值$V_b$,当“ShuntType_wye”选择“Phase B Shunt”， “Phase AB Shunt”，“Phase BC Shunt”和“Phase ABC Shunt”时有效 |
| Phase C Input Capacity | kVar | C相投入容量 | 实数（常量） |  C相投入容量$S_c$,当“ShuntType_wye”选择“Phase C Shunt”， “Phase AC Shunt”，“Phase BC Shunt”和“Phase ABC Shunt”时有效 |
| Phase C Rated Voltage | kV | C相额定电压有效值 | 实数（常量） |  C相额定电压有效值$V_c$,当“ShuntType_wye”选择“Phase C Shunt”， “Phase AC Shunt”，“Phase BC Shunt”和“Phase ABC Shunt”时有效 |

### Delta
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| ShuntType_Delta|  | 连接类型 | 选择 | 有AB相，BC相，AC相，AB-BC相，BC-AC相，AB-AC相，AB-BC-AC7种,当“Connection Type”选择“Delta”时有效 |
| Phase AB Input Capacity | kVar | AB相投入容量 | 实数（常量） |  AB相投入容量$S_{ab}$,当“ShuntType_Delta”选择“Phase AB Shunt”， “Phase ABBC Shunt”，“Phase ABCA Shunt”和“Phase ABBCCA Shunt”时有效|
| Phase AB Rated Voltage | kV | AB相额定电压有效值 | 实数（常量） |  AB相额定电压有效值$V_{ab}$,当“ShuntType_Delta”选择“Phase AB Shunt”， “Phase ABBC Shunt”，“Phase ABCA Shunt”和“Phase ABBCCA Shunt”时有效|
| Phase BC Input Capacity | kVar | BC相投入容量 | 实数（常量） |  BC相投入容量$S_{bc}$,,当“ShuntType_Delta”选择“Phase BC Shunt”， “Phase ABBC Shunt”，“Phase BCCA Shunt”和“Phase ABBCCA Shunt”时有效 |
| Phase BC Rated Voltage | kV | BC相额定电压有效值 | 实数（常量） |  BC相额定电压有效值$V_{bc}$,当“ShuntType_Delta”选择“Phase BC Shunt”， “Phase ABBC Shunt”，“Phase BCCA Shunt”和“Phase ABBCCA Shunt”时有效 |
| Phase CA Input Capacity | kVar | AC相投入容量 | 实数（常量） |  AC相投入容量$S_{ac}$,当“ShuntType_Delta”选择“Phase CA Shunt”， “Phase  BCCA Shunt”，“Phase ABCA Shunt”和“Phase ABBCCA Shunt”时有效 |
| Phase CA Rated Voltage | kV | AC相额定电压有效值 | 实数（常量） |  AC相额定电压有效值$V_{ac}$,当“ShuntType_Delta”选择“Phase CA Shunt”， “Phase  BCCA Shunt”，“Phase ABCA Shunt”和“Phase ABBCCA Shunt”时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Current Vector \[kA\] | 三相电流 | 文本 |此处输入并联电容/电抗器三相电流量测信号的标签（3×1维），以#号开头，如#Iabc  |
| RMS Current \[kA\] | 电流均方根值 | 文本 |此处输入并联电容/电抗器电流有效值量测信号的标签（1×1维），以#号开头，如#Irms  |
| Active Power \[MW\] | 有功功率 | 文本 | 此处输入并联电容/电抗器有功功率量测信号的标签（1×1维），以#号开头，如#P |
| Reactive Power \[MVar\] | 无功功率 | 文本 | 此处输入并联电容/电抗器无功功率量测信号的标签（1×1维），以#号开头，如#Q |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 |并联电容/电抗器的接线端口 |

## 使用说明



## 相关元件


