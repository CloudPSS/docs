---
title: 方案评估模块相关接口
order: 40
---

## ==方案评估选模块对应有两个Python类，第一种类实例与具体的算例（`Model`类的实例）相绑定，第二种类实例与计算结果（`Result`类的实例）相绑定。对第一种python类（`EvaluationModel`），提供以下接口方法：==

### 1 获取指定方案的财务评估参数信息，函数签名如下：
### GetFinancialParams(planID)
:::info
获取planID对应的优化方案下财务评估模块的基础信息
:::

**Params planID:**  int类型，表示优化方案的`ID`，数值位于 `0~优化方案数量` 之间

**返回:**  dict类型，为源数据的引用，代表该方案对应的财务评价基础参数信息

## ==对第二种python类（`EvaluationResult`），提供以下接口方法：==

### 1 获取指定优化方案的特定类型的财务评估表格，函数签名如下：
### GetFinancialResult(resultType)
:::info
获取`planID`对应的优化方案下`resultType`财务评估结果
:::

**Params planID:**  int类型，表示优化方案的`ID`，数值位于 `0~优化方案数量` 之间

**Params resultType:**  enum类型，表示财务评价结果表格的类型

**返回:**  dict类型，代表该方案对应`resultType`类型的财务评估结果

### 2 获取当前方案的概览结果，函数签名如下：
### GetOverviewResult()
:::info
获取当前结果类对应的优化方案下的概览结果
:::

**返回:**  array类型，代表该方案对应的概览结果

### 3 获取当前结果类对应的优化方案下的环保评价，函数签名如下：
### GetEnvironmentalEvaluationResult()
:::info
获取当前结果类对应的优化方案下的能效评价
:::

**返回:**  array类型，代表该方案对应的能效评价结果

### 4 获取当前结果类对应的优化方案下的环保评价，函数签名如下：
### GetEnvironmentalEvaluationResult()
:::info
获取当前结果类对应的优化方案下的环保评价
:::

**返回:**  array类型，代表该方案对应的环保评价结果