---
title: ieslab
description: CloudPSS SDK API 文档 ieslab 相关接口
sidebar_position: 44

tags:
- SDK

---

## IESlab 相关接口

### IESLabSimulation

#### IESLabSimulation 实例变量说明

##### 算例id IESLabSimulation.id

- 算例id

##### 算例名称 IESLabSimulation.name

- 算例名称

##### 算例分组信息 IESLabSimulation.project_group

- 算例分组信息

##### 算例拓扑信息 IESLabSimulation.model

- 算例拓扑信息（[见Model类](#model)）

##### 算例的数据管理模块数据 IESLabSimulation.dataManageModel

- 算例的数据管理模块数据

#### IESLabSimulation 静态方法说明

##### 获取算例信息 static IESLabSimulation.fetch(id)

- 获取算例信息
  - 参数
    - id 算例id
  - 返回值
    - 返回一个算例
  - 实例：

    ```python
        IESLabSimulation.fetch(id)
    ```

##### 创建项目组 static IESLabSimulation.create(group_name, desc=None, createById=None)

- 创建项目组
  - 参数
    - group_name 项目组名称
    - desc 项目组描述
    - createById 创建者id
  - 返回值
    - 返回一个项目组
  - 实例：

    ```python
        IESLabSimulation.create(group_name, desc=None, createById=None)
    ```

##### 创建项目 static IESLabSimulation.createProject(project_group, desc=None, createById=None)

- 创建项目
  - 参数
    - project_group 项目组id
    - desc 项目描述
    - createById 创建者id
  - 返回值
    - 返回一个项目
  - 实例：

    ```python
        IESLabSimulation.createProject(project_group, desc=None, createById=None)
    ```

#### IESLabSimulation 实例方法说明

##### 调用仿真 IESLabSimulation.run( job=None, name=None)

- 调用仿真
  - 参数
    - job 仿真任务
    - name 仿真任务名称
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabSimulation.run( job=None, name=None)
    ```

### IESLabPlan

#### IESLabPlan 实例变量说明

##### 算例id IESLabPlan.id

- 算例id

##### 算例名称 IESLabPlan.name

- 算例名称

##### 算例分组信息 IESLabPlan.project_group

- 算例分组信息

##### 算例拓扑信息 IESLabPlan.model

- 算例拓扑信息（[见Model类](#model)）

##### 算例的数据管理模块数据 IESLabPlan.dataManageModel

- 算例的数据管理模块数据，具体使用方法见[数据管理模块](#数据管理模块-datamanagemodel)

##### 方案优选模块 IESLabPlan.planModel

- 方案优选模块，具体使用方法见[方案优选模块](#方案优选模块-ieslabplanmodel)

##### 方案评估模块 IESLabPlan.evaluationModel

- 方案评估模块，具体使用方法见[方案评估模块](#方案评估模块-ieslabevaluationmodel)

##### 方案优选结果数据 IESLabPlan.currentPlanResult

- 方案优选结果数据，具体使用方法见[方案优选结果数据](#ieslabplanresult)

##### 方案评估结果数据 IESLabPlan.currentEvaluationResult

- 方案评估结果数据，具体使用方法见[方案评估结果数据](#ieslabevaluationresult)

#### IESLabPlan 静态方法说明

##### 获取算例信息 static IESLabPlan.fetch(id)

- 获取算例信息
  - 参数
    - id 算例id
  - 返回值
    - 返回一个算例
  - 实例：

    ```python
        IESLabPlan.fetch(id)
    ```

##### 创建项目组 static IESLabPlan.create(group_name, desc=None, createById=None)

- 创建项目组
  - 参数
    - group_name 项目组名称
    - desc 项目组描述
    - createById 创建者id
  - 返回值
    - 返回一个项目组
  - 实例：

    ```python
        IESLabPlan.create(group_name, desc=None, createById=None)
    ```

##### 创建项目 static IESLabPlan.createProject(project_group, desc=None, createById=None)

- 创建项目
  - 参数
    - project_group 项目组id
    - desc 项目描述
    - createById 创建者id
  - 返回值
    - 返回一个项目
  - 实例：

    ```python
        IESLabPlan.createProject(project_group, desc=None, createById=None)
    ```

#### IESLabPlan 实例方法说明

##### 运行典型日计算 IESLabPlan.iesLabTypicalDayRun( job=None, name=None, **kwargs)

- 运行典型日计算
  - 参数
    - job 仿真任务
    - name 仿真任务名称
    - kwargs 仿真参数
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabTypicalDayRun( job=None, name=None, **kwargs)
    ```

##### 运行方案评估 IESLabPlan.iesLabEvaluationRun( planId, type=None)

- 运行方案评估
  - 参数
    - planId 方案id
    - type 评估类型
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabEvaluationRun( planId, type=None)
    ```

##### 运行能效评价 IESLabPlan.iesLabEnergyEvaluationRun( planId)

- 运行能效评价
  - 参数
    - planId 方案id
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabEnergyEvaluationRun( planId)
    ```

##### 运行方案优选 IESLabPlan.iesLabPlanRun( )

- 运行方案优选
  - 参数
    - 无
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabPlanRun( )
    ```

##### 停止并删除方案优选算例 IESLabPlan.iesLabPlanRun( )

- 停止并删除方案优选算例
  - 参数
    - 无
  - 返回值
    - 无
  - 实例：

    ```python
        IESLabPlan.iesLabPlanRun( )
    ```

### 数据管理模块 DataManageModel

#### DataManageModel 实例方法说明

##### 获取ID对应的数据信息 DataManageModel.GetDataItem(ID: str)

- 获取ID对应的数据信息
  - 参数
    - ID 数据ID
  - 返回值
    - 返回ID对应的数据信息
  - 实例：

    ```python
        DataManageModel.GetDataItem(ID: str)
    ```

##### 获取dataType类型对应所有数据项的列表 DataManageModel.GetItemList(dataType)

- 获取dataType类型对应所有数据项的列表
  - 参数
    - dataType string类型，代表数据项的类型，可以在所有类型的数据项中实现唯一标识
  - 返回值
    - 返回dataType类型对应所有数据项的列表
  - 实例：

    ```python
        DataManageModel.GetItemList(dataType)
    ```

##### 向dataType类型的数据库中添加内容为data的数据项 DataManageModel.AddDataItem( dataType, data)

- 向dataType类型的数据库中添加内容为data的数据项
  - 参数
    - dataType string类型，代表数据项的类型，可以在所有类型的数据项中实现唯一标识
    - data dict类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  - 返回值
    - bool 类型，返回True 添加成功
  - 实例：

    ```python
        DataManageModel.AddDataItem( dataType, data)
    ```

##### 更新数据管理模块数据 DataManageModel.UpdateDataManageModel(ID: str, data)

- 更新数据库ID对应数据项"光伏"、"风机"、"燃气轮机"、"热泵"、"燃气锅炉"、"热管式太阳能集热器"、"电压缩制冷机"、"吸收式制冷机"、"蓄电池"、"储水罐"、"变压器"、"传输线"、"模块化多电平变流器"、"离心泵"、"管道"、"采暖制冷负荷"、"电负荷"、"燃料"、"热"、"冷"、"常数电价"、"分时电价"、"阶梯电价"、"分时阶梯电价"数据
  - 参数
    - ID string类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识
    - data dict类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  - 返回值
    - bool 类型，返回True 更新成功
  - 实例：

    ```python
        DataManageModel.UpdateDataManageModel(ID: str, data)
    ```

##### 删除ID对应的数据 DataManageModel.DeleteDataItem(ID: str)

- 删除ID对应的数据
  - 参数
    - ID 数据ID
  - 返回值
    - 无
  - 实例：

    ```python
        DataManageModel.DeleteDataItem(ID: str)
    ```

##### 设置项目的天气数据坐标，加载天气数据 DataManageModel.SetProjectPosition( longitude, latitude)

- 设置项目的天气数据坐标，加载天气数据
  - 参数
    - longitude 经度
    - latitude 纬度
  - 返回值
    - 无
  - 实例：

    ```python
        DataManageModel.SetProjectPosition( longitude, latitude)
    ```

##### 获取指定时间段的天气数据 DataManageModel.GetAtmosData(startDate, endDate)

- 获取在startDate到endDate之间的气象数据
  - 参数
    - startDate 开始时间
    - endDate 结束时间
  - 返回值
    - 返回指定时间段的天气数据
  - 实例：

    ```python
        DataManageModel.GetAtmosData(startDate, endDate)
    ```

### 方案优选模块 IESLabPlanModel

#### IESLabPlanModel 实例变量说明

##### 算例id IESLabPlanModel.simulationId

##### 优化目标设置信息 IESLabPlanModel.optimizationInfo

#### IESLabPlanModel 实例方法说明

##### 设置优化目标 IESLabPlanModel.SetOptimizationInfo(optType)

- 设置优化目标
  - 参数
    - optType 优化目标类型
  - 返回值
    - 无
  - 实例：

    ```python
        IESLabPlanModel.SetOptimizationInfo(optType)
    ```

##### 获取优化目标 IESLabPlanModel.GetOptimizationInfo()

- 获取优化目标
  - 参数
    - 无
  - 返回值
    - 返回优化目标
  - 实例：

    ```python
        IESLabPlanModel.GetOptimizationInfo()
    ```

##### 运行方案优选 IESLabPlanModel.run()

- 运行方案优选
  - 参数
    - 无
  - 返回值
    - 成功返回运行任务实例
    - 如果算例已经运行过方案优选，再次运行会抛异常
  - 实例：

    ```python
        IESLabPlanModel.run()
    ```

##### 获得运行实例 IESLabPlanModel.GetRunner()

- 获得运行实例
  - 参数
    - 无
  - 返回值
    - 返回运行实例
  - 实例：

    ```python
        IESLabPlanModel.GetRunner()
    ```

##### 停止并删除当前运行的优化算例 IESLabPlanModel.kill()

- 停止并删除当前运行的优化算例
  - 参数
    - 无
  - 返回值
    - 无
  - 实例：

    ```python
        IESLabPlanModel.kill()
    ```

##### 获取当前算例是否处于运行中 GetLastTaskResult()

- 获取当前算例是否处于运行中
  - 参数
    - 无
  - 返回值
    - 返回任务运行状态
  - 实例：

    ```python
        GetLastTaskResult()
    ```

### 方案评估模块 IESLabEvaluationModel

#### IESLabEvaluationModel 实例方法说明

##### 获取指定方案财务评估模块的基础信息 IESLabEvaluationModel.GetFinancialParams(planID)

##### 运行方案评估 IESLabEvaluationModel.run(planID, type=None)

- 运行方案评估
  - 参数
    - planID 方案id
    - type 评估类型
  - 返回值
    - 成功返回运行任务实例
  - 实例：

    ```python
        IESLabEvaluationModel.run(planID, type=None)
    ```

##### 运行环保评价方案评估 IESLabEvaluationModel.EnvironmentalEvaluationRun(planID)

- 运行环保评价方案评估
  - 参数
    - planID 方案id
  - 返回值
    - 成功返回运行任务实例
  - 实例：

    ```python
        IESLabEvaluationModel.EnvironmentalEvaluationRun(planID)
    ```

##### 运行能效评价方案评估 IESLabEvaluationModel.EnergyEvaluationRun(planID)

- 运行能效评价方案评估
  - 参数
    - planID 方案id
  - 返回值
    - 成功返回运行任务实例
  - 实例：

    ```python
        IESLabEvaluationModel.EnergyEvaluationRun(planID)
    ```

##### 获得运行实例 IESLabEvaluationModel.GetRunner(planID)

- 获得运行实例
  - 参数
    - planID 方案id
  - 返回值
    - 返回运行实例
  - 实例：

    ```python
        IESLabEvaluationModel.GetRunner(planID)
    ```
