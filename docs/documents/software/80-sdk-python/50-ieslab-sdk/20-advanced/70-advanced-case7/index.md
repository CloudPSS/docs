---
title: 规划设计并获取结果
description: 规划设计并获取结果

tags:
- sdk

---

## 功能介绍

利用 CloudPSS SDK 进行综合能源系统规划设计，并获取详细的仿真结果。这包括获取规划配置、组件运行信息等，为能源系统的优化和决策提供数据支持。

## 使用说明

### 用到的 API


[Class: IESLabPlan](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 
+ 静态方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `IESLabPlan.fetch(simulationId) ` |   获取算例信息    |

+ 实例方法    
    | 方法     | 功能 | 
    | ---------------- | :-----------: |     
    | `IESLabPlan.iesLabPlanRun() ` |   生成方案优选算例    |

[Class: Runner](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 
+ 实例方法 
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `Runner.status() ` |   运行状态   |
    
[Class: IESLabPlanResult](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 
+ 实例方法 
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `IESLabPlanResult.GetPlanNum() ` |   获取优化方案的数量   |
    | `IESLabPlanResult.GetPlanInfo(planID) ` |   获取planID对应的优化方案的基础信息  |
    | `IESLabPlanResult.GetPlanConfiguration(planID) ` |   获取planID对应的优化方案的配置信息   |
    | `IESLabPlanResult.GetComponentResult(planID, componentID, typicalDayName='')` |   获取planID对应的优化方案下componentID对应元件的运行信息   |


### 调用方法
+ 通过IESLabPlan.fetch(simulationId)方法获取算例信息，调用IESLabPlan.iesLabPlanRun()方法生成方案优选算例，可通过Runner.status()方法检查运行状态。
+ 通过IESLabPlanResult类的相应方法获取规划方案的数量，并获取优化方案的基础信息，配置信息以及元件运行信息。


## 案例介绍
接下来，通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本。案例主要用于演示如何**通过 `IESLab SDK` 进行综合能源系统的规划设计,获取优化方案并查看各类详细信息**。
:::tip
您也可以在本案例的基础上，比较多个优化方案的结果，将获取的结果进行二次处理。如将每个方案的关键指标如装机容量、投资成本、运行成本等提取出来,汇总到一个表格或数据结构中,然后进行对比分析。
:::

### 代码解析
首先进行算例准备工作。包括设置网址与账户 token、获取算例，详细解释参考案例 1 的代码解析。
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
`iesplanProject.iesLabPlanRun()` 启动规划设计计算过程。`runner.result()` 获取计算结果对象。使用 `plan_result.GetPlanNum()` 获取优化方案的数量。
```python
    # 启动计算
    runner = iesplanProject.iesLabPlanRun()
    last_plan_num = 0
    while not runner.status():
        # print('running', flush=True)
        time.sleep(1)
        plan_result = runner.result
        plan_num = plan_result.GetPlanNum()
```
当发现新的优化方案时。使用 `GetPlanInfo()`、`GetPlanConfiguration()` 和`GetComponentResult()` 分别获取优化方案的**基础信息、配置信息和元件运行信息**。
```python
        if plan_num > last_plan_num:
            for plan_id in range(last_plan_num, plan_num):
                print("优化方案", plan_id + 1)
                plan_info = plan_result.GetPlanInfo(plan_id)
                print("基础信息:", plan_info)
                plan_config = plan_result.GetPlanConfiguration(plan_id)
                print("配置信息:", plan_config)
                plan_config = plan_result.GetComponentResult(plan_id, "/component_photovoltaic_2", "1月典型日1")
                print("运行信息:", plan_config)
                print("=" * 30)
            last_plan_num = plan_num
    print('计算完成')
```

### 结果展示
由于结果过长，在此只展示基础信息。
```python
优化方案 1
基础信息: {'方案名称': '方案1', '综合成本（万元）': 13.901900078655967, '设备投资费用（万元）': 256.0, '设备年维护费用（万元）': 0.0, '年销售收入（万元）': 38.34719707186584, '年运营支出（万元）': 1.1019000786559667, '年CO2排放（吨）': 0.0, '年电负荷（kWh）': 840903.6702350642, '年热负荷（kWh）': 0.0, '年冷负荷（kWh）': 0.0}

```

## 调试技巧
+ 获取算例失败，检查算例是否存在，该网址时候有该算例，token时候为该账户下的token。
+ 检查组件路径和典型日名称确保组件路径和典型日名称正确无误，避免因路径或名称错误导致无法获取组件运行信息。

## 常见问题
**Q1：获取到的优化方案数量为 `0`，这表示什么？如何解决？**

A1： 如果 `plan_result.GetPlanNum()` 返回 `0`，这可能表示没有找到任何优化方案，或者计算过程中存在问题。首先，确认您的输入数据和配置是否正确无误。然后，**检查 CloudPSS 平台是否有任何关于计算失败的日志或错误信息**。

**Q2:`GetComponentResult()` 方法的组件名称和典型日名称怎么获取?**  
A2:组件名称可以在项目的组件列表中查看获取,详细获取方法在案例3中有介绍，注意名称左边要加上斜杠,如 `/component_photovoltaic_2`。典型日名称可在规划典型日生成模块结果中进行查看。  
**获取典型日名称**
![典型日名称](./typical_day_name.png "典型日名称")

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


    # 启动计算
    runner = iesplanProject.iesLabPlanRun()
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
                plan_config = plan_result.GetComponentResult(plan_id, "/component_photovoltaic_2", "1月典型日1")
                print("运行信息:", plan_config)
                print("=" * 30)
            last_plan_num = plan_num
    print('计算完成')
```