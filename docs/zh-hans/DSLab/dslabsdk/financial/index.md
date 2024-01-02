---
title: 技术经济分析模块相关接口
---

## ==本教程将介绍如何使用`技术经济分析模块`的各个接口方法。==

## 1. 准备工作
### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python 
import os
import cloudpss


if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 仿真测试——获取指定 simuid 的项目
    iesProject = cloudpss.DSLab.fetch('{simuid}')
```

## 2. 接口调用
### 2.1 GetFinancialParams
#### 描述
获取 planID 对应的优化方案下财务评估模块的基础信息。

#### 语法
```python
GetFinancialParams(planID)
```
参数说明:
- `planID`：int 类型，表示优化方案的 ID ，数值位于 0~优化方案数量 之间
  
#### 返回值
- dict 类型，为源数据的引用，代表方案对应的财务评价基础参数信息

#### 实例
以下实例展示了 GetFinancialParams 的使用方法：
```python
    r = dsLabProject.financialAnalysisModel.GetFinancialParams(0)
    print('财务评价参数:', r)
```
执行以上代码，输出结果如下：
```json
财务评价参数: {'investmentbanchandproportion': [
        {'id': 3, 'year': '2022', 'rate': '100', 'planId': 0
        },
        {'id': 4, 'year': '2023', 'rate': '0', 'planId': 0
        }
    ], 'capitalsource': [
        {'id': 2, 'capitalRatio': '50', 'borrowingRate': '4.9', 'predeterminedNumber': '4', 'loanTerm': '15', 'periodGrace': '2', 'repayment': '等额本金', 'inflationRate': None, 'planId': 0
        }
    ], 'assetformation': [
        {'id': 1, 'fixedAssetsRatio': '95', 'residualRrate': '5', 'depreciationPeriod': '15', 'reimbursementPeriod': '5', 'planId': 0
        }
    ], 'productioncost': [
        {'id': 1, 'capacity': '4', 'annualSalary': '8', 'welfareFactor': '0', 'insuranceRate': '0.25', 'materialsExpenses': '5.0', 'otherExpenses': '1.0', 'providentFundRate': None, 'repairWithdrawalRate': None, 'planId': 0
        }
    ], 'workingcapitalandfinancialexpenses': [
        {'id': 2, 'workingCapitalLoanRatio': '70', 'interestRateAndWorkingCapital': '4', 'annualAPCirculationTimes': '12', 'annualARCirculationTimes': '12', 'annualCashCirculationTimes': '12', 'annualStockCirculationTimes': '12', 'annualTurnover': None, 'planId': 0
        }
    ], 'projectcalculation': [
        {'id': 2, 'electricityVatRate': '18', 'steamSaleVATRate': '12', 'hotColdVatRate': '12', 'cityMaintenanceConstructionTaxTate': '5', 'educationFeePlus': '5', 'localEducationPlus': '2', 'corporateIncomeTaxRate': '25', 'aleatoricAccumulationFundRate': '0', 'fuelBoughtVatRate': '0', 'legalAccumulationFundRate': '10', 'materialBoughtVatRate': '0', 'basicDiscountRate': '8', 'planId': 0
        }
    ]
}
```



### 2.2 GetOverviewResult
#### 描述
获得当前方案的财务评价结果。

#### 语法
```python
GetOverviewResult()
```

#### 返回值
- array 类型，代表该方案对应的概览结果

#### 实例
以下实例展示了 GetOverviewResult 的使用方法：
```python
    r = dsLabProject.currentEvaluationResult.GetOverviewResult()
    print('概览结果:', r)
```
执行以上代码，输出结果如下：
```json
概览结果:{'项目动态总投资': 12.166666666666666, '年销售收入': 0, '平均年总成本费用': 54.62133654499556, '总投资收益率': -312.32876712328766, '资本金利润率': -1496.4749738354947, '资本金内部收益率': 0, '所得税前投资内部收益率': 0, '所得税前投资财务净现值': -313.14616025000896, '所得税前投资回报期': 20, '所得税后投资内部收益率': 0, '所得税后投资财务净现值': -313.14616025000896, '所得税后投资回报期': 20, '单位投资增供负荷': 0, '单位投资增供电量': 0, '单位资产供电负荷': 0, '单位资产供电量': 0
}
```



### 2.3 GetFinancialResult
#### 描述
获取 planID 对应的优化方案下 resultType 财务评估结果。

#### 语法
```python
GetFinancialResult(resultType, planID)
```
参数说明:
- `planID`：int 类型，表示优化方案的 ID ，数值位于 0~优化方案数量 之间
- `resultType`：enum 类型，表示财务评价结果表格的类型
  
#### 返回值
- dict 类型，为源数据的引用，代表方案对应的财务评估结果

#### 实例
以下实例展示了 GetFinancialResult 的使用方法：
```python
    planID = 0
    # 启动计算，评估指定方案
    runner = dsLabProject.dsLabFinancialRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result
    overview_result = plan_result.GetOverviewResult()
    print('优化方案结果:', overview_result)

    # 财务评价结果
    kindNameMap = {
        "利润与利润分配": "getEconomyResult",
        "财务计划现金": "getFinancialPlanCashFlowResult",
        "资产负债": "getLiabilityAssetsResult",
        "投资使用计划与资金筹措": "getInvestPlanDataResult",
        "借款还本付息计划": "getLoanRepaymentPlanResult",
        "流动资金估算": "getFlowCashEvaluteResult",
        "资产折旧与摊销估算": "getFlowCashEvaluteResult",
        "总成本费用估算表": "getSumCostResult",
        "项目总投资现金流量": "getSumInvestFlowCashResult",
        "项目资本金现金流量": "getProjectCashFlowResult",
        "营业收入、税金、附加和增值税估算": "getIncomeTaxResult",
    }
    for key, value in kindNameMap.items():
        r = plan_result.GetFinancialResult(key)
        print(f'{key} :')
        print(r)
```
执行以上代码，输出结果如下：
```json
评估完成
优化方案结果: {'项目动态总投资': 12.166666666666666, '年销售收入': 0, '平均年总成本费用': 54.62133654499556, '总投资收益率': -312.32876712328766, '资本金利润率': -1496.4749738354947, '资本金内部收益率': 0, '所得税前投资内部收益率': 0, '所得税前投资财务净现值': -313.14616025000896, '所得税前投资回报期': 20, '所得税后投资内部收益率': 0, '所得税后投资财务净现值': -313.14616025000896, '所得税后投资回报期': 20, '单位投资增供负荷': 0, '单位投资增供电量': 0, '单位资产供电负荷': 0, '单位资产供电量': 0}
利润与利润分配 :
{'headerDesc': [{'headerName': '序号', 'key': 'serialNumber'}, {'headerName': '项目', 'key': '项目'}, {'headerName': '2022', 'key': '2022'}, {'headerName': '2023', 'key': '2023'}, {'headerName': '2024', 'key': '2024'}, {'headerName': '2025', 'key': '2025'}, {'headerName': '2026', 'key': '2026'}, {'headerName': '2027', 'key': '2027'}, {'headerName': '2028', 'key': '2028'}, {'headerName': '2029', 'key': '2029'}, {'headerName': '2030', 'key': '2030'}, {'headerName': '2031', 'key': '2031'}, {'headerName': '2032', 'key': '2032'}, {'headerName': '2033', 'key': '2033'}, ...(由于结果过长，此处省略后续内容)...}
财务计划现金 :...(由于结果过长，此处省略后续内容)...
```



