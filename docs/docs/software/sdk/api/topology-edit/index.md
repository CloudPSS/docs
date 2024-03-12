---
title: 拓扑编辑页面相关接口
description: CloudPSS SDK API 文档拓扑编辑页面相关接口
sidebar_position: 41

tags:
- SDK

---

## 拓扑编辑页面相关接口

- 该模块包含项目本身相关的

### Model

- CloudPSS工程类，用于处理加载后的工程数据

#### 实例变量说明

##### 项目Rid model.rid

- 项目在平台中的唯一值

##### 项目名称 model.name

- 项目的名称

##### 项目描述 model.description  

- 项目的描述

##### 项目的版本信息 model.revision

- [ModelRevision](#modelrevision) 当前项目的版本信息

##### 项目的参数方案 model.configs

- 当前项目的所有参数方案

##### 项目的计算方案 model.jobs

- 当前项目的所有计算方案

##### 项目的上下文相关信息 model.context

- 当前项目的上下文相关信息


#### 静态方法说明

##### 获取项目 static Model.fetch(rid)

- 获取指定 rid 的项目
  - 参数：
    - rid 项目的 rid 格式为 `model/{owner}/{key}`
  - 返回值
    - 返回当前项目实例
    - 如果 rid 不存在直接抛异常
  - 实例：
 
    ``` python
        model = Model.fetch('model/Demo/demo')

    ```

##### 新建项目 static Model.create(model)

- 新建项目
  - 参数:
    - model 需要创建的项目
  - 返回值
    - 保存成功，项目正确，且 rid 和已存在的 rid 不冲突则返回保存成功
    - 保存失败，项目不正确，或者 rid 和已存在的 rid 冲突则抛异常
  - 实例：

    ``` python
        model = Model.fetch('model/Demo/demo')
        model.rid = 'model/Demo/demo1'
        Model.create(model)
    ```

##### 更新项目 static Model.update(model)

- 更新项目
  - 参数：
    - model 需要更新的项目
  - 返回：
    - 保存成功，项目正确，且 rid 存在则返回保存成功
    - 保存失败，项目不正确，或者 rid 不存在则抛异常
  - 实例：

    ```python
        model = Model.fetch('model/Demo/demo')
        Model.update(model)
    ```

##### 保存当前项目到本地文件 static Model.dump(model, file, format='yaml', compress='gzip')

- 保存当前项目到本地文件
  - 参数
    - model 需要保存的项目
    - file  文件路径
    - format 支持 json, ubjson, yaml, zstd
    - compress 压缩格式目前支持gzip 为None时不压缩
  - 返回值
    - 无
  - 实例：

    ```python
        model = Model.fetch('model/Demo/demo')
        Model.dump(model,'D:\\data\\demo.cmdl')
    ```

##### 加载本地项目文件 static Model.load(filePath, format="yaml")

- 加载本地项目文件
  - 参数
    - file 本地文件地址
    - format 默认格式为yaml
  - 返回值
    - 返回一个项目实例
  - 实例：

    ```python
        model = Model.load('D:\\data\\demo.cmdl')
    ```

#### 实例函数说明

- 以下函数均为实例函数，需要先实例化一个项目对象，然后调用实例函数

##### 创建一个计算方案 model.createJob( jobType: str, name:str)

- 创建一个计算方案
  - 创建出的方案默认不加入到项目中，需要加入请调用 addJob
    - 参数
      - jobType 计算方案类型
      - name 计算方案名称
    - 返回值
      - 返回一个指定类型的计算方案
    - 实例：

      ```python
          job = model.createJob('emtp','emtp job')
      ```

##### 将计算方案添加到工程中 model.addJob(job: dict)

- 将计算方案添加到工程中
  - 参数
    - job 计算方案
  - 返回值
    - 无
  - 实例：

    ```python
        job = model.createJob('emtp','emtp job')
        model.addJob(job)
    ```

##### 获取指定名称的计算方案 model.getModelJob

- 获取指定名称的计算方案
  - 参数
    - name 计算方案名称
  - 返回值
    - 同名计算方案数组
  - 实例：

      ```python
          job = model.getModelJob('电磁暂态方案 1')
      ```

##### 创建一个参数方案 model.createConfig(name)

- 创建一个参数方案
  - 根据项目的第一个参数方案生成一个方案，创建出的方案默认不加入到项目中，需要加入请调用 addConfig
  - 参数
    - name 参数方案名称
  - 返回值
    - 返回一个参数方案
  - 实例：

    ```python
        config = model.createConfig('config 1')
    ```

##### 将参数方案添加到工程中 model.addConfig(config)

- 将参数方案添加到工程中
  - 参数
    - config 参数方案
  - 返回值
    - 无
  - 实例：

    ```python
        config = model.createConfig('config 1')
        model.addConfig(config)
    ```

##### 获取指定名称的参数方案 model.getModelConfig(name)

- 获取指定名称的参数方案
  - 参数
    - name 参数方案名称
  - 返回值
    - 返回一个参数方案
  - 实例：

    ```python
        config = model.getModelConfig('config 1')
    ```

##### 添加元件 model.addComponent(definition, label, args, pins, canvas=None, position=None, size=None)

- 添加元件
  - 创建一个新的元件并添加到拓扑中
  - 参数
    - definition 元件定义，元件的Rid
    - label 元件标签
    - args 元件参数数据
    - pins 元件引脚数据
    - canvas 元件所在图纸数据
    - position 元件位置信息
    - size 元件大小信息
  - 返回值
    - 无
  - 实例：

    ```python
        component = model.addComponent(
            definition='model/CloudPSS/newResistorRouter',
            label='电阻1',
            args={
                'Name': '电阻1',
                'Dim': '0',
                'R': '1'
            },
            pins={
                '0': '',
                '1': ''
            },
            canvas='canvas_0',
            position={'x': 0, 'y': 0},
            size={'width': 50, 'height': 30}
        )
    ```

##### 更新元件 model.updateComponent(key,label=None,args=None,pins=None, canvas=None, position=None, size=None)

- 更新元件
  - 参数
    - key 元件key
    - label 元件标签
    - args 元件参数数据
    - pins 元件引脚数据
    - canvas 元件所在图纸数据
    - position 元件位置信息
    - size 元件大小信息
  - 返回值
    - 无
  - 实例：

    ```python
        component = model.addComponent(definition='model/CloudPSS/newResistorRouter',
            label='电阻1',
            args={
                'Name': '电阻1',
                'Dim': '0',
                'R': '1'
            },
            pins={
                '0': '',
                '1': ''
            })
        model.updateComponent(component.id, label='电阻2')
    ```

##### 删除元件 model.removeComponent(key)

- 删除元件
  - 参数
    - key 元件key
  - 返回值
    - 无
  - 实例：

    ```python
        component = model.addComponent(definition='model/CloudPSS/newResistorRouter',
            label='电阻1',
            args={
                'Name': '电阻1',
                'Dim': '0',
                'R': '1'
            },
            pins={
                '0': '',
                '1': ''
            })
        model.removeComponent(component.id)
    ```

##### 获取所有元件 model.getAllComponents()

- 获取所有元件
  - 参数
    - 无
  - 返回值
    - 返回所有元件
  - 实例：

    ```python
        components = model.getAllComponents()
    ```

##### 获取指定key的元件 model.getComponentByKey(componentKey)

- 获取指定key的元件
  - 参数
    - key 元件key
  - 返回值
    - 返回指定key的元件
  - 实例：

    ```python
        component = model.getComponentByKey('component_new_resistor_router_1')
    ```

##### 获取指定rid的所有元件 model.getComponentsByRid(rid: str)

- 获取指定rid的所有元件
  - 参数
    - rid 元件rid
  - 返回值
    - 返回指定rid的元件
  - 实例：

    ```python
        component = model.getComponentsByRid('rid')
    ```

    ##### 运行仿真任务 model.run(job=None, config=None, name=None, policy=None,stop_on_entry=None, **kwargs)-> Job[View]

- 运行仿真任务
  - 参数
    - job 调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
    - config 调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
    - name 任务名称，为空时使用项目的参数方案名称和计算方案名称
    - policy 仿真策略
    - stop_on_entry 是否在仿真开始时停止
    - kwargs 仿真参数
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        job = model.createJob('emtp','emtp job')
        model.run(job)
    ```

##### 运行电磁暂态仿真计算任务 model.runEMT(job=None, config=None,stop_on_entry=None,**kwargs)-> Job[EMTView]

- 运行 emtp 内核，如果当前 model 没有创建  Job 时报错，默认使用算例中选中的计算方案进行仿真，如果选中的计算方案不是 EMT 方案则选第一个EMT 计算方案，如果不存在计算方案则直接报错。
  - 参数
    - job 计算方案
    - config 参数方案
    - stop_on_entry 是否在仿真开始时停止
    - kwargs 仿真参数
  - 返回值
    - 返回一个电磁暂态仿真任务
  - 实例：

    ```python
        job = model.createJob('emtp','emtp job')
        model.runEMT(job)
    ```


    ##### 运行移频电磁暂态仿真计算任务 model.runSFEMT(job=None, config=None,stop_on_entry=None,**kwargs)-> Job[EMTView]

- 参照  [运行电磁暂态仿真计算任务](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)

##### 运行潮流计算任务 model.runPowerFlow(job=None, config=None,**kwargs) -> Job[PowerFlowView]

- 参照  [运行电磁暂态仿真计算任务](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)

##### model.runIESEnergyStoragePlan( job=None, config=None,**kwargs) -> Job[IESView]

- 参照  [运行电磁暂态仿真计算任务](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)

##### model.runIESLoadPrediction

- 参照  [运行电磁暂态仿真计算任务](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)

##### model.runIESPowerFlow

- 参照  [运行电磁暂态仿真计算任务](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)

##### model.runThreePhasePowerFlow

- 参照  [运行电磁暂态仿真计算任务](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)


##### 保存/另存项目 model.save(key=None)

- 保存/另存项目
  - key 不为空时如果远程存在相同的资源名称时将覆盖远程项目。
  - key 为空时如果项目 rid 不存在则抛异常，需要重新设置 key。
  - 如果保存时，当前用户不是该项目的拥有者时，将重新创建项目，重建项目时如果参数的 key 为空将使用当前当前项目的 key 作为资源的 key ，当资源的 key 和远程冲突时保存失败
  - 参数
    - key 资源 id 的唯一标识符
  - 返回值
    - 无
  - 实例：

    ```python
        model.save(model)
        model.save(model,'newKey') # 另存为新的项目
    ```
  
### ModelRevision

- 项目版本信息

#### ModelRevision 实例变量说明

##### 项目当前版本的实现数据 ModelRevision.implements

- 项目当前版本的实现数据

##### 项目当前版本的参数信息 ModelRevision.parameters

- 项目当前版本的参数定义

##### 项目当前版本的引脚信息 ModelRevision.pins

- 项目当前版本的引脚定义

##### 项目当前版本的文档信息 ModelRevision.documentation

- 项目当前版本的文档信息

#### ModelRevision 静态方法说明

##### 创建一个新版本 static ModelRevision.create(revision, parentHash=None)

- 参数
  - revision 版本号
  - parentHash 父版本的 hash
- 返回值
  - 返回当前版本hash
- 实例：

    ```python
        revision = ModelRevision.create(revision)
    ```

#### ModelRevision 实例函数说明

##### 运行当前版本 modelRevision.run( job, config, name=None,rid=None, policy=None,stop_on_entry=None, **kwargs)

- 运行当前版本
  - 参数
    - job 调用仿真时使用的计算方案
    - config 调用仿真时使用的参数方案
    - name 任务名称
    - policy 仿真策略
    - stop_on_entry 是否在仿真开始时停止
    - kwargs 仿真参数
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        revision = ModelRevision.create(revision)
        revision.run()
    ```

##### 获取当前版本的拓扑 modelRevision.getTopology(implementType, config, maximumDepth)

- 获取当前版本的拓扑
  - 参数
    - implementType 拓扑实现类型
    - config 拓扑实现配置
    - maximumDepth 拓扑最大深度
  - 返回值
    - 返回一个拓扑
  - 实例：

    ```python
        revision.getTopology()
    ```

##### 获取当前版本的实现 modelRevision.getImplements()

- 获取当前版本的实现
  - 参数
    - 无
  - 返回值
    - 返回一个实现
  - 实例：

    ```python
        revision.getImplements()
    ```

### ModelTopology

- 拓扑类，用于处理拓扑数据
- 该类不需要实例化，直接调用静态方法即可

#### ModelTopology 静态方法说明

##### 获取拓扑 ModelTopology.getTopology(implementType, config, maximumDepth)

- 获取拓扑
  - 参数
    - implementType 拓扑实现类型
    - config 拓扑实现配置
    - maximumDepth 拓扑最大深度
  - 返回值
    - 返回一个拓扑
  - 实例：

    ```python
        ModelTopology.getTopology()
    ```

##### 获取拓扑 ModelTopology.dump(topology, filePath, indent=None)

- 保存拓扑到本地文件
  - 参数
    - topology 拓扑数据
    - filePath 保存文件路径
    - indent 缩进
  - 返回值
    - 无
  - 实例：

    ```python
        ModelTopology.dump(topology, filePath)
    ```