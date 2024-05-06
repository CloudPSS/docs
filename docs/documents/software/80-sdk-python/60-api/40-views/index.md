---
title: 视图类
description: CloudPSS SDK API 文档视图类

tags:
- SDK

---

## Class: `View`

- Extends: [Object][Object]

**CloudPSS** 结果视图基类

### `view.result`

- [Dict][Dict]

处理后的结果缓存。

### `view.modify(data, model)`

- `data`: [Dict][Dict] 消息字典
- `model`: [Model](../10-model/index.md) 算例

通过指定消息修改算例文件。

```python showLineNumbers
view.modify(data, model)
```

### `view.getMessagesByKey(key)`

- `key`: [String][String] 消息key
- Returns: [List][List] 对应 key 的数据数组

获取指定 key 的消息数据。

```python showLineNumbers
message = view.getMessagesByKey('log')
```

### `view.getMessagesByType(type)`

- `type`: [String][String] 消息类型
- Returns: [List][List] 对应类型的数据数组

获取指定类型的消息数据。

```python showLineNumbers
view.getMessagesByType('log')
```

### `view.getMessage(index)`

- `index`: [Number][Number] 数据的位置信息
- Returns: [Dict][Dict] 获取指定位置的消息数据

获取指定位置的消息数据。

```python showLineNumbers
view.getMessage(index)
```

### `view.getMessages()`

- Returns: [List][List] 返回消息数据列表

获取所有消息数据。

```python showLineNumbers
view.getMessages()
```

### `view.getLogs()`

- Returns: [List][List] 返回当前任务的日志，日志只会返回最新的，如果已经获取过日志，再次获取将不在返回

获取当前任务的日志。

```python showLineNumbers
view.getLogs()
```

### `view.getMessageLength()`

- Returns: [Number][Number] 返回消息数据的长度

获取消息数据的长度。

```python showLineNumbers
view.getMessageLength()
```

### `view.pop(index=-1)`

- `index`: [Number][Number] 索引，默认为 -1
- Returns: [Dict][Dict] 返回消息数据

pop 出缓存中的消息。

```python showLineNumbers
view.pop(-1)
```

## Class: `EMTView`

- Extends: [View](#class-view)

电磁暂态结果视图，提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式，不在是接收时分段的数据。该类只提供 EMT 仿真使用。

### `emtview.getPlots()`

- Returns: [Dict][Dict] 返回所有图表的数据

获取所有的曲线分组数据。

```python showLineNumbers
emtview.getPlots()
```

### `emtview.getPlot(index)`

- `index`: [Number][Number] 图表位置
- Returns: [Dict][Dict] 返回指定图表的数据

获取指定序号的曲线分组。

```python showLineNumbers
emtview.getPlot(0)
```

### `emtview.getPlotChannelNames(index)`

- `index`: [Number][Number] 图表位置
- Returns: [List][List] 返回指定图表的通道名称列表

获取一组输出分组下的所有通道名称。

```python showLineNumbers
emtview.getPlotChannelNames(0)
```

### `emtview.getPlotChannelData(index, channelName)`

- `index`: [Number][Number] 输出通道位置
- `channelName`: [String][String] 输出通道名称
- Returns: [Dict][Dict] 返回指定图表指定通道的曲线数据

获取一组输出分组下指定通道名称的曲线数据。

```python showLineNumbers
emtview.getPlotChannelData(0, '')
```

### `emtview.next()`

调试接口，前进一个时步。

```python showLineNumbers
emtview.next()
```

### `emtview.goto(step)`

- `step`: [Number][Number] 指定时步

调试接口，前进到指定时步。

```python showLineNumbers
emtview.goto(-1)
```

### `emtview.writeShm(path, buffer, offset)`

- `path`: [String][String] 内存路径
- `buffer`: [Float][Float] 写入的数据
- `offset`: [Number][Number] 写入的偏移量

写内存接口（未最终确定，后续版本进行修改）。

```python showLineNumbers
emtview.writeShm('data', buffer, 0)
```

### `emtview.stopSimulation()`

通过事件链接口停止仿真（未最终确定，后续版本进行修改）。

```python showLineNumbers
emtview.stopSimulation()
```

### `emtview.saveSnapshot(snapshotNumber, log='保存断面成功')`

- `snapshotNumber`: [Number][Number] 断面序号
- `log` [String][String] 保存断面成功的日志

通过事件链接口保存断面（未最终确定，后续版本进行修改）。

```python showLineNumbers
emtview.saveSnapshot(0, log='保存断面成功')
```

### `emtview.loadSnapshot(snapshotNumber, log='加载断面成功')`

- `snapshotNumber`: [Number][Number] 断面序号
- `log` [String][String] 加载断面成功的日志

通过事件链接口加载断面 （未最终确定，后续版本进行修改）。

```python showLineNumbers
emtview.loadSnapshot(0, log='加载断面成功')
```

### `emtview.control(controlParam, eventTime='-1', eventTimeType='1')`

- `controlParam`: [List][List] 控制参数
- `eventTime`: [Number][Number] 事件时间，默认为 -1
- `eventTimeType`: [Number][Number] 事件时间类型，默认为 1

通过事件链接口修改元件数据 （未最终确定，后续版本进行修改）。

```python showLineNumbers
emtview.control(controlParam, eventTime='-1', eventTimeType='1')
```

### `emtview.monitor(monitorParam, eventTime='-1', eventTimeType='1')`

- `monitorParam`: [List][List] 监视参数
- `eventTime`: [Number][Number] 事件时间，默认为 -1
- `eventTimeType`: [Number][Number] 事件时间类型，默认为 1

通过事件链接口停止仿真 （未最终确定，后续版本进行修改）

```python showLineNumbers
emtview.monitor(monitorParam,eventTime='-1',eventTimeType='1')
```

## Class: `PowerFlowView`

- Extends: [View](#class-view)

潮流仿真结果视图，提供快速获取 buses 和 branches 的接口，并提供潮流写入项目的接口。该类只提供潮流仿真时使用。

### `powerflowview.getBuses()`

- Returns: [List][List] 返回所有 buses 数据

获取所有的 buses 数据

```python showLineNumbers
powerflowview.getBuses()
```
  
### `powerflowview.getBranches()`

- Returns: [List][List] 返回所有 branches 数据

获取潮流结果 branches 数据

```python showLineNumbers
powerflowview.getBranches(index)
```

### `powerflowview.powerFlowModify(model)`

- `model`: [Model](../10-model/index.md) 算例文件

潮流数据写入 Model

```python showLineNumbers
powerflowview.powerFlowModify(model)
```

## Class: `IESView`

- Extends: [View](#class-view)

综合能源结果视图，提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式，不在是接收时分段的数据。该类只提供 IES 仿真使用。

### `iesview.getPlotData(compID, labelName, traceName='all', index=-1)`

- `compID`: [String][String] 代表元件的标识符
- `labelName`: [String][String] 代表 plot 曲线的分组标签
- `traceName`: [String][String] 代表 Plot 曲线对应分组下的图例名称，当为 'all' 时，返回所有图例的数据
- `index`: [Number][Number] 代表对应图例时序数据中的第 index 项，当小于 0 时，返回该图例所有的时序数据
- Returns: [Dict][Dict] 返回指定元件的 plot 数据

获取元件 ID 为 compID 的元件，对应标签为 labelName、图例名称为 traceName 的 plot 数据的第 index 项。

```python showLineNumbers
iesview.getPlotData('/AbsorptionChiller_4', '压力(MPa)', traceName='all', index=-1)
```

### `iesview.getSankey(index)`

- `index`: [Number][Number] 代表第 index 个桑基图数据
- Returns: [List][List] 返回第 index个桑基图数据

获取第 index 个桑基图数据。

```python showLineNumbers
iesview.getPlotData(index)
```

### `iesview.getSankeyNum()`

- Returns: [Number][Number] 返回桑基图数据序列的长度

获取桑基图数据序列的长度。

```python showLineNumbers
iesview.getSankeyNum()
```

## Class: `IESLabTypicalDayView`

- Extends: [View](#class-view)

IESLab 典型日仿真结果视图，提供了 IESLab 典型日仿真结果的相关方法。

### `ieslabTypicalDayView.GetTypical()`

- Returns: [List][List] 返回所有 GetTypical 典型日数据

获取所有的 GetTypical 典型日数据。

```python showLineNumbers
ieslabTypicalDayView.GetTypical()
```

###  `ieslabTypicalDayView.GetTypicalDayNum()`

- Returns: [Number][Number] 返回当前 result 的典型日数量

获取当前 result 的典型日数量。

```python showLineNumbers
ieslabTypicalDayView.GetTypicalDayNum()
```

### `ieslabTypicalDayView.GetTypicalDayInfo(dayID)`

- `dayID`: [Number][Number] 典型日 ID，数值位于 0 ~ 典型日数量 之间
- Returns: [Dict][Dict] 返回 dayID 对应典型日的基础信息，包括典型日所代表的日期范围、典型日的名称等

获取dayID对应典型日的基础信息。

```python showLineNumbers
ieslabTypicalDayView.GetTypicalDayInfo(0)
```

### `ieslabTypicalDayView.GetTypicalDayCurve(dayID, dataType)`

- `dayID`: [Number][Number] 典型日 ID，数值位于 0 ~ 典型日数量 之间
- `dataType`: [String][String] 数据类型，标识总辐射、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型
- Returns: [List][List] 返回 dayID 对应典型日下dataType参数的时序曲线

获取 dayID 对应典型日下 dataType 参数的时序曲线。

```python showLineNumbers
ieslabTypicalDayView.GetTypicalDayCurve(0, '总辐射')
```

###  `ieslabTypicalDayView.GetTypicalMonth()`

- Returns: [List][List] 返回所有的 GetTypicalMonth 数据

获取所有的 GetTypicalMonth 数据。

```python showLineNumbers
ieslabTypicalDayView.GetTypicalMonth()
```

### `ieslabTypicalDayView.GetTypicalMonthNum(monthID)`


- `monthID`: [Number][Number] 月份 ID，数值位于 1-12 之间
- Returns: [List][List] 返回第 monthID 月各类型的典型日数据

获取第 monthID 月各类型的典型日数据

```python showLineNumbers
ieslabTypicalDayView.GetTypicalMonthData(1)
```

###  `ieslabTypicalDayView.GetTypicalMonthCurve(monthID, dataType)`

- `monthID`: [Number][Number] 月份 ID，数值位于 1-12 之间
- `dataType`: [String][String] 数据类型，标识总辐射、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型
- Returns: [List][List] 返回以 1h 为时间间隔的该参数的典型日内时序曲线

获取 monthID 对应典型日下 dataType 参数的时序曲线

```python showLineNumbers
ieslabTypicalDayView.GetTypicalMonthCurve(12, '总辐射')
```

[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[Float]: https://docs.python.org/3.8/c-api/float.html
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries