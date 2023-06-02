---
title: 方案评估模块相关接口
order: 40
---

## ==方案评估选模块对应有两个 Python 类，第一种类实例与具体的算例（ `Model` 类的实例）相绑定，第二种类实例与计算结果（ `Result` 类的实例）相绑定。对第一种 Python 类（ `EvaluationModel` ），本教程将介绍如何使用各个接口方法。==

## 1 `EvaluationModel` 类实例 
###  1.0 准备工作
#### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    ies_plan_project = cloudpss.IESLabPlan.fetch('220')
```


### 1.1 GetFinancialParams()
#### 描述
获取指定方案的财务评估参数信息。

#### 语法
获取 planID 对应的优化方案下财务评估模块的基础信息：
```python
GetFinancialParams(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
  
#### 返回值
- dict 类型，为源数据的引用，代表该方案对应的财务评价基础参数信息

#### 实例
以下实例展示了 GetFinancialParams 的使用方法：
```python
    # 获取指定方案的财务评估参数信息
    planID = input("请输入要查看的方案ID：")
    evaluation_info = ies_plan_project.evaluationModel.GetFinancialParams(planID)
    print("该方案的财务评估参数信息:", evaluation_info)
```
执行以上代码，输出结果如下：
```
请输入要查看的方案ID：1
该方案的财务评估参数信息: {'investmentbanchandproportion': [
        {'id': 390, 'year': '2019', 'rate': '100', 'simu': 220, 'planId': 1
        }
    ], 'assetformation': [
        {'id': 22, 'fixedAssetsRatio': '95', 'residualRrate': '5', 'depreciationPeriod': '15', 'reimbursementPeriod': '5', 'simu': 220, 'planId': 1
        }
    ], 'productioncost': [
        {'id': 12, 'capacity': '4', 'annualSalary': '8', 'welfareFactor': '0', 'insuranceRate': '0.25', 'materialsExpenses': '5.0', 'otherExpenses': '1.0', 'simu': 220, 'planId': 1
        }
    ], 'workingcapitalandfinancialexpenses': [
        {'id': 11, 'workingCapitalLoanRatio': '70', 'interestRateAndWorkingCapital': '4', 'annualARCirculationTimes': '12', 'annualStockCirculationTimes': '12', 'annualCashCirculationTimes': '12', 'annualAPCirculationTimes': '12', 'simu': 220, 'planId': 1
        }
    ], 'projectcalculation': [
        {'id': 15, 'electricityVATRate': '18', 'steamSaleVATRate': '12', 'hotColdVATRate': '12', 'fuelBoughtVATRate': '10', 'materialBoughtVATRate': '17', 'legalAccumulationFundRate': '10', 'aleatoricAccumulationFundRate': '0', 'educationFeePlus': '5', 'localEducationPlus': '2', 'cityMaintenanceConstructionTaxTate': '5', 'corporateIncomeTaxRate': '25', 'basicDiscountRate': '8', 'simu': 220, 'planId': 1
        }
    ]
}
```




## 2 `EvaluationResult`类实例
### 2.0 准备工作
#### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('220')

```

### 2.1 GetFinancialResult()
#### 描述
获取指定优化方案的特定类型的财务评估表格。
#### 语法
获取当前 `result` 实例对应的优化方案数量:
```python
GetFinancialResult(planID, resultType)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
- `resultType`： enum类型，表示财务评价结果表格的类型
#### 返回值
-  dict 类型，代表该方案对应 `resultType` 类型的财务评估结果

#### 实例
以下实例展示了 GetFinancialResult 的使用方法：
```python
    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID)
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
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
评估完成
该方案的财务评估表格: {'headerDesc': [{'headerName': '序号', 'key': 'serialNumber'}, {'headerName': '项目', 'key': '项目'}, {'headerName': '2019', 'key': '2019'}, {'headerName': '2020', 'key': '2020'}, {'headerName': '2021', 'key': '2021'}, {'headerName': '2022', 'key': '2022'}, {'headerName': '2023', 'key': '2023'}, {'headerName': '2024', 'key': '2024'},  ...(由于结果过长，此处省略后续内容)...

```



### 2.2 GetOverviewResult()
#### 描述
获取当前方案的概览结果。
#### 语法
获取当前结果类对应的优化方案下的概览结果:
```python
GetOverviewResult()
```

#### 返回值
- array 类型，代表该方案对应的概览结果
#### 实例
以下实例展示了 GetFinancialResult 的使用方法：
```python
    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result

    # 获取当前方案的概览结果:
    overview_result = plan_result.GetOverviewResult(planID)
    print("该方案的概览结果:", overview_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
评估完成
该方案的概览结果: {'项目动态总投资': 12052.415247899778, '年销售收入': 9330.964486970926, '平均年总成本费用': 3346.68137046548, '总投资收益率': 32.584346918420145, '资本金利润率': 62.73151313986579, '资本金内部收益率': 88.58017535608217, '所得税前投资内部收益率': 57.1421700961323, '所得税前投资财务净现值': 43304.76173022156, '所得税前投资回报期': 2.7489328954969823, '所得税后投资内部收益率': 48.93780718777837, '所得税后投资财务净现值': 35541.595903739624, '所得税后投资回报期': 3.0383431246726587}
```




### 2.3 GetEnvironmentalEvaluationResult()
获取当前结果类对应的优化方案下的环保评价。
#### 语法
获取当前结果类对应的优化方案下的环保评价:
```python
GetEnvironmentalEvaluationResult()
```

#### 返回值
- array 类型，代表该方案对应的环保评价结果
#### 实例
以下实例展示了 GetEnvironmentalEvaluationResult 的使用方法：
```python
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID, '环保评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的环保评价:
    env_result = plan_result.GetEnvironmentalEvaluationResult(planID)
    print("该方案的环保评价:", env_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
running
running
running
running
running
running
running
评估完成
该方案的环保评价: {'tableData': {'year': {'CO2': [0.0, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638], '氮化物': [0.0, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946], 'SO2': [0.0, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946], '烟尘': [0.0, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481]}, ...(由于结果过长，此处省略后续内容)...

```




### 2.1.4 GetEnergyEvaluationResult()
获取当前结果类对应的优化方案下的能效评价。
#### 语法
获取当前结果类对应的优化方案下的能效评价:
```python
GetEnergyEvaluationResultt(planID)
```
#### 返回值
- array 类型，代表该方案对应的能效评价结果
#### 实例
以下实例展示了 GetEnergyEvaluationResult 的使用方法：
```python
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID, '能效评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的能效评价:
    ene_result = plan_result.GetEnergyEvaluationResult(planID)
    print("该方案的能效评价:", ene_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
running
running
running
running
running
running
running
running
running
评估完成
该方案的能效评价: {'totalPowerSypply': 957175.8545535074, 'totalPowerLoad': 1101398.2566356198, 'totalPowerLoss': -144222.40208211244, 'totalHeatSupply': 124012.04729099869, 'totalHeatLoad': 81242.18119673297, 'totalHeatLoss': 42769.866094265715, 'totalCoolSupply': 477908.82443701365, 'totalCoolLoad': 553071.9256285792, 'totalCoolLoss': -75163.10119156557, 'energyEfficiency': 111.32807440373792, 'tableData': {'year': {'/component_absorption_chiller_1': {'power': [0.0, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806], 'heat': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], 'cool': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, ...(由于结果过长，此处省略后续内容)...

```


