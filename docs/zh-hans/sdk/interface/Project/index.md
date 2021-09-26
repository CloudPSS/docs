---
title: 项目
type: examples
author: pcp
category: 200
order: 101
---



### 1.CloudPSS工程类，用于处理加载后的工程数据
:::info
 class cloudpss.project.revision.ProjectRevision(revision: dict = {})
:::
**实例变量说明：**

**rid:** 项目的 rid

**name:** 项目的名称

**description:** 项目的描述

**revision:** 当前项目的版本信息

**configs:** 当前项目的所有参数方案

**jobs：** 当前项目的所有计算方案

**context：** 当前项目的上下文相关信息

### 2.将参数方案添加到工程中
:::info
addConfig(config)
:::
**Params config:**  参数方案dict
```python
config = project.createConfig('my config')
         project.addConfig(config)
```
### 3.将计算方案添加到工程中
:::info
addJob(job: dict)
:::
**Params job:**  计算方案 dict
```python
job = project.createJob('emtp','emtp job')
          project.addJob(job)
```
### 4.新建项目
:::info
static create(project)
:::
**Params:**  project 项目
**返回：**   保存成功/保存失败

```python
Project.create(project)
保存成功
```

### 5.创建一个参数方案 
:::info
createConfig(name)
:::
根据项目的第一个参数方案生成一个方案 创建出的方案默认不加入到项目中，需要加入请调用**addConfig :params name:**参数方案名称

**返回：**  返回一个参数方案 dict
```python
job = project.createConfig('my config')
    参数方案
```
### 6.创建一个计算方案
:::info
createJob(jobType: str, name)
:::
创建出的方案默认不加入到项目中，需要加入请调用 **addJob**

**Params jobType:**  方案类型，包括电磁暂态仿真方案emtp、移频电磁暂态仿真方案sfemt、潮流计算方案powerFlow

**返回:**  返回一个指定类型的计算方案
```python
project.createJob('emtp','emtp job')
计算方案
```
### 7.下载项目文件
:::info
staticdump(project, file)
:::
**Params project：**  项目

**Params file：**  文件路径

**返回：**  无
```python
Project.dump(project,file)
```
### 8.获取项目
:::info
staticfetch(rid)
:::
**Params rid：**  项目 rid

**返回：**  返回一个项目实例
```python
project=Project.fetch('project/Demo/test')
```
### 9.获取用户可以运行的项目列表
:::info
staticfetchMany(name=None, pageSize=10, pageOffset=0)
:::
**Params name：**  查询名称，模糊查询

**Params pageSize：**  分页大小

**Params pageOffset：**  分页开始位置

**返回:**  按分页信息返回项目列表

```python
data=Project.fetchMany()
[
    {'rid': 'project/admin/share-test', 'name': '1234', 'description': '1234'}
    ...
]
```
### 10.通过项目信息，获取当前项目对应的拓扑数据
:::info
fetchTopology(implementType=None, config=None, maximumDepth=None)
:::
**Params implementType:**  实现类型

**Params config:**  config 项目参数, 不指定将使用算例保存时选中的参数方案

**Params maximumDepth：**  最大递归深度，用于自定义项目中使用 diagram 实现元件展开情况

**返回：**  一个拓扑实例
```python
topology=project.fetchTopology() 
    topology=project.fetchTopology(implementType='powerFlow',config=config) # 获取潮流实现的拓扑数据
    topology=project.fetchTopology(maximumDepth=2) # 获取仅展开 2 层的拓扑数据
```
### 11.获取实现
:::info
getAllComponents()
:::
**返回：**  所有元件信息
```python
project.getAllComponents()
{
    'canvas_0_2': Component 实例
}
```
### 12.通过元件的key获取对应的元件
:::info
getComponentByKey(componentKey: str)
:::
**Params key：**  key 元件的key

**Return：**  Component 实例
```python
project.getComponentByKey('canvas_0_757')
Component 实例
```
### 13.通过指定元件类型获取元件
:::info
getComponentsByRid(rid: str)
:::
**Params str：**  元件类型

**返回：**  按照元件的 rid 过滤后的 dict<>
```python
project.getComponentsByRid('project/CloudPSS/newInductorRouter')
{
    'canvas_0_2': Component 实例
}
```
### 14.获取指定名称的参数方案
:::info
getProjectConfig(name)
:::
**Params name：**  参数方案名称

**返回:**  同名的方案数组
```python
project.getProjectConfig('参数方案 1')
```
### 15.获取指定名称的计算方案
:::info
getProjectJob(name)
:::
**Params Name:**  参数名称

**返回:**  返回同名计算方案数组
```python
project.getProjectJob('电磁暂态方案 1')
```
### 16.加载本地项目文件
:::info
staticload(filePath)
:::
**Params file:**  文件目录

**返回:**  返回一个项目实例
```python
project = Project.load('filePath')
```
### 17.调用仿真
:::info
run(job=None, config=None, name=None, **kwargs)
:::
**Params job:**  调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案

**Params config:**  调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案

**Params name:**  任务名称，为空时使用项目的参数方案名称和计算方案名称

**返回:**  返回一个运行实例
```python
runner=project.run(job,config,'')
runner
```
### 18.保存/创建项目
:::info
save(key=None)
:::
**key**不为空时如果远程存在相同的资源名称时将覆盖远程项目。**key**为空时如果项目rid不存在则抛异常，需要重新设置**key**。如果保存时，当前用户不是该项目的拥有者时，将重新创建项目，重建项目时如果参数的**key**为空将使用当前当前项目的**key**作为资源的**key**，当资源的**key**和远程冲突时保存失败

**Params:**  project 项目

**Params:**  key 资源id的唯一标识符，

**返回:**  保存成功/保存失败
```python
project.save(project)
    project.save(project,'newKey') # 另存为新的项目
```
### 19.类对象序列化为dict:return:dict
:::info
toJSON()
:::
### 20.更新项目
:::info
staticupdate(project)
:::
**Params:**  project 项目

**返回:**  保存成功/保存失败
```python
Project.update(project)
```