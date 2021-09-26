---
title: ProjectRevision类
type: examples
author: pcp
category: 101
order: 101
---

## 表示一个项目的版本数据

>class cloudpss.project.revision.ProjectRevision(revision: dict = {})

**实例变量说明**：

**implements:** 项目当前版本的实现数据

**parameters：** 项目当前版本的参数结果

**pins：** 项目当前版本的引脚信息

**documentation：** 项目当前版本的文档信息

### 1.创建一个新版本
:::info
staticcreate(revision, parentHash=None)
:::
**Params revision：**  版本数据

**返回：**  项目版本hash
```python
ProjectRevision.create(project.revision)
{hash:'4043acbddb9ce0c6174be65573c0380415bc48186c74a459f88865313743230c'}
```

### 2.获取当前项目版本的拓扑数据
:::info
fetchTopology(implementType, config, maximumDepth)
:::
**Params implementType：**  实现类型

**Params config：**  项目参数

**Params maximumDepth：**  最大递归深度，用于自定义项目中使用 diagram 实现元件展开情况

**返回：**  一个拓扑实例

```python
topology=revision.fetchTopology()
    topology=revision.fetchTopology(implementType='powerFlow',config=config) # 获取潮流实现的拓扑数据
    topology=revision.fetchTopology(maximumDepth=2) # 获取仅展开 2 层的拓扑数据
```

### 3.获取当前版本的实现
:::info
getImplements()
:::
**返回：**  实现实例
```python
revision.getImplements()
```

### 4.运行某个指定版本的项目
:::info
run(job, config, name=None, rid='', kwargs)
:::
**Params job：**  调用仿真时使用的计算方案，为空时使用项目的第一个计算方案

**Params config：**  调用仿真时使用的参数方案，为空时使用项目的第一个参数方案

**Params name：**  任务名称，为空时使用项目的参数方案名称和计算方案名称

**Params rid：**  项目rid，可为空

**返回：**  返回一个运行实例

```python
revision.run(revision,job,config,'')
```

### 5.类对象序列化为dict:return:dict
:::info
toJSON()
:::