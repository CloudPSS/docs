---
title: IESLab 类
description: CloudPSS SDK API 文档 IESLab 类

tags:
- sdk

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


- [Model](../10-model/index.md)

算例拓扑信息

### `ieslabSimulation.dataManageModel`

- [IESSimulationDataManageModel](#class-datamanagemodel)

算例的数据管理模块数据

### `IESLabSimulation.fetch(id)`

- 静态方法
- `id`: 算例 id
- Returns: [IESLabSimulation](#class-ieslabsimulation) 返回一个算例

获取算例信息

```python showLineNumbers
IESLabSimulation.fetch(id)
```

### `IESLabSimulation.createProjectGroup(group_name, desc=None, createById=None)`

- 静态方法
- `group_name`: [String][String] 项目组名称
- `desc`: [String][String] 项目组描述
- `createById`: [String][String]  父项目组 id  可选参数，如果是从已有项目组导入的项目组，必填此项
- Returns: [Number][Number] 返回创建的项目组 id

创建项目组。

```python showLineNumbers
IESLabSimulation.createProjectGroup('test')
```

### `IESLabSimulation.createProject(name, project_group, desc=None, createById=None)`

- 静态方法
- `name`: [String][String] 项目名称
- `project_group`: [Number][Number] 父项目组 id
- `desc`: [String][String] 项目描述
- `createById`: [Number][Number] 父项目 id, 可选参数, 如果是从已有项目导入的项目，必填此项
- Returns: [Number][Number] 返回创建的项目 id

创建项目。

```python showLineNumbers
IESLabSimulation.createProject('project', project_group=None, desc=None, createById=None)
```

### `ieslabSimulation.run(job, name=None)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案
- `name`: [String][String] 仿真任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个仿真任务


```python showLineNumbers
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.run(job, name=None)
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

- [Model](../10-model/index.md)

算例拓扑信息。

### `ieslabPlan.dataManageModel`

- [IESPlanDataManageModel](#class-datamanagemodel)

算例的数据管理模块数据。

### `ieslabPlan.planModel`

- [IESLabPlanModel](#class-ieslabplanmodel)

方案优选模块。

### `ieslabPlan.evaluationModel`

- [IESLabEvaluationModel](#class-ieslabevaluationmodel)

方案评估模块。

### `ieslabPlan.currentPlanResult`

- [IESLabPlanResult](#class-ieslabplanresult)

方案优选结果数据。

### `ieslabPlan.currentEvaluationResult`

- [IESLabEvaluationResult](#class-ieslabevaluationresult)

方案评估结果数据。

### `IESLabPlan.fetch(id)`

- 静态方法
- `id`: [String][String] 算例 id
- Returns: [IESLabPlan](#class-ieslabplan) 返回一个算例

获取算例信息。

```python showLineNumbers
IESLabPlan.fetch(id)
```

### `IESLabPlan.createProjectGroup(group_name, desc=None, createById=None)`

- 静态方法
- `group_name`: [String][String] 项目组名称
- `desc`: [String][String] 项目组描述
- `createById`: [Number][Number] 父项目组id  可选参数，如果是从已有项目组导入的项目组，必填此项
- Returns: [Number][Number] 返回创建的项目组 id

创建项目组。

```python showLineNumbers
IESLabPlan.createProjectGroup(group_name, desc=None, createById=None)
```

### `IESLabPlan.createProject(name, project_group, start_date, end_date, construction_cycle, desc=None, createById=None)`

- 静态方法
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
IESLabPlan.createProject(name, project_group, start_date, construction_cycle, desc=None, createById=None)
```

### `ieslabPlan.iesLabTypicalDayRun(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

运行典型日计算。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.iesLabTypicalDayRun(job=None, name=None, **kwargs)
```

### `ieslabPlan.iesLabEvaluationRun(planId, type=None)`

- 实例方法
- `planId`: [Number][Number] 方案 id，表示优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `type`: [String][String] 评估类型，可选值为：**能效评价**、**环保评价**
- Returns: [Runner][Object] 返回方案评估运行实例

运行方案评估。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.iesLabEvaluationRun(planId, type=None)
```

### `ieslabPlan.iesLabEnergyEvaluationRun(planId)`

- 实例方法
- `planId`: [Number][Number] 方案 id
- Returns: [Runner][Object] 返回能效评价运行实例

运行能效评价。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.iesLabEnergyEvaluationRun(planId)
```

### `ieslabPlan.iesLabPlanRun()`

- 实例方法
- Returns: [Runner][Object] 返回方案优选运行实例

运行方案优选。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.iesLabPlanRun()
```

### `ieslabPlan.iesLabPlanKill()`

- 实例方法

停止并删除方案优选算例。

```python showLineNumbers class="red-text"
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.iesLabPlanKill()
```


## Class: `IESLabOpt`

- Extends: [Object][Object]

**CloudPSS** IESLabOpt 基类

### `ieslabOpt.id`

- [String][String]

算例id。

### `ieslabOpt.name`

- [String][String]

算例名称。

### `ieslabOpt.project_group`

- [String][String]

算例分组信息。

### `ieslabOpt.model`

- [Model](../10-model/index.md)

算例拓扑信息。

### `ieslabOpt.dataManageModel`

- [IESOptDataManageModel](#class-datamanagemodel)

算例的数据管理模块数据。

### `ieslabOpt.planModel`

- [IESLabOptModel](#class-ieslaboptmodel)

方案优选模块。

### `ieslabOpt.evaluationModel`

- [IESLabOptEvaluationModel](#class-ieslaboptevaluationmodel)

方案评估模块。

### `ieslabOpt.currentPlanResult`

- [IESLabOptResult](#class-ieslaboptresult)

方案优选结果数据。

### `ieslabOpt.currentEvaluationResult`

- [IESLabOptEvaluationResult](#class-ieslabevaluationresult)

方案评估结果数据。

### `IESLabOpt.fetch(id)`

- 静态方法
- `id`: [String][String] 算例 id
- Returns: [IESLabOpt](#class-ieslabopt) 返回一个算例

获取算例信息。

```python showLineNumbers
IESLabOpt.fetch(id)
```

### `IESLabOpt.createProjectGroup(group_name, desc=None, createById=None)`

- 静态方法
- `group_name`: [String][String] 项目组名称
- `desc`: [String][String] 项目组描述
- `createById`: [Number][Number] 父项目组id  可选参数，如果是从已有项目组导入的项目组，必填此项
- Returns: [Number][Number] 返回创建的项目组 id

创建项目组。

```python showLineNumbers
IESLabOpt.createProjectGroup(group_name, desc=None, createById=None)
```

### `IESLabOpt.createProject(name, project_group, start_date, end_date, construction_cycle, desc=None, createById=None)`

- 静态方法
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
IESLabOpt.createProject(name, project_group, start_date, construction_cycle, desc=None, createById=None)
```

### `ieslabOpt.iesLabTypicalDayRun(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

运行典型日计算。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
# highlight-next-line
ieslabOpt.iesLabTypicalDayRun(job=None, name=None, **kwargs)
```

### `ieslabOpt.iesLabEvaluationRun(planId, type=None)`

- 实例方法
- `planId`: [Number][Number] 方案 id，表示优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `type`: [String][String] 评估类型，可选值为：**能效评价**、**环保评价**
- Returns: [Runner][Object] 返回方案评估运行实例

运行方案评估。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
# highlight-next-line
ieslabOpt.iesLabEvaluationRun(planId, type=None)
```

### `ieslabOpt.iesLabEnergyEvaluationRun(planId)`

- 实例方法
- `planId`: [Number][Number] 方案 id
- Returns: [Runner][Object] 返回能效评价运行实例

运行能效评价。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
# highlight-next-line
ieslabOpt.iesLabEnergyEvaluationRun(planId)
```

### `ieslabOpt.iesLabOptRun()`

- 实例方法
- Returns: [Runner][Object] 返回方案优选运行实例

运行方案优选。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
# highlight-next-line
ieslabOpt.iesLabOptRun()
```

### `ieslabOpt.iesLabOptKill()`

- 实例方法

停止并删除方案优选算例。

```python showLineNumbers class="red-text"
ieslabOpt = IESLabOpt.fetch(id)
# highlight-next-line
ieslabOpt.iesLabOptKill()
```

## Class: `dataManageModel`

- Extends: [Object][Object]

**CloudPSS** IESLab 数据管理模块类

### `dataManageModel.GetDataItem(ID)`

- 实例方法
- `ID`: [String][String] 数据项的标识符，可以在所有类型的数据项中实现唯一标识
- Returns: [Dict][Dict] 返回该数据项的信息（源数据的引用）

获取 ID 对应的数据信息。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.GetDataItem(ID)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.GetDataItem(ID)
```

### `dataManageModel.GetItemList(dataType)`

- 实例方法
- `dataType`: [Enum][Enum] 数据的种类标识，包含： 
  - `光伏`: "PhotovoltaicSys"
  - `风机`: "WindPowerGenerator"
  - `燃气轮机`: "GasTurbine"
  - `热泵`: "HeatPump"
  - `燃气锅炉`: "GasBoiler"
  - `热管式太阳能集热器`: "HPSolarCollector"
  - `电压缩制冷机`: "CompRefrg"
  - `吸收式制冷机`: "AbsorptionChiller"
  - `蓄电池`: "Battery"
  - `储水罐`: "WaterTank"
  - `变压器`: "Transformer"
  - `传输线`: "TransferLine"
  - `模块化多电平变流器`: "MMC"
  - `离心泵`: "CentrifugalPump"
  - `管道`: "Pipe"
  - `采暖制冷负荷`: "thermalLoads"
  - `电负荷`: "electricLoads"
  - `燃料`: "fuels"
  - `热`: "HVACHeating"
  - `冷`: "HVACCooling"
  - `常数电价`: "常数电价"
  - `分时电价`: "分时电价"
  - `阶梯电价`: "阶梯电价"
  - `分时阶梯电价`: "分时阶梯电价"
- Returns: [List][List] 返回该种类下所有数据项的列表

获取 dataType 类型对应所有数据项的列表。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.GetItemList(dataType)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.GetItemList(dataType)
```

### `dataManageModel.AddDataItem(dataType, data)`

- 实例方法
- `dataType`: [Enum][Enum] 数据的种类标识，包含：
  - `光伏`: "PhotovoltaicSys"
  - `风机`: "WindPowerGenerator"
  - `燃气轮机`: "GasTurbine"
  - `热泵`: "HeatPump"
  - `燃气锅炉`: "GasBoiler"
  - `热管式太阳能集热器`: "HPSolarCollector"
  - `电压缩制冷机`: "CompRefrg"
  - `吸收式制冷机`: "AbsorptionChiller"
  - `蓄电池`: "Battery"
  - `储水罐`: "WaterTank"
  - `变压器`: "Transformer"
  - `传输线`: "TransferLine"
  - `模块化多电平变流器`: "MMC"
  - `离心泵`: "CentrifugalPump"
  - `管道`: "Pipe"
  - `采暖制冷负荷`: "thermalLoads"
  - `电负荷`: "electricLoads"
  - `燃料`: "fuels"
  - `热`: "HVACHeating"
  - `冷`: "HVACCooling"
  - `常数电价`: "常数电价"
  - `分时电价`: "分时电价"
  - `阶梯电价`: "阶梯电价"
  - `分时阶梯电价`: "分时阶梯电价"
- `data`:  [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求
- Returns: 返回新添加数据项的 ID，如果数据结构不满足要求，抛出异常

向 dataType 类型的数据库中添加内容为 data 的数据项。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.AddDataItem(dataType, data)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.AddDataItem(dataType, data)
```

### `dataManageModel.UpdateDataItem(ID, data)`

- 实例方法
- ID: [String][String] 数据项的标识符，可以在所有类型的数据项中实现唯一标识
- data: [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求
- Returns: [Boolean][Boolean] 返回 True，更新成功

更新数据库 ID 对应数据项。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.UpdateDataItem(ID, data)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.UpdateDataItem(ID, data)
```

### `dataManageModel.DeleteDataItem(ID)`

- 实例方法
- `ID`: [String][String] 数据项的标识符，可以在所有类型的数据项中实现唯一标识
- Returns: [Boolean][Boolean] 删除是否成功标志，如果ID错误，抛出异常

删除 ID 对应的数据。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.DeleteDataItem(ID)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.DeleteDataItem(ID)
```

### `dataManageModel.SetProjectPosition(longitude, latitude)`

- 实例方法
- `longitude`: [Float][Float] 经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 纬度，范围为气象数据源的纬度范围

设置项目的天气数据坐标，加载天气数据。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.SetProjectPosition(longitude, latitude)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.SetProjectPosition(longitude, latitude)
```

### `dataManageModel.GetAtmosData(startDate, endDate)`

- 实例方法
- `startDate`: [String][String] 开始时间，格式为'YYYY-MM-DD'
- `endDate`: [String][String] 结束时间，格式为'YYYY-MM-DD'
- Returns: [List][List] 返回当前项目位置对应时间范围内的气象数据序列，每个元素用字典进行表示，字典的 key 即区分不同的气象数据项（如风速、太阳辐照等）以及标识当前时间点

获取在 startDate 到 endDate 之间的气象数据。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.dataManageModel.GetAtmosData(startDate, endDate)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.dataManageModel.GetAtmosData(startDate, endDate)
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

- 实例方法
- `optType`: [Enum][Enum] 优化目标类型，经济性优化和环保性优化类型

设置当前算例的优化目标。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanModel = ieslabPlan.planModel
# highlight-next-line
ieslabPlanModel.SetOptimizationInfo(optType)
```

### `ieslabPlanModel.GetOptimizationInfo()`

- 实例方法
- Returns: [Enum][Enum] 返回优化目标

获取当前算例的优化目标设置信息。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanModel = ieslabPlan.planModel
# highlight-next-line
ieslabPlanModel.GetOptimizationInfo()
```

### `ieslabPlanModel.run()`

- 实例方法
- Returns: [Runner][Object] 生成方案优选算例，成功返回运行任务实例，如果算例已经运行过方案优选，再次运行会抛异常

运行方案优选。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanModel = ieslabPlan.planModel
# highlight-next-line
ieslabPlanModel.run()
```

###  `ieslabPlanModel.GetRunner()`

- 实例方法
- Returns: [Runner][Object] 返回运行实例

获得运行实例。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanModel = ieslabPlan.planModel
# highlight-next-line
ieslabPlanModel.GetRunner()
```

### `ieslabPlanModel.kill()`

- 实例方法

停止并删除当前运行的优化算例。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanModel = ieslabPlan.planModel
# highlight-next-line
ieslabPlanModel.kill()
```

### `ieslabPlanModel.GetLastTaskResult()`

- 实例方法
- Returns: [Boolean][Boolean] 返回任务运行状态

获取最后一次运行的 taskID 的任务运行状态

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanModel = ieslabPlan.planModel
# highlight-next-line
ieslabPlanModel.GetLastTaskResult()
```

## Class: `IESLabEvaluationModel`

- Extends: [Object][Object]

**CloudPSS** IESLab 方案评估类

### ieslabEvaluationModel.GetFinancialParams(planID)

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 方案对应的财务评价基础参数信息（源数据的引用）

获取 planID 对应的优化方案下财务评估模块的基础信息

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationModel = ieslabPlan.evaluationModel
# highlight-next-line
ieslabEvaluationModel.GetFinancialParams(0)
```

### `ieslabEvaluationModel.run(planID, type=None)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `type`: [String][String] 任务类型：环保评价/能效评价
- Returns: [Runner][Object] 返回运行任务实例

运行方案评估。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationModel = ieslabPlan.evaluationModel
# highlight-next-line
ieslabEvaluationModel.run(planID, type=None)
```

### `ieslabEvaluationModel.EnvironmentalEvaluationRun(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

运行环保评价方案评估。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationModel = ieslabPlan.evaluationModel
# highlight-next-line
ieslabEvaluationModel.EnvironmentalEvaluationRun(planID)
```

### `ieslabEvaluationModel.EnergyEvaluationRun(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

运行能效评价方案评估。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationModel = ieslabPlan.evaluationModel
# highlight-next-line
ieslabEvaluationModel.EnergyEvaluationRun(planID)
```

### `ieslabEvaluationModel.GetRunner(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

获得运行实例。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationModel = ieslabPlan.evaluationModel
# highlight-next-line
ieslabEvaluationModel.GetRunner(planID)
```

## Class: `IESLabEvaluationResult`

- Extends: [Object][Object]

**CloudPSS** IESLab 评价结果类


### `IESLabEvaluationResult.status()`

- 实例方法
- Returns: [Boolean][Boolean] 返回运行状态
  
获取运行状态。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationResult = ieslabPlan.currentEvaluationResult
# highlight-next-line
ieslabEvaluationResult.status()
```

### `IESLabEvaluationResult.GetFinancialResult(resultType, planID)`

- 实例方法
- `resultType`: [Enum][Enum] 财务评价结果表格的类型：
  - `利润与利润分配`: getEconomyResult
  - `财务计划现金`:  getFinancialPlanCashFlowResult
  - `资产负债`:  getLiabilityAssetsResult
  - `投资使用计划与资金筹措` :  getInvestPlanDataResult
  - `借款还本付息计划`:  getLoanRepaymentPlanResult
  - `流动资金估算`:  getFlowCashEvaluteResult
  - `资产折旧与摊销估算`:  getFlowCashEvaluteResult 
  - `总成本费用估算表`:  getSumCostResult
  - `项目总投资现金流量`:  getSumInvestFlowCashResult 
  - `项目资本金现金流量`:  getProjectCashFlowResult 
  - `营业收入、税金、附加和增值税估算`:  getIncomeTaxResult 
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 方案对应的财务评价基础参数信息（源数据的引用）
  
获取 planID 对应的优化方案下 resultType 财务评估结果。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationResult = ieslabPlan.currentEvaluationResult
# highlight-next-line
ieslabEvaluationResult.GetFinancialResult(resultType, planID)
```

### `IESLabEvaluationResult.GetOverviewResult(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [List][List] 返回该方案对应的概览结果
  
获取当前结果类对应的优化方案下的概览结果。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationResult = ieslabPlan.currentEvaluationResult
# highlight-next-line
ieslabEvaluationResult.GetOverviewResult(planID)
```

### `IESLabEvaluationResult.GetEnergyEvaluationResult(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [List][List] 返回该方案对应的能效评价结果
  
获取当前结果类对应的优化方案下的能效评价。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationResult = ieslabPlan.currentEvaluationResult
# highlight-next-line
ieslabEvaluationResult.GetEnergyEvaluationResult(planID)
```

### `IESLabEvaluationResult.GetEnvironmentalEvaluationResult(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [List][List] 返回该方案对应的环保评价结果

获取当前结果类对应的优化方案下的环保评价。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabEvaluationResult = ieslabPlan.currentEvaluationResult
# highlight-next-line
ieslabEvaluationResult.GetEnvironmentalEvaluationResult(planID)
```

## Class: `IESLabPlanResult`

- Extends: [Object][Object]

**CloudPSS** IESLab 运行结果类

### `ieslabPlanResult.status()`

- 实例方法
- Returns: [Boolean][Object] 返回运行状态

获取运行状态。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.status()
```

### `ieslabPlanResult.GetLogs()`

- 实例方法
- Returns: [Dict][Dict] 返回日志信息

获取运行日志。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.GetLogs()
```

### `ieslabPlanResult.GetPlanNum()`

- 实例方法
- Returns: [Number][Number] 返回优化方案的数量

获取当前 result 实例对应的优化方案数量。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.GetPlanNum()
```

### `ieslabPlanResult.GetPlanInfo(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 返回方案的基础信息，包括投资、运行成本、负荷总量等信息

获取 planID 对应的优化方案的基础信息。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.GetPlanInfo(planID)
```

### `ieslabPlanResult.GetPlanConfiguration(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 返回方案的配置信息，包括每种设备的选型配置、容量配置、成本等相关信息

获取 planID 对应的优化方案的配置信息。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.GetPlanConfiguration(planID)
```

### `ieslabPlanResult.GetComponentResult(planID, componentID, typicalDayName='')`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `componentID`: [String][String] 元件的标识符
- `typicalDayName`: [String][String] 典型日的名称
- Returns: [Dict][Dict] 返回元件在不同典型日下的运行信息

获取 planID 对应的优化方案下componentID对应元件的运行信息。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.GetComponentResult(planID, componentID, typicalDayName)
```

### `ieslabPlanResult.GetComponentTypiDays(planID, componentID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `componentID`: [String][String] 元件的标识符
- Returns: [Number][Number] 返回优化方案的数量

获取当前 result 实例对应的优化方案数量。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.GetComponentResult(planID, componentID, typicalDayName)
```

### `ieslabPlanResult.getLastTaskResult()`

- 实例方法
- Returns: [Dict][Dict] 返回运行结果

获取最后一次运行的 taskID 的运行结果。

```python showLineNumbers
ieslabPlan = IESLabPlan.fetch(id)
ieslabPlanResult = ieslabPlan.currentPlanResult
# highlight-next-line
ieslabPlanResult.getLastTaskResult()
```



## Class: `IESLabOptModel`

- Extends: [Object][Object]

**CloudPSS** IESLabOptModel 方案优选模块类

### `ieslabOptModel.simulationId`

- [String][String]

算例 id。

### `ieslabOptModel.optimizationInfo`

- [Dict][Dict]
  - `优化目标`: OptGoal
  - `储能动作灵敏度`:  StoSen
  - `聚类算法`:  clustering_algorithm
  - `聚类数目` :  num_method
  - `是否允许弃风弃光`:  AbandonRen
  - `电不平衡惩罚成本(元/kW)`:  PowUnPrice
  - `弃热惩罚成本(元/kW)`:  HeatAbandonPrice 
  - `调试参数`:  @debug

当前算例的优化目标设置信息。

### `ieslabOptModel.SetOptimizationInfo(optType)`

- 实例方法
- `optType`: [Dict][Dict] 优化目标类型

设置当前算例的优化目标。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptModel = ieslabOpt.planModel
# highlight-next-line
ieslabOptModel.SetOptimizationInfo(optType)
```

### `ieslabOptModel.GetOptimizationInfo()`

- 实例方法
- Returns: [DICT][DICT] 返回优化目标

获取当前算例的优化目标设置信息。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptModel = ieslabOpt.planModel
# highlight-next-line
ieslabOptModel.GetOptimizationInfo()
```

### `ieslabOptModel.run()`

- 实例方法
- Returns: [Runner][Object] 生成方案优选算例，成功返回运行任务实例，如果算例已经运行过方案优选，再次运行会抛异常

运行方案优选。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptModel = ieslabOpt.planModel
# highlight-next-line
ieslabOptModel.run()
```

###  `ieslabOptModel.GetRunner()`

- 实例方法
- Returns: [Runner][Object] 返回运行实例

获得运行实例。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptModel = ieslabOpt.planModel
# highlight-next-line
ieslabOptModel.GetRunner()
```

### `ieslabOptModel.kill()`

- 实例方法

停止并删除当前运行的优化算例。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptModel = ieslabOpt.planModel
# highlight-next-line
ieslabOptModel.kill()
```

### `ieslabOptModel.GetLastTaskResult()`

- 实例方法
- Returns: [Boolean][Boolean] 返回任务运行状态

获取最后一次运行的 taskID 的任务运行状态

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptModel = ieslabOpt.planModel
# highlight-next-line
ieslabOptModel.GetLastTaskResult()
```


## Class: `IESLabOptEvaluationModel`

- Extends: [Object][Object]

**CloudPSS** IESLabOpt 方案评估类

### `ieslabOptEvaluationModel.GetFinancialParams(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 方案对应的财务评价基础参数信息（源数据的引用）

获取 planID 对应的优化方案下财务评估模块的基础信息

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationModel = ieslabOpt.evaluationModel
# highlight-next-line
ieslabOptEvaluationModel.GetFinancialParams(0)
```

### `ieslabOptEvaluationModel.run(planID, type=None)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `type`: [String][String] 任务类型：环保评价/能效评价
- Returns: [Runner][Object] 返回运行任务实例

运行方案评估。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationModel = ieslabOpt.evaluationModel
# highlight-next-line
ieslabOptEvaluationModel.run(planID, type=None)
```

### `ieslabOptEvaluationModel.EnvironmentalEvaluationRun(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

运行环保评价方案评估。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationModel = ieslabOpt.evaluationModel
# highlight-next-line
ieslabOptEvaluationModel.EnvironmentalEvaluationRun(planID)
```

### `ieslabOptEvaluationModel.EnergyEvaluationRun(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

运行能效评价方案评估。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationModel = ieslabOpt.evaluationModel
# highlight-next-line
ieslabOptEvaluationModel.EnergyEvaluationRun(planID)
```

### `ieslabOptEvaluationModel.GetRunner(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的ID，数值位于0~优化方案数量之间
- Returns: [Runner][Object] 返回运行任务实例

获得运行实例。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationModel = ieslabOpt.evaluationModel
# highlight-next-line
ieslabOptEvaluationModel.GetRunner(planID)
```


### `IESLabOptEvaluationResult.GetOverviewResult(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [List][List] 返回该方案对应的概览结果
  
获取当前结果类对应的优化方案下的概览结果。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationResult = ieslabOpt.currentEvaluationResult
# highlight-next-line
ieslabOptEvaluationResult.GetOverviewResult(planID)
```

### `IESLabOptEvaluationResult.GetEnergyEvaluationResult(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [List][List] 返回该方案对应的能效评价结果
  
获取当前结果类对应的优化方案下的能效评价。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationResult = ieslabOpt.currentEvaluationResult
# highlight-next-line
ieslabOptEvaluationResult.GetEnergyEvaluationResult(planID)
```

### `IESLabOptEvaluationResult.GetEnvironmentalEvaluationResult(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [List][List] 返回该方案对应的环保评价结果

获取当前结果类对应的优化方案下的环保评价。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptEvaluationResult = ieslabOpt.currentEvaluationResult
# highlight-next-line
ieslabOptEvaluationResult.GetEnvironmentalEvaluationResult(planID)
```


## Class: `IESLabOptResult`

- Extends: [Object][Object]

**CloudPSS** IESLab 运行结果类

### `ieslabOptResult.status()`

- 实例方法
- Returns: [Boolean][Object] 返回运行状态

获取运行状态。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.status()
```


### `ieslabOptResult.GetLogs()`

- 实例方法
- Returns: [Dict][Dict] 返回日志信息

获取运行日志。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.GetLogs()
```

### `ieslabOptResult.GetPlanNum()`

- 实例方法
- Returns: [Number][Number] 返回优化方案的数量

获取当前 result 实例对应的优化方案数量。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.GetPlanNum()
```

### `ieslabOptResult.GetPlanInfo(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 返回方案的基础信息，包括投资、运行成本、负荷总量等信息

获取 planID 对应的优化方案的基础信息。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.GetPlanInfo(planID)
```

### `ieslabOptResult.GetPlanConfiguration(planID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 返回方案的配置信息，包括每种设备的选型配置、容量配置、成本等相关信息

获取 planID 对应的优化方案的配置信息。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.GetPlanConfiguration(planID)
```

### `ieslabOptResult.GetComponentResult(planID, componentID, typicalDayName='')`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `componentID`: [String][String] 元件的标识符
- `typicalDayName`: [String][String] 典型日的名称
- Returns: [Dict][Dict] 返回元件在不同典型日下的运行信息

获取 planID 对应的优化方案下componentID对应元件的运行信息。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.GetComponentResult(planID, componentID, typicalDayName)
```

### `ieslabOptResult.GetComponentTypiDays(planID, componentID)`

- 实例方法
- `planID`: [Number][Number] 优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- `componentID`: [String][String] 元件的标识符
- Returns: [Number][Number] 返回优化方案的数量

获取当前 result 实例对应的优化方案数量。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.GetComponentResult(planID, componentID, typicalDayName)
```

### `ieslabOptResult.getLastTaskResult()`

- 实例方法
- Returns: [Dict][Dict] 返回运行结果

获取最后一次运行的 taskID 的运行结果。

```python showLineNumbers
ieslabOpt = IESLabOpt.fetch(id)
ieslabOptResult = ieslabOpt.currentPlanResult
# highlight-next-line
ieslabOptResult.getLastTaskResult()
```



[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[Float]: https://docs.python.org/3.8/c-api/float.html
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries
[Enum]: https://docs.python.org/3.8/library/enum.html