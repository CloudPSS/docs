---
title: CloudPSS接口文档
type: examples
author: pcp
category: 200
order: 100
---



class cloudpss.DateTimeEncode(*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)

  ### 基类："json.encoder.JSONEncoder"

   default(field)

      Implement this method in a subclass such that it returns a
      serializable object for "o", or calls the base implementation
      (to raise a "TypeError").
    
      For example, to support arbitrary iterators, you could implement
      default like this:
    
         def default(self, o):
             try:
                 iterable = iter(o)
             except TypeError:
                 pass
             else:
                 return list(iterable)
             # Let the base class default method raise the TypeError
             return JSONEncoder.default(self, o)

class cloudpss.EMTResult(*args, **kwargs)

   ### 基类："cloudpss.runner.result.Result"
   
   电磁暂态结果处理类，继承 Result，
   提供快捷 plot 数据的接口函数，获取到的 plot 数据为合并后的数据格式
   ，不在是接收时分段的数据
   该类只提供 EMT 仿真使用

   getPlot(index: int)

      获取指定序号的数据分组
    
      Params:
         index 图表位置
    
      >>> result.getPlot(0)
      {...}

   getPlotChannelData(index, channelName)

      获取一组输出分组下指定通道名称的数据
    
      Params:
         index 输出通道位置
    
      Params:
         channelName 输出通道名称
    
      返回:
         通道数据, 一个 trace 数据
    
      >>>channel= result.getPlotChannelData(0，’’) {…}

   getPlotChannelNames(index)

      获取一组输出分组下的所有通道名称
    
      Params:
         index 输出通道位置
    
      返回:
         通道名称数组
    
      >>>names= result.getPlotChannelNames(0) []

   getPlots()

      获取所有的 plots 数据
    
      >>> result.getPlots()
      {...}

class cloudpss.MatlabDataEncoder(*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)

   ### 基类："json.encoder.JSONEncoder"

   default(field)

      Implement this method in a subclass such that it returns a
      serializable object for "o", or calls the base implementation
      (to raise a "TypeError").
    
      For example, to support arbitrary iterators, you could implement
      default like this:
    
         def default(self, o):
             try:
                 iterable = iter(o)
             except TypeError:
                 pass
             else:
                 return list(iterable)
             # Let the base class default method raise the TypeError
             return JSONEncoder.default(self, o)

class cloudpss.PowerFlowResult(*args, **kwargs)

   ### 基类："cloudpss.runner.result.Result"

   潮流结果处理类，继承 Result，

   提供快速获取 buses 和 branches 的接口，并提供潮流写入项目的接口

   该类只提供潮流仿真时使用

   getBranches()

      获取潮流结果 branches 数据
    
      >>> channel= result.getBranches()
      [...]

   getBuses()

      获取潮流结果 buses 数据
    
      >>> channel= result.getBuses()
      [...]

   powerFlowModify(project)

      潮流数据写入 project
    
      >>> channel= result.powerFlowModify(project)

class cloudpss.Project(project: dict = {})

   ### 基类："object"

   CloudPSS工程类，用于处理加载后的工程数据

   实例变量说明：

   rid         项目的 rid

   name         项目的名称

   description  项目的描述

   revision    当前项目的版本信息

   configs     当前项目的所有参数方案

   jobs        当前项目的所有计算方案

   context     当前项目的上下文相关信息

   addConfig(config)

      将参数方案添加到工程中
    
      Params config:
         参数方案 dict
    
      >>> config = project.createConfig('my config')
          project.addConfig(config)

   addJob(job: dict)

      将计算方案添加到工程中
    
      Params job:
         计算方案 dict
    
      >>> job = project.createJob('emtp','emtp job')
          project.addJob(job)

   static create(project)

      新建项目
    
      Params:
         project 项目
    
      返回:
         保存成功/保存失败
    
      >>> Project.create(project)
      保存成功

   createConfig(name)

      创建一个参数方案 根据项目的第一个参数方案生成一个方案 创建出的方
      案默认不加入到项目中，需要加入请调用 addConfig :params name:  参
      数方案名称
    
      返回:
         返回一个参数方案 dict
    
      >>> job = project.createConfig('my config')
          参数方案

   createJob(jobType: str, name)

      创建一个计算方案 创建出的方案默认不加入到项目中，需要加入请调用
      addJob
    
      Params jobType:
         方案类型  电磁暂态仿真方案 emtp 移频电磁暂态仿真方案 sfemt 潮
         流计算方案 powerFlow
    
      返回:
         返回一个指定类型的计算方案
    
      >>> project.createJob('emtp','emtp job')
      计算方案

   static dump(project, file)

      下载项目文件
    
      Params project:
         项目
    
      Params file:
         文件路径
    
      返回:
         无
    
      >>> Project.dump(project,file)

   static fetch(rid)

      获取项目
    
      Params rid:
         项目 rid
    
      返回:
         返回一个项目实例
    
      >>> project=Project.fetch('project/Demo/test')

   static fetchMany(name=None, pageSize=10, pageOffset=0)

      获取用户可以运行的项目列表
    
      Params name:
         查询名称，模糊查询
    
      Params pageSize:
         分页大小
    
      Params pageOffset:
         分页开始位置
    
      返回:
         按分页信息返回项目列表
    
      >>> data=Project.fetchMany()
      [
          {'rid': 'project/admin/share-test', 'name': '1234', 'description': '1234'}
          ...
      ]

   fetchTopology(implementType=None, config=None, maximumDepth=None)

      通过项目信息，获取当前项目对应的拓扑数据
    
      Params implementType:
         实现类型
    
      Params config:
         config 项目参数, 不指定将使用算例保存时选中的参数方案
    
      Params maximumDepth:
         最大递归深度，用于自定义项目中使用 diagram 实现元件展开情况
    
      返回:
         一个拓扑实例
    
      >>> topology=project.fetchTopology() 
          topology=project.fetchTopology(implementType='powerFlow',config=config) # 获取潮流实现的拓扑数据
          topology=project.fetchTopology(maximumDepth=2) # 获取仅展开 2 层的拓扑数据

   getAllComponents()

      获取实现
    
      返回:
         所有元件信息
    
      >>> project.getAllComponents()
      {
          'canvas_0_2': Component 实例
      }

   getComponentByKey(componentKey: str)

      通过元件的 key 获取对应的元件
    
      Params key:
         key 元件的key
    
      Return:
         Component 实例
    
      >>> project.getComponentByKey('canvas_0_757')
      Component 实例

   getComponentsByRid(rid: str)

      通过指定元件类型获取元件
    
      Params str:
         元件类型
    
      返回:
         按照元件的 rid 过滤后的 dict<>
    
      >>> project.getComponentsByRid('project/CloudPSS/newInductorRouter')
      {
          'canvas_0_2': Component 实例
      }

   getProjectConfig(name)

      获取指定名称的参数方案
    
      Params name:
         参数方案名称
    
      返回:
         同名的方案数组
    
      >>> project.getProjectConfig('参数方案 1')

   getProjectJob(name)

      获取指定名称的计算方案
    
      Params Name:
         Name 参数名称
    
      返回:
         同名计算方案数组
    
      >>> project.getProjectJob('电磁暂态方案 1')

   static load(filePath)

      加载本地项目文件
    
      Params file:
         文件目录
    
      返回:
         返回一个项目实例
    
      >>> project = Project.load('filePath')

   run(job=None, config=None, name=None, **kwargs)

      调用仿真
    
      Params job:
         调用仿真时使用的计算方案，不指定将使用算例保存时选中的计算方
         案
    
      Params config:
         调用仿真时使用的参数方案，不指定将使用算例保存时选中的参数方
         案
    
      Params name:
         任务名称，为空时使用项目的参数方案名称和计算方案名称
    
      返回:
         返回一个运行实例
    
      >>> runner=project.run(job,config,'')
      runner

   save(key=None)

      保存/创建项目
    
      key 不为空时如果远程存在相同的资源名称时将覆盖远程项目。 key 为
      空时如果项目 rid 不存在则抛异常，需要重新设置 key。 如果保存时，
      当前用户不是该项目的拥有者时，将重新创建项目，重建项目时如果参数
      的 key 为空将使用当前当前项目的 key 作为资源的 key ，当资源的
      key 和远程冲突时保存失败
    
      Params:
         project 项目
    
      Params:
         key 资源 id 的唯一标识符，
    
      返回:
         保存成功/保存失败
    
      >>> project.save(project)
          project.save(project,'newKey') # 另存为新的项目

   toJSON()

      类对象序列化为 dict :return: dict

   static update(project)

      更新项目
    
      Params:
         project 项目
    
      返回:
         保存成功/保存失败
    
      >>> Project.update(project)

class cloudpss.ProjectRevision(revision: dict = {})

   ### 基类："object"

   表示一个项目的版本数据

   实例变量说明：

   implements          项目当前版本的实现数据

   parameters          项目当前版本的参数结果

   pins                项目当前版本的引脚信息

   documentation       项目当前版本的文档信息

   static create(revision, parentHash=None)

      创建一个新版本
    
      Params:
         revision 版本数据
    
      返回:
         项目版本hash
    
      >>> ProjectRevision.create(project.revision)
      {hash:'4043acbddb9ce0c6174be65573c0380415bc48186c74a459f88865313743230c'}

   fetchTopology(implementType, config, maximumDepth)

      获取当前项目版本的拓扑数据
    
      Params implementType:
         实现类型
    
      Params config:
         项目参数
    
      Params maximumDepth:
         最大递归深度，用于自定义项目中使用 diagram 实现元件展开情况
    
      返回:
         一个拓扑实例
    
      >>> topology=revision.fetchTopology()
          topology=revision.fetchTopology(implementType='powerFlow',config=config) # 获取潮流实现的拓扑数据
          topology=revision.fetchTopology(maximumDepth=2) # 获取仅展开 2 层的拓扑数据

   getImplements()

      获取当前版本的实现
    
      返回:
         实现实例
    
      >>> revision.getImplements()

   run(job, config, name=None, rid='', **kwargs)

      运行某个指定版本的项目
    
      Params job:
         调用仿真时使用的计算方案，为空时使用项目的第一个计算方案
    
      Params config:
         调用仿真时使用的参数方案，为空时使用项目的第一个参数方案
    
      Params name:
         任务名称，为空时使用项目的参数方案名称和计算方案名称
    
      Params rid:
         项目rid，可为空
    
      返回:
         返回一个运行实例
    
      >>> revision.run(revision,job,config,'')

   toJSON()

      类对象序列化为 dict :return: dict

class cloudpss.ProjectTopology(topology: dict = {})

   ### 基类："object"

   项目拓扑类

   通过 该类的静态方法 fetch 获取一个拓扑实例

   static dump(topology, filePath, indent=None)

      以 JSON 格式保存数据到指定文件
    
      Params:
         topology 拓扑实例
    
      Params:
         file 文件路径
    
      Params:
         indent json 格式缩进

   static fetch(hash, implementType, config, maximumDepth=None)

      获取拓扑
    
      Params:
         hash
    
      Params:
         implementType 实现类型
    
      Params:
         config 参数方案
    
      Params:
         maximumDepth 最大递归深度，用于自定义项目中使用 diagram 实现
         元件展开情况
    
      : return: 拓扑实例
    
      >>> data = ProjectTopology.fetch('','emtp',{})

   toJSON()

      将类转换为 dict 数据

class cloudpss.Result(db)

   ### 基类："object"

   结果处理类，从消息存储库中获取数据，并进行简单的整理

   可迭代器，迭代时按接收顺序返回数据

   >>> for data in result:
   >>> print(data)

   也可以从类的 db 变量，获取数据存储类实例进行操作

   static dump(result, file)

      保存结果到本地文件
    
      Params:
         file 保存文件的目录
    
      >>> Result.dump(file)
      {...}

   getLogs()

      获取当前任务的日志
    
      >>>logs= result.getLogs() {…}

   getMessagesByType(type)

      获取指定类型的消息数据
    
      >>> message= result.getMessagesByType('log')

   classmethod load(filePath)

      加载本地结果文件
    
      Params:
         file 文件目录
    
      返回:
         返回一个结果实例
    
      >>> result = Result.load('C:\Users\dps-dm\cloudpss-sdk\result\424111.cjob')

class cloudpss.Runner(taskId, name, job, config, revision, projectRid, **kwargs)

   ### 基类："object"

   static create(revisionHash, job, config, name=None, rid='', **kwargs)

      重建一个运行任务
    
      Params:
         revision 项目版本号
    
      Params:
         job 调用仿真时使用的计算方案，为空时使用项目的第一个计算方案
    
      Params:
         config 调用仿真时使用的参数方案，为空时使用项目的第一个参数方
         案
    
      Params:
         name 任务名称，为空时使用项目的参数方案名称和计算方案名称
    
      Params:
         rid 项目rid，可为空
    
      返回:
         返回一个运行实例
    
      >>> runner = Runner.runRevision(revision,job,config,'')

   listen(**kwargs)

   listenStatus()

   status()

cloudpss.setToken(token)

   设置 用户申请的 sdk token

   Params:
      token token
