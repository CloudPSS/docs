---
title: 结果查看
description: IESLab 规划优化平台-方案优选模块-结果查看
sidebar_position: 70
tags:
- ieslab
- function
---

本节主要介绍 IESLab 规划优化平台启动优化计算和查看优化结果的方法，包括方案列表查看、日志信息查看、设备选型配置信息查看、典型运行方式查看等。

## 功能定义

基于用户给定的优化目标进行优化计算，获取系统中各设备选型定容结果及其在典型日下的优化运行方式。

## 功能说明

### 计算参数设置

计算前需要设置优化参数，主要包括：

1. 全局参数
   
   优化目标选择：可选**经济性**优化目标。

   储能动作灵敏度：该参数是为了避免储能设备过于频繁地动作而设计的，算法会考虑是否对于一个非常微小的“价格”收益就进行动作，避免无谓地增加储能“充放电里程”，降低储能设备寿命，一般可设置为 100

3. 典型场景生成设置参数
   
   聚类算法：计算方案**聚类算法**提供了**月度平均**典型日、**聚类**典型场景和 **8760h 全年**场景三种场景生成方法。其中，聚类典型场景是利用降维和聚类等算法生成。

   **月度平均**典型日计算量较小，适合综合能源项目初期规划阶段，计算量较小，可以快速找到合适的设备型号及容量配置方案； **8760h 全年**场景则适合运行阶段的设备出力优化，对优化结果要求较高的场景，如风光储项目中对储能的优化调控；而**聚类**典型场景则能够兼顾计算效率和精度，满足多种场景需求。

   聚类数目：当选择**聚类典型场景**时，可**指定**聚类数目；或由系统**自动确定**聚类类别数量，此时聚类类别的数量根据贝叶斯信息准则（Bayesian information criterion，BIC）寻优确定。

3. 惩罚成本设置参数
   
   电不平衡惩罚成本(元/kW)：设置电力系统中电不平衡时（负荷缺失和弃风弃光等弃电）的惩罚成本。

   弃热惩罚成本(元/kW)：设置热力系统中弃热时的惩罚成本。

![参数 =x700](./setting.png "参数")

### 启动计算

用户根据自身优化需求，通过勾选**经济性**或者**环保性**优化目标，然后点击**开始计算**按钮即可开始进行优化。

![启动计算 =x700](./run.png "启动计算")

在计算过程中，原本**开始计算**按钮所在位置会变成**停止计算**和**停止并删除当前计算**两个按钮：点击**停止计算**则会停止当前计算，但不会删除已经获得的优化方案和日志信息；点击**停止并删除当前计算**会在停止当前计算的同时删除已经获得的优化方案和日志信息，并回退到上一次优化计算的结果。

### 方案列表查看

在计算执行过程中，会动态地推送当前获得的优选方案，并显示在页面的下方。

方案列表中会给出当前优选方案的经济性和环保性相关的数据，同时用户可以通过点击右上方的**查看方案配置**按钮，可以比对不同方案的设备配置结果，能够一目了然地了解不同方案间的差异。

此外，用户可以点击**导出方案配置和设备信息**按钮实现方案配置信息的导出，导出的数据将以 **Excel** 文件的形式存储。

### 运行日志查看

默认情况下，方案列表左上方的选项处于**优化方案**，用户可以切换至**显示日志**选项，此时将展示运行过程中的日志信息，如下图所示。当用户发现计算停滞时，可切换到日志面板查看报错信息。

![查看日志 =x700](./log.png "查看日志")

### 设备选型配置信息查看

针对特定的优选方案，可以在方案列表页面通过点击最后一列的**详细信息**按钮查看该方案详细的选型配置信息。

在此页面如果想切换查看其它优选方案的配置结果，也可以通过点击右上方的下拉选项进行切换。

特别地，在配置表的最后一行展示了该方案对不同参数项的总计数据。

### 运行方式查看

上图中的下半部分则显示了一些有关运行的数据，默认是显示系统在不同典型日下的一些统计数据，用户可以通过点击上方表格最后一列的**查看曲线**按钮可以获得对应设备（元件）在不同典型日下的运行曲线。

默认会显示目标元件在第一个典型日下第一个参数组（运行结果通常会按照量纲进行分组）的运行曲线，如果需要查看其它参数组，可以通过点击下拉**选择参数**按钮进行切换，如果需要查看其它典型日下的运行曲线，可以通过点击下拉**选择月份**按钮进行切换。

平台结果默认展示系统能量平衡图：

![能量平衡图 =x700](./result.png "能量平衡图")

特别的，平台支持查看综合能源系统典型运行场景数据：

![典型运行场景 =x700](./typical.png "典型运行场景")

