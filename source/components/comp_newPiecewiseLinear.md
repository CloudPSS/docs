---
title: 分段线性函数
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 400

classname: _newPiecewiseLinear
symbol: newPiecewiseLinear
---
## 基本描述
{% compsymbol newPiecewiseLinear %}

> **该元件根据设定参数生成分段线性函数，输入信号根据该函数，输出对应在线段上的值。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| First Input Threshold |  | (x1,y1)点横坐标 | 实数（常量） | (x1,y1)点横坐标 |
| First Threshold Output |  | (x1,y1)点纵坐标 | 实数（常量） | (x1,y1)点纵坐标 |
| Second Input Threshold |  | (x2,y2)点横坐标 | 实数（常量） | (x2,y2)点横坐标 |
| Second Threshold Output |  | (x2,y2)点纵坐标 | 实数（常量） | (x2,y2)点纵坐标 |
| Gain Below First Threshold |  | (x1,y1)点左侧斜率 | 实数（常量） | (x1,y1)点左侧斜率 |
| Gain Above Second Threshold |  | (x2,y2)点右侧斜率 | 实数（常量） | (x2,y2)点右侧斜率 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |                   
| Output | 1×1 |输出端口 |                   

## 使用说明

> 需要设定的参数为：两个固定的坐标点($x_1$,$y_1$)、($x_2$,$y_2$)，以及坐标点左右两侧的斜率$K_l$、$K_r$。函数式为：
> $$\begin{array}{l}
y(t) = {K_l}u(t) + {y_1} - {K_l}{x_1},u(t) \le {x_1}\\
y(t) = \frac{ { {y_2} - {y_1} } }{ { {x_2} - {x_1} } }u(t) + \frac{ { {y_1}{x_2} - {y_2}{x_1} } }{ { {x_2} - {x_1} } },{x_1} < u(t) \le {x_2}\\
y(t) = {K_r}u(t) + {y_2} - {K_r}{x_2},u(t) > {x_2}
\end{array}$$


## 测试模型
[<test name>](<test link>)显示了分段线性函数的典型应用。

## 相关元件

[非线性函数](/components/comp_newNonlinear.html)
