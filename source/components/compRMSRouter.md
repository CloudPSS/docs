---
title: RMS量测
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3000
order: 400

classname: RMSRouter
symbol: newRMS
---
## 基本描述
{% compsymbol newRMS %}

> **该元件实现单相、三相有效值测量。**

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入RMS量测的名称（可缺省） |
| Dimension |  | 单相/三相 | 选择 | 选择测量为单相或三相 |
| Meter Type |  | 量测类型 | 选择 |  |
| Rated Value |  | 额定值 | 实数（常量） |  |
| Smoothing Time Constant | s | 平滑时间常数 | 实数（常量） |  |
| Fundamental Frequency | Hz | 基准频率 | 实数（常量） |  |
| No. of Samples / Cycle |  | 每周期采样数 | 整数（常量） |  |
| Initial Value |  | 初始电压 | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 由参数控制 | |                   
| Output | 1×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了RMS量测的典型应用。

## 相关元件


