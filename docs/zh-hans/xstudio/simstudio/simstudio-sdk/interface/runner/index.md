---
title: Runner 类
type: examples
author: pcp
category: 200
order: 199
---


## ==class cloudpss.runner.runner.Runner(taskId, name, job, config, revision, modelRid, **kwargs)==
  ### static create(revisionHash, job, config, name=None, rid='',**kwargs)
  :::info
  `创建`一个运行任务
:::
**Params revision:** 项目版本号

**Params job:**  调用仿真时使用的计算方案，为空时使用项目的第一个计算方案

**Params config:**  调用仿真时使用的参数方案，为空时使用项目的第一个参数方案

**Params name:**  任务名称，为空时使用项目的参数方案名称和计算方案名称

**Params rid:**  项目rid，可为空

**返回:**  返回一个运行实例
```python
runner = Runner.runRevision(revision,job,config,'')
```
  ### status()
  :::info
运行`状态` :return: 返回运行状态0/1/-1。1表示正常结束,0表示运行中，-1表示数据接收异常
:::
```python
runner.status()
```