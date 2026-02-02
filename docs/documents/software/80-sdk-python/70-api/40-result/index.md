---
title: 结果类
description: CloudPSS SDK API 文档结果类

tags:
- sdk

---

## Class: `Result`
- Extends: [Object][Object]
  
**CloudPSS** Result 结果处理基类

### `result.result`

- [Dict][Dict]

处理后的结果缓存。

### `result.modify(data, model)`

- 实例方法
- `data`: [Dict][Dict] 消息字典
- `model`: [Model](../10-model/index.md) 算例项目
python
通过指定消息修改算例文件。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
runner.result.modify(data, model)
```

### `result.getMessagesByKey(key)`

- 实例方法
- `key`: [String][String] 消息key
- Returns: [List][List] 对应 key 的数据数组

获取指定 key 的消息数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
message = runner.result.getMessagesByKey('log')
```

### `result.getMessagesByType(type)`

- 实例方法
- `type`: [String][String] 指定类型
  - `log`: 日志消息类型
  - `terminate`: 结束消息类型
  - `plot`: 图表数据类型
- Returns: [List][List] 返回指定类型消息的列表
  
获取指定类型的消息数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
message = runner.result.getMessagesByType('log')
```

### `result.getMessage(index)`

- 实例方法
- `index`: [Number][Number] 数据的位置信息
- Returns: [Dict][Dict] 获取指定位置的消息数据

获取指定位置的消息数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
message = runner.result.getMessagesByType(index)
```

### `result.getMessages()`

- 实例方法
- Returns: [List][List] 返回消息数据列表

获取所有消息数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
message = runner.result.getMessages()
```

### `result.getLogs()`

- 实例方法
- Returns: [List][List] 返回当前任务的日志列表

获取当前任务的日志。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
logs = runner.result.getLogs()
```

### `result.getMessageLength()`

- 实例方法
- Returns: [Number][Number] 返回消息数据的长度

获取消息数据的长度。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
length = runner.result.getMessageLength()
```


### `result.pop(index=-1)`

- 实例方法
- `index`: [Number][Number] 索引，默认为 -1
- Returns: [Dict][Dict] 返回消息数据

pop 出缓存中的消息。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
result = runner.result.pop(-1)
```


## Class: `EMTResult`
- Extends: [Result](#class-result)
  
**CloudPSS** 电磁暂态结果处理类，提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式，不再是接收时分段的数据。该类只提供 EMT 仿真使用。

### `emtResult.getPlots()`

- 实例方法
- Returns: [Dict][Dict] 返回所有的 plots 数据字典

获取所有的 plots 数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
result = emtResult.getPlots()
```

### `emtResult.getPlot(index)`

- 实例方法
- `index`: [Number][Number] 图表位置
- Returns: [Dict][Dict] 返回指定序号的数据分组

获取指定序号的数据分组。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
result = emtResult.getPlot(0)
```

### `emtResult.getPlotChannelNames(index)`

- 实例方法
- `index`: [Number][Number] 输出通道位置
- Returns: [List][List] 返回通道名称列表

获取一组输出分组下的所有通道名称。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
result = emtResult.getPlotChannelNames(0)
```

### `emtResult.getPlotChannelData(index, channelName)`

- 实例方法
- `index`: [Number][Number] 输出通道位置
- `channelName`: [String][String] 输出通道名称
- Returns: [Dict][Dict] 通道数据, trace 数据

获取一组输出分组下的所有通道名称。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
result = emtResult.getPlotChannelData(0, '')
```

### `result.next()`

- 实例方法

调试接口，前进一个时步。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.next()
```

### `result.goto(step)`

- 实例方法
- `step`: [Number][Number] 指定时步

调试接口，前进到指定时步。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.goto(-1)
```

### `result.writeShm(path, buffer, offset)`

- 实例方法
- `path`: [String][String] 内存路径
- `buffer`: [Float][Float] 写入的数据
- `offset`: [Number][Number] 写入的偏移量

写内存接口（未最终确定，后续版本进行修改）。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.writeShm('data', buffer, 0)
```

### `result.stopSimulation()`

- 实例方法

通过事件链接口停止仿真（未最终确定，后续版本进行修改）。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.stopSimulation()
```

### `result.saveSnapshot(snapshotNumber, log='保存断面成功')`

- 实例方法
- `snapshotNumber`: [Number][Number] 断面序号
- `log` [String][String] 保存断面成功的日志

通过事件链接口保存断面（未最终确定，后续版本进行修改）。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.saveSnapshot(0, log='保存断面成功')
```

### `result.loadSnapshot(snapshotNumber, log='加载断面成功')`

- 实例方法
- `snapshotNumber`: [Number][Number] 断面序号
- `log` [String][String] 加载断面成功的日志

通过事件链接口加载断面 （未最终确定，后续版本进行修改）。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.loadSnapshot(0, log='加载断面成功')
```

### `result.control(controlParam, eventTime='-1', eventTimeType='1')`

- 实例方法
- `controlParam`: [List][List] 控制参数
- `eventTime`: [Number][Number] 事件时间，默认为 -1
- `eventTimeType`: [Number][Number] 事件时间类型，默认为 1

通过事件链接口修改元件数据 （未最终确定，后续版本进行修改）。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.control(controlParam, eventTime='-1', eventTimeType='1')
```


### `result.monitor(monitorParam, eventTime='-1', eventTimeType='1')`

- 实例方法
- `monitorParam`: [List][List] 监视参数
- `eventTime`: [Number][Number] 事件时间，默认为 -1
- `eventTimeType`: [Number][Number] 事件时间类型，默认为 1

通过事件链接口停止仿真 （未最终确定，后续版本进行修改）

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runEMT() # 运行电磁暂态
emtResult = runner.result
# highlight-next-line
emtResult.monitor(monitorParam,eventTime='-1',eventTimeType='1')
```


## Class: `PowerFlowResult`
- Extends: [Result](#class-result)
  
**CloudPSS** 潮流结果处理类，提供快速获取 buses 和 branches 的接口，并提供潮流写入项目的接口。该类只提供潮流仿真时使用。

### `powerflowResult.getBuses()`

- 实例方法
- Returns: [List][List] 通道数据, trace 数据

获取潮流结果 buses 数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runPowerFlow() # 运行潮流计算
powerflowResult = runner.result
# highlight-next-line
result = powerflowResult.getBuses()
```

### `powerflowResult.getBranches()`

- 实例方法
- Returns: [List][List] 通道数据, trace 数据

获取潮流结果 branches 数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runPowerFlow() # 运行潮流计算
powerflowResult = runner.result
# highlight-next-line
result = powerflowResult.getBranches()
```

### `powerflowResult.powerFlowModify(model)`

- 实例方法

潮流数据写入 model。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.runPowerFlow() # 运行潮流计算
powerflowResult = runner.result
# highlight-next-line
result = powerflowResult.powerFlowModify(model)
```


## Class: `DSLabReliabilityResult`
- Extends: [Result](#class-result)
  
**CloudPSS** 供电可靠性计算结果处理类，提供快速获取系统和负荷可靠性指标的接口函数。该类只供供电可靠性计算时使用。

### `dslabReliabilityResult.getIndexTableByName(name)`

- 实例方法
- `name`: [String][String] 数据类型，标识负荷可靠性指标、系统可靠性指标的参数类型
- Returns: [Dict][Dict] 返回指定类型的可靠性指标字典

获取名称为name的可靠性指标数据。

```python showLineNumbers
dsProject =  cloudpss.DSLab.fetch(simuId)
jobConfig = dsProject.model.jobs[0]
job = dsProject.runDSReliability(job=jobConfig)
job.result.waitFor()
reliabilityResult = job._resultView(DSLabReliabilityResult)
# highlight-next-line
result = reliabilityResult.getIndexTableByName('负荷可靠性指标')
```

### `dslabReliabilityResult.getLoadIndicesByID(id)`

- 实例方法
- `id`: [String][String] 数据类型，标识负荷 id 的参数类型
- Returns: [Dict][Dict] 返回指 id 的负荷可靠性指标字典

获取指定负荷 id 的可靠性指标数据。

```python showLineNumbers
dsProject =  cloudpss.DSLab.fetch(simuId)
jobConfig = dsProject.model.jobs[0]
job = dsProject.runDSReliability(job=jobConfig)
job.result.waitFor()
reliabilityResult = job._resultView(DSLabReliabilityResult)
# highlight-next-line
result = reliabilityResult.getLoadIndicesByID('component_load_1')
```

## Class: `DSLabResilienceResult`
- Extends: [Result](#class-result)
  
**CloudPSS** 韧性评估与提升计算结果处理类，提供快速获取指定结果表格的接口函数。该类只供韧性评估与提升计算时使用。

### `dslabResilienceResult.getTableByName(name)`

- 实例方法
- `name`: [String][String] 数据类型，标识系统时序故障概率等参数类型
- Returns: [Dict][Dict] 以字典形式返回指定表格内容

获取名称为name的可靠性指标数据。

```python showLineNumbers
dsProject =  cloudpss.DSLab.fetch(simuId)
jobConfig = dsProject.model.jobs[0]
job = dsProject.runDSResilience(job=jobConfig)
job.result.waitFor()
resilienceResult = job._resultView(DSLabResilienceResult)
# highlight-next-line
result = resilienceResult.getTableByName('系统时序故障概率')
```


## Class: `IESResult`
- Extends: [Result](#class-result)
  
**CloudPSS** 综合能源结果处理类，提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式，不再是接收时分段的数据。该类只提供 IES 仿真使用。

### `iesResult.getPlotData(compID, labelName, traceName='all', index=-1)`

- 实例方法
- `compID`: [String][String] 元件的标识符
- `labelName`: [String][String] plot 曲线的分组标签
- `traceName` [String][String] Plot 曲线对应分组下的图例名称，当为 'all' 时，返回所有图例的数据
- `index` [Number][Number] 对应图例时序数据中的第 index 项，当小于 0 时，返回该图例所有的时序数据
- Returns: [Dict][Dict] 返回对应元件数据

获取元件 ID 为 compID、对应标签为 labelName、图例名称为 traceName 的 plot 数据的第 index 项。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
iesResult = runner.result
# highlight-next-line
result = iesResult.getPlotData('/AbsorptionChiller_4', '压力(MPa)', traceName='all', index=-1)
```

### `iesResult.getSankey(index)`

- 实例方法
- `index`: [Number][Number] 第 index 个桑基图数据
- Returns: [List][List] 返回第 index 个桑基图数据

获取第 index 个桑基图数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
iesResult = runner.result
# highlight-next-line
iesResult.getPlotData(index)
```

### `iesResult.getSankeyNum()`

- 实例方法
- Returns: [Number][Number] 返回桑基图数据序列的长度

获取桑基图数据序列的长度。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
iesResult = runner.result
# highlight-next-line
iesResult.getSankeyNum()
```

## Class: `IESLabTypicalDayResult`

- Extends: [Result](#class-result)

IESLab 典型日仿真结果类，提供了 IESLab 典型日仿真结果的相关方法。

### `ieslabTypicalDayResult.GetTypical()`

- 实例方法
- Returns: [List][List] 返回所有 GetTypical 典型日数据

获取所有的 GetTypical 典型日数据。

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypical()
```

###  `ieslabTypicalDayResult.GetTypicalDayNum()`

- 实例方法
- Returns: [Number][Number] 返回当前 result 的典型日数量

获取当前 result 的典型日数量。

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypicalDayNum()
```

### `ieslabTypicalDayResult.GetTypicalDayInfo(dayID)`

- 实例方法
- `dayID`: [Number][Number] 典型日 ID，数值位于 0 ~ 典型日数量 之间
- Returns: [Dict][Dict] 返回 dayID 对应典型日的基础信息，包括典型日所代表的日期范围、典型日的名称等

获取dayID对应典型日的基础信息。

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypicalDayInfo(0)
```

### `ieslabTypicalDayResult.GetTypicalDayCurve(dayID, dataType)`

- 实例方法
- `dayID`: [Number][Number] 典型日 ID，数值位于 0 ~ 典型日数量 之间
- `dataType`: [String][String] 数据类型，标识总辐射、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型
- Returns: [List][List] 返回 dayID 对应典型日下 dataType 参数的时序曲线

获取 dayID 对应典型日下 dataType 参数的时序曲线。

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypicalDayCurve(0, '总辐射')
```

###  `ieslabTypicalDayResult.GetTypicalMonth()`

- 实例方法
- Returns: [List][List] 返回所有的 GetTypicalMonth 数据

获取所有的 GetTypicalMonth 数据。

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypicalMonth()
```

### `ieslabTypicalDayResult.GetTypicalMonthNum(monthID)`

- 实例方法
- `monthID`: [Number][Number] 月份 ID，数值位于 1-12 之间
- Returns: [List][List] 返回第 monthID 月各类型的典型日数据

获取第 monthID 月各类型的典型日数据

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypicalMonthData(1)
```

###  `ieslabTypicalDayResult.GetTypicalMonthCurve(monthID, dataType)`

- 实例方法
- `monthID`: [Number][Number] 月份 ID，数值位于 1-12 之间
- `dataType`: [String][String] 数据类型，标识总辐射、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型
- Returns: [List][List] 返回以 1h 为时间间隔的该参数的典型日内时序曲线

获取 monthID 对应典型日下 dataType 参数的时序曲线

```python showLineNumbers
iesplanProject = cloudpss.IESLabPlan.fetch(id)
runner = iesplanProject.iesLabTypicalDayRun() # 运行典型日计算
ieslabTypicalDayResult = runner.result
# highlight-next-line
ieslabTypicalDayResult.GetTypicalMonthCurve(12, '总辐射')
```


[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[Float]: https://docs.python.org/3.8/c-api/float.html
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries
[Enum]: https://docs.python.org/3.8/library/enum.html

