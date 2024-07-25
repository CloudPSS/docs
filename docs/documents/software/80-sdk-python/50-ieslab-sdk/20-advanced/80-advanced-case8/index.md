---
title: 规划方案评估
description: 规划方案评估

tags:
- sdk

---

## 功能介绍

## 使用说明

### 用到的 API

[Class: IESLabPlan](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 

    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `IESLabPlan.fetch(simulationId) ` |   获取算例信息    |
    | `IESLabPlan.iesLabEvaluationRun(planId, type=None)` |   运行方案评估    |

[Class: Runner](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 

    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `Runner.status() ` |   运行状态   |
    
[Class: IESLabEvaluationModel](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 

    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `IESLabEvaluationModel.GetFinancialParams(planID)` |   获取优化方案下财务评估模块的基础信息   |
    | `IESLabEvaluationModel.GetFinancialResult(planId, type=None) ` |   获取优化方案下财务评估结果   |
    | `IESLabEvaluationModel.GetEnvironmentalEvaluationResult(planId, type=None) ` |   获取优化方案下的环保评价   |
    | `IESLabEvaluationModel.GetEnergyEvaluationResult(planID) ` |   获取当前优化方案下的能效评价   |


### 调用方式
+ 通过IESLabPlan.fetch(simulationId)方法获取算例信息，调用IESLabPlan.iesLabEvaluationRun(planId, type=None)方法运行方案评估，可通过Runner.status()检查运行状态。
+ 通过IESLabEvaluationModel类的相应方法获取财务参数和评价结果、优化方案的环保评价和能效评价。


## 案例介绍
接下来，通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本。**案例主要演示了如何通过 IESLabSDK 对规划设计项目进行评估和分析,涵盖了从获取项目信息到查看各类评估报告的完整流程**。如财务评估、环保评估和能效评估等。



### 代码解析
首先进行算例准备工作。包括设置网址与账户 `token`、获取获取算例，详细解释参考案例1代码解析。
:::caution
在进行评估前，您需要确保方案优选模块存在规划的方案,否则无法进行方案评估，如何调用SDK生成规划方案请参考案例5。
:::
```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'http://10.101.10.40/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('274')
```
首先通过 `input()` 函数获取用户输入的方案 ID，然后使用 `GetFinancialParams(planID)` 方法获取该方案的财务评估参数信息。注意，**确保输入的方案 ID 是存在的，否则可能无法获取到参数信息**。
```python
    # 获取指定方案的财务评估参数信息
    planID = input("请输入要查看的方案ID：")
    evaluation_info = iesplanProject.evaluationModel.GetFinancialParams(planID)
    print("该方案的财务评估参数信息:", evaluation_info) 
```      
启动对指定方案 ID 的评估计算。首先获取方案 ID，然后调用 `iesLabEvaluationRun(planID)` 方法启动评估。使用 `plan_result.GetFinancialResult("利润与利润分配", planID)` 获取指定方案的特定类型 `"利润与利润分配"` 的财务评估表格。
```python
    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result
    # 获取指定优化方案的特定类型的财务评估表格:
    financial_result = plan_result.GetFinancialResult("利润与利润分配", planID)
    print("该方案的财务评估表格:", financial_result)
```    
使用 `iesplanProject.iesLabEvaluationRun(planID, '环保评价')` 启动对指定方案的环保评价计算。评估计算完成后，通过 `runner.result` 获取评估结果对象。使用 `plan_result.GetEnvironmentalEvaluationResult(planID)` 获取指定方案的环保评价结果。

```python
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '环保评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的环保评价:
    env_result = plan_result.GetEnvironmentalEvaluationResult(planID)
    print("该方案的环保评价:", env_result)    
```
使用 `iesplanProject.iesLabEvaluationRun(planID, '能效评价')` 启动对指定方案的能效评价计算。评估计算完成后，通过 `runner.result` 获取评估结果对象。使用 `plan_result.GetEnergyEvaluationResult(planID)` 获取指定方案的能效评价结果。
```python
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '能效评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的能效评价:
    ene_result = plan_result.GetEnergyEvaluationResult(planID)
    print("该方案的能效评价:", ene_result) 
```

### 结果展示
由于结果过长，在此只展示该方案的财务评估参数信息。
```python
请输入要查看的方案ID：1
该方案的财务评估参数信息: {'assetformation': [{'id': 34, 'fixedAssetsRatio': '95', 'residualRrate': '5', 'depreciationPeriod': '15', 'reimbursementPeriod': '5', 'simu': 274, 'planId': 1}], 'productioncost': [{'id': 24, 'capacity': '4', 'annualSalary': '8', 'welfareFactor': '0', 'insuranceRate': '0.25', 'materialsExpenses': '5.0', 'otherExpenses': '1.0', 'simu': 274, 'planId': 1}], 'workingcapitalandfinancialexpenses': [{'id': 23, 'workingCapitalLoanRatio': '70', 'interestRateAndWorkingCapital': '4', 'annualARCirculationTimes': '12', 'annualStockCirculationTimes': '12', 'annualCashCirculationTimes': '12', 'annualAPCirculationTimes': '12', 'simu': 274, 'planId': 1}], 'projectcalculation': [{'id': 27, 'electricityVATRate': '18', 'steamSaleVATRate': '12', 'hotColdVATRate': '12', 'fuelBoughtVATRate': '10', 'materialBoughtVATRate': '17', 'legalAccumulationFundRate': '10', 'aleatoricAccumulationFundRate': '0', 'educationFeePlus': '5', 'localEducationPlus': '2', 'cityMaintenanceConstructionTaxTate': '5', 'corporateIncomeTaxRate': '25', 'basicDiscountRate': '8', 'simu': 274, 'planId': 1}]}
```

## 调试技巧
+ 在进行评估前，确保方案优选模块中存在规划的方案。否则无法进行方案评估。

## 常见问题
**Q1:如何确保输入的方案ID是有效的？**  
A1:在进行评估之前，检查方案优选模块是否存在方案，以确保您输入的方案 ID 在平台上是存在的。输入无效的方案 ID 将导致评估失败。

## 完整代码
```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'http://10.101.10.40/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('274')
    # 获取指定方案的财务评估参数信息
    planID = input("请输入要查看的方案ID：")
    evaluation_info = iesplanProject.evaluationModel.GetFinancialParams(planID)
    print("该方案的财务评估参数信息:", evaluation_info)    

    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result

    # 获取指定优化方案的特定类型的财务评估表格:
    financial_result = plan_result.GetFinancialResult("利润与利润分配", planID)
    print("该方案的财务评估表格:", financial_result) 
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '环保评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的环保评价:
    env_result = plan_result.GetEnvironmentalEvaluationResult(planID)
    print("该方案的环保评价:", env_result)    
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '能效评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的能效评价:
    ene_result = plan_result.GetEnergyEvaluationResult(planID)
    print("该方案的能效评价:", ene_result)  
```