---
title: 光伏电池单元
date: 2018/8/1 14:40:44
type: components
classname: _PVSource
symbol: PVSource
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件用以模拟光伏电源，可通过Configuration/Number of Modules Connected in Series per Array，Number of Modules String in Parallel per Array，Number of cells Connected in Series per Module，Number of cells String in Parallel per Module将其配置为光伏阵列，如下图所示。
- 该元件假定构成光伏阵列的所有光伏单元特性都相同。
- 具有两个输入控制引脚
  G：光伏单元的瞬时辐照强度(W/m^2)。
  T：光伏单元的瞬时温度(°C)。

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 名称 | 文本 | 此处输入光伏电池单元的名称 |
| <span id="comp_params_param_Nms">Number of Modules Connected in Series per Array</span> |  | 阵列串联模块数 | 实数 | 光伏阵列串联模块数M |
| <span id="comp_params_param_Nmp">Number of Modules String in Parallel per Array</span> |  | 阵列并联模块数 | 实数 | 光伏阵列并联模块数N |
| <span id="comp_params_param_Ncs">Number of cells Connected in Series per Module</span> |  | 模组串联单元数 | 实数 | 模块内部串联单元数m |
| <span id="comp_params_param_Ncp">Number of cells String in Parallel per Module</span> |  | 模组块并联单元数 | 实数 | 模块内部并联单元数n |
| <span id="comp_params_param_Irra">Reference Irradiation</span> | W/m^2 | 参考辐照度 | 实数 | 光伏阵列的参考辐照度 |
| <span id="comp_params_param_T">Reference Temperature</span> | °C | 参考温度 | 实数 | 光伏阵列的参考温度 |

[Name]: #comp_params_param_Name "Name"
[Number of Modules Connected in Series per Array]: #comp_params_param_Nms "Number of Modules Connected in Series per Array"
[Number of Modules String in Parallel per Array]: #comp_params_param_Nmp "Number of Modules String in Parallel per Array"
[Number of cells Connected in Series per Module]: #comp_params_param_Ncs "Number of cells Connected in Series per Module"
[Number of cells String in Parallel per Module]: #comp_params_param_Ncp "Number of cells String in Parallel per Module"
[Reference Irradiation]: #comp_params_param_Irra "Reference Irradiation"
[Reference Temperature]: #comp_params_param_T "Reference Temperature"

### <span id="comp_params_group_PVCellParameter">PV Cell Parameter</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Area">Effective Area</span> | m^2 | 有效面积 | 实数 | 光照有效面积 |
| <span id="comp_params_param_Rse">Series Resistance</span> | Ω | 串联电阻 | 实数 | 串联电阻$R_{sr}$ |
| <span id="comp_params_param_Rsh">Shunt Resistance</span> | Ω | 分流电阻 | 实数 | 并联分流电阻$R_{sh}$ |
| <span id="comp_params_param_Fd">Diode Ideality Factor</span> |  | 二极管理想因子 | 实数 | 二极管理想因子$n$ |
| <span id="comp_params_param_Ebg">Band Gap Energy</span> | eV | 材料带隙能量 | 实数 | 材料带隙能量$e_g$ |
| <span id="comp_params_param_Isat">Saturation Current</span> | kA | 饱和电流 | 实数 | 饱和电流$I_{0R}$ |
| <span id="comp_params_param_Isc">Short Circuit Current</span> | kA | 短路电流 | 实数 | 短路电流$I_{scR}$ |
| <span id="comp_params_param_Ktc">Temperature Coefficient of Photo Current</span> | A/K | 光电流温度系数 | 实数 | 光电流温度系数$α_T$ |

[Effective Area]: #comp_params_param_Area "Effective Area"
[Series Resistance]: #comp_params_param_Rse "Series Resistance"
[Shunt Resistance]: #comp_params_param_Rsh "Shunt Resistance"
[Diode Ideality Factor]: #comp_params_param_Fd "Diode Ideality Factor"
[Band Gap Energy]: #comp_params_param_Ebg "Band Gap Energy"
[Saturation Current]: #comp_params_param_Isat "Saturation Current"
[Short Circuit Current]: #comp_params_param_Isc "Short Circuit Current"
[Temperature Coefficient of Photo Current]: #comp_params_param_Ktc "Temperature Coefficient of Photo Current"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Ip">Photo Curent per Module \[kA\]</span> | 模组光电流 | 文本 | 此处输入每个模块光电流信号标签，以#号开头，如#Imp。 |
| <span id="comp_params_param_Imd">Internal Diode Current \[kA\]</span> | 模组内部二极管电流 | 文本 | 此处输入每个模块内部二极管电流信号标签，以#号开头，如#Id。 |
| <span id="comp_params_param_Vmd">Internal Diode Voltage \[kV\]</span> | 模组内部二极管电压 | 文本 | 此处输入每个模块内部二极管电压信号标签，以#号开头，如#Vd。 |
| <span id="comp_params_param_Ploss">Internal Power Loss per Module \[MW\]</span> | 模组内部功耗 | 文本 | 此处输入每个模块内部功耗的标签，以#号开头，如#Ploss。 |
| <span id="comp_params_param_Pout">Output Power per Module \[MW\]</span> | 模组输出功率 | 文本 | 此处输入每个模块输出功率标签，以#号开头，如#Po。 |
| <span id="comp_params_param_Vout">PV Array Output Voltage \[kV\]</span> | 光伏阵列输出电压 | 文本 | 此处输入光伏阵列输出电压信号标签，以#号开头，如#Vo。 |
| <span id="comp_params_param_Iout">PV Array Output Current \[kV\]</span> | 光伏阵列输出电流 | 文本 | 此处输入光伏阵列输出电流信号标签，以#号开头，如#Io。 |

[Photo Curent per Module \[kA\]]: #comp_params_param_Ip "Photo Curent per Module \[kA\]"
[Internal Diode Current \[kA\]]: #comp_params_param_Imd "Internal Diode Current \[kA\]"
[Internal Diode Voltage \[kV\]]: #comp_params_param_Vmd "Internal Diode Voltage \[kV\]"
[Internal Power Loss per Module \[MW\]]: #comp_params_param_Ploss "Internal Power Loss per Module \[MW\]"
[Output Power per Module \[MW\]]: #comp_params_param_Pout "Output Power per Module \[MW\]"
[PV Array Output Voltage \[kV\]]: #comp_params_param_Vout "PV Array Output Voltage \[kV\]"
[PV Array Output Current \[kV\]]: #comp_params_param_Iout "PV Array Output Current \[kV\]"


## <span id="comp_remarks">参数说明</span>
### [A] 光伏单元参数
根据光伏电源的建模参考文献[1,2]，其等效电路为：
  ![等效电路]()
可得出如下方程式：
  $$\begin{array}{l}
I = {I_g} - {I_d} - {I_{sh} }\\
{\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt} {\kern 1pt}  = {I_g} - {I_0}\left[ {\exp \left( {\frac{ {V + I{R_{sr} } } }{ {nk{T_C}/q} } } \right) - 1} \right] - \left( {\frac{ {V + I{R_{sr} } } }{ { {R_{sh} } } } } \right)\\
{I_g} = {I_{scR} }\frac{G}{ { {G_R} } }\left[ {1 + {\alpha _T}\left( { {T_C} - {T_{CR} } } \right)} \right]\\
{I_0} = {I_{0R} }\left( {\frac{ {T_C^3} }{ {T_{CR}^3} } } \right)\exp \left[ {\left( {\frac{1}{ { {T_{CR} } } } - \frac{1}{ { {T_C} } } } \right)\frac{ {q{e_g} } }{ {nk} } } \right]
\end{array}$$
  式中：$V$、$I$为光伏电源输出电压、电流，$I_{scR}$为短路电流，${G}$、${G_R}$为辐照强度实际值及参考值，${T_C}$，${T_{CR} }$为温度实际值及参考值，$R_{sr}$、$R_{sh}$为串联电阻、分流电阻，$I_{0R}$为饱和电流，$α_T$为光电流温度系数，$e_g$为材料带隙能量，$n$为二极管理想因子，$q$为电荷常数，$k$为Boltzmann常数。

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了光伏电池单元的典型应用。

## <span id="comp_seealso">相关元件</span>
[< MPPT>](<test link>)

## <span id="comp_ref">参考文献</span>
[1] Shengyi Liu and Roger A. Dougal, Dynamic Multiphysics Model for Solar Array, IEEE Transactions on Energy Conversion, Vol. 17(2), June 2002.

[2] 苏建徽, 余世杰, 赵为,等. 硅太阳电池工程用数学模型[J]. 太阳能学报, 2001, 22(4):409-412.


