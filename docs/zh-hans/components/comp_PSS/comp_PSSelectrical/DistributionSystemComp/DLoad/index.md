---
title: 配电网静态负载
author: AP
author_email: 631913616@qq.com

date: 2022/1/7 14:41:00
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 200

classname: DLoad
symbol: DLoad
---
## 基本描述


> **该元件用以建模指数型配电网静态负载（单线图），其基本表达式如下。**
> $$\begin{gathered}
  P = {P_N}{\left( {\frac{V}{ { {V_N} } } } \right)^{NP} }\left( {1 + {K_{PF} }\Delta f} \right) \\
  Q = {Q_N}{\left( {\frac{V}{ { {V_N} } } } \right)^{NQ} }\left( {1 + {K_{QF} }\Delta f} \right) \\ 
\end{gathered}$$

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入静态负载的名称（可缺省） |
| Rated Voltage (L-L, RMS) | kV | 线电压有效值 | 实数（常量） | 标称负载线电压有效值$V_N$ |
| Rated Frequency | Hz | 额定频率 | 实数（常量） | 额定频率$f_N$ |
| Voltage Index for P |  | 有功功率-电压指数 | 实数（常量） | 有功功率-电压指数$NP$ |
| Voltage Index for Q |  | 无功功率-电压指数 | 实数（常量） | 无功功率-电压指数$NQ$ |
| Freq Index for P |  | 有功功率-频率系数 | 实数（常量） |  有功功率-频率系数$K_{PF}$ |
| Freq Index for Q |  | 无功功率-频率系数 | 实数（常量） | 无功功率-频率系数$K_{QF}$ |
| Initial Voltage |  | 初始电压幅值，由潮流计算决定 | 实数（常量） | 初始电压幅值，可以由潮流程序修改，与其相连的母线电压一致。 |
| Connection Type |  | 连接类型 | 选择 | 有“Wye” 和 “Delta”两种 |

### Wye
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Load Type_Wye|  | 连接类型 | 选择 | 有A相，B相，C相，A相B相，B相C相，A相C相和A相B相C相7种,当“Connection Type”选择“Wye”时有效 |
| Phase A Active Power | kW | A相有功功率 | 实数（常量） |  A相有功功率$P_a$,当Load Type_Wye选择“Phase A Load”， “Phase AB Load”，“Phase AC Load”和“Phase ABC Load”时有效|
| Phase A Reactive Power | kVar | A相无功功率 | 实数（常量） |  A相无功功率$Q_a$,当Load Type_Wye选择“Phase A Load”， “Phase AB Load”，“Phase AC Load”和“Phase ABC Load”时有效 |
| Phase B Active Power | kW | B相有功功率 | 实数（常量） |  B相有功功率$P_b$,当Load Type_Wye选择“Phase B Load”， “Phase AB Load”，“Phase BC Load”和“Phase ABC Load”时有效 |
| Phase B Reactive Power | kVar | B相无功功率 | 实数（常量） |  B相无功功率$Q_b$,当Load Type_Wye选择“Phase B Load”， “Phase AB Load”，“Phase BC Load”和“Phase ABC Load”时有效 |
| Phase C Active Power | kW | C相有功功率 | 实数（常量） |  C相有功功率$P_c$,当Load Type_Wye选择“Phase C Load”， “Phase AC Load”，“Phase BC Load”和“Phase ABC Load”时有效 |
| Phase C Reactive Power | kVar | C相无功功率 | 实数（常量） |  C相无功功率$Q_c$,当Load Type_Wye选择“Phase C Load”， “Phase AC Load”，“Phase BC Load”和“Phase ABC Load”时有效 |

### Delta
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Load Type_Delta|  | 连接类型 | 选择 | 有AB相，BC相，AC相，AB-BC相，BC-AC相，AB-AC相，AB-BC-AC7种,当“Connection Type”选择“Delta”时有效 |
| Phase AB Active Power | kW | AB相有功功率 | 实数（常量） |  AB相有功功率$P_ab$,当Load Type_Delta选择“Phase AB Load”， “Phase ABBC Load”，“Phase ABCA Load”和“Phase ABBCCA Load”时有效|
| Phase AB Reactive Power | kVar | AB相无功功率 | 实数（常量） |  AB相无功功率$Q_ab$,当Load Type_Delta选择“Phase AB Load”， “Phase ABBC Load”，“Phase ABCA Load”和“Phase ABBCCA Load”时有效|
| Phase BC Active Power | kW | BC相有功功率 | 实数（常量） |  BC相有功功率$P_bc$,当Load Type_Delta选择“Phase BC Load”， “Phase ABBC Load”，“Phase BCCA Load”和“Phase ABBCCA Load”时有效 |
| Phase BC Reactive Power | kVar | BC相无功功率 | 实数（常量） |  BC相无功功率$Q_bc$,当Load Type_Delta选择“Phase BC Load”， “Phase ABBC Load”，“Phase BCCA Load”和“Phase ABBCCA Load”时有效 |
| Phase CA Active Power | kW | AC相有功功率 | 实数（常量） |  AC相有功功率$P_ac$,当Load Type_Delta选择“Phase CA Load”， “Phase  BCCA Load”，“Phase ABCA Load”和“Phase ABBCCA Load”时有效 |
| Phase CA Reactive Power| kVar | AC相无功功率 | 实数（常量） |  AC相无功功率$Q_ac$,当Load Type_Delta选择“Phase CA Load”， “Phase  BCCA Load”，“Phase ABCA Load”和“Phase ABBCCA Load”时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Current Vector \[kA\] | 三相电流 | 文本 | 此处输入静态负载电流量测信号的标签（3×1维），以#号开头，如#Iabc |
| RMS Current \[kA\] | 电流均方根值 | 文本 | 此处输入静态负载电流有效值量测信号的标签（1×1维），以#号开头，如#Irms |
| Active Power \[MW\] | 有功功率 | 文本 | 此处输入静态负载有功功率量测信号的标签（1×1维），以#号开头，如#P |
| Reactive Power \[MVar\] | 无功功率 | 文本 | 此处输入静态负载无功功率量测信号的标签（1×1维），以#号开头，如#Q |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 |配电网负载接线端 |

## 使用说明



## 相关元件


