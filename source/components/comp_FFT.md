---
title: 傅里叶变换
date: 2018/8/1 14:40:44
type: components
classname: _FFT
symbol: FFT
author: 
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- FFT(快速傅里叶转换器）可以将输入谐波的幅值和相位表示为时间的函数。输入信号在采样前会被分解为谐波。
- 可以选择使用一个、两个或者三个输入。在三输入的情况下，该元件可以提供序分量形式的输出。
- 用户可以选择三个FFT模块种类的其中一个：
  一相：这是标准的一相FFT。输入信号可以被加工成提供基波与谐波的幅值和角度（包括直流成分） 的形式。
  两相：为两个一相FFT的叠加。
  三相：为三个一相FFT的叠加。
  +/-/0序：该情况需要XA、XB、XC三个输入并且通过序列发生器计算FFT的初步输出。输出为基波和每个谐波的正序、负序和零序分量的幅值和相位。每相的直流分量也会输出。
  三相SLD：与上述的三相相同，除了输出连接的是三元数列之外。
  +/-/0序SLD：与上述的+/-/0序相同，除了输出连接的是三元数列之外。
- 序分量是基于这个简单的转换方程：
  $$\left( \begin{array}{l}
  { {\rm{V} }_0}\\
  { {\rm{V} }_ + }\\
  { {\rm{V} }_ - }
  \end{array} \right){\rm{ = } }\frac{1}{3} \times \left( {\begin{array}{c}
  1&1&1\\
  1&{1\angle 120^\circ }&{1\angle  - 120^\circ }\\
  1&{1\angle  - 120^\circ }&{1\angle 120^\circ }
  \end{array} } \right) \times \left( \begin{array}{l}
  { {\rm{V} }_{\rm{a} } }\\
  { {\rm{V} }_{\rm{b} } }\\
  { {\rm{V} }_{\rm{c} } }
  \end{array} \right)$$


## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> |  | 元件名称 | 文本 | 填写元件的名称 |
| <span id="comp_params_param_Type">Type</span> |  | 输出类型 | 选择 | 选择输出信号的类型 |
| <span id="comp_params_param_Nh">Number of Harmonics</span> |  | 谐波数量 | 选择 |选择谐波的数量  |
| <span id="comp_params_param_F">Base Frequency</span> | Hz | 频率基值 | 实数 |填写频率基值  |
| <span id="comp_params_param_Mag">Magnitude Output</span> |  | 幅值输出 | 选择 | 选择幅值输出的类型（有效值或峰值） |
| <span id="comp_params_param_Unit">Phase Output Unit</span> |  | 相位输出单位 | 选择 |选择输出相位的单位(rad/deg)  |
| <span id="comp_params_param_Ref">Phase Output Reference</span> |  | 相位输出参照 | 选择 |选择相位输出的参照波形(sin波或cos波)  |
| <span id="comp_params_param_Filter">Anti-aliasing Filter?</span> |  | 是否使用抗混叠滤波器？ | 选择 |选择是否使用抗混叠滤波器  |
| <span id="comp_params_param_Track">Frequency Tracking？</span> |  | 是否跟踪频率？ | 选择 | 选择是否跟踪频率 |

[Name]: #comp_params_param_Name "Name"
[Type]: #comp_params_param_Type "Type"
[Number of Harmonics]: #comp_params_param_Nh "Number of Harmonics"
[Base Frequency]: #comp_params_param_F "Base Frequency"
[Magnitude Output]: #comp_params_param_Mag "Magnitude Output"
[Phase Output Unit]: #comp_params_param_Unit "Phase Output Unit"
[Phase Output Reference]: #comp_params_param_Ref "Phase Output Reference"
[Anti-aliasing Filter?]: #comp_params_param_Filter "Anti-aliasing Filter?"
[Frequency Tracking？]: #comp_params_param_Track "Frequency Tracking？"

### <span id="comp_params_group_Monitoring">Monitoring</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Fo">Frequency Output \[Hz\]</span> | 频率输出 | 文本 | 填写频率输出的名称 |

[Frequency Output \[Hz\]]: #comp_params_param_Fo "Frequency Output \[Hz\]"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了傅里叶变换的典型应用。




