---
title: 自定义电磁暂态仿真元件
order: 100
---
 
## Octave 元件

## Python 元件

## Simulink 黑箱元件

## CloudPSS SDK 元件
本节介绍CloudPSS SDK元件的构建方法，在SimStudio工作台点击`新建`,在`项目模板`中选择`CloudPSS元件测试`，点击新建。  

![新建元件测试模板](./新建元件测试模板.png "新建元件测试模板")   

在`实现标签页`选择`电磁暂态`，将`EMTLab Core SDK`的`.so`编译产物拖放至电磁暂态实现框中。 `EMTLab Core SDK`的使用和元件代码编写等内容详见[EMTLab Core SDK](/docs/zh-hans/EMTLab/SDK/CoreSDK/index.md)帮助文档。

![元件编译产物上传](./元件编译产物上传.png "元件编译产物上传")  

其中ClassName会根据上传的`.so`文件名自动生成，而`SubType`需要填写，表示元件的类型，大于0为电气元件，小于0为控制元件。

对SDK元件进行接口设计，在`接口标签页`，设置元件的`参数组`，`引脚`和`图标设计`。  

![元件接口设计](./元件接口设计.jpg "元件接口设计")  

在`总览标签页中`，填写`元件名称`，`显示高级设置`，设置`权限`，`元件标签`。  

![总览标签填写](./总览标签填写.png "总览标签填写")  

::: tip
保存的元件可以在设置的元件标签中查找，也可通过搜索查找。
:::