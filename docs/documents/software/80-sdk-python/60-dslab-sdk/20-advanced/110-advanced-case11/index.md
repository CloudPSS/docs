---
title: 韧性评估与提升模块
description: 使用 DSLab SDK 进行韧性评估与提升计算，获取结果

---
## 功能介绍
通过韧性评估与提升计算，用户可以生成并获取计算结果。

## 使用说明

### 用到的 API

[Class: DSLab](../../../70-api/60-dslab/index.md#class-dslab) 
+ 实例方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `DSLab.runDSResilience(job=None, name=None, **kwargs) ` |   运行韧性评估与提升计算    |
+ 静态方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: |     
    | `DSLab.fetch(simulationId) ` |   获取算例信息    |
    
[Class: DSLabResilienceResult](../../../70-api/40-result/index.md#class-dslabresilienceresult)  
+ 实例方法
    | 方法     | 功能 | 
    | ---------------- | :-----------: |
    | `DSLabResilienceResult.getTableByName(name) ` |   获取 `name` 类型的韧性评估与提升计算表格结果数据   |

### 调用方法
+ 通过 `DSLab.fetch(simulationId)` 方法获取算例信息，通过 `DSLab.runDSResilience(job=None, name=None, **kwargs)` 方法调用韧性评估与提升计算程序并计算。
+ 通过 `DSLabResilienceResult` 类的相应方法获取韧性评估与提升计算的详细结果数据。


## 案例介绍
接下来，通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本。**案例旨在展示如何利用 DSLab 平台韧性评估与提升计算模块，方便快速生成系统韧性评估与提升计算**。您可以通过编写 Python 脚本自动化地获取指定项目的韧性评估与提升计算结果数据，如系统时序故障概率、故障设备等。

### 代码解析
首先进行算例准备工作。包括设置网址与账户 `token`、获取获取算例。
```python showLineNumbers
import os
import cloudpss
from cloudpss.job.DSLabResilienceResult import DSLabResilienceResult

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 韧性评估与提升计算测试——获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('8fe959a5-d8a5-4e9e-ba0c-f93468')
```
通过 `dsProject.runDSResilience()` 启动韧性评估与提升计算模块的计算，耐心等待计算完成。
```python showLineNumbers
    # 韧性评估与提升计算模块计算测试
    job.result.waitFor()
    resilienceResult = job._resultView(DSLabResilienceResult)
```
使用 `resilienceresult.getTableByName()` 方法获取指定表格结果。
```python showLineNumbers
    indexTable = resilienceResult.getTableByName('故障设备')
    print("指定结果表：", indexTable)
```

### 结果展示

输出结果如下所示。
```python showLineNumbers
指定结果表：{'故障设备': ['18', '103', '102', '21', 'L102', 'L19']}
```

## 调试技巧
+ 确保 API 访问令牌设置正确且未过期，同时确认访问的网址设置是否正确。
+ 特别注意参数的顺序和必填项，并确认每个 API 调用的返回值是否符合预期，查阅 [CloudPSS 官方 API 文档](../../../70-api/index.md)，了解各个函数的详细用法和参数说明。
+ 确保方法的参数正确。

## 常见问题

Q1:请求的数据不存在是什么原因呢？
:   请仔细检查您的系统中是否包含此数据，例如您的系统中元件没有绑定负荷数据，或者数据管理模块没有创建相应的数据卡，则会出现数据不存在的情况。此外，您还需要仔细核查索引是否超出范围以及请求的曲线类型标识符是否存在。

Q2:如何获取不同类型的韧性评估与提升结果表，比如系统时序故障概率?
:   您可以将 `getTableByName()` 的参数更改为 `系统时序故障概率`。

## 完整代码
```python showLineNumbers
import os
import cloudpss
from cloudpss.job.DSLabResilienceResult import DSLabResilienceResult

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 韧性评估与提升计算测试——获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('8fe959a5-d8a5-4e9e-ba0c-f93468')

    # 韧性评估与提升计算模块计算测试
    job.result.waitFor()
    resilienceResult = job._resultView(DSLabResilienceResult)

    # 韧性评估与提升计算结果获取
    indexTable = resilienceResult.getTableByName('故障设备')
    print("指定结果表：", indexTable)
```