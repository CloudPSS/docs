---
title: 仿真任务和结果
description: CloudPSS SDK API 文档仿真任务和结果相关接口
sidebar_position: 43

tags:
- SDK

---



## 仿真任务和结果相关接口

- 该模块包含仿真任务相关的

### Job

#### Job 实例变量说明

##### 任务ID Job.id

- 任务ID

##### 任务参数 Job.args

- 任务参数

##### 任务状态 Job.job_status

- 任务状态

##### 任务创建时间 Job.createTime

- 任务创建时间

##### 任务开始时间 Job.startTime

- 任务开始时间

##### 任务结束时间 Job.endTime

- 任务结束时间

##### 任务执行上下文信息 Job.context

- 任务执行上下文信息

##### 任务执行输入流ID Job.input

- 任务执行输入流ID，用于发送数据给当前任务

##### 任务执行输出流ID Job.output

- 任务执行输出流ID，用于接收任务执行的输出结果

##### 当前任务结果视图 Job.result

- 任务结果，用于兼容旧版本的使用方法

#### Job 静态方法说明

##### 获取job信息 static Job.fetch(id)

- 获取指定 id 的 job
  - 参数：
    - id 任务的 id
  - 返回值
    - 返回当前任务实例
    - 如果 id 不存在直接抛异常
  - 实例：

    ```python
        job = Job.fetch('job/1')
    ```

##### 获取job列表 static Job.fetchMany(name=None, cursor=[],pageSize=10)

- 获取用户有权限的 job 列表
  - 参数：
    - name 查询名称，模糊查询
    - cursor 分页游标
    - pageSize 分页大小
  - 返回值
    - 按分页信息返回 job 列表
  - 实例：

    ```python
        data = Job.fetchMany()
        """
            返回的数据格式 {
                'cursor': ['1705377106000'], # 当前返回数据游标
                'total': 4893,  # 任务总数
                'count': 10,    # 当前返回数据量
                'items':[
                    {'id': 'job/1', 'name': 'job1', 'description': 'job1'}
                    ....
                ]
            }
        """
        cursor=data['cursor']
        # 查询下个游标后的数据
        data2 = Job.fetchMany(cursor=cursor) 

        # 模糊查询
        data2 = Job.fetchMany(name='job1') 
        print('获取任务列表', data)
        
    ```

##### 创建job static Job.create(revisionHash, job, config, name=None, rid="", policy=None, **kwargs)

- 创建job
  - 参数：
    - revisionHash 项目版本的 hash
    - job 计算方案
    - config 参数方案
    - name 任务名称
    - rid 任务的 rid
    - policy 仿真策略
    - kwargs 仿真参数
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        job = Job.create(revisionHash, job, config, name=None, rid="", policy=None, **kwargs)
    ```

##### 下载job static Job.dump(job, file, format="yaml", compress="gzip")

- 下载job
  - 参数：
    - job 任务
    - file 保存文件路径
    - format 保存文件格式
    - compress 保存文件压缩格式
  - 返回值
    - 无
  - 实例：

    ```python
        Job.dump(job, file, format="yaml", compress="gzip")
    ```

##### 加载job static Job.load(file, format="yaml")

- 加载job
  - 参数：
    - file 保存文件路径
    - format 保存文件格式
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        Job.load(file, format="yaml")
    ```

#### Job 实例方法说明

##### 接收当前运行实例的输出 Job.read(receiver=None, **kwargs)

- 接收当前运行实例的输出
  - 参数：
    - receiver 接收者
    - kwargs 仿真参数
  - 返回值
    - 输出流实例
  - 实例：

    ```python
        Job.read(receiver=None, dev=False, **kwargs)
    ```

##### 发送为当前运行实例输入 job.write(sender=None, **kwargs)

- 发送为当前运行实例输入
  - 参数：
    - sender 发送者
    - kwargs 仿真参数
  - 返回值
    - 输入流实例
  - 实例：

    ```python
        Job.write(sender=None, dev=False, **kwargs)
    ```

##### 当前任务的结果视图 Job.view(viewType:F)

- 当前任务的结果视图
  - 参数：
    - 无
  - 返回值
    - 返回一个结果视图
  - 实例：

    ```python
        Job.view(View)
    ```

##### 任务状态（旧版本兼容） Job.status()

- 任务状态（旧版本兼容）
  - 参数：
    - 无
  - 返回值
    - 0: 运行中 1: 运行完成 2: 运行失败
  - 实例：

    ```python
        Job.status()
    ```

### JobPolicy

- 获取用户可用的仿真策略列表
  - 参数：
    - 无
  - 返回值
    - 返回一个仿真策略列表
  - 实例：

    ```python
        JobPolicy.fetchMany()
    ```

### view

- 结果视图相关类

#### View

##### View 实例变量说明

###### 处理后的结果缓存 View.result

- 处理后的结果缓存

###### 原始消息数据库（旧版本兼容） View.db

- 原始消息数据库（旧版本兼容）

##### View 实例方法说明

###### 通过指定消息修改算例文件 View.modify(model, message)

- 通过指定消息修改算例文件
  - 参数：
    - model 算例文件
    - message 消息
  - 返回值
    - 无
  - 实例：

    ```python
        View.modify(model, message)
    ```

###### 获取指定key的消息 View.getMessagesByKey(key)

- 获取指定key的消息
  - 参数：
    - key 消息key
  - 返回值
    - 返回消息所有相同key的消息
  - 实例：

    ```python
        View.getMessagesByKey(key)
    ```

###### 获取指定类型的消息数据 View.getMessagesByType(type)

- 获取指定类型的消息数据
  - 参数：
    - type 消息类型
  - 返回值
    - 返回消息中相同类型的消息
  - 实例：

    ```python
        View.getMessagesByType(type)
    ```

###### 获取指定位置的消息数据 View.getMessage(index)

- 获取指定位置的消息数据
  - 参数：
    - index 消息位置
  - 返回值
    - 返回消息中指定位置的消息
  - 实例：

    ```python
        View.getMessage(index)
    ```

###### 获取所有消息数据 View.getMessages()

- 获取所有消息数据
  - 参数：
    - 无
  - 返回值
    - 返回消息中所有消息
  - 实例：

    ```python
        View.getMessages()
    ```

###### 获取当前任务的日志 View.getLogs()

- 获取当前任务的日志
  - 参数：
    - 无
  - 返回值
    - 返回当前任务的日志，日志只会返回最新的，如果已经获取过日志，再次获取将不在返回
  - 实例：

    ```python
        View.getLogs()
    ```

###### 获取消息数据的长度 View.getMessageLength()

- 获取消息数据的长度
  - 参数：
    - 无
  - 返回值
    - 返回消息数据的长度
  - 实例：

    ```python
        View.getMessageLength()
    ```

###### pop 出缓存中的消息 View.pop()

- pop 出缓存中的消息
  - 参数：
    - 无
  - 返回值
    - 返回消息数据
  - 实例：

    ```python
        View.pop()
    ```

#### EMTView

- [继承自 View，电磁暂态仿真结果视图，提供了电磁暂态仿真结果的相关方法](#view)

##### EMTView 实例方法说明

###### 获取所有的曲线分组 EMTView.getPlots()

- 获取所有的曲线分组
  - 参数：
    - 无
  - 返回值
    - 返回所有图表的数据
  - 实例：

    ```python
        EMTView.getPlots()
    ```

###### 获取指定序号的曲线分组 EMTView.getPlot(index: int)

- 获取指定序号的曲线分组
  - 参数：
    - index 图表位置
  - 返回值
    - 返回指定图表的数据
  - 实例：

    ```python
        EMTView.getPlot(index)
    ```

###### 获取一组输出分组下的所有通道名称 EMTView.getPlotChannelNames(index: int)

- 获取一组输出分组下的所有通道名称
  - 参数：
    - index 图表位置
  - 返回值
    - 返回指定图表的通道名称
  - 实例：

    ```python
        EMTView.getPlotChannelNames(index)
    ```

###### 获取一组输出分组下指定通道名称的曲线数据 EMTView.getPlotChannelData(index, channelName)

- 获取一组输出分组下指定通道名称的曲线数据
  - 参数：
    - index 图表位置
    - channelName 通道名称
  - 返回值
    - 返回指定图表指定通道的曲线数据
  - 实例：

    ```python
        EMTView.getPlotChannelData(index, channelName)
    ```

###### 调试接口，前进一步 EMTView.next()

- 调试接口，前进一步
  - 参数：
    - 无
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.next()
    ```

###### 调试接口，前进到指定位置 EMTView.goto(step)

- 调试接口，前进到指定位置
  - 参数：
    - step 指定位置
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.goto(step)
    ```

###### 写内存接口（debug） EMTView.writeShm(path,buffer,offset)

- 写内存接口 （未最终确定，后续版本进行修改）
  - 参数：
    - path 内存路径
    - buffer 写入的数据
    - offset 写入的偏移量
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.writeShm(path,buffer,offset)
    ```

###### 事件链接口，停止仿真（debug） EMTView.stopSimulation()

- 通过事件链接口停止仿真 （未最终确定，后续版本进行修改）
  - 参数：
    - 无
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.stopSimulation()
    ```

###### 事件链接口，保存断面（debug） EMTView.saveSnapshot(snapshotNumber,log='保存断面成功')

- 通过事件链接口保存断面 （未最终确定，后续版本进行修改）
  - 参数：
    - snapshotNumber 断面序号
    - log 保存断面成功的日志
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.saveSnapshot(snapshotNumber,log='保存断面成功')
    ```

###### 事件链接口，加载断面（debug） EMTView.loadSnapshot(snapshotNumber,log='加载断面成功')

- 通过事件链接口加载断面 （未最终确定，后续版本进行修改）
  - 参数：
    - snapshotNumber 断面序号
    - log 加载断面成功的日志
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.loadSnapshot(snapshotNumber,log='加载断面成功')
    ```

###### 事件链接口，修改元件数据（debug） EMTView.control(controlParam,eventTime='-1',eventTimeType='1')

- 通过事件链接口修改元件数据 （未最终确定，后续版本进行修改）
  - 参数：
    - controlParam 控制参数
    - eventTime 事件时间
    - eventTimeType 事件时间类型
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.control(controlParam,eventTime='-1',eventTimeType='1')
    ```

###### 事件链接口，停止仿真（debug） EMTView.monitor(monitorParam,eventTime='-1',eventTimeType='1')

- 通过事件链接口停止仿真 （未最终确定，后续版本进行修改）
  - 参数：
    - monitorParam 监视参数
    - eventTime 事件时间
    - eventTimeType 事件时间类型
  - 返回值
    - 无
  - 实例：

    ```python
        EMTView.monitor(monitorParam,eventTime='-1',eventTimeType='1')
    ```

#### PowerFlowView

- [继承自 View，潮流仿真结果视图，提供了潮流仿真结果的相关方法](#view)
  
##### PowerFlowView 实例方法说明

###### 获取所有的 buses 数据 PowerFlowView.getBuses()

- 获取所有的 buses 数据
  - 参数：
    - 无
  - 返回值
    - 返回所有 buses 数据
  - 实例：

    ```python
        PowerFlowView.getBuses()
    ```
  
###### 获取潮流结果 branches 数据 PowerFlowView.getBranches()

- 获取潮流结果 branches 数据
  - 参数：
    - 无
  - 返回值
    - 返回所有 branches 数据
  - 实例：

    ```python
        PowerFlowView.getBranches(index)
    ```

###### 潮流数据写入 Model PowerFlowView.powerFlowModify(model)

- 潮流数据写入 Model
  - 参数：
    - model 算例文件
  - 返回值
    - 无
  - 实例：

    ```python
        PowerFlowView.powerFlowModify(model)
    ```

#### IESView

- [继承自 View，IES仿真结果视图，提供了IES仿真结果的相关方法](#view)

##### IESView 实例方法说明

###### 获取指定元件的 plot 数据 IESView.getPlotData(compID, labelName, traceName='all', index=-1)

- 获取元件ID为compID的元件，对应标签为labelName、图例名称为traceName的plot 数据的第index项
  - 参数：
    - compID string类型，代表元件的标识符
    - labelName string类型，代表plot曲线的分组标签
    - traceName string类型，代表Plot曲线对应分组下的图例名称，当为'all'时，返回所有图例的数据
    - index int类型，代表对应图例时序数据中的第index项，当小于0时，返回该图例所有的时序数据
  - 返回值
    - 返回指定元件的 plot 数据
  - 实例：

    ```python
        IESView.getPlotData(compID, labelName, traceName='all', index=-1)
    ```

###### 获取第index个桑基图数据 IESView.getPlotData(index)

- 获取第index个桑基图数据
  - 参数：
    - index int类型，代表第index个桑基图数据
  - 返回值
    - 返回第index个桑基图数据
  - 实例：

    ```python
        IESView.getPlotData(index)
    ```

###### 获取桑基图数据序列的长度 plot 数据 IESView.getSankeyNum()

- 获取桑基图数据序列的长度
  - 参数：
    - 无
  - 返回值
    - 返回桑基图数据序列的长度
  - 实例：

    ```python
        IESView.getSankeyNum()
    ```

#### IESLabTypicalDayView

- [继承自 View，IESLab典型日仿真结果视图，提供了IESLab典型日仿真结果的相关方法](#view)

##### IESLabTypicalDayView 实例方法说明

###### 获取所有的 GetTypical 典型日数据 IESLabTypicalDayView.GetTypical()

- 获取所有的 GetTypical 典型日数据
  - 参数：
    - 无
  - 返回值
    - 返回所有 GetTypical 典型日数据
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypical()
    ```

###### 获取当前result的典型日数量 IESLabTypicalDayView.GetTypicalDayNum()

- 获取当前result的典型日数量
  - 参数：
    - 无
  - 返回值
    - 返回当前result的典型日数量
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypicalDayNum()
    ```

###### 获取dayID对应典型日的基础信息 IESLabTypicalDayView.GetTypicalDayInfo(dayID)

- 获取dayID对应典型日的基础信息
  - 参数：
    - dayID 典型日ID
  - 返回值
    - 返回dayID对应典型日的基础信息
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypicalDayInfo(dayID)
    ```

###### 获取dayID对应典型日下dataType参数的时序曲线  IESLabTypicalDayView.GetTypicalDayData(dayID, dataType)

- 获取dayID对应典型日下dataType参数的时序曲线
  - 参数：
    - dayID 典型日ID
    - dataType 数据类型
  - 返回值
    - 返回dayID对应典型日下dataType参数的时序曲线
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypicalDayData(dayID, dataType)
    ```

###### 获取所有的 GetTypicalMonth 数据  IESLabTypicalDayView.GetTypicalMonth()

- 获取所有的 GetTypicalMonth 数据
  - 参数：
    - 无
  - 返回值
    - 返回所有的 GetTypicalMonth 数据
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypicalMonth()
    ```

###### 获取第monthID月各类型的典型日数据 IESLabTypicalDayView.GetTypicalMonthData(monthID)

- 获取第monthID月各类型的典型日数据
  - 参数：
    - monthID 月份ID
  - 返回值
    - 返回第monthID月各类型的典型日数据
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypicalMonthData(monthID)
    ```

###### 获取dayID对应典型日下dataType参数的时序曲线  IESLabTypicalDayView.GetTypicalMonthCurve(monthID, dataType)

- 获取dayID对应典型日下dataType参数的时序曲线
  - 参数：
    - monthID 月份ID
    - dataType 数据类型
  - 返回值
    - 返回dayID对应典型日下dataType参数的时序曲线
  - 实例：

    ```python
        IESLabTypicalDayView.GetTypicalMonthCurve(monthID, dataType)
    ```

#### IESLabSimulationView

- [继承自 IESView，IESLab仿真结果视图，提供了IESLab仿真结果的相关方法](#iesview)

#### IESLabEvaluationResult

##### IESLabEvaluationResult 实例方法说明

###### 获取运行状态 IESLabEvaluationResult.status()

- 获取运行状态
  - 参数：
    - 无
  - 返回值
    - 返回运行状态
  - 实例：

    ```python
        IESLabEvaluationResult.status()
    ```

###### 获取planID对应的优化方案下resultType财务评估结果 IESLabEvaluationResult.GetFinancialResult(resultType, planID)

- 获取planID对应的优化方案下resultType财务评估结果
  - 参数：
    - resultType 财务评估结果类型
    - planID 优化方案ID
  - 返回值
    - 返回planID对应的优化方案下resultType财务评估结果
  - 实例：

    ```python
        IESLabEvaluationResult.GetFinancialResult(resultType, planID)
    ```

###### 获取当前结果类对应的优化方案下的概览结果 IESLabEvaluationResult.GetOverviewResult(planID)

- 获取当前结果类对应的优化方案下的概览结果
  - 参数：
    - planID 优化方案ID
  - 返回值
    - 返回planID对应的优化方案下的概览结果
  - 实例：

    ```python
        IESLabEvaluationResult.GetOverviewResult(planID)
    ```

###### 获取当前结果类对应的优化方案下的能效评价 IESLabEvaluationResult.GetEnergyEvaluationResult(planID)

- 获取当前结果类对应的优化方案下的能效评价
  - 参数：
    - planID 优化方案ID
  - 返回值
    - 返回planID对应的优化方案下的能效评价
  - 实例：

    ```python
        IESLabEvaluationResult.GetEnergyEvaluationResult(planID)
    ```

###### 获取当前结果类对应的优化方案下的环保评价 IESLabEvaluationResult.GetEnvironmentalEvaluationResult(planID)

- 获取当前结果类对应的优化方案下的环保评价
  - 参数：
    - planID 优化方案ID
  - 返回值
    - 返回planID对应的优化方案下的环保评价
  - 实例：

    ```python
        IESLabEvaluationResult.GetEnvironmentalEvaluationResult(planID)
    ```

#### IESLabPlanResult

##### IESLabPlanResult 实例方法说明

###### 获取运行状态 IESLabPlanResult.status()

- 获取运行状态
  - 参数：
    - 无
  - 返回值
    - 返回运行状态
  - 实例：

    ```python
        IESLabPlanResult.status()
    ```

###### 获取运行日志 IESLabPlanResult.GetLogs()

- 获取运行日志
  - 参数：
    - 无
  - 返回值
    - 返回运行日志
  - 实例：

    ```python
        IESLabPlanResult.GetLogs()
    ```

###### 获取当前结果实例对应的优化方案数量 IESLabPlanResult.GetPlanNum()

- 获取当前结果实例对应的优化方案数量
  - 参数：
    - 无
  - 返回值
    - 返回当前结果实例对应的优化方案数量
  - 实例：

    ```python
        IESLabPlanResult.GetPlanNum()
    ```

###### 获取planID对应的优化方案的基础信息 IESLabPlanResult.GetPlanInfo(planID)

- 获取planID对应的优化方案的基础信息
  - 参数：
    - planID 优化方案ID
  - 返回值
    - 返回planID对应的优化方案的基础信息
  - 实例：

    ```python
        IESLabPlanResult.GetPlanInfo(planID)
    ```

###### 获取planID对应的优化方案的配置信息 IESLabPlanResult.GetPlanConfiguration(planID)

- 获取planID对应的优化方案的配置信息
  - 参数：
    - planID 优化方案ID
  - 返回值
    - 返回planID对应的优化方案的配置信息
  - 实例：

    ```python
        IESLabPlanResult.GetPlanConfiguration(planID)
    ```

###### 获取方案结果中的指定元件信息 IESLabPlanResult.GetComponentResult( planID, componentID, typicalDayName='')

- 获取planID对应的优化方案下componentID对应元件的运行信息
  - 参数：
    - planID 优化方案ID
    - componentID 元件ID
    - typicalDayName 典型日名称
  - 返回值
    - 返回planID对应的优化方案下componentID对应元件的运行信息
  - 实例：

    ```python
        IESLabPlanResult.GetComponentResult( planID, componentID, typicalDayName='')
    ```

###### 获取当前result实例对应的优化方案数量 IESLabPlanResult.GetComponentTypiDays(planId, componentID)

- 获取当前result实例对应的优化方案数量
  - 参数：
    - planId 优化方案ID
    - componentID 元件ID
  - 返回值
    - 返回当前result实例对应的优化方案数量
  - 实例：

    ```python
        IESLabPlanResult.GetComponentTypiDays(planId, componentID)
    ```

###### 获取最后一次运行的taskID的运行结果 IESLabPlanResult.getLastTaskResult()

- 获取最后一次运行的taskID的运行结果
  - 参数：
    - 无
  - 返回值
    - 返回最后一次运行的taskID的运行结果
  - 实例：

    ```python
        IESLabPlanResult.getLastTaskResult()
    ```
