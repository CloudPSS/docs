---
title: OctaveCode
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3001
order: 10

classname: _OctaveCode
symbol: OctaveCode
---
## 基本描述
{% compsymbol OctaveCode %}

> **该元件用以用户自定义元件，采用M语言。**

## 使用说明

拖拽OctaveCode元件至工作空间，双击可弹出配置界面。该界面用户可操作的部分有：函数名称、输入引脚、输出引脚以及函数主体。
![控制框图](comp_OctaveCode/octave.png)
+ OctaveCode元件会根据用户配置，自动生成函数声明。例如上图中的`function[out0, out1, out2]=test(in0, in1, flag, time, deltaT)`。其中out0，out1，out2为输出引脚对应的变量，in0, in1为输入引脚对应的变量。time为仿真进行时间，deltaT为仿真步长，可直接在函数主体中进行调用。
+ 在进行仿真编译时，后台处理OctaveCode元件将直接调用其对应函数名的函数。因此不同功能OctaveCode元件的函数名称不能相同。
+ 输入/出引脚可以为任意维数，只需在输入/出引脚定义窗口填写对应维数。输入引脚对应变量在调用时可采用`a=in0;`、`a=in0(1,1);`、`a=in0(1);`等表达式。输出引脚对应变量在调用时可采用`out0=a;`、`out0(1)=a;`、`out0(1,1)=a;`等表达式。注意变量调用时的维数应当与定义维数保持一致。
+ 函数主体的语法参照M语言。