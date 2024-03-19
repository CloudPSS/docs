---
title: 方案优选模块相关接口
description: IESLab 规划设计平台方案优选模块相关接口
sidebar_position: 10
---

方案优选模块对应有两个 Python 类，第一种类实例与具体的算例（ `Model` 类的实例）相绑定，第二种类实例与计算结果（ `Result` 类的实例）相绑定。本教程将介绍如何使用该模块的各个接口方法。


## 1 `Model` 类实例
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
    ies_plan_project = cloudpss.IESLabPlan.fetch('219')

```


### 1.1 GetOptimizationInfo()
#### 描述
获取方案优化模块的优化目标设置信息。

#### 语法
获取当前算例的优化目标设置信息：
```python
GetOptimizationInfo()
```

  
#### 返回值
- enum 类型，代表经济性优化和环保性优化的类型

#### 实例
以下实例展示了 GetOptimizationInfo 的使用方法：
```python
    # 获取优化目标设置信息
    optimization_info = ies_plan_project.planModel.GetOptimizationInfo()
    print("优化目标设置信息:", optimization_info)
```
执行以上代码，输出结果如下：
```
优化目标设置信息: OptimizationMode.经济性
```


### 1.2 SetOptimizationInfo()
#### 描述
设置方案优化模块的优化目标。

#### 语法
设置当前算例的优化目标：
```python
SetOptimizationInfo(optType)
```
参数说明:
- `optType`： enum 类型，代表经济性优化和环保性优化的类型
  
#### 返回值
- bool 类型，代表参数设置是否成功

#### 实例
以下实例展示了 SetOptimizationInfo 的使用方法：
```python
    # 设置优化目标
    opt_type = ies_plan_project.planModel.SetOptimizationInfo(cloudpss.ieslab.OptimizationMode.经济性)  
    if opt_type:
        print("优化目标设置成功")
    else:
        print("优化目标设置失败")
```
执行以上代码，输出结果如下：
```
优化目标设置成功
```




## 2 `PlanResult`类实例
目前该模块 `SimStudio` 中的计算方案为典型日生成，对该计算方案的 `result` 类新增的接口如下所示：


### 2.1 GetPlanNum()
#### 描述
获取优化方案的数量。
#### 语法
获取当前 `result` 实例对应的优化方案数量:
```python
GetPlanNum()
```
#### 返回值
-  int 类型，代表优化方案的数量


### 2.2 GetPlanInfo()
#### 描述
获取指定优化方案的基础信息。
#### 语法
获取 `planID` 对应的优化方案的基础信息:
```python
GetPlanInfo(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
#### 返回值
- dict类型，代表该方案的基础信息，包括投资、运行成本、负荷总量等信息


### 2.3 GetPlanConfiguration()
#### 描述
获取指定优化方案的配置信息。
#### 语法
获取 `planID` 对应的优化方案的配置信息:
```python
GetPlanConfiguration(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
#### 返回值
- dict 类型，代表该方案的配置信息，包括每种设备的选型配置、容量配置、成本等相关信息


### 2.4 GetComponentResult()
#### 描述
获取指定优化方案下特定元件的运行信息。
#### 语法
获取 `planID` 对应的优化方案下 `componentID` 在典型日 `typicalDayName` 下的运行信息:
```python
GetComponentResult(planID, componentID, typicalDayName)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
- `componentID`： str类型，表示元件的标识符
- `typicalDayName`： str类型，代表典型日的名称
#### 返回值
- dict类型，代表该元件在指定典型日下的运行信息




### 2.5 实例
#### 2.5.1 实例代码
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


    # 启动计算
    runner = ies_plan_project.iesLabPlanRun()
    last_plan_num = 0
    while not runner.status():
        # print('running', flush=True)
        time.sleep(1)
        plan_result = runner.result
        plan_num = plan_result.GetPlanNum()
        if plan_num > last_plan_num:
            for plan_id in range(last_plan_num, plan_num):
                print("优化方案", plan_id + 1)
                plan_info = plan_result.GetPlanInfo(plan_id)
                print("基础信息:", plan_info)
                plan_config = plan_result.GetPlanConfiguration(plan_id)
                print("配置信息:", plan_config)
                plan_config = plan_result.GetComponentResult(plan_id, "/component_absorption_chiller_1", "1月典型日1")
                print("运行信息:", plan_config)
                print("=" * 30)
            last_plan_num = plan_num
    print('计算完成')
```


#### 2.5.2 运行结果
执行以上代码，输出结果如下：
```
优化方案 1
基础信息: {'方案名称': '方案1', '综合成本（万元）': 3062.541767940324, '设备投资费用（万元）': 11422.5, '设备年维护费用（万元）': 47.535512358556396, '年销售收入（万元）': 9330.964486970926, '年运营支出（万元）': 2301.1000055817676, '年CO2排放（吨）': 6179.243609112638, '年电负荷（kWh）': 94903561.61101785, '年热负荷（kWh）': 5416145.413115531, '年冷负荷（kWh）': 36871461.70857195}
配置信息: {'/component_absorption_chiller_1': {'CO2Discharge': 0.0, 'compManufacturer': 'AC', 'compModel': '1', 'compName': '/component_absorption_chiller_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.09999884259259259, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '吸收式制冷机1'},...(由于结果过长，此处省略后续配置信息)...}
运行信息: {'data': {'groupDesc': [{'desc': '质量流量(kg/s)', 'keyset': ['热水质量流量', '冷水质量流量']}, {'desc': '压力(MPa)', 'keyset': ['热水进口压力', '热水出口压力', '冷水进口压力', '冷水出口压力']}, {'desc': '温度(℃)', 'keyset': ['热水进口温度', '热水出口温度', '冷水进口温度', '冷水出口温度']}, {'desc': '能量(kW)', 'keyset': ['供冷量', '热负荷', '有功负荷', '无功负荷']}, {'desc': '相角(deg)', 'keyset': ['相角']}, {'desc': '电压(kV)', 'keyset': ['电压']}, {'desc': '运行策略', 'keyset': ['关闭', '挡位1', '挡位2', '挡位3', '挡位4', '挡位5', '挡位6', '挡位7', '挡位8', '挡位9']}]...(由于结果过长，此处省略后续运行信息)...}}
==============================
优化方案 2
...(由于结果过长，此处省略方案2内容及后续方案)...
```
