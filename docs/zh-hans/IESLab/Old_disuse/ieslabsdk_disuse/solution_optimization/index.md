---
title: 方案优选模块相关接口
order: 
---

## ==方案优选模块对应有两个Python类，第一种类实例与具体的算例（`Model`类的实例）相绑定，第二种类实例与计算结果（`Result`类的实例）相绑定。对第一种python类（`PlanModel`），提供以下接口方法：==

### 1 获取方案优化模块的优化目标设置信息，函数签名如下
### GetOptimizationInfo()
:::info
获取当前算例的优化目标设置信息
:::

**返回:**  enum类型，代表经济性优化和环保性优化的类型


### 2 设置方案优化模块的优化目标，函数签名如下：
### SetOptimizationInfo(optType)
:::info
设置当前算例的优化目标
:::

**Params optType:**  enum类型，代表经济性优化和环保性优化的类型

**返回:**  bool类型，代表参数设置是否成功

## ==对第二种python类（`PlanResult`），提供以下接口方法：==

### 1 获取优化方案的数量，函数签名如下：
### GetPlanNum()
:::info
获取当前`result`实例对应的优化方案数量
:::

**返回:**  int类型，代表优化方案的数量

### 2 获取指定优化方案的基础信息，函数签名如下：
### GetPlanInfo(planID)
:::info
获取`planID`对应的优化方案的基础信息
:::

**Params planID:**  int类型，表示优化方案的`ID`，数值位于 `0~优化方案数量` 之间

**返回:**  dict类型，代表该方案的基础信息，包括投资、运行成本、负荷总量等信息

### 3 获取指定优化方案的配置信息，函数签名如下：
### GetPlanConfiguration(planID)
:::info
获取`planID`对应的优化方案的配置信息
:::

**Params planID:**  int类型，表示优化方案的`ID`，数值位于 `0~优化方案数量` 之间

**返回:**  dict类型，代表该方案的配置信息，包括每种设备的选型配置、容量配置、成本等相关信息

### 4 获取指定优化方案下特定元件的运行信息，函数签名如下：
### GetComponentResult(planID, componentID, typicalDayName)
:::info
获取`planID`对应的优化方案下`componentID`在典型日`typicalDayName`下的运行信息
:::

**Params planID:**  int类型，表示优化方案的`ID`，数值位于 `0~优化方案数量` 之间

**Params componentID:**  str类型，表示元件的标识符

**Params typicalDayName:**  str类型，代表典型日的名称

**返回:**  dict类型，代表该元件在指定典型日下的运行信息
