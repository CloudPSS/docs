---
title: Clark变换器
date: 2018/8/1 14:40:44
type: components
classname: _ClarkTransform
symbol: ClarkTransform
author: 
categories: 
- control
- coordinate-transformation
---
## <span id="comp_desc">基本描述</span>
![元件图标]()

- 该元件提供Clark变换和逆Clark变换功能，可通过Configuration/Direction of Transformation选择变换方向。
    - Clark变换abc→αβ：
        $$\begin{bmatrix}
        U_{\alpha }\\ 
        U_{\beta }
        \end{bmatrix}
        =m*\begin{bmatrix}
        1 &-\frac{1}{2}  &-\frac{1}{2} \\ 
        0&\frac{\sqrt{3} }{2}  &-\frac{\sqrt{3} }{2} 
        \end{bmatrix}
        \begin{bmatrix}
        U_{a}\\ 
        U_{b}\\ 
        U_{c}
        \end{bmatrix}$$
    - 若m=sqrt(2/3)，则变换前后，功率不变；若m=2/3，则变换前后，幅值不变。
    - 逆Clark变换αβ→abc：
        $$\begin{bmatrix}
        U_{a}\\ 
        U_{b}\\ 
        U_{c}
        \end{bmatrix}
        =m^{'}
        \begin{bmatrix}
        1 &0 \\ 
        -\frac{1}{2}&\frac{\sqrt3}{2} \\ 
        -\frac{1}{2}& -\frac{\sqrt3}{2}
        \end{bmatrix}
        \begin{bmatrix}
        U_{\alpha }\\ 
        U_{\beta }
        \end{bmatrix}$$
    - 若m'=sqrt(2/3)，则变换前后，功率不变；若m'=1，则变换前后，幅值不变。


## <span id="comp_params">输入参数</span>
### <span id="comp_params_group_Configuration">Configuration</span>
| 参数 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| <span id="comp_params_param_Name">Name</span> | 元件名称 | 文本 |填写元件的名称  |
| <span id="comp_params_param_Direction">Direction of Transformation</span> | 变换方向 | 选择 |选择变换的方向（Clark变换或逆Clark变换）  |

[Name]: #comp_params_param_Name "Name"
[Direction of Transformation]: #comp_params_param_Direction "Direction of Transformation"

## <span id="comp_example">测试模型</span>
[<test name>](<test link>)显示了Clark变换器的典型应用。

## <span id="comp_seealso">相关元件</span>
[< Park变换器>](<test link>)



