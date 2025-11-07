---
title: 供电可靠性计算模块
description: 使用 DSLab SDK 进行供电可靠性计算，获取结果

---

## 功能介绍
通过供电可靠性计算，用户可以生成并获取系统可靠性计算结果。

## 使用说明

### 用到的 API

[Class: DSLab](../../../70-api/60-dslab/index.md#class-DSLab) 
+ 实例方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `DSLab.runDSReliability(job=None, name=None, **kwargs) ` |   运行供电可靠性计算    |
+ 静态方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: |     
    | `DSLab.fetch(simulationId) ` |   获取算例信息    |
    
[Class: DSLabReliabilityResult](../../../70-api/40-result/index.md#class-dslabreliabilityresult)  
+ 实例方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: |
    | `DSLabReliabilityResult.getIndexTableByName(name) ` |   获取 `name` 类型的可靠性计算结果数据   |
    | `DSLabReliabilityResult.getLoadIndicesByID(id) ` |   获取 `id` 对应负荷的基础信息   |

### 调用方法
+ 通过 `DSLab.fetch(simulationId)` 方法获取算例信息，通过 `DSLab.runDSReliability(job=None, name=None, **kwargs)` 方法调用供电可靠性计算程序并计算。
+ 通过 `DSLabReliabilityResult` 类的相应方法获取可靠性计算的详细结果数据。


## 案例介绍
接下来，通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本。**案例旨在展示如何利用 DSLab 平台可靠性计算模块，方便快速生成系统可靠性计算**。您可以通过编写 Python 脚本自动化地获取指定项目的可靠性计算数据，如负荷可靠性指标、系统可靠性指标等。

### 代码解析
首先进行算例准备工作。包括设置网址与账户 `token`、获取获取算例。
```python showLineNumbers
import os
import cloudpss
from cloudpss.job.DSLabReliabilityResult import DSLabReliabilityResult

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 供电可靠性计算测试——获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('8fe959a5-d8a5-4e9e-ba0c-f93468')
```
通过 `dsProject.runDSReliability()` 启动可靠性计算模块的计算，耐心等待计算完成。
```python showLineNumbers
    # 供电可靠性计算模块计算测试
    job.result.waitFor()
    reliabilityResult = job._resultView(DSLabReliabilityResult)
```
使用 `reliabilityresult.getIndexTableByName()`、`reliabilityresult.GetTypicalDayNum()` 方法分别获取指定类型可靠性指标、指定 id 的负荷可靠性指标。
```python showLineNumbers
    indexTable = reliabilityResult.getIndexTableByName('系统可靠性指标')  # 类型：'负荷可靠性指标', '系统可靠性指标'
    print("（指定类型）可靠性指标表：", indexTable)
    loadIndices = reliabilityResult.getLoadIndicesByID('component_load_1') 
    print("（指定id）负荷可靠性指标：", loadIndices)
```

### 结果展示

输出结果如下所示。
```python showLineNumbers
（指定类型）可靠性指标表： {'系统可靠性指标（英文名）': ['AENS', 'ASAI', 'ASUI', 'CAIDI', 'ENS', 'SAIDI', 'SAIFI'], '值': [91104, 99.9763, 0.0237, 0.2311, 91104, 2.08, 9]}
（指定id）负荷可靠性指标： {'故障率(次/年)': 9.0, '平均故障持续时间(小时/次）': 0.2311, '故障持续时间(小时/年)': 2.08}
```

## 调试技巧
+ 确保 API 访问令牌设置正确且未过期，同时确认访问的网址设置是否正确。
+ 特别注意参数的顺序和必填项，并确认每个 API 调用的返回值是否符合预期，查阅 [CloudPSS 官方 API 文档](../../../70-api/index.md)，了解各个函数的详细用法和参数说明。
+ 确保方法的参数正确。

## 常见问题

Q1:请求的数据不存在是什么原因呢？
:   请仔细检查您的系统中是否包含此数据，例如您的系统中元件没有绑定负荷数据，或者数据管理模块没有创建相应的数据卡，则会出现数据不存在的情况。此外，您还需要仔细核查索引是否超出范围以及请求的曲线类型标识符是否存在。

Q2:如何获取不同类型的可靠性指标表，比如负荷可靠性指标?
:   您可以将 `getIndexTableByName()` 的参数更改为 `负荷可靠性指标`。可用的指标类型标识符请查阅 [CloudPSS API 文档](../../../70-api/40-result/index.md#class-dslabreliabilityresult)。   

## 完整代码
```python showLineNumbers
import os
import cloudpss
from cloudpss.job.DSLabReliabilityResult import DSLabReliabilityResult

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 供电可靠性计算测试——获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('8fe959a5-d8a5-4e9e-ba0c-f93468')

    # 供电可靠性计算模块计算测试
    job.result.waitFor()
    reliabilityResult = job._resultView(DSLabReliabilityResult)

    # 可靠性计算结果获取
    indexTable = reliabilityResult.getIndexTableByName('系统可靠性指标')  # 类型：'负荷可靠性指标', '系统可靠性指标'
    print("（指定类型）可靠性指标表：", indexTable)
    loadIndices = reliabilityResult.getLoadIndicesByID('component_load_1') 
    print("（指定id）负荷可靠性指标：", loadIndices)
```