---
title: ProjectRevision类
type: examples
author: pcp
category: 101
order: 101
---

## ==class cloudpss.project.revision.ProjectRevision==
:::info
表示一个项目的`版本数据`
:::
**实例变量说明**：

**implements:** 项目当前版本的实现数据

**parameters：** 项目当前版本的参数结果

**pins：** 项目当前版本的引脚信息

**documentation：** 项目当前版本的文档信息

### static create(revision, parentHash=None)
:::info
创建一个`新版本`
:::
**Params revision：**  版本数据

**返回：**  项目版本hash
```python
ProjectRevision.create(project.revision)
{hash:'4043acbddb9ce0c6174be65573c0380415bc48186c74a459f88865313743230c'}
```

### fetchTopology(implementType, config, maximumDepth)
:::info
`获取`当前项目版本的`拓扑数据`
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

### getImplements()
:::info
`获取`当前版本的`实现`
:::
**返回：**  实现实例
```python
revision.getImplements()
```

### run(job, config, name=None, rid='', **kwargs)
:::info
运行某个`指定版本`的项目
:::
**Params job：**  调用仿真时使用的计算方案，为空时使用项目的第一个计算方案

**Params config：**  调用仿真时使用的参数方案，为空时使用项目的第一个参数方案

**Params name：**  任务名称，为空时使用项目的参数方案名称和计算方案名称

**Params rid：**  项目rid，可为空

**返回：**  返回一个运行实例

```python
revision.run(revision,job,config,'')
```

### toJSON()
:::info
类对象`序列化`为dict :return: dict
:::