---
title: IESLab SDK
description: IESLab SDK 文档
sidebar_position: 20
---

import DocCardList from '@theme/DocCardList';

<DocCardList />

## IESLab SDK概述
与SDK的关系（IESLsb SDK是在CloudPSS SDK基础上继承封装的，是子类）,总结包含哪些数据接口（数据管理模块接口，方案优选模块接口），适用的范围（IES建模仿真平台&IES规划设计平台），在这里说明IES建模仿真平台&IES规划设计平台共有的SDK方法合并介绍，不同的方法分开介绍。

## 数据管理模块相关接口
介绍使用数据管理模块数据管理模块相关接口之前的准备工作和相关接口功能的详细介绍
  ### 0. 准备工作
  ### 1. GetDataItem()
  简单描述该接口的功能，输入参数，返回的结果。如有案例，增加案例。如有注意事项，增加注意事项。
  ### 2. GetItemList()
  ### 3. AddDataItem()
  ### 4. UpdateDataItem()
  ### 5. DeleteDataItem() 
  ### 6. SetProjectPosition()
  ### 7. GetAtmosData()
 



## SimStudio 工作台相关接口
介绍使用SimStudio 工作台相关接口之前的准备工作和相关接口功能的详细介绍
    ### 1 建模仿真平台
    #### 1.0 准备工作
    #### 1.1 getPlotData()
    ### 2 规划设计平台
    #### 2.0 准备工作
    #### 2.1 GetTypical()
    #### 2.2 GetTypicalDayNum()
    #### 2.3 GetTypicalDayInfo()
    #### 2.4 GetTypicalDayCurve()
    #### 2.5 GetTypicalMonth()
    #### 2.6 GetTypicalMonthNum()
    #### 2.7 GetTypicalMonthCurve()    




## 方案优选模块相关接口
介绍使用方案优选模块相关接口之前的准备工作和相关接口功能的详细介绍

    ### 1 IESLabPlanModel 类实例
    #### 1.0 准备工作
    #### 1.1 GetOptimizationInfo()
    #### 1.2 SetOptimizationInfo() 
    #### 1.3 run()
    #### 1.4 GetRunner() 
    #### 1.5 kill()
    #### 1.6 GetLastTaskResult()        
    ### 2 IESLabPlanResult类实例
    #### 2.0 准备工作
    #### 2.1 status()
    #### 2.2 GetLogs()
    #### 2.3 GetPlanConfiguration()
    #### 2.4 GetComponentResult()
    #### 2.5 GetComponentTypiDays()
    #### 2.6 实例



## 方案评估模块相关接口
介绍使用方案优选模块相关接口之前的准备工作和相关接口功能的详细介绍

    ### 1 IESLabEvaluationModel 类实例
    #### 1.0 准备工作
    #### 1.1 GetFinancialParams()
    #### 1.2 run()
    #### 1.3 EnvironmentalEvaluationRun()
    #### 1.4 EnergyEvaluationRun()
    #### 1.5 GetRunner()
    ### 2 IESLabEvaluationResult类实例
    #### 2.0 准备工作
    #### 2.1 status()
    #### 2.2 GetFinancialResult()
    #### 2.3 GetOverviewResult()
    #### 2.4 GetEnergyEvaluationResult()
    #### 2.5 GetEnvironmentalEvaluationResult()





