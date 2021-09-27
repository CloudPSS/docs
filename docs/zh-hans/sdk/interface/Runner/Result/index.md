---
title: Result类
type: examples
author: pcp
category: 199
order: 113
---

## ==class cloudpss.runner.result.EMTResult==
:::info
`电磁暂态`结果处理类，继承 Result

提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式，不在是接收时分段的数据

该类只提供 EMT 仿真使用
:::
### getPlot(index: int)
:::info
`获取`指定序号的`数据分组`
:::
**Params index:**  图表位置
```python
result.getPlot(0)
{...}
```

### getPlotChannelData(index, channelName)
:::info
`获取`一组输出分组下指定通道名称的`数据`
:::
**Params index:** 输出通道位置

**Params channelName:**  输出通道名称

**返回:**  通道数据, 一个trace数据
```python
channel= result.getPlotChannelData(0，’’) {…}
```

### getPlotChannelNames(index)
:::info
`获取`一组输出分组下的所有`通道名称`
:::
**Params index:**  输出通道位置

**返回:**  通道名称数组
```python
names= result.getPlotChannelNames(0) []
```

### getPlots()
:::info
`获取`所有的 plots 数据
:::

```python
result.getPlots()
{...}
```
## ==class cloudpss.runner.result.PowerFlowResult==
:::info
`潮流`结果处理类，继承 Result

提供快速获取 buses 和 branches 的接口，并提供潮流写入项目的接口

该类只提供潮流仿真时使用
:::
### getBranches()
:::info
`获取`潮流结果`branches数据`
:::
```python
channel= result.getBranches()
[...]
```

### getBuses()
:::info
`获取`潮流结果`buses数据`
:::
```python
channel= result.getBuses()
[...]
```

### powerFlowModify(project)
:::info
潮流数据`写入`project
:::
```python
channel= result.powerFlowModify(project)
```
## ==class cloudpss.runner.result.Result==
:::info
`结果处理`类，从消息存储库中获取数据，并进行简单的整理

可迭代器，迭代时按接收顺序返回数据
:::
```python
for data in result:
    print(data)
```
也可以从类的 db 变量，获取数据存储类实例进行操作

### staticdump(result, file)
:::info
`保存`结果到本地文件
:::
**Params:**   file保存文件的目录
```python
Result.dump(file)
{...}
```
### getLogs()
:::info
`获取`当前任务的`日志`
:::
```python
logs= result.getLogs() {…}
```

### getMessagesByType(type)
:::info
`获取`指定类型的`消息数据`
:::
```python
message= result.getMessagesByType('log')
```

### classmethod load(filePath)
:::info
`加载`本地结果文件
:::
**Params file:** 文件目录

**返回:**  返回一个结果实例
```python
result = Result.load('C:\Users\dps-dm\cloudpss-sdk\result\424111.cjob')
```