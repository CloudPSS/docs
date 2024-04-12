---
title: 接口标签页
description: 接口标签页
sidebar_position: 20
---

本节首先介绍功能区第二个接口标签页的功能，然后通过 1 个案例说明接口标签页的使用方法。

## 页面功能

接口标签页用于配置函数的外部接口，即定义函数的输出参数，并在多参数方案运行时使用。

![接口标签页](./1.png)

## 功能说明

### 参数列表定义 

参数列表定义用于实现当前函数项目输出参数的定义。提供**新建参数组**和**新建参数**的功能。一个函数项目可以包含多个参数组，每个参数组下可以包含多个参数。

为统一 XStudio 三个平台的使用体验，FuncStudio 和 SimStudio 平台均采用统一的参数和变量体系，同样支持实数、整数、文本、布尔、选择、多选、表格以及虚拟引脚 9 种类型参数的定义，支持常量和表达式形式的参数输入，可轻松兼容不同输入输出格式。

提供了参数的键、名称、详细描述、条件、类型、默认值等配置选项。配置好的参数，可在内核中**通过特定的接口进行引用**。

详见[函数定义配置](../../../basic/interface/index.md)。

### 参数预览

在进行接口标签页的配置过程中，可通过**右击图标绘制窗口选择预览选项**或点击预览快捷按钮，实现对参数列表的预览。用户可通过预览功能及时查看参数配置以及各部分联动是否正常。

## 案例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="函数输入参数定义">

![函数输入参数定义](./2.png)

</TabItem>
</Tabs>

## 常见问题

为什么要设计接口标签页呢？

:   因为任何第三方计算内核和用户自定义算法内核都能以一个具有多输入/输出量的函数集成到 FuncStudio 中，也就是下图这
    种格式，因此，首先需要整理出内核所有的输入参数，把这些参数的详细信息全部录入 FuncStudio。具体如何录入呢，就需要用到接口标签页。

    ![通过接口标签页定义函数输出参数](./3.png)


为什么通过接口 SDK 获取的实数类型的输入参数的值是文本？

:   需要注意的是，对于老版本的执行器，不论接口参数的类型设置为整数还是实数，在默认参数方案下通过接口 SDK 获取的值都是**字符串类型**，新建参数方案或者修改默认参数方案中的值后，类型就会变为设置的数值类型。

    该问题在 4.0.0 以上版本的执行器中已修复，建议用户安装最新版本的执行器。
    
    或者，为了保参数能够计算，用户也可在计算内核中对通过接口 SDK 获取的输入参数的值再做一次**数据类型的转换**。