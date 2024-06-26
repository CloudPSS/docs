<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### Configuration

Configuration

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Name | `Name` | 文本 | 元件名称 |
| Total number of ports | `Nc` | 整数 | 端口数量，需和Y或Z矩阵保持一致。 |
| Reference port | `gnd` | 选择 | 选择参考节点是否引出，或固定为大地。 |

#### Input Data

详细参数设定

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Input Type | `InputType` | 选择 | 输入数据类型 |
| Poles / Residues input | `PORE_input` | 表格 | 输入pscad格式的PO_RE.out文件 |
| Z input | `Z_input` | 表格 | 输入频率相关的阻抗数据。$(1+(N_c^2+1) \cdot (k-1))$行填写第k个频率的频率值，$(2+(N_c^2+1) \cdot (k-1))$~$(N_c^2+1) \cdot k$行填写第k个频率的矩阵值，填写矩阵的顺序为$Z_{11}, Z_{12}, ... , Z_{1N_c}, Z_{21}, ... , Z_{N_cN_c}$ |
| Y input | `Y_input` | 表格 | 输入频率相关的导纳数据。$(1+(N_c^2+1) \cdot (k-1))$行填写第k个频率的频率值，$(2+(N_c^2+1) \cdot (k-1))$~$(N_c^2+1) \cdot k$行填写第k个频率的矩阵值，填写矩阵的顺序为$Y_{11}, Y_{12}, ... , Y_{1N_c}, Y_{21}, ... , Y_{N_cN_c}$ |
| Output VF Info | `OutputInfo` | 布尔 | 是否输出曲线拟合的简要信息。 |
| Output Poles and Residues | `OutputPR` | 布尔 | 是否输出极点和留数信息。 |

#### VFOptions

Vector fitting options

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Max Fitting Error | `MaxFitErr` | 实数 [%] | 曲线拟合的最大容许误差 |
| Max Order of Fitting | `MaxFitOrder` | 整数 | 曲线拟合的阶数 |
| Weighting Type | `WeightType` | 选择 | 权重类型 |
| Least Squares Weighting Factors | `Weighting` | 表格 | 最小二乘法的权重系数。每一行表示一个频率区间内的权重值，默认值表示0Hz-48Hz权重为1，48Hz-52Hz区间内权重为3，52Hz以上权重为1。 |

#### Passitivity Enforcement

Passitivity Enforcement

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Enable Passitivity Checking and Enforcement | `EnabPassEnf` | 选择 | 进行无源性校验及修正 |
| Start Frequency for Passitivity Enforcement | `StartPass` | 实数 [Hz] | 无源性执行的起始频率 |
| End Frequency for Passitivity Enforcement | `EndPass` | 实数 [Hz] | 无源性执行的截止频率 |
| Number of samples for Passitivity Enforcement | `Nint` | 整数 | 无源性执行过程中每区间采样数 |
| Niter for Outer Loop of Passitivity Enforcement | `NiterOutPass` | 整数 | 无源性执行的外循环最大迭代次数。当无源性校验失败时可以尝试增大该值。 |
| Niter for Inner Loop of Passitivity Enforcement | `NiterInPass` | 整数 | 无源性执行的内循环最大迭代次数。当无源性校验失败时可以尝试增大该值。该值会影响无源性校验的效率。 |
| Output Pass | `OutputPass` | 布尔 | 是否输出无源性校验日志信息。 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Port Current Vector \[kA\] | `Is` | 虚拟引脚（输出） | 端口电流值 |
| Port Voltage Vector \[kV\] | `Vs` | 虚拟引脚（输出） | 端口电压值 |


</slot>
