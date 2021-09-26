---
title: Result类
type: examples
author: pcp
category: 199
order: 113
---

## 电磁暂态结果处理类
>classcloudpss.runner.result.EMTResult(*args, **kwargs)

**电磁暂态结果处理类**，继承 Result，提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式，不在是接收时分段的数据,该类只提供 EMT 仿真使用

### 1.获取指定序号的数据分组
:::info
getPlot(index: int)
:::

**Params index:**  图表位置
```python
result.getPlot(0)
{...}
```

### 2.获取一组输出分组下指定通道名称的数据
:::info
getPlotChannelData(index, channelName)
:::

**Params index:** 输出通道位置

**Params channelName:**  输出通道名称

**返回:**  通道数据, 一个trace数据
```python
channel= result.getPlotChannelData(0，’’) {…}
```

### 3.获取一组输出分组下的所有通道名称
:::info
getPlotChannelNames(index)
:::

**Params index:**  输出通道位置

**返回:**  通道名称数组
```python
names= result.getPlotChannelNames(0) []
```

### 4.获取所有的 plots 数据
:::info
getPlots()
:::


```python
result.getPlots()
{...}
```
## 潮流结果处理类
>classcloudpss.runner.result.PowerFlowResult(*args, **kwargs)

**潮流结果处理类**，继承 Result，提供快速获取 buses 和 branches 的接口，并提供潮流写入项目的接口,该类只提供潮流仿真时使用

### 1.获取潮流结果branches数据
:::info
getBranches()
:::

```python
channel= result.getBranches()
[...]
```

### 2.获取潮流结果buses数据
:::info
getBuses()
:::

```python
channel= result.getBuses()
[...]
```

### 3.潮流数据写入project
:::info
powerFlowModify(project)
:::

```python
channel= result.powerFlowModify(project)
```
## 结果处理类
>classcloudpss.runner.result.Result(db)
**结果处理类**，从消息存储库中获取数据，并进行简单的整理
**可迭代器**，迭代时按接收顺序返回数据
```python
for data in result:
print(data)
```
也可以从类的 db 变量，获取数据存储类实例进行操作

### 1.保存结果到本地文件
:::info
staticdump(result, file)
:::

**Params file:**  保存文件的目录
```python
Result.dump(file)
{...}
```
### 2.获取当前任务的日志
:::info
getLogs()
:::

```python
logs= result.getLogs() {…}
```

### 3.获取指定类型的消息数据
:::info
getMessagesByType(type)
:::

```python
message= result.getMessagesByType('log')
```

### 4.加载本地结果文件
:::info
classmethodload(filePath)
:::

**Params file:** 文件目录

**返回:**  返回一个结果实例
```python
result = Result.load('C:\Users\dps-dm\cloudpss-sdk\result\424111.cjob')
```