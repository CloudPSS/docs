---
title: IESLab SDK
order: 2000
---

* [CloudPSS SDK简介](intro_IESSDK.md)

* [综合能源系统IESLsb SDK](./core_IESSDK/index.md)

* [综合能源系统IESLsb SDK案例](./example_IESSDK/index.md)


本篇主要介绍IESLab平台的SDK，通过编写 Python、Matlab 等脚本，利用SDK可以调用 CloudPSS IESLab平台中的模型、仿真计算功能，实现诸如修改仿真算例、批量仿真计算、自动化生成报告等复杂且繁琐的功能。

IESLsb SDK是在CloudPSS SDK基础上继承封装的，是子类，因此首先介绍CloudPSS SDK的基本原理和使用方法；接下来分别介绍IESLab建模仿真和规划设计平台的SDK；最后，介绍IESLsb SDK的相关案例