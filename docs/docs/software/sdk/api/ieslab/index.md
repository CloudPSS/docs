---
title: IESLab 类
description: CloudPSS SDK API 文档 IESLab 类
sidebar_position: 45

tags:
- SDK

---

## Class: `IESLabSimulation`

- Extends: [Object][Object]

**CloudPSS** IESLabSimulation 基类

### `ieslabSimulation.id`

- [String][String]

算例 id

### `ieslabSimulation.name`

- [String][String]

算例名称

### `ieslabSimulation.project_group`

- [String][String]

算例分组信息

### `ieslabSimulation.model`

- [Model](../model/index.md)

算例拓扑信息

### `ieslabSimulation.dataManageModel`

- [IESSimulationDataManageModel][Object]

算例的数据管理模块数据

### `IESLabSimulation.fetch(id)`

- `id`: 算例id
- Returns: [IESLabSimulation](#class-ieslabsimulation) 返回一个算例

获取算例信息

```python showLineNumbers
IESLabSimulation.fetch(id)
```

### `IESLabSimulation.createProjectGroup(group_name, desc=None, createById=None)`

- `group_name`: [String][String] 项目组名称
- `desc`: [String][String] 项目组描述
- `createById`: [String][String]  父项目组 id  可选参数，如果是从已有项目组导入的项目组，必填此项
- Returns: [Number][Number] 返回创建的项目组 id

创建项目组。

```python showLineNumbers
IESLabSimulation.createProjectGroup('test')
```

### `IESLabSimulation.createProject(name, project_group, desc=None, createById=None)`

- `name`: [String][String] 项目名称
- `project_group`: [Number][Number] 父项目组 id
- `desc`: [String][String] 项目描述
- `createById`: [Number][Number] 父项目 id, 可选参数, 如果是从已有项目导入的项目，必填此项
- Returns: [Number][Number] 返回创建的项目 id

创建项目。

```python showLineNumbers
IESLabSimulation.createProject('project', project_group=None, desc=None, createById=None)
```

### `ieslabSimulation.run(job=None, name=None)`

- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 仿真任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../job/index.md) 返回一个仿真任务


```python showLineNumbers
ieslabSimulation.run(job=None, name=None)
```

## Class: `IESLabPlan`

- Extends: [Object][Object]

**CloudPSS** IESLabPlan 基类

### `ieslabPlan.id`

- [String][String]

算例id。

### `ieslabPlan.name`

- [String][String]

算例名称。

### `ieslabPlan.project_group`

- [String][String]

算例分组信息。

### `ieslabPlan.model`

- [Model](../model/index.md)

算例拓扑信息。

### `ieslabPlan.dataManageModel`

- [IESPlanDataManageModel][Object]

算例的数据管理模块数据。

### `ieslabPlan.planModel`

- [IESLabPlanModel][Object]

方案优选模块。

### `ieslabPlan.evaluationModel`

- [IESLabEvaluationModel][Object]

方案评估模块。

### `ieslabPlan.currentPlanResult`

- [IESLabPlanResult][Object]

方案优选结果数据。

### `ieslabPlan.currentEvaluationResult`

- [IESLabEvaluationResult][Object]

方案评估结果数据。

### `IESLabPlan.fetch(id)`

- `id`: [String][String] 算例 id
- Returns: [IESLabPlan](#class-ieslabplan) 返回一个算例

获取算例信息。

```python showLineNumbers
IESLabPlan.fetch(id)
```

### `IESLabPlan.createProjectGroup(group_name, desc=None, createById=None)`

- `group_name`: [String][String] 项目组名称
- `desc`: [String][String] 项目组描述
- `createById`: [Number][Number] 父项目组id  可选参数，如果是从已有项目组导入的项目组，必填此项
- Returns: [Number][Number] 返回创建的项目组 id

创建项目组。

```python showLineNumbers
IESLabPlan.createProjectGroup(group_name, desc=None, createById=None)
```

### `IESLabPlan.createProject(name, project_group, start_date, end_date, construction_cycle, desc=None, createById=None)`

- `name`: [String][String] 项目名称
- `project_group`: [Number][Number] 项目组 id
- `start_date`: [Number][Number] 项目开始年限，范围在[1500,3000]之间
- `end_date`: [Number][Number] 项目结束年限，范围在项目开始时间之后且不超过五十年
- `construction_cycle`: [Number][Number] 项目建设周期(年), 必须小于等于 项目结束年限 - 项目开始年限
- `desc`: [String][String] 项目描述
- `createById`: 父项目 id, 可选参数, 如果是从已有项目导入的项目，必填此项
- Returns: [Number][Number] 返回创建的项目 id


创建项目。

```python showLineNumbers
ieslabPlan.createProject(name, project_group, start_date, construction_cycle, desc=None, createById=None)
```

### `ieslabPlan.iesLabTypicalDayRun(job=None, name=None, **kwargs)`

- `job`: [Dict][Dict] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../job/index.md) 返回一个运行实例

运行典型日计算。

```python showLineNumbers
ieslabPlan.iesLabTypicalDayRun(job=None, name=None, **kwargs)
```

### ieslabPlan.iesLabEvaluationRun(planId, type=None)

- `planId`: [Number][Number] 方案 id，表示优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `type`: [String][String] 评估类型，可选值为：**能效评价**、**环保评价**
- Returns: [Runner][Object] 返回方案评估运行实例

运行方案评估。

```python showLineNumbers
ieslabPlan.iesLabEvaluationRun(planId, type=None)
```

### `ieslabPlan.iesLabEnergyEvaluationRun(planId)`

- `planId`: [Number][Number] 方案 id
- Returns: [Runner][Object] 返回能效评价运行实例

运行能效评价。

```python showLineNumbers
ieslabPlan.iesLabEnergyEvaluationRun(planId)
```

### `ieslabPlan.iesLabPlanRun()`

- Returns: [Runner][Object] 返回方案优选运行实例

运行方案优选。

```python showLineNumbers
ieslabPlan.iesLabPlanRun()
```

### `ieslabPlan.iesLabPlanRun()`


停止并删除方案优选算例。

```python showLineNumbers
ieslabPlan.iesLabPlanRun()
```

## Class: `DataManageModel`

- Extends: [Object][Object]

**CloudPSS** IESLab 数据管理模块类

### `datamanageModel.GetDataItem(ID)`

- `ID`: [String][String] 数据项的标识符，可以在所有类型的数据项中实现唯一标识
- Returns: [Dict][Dict] 返回该数据项的信息（源数据的引用）

获取 ID 对应的数据信息。

```python showLineNumbers
datamanageModel.GetDataItem(ID)
```

### `datamanageModel.GetItemList(dataType)`

- `dataType`: [Enum][Enum] 数据的种类标识，包含：
  - "光伏": "PhotovoltaicSys"
  - "风机": "WindPowerGenerator"
  - "燃气轮机": "GasTurbine"
  - "热泵": "HeatPump"
  - "燃气锅炉": "GasBoiler"
  - "热管式太阳能集热器": "HPSolarCollector"
  - "电压缩制冷机": "CompRefrg"
  - "吸收式制冷机": "AbsorptionChiller"
  - "蓄电池": "Battery"
  - "储水罐": "WaterTank"
  - "变压器": "Transformer"
  - "传输线": "TransferLine"
  - "模块化多电平变流器": "MMC"
  - "离心泵": "CentrifugalPump"
  - "管道": "Pipe"
  - "采暖制冷负荷": "thermalLoads"
  - "电负荷": "electricLoads"
  - "燃料": "fuels"
  - "热": "HVACHeating"
  - "冷": "HVACCooling"
  - "常数电价": "常数电价"
  - "分时电价": "分时电价"
  - "阶梯电价": "阶梯电价"
  - "分时阶梯电价": "分时阶梯电价"
- Returns: [List][List] 返回该种类下所有数据项的列表

获取 dataType 类型对应所有数据项的列表。

```python showLineNumbers
datamanageModel.GetItemList(dataType)
```

### `datamanageModel.AddDataItem(dataType, data)`

- `dataType`: [Enum][Enum] 数据的种类标识，包含：
  - "光伏": "PhotovoltaicSys"
  - "风机": "WindPowerGenerator"
  - "燃气轮机": "GasTurbine"
  - "热泵": "HeatPump"
  - "燃气锅炉": "GasBoiler"
  - "热管式太阳能集热器": "HPSolarCollector"
  - "电压缩制冷机": "CompRefrg"
  - "吸收式制冷机": "AbsorptionChiller"
  - "蓄电池": "Battery"
  - "储水罐": "WaterTank"
  - "变压器": "Transformer"
  - "传输线": "TransferLine"
  - "模块化多电平变流器": "MMC"
  - "离心泵": "CentrifugalPump"
  - "管道": "Pipe"
  - "采暖制冷负荷": "thermalLoads"
  - "电负荷": "electricLoads"
  - "燃料": "fuels"
  - "热": "HVACHeating"
  - "冷": "HVACCooling"
  - "常数电价": "常数电价"
  - "分时电价": "分时电价"
  - "阶梯电价": "阶梯电价"
  - "分时阶梯电价": "分时阶梯电价"
