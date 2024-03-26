---
title: 函数内核接入
description: 本地计算内核的接入
sidebar_position: 20
---


在完成函数外部接口的配置后，紧接着需要接入本地计算内核。


## Python 计算内核的接入

一个可接入 FuncStudio 的 Python 计算内核需要具备三部分内容, 例如这个简单的加法计算内核。

![简单的加法计算内核](./简单的加法计算内核.png "简单的加法计算内核")

### 第一部分参数获取：利用 FuncStudio SDK 获取接口标签页内配置的外部接口参数

首先需要在python脚本中将下载好的cloudpss模块import进来，

然后通过`CloudPSS.currentJob()类`来获取FuncStudio中函数任务在当前参数方案下的实例，

在3.31号更新的SDK里面，我们在 cloudpss 命名空间下新加 `CloudPSS.currentJob()`方法，来代替之前版本的`CloudPSS.function.currentJob()`方法获取当前的任务实例，目前这两个接口都可以用。

这个任务信息会以**JSON结构体**的形式返回到计算内核，其中，我们在接口标签页配置的参数信息就存储在**args字典**中，

例如，我们在FuncStudio中设置的加法函数的两个输出参数的`键值为a和b`，那么在计算内核中就可以通过args.a和args.b这种`args.键名`的方式获取这两个输入参数在**当前参数方案下的值**。

:::tip
需要注意，这里还需要在python内核中再做一次数据类型的转换，把字符串转换成float或double。
::: 

第二部分：获取到每个外部接口参数在当前参数方案下的具体值后，用户就可以将这些参数值传入自己编写的算法程序，参与计算，例如加法函数的算法程序就是简单的计算 a+b 两个加数的和

最后第三部分，在自己编写的算法程序计算出结果后，需要将一些结果返回给 FuncStudio，并在FuncStudio的运行标签页中展示出来

目前 FuncStudio SDK 提供了 log、plot、table三种计算结果的输出方式

其中，log方法将计算结果以文本的方式输出，相当于之前版本的SDK中 CloudPSS.function.currentJob()接口下的 message 方法，plot 和 table 则是以图形和表格这种更加高级的表现形式来输出计算结果。

关于新接口下 log、plot、table 方法的详细用法在后续的教程里面会作详细的介绍。

例如：在加法函数中，我们只希望输出两个加数相加后的结果 c，因此，这里只使用了log 方法

值得注意的是：每一条输出信息都可以添加一个 key 属性，用来帮助用户在后续的 AppStudio 中绑定相关的结果

这个会在 AppStudio 的教程中为大家讲解。

至此，一个可以接入 funcstudio 的典型python计算内核脚本文件就编写好了。


