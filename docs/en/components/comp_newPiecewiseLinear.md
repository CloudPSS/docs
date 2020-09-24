---
title: Piecewise Linear Function
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

## Basic Description

{% compsymbol newPiecewiseLinear %}

> **This component generates a piesewise linear function composed of 3-line segments. The three segments are joined at two points (x1, y1) and (x2, y2).**

## Parameter

### Configuration

| Parameter name             | Unit | Remark                                      |        Type         | Description                                            |
| :------------------------- | :--- | :------------------------------------------ | :-----------------: | :----------------------------------------------------- |
| Name                       |      | Name of component                           |        Text         | Enter the name of this component                       |
| First Input Threshold      |      | First horizontal threshold                  | Real number (Const) | The x1 value of the (x1,y1)                            |
| First Threshold Output     |      | First vertical output                       | Real number (Const) | The y1 value of the (x1,y1)                            |
| Second Input Threshold     |      | Second horizontal threshold                 | Real number (Const) | The x2 value of the (x2,y2)                            |
| Second Threshold Output    |      | Second vertical output                      | Real number (Const) | The y2 value of the (x2,y2)                            |
| Gain Below Lower Threshold |      | Slope of the first segment of the component | Real number (Const) | The slope of the first segment in the left of (x1,y1)  |
| Gain Above Upper Threshold |      | Slope of the third segment of the component | Real number (Const) | The slope of the third segment in the right of (x2,y2) |

## Pin List

| Pin name | Dimension | Description |
| :------- | :-------: | :---------- |
| Input    |    1×1    | Input pin   |
| Output   |    1×1    | Output pin  |

## Using Instructions

{% pullquote info %}
The parameters needed to be set are two fixed coordinate points ($x_1$,$y_1$)、($x_2$,$y_2$), and the slopes $K_l$、$K_r$ on the left and right sides of the coordinate point. The function is:

$$
y(t) = {K_l}u(t) + {y_1} - {K_l}{x_1},u(t) \le {x_1}\\
y(t) = \frac{ { {y_2} - {y_1} } }{ { {x_2} - {x_1} } }u(t) + \frac{ { {y_1}{x_2} - {y_2}{x_1} } }{ { {x_2} - {x_1} } },{x_1} < u(t) \le {x_2}\\
y(t) = {K_r}u(t) + {y_2} - {K_r}{x_2},u(t) > {x_2}
\end{array}$$
{% endpullquote %}



## See Also

[Nonlinear Function](comp_newNonlinear.md)
$$