- `data`:  [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求
- Returns: 返回新添加数据项的 ID，如果数据结构不满足要求，抛出异常

向 dataType 类型的数据库中添加内容为 data 的数据项。

```python showLineNumbers
datamanageModel.AddDataItem(dataType, data)
```

### `datamanageModel.UpdateDataItem(ID, data)`

- ID: [String][String] 数据项的标识符，可以在所有类型的数据项中实现唯一标识
- data: [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求
- Returns: [Boolean][Boolean] 返回 True，更新成功

更新数据库 ID 对应数据项。

```python showLineNumbers
datamanageModel.UpdateDataItem(ID, data)
```

### `datamanageModel.DeleteDataItem(ID)`

- `ID`: [String][String] 数据项的标识符，可以在所有类型的数据项中实现唯一标识
- Returns: [Boolean][Boolean] 删除是否成功标志，如果ID错误，抛出异常

删除 ID 对应的数据。

```python showLineNumbers
datamanageModel.DeleteDataItem(ID)
```

### `datamanageModel.SetProjectPosition(longitude, latitude)`

- `longitude`: [Float][Float] 经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 纬度，范围为气象数据源的纬度范围

设置项目的天气数据坐标，加载天气数据。

```python showLineNumbers
datamanageModel.SetProjectPosition(longitude, latitude)
```

### `datamanageModel.GetAtmosData(startDate, endDate)`


- `startDate`: [String][String] 开始时间，格式为'YYYY-MM-DD'
- `endDate`: [String][String] 结束时间，格式为'YYYY-MM-DD'
- Returns: [List][List] 返回当前项目位置对应时间范围内的气象数据序列，每个元素用字典进行表示，字典的 key 即区分不同的气象数据项（如风速、太阳辐照等）以及标识当前时间点

获取在 startDate 到 endDate 之间的气象数据。

```python showLineNumbers
datamanageModel.GetAtmosData(startDate, endDate)
```

## Class: `IESLabPlanModel`

- Extends: [Object][Object]

**CloudPSS** IESLabPlanModel 方案优选模块类

### `ieslabPlanModel.simulationId`

- [String][String]

算例 id。

### `ieslabPlanModel.optimizationInfo`

- [Enum][Enum]

当前算例的优化目标设置信息。

### `ieslabPlanModel.SetOptimizationInfo(optType)`

- `optType`: [Enum][Enum] 优化目标类型，经济性优化和环保性优化类型

设置当前算例的优化目标。

```python showLineNumbers
ieslabPlanModel.SetOptimizationInfo(optType)
```

### `ieslabPlanModel.GetOptimizationInfo()`

- Returns: [Enum][Enum] 返回优化目标

获取当前算例的优化目标设置信息。

```python showLineNumbers
ieslabPlanModel.GetOptimizationInfo()
```

### `ieslabPlanModel.run()`

- Returns: [Runner][Object] 生成方案优选算例，成功返回运行任务实例，如果算例已经运行过方案优选，再次运行会抛异常

运行方案优选。

```python showLineNumbers
ieslabPlanModel.run()
```

###  `ieslabPlanModel.GetRunner()`

- Returns: [Runner][Object] 返回运行实例

获得运行实例。

```python showLineNumbers
ieslabPlanModel.GetRunner()
```

### `ieslabPlanModel.kill()`

停止并删除当前运行的优化算例。

```python showLineNumbers
ieslabPlanModel.kill()
```

### `ieslabPlanModel.GetLastTaskResult()`

- Returns: [Boolean][Boolean] 返回任务运行状态

获取最后一次运行的 taskID 的任务运行状态

```python showLineNumbers
ieslabPlanModel.GetLastTaskResult()
```

## Class: `IESLabEvaluationModel`

### ieslabEvaluationModel.GetFinancialParams(planID)

- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 方案对应的财务评价基础参数信息（源数据的引用）

获取 planID 对应的优化方案下财务评估模块的基础信息

```python showLineNumbers
ieslabEvaluationModel.GetFinancialParams(0)
```

### `ieslabEvaluationModel.run(planID, type=None)`

- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `type`: [String][String] 任务类型：环保评价/能效评价
- Returns: [Runner][Object] 返回运行任务实例

运行方案评估。

```python showLineNumbers
ieslabEvaluationModel.run(planID, type=None)
```

### `ieslabEvaluationModel.EnvironmentalEvaluationRun(planID)`

- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

运行环保评价方案评估。

```python showLineNumbers
ieslabEvaluationModel.EnvironmentalEvaluationRun(planID)
```

### `ieslabEvaluationModel.EnergyEvaluationRun(planID)`

- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

运行能效评价方案评估。

```python showLineNumbers
ieslabEvaluationModel.EnergyEvaluationRun(planID)
```

### `ieslabEvaluationModel.GetRunner(planID)`

- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

获得运行实例。

```python showLineNumbers
ieslabEvaluationModel.GetRunner(planID)
```


[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[Float]: https://docs.python.org/3.8/c-api/float.html
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries
[Enum]: https://docs.python.org/3.8/library/enum.html