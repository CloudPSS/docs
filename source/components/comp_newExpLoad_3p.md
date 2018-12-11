---
title: 静态负载
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
## 基本描述
{% compsymbol newExpLoad %}

> **该元件用以建模指数型三相静态负载（单线图），其基本表达式如下。**
> $$\begin{gathered}
  P = {P_N}{\left( {\frac{V}{ { {V_N} } } } \right)^{NP} }\left( {1 + {K_{PF}}\Delta f} \right) \\
  Q = {Q_N}{\left( {\frac{V}{ { {V_N} } } } \right)^{NQ} }\left( {1 + {K_{QF}}\Delta f} \right) \\ 
\end{gathered}$$

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入静态负载的名称（可缺省） |
| Rated Voltage (L-L, RMS) | kV | 线电压有效值 | 实数（常量） | 标称负载线电压有效值$V_N$ |
| Rated Frequency | Hz | 额定频率 | 实数（常量） | 额定频率$f_N$ |
| Rated Active Power (3 Phase) | MW | 额定有功功率 | 实数（常量） | 额定有功功率$P_N$ |
| Rated Reactive Power (3 Phase) | MVar | 额定无功功率，感性负荷为正 | 实数（常量） | 额定无功功率$Q_N$ |
| Voltage Index for P |  | 有功功率-电压指数 | 实数（常量） | 有功功率-电压指数$NP$ |
| Voltage Index for Q |  | 无功功率-电压指数 | 实数（常量） | 无功功率-电压指数$NQ$ |
| Freq Index for P |  | 有功功率-频率系数 | 实数（常量） |  有功功率-频率系数$K_{PF}$ |
| Freq Index for Q |  | 无功功率-频率系数 | 实数（常量） | 无功功率-频率系数$K_{QF}$ |

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
| Pin + | 3×1 |静态负载接线端 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了静态负载的典型应用。

## 相关元件


