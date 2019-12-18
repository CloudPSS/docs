---
title: 三相传输线
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 400

classname: TranssmissionLineRouter
symbol: TLine_3p
---
## 基本描述
{% compsymbol TLine_3p %}

> **该元件采用π型集总参数模型和Begeron分布参数模型建模三相传输线。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入三相传输线的名称（可缺省） |
| Steady-state Frequency | Hz | 额定频率 | 实数（常量） | 输入额定频率 |
| Length of Line | km | 线路长度 | 实数（常量） | 输入线路长度$l$ |
| Parameter Format |  | 参数输入方式 | 选择 | 选择参数输入方式，标幺值和有名值两种 |
| 0 Seq. Data |  | 零序参数输入方法 | 选择 | 选择是否输入零序参数，若选择否，则零序参数与正序参数相同 |
| Has the Data Been Corrected for Long Line Effects? |  | 填入的线路参数是否已进行过长导线修正? | 选择 | 选择Yes或No，表示所填参数是否进行过长导线修正 |
| Model Type |  | 传输线模型种类 | 选择 | 选择传输线模型种类：Bergeron Line Model（贝格隆分布参数模型）或Lumped π-Model（π型集总参数模型）|

### R, X, B (p.u.)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Voltage (L-L, RMS) | kV | 额定电压 | 实数（常量） | 输入额定电压（电压基值） |
| Rated Power Capacity | MVA | 额定容量 | 实数（常量） | 输入额定容量（容量基值） |
| +/- Seq. Resistance | p.u./km | 单位长度正序电阻 | 实数（常量） | 输入单位长度正序电阻标幺值$R_1$ |
| +/- Seq. Inductive Reactance | p.u./km | 单位长度正序电抗 | 实数（常量） | 输入单位长度正序电抗标幺值$X_1$ |
| +/- Seq. Capacitive Susceptance | p.u./km | 单位长度正序电纳 | 实数（常量） | 输入单位长度正序电纳标幺值$B_1$ |
| 0 Seq. Resistance | p.u./km | 单位长度零序电阻 | 实数（常量） | 输入单位长度零序电阻标幺值$R_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Inductive Reactance | p.u./km | 单位长度零序电抗 | 实数（常量） | 输入单位长度零序电抗标幺值$X_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Capacitive Susceptance | p.u./km | 单位长度零序电纳 | 实数（常量） | 输入单位长度零序电纳标幺值$B_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |

### R, Xl, Xc (Ω)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| +/- Seq. Resistance | Ω/km | 单位长度正序电阻 | 实数（常量） | 输入单位长度正序电阻有名值$R_1$ |
| +/- Seq. Inductive Reactance | Ω/km | 单位长度正序感抗 | 实数（常量） | 输入单位长度正序串联电抗有名值$X_{l1}$ |
| +/- Seq. Capacitive Reactance | MΩ*km | 单位长度正序容抗 | 实数（常量） | 输入单位长度正序并联容抗有名值$X_{c1}$ |
| 0 Seq. Resistance | Ω/km | 单位长度零序电阻 | 实数（常量） | 输入单位长度零序电阻有名值$R_0$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Inductive Reactance | Ω/km | 单位长度零序感抗 | 实数（常量） | 输入单位长度零序串联电抗有名值$X_{l0}$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |
| 0 Seq. Capacitive Reactance | MΩ*km | 单位长度零序容抗 | 实数（常量） | 输入单位长度零序并联容抗有名值$X_{c0}$，仅当选择“Enter 0 Seq. Data”（输入零序参数）时有效 |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Current Vector (Sending Terminal) \[kA\] | 送端电流向量 | 文本 | 此处输入传输线送端电流量测信号的标签（3×1维），以#号开头，如#Isabc |
| 3 Phase Current Vector (Receiving Terminal) \[kA\] | 受端电流向量 | 文本 | 此处输入传输线受端电流量测信号的标签（3×1维），以#号开头，如#Irabc |
| RMS Current (Sending Terminal) \[kA\] | 送端电流均方根值 | 文本 | 此处输入传输线送端电流有效值量测信号的标签（1×1维），以#号开头，如#Isrms |
| RMS Current (Receiving Terminal) \[kA\] | 受端电流均方根值 | 文本 | 此处输入传输线受端电流有效值量测信号的标签（1×1维），以#号开头，如#Irrms |
| Active Power (Sending Terminal) \[MW\] | 送端有功功率 | 文本 | 此处输入传输线送端有功功率量测信号的标签（1×1维），以#号开头，如#Ps |
| Reactive Power (Sending Terminal) \[MVar\] | 送端无功功率 | 文本 | 此处输入传输线送端无功功率量测信号的标签（1×1维），以#号开头，如#Qs |
| Active Power (Receiving Terminal) \[MW\] | 受端有功功率 | 文本 | 此处输入传输线受端有功功率量测信号的标签（1×1维），以#号开头，如#Pr |
| Reactive Power (Receiving Terminal) \[MVar\] | 受端无功功率 | 文本 | 此处输入传输线受端无功功率量测信号的标签（1×1维），以#号开头，如#Qr |
| Active Power Losses \[MW\] | 有功功率线路损耗 | 文本 | 此处输入传输线有功功率损耗量测信号的标签（1×1维），以#号开头，如#Ploss |
| Reactive Power Losses \[MVar\] | 无功功率线路损耗 | 文本 | 此处输入传输线无功功率损耗量测信号的标签（1×1维），以#号开头，如#Qloss |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Sending (i) Pin | 3×1 | 送端连接端口 |
| Receiving (j) Pin | 3×1 | 受端连接端口 |

## 使用说明

1. 建议在具备线路长度信息的情况下优先选用Bergeron分布参数模型。该模型支持分网并行计算，可极大地提升仿真计算效率。
2. 选择Bergeron模型报如下错误时，说明线路长度不足，应切换为**Lumped π-Model/π型集总参数模型**。
   {% pullquote fail %}
   1. **TLine-XXX Error:** +/- Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead. 
   2. **TLine-XXX Error:** 0 Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead. 
   {% endpullquote %}
3. 不具备线路长度信息时，可填写线路长度为**1km**，线路参数输入时填写**集总参数**，“Has the Data Been Corrected for Long Line Effects?”一项选择**Yes**。
4. 请确认所填入的参数是否已经经过了长导线修正。若选择**No**，同时选择了**Lumped π-Model/π型集总参数模型**，则CloudPSS会对采用如下方式对集总参数进行修正。
   >   $$\begin{aligned}
  {Z_m} &= Z\frac{ {\sinh \left( {\gamma l} \right)} }{ {\gamma l} } \\
  {Y_m} &= Y\frac{ {\tanh \left( {\gamma l/2} \right)} }{ {\gamma l/2} } 
\end{aligned}$$

 
## 相关元件


