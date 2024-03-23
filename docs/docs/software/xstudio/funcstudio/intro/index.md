---
title: FuncStudio 介绍
description: FuncStudio 介绍
sidebar_position: 10
---

## FuncStudio 函数工坊——灵活接入能源电力系统数字孪生计算内核

FuncStudio 采用了**函数化**的设计思路，将用户自定义内核或第三方内核以函数的形式快捷、灵活地接入 CloudPSS，为复杂数字孪生应用的构建提供了调试部署、业务管理及计算调度的功能。

## FuncStudio 执行器

FuncStudio 支持用户将自定义或第三方计算内核以函数的形式接入，用户只需在本地计算机中安装**FuncStudio执行器**，**建立函数**、**定义其输入和输出参数格式**，**指定好用户自定义内核的命令行执行语句**，即可将自定义内核接入 FuncStudio 执行器。FuncStudio 也提供了跨平台、跨设备的支持，方便部署云边融合业务。当**执行器联网在线时**，用户可使用任意一台终端登录 CloudPSS，在网页版 FuncStudio 中**远程调用该计算内核**并**查看计算结果**。

下面这个图就很详细的说明了 FuncStudio 平台的功能和工作模式 

![FuncStudio – 函数接入方法](./函数接入方法.png "函数接入方法")

例如，用户A在自己的本地计算机内安装了 FuncStudio 的执行器，

并且已经将自己的计算内核以函数化的方式接入了 FuncStudio 执行器，

如果该函数权限是公开的，那么只要他的本地执行器是联网在线，

用户A或者其他用户B都可以通过网页版 FuncStudio 或 AppStudio 来远程利用用户A的执行器，启动这个函数的算法内核，

然后将执行结果反馈到用户A和B的网页版 XStudio 中，从而实现计算内核的远程共享。


## 预备知识

对于用户在自己本地计算资源（个人电脑）上开发和执行的自定义算法内核，在使用 FuncStudio 将内核集成到 CloudPSS 云服务框架之前需要提前掌握如下预备知识：

- 要求用户熟悉最基本的命令行语句，也就是如何在命令窗口中执行程序，这部分知识在环境配置，和执行计算内核的时候都会用到；

- 要会安装、搭建和管理`Python`的开发环境，熟悉数据类型和语法；不论是用`Python`还是`Matlab`编写算法的用户，都需要掌握`Python`的基本用法，这是因为 Matlab-SDK 本质是在`Matlab`中启动一个`Python`解释器，并且在`Python`执行器里调用的一种特殊的 CloudPSS-SDK；本质仍然是 Python-SDK。所以要求用户在使用 Matlab-SDK 时仍然要有一定的`Python`基础，不需要太高深的知识，只需要熟悉`Python`语法和数据结构即可；

- 要熟悉`Matlab`的操作和语法，这一点主要针对`Matlab`用户，`Python`用户可以不用了解；
  
- 熟悉 CloudPSS-XStudio 套件的功能特性，最好之前使用过 Simstudio 平台，因为 SimStudio、FuncStudio、AppStudio三个平台有相同的平台架构、页面风格和功能体系，如果用户之前使用过 SimStudio 的话，上手 FuncStudio 和 AppStudio 会很快。



