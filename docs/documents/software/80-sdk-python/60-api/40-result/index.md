---
title: 结果类
description: CloudPSS SDK API 文档结果类

tags:
- SDK

---

## Class: `Result`
- Extends: [Object][Object]
  
**CloudPSS** Result 结果处理基类

### `Result.db`

- [Result](#class-result)

消息存储库。

### `Result.load(filePath)`

- 类方法
- `filePath`: [String][String] 文件目录
- Returns: [Result](#class-result) 返回结果实例

加载本地结果文件。

```python showLineNumbers
result = Result.load('C:\\Users\\dps-dm\\cloudpss-sdk\\result\\424111.cjob')
```

### `Result.dump(result, file)`

- 静态方法
- `result`: [Result](#class-result) 待保存的结果数据
- `file`: [String][String] 文件目录
  
保存结果到本地文件。

```python showLineNumbers
file = 'D:\\data\\result\\test.cjob'
# highlight-next-line
Result.dump(result, file)
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

### `result.modify(data, model)`

- 实例方法
- `data`: [Dict][Dict] 消息字典
- `model`: [Model](../10-model/index.md) 算例项目

通过指定消息修改算例文件。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
runner.result.modify(data, model)
```

### `result.getMessagesByType(type)`

- 实例方法
- `type`: [String][String] 指定类型
  - "log": 日志类型
- Returns: [List][List] 返回指定类型消息的列表
  
获取指定类型的消息数据。

```python showLineNumbers
model = cloudpss.Model.fetch('model/Demo/demo')
runner = model.run()
# highlight-next-line
message = runner.result.getMessagesByType('log')
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

