---
title: 配电网传输线
author: AP
author_email: 631913616@qq.com

date: 2022/1/7 14:41:00
updated: 2018/12/4 10:03:10

type: components
category: 3004
order: 500

classname: DTranssmissionLine
symbol: DTranssmissionLine
---
## 基本描述

> **该元件采用π型集总参数模型建模配电网传输线。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入三相传输线的名称（可缺省） |
| Steady-state Frequency | Hz | 额定频率 | 实数（常量） | 输入额定频率 |
| Length of Line | km | 线路长度 | 实数（常量） | 输入线路长度$l$ |
| Parameter Format |  | 参数输入方式 | 选择 | 选择参数输入方式，标幺值和有名值两种 |
| PhaseOrSequence |  | 零序参数输入方法 | 选择 | 选择是否输入零序参数，若选择否，则零序参数与正序参数相同 |
| Has the Data Been Corrected for Long Line Effects? |  | 填入的线路参数是否已进行过长导线修正? | 选择 | 选择Yes或No，表示所填参数是否进行过长导线修正 |
| Model Type |  | 传输线模型种类 | 选择 | 选择传输线模型种类：Bergeron Line Model（贝格隆分布参数模型）或Lumped π-Model（π型集总参数模型）|

### Phase component-R, Xl, Xc (Ω)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Line Type |  | 线路类型 | 选择 | 选择线路类型，有A相、B相、C相、AB相、BC相、AC相和ABC相7种,当选择“Phase component”和“R, Xl, Xc (Ω)”时有效|
| Raa: Phase A Self Resistance| Ω/km | 单位长度A相自电阻 | 实数（常量） | 输入单位长度A相自电阻$R_aaPS$,当选择“Phase A Line”，“Phase AB Line”，“Phase AC Line”和“Phase ABC Line”时有效 |
| Rba: Phase B-A Mutual Resistance| Ω/km | 单位长度A-B相互电阻 | 实数（常量） | 输入单位长度A-B相互电阻$R_abPS$,当选择“Phase AB Line” 和 “Phase ABC Line”时有效 |
| Rbb: Phase B Self Resistance| Ω/km | 单位长度B相自电阻 | 实数（常量） | 输入单位长度B相自电阻$R_bbPS$,当选择“Phase B Line”，“Phase AB Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Rca: Phase C-A Mutual Resistance| Ω/km | 单位长度A-C相互电阻 | 实数（常量） | 输入单位长度A-C相互电阻$R_acPS$,当选择“Phase AC Line”和“Phase ABC Line”时有效 |
| Rcb: Phase C-B Mutual Resistance| Ω/km | 单位长度B-C相互电阻 | 实数（常量） | 输入单位长度B-C相互电阻$R_bcPS$,当选择“Phase BC Line”和“Phase ABC Line”时有效 |
| Rcc: Phase C Self Resistance| Ω/km | 单位长度C相自电阻 | 实数（常量） | 输入单位长度C相自电阻$R_ccPS$,当选择“Phase C Line”，“Phase AC Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Xaa: Phase A Self Reactance| Ω/km | 单位长度A相自电抗 | 实数（常量） | 输入单位长度A相自电抗$X_aaPS$,当选择“Phase A Line”，“Phase AB Line”，“Phase AC Line”和“Phase ABC Line”时有效 |
| Xba: Phase B-A Mutual Reactance| Ω/km | 单位长度A-B相互电抗 | 实数（常量） | 输入单位长度A-B相互电抗$X_abPS$,当选择“Phase AB Line” 和 “Phase ABC Line”时有效 |
| Xbb: Phase B Self Reactance| Ω/km | 单位长度B相自电抗 | 实数（常量） | 输入单位长度B相自电抗$X_bbPS$,当选择“Phase B Line”，“Phase AB Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Xca: Phase C-A Mutual Reactance| Ω/km | 单位长度A-C相互电抗 | 实数（常量） | 输入单位长度A-C相互电抗$X_acPS$,当选择“Phase AC Line”和“Phase ABC Line”时有效 |
| Xcb: Phase C-B Mutual Reactance| Ω/km | 单位长度B-C相互电抗 | 实数（常量） | 输入单位长度B-C相互电抗$X_bcPS$,当选择“Phase BC Line”和“Phase ABC Line”时有效 |
| Xcc: Phase C Self Resistance| Ω/km | 单位长度C相自电抗 | 实数（常量） | 输入单位长度C相自电抗$X_ccPS$,当选择“Phase C Line”，“Phase AC Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Caa: Phase A Self Reactance| Ω/km | 单位长度A相自容抗 | 实数（常量） | 输入单位长度A相自容抗$C_aaPS$,当选择“Phase A Line”，“Phase AB Line”，“Phase AC Line”和“Phase ABC Line”时有效 |
| Cba: Phase B-A Mutual Reactance| Ω/km | 单位长度A-B相互容抗 | 实数（常量） | 输入单位长度A-B相互容抗$C_abPS$,当选择“Phase AB Line” 和 “Phase ABC Line”时有效 |
| Cbb: Phase B Self Reactance| Ω/km | 单位长度B相自容抗 | 实数（常量） | 输入单位长度B相自容抗$C_bbPS$,当选择“Phase B Line”，“Phase AB Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Cca: Phase C-A Mutual Reactance| Ω/km | 单位长度A-C相互容抗 | 实数（常量） | 输入单位长度A-C相互容抗$C_acPS$,当选择“Phase AC Line”和“Phase ABC Line”时有效 |
| Ccb: Phase C-B Mutual Reactance| Ω/km | 单位长度B-C相互容抗 | 实数（常量） | 输入单位长度B-C相互容抗$C_bcPS$,当选择“Phase BC Line”和“Phase ABC Line”时有效 |
| Ccc: Phase C Self Resistance| Ω/km | 单位长度C相自容抗 | 实数（常量） | 输入单位长度C相自容抗$C_ccPS$,当选择“Phase C Line”，“Phase AC Line”，“Phase BC Line”和“Phase ABC Line”时有效 |

### Phase component-R, X, B (p.u.)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Voltage (L-L, RMS) | kV | 额定电压 | 实数（常量） | 输入额定电压（电压基值） |
| Rated Power Capacity | MVA | 额定容量 | 实数（常量） | 输入额定容量（容量基值） |
| Line Type |  | 线路类型 | 选择 | 选择线路类型，有A相、B相、C相、AB相、BC相、AC相和ABC相7种,当选择“Phase component”和“R, X, B (p.u.)”时有效| 
| Raa: Phase A Self Resistance| p.u./km | 单位长度A相自电阻 | 实数（常量） | 输入单位长度A相自电阻$R_{aa}PB$,当选择“Phase A Line”，“Phase AB Line”，“Phase AC Line”和“Phase ABC Line”时有效 |
| Rba: Phase B-A Mutual Resistance| p.u./km | 单位长度A-B相互电阻 | 实数（常量） | 输入单位长度A-B相互电阻$R_{ab}PB$,当选择“Phase AB Line” 和 “Phase ABC Line”时有效 |
| Rbb: Phase B Self Resistance| p.u./km | 单位长度B相自电阻 | 实数（常量） | 输入单位长度B相自电阻$R_{bb}PB$,当选择“Phase B Line”，“Phase AB Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Rca: Phase C-A Mutual Resistance| p.u./km | 单位长度A-C相互电阻 | 实数（常量） | 输入单位长度A-C相互电阻$R_{ac}PB$,当选择“Phase AC Line”和“Phase ABC Line”时有效 |
| Rcb: Phase C-B Mutual Resistance| p.u./km | 单位长度B-C相互电阻 | 实数（常量） | 输入单位长度B-C相互电阻$R_{bc}PB$,当选择“Phase BC Line”和“Phase ABC Line”时有效 |
| Rcc: Phase C Self Resistance| p.u./km | 单位长度C相自电阻 | 实数（常量） | 输入单位长度C相自电阻$R_{cc}PB$,当选择“Phase C Line”，“Phase AC Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Xaa: Phase A Self Reactance| p.u./km | 单位长度A相自电抗 | 实数（常量） | 输入单位长度A相自电抗$X_{aa}PB$,当选择“Phase A Line”，“Phase AB Line”，“Phase AC Line”和“Phase ABC Line”时有效 |
| Xba: Phase B-A Mutual Reactance| p.u./km | 单位长度A-B相互电抗 | 实数（常量） | 输入单位长度A-B相互电抗$X_{ab}PB$,当选择“Phase AB Line” 和 “Phase ABC Line”时有效 |
| Xbb: Phase B Self Reactance| p.u./km | 单位长度B相自电抗 | 实数（常量） | 输入单位长度B相自电抗$X_{bb}PB$,当选择“Phase B Line”，“Phase AB Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Xca: Phase C-A Mutual Reactance| p.u./km | 单位长度A-C相互电抗 | 实数（常量） | 输入单位长度A-C相互电抗$X_{ac}PB$,当选择“Phase AC Line”和“Phase ABC Line”时有效 |
| Xcb: Phase C-B Mutual Reactance| p.u./km | 单位长度B-C相互电抗 | 实数（常量） | 输入单位长度B-C相互电抗$X_{bc}PB$,当选择“Phase BC Line”和“Phase ABC Line”时有效 |
| Xcc: Phase C Self Resistance| p.u./km | 单位长度C相自电抗 | 实数（常量） | 输入单位长度C相自电抗$X_{cc}PB$,当选择“Phase C Line”，“Phase AC Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Caa: Phase A Self Reactance| p.u./km | 单位长度A相自电纳 | 实数（常量） | 输入单位长度A相自电纳$C_{aa}PB$,当选择“Phase A Line”，“Phase AB Line”，“Phase AC Line”和“Phase ABC Line”时有效 |
| Cba: Phase B-A Mutual Reactance| p.u./km | 单位长度A-B相互电纳 | 实数（常量） | 输入单位长度A-B相互电纳$C_{ab}PB$,当选择“Phase AB Line” 和 “Phase ABC Line”时有效 |
| Cbb: Phase B Self Reactance| p.u./km | 单位长度B相自电纳 | 实数（常量） | 输入单位长度B相自电纳$C_{bb}PB$,当选择“Phase B Line”，“Phase AB Line”，“Phase BC Line”和“Phase ABC Line”时有效 |
| Cca: Phase C-A Mutual Reactance| p.u./km | 单位长度A-C相互电纳 | 实数（常量） | 输入单位长度A-C相互电纳$C_{ac}PB$,当选择“Phase AC Line”和“Phase ABC Line”时有效 |
| Ccb: Phase C-B Mutual Reactance| p.u./km | 单位长度B-C相互电纳 | 实数（常量） | 输入单位长度B-C相互电纳$C_{bc}PB$,当选择“Phase BC Line”和“Phase ABC Line”时有效 |
| Ccc: Phase C Self Resistance| p.u./km | 单位长度C相自电纳 | 实数（常量） | 输入单位长度C相自电纳$C_{cc}PB$,当选择“Phase C Line”，“Phase AC Line”，“Phase BC Line”和“Phase ABC Line”时有效 |

### Sequence component-R, X, B (p.u.)
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Rated Voltage (L-L, RMS) | kV | 额定电压 | 实数（常量） | 输入额定电压（电压基值） |
| Rated Power Capacity | MVA | 额定容量 | 实数（常量） | 输入额定容量（容量基值） |
| +/- Seq. Resistance | p.u./km | 单位长度正序电阻 | 实数（常量） | 输入单位长度正序电阻标幺值$R_1SB$ |
| +/- Seq. Inductive Reactance | p.u./km | 单位长度正序电抗 | 实数（常量） | 输入单位长度正序电抗标幺值$X_1SB$ |
| +/- Seq. Capacitive Susceptance | p.u./km | 单位长度正序电纳 | 实数（常量） | 输入单位长度正序电纳标幺值$B_1SB$ |
| 0 Seq. Resistance | p.u./km | 单位长度零序电阻 | 实数（常量） | 输入单位长度零序电阻标幺值$R_01SB$ |
| 0 Seq. Inductive Reactance | p.u./km | 单位长度零序电抗 | 实数（常量） | 输入单位长度零序电抗标幺值$X_0SB$ |
| 0 Seq. Capacitive Susceptance | p.u./km | 单位长度零序电纳 | 实数（常量） | 输入单位长度零序电纳标幺值$B_0SB$|

### Sequence component-R, X, B (Ω))
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| +/- Seq. Resistance | Ω/km | 单位长度正序电阻 | 实数（常量） | 输入单位长度正序电阻有名值$R11SS$ |
| +/- Seq. Inductive Reactance | Ω/km | 单位长度正序感抗 | 实数（常量） | 输入单位长度正序串联电抗有名值$X11SS$ |
| +/- Seq. Capacitive Reactance | MΩ*km | 单位长度正序容抗 | 实数（常量） | 输入单位长度正序并联容抗有名值$B11SS$ |
| 0 Seq. Resistance | Ω/km | 单位长度零序电阻 | 实数（常量） | 输入单位长度零序电阻有名值$R00SS$ |
| 0 Seq. Inductive Reactance | Ω/km | 单位长度零序感抗 | 实数（常量） | 输入单位长度零序串联电抗有名值$X00SS$ |
| 0 Seq. Capacitive Reactance | MΩ*km | 单位长度零序容抗 | 实数（常量） | 输入单位长度零序并联容抗有名值$B00SS$ |

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
   ::: fail
   1. **TLine-XXX Error:** +/- Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead. 
   2. **TLine-XXX Error:** 0 Seq. Travel Time is less than the integration time step. Decrease the time step or use Lumped π-Model instead. 
   :::
3. 不具备线路长度信息时，可填写线路长度为**1km**，线路参数输入时填写**集总参数**，“Has the Data Been Corrected for Long Line Effects?”一项选择**Yes**。
4. 请确认所填入的参数是否已经经过了长导线修正。若选择**No**，同时选择了**Lumped π-Model/π型集总参数模型**，则CloudPSS会对采用如下方式对集总参数进行修正。
   >   $$\begin{aligned}
  {Z_m} &= Z\frac{ {\sinh \left( {\gamma l} \right)} }{ {\gamma l} } \\
  {Y_m} &= Y\frac{ {\tanh \left( {\gamma l/2} \right)} }{ {\gamma l/2} } 
\end{aligned}$$

 
## 相关元件


