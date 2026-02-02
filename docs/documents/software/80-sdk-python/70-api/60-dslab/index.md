---
title: DSLab 类
description: CloudPSS Python SDK API 文档 DSLab 类
---

## Class: `DSLab`

- Extends: [Object][Object]

**CloudPSS** DSLab 基类

### `dslab.id`

- [String][String]

算例 id

### `dslab.resource`

- [String][String]

算例 resource id

### `dslab.name`

- [String][String]

算例名称

### `DSLab.fetch(simulationId)`

- 静态方法
- `simulationId`: [String][String] 数据项的算例 id
- Returns: [DSLab](#class-dslab) 返回 DSLab 实例

获取算例信息。

```python showLineNumbers
DSLab.fetch(simulationId)
```

### `DSLab.createProjectGroup(name, description=None, createById=None)`

- 静态方法
- `name`: [String][String] 项目组名称
- `description`: [String][String] 项目组描述 可选参数
- `createById`: [String][String] 父项目组 id 可选参数，如果是从已有项目组导入的项目组，必填此项
- Returns: [Number][Number] 返回创建的项目组 id

创建项目组。

```python showLineNumbers
DSLab.createProjectGroup(name, description=None, createById=None)
```

### `DSLab.createProject(name, gid, description=None, initialTerm=None, build=None, operate=None, yearsInOperation=None)`

- 静态方法
- `name`: [String][String] 项目名称
- `gid`: [Number][Number] 父项目组 id
- `description`: [String][String] 项目组描述 可选参数
- `initialTerm`: [String][String] 项目起始年限，可选参数
- `build`: [String][String] 项目建设期（年），可选参数
- `operate`: [String][String] 项目生命周期（年），可选参数
- `yearsInOperation`: [String][String] 已投运年限，可选参数
- Returns: [Number][Number] 返回创建的项目 id

创建项目

```python showLineNumbers
DSLab.createProject(name, gid, description=None, initialTerm=None, build=None, operate=None, yearsInOperation=None)
```

### `dslab.run(job, name=None)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

调用仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.run(job, name=None)
```

### `dslab.runIESLoadPrediction(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

运行负荷预测内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runIESLoadPrediction(job=None, name=None)
```

### `dslab.runIESPowerFlow(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

运行时序潮流内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runIESPowerFlow(job=None, name=None)
```

### `dslab.runDSEMTP(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行电磁暂态仿真内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSEMTP(job=None, name=None)
```

### `dslab.runDSEMTP(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行电磁暂态仿真内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSEMTP(job=None, name=None)
```

### `dslab.runIESEnergyStoragePlan(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

运行储能规划内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runIESEnergyStoragePlan(job=None, name=None)
```

### `dslab.dsLabFinancialRun(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行技术经济分析内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dsLabFinancialRun(job=None, name=None)
```

### `dslab.dsLabFinancialRun(job=None, name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行技术经济分析内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dsLabFinancialRun(job=None, name=None)
```

### `dslab.runIESShortCurrent(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job](../30-job/index.md) 返回一个运行实例

运行短路电流计算内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runIESShortCurrent(job=None, name=None)
```

### `dslab.runDSReliability(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行供电可靠性计算内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSReliability(job=None, name=None)
```

### `dslab.runDSReactivePowerOptimize(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行无功优化内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSReactivePowerOptimize(job=None, name=None)
```

### `dslab.runDSStaticSecurity(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行静态安全性分析内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSStaticSecurity(job=None, name=None)
```

### `dslab.runDSResilience(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行韧性评估与提升内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSResilience(job=None, name=None)
```

### `dslab.runDSHarmonic(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行谐波分析内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSHarmonic(job=None, name=None)
```

### `dslab.runDSReliability(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行供电可靠性计算内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSReliability(job=None, name=None)
```

### `dslab.runDSReactivePowerOptimize(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行无功优化内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSReactivePowerOptimize(job=None, name=None)
```

### `dslab.runDSStaticSecurity(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行静态安全性分析内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSStaticSecurity(job=None, name=None)
```

### `dslab.runDSResilience(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行韧性评估与提升内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSResilience(job=None, name=None)
```

### `dslab.runDSHarmonic(self,job=None,name=None, **kwargs)`

- 实例方法
- `job`: [String][String] 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称
- Returns: [Job][Object] 返回一个运行实例

运行谐波分析内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.runDSHarmonic(job=None, name=None)
```

## Class: `dataManageModel`

- Extends: [Object][Object]

**CloudPSS** DSLab 数据管理模块类

### `dataManageModel.GetItemList(kind)`

- 实例方法
- `kind`: [String][String] 数据的种类标识，包含：光伏、光伏曲线、风机、风机曲线、燃气、燃气曲线、水电、水电曲线、火电、火电曲线、生物质发电、生物质发电曲线、垃圾电厂、垃圾电厂曲线、传输线、变压器、开关、负荷分类、负荷用户、储能设备、储能运行策略、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- Returns: [List][List] 返回该种类下所有数据项的列表

获取 kind 类型对应所有数据项的列表。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.GetItemList(kind)
```

### `GetItemExtra(kind, uuid)`

- 实例方法
- `kind`: [String][String] 数据的种类标识，包含：光伏、光伏曲线、风机、风机曲线、燃气、燃气曲线、水电、水电曲线、火电、火电曲线、生物质发电、生物质发电曲线、垃圾电厂、垃圾电厂曲线、传输线、变压器、开关、负荷分类、负荷用户、储能设备、储能运行策略、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- `uuid`: [String][String] 数据的唯一标识
- Returns: [List][List] 返回 kind 类型对应数据项的基准出力曲线、负荷曲线、策略曲线数据，如果不存在返回 None

获取 kind 类型对应数据项的基准出力曲线、负荷曲线、策略曲线数据

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.GetItemExtra(kind, uuid)
```

### `dataManageModel.AddDataItem(kind, data, extra=None)`

- 实例方法
- `kind`: [String][String] 数据的种类标识，包含：光伏、光伏曲线、风机、风机曲线、燃气、燃气曲线、水电、水电曲线、火电、火电曲线、生物质发电、生物质发电曲线、垃圾电厂、垃圾电厂曲线、传输线、变压器、开关、负荷分类、负荷用户、储能设备、储能运行策略、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- `data`:  [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求
- `extra`: [List][List] 添加的基准出力曲线、负荷曲线、策略曲线数据
- Returns: 返回新添加数据项的 ID，如果数据结构不满足要求，抛出异常

向 kind 类型的数据库中添加内容为 data 的数据项。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.AddDataItem(dataType, data)
```

### `dataManageModel.UpdateDataItem(kind, data)`

- 实例方法
- `kind`: [String][String] 数据的种类标识，包含：光伏、光伏曲线、风机、风机曲线、燃气、燃气曲线、水电、水电曲线、火电、火电曲线、生物质发电、生物质发电曲线、垃圾电厂、垃圾电厂曲线、传输线、变压器、开关、负荷分类、负荷用户、储能设备、储能运行策略、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- `data`: [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求
- Returns: [List][List] 返回该种类下所有数据项的列表

更新 kind 类型对应数据项。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.UpdateDataItem(kind, data)
```

### `dataManageModel.DeleteDataItem(id, kind)`

- 实例方法
- `id`: [Number][Number] 数据的 id
- `kind`: [String][String] 数据的种类标识，包含：光伏、光伏曲线、风机、风机曲线、燃气、燃气曲线、水电、水电曲线、火电、火电曲线、生物质发电、生物质发电曲线、垃圾电厂、垃圾电厂曲线、传输线、变压器、开关、负荷分类、负荷用户、储能设备、储能运行策略、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- Returns: [List][List] 返回该种类下所有数据项的列表

删除 id 和 kind 对应的数据。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.DeleteDataItem(id, kind)
```

### `dataManageModel.UpdateItemExtra(self, kind, data)`

- 实例方法
- `kind`: [String][String] 数据的种类标识，包含：光伏、光伏曲线、风机、风机曲线、燃气、燃气曲线、水电、水电曲线、火电、火电曲线、生物质发电、生物质发电曲线、垃圾电厂、垃圾电厂曲线、传输线、变压器、开关、负荷分类、负荷用户、储能设备、储能运行策略、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- `data`: [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求，例如: `{'id': '', 'data': {}, 'extra': []}`
- Returns: [List][List] 返回该种类下所有数据项的列表

更新 kind 对应的负荷曲线等数据

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# 更新曲线数据
data = {
    'id': '',
    'data': {},
    'extra': []
}
# highlight-next-line
project.dataManageModel.UpdateItemExtra(kind, data)
```


### `dataManageModel.GetAtmosData(locationId, date)`

- 实例方法
- `locationId`: [String][String] 定位点 id
- `date`: [String][String] 时间，格式为'YYYY-MM-DD'
- Returns: [List][List] 返回当前项目位置对应时间范围内的气象数据序列，每个元素用字典进行表示，字典的key即区分不同的气象数据项（如风速、太阳辐照等）以及标识当前时间点

获取日期在 date 的气象数据

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.GetAtmosData(locationId, date)
```

### `dataManageModel.LocationGet()`

- 实例方法
- Returns: [List][List] 返回气象定位点数据，包含id，经度坐标，纬度坐标，定位点名称

获取气象定位点数据。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.LocationGet()
```

### `dataManageModel.LocationCreate(name=None, longitude=None, latitude=None)`

- 实例方法
- `name`: [String][String] 定位点名称，可选
- `longitude`: [Float][Float] 可选，表示经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 可选，表示纬度，范围为气象数据源的纬度范围

创建气象定位点。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.LocationCreate(name=None, longitude=None, latitude=None)
```

### `dataManageModel.LocationUpdate(id, name=None, longitude=None, latitude=None)`

- 实例方法
- `id`: [String][String] 定位点id
- `name`: [String][String] 定位点名称，可选
- `longitude`: [Float][Float] 可选，表示经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 可选，表示纬度，范围为气象数据源的纬度范围

修改气象定位点。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.LocationUpdate(id, name=None, longitude=None, latitude=None)
```

### `dataManageModel.LocationDelete(id)`

- 实例方法
- `id`: [String][String] 定位点id

删除气象定位点。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.LocationDelete(id)
```

### `dataManageModel.LoadWeather()`

- 实例方法

加载气象数据。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
# highlight-next-line
dslab.dataManageModel.LoadWeather()
```

## Class: `DSLabFinancialAnalysisModel`

- Extends: [Object][Object]

**CloudPSS** DSLab 经济分析模块类

### `dslabFinancialAnalysisModel.GetFinancialParams(planID)`

- 实例方法
- `planID`: [Number][Number] 表示优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Dict][Dict] 代表方案对应的财务评价基础参数信息

获取 planID 对应的优化方案下财务评估模块的基础信息。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
dslabFinancialAnalysisModel = dslab.financialAnalysisModel
# highlight-next-line
dslabFinancialAnalysisModel.GetFinancialParams(planID)
```

### `dslabFinancialAnalysisModel.run(planID)`

- 实例方法
- `planID`: [Number][Number] 表示优化方案的 ID，数值位于 0 ~ 优化方案数量之间
- Returns: [Runner][Object] 返回一个运行任务

运行财务评价概览计算。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
dslabFinancialAnalysisModel = dslab.financialAnalysisModel
# highlight-next-line
dslabFinancialAnalysisModel.run(planID)
```

## Class: `DSLabResult`

- Extends: [Object][Object]

**CloudPSS** DSLab 结果类

### `dslabResult.status()`

- 实例方法
- Returns: [Boolean][Boolean] 运行状态

获取运行状态

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
dslabResult = dslab.currentEvaluationResult
# highlight-next-line
dslabResult.status()
```

### `dslabResult.GetFinancialResult(resultType)`

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
- Returns: [Dict][Dict] 方案对应的财务评价基础参数信息（源数据的引用）

获取优化方案 resultType 对应的财务评估结果。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
dslabResult = dslab.currentEvaluationResult
# highlight-next-line
dslabResult.GetFinancialResult(resultType)
```

### `dslabResult.GetOverviewResult()`

- 实例方法
- Returns: [List][List] 返回该方案对应的概览结果

获取当前结果类对应的概览结果。

```python showLineNumbers
dslab = DSLab.fetch(simulationId)
dslabResult = dslab.currentEvaluationResult
# highlight-next-line
dslabResult.GetOverviewResult()
```

[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[Float]: https://docs.python.org/3.8/c-api/float.html
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries
[Enum]: https://docs.python.org/3.8/library/enum.html