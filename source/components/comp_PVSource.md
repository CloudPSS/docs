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

## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 名称 | 文本 |  |
| <span id="comp_params_param_Nms">Number of Modules Connected in Series per Array</span> |  | 阵列串联模块数 | 实数 |  |
| <span id="comp_params_param_Nmp">Number of Modules String in Parallel per Array</span> |  | 阵列并联模块数 | 实数 |  |
| <span id="comp_params_param_Ncs">Number of cells Connected in Series per Module</span> |  | 模组串联单元数 | 实数 |  |
| <span id="comp_params_param_Ncp">Number of cells String in Parallel per Module</span> |  | 模组块并联单元数 | 实数 |  |
| <span id="comp_params_param_Irra">Reference Irradiation</span> | W/m^2 | 参考辐照度 | 实数 |  |
| <span id="comp_params_param_T">Reference Temperature</span> | °C | 参考温度 | 实数 |  |

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
| <span id="comp_params_param_Area">Effective Area</span> | m^2 | 有效面积 | 实数 |  |
| <span id="comp_params_param_Rse">Series Resistance</span> | Ω | 串联电阻 | 实数 |  |
| <span id="comp_params_param_Rsh">Shunt Resistance</span> | Ω | 分流电阻 | 实数 |  |
| <span id="comp_params_param_Fd">Diode Ideality Factor</span> |  | 二极管理想因子 | 实数 |  |
| <span id="comp_params_param_Ebg">Band Gap Energy</span> | eV | 材料带隙能量 | 实数 |  |
| <span id="comp_params_param_Isat">Saturation Current</span> | kA | 饱和电流 | 实数 |  |
| <span id="comp_params_param_Isc">Short Circuit Current</span> | kA | 短路电流 | 实数 |  |
| <span id="comp_params_param_Ktc">Temperature Coefficient of Photo Current</span> | A/K | 光电流温度系数 | 实数 |  |

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
| <span id="comp_params_param_Ip">Photo Curent per Module \[kA\]</span> | 模组光电流 | 文本 |  |
| <span id="comp_params_param_Imd">Internal Diode Current \[kA\]</span> | 模组内部二极管电流 | 文本 |  |
| <span id="comp_params_param_Vmd">Internal Diode Voltage \[kV\]</span> | 模组内部二极管电压 | 文本 |  |
| <span id="comp_params_param_Ploss">Internal Power Loss per Module \[MW\]</span> | 模组内部功耗 | 文本 |  |
| <span id="comp_params_param_Pout">Output Power per Module \[MW\]</span> | 模组输出功率 | 文本 |  |
| <span id="comp_params_param_Vout">PV Array Output Voltage \[kV\]</span> | 光伏阵列输出电压 | 文本 |  |
| <span id="comp_params_param_Iout">PV Array Output Current \[kV\]</span> | 光伏阵列输出电流 | 文本 |  |

[Photo Curent per Module \[kA\]]: #comp_params_param_Ip "Photo Curent per Module \[kA\]"
[Internal Diode Current \[kA\]]: #comp_params_param_Imd "Internal Diode Current \[kA\]"
[Internal Diode Voltage \[kV\]]: #comp_params_param_Vmd "Internal Diode Voltage \[kV\]"
[Internal Power Loss per Module \[MW\]]: #comp_params_param_Ploss "Internal Power Loss per Module \[MW\]"
[Output Power per Module \[MW\]]: #comp_params_param_Pout "Output Power per Module \[MW\]"
[PV Array Output Voltage \[kV\]]: #comp_params_param_Vout "PV Array Output Voltage \[kV\]"
[PV Array Output Current \[kV\]]: #comp_params_param_Iout "PV Array Output Current \[kV\]"


## <span id="comp_remarks">参数说明</span>


## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了光伏电池单元的典型应用。

## <span id="comp_seealso">相关元件</span>

## <span id="comp_ref">参考文献</span>



