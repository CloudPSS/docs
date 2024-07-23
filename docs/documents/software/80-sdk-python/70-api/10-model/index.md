---
title: 模型类
description: CloudPSS SDK API 文档模型类

tags:
- sdk

---

## Class: `Model`

- Extends: [Object][Object]
  
**CloudPSS** 算例类。

### `model.rid`

- [String][String]

项目在平台中的唯一值。

### `model.name`

- [String][String]

项目的名称。

### `model.description`

- [String][String]

项目的描述。

### `model.revision`

- [ModelRevision](#class-modelrevision) 

当前项目的版本信息。

### `model.configs`

- [List][List]

当前项目的所有参数方案。

### `model.jobs`

- [List][List]

当前项目的所有计算方案。

### `model.context`

- [List][List]

当前项目的上下文相关信息。


### `Model.fetch(rid)`

- 静态方法
- `rid`: [String][String]；项目的 rid 格式为 `model/{owner}/{key}`
- Returns: [Model](#class-model)；返回当前 `Model` 算例实例，如果 rid 不存在直接抛异常

获取指定 rid 的项目。
 
``` python showLineNumbers
model = Model.fetch('model/Demo/demo')
```

### `Model.create(model)`

- 静态方法
- `model`: [Model](#class-model)；需要创建的算例实例

新建项目，项目正确且项目 rid 和已存在的 rid 不冲突则返回保存成功；否则抛异常。

``` python showLineNumbers
model = Model.fetch('model/Demo/demo')
model.rid = 'model/Demo/demo1'
# highlight-next-line
Model.create(model)
```

### `Model.update(model)`

- 静态方法
- `model`：[Model](#class-model)；需要更新的项目

更新项目，项目正确且项目 rid 和已存在的 rid 不冲突则返回保存成功；否则抛异常。

```python showLineNumbers
model = Model.fetch('model/Demo/demo')
# highlight-next-line
Model.update(model)
```

### `Model.dump(model, file, format='yaml', compress='gzip')`

- 实例方法
- `model`: [Model](#class-model)；需要保存的项目
- `file`: [String][String]；文件保存路径
- `format`: [String][String]；文件保存格式，支持 `json`, `ubjson`, `yaml`, `zstd`，默认 `yaml` 格式
- `compress`: [String][String]；是否开启文件压缩，默认开启 `gzip` 格式，若为 `None` 时不开启文件压缩

保存当前项目到本地文件。

```python showLineNumbers
model = Model.fetch('model/Demo/demo')
# highlight-next-line
Model.dump(model,'D:\\data\\demo.cmdl')
```

### `Model.load(filePath, format="yaml")`

- 静态方法
- `file`: [String][String]；本地文件路径
- `format`: [String][String]；文件导入格式，默认格式为 `yaml`
- Returns: [Model](#class-model)；返回一个 `Model` 实例

加载本地项目文件。

```python showLineNumbers
model = Model.load('D:\\data\\demo.cmdl')
```

### `model.save(key=None)`

- 实例方法
- `key`: [String][String]；资源 id 的唯一标识符

保存/另存项目。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
model.save()
# highlight-next-line
model.save('newKey') # 另存为新的项目
```

:::note
- key 不为空时如果远程存在相同的资源名称时将覆盖远程项目。
- key 为空时如果项目 rid 不存在则抛异常，需要重新设置 key。
- 如果保存时，当前用户不是该项目的拥有者时，将重新创建项目，重建项目时如果参数的 key 为空将使用当前当前项目的 key 作为资源的 key ，当资源的 key 和远程冲突时保存失败
:::

### `model.createJob(jobType, name)`

- 实例方法
- `jobType`: [String][String]；计算方案类型如下：
  - `emtp`：电磁暂态仿真方案
  - `sfemt`：移频电磁暂态仿真方案
  - `powerFlow`：潮流计算方案
  - `iesLoadPrediction`: 负荷预测方案
  - `iesPowerFlow`: 时序潮流方案
  - `iesEnergyStoragePlan`: 储能规划方案
- `name`: [String][String]；计算方案名称
- Returns: [Dict][Dict]；返回一个指定类型的计算方案，数据格式例如：`{'rid': '', 'args': {}, 'name': ''}`

创建一个计算方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
job = model.createJob('emtp','emtp job')
```

:::note
创建出的方案默认不加入到工程中，需要加入请调用 [model.addJob](#modeladdjobjob)
:::

### `model.addJob(job)`

- 实例方法
- `job`: [Dict][Dict]；计算方案，数据格式例如：`{'rid': '', 'args': {}, 'name': ''}`

将计算方案添加到工程中。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('emtp','emtp job')
# highlight-next-line
model.addJob(job)
```

### `model.getModelJob(name)`

- 实例方法
- `name`: [String][String]；计算方案名称
- Returns: [List][List]；同名计算方案列表

获取指定名称的计算方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
job = model.getModelJob('电磁暂态方案 1')
```

### `model.createConfig(name)`

- 实例方法
- `name`: [String][String]；参数方案名称
- Returns: [Dict][Dict]；返回一个参数方案，数据格式例如：`{'args': {}, 'name': '', 'pins': {}}`

创建一个参数方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
config = model.createConfig('config 1')
```

:::note
根据项目的第一个参数方案生成一个方案，创建出的方案默认不加入到项目中，需要加入请调用 [model.addConfig](#modeladdconfigconfig)
:::

### `model.addConfig(config)`

- 实例方法
- `config`: [Dict][Dict]；参数方案，数据格式例如：`{'args': {}, 'name': '', 'pins': {}}`

将参数方案添加到工程中。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
config = model.createConfig('config 1')
# highlight-next-line
model.addConfig(config)
```

### `model.getModelConfig(name)`

- 实例方法
- `name`: [String][String]；参数方案名称
- Returns: [List][List]；同名的参数方案列表

获取指定名称的参数方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
config = model.getModelConfig('config 1')
```

### `model.addComponent(definition, label, args, pins, canvas=None, position=None, size=None)`

- 实例方法
- `definition`: [String][String]；元件定义，元件的Rid
- `label`: [String][String]；元件标签
- `args`: [Dict][Dict]；元件参数数据
- `pins`: [Dict][Dict]；元件引脚数据
- `canvas`: [String][String]；元件所在图纸数据，默认为 None
- `position`: [Dict][Dict]；元件位置信息，默认为 None
- `size`: [Dict][Dict]；元件大小信息，默认为 None
- Returns: [Component][Object]，返回一个元件类

添加元件（创建一个新的元件并添加到拓扑中）。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
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

### `model.updateComponent(key, label=None, args=None, pins=None, canvas=None, position=None, size=None)`

- 实例方法
- `key`: [String][String]；元件key
- `label`: [String][String]；元件标签，默认为 None
- `args`: [Dict][Dict]；元件参数数据，默认为 None
- `pins`: [Dict][Dict]；元件引脚数据，默认为 None
- `canvas`: [String][String]；元件所在图纸数据，默认为 None
- `position`: [Dict][Dict]；元件位置信息，默认为 None
- `size`: [Dict][Dict]；元件大小信息，默认为 None
- Returns: [Boolean][Boolean]；True or False

更新元件。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
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
# highlight-next-line
model.updateComponent(component.id, label='电阻2')
```

### `model.removeComponent(key)`

- 实例方法
- `key`: [String][String]；元件key
- Returns: [Boolean][Boolean]；True or False

删除元件。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
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
# highlight-next-line
model.removeComponent(component.id)
```

### `model.getAllComponents()`

- 实例方法
- Returns: [Dict][Dict]，返回所有元件信息

获取所有元件。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
components = model.getAllComponents()
```

### `model.getComponentByKey(componentKey)`

- 实例方法
- `key`: [String][String]；元件 key
- Returns: [Component][Object]；返回指定 key 的元件实例

获取指定key的元件。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
component = model.getComponentByKey('component_new_resistor_router_1')
```

### `model.getComponentsByRid(rid)`

- 实例方法
- `rid`: [String][String]；元件 rid
- Returns: [Component][Object]；返回指定 rid 的元件实例

获取指定 rid 的所有元件。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
# highlight-next-line
component = model.getComponentsByRid('rid')
```

### `model.run(job=None, config=None, name=None, policy=None, stop_on_entry=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `name`: [String][String]；任务名称，为空时使用项目的参数方案名称和计算方案名称
- `policy`: [Dict][Dict]；仿真策略
- `stop_on_entry`: [Boolean][Boolean]；是否在仿真开始时停止
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个仿真任务

运行仿真任务。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('emtp','emtp job')
# highlight-next-line
model.run(job)
```

### `model.runEMT(job=None, config=None, stop_on_entry=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `stop_on_entry`: [Boolean][Boolean]；是否在仿真开始时停止
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个电磁暂态仿真任务

运行电磁暂态仿真。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('emtp','emtp job')
# highlight-next-line
model.runEMT(job)
```

### `model.runSFEMT(job=None, config=None, stop_on_entry=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `stop_on_entry`: [Boolean][Boolean]；是否在仿真开始时停止
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个移频电磁暂态仿真任务

运行移频电磁暂态仿真。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('sfemt','sfemt job')
# highlight-next-line
model.runSFEMT(job)
```

### `model.runPowerFlow(job=None, config=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个潮流计算仿真任务

运行潮流计算仿真。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('powerFlow','powerFlow job')
# highlight-next-line
model.runPowerFlow(job)
```

### `model.runIESEnergyStoragePlan(job=None, config=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个储能规划方案任务

运行储能规划方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('iesEnergyStoragePlan','iesEnergyStoragePlan job')
# highlight-next-line
model.runIESEnergyStoragePlan(job)
```

### `model.runIESLoadPrediction(job=None, config=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个负荷预测方案任务

运行负荷预测方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('iesLoadPrediction','iesLoadPrediction job')
# highlight-next-line
model.runIESLoadPrediction(job)
```

### `model.runIESPowerFlow(job=None, config=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个时序潮流方案任务

运行时序潮流方案。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('iesPowerFlow','iesPowerFlow job')
# highlight-next-line
model.runIESPowerFlow(job)
```

### `model.runThreePhasePowerFlow(job=None, config=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `kwargs`: [Dict][Dict]；可变数量仿真参数
- Returns: [Job](../30-job/index.md)；返回一个三相不平衡潮流任务

运行三相不平衡潮流。

```python showLineNumbers
model = Model.fetch("model/Demo/demo") # 获取指定 rid 的项目
job = model.createJob('powerFlow','powerFlow job')
# highlight-next-line
model.runThreePhasePowerFlow(job)
```
  
## Class: `ModelRevision`

- Extends: [Object][Object]
  
**CloudPSS** 算例的版本数据类。

### `modelRevision.implements`

- [Dict][Dict]

当前版本的实现数据。

### `modelRevision.parameters`

- [Dict][Dict]

项目当前版本的参数定义。

### `modelRevision.pins`

- [Dict][Dict]

项目当前版本的引脚定义。

### `modelRevision.documentation`

- [Dict][Dict]

项目当前版本的文档信息。

### `ModelRevision.create(revision, parentHash=None)`

- 静态方法
- `revision`: [Dict][Dict]；版本号
- `parentHash`; [Dict][Dict]；父版本的 hash
- Returns: [String][String]；返回当前版本 hash

创建一个新版本。

```python showLineNumbers
revision = ModelRevision.create(revision)
```

### `modelRevision.run(job, config, name=None, policy=None, stop_on_entry=None, rid=None, **kwargs)`

- 实例方法
- `job`: [Dict][Dict]；调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方案
- `config`: [Dict][Dict]；调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方案
- `name`: [String][String]；任务名称，为空时使用项目的参数方案名称和计算方案名称
- `policy`: [Dict][Dict]；仿真策略
- `stop_on_entry`: [Boolean][Boolean]；是否在仿真开始时停止
- `rid`: [String][String]；项目 rid
- Returns: [Job](../30-job/index.md)；返回一个仿真任务

运行当前版本。

```python showLineNumbers
revision = ModelRevision.create(revision)
# highlight-next-line
revision.run()
```

### `modelRevision.fetchTopology(implementType, config, maximumDepth)`

- 实例方法
- `implementType`: [String][String]；拓扑实现类型
- `config`: [Dict][Dict]；拓扑实现配置
- `maximumDepth`: [Number][Number]；拓扑最大递归深度，用于自定义项目中使用 diagram 实现元件展开情况
- Returns: [ModelTopology](#class-modeltopology)；返回一个拓扑实例

获取当前版本的拓扑。

```python showLineNumbers
revision = ModelRevision.create(revision)
# highlight-next-line
topology = revision.fetchTopology()
# highlight-next-line
topology = revision.fetchTopology(implementType='powerFlow',config=config) # 获取潮流实现的拓扑数据
# highlight-next-line
topology = revision.fetchTopology(maximumDepth=2) # 获取仅展开 2 层的拓扑数据 
```

### `modelRevision.getImplements()`

- 实例方法
- Returns: [Dict][Dict]；返回一个实现实例

获取当前版本的实现。

```python showLineNumbers
revision = ModelRevision.create(revision)
# highlight-next-line
revision.getImplements()
```

## Class: `ModelTopology`

- Extends: [Object][Object]

算例拓扑类，用于处理拓扑数据。


### `modelTopology.components`

- [Dict][Dict]

摊平后的拓扑元件，参数和引脚不再保留表达式的形式，如果元件为拓扑实现，并有读取权限时将被展开。

### `modelTopology.mappings`

- [Dict][Dict]

拓扑分析后的一些映射数据。

### `ModelTopology.fetch(hash, implementType, config, maximumDepth=None)`

- 静态方法
- `hash`: [String][String] 算例 hash
- `implementType`: [String][String] 拓扑实现类型
- `config`: [Dict][Dict] 拓扑实现配置
- `maximumDepth`: [Number][Number] 拓扑最大深度，用于自定义项目中使用 diagram 实现元件展开情况
- Returns: [ModelTopology](#class-modeltopology) 返回一个拓扑

获取拓扑。

```python showLineNumbers
ModelTopology.fetch('','emtp',{})
```

### `ModelTopology.dump(topology, filePath, indent=None)`

- 静态方法
- `topology`: [Dict][Dict] 拓扑实例
- `filePath`: [String][String] 保存文件路径
- `indent`: [Number][Number] 缩进格式

保存拓扑到本地文件（JSON 格式）。

```python showLineNumbers
ModelTopology.dump(topology, filePath)
```




[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries