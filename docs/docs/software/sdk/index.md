---
title: CloudPSS SDK
description: CloudPSS SDK 文档
sidebar_position: 80

tags:
- SDK

---

# CloudPSS SDK 接口文档

- [CloudPSS SDK 接口文档](#cloudpss-sdk-接口文档)
  - [拓扑编辑页面相关接口](#拓扑编辑页面相关接口)
    - [Model](#model)
      - [实例变量说明](#实例变量说明)
        - [项目Rid model.rid](#项目rid-modelrid)
        - [项目名称 model.name](#项目名称-modelname)
        - [项目描述 model.description](#项目描述-modeldescription)
        - [项目的版本信息 model.revision](#项目的版本信息-modelrevision)
        - [项目的参数方案 model.configs](#项目的参数方案-modelconfigs)
        - [项目的计算方案 model.jobs](#项目的计算方案-modeljobs)
        - [项目的上下文相关信息 model.context](#项目的上下文相关信息-modelcontext)
      - [静态方法说明](#静态方法说明)
        - [获取项目 static Model.fetch(rid)](#获取项目-static-modelfetchrid)
        - [新建项目 static Model.create(model)](#新建项目-static-modelcreatemodel)
        - [更新项目 static Model.update(model)](#更新项目-static-modelupdatemodel)
        - [保存当前项目到本地文件 static Model.dump(model, file, format='yaml', compress='gzip')](#保存当前项目到本地文件-static-modeldumpmodel-file-formatyaml-compressgzip)
        - [加载本地项目文件 static Model.load(filePath, format="yaml")](#加载本地项目文件-static-modelloadfilepath-formatyaml)
      - [实例函数说明](#实例函数说明)
        - [创建一个计算方案 model.createJob( jobType: str, name:str)](#创建一个计算方案-modelcreatejob-jobtype-str-namestr)
        - [将计算方案添加到工程中 model.addJob(job: dict)](#将计算方案添加到工程中-modeladdjobjob-dict)
        - [获取指定名称的计算方案 model.getModelJob](#获取指定名称的计算方案-modelgetmodeljob)
        - [创建一个参数方案 model.createConfig(name)](#创建一个参数方案-modelcreateconfigname)
        - [将参数方案添加到工程中 model.addConfig(config)](#将参数方案添加到工程中-modeladdconfigconfig)
        - [获取指定名称的参数方案 model.getModelConfig(name)](#获取指定名称的参数方案-modelgetmodelconfigname)
        - [添加元件 model.addComponent(definition, label, args, pins, canvas=None, position=None, size=None)](#添加元件-modeladdcomponentdefinition-label-args-pins-canvasnone-positionnone-sizenone)
        - [更新元件 model.updateComponent(key,label=None,args=None,pins=None, canvas=None, position=None, size=None)](#更新元件-modelupdatecomponentkeylabelnoneargsnonepinsnone-canvasnone-positionnone-sizenone)
        - [删除元件 model.removeComponent(key)](#删除元件-modelremovecomponentkey)
        - [获取所有元件 model.getAllComponents()](#获取所有元件-modelgetallcomponents)
        - [获取指定key的元件 model.getComponentByKey(componentKey)](#获取指定key的元件-modelgetcomponentbykeycomponentkey)
        - [获取指定rid的所有元件 model.getComponentsByRid(rid: str)](#获取指定rid的所有元件-modelgetcomponentsbyridrid-str)
        - [运行电磁暂态仿真计算任务 model.runEMT(job=None, config=None,stop\_on\_entry=None,\*\*kwargs)-\> Job\[EMTView\]](#运行电磁暂态仿真计算任务-modelrunemtjobnone-confignonestop_on_entrynonekwargs--jobemtview)
        - [运行潮流计算任务 model.runPowerFlow(job=None, config=None,\*\*kwargs) -\> Job\[PowerFlowView\]](#运行潮流计算任务-modelrunpowerflowjobnone-confignonekwargs---jobpowerflowview)
        - [model.runIESEnergyStoragePlan( job=None, config=None,\*\*kwargs) -\> Job\[IESView\]](#modelruniesenergystorageplan-jobnone-confignonekwargs---jobiesview)
        - [model.runIESLoadPrediction](#modelruniesloadprediction)
        - [model.runIESPowerFlow](#modelruniespowerflow)
        - [model.runThreePhasePowerFlow](#modelrunthreephasepowerflow)
        - [保存/另存项目 model.save(key=None)](#保存另存项目-modelsavekeynone)
    - [ModelRevision](#modelrevision)
      - [ModelRevision 实例变量说明](#modelrevision-实例变量说明)
        - [项目当前版本的实现数据 ModelRevision.implements](#项目当前版本的实现数据-modelrevisionimplements)
        - [项目当前版本的参数信息 ModelRevision.parameters](#项目当前版本的参数信息-modelrevisionparameters)
        - [项目当前版本的引脚信息 ModelRevision.pins](#项目当前版本的引脚信息-modelrevisionpins)
        - [项目当前版本的文档信息 ModelRevision.documentation](#项目当前版本的文档信息-modelrevisiondocumentation)
      - [ModelRevision 静态方法说明](#modelrevision-静态方法说明)
        - [创建一个新版本 static ModelRevision.create(revision, parentHash=None)](#创建一个新版本-static-modelrevisioncreaterevision-parenthashnone)
      - [ModelRevision 实例函数说明](#modelrevision-实例函数说明)
        - [运行当前版本 modelRevision.run( job, config, name=None,rid=None, policy=None,stop\_on\_entry=None, \*\*kwargs)](#运行当前版本-modelrevisionrun-job-config-namenoneridnone-policynonestop_on_entrynone-kwargs)
        - [获取当前版本的拓扑 modelRevision.getTopology(implementType, config, maximumDepth)](#获取当前版本的拓扑-modelrevisiongettopologyimplementtype-config-maximumdepth)
        - [获取当前版本的实现 modelRevision.getImplements()](#获取当前版本的实现-modelrevisiongetimplements)
    - [ModelTopology](#modeltopology)
      - [ModelTopology 静态方法说明](#modeltopology-静态方法说明)
        - [获取拓扑 ModelTopology.getTopology(implementType, config, maximumDepth)](#获取拓扑-modeltopologygettopologyimplementtype-config-maximumdepth)
        - [获取拓扑 ModelTopology.dump(topology, filePath, indent=None)](#获取拓扑-modeltopologydumptopology-filepath-indentnone)
  - [本地执行器启动任务后的相关接口](#本地执行器启动任务后的相关接口)
    - [FunctionExecution](#functionexecution)
      - [FunctionExecution 实例变量说明](#functionexecution-实例变量说明)
        - [任务ID FunctionExecution.id](#任务id-functionexecutionid)
        - [函数ID FunctionExecution.functionId](#函数id-functionexecutionfunctionid)
        - [执行器ID FunctionExecution.executorId](#执行器id-functionexecutionexecutorid)
        - [执行器名称 FunctionExecution.executorName](#执行器名称-functionexecutionexecutorname)
        - [执行器版本 FunctionExecution.executorVersion](#执行器版本-functionexecutionexecutorversion)
        - [api地址 FunctionExecution.apiUrl](#api地址-functionexecutionapiurl)
        - [gql地址 FunctionExecution.gqlUrl](#gql地址-functionexecutiongqlurl)
        - [任务token FunctionExecution.token](#任务token-functionexecutiontoken)
        - [函数token FunctionExecution.functionToken](#函数token-functionexecutionfunctiontoken)
        - [函数参数 FunctionExecution.args](#函数参数-functionexecutionargs)
      - [FunctionExecution 静态方法说明](#functionexecution-静态方法说明)
        - [获取当前执行的 FunctionExecution FunctionExecution.current()](#获取当前执行的-functionexecution-functionexecutioncurrent)
      - [FunctionExecution 实例方法说明](#functionexecution-实例方法说明)
        - [结束任务 FunctionExecution.exit(code)](#结束任务-functionexecutionexitcode)
        - [发送图表信息 FunctionExecution.plot(traces=\[\], layout={}, title='', key=None, verb='replace')](#发送图表信息-functionexecutionplottraces-layout-title-keynone-verbreplace)
        - [发送表格信息 FunctionExecution.table(columns=\[\], title='', key=None, verb='replace')](#发送表格信息-functionexecutiontablecolumns-title-keynone-verbreplace)
        - [发送日志消息 FunctionExecution.log(content, level='info', html=False, key=None)](#发送日志消息-functionexecutionlogcontent-levelinfo-htmlfalse-keynone)
        - [发送分组消息 `FunctionExecution.container(items=[],layout={'type': 'tabs','position': 'top'},key=None)`](#发送分组消息-functionexecutioncontaineritemslayouttype-tabsposition-topkeynone)
        - [发送 tabs 布局分组消息 `FunctionExecution.tabsContainer( items=[], position='top', key=None)`](#发送-tabs-布局分组消息-functionexecutiontabscontainer-items-positiontop-keynone)
        - [发送 grid 布局分组消息 `FunctionExecution.gridContainer(item=[],grid="'item1 . item2' 1fr 'item1 item3 item4' 1fr / 1fr auto 2fr",key=None)`](#发送-grid-布局分组消息-functionexecutiongridcontaineritemgriditem1--item2-1fr-item1-item3-item4-1fr--1fr-auto-2frkeynone)
        - [发送进度信息 `FunctionExecution.progress(value=0, title='', key='progress-1')`](#发送进度信息-functionexecutionprogressvalue0-title-keyprogress-1)
        - [监听前台的终止事件 `FunctionExecution.on_abort(func, args=[], kwargs={})`](#监听前台的终止事件-functionexecutionon_abortfunc-args-kwargs)
  - [仿真任务和结果相关接口](#仿真任务和结果相关接口)
    - [Job](#job)
      - [Job 实例变量说明](#job-实例变量说明)
        - [任务ID Job.id](#任务id-jobid)
        - [任务参数 Job.args](#任务参数-jobargs)
        - [任务状态 Job.job\_status](#任务状态-jobjob_status)
        - [任务创建时间 Job.createTime](#任务创建时间-jobcreatetime)
        - [任务开始时间 Job.startTime](#任务开始时间-jobstarttime)
        - [任务结束时间 Job.endTime](#任务结束时间-jobendtime)
        - [任务执行上下文信息 Job.context](#任务执行上下文信息-jobcontext)
        - [任务执行输入流ID Job.input](#任务执行输入流id-jobinput)
        - [任务执行输出流ID Job.output](#任务执行输出流id-joboutput)
        - [当前任务结果视图 Job.result](#当前任务结果视图-jobresult)
      - [Job 静态方法说明](#job-静态方法说明)
        - [获取job信息 static Job.fetch(id)](#获取job信息-static-jobfetchid)
        - [获取job列表 static Job.fetchMany(name=None, cursor=\[\],pageSize=10)](#获取job列表-static-jobfetchmanynamenone-cursorpagesize10)
        - [创建job static Job.create(revisionHash, job, config, name=None, rid="", policy=None, \*\*kwargs)](#创建job-static-jobcreaterevisionhash-job-config-namenone-rid-policynone-kwargs)
        - [下载job static Job.dump(job, file, format="yaml", compress="gzip")](#下载job-static-jobdumpjob-file-formatyaml-compressgzip)
        - [加载job static Job.load(file, format="yaml")](#加载job-static-jobloadfile-formatyaml)
      - [Job 实例方法说明](#job-实例方法说明)
        - [接收当前运行实例的输出 Job.read(receiver=None, \*\*kwargs)](#接收当前运行实例的输出-jobreadreceivernone-kwargs)
        - [发送为当前运行实例输入 job.write(sender=None, \*\*kwargs)](#发送为当前运行实例输入-jobwritesendernone-kwargs)
        - [当前任务的结果视图 Job.view(viewType:F)](#当前任务的结果视图-jobviewviewtypef)
        - [任务状态（旧版本兼容） Job.status()](#任务状态旧版本兼容-jobstatus)
    - [JobPolicy](#jobpolicy)
    - [view](#view)
      - [View](#view-1)
        - [View 实例变量说明](#view-实例变量说明)
          - [处理后的结果缓存 View.result](#处理后的结果缓存-viewresult)
          - [原始消息数据库（旧版本兼容） View.db](#原始消息数据库旧版本兼容-viewdb)
        - [View 实例方法说明](#view-实例方法说明)
          - [通过指定消息修改算例文件 View.modify(model, message)](#通过指定消息修改算例文件-viewmodifymodel-message)
          - [获取指定key的消息 View.getMessagesByKey(key)](#获取指定key的消息-viewgetmessagesbykeykey)
          - [获取指定类型的消息数据 View.getMessagesByType(type)](#获取指定类型的消息数据-viewgetmessagesbytypetype)
          - [获取指定位置的消息数据 View.getMessage(index)](#获取指定位置的消息数据-viewgetmessageindex)
          - [获取所有消息数据 View.getMessages()](#获取所有消息数据-viewgetmessages)
          - [获取当前任务的日志 View.getLogs()](#获取当前任务的日志-viewgetlogs)
          - [获取消息数据的长度 View.getMessageLength()](#获取消息数据的长度-viewgetmessagelength)
          - [pop 出缓存中的消息 View.pop()](#pop-出缓存中的消息-viewpop)
      - [EMTView](#emtview)
        - [EMTView 实例方法说明](#emtview-实例方法说明)
          - [获取所有的曲线分组 EMTView.getPlots()](#获取所有的曲线分组-emtviewgetplots)
          - [获取指定序号的曲线分组 EMTView.getPlot(index: int)](#获取指定序号的曲线分组-emtviewgetplotindex-int)
          - [获取一组输出分组下的所有通道名称 EMTView.getPlotChannelNames(index: int)](#获取一组输出分组下的所有通道名称-emtviewgetplotchannelnamesindex-int)
          - [获取一组输出分组下指定通道名称的曲线数据 EMTView.getPlotChannelData(index, channelName)](#获取一组输出分组下指定通道名称的曲线数据-emtviewgetplotchanneldataindex-channelname)
          - [调试接口，前进一步 EMTView.next()](#调试接口前进一步-emtviewnext)
          - [调试接口，前进到指定位置 EMTView.goto(step)](#调试接口前进到指定位置-emtviewgotostep)
          - [写内存接口（debug） EMTView.writeShm(path,buffer,offset)](#写内存接口debug-emtviewwriteshmpathbufferoffset)
          - [事件链接口，停止仿真（debug） EMTView.stopSimulation()](#事件链接口停止仿真debug-emtviewstopsimulation)
          - [事件链接口，保存断面（debug） EMTView.saveSnapshot(snapshotNumber,log='保存断面成功')](#事件链接口保存断面debug-emtviewsavesnapshotsnapshotnumberlog保存断面成功)
          - [事件链接口，加载断面（debug） EMTView.loadSnapshot(snapshotNumber,log='加载断面成功')](#事件链接口加载断面debug-emtviewloadsnapshotsnapshotnumberlog加载断面成功)
          - [事件链接口，修改元件数据（debug） EMTView.control(controlParam,eventTime='-1',eventTimeType='1')](#事件链接口修改元件数据debug-emtviewcontrolcontrolparameventtime-1eventtimetype1)
          - [事件链接口，停止仿真（debug） EMTView.monitor(monitorParam,eventTime='-1',eventTimeType='1')](#事件链接口停止仿真debug-emtviewmonitormonitorparameventtime-1eventtimetype1)
      - [PowerFlowView](#powerflowview)
        - [PowerFlowView 实例方法说明](#powerflowview-实例方法说明)
          - [获取所有的 buses 数据 PowerFlowView.getBuses()](#获取所有的-buses-数据-powerflowviewgetbuses)
          - [获取潮流结果 branches 数据 PowerFlowView.getBranches()](#获取潮流结果-branches-数据-powerflowviewgetbranches)
          - [潮流数据写入 Model PowerFlowView.powerFlowModify(model)](#潮流数据写入-model-powerflowviewpowerflowmodifymodel)
      - [IESView](#iesview)
        - [IESView 实例方法说明](#iesview-实例方法说明)
          - [获取指定元件的 plot 数据 IESView.getPlotData(compID, labelName, traceName='all', index=-1)](#获取指定元件的-plot-数据-iesviewgetplotdatacompid-labelname-tracenameall-index-1)
          - [获取第index个桑基图数据 IESView.getPlotData(index)](#获取第index个桑基图数据-iesviewgetplotdataindex)
          - [获取桑基图数据序列的长度 plot 数据 IESView.getSankeyNum()](#获取桑基图数据序列的长度-plot-数据-iesviewgetsankeynum)
      - [IESLabTypicalDayView](#ieslabtypicaldayview)
        - [IESLabTypicalDayView 实例方法说明](#ieslabtypicaldayview-实例方法说明)
          - [获取所有的 GetTypical 典型日数据 IESLabTypicalDayView.GetTypical()](#获取所有的-gettypical-典型日数据-ieslabtypicaldayviewgettypical)
          - [获取当前result的典型日数量 IESLabTypicalDayView.GetTypicalDayNum()](#获取当前result的典型日数量-ieslabtypicaldayviewgettypicaldaynum)
          - [获取dayID对应典型日的基础信息 IESLabTypicalDayView.GetTypicalDayInfo(dayID)](#获取dayid对应典型日的基础信息-ieslabtypicaldayviewgettypicaldayinfodayid)
          - [获取dayID对应典型日下dataType参数的时序曲线  IESLabTypicalDayView.GetTypicalDayData(dayID, dataType)](#获取dayid对应典型日下datatype参数的时序曲线--ieslabtypicaldayviewgettypicaldaydatadayid-datatype)
          - [获取所有的 GetTypicalMonth 数据  IESLabTypicalDayView.GetTypicalMonth()](#获取所有的-gettypicalmonth-数据--ieslabtypicaldayviewgettypicalmonth)
          - [获取第monthID月各类型的典型日数据 IESLabTypicalDayView.GetTypicalMonthData(monthID)](#获取第monthid月各类型的典型日数据-ieslabtypicaldayviewgettypicalmonthdatamonthid)
          - [获取dayID对应典型日下dataType参数的时序曲线  IESLabTypicalDayView.GetTypicalMonthCurve(monthID, dataType)](#获取dayid对应典型日下datatype参数的时序曲线--ieslabtypicaldayviewgettypicalmonthcurvemonthid-datatype)
      - [IESLabSimulationView](#ieslabsimulationview)
      - [IESLabEvaluationResult](#ieslabevaluationresult)
        - [IESLabEvaluationResult 实例方法说明](#ieslabevaluationresult-实例方法说明)
          - [获取运行状态 IESLabEvaluationResult.status()](#获取运行状态-ieslabevaluationresultstatus)
          - [获取planID对应的优化方案下resultType财务评估结果 IESLabEvaluationResult.GetFinancialResult(resultType, planID)](#获取planid对应的优化方案下resulttype财务评估结果-ieslabevaluationresultgetfinancialresultresulttype-planid)
          - [获取当前结果类对应的优化方案下的概览结果 IESLabEvaluationResult.GetOverviewResult(planID)](#获取当前结果类对应的优化方案下的概览结果-ieslabevaluationresultgetoverviewresultplanid)
          - [获取当前结果类对应的优化方案下的能效评价 IESLabEvaluationResult.GetEnergyEvaluationResult(planID)](#获取当前结果类对应的优化方案下的能效评价-ieslabevaluationresultgetenergyevaluationresultplanid)
          - [获取当前结果类对应的优化方案下的环保评价 IESLabEvaluationResult.GetEnvironmentalEvaluationResult(planID)](#获取当前结果类对应的优化方案下的环保评价-ieslabevaluationresultgetenvironmentalevaluationresultplanid)
      - [IESLabPlanResult](#ieslabplanresult)
        - [IESLabPlanResult 实例方法说明](#ieslabplanresult-实例方法说明)
          - [获取运行状态 IESLabPlanResult.status()](#获取运行状态-ieslabplanresultstatus)
          - [获取运行日志 IESLabPlanResult.GetLogs()](#获取运行日志-ieslabplanresultgetlogs)
          - [获取当前结果实例对应的优化方案数量 IESLabPlanResult.GetPlanNum()](#获取当前结果实例对应的优化方案数量-ieslabplanresultgetplannum)
          - [获取planID对应的优化方案的基础信息 IESLabPlanResult.GetPlanInfo(planID)](#获取planid对应的优化方案的基础信息-ieslabplanresultgetplaninfoplanid)
          - [获取planID对应的优化方案的配置信息 IESLabPlanResult.GetPlanConfiguration(planID)](#获取planid对应的优化方案的配置信息-ieslabplanresultgetplanconfigurationplanid)
          - [获取方案结果中的指定元件信息 IESLabPlanResult.GetComponentResult( planID, componentID, typicalDayName='')](#获取方案结果中的指定元件信息-ieslabplanresultgetcomponentresult-planid-componentid-typicaldayname)
          - [获取当前result实例对应的优化方案数量 IESLabPlanResult.GetComponentTypiDays(planId, componentID)](#获取当前result实例对应的优化方案数量-ieslabplanresultgetcomponenttypidaysplanid-componentid)
          - [获取最后一次运行的taskID的运行结果 IESLabPlanResult.getLastTaskResult()](#获取最后一次运行的taskid的运行结果-ieslabplanresultgetlasttaskresult)
  - [DSlab 相关接口](#dslab-相关接口)
  - [IESlab 相关接口](#ieslab-相关接口)
    - [IESLabSimulation](#ieslabsimulation)
      - [IESLabSimulation 实例变量说明](#ieslabsimulation-实例变量说明)
        - [算例id IESLabSimulation.id](#算例id-ieslabsimulationid)
        - [算例名称 IESLabSimulation.name](#算例名称-ieslabsimulationname)
        - [算例分组信息 IESLabSimulation.project\_group](#算例分组信息-ieslabsimulationproject_group)
        - [算例拓扑信息 IESLabSimulation.model](#算例拓扑信息-ieslabsimulationmodel)
        - [算例的数据管理模块数据 IESLabSimulation.dataManageModel](#算例的数据管理模块数据-ieslabsimulationdatamanagemodel)
      - [IESLabSimulation 静态方法说明](#ieslabsimulation-静态方法说明)
        - [获取算例信息 static IESLabSimulation.fetch(id)](#获取算例信息-static-ieslabsimulationfetchid)
        - [创建项目组 static IESLabSimulation.create(group\_name, desc=None, createById=None)](#创建项目组-static-ieslabsimulationcreategroup_name-descnone-createbyidnone)
        - [创建项目 static IESLabSimulation.createProject(project\_group, desc=None, createById=None)](#创建项目-static-ieslabsimulationcreateprojectproject_group-descnone-createbyidnone)
      - [IESLabSimulation 实例方法说明](#ieslabsimulation-实例方法说明)
        - [调用仿真 IESLabSimulation.run( job=None, name=None)](#调用仿真-ieslabsimulationrun-jobnone-namenone)
    - [IESLabPlan](#ieslabplan)
      - [IESLabPlan 实例变量说明](#ieslabplan-实例变量说明)
        - [算例id IESLabPlan.id](#算例id-ieslabplanid)
        - [算例名称 IESLabPlan.name](#算例名称-ieslabplanname)
        - [算例分组信息 IESLabPlan.project\_group](#算例分组信息-ieslabplanproject_group)
        - [算例拓扑信息 IESLabPlan.model](#算例拓扑信息-ieslabplanmodel)
        - [算例的数据管理模块数据 IESLabPlan.dataManageModel](#算例的数据管理模块数据-ieslabplandatamanagemodel)
        - [方案优选模块 IESLabPlan.planModel](#方案优选模块-ieslabplanplanmodel)
        - [方案评估模块 IESLabPlan.evaluationModel](#方案评估模块-ieslabplanevaluationmodel)
        - [方案优选结果数据 IESLabPlan.currentPlanResult](#方案优选结果数据-ieslabplancurrentplanresult)
        - [方案评估结果数据 IESLabPlan.currentEvaluationResult](#方案评估结果数据-ieslabplancurrentevaluationresult)
      - [IESLabPlan 静态方法说明](#ieslabplan-静态方法说明)
        - [获取算例信息 static IESLabPlan.fetch(id)](#获取算例信息-static-ieslabplanfetchid)
        - [创建项目组 static IESLabPlan.create(group\_name, desc=None, createById=None)](#创建项目组-static-ieslabplancreategroup_name-descnone-createbyidnone)
        - [创建项目 static IESLabPlan.createProject(project\_group, desc=None, createById=None)](#创建项目-static-ieslabplancreateprojectproject_group-descnone-createbyidnone)
      - [IESLabPlan 实例方法说明](#ieslabplan-实例方法说明)
        - [运行典型日计算 IESLabPlan.iesLabTypicalDayRun( job=None, name=None, \*\*kwargs)](#运行典型日计算-ieslabplanieslabtypicaldayrun-jobnone-namenone-kwargs)
        - [运行方案评估 IESLabPlan.iesLabEvaluationRun( planId, type=None)](#运行方案评估-ieslabplanieslabevaluationrun-planid-typenone)
        - [运行能效评价 IESLabPlan.iesLabEnergyEvaluationRun( planId)](#运行能效评价-ieslabplanieslabenergyevaluationrun-planid)
        - [运行方案优选 IESLabPlan.iesLabPlanRun( )](#运行方案优选-ieslabplanieslabplanrun-)
        - [停止并删除方案优选算例 IESLabPlan.iesLabPlanRun( )](#停止并删除方案优选算例-ieslabplanieslabplanrun-)
    - [数据管理模块 DataManageModel](#数据管理模块-datamanagemodel)
      - [DataManageModel 实例方法说明](#datamanagemodel-实例方法说明)
        - [获取ID对应的数据信息 DataManageModel.GetDataItem(ID: str)](#获取id对应的数据信息-datamanagemodelgetdataitemid-str)
        - [获取dataType类型对应所有数据项的列表 DataManageModel.GetItemList(dataType)](#获取datatype类型对应所有数据项的列表-datamanagemodelgetitemlistdatatype)
        - [向dataType类型的数据库中添加内容为data的数据项 DataManageModel.AddDataItem( dataType, data)](#向datatype类型的数据库中添加内容为data的数据项-datamanagemodeladddataitem-datatype-data)
        - [更新数据管理模块数据 DataManageModel.UpdateDataManageModel(ID: str, data)](#更新数据管理模块数据-datamanagemodelupdatedatamanagemodelid-str-data)
        - [删除ID对应的数据 DataManageModel.DeleteDataItem(ID: str)](#删除id对应的数据-datamanagemodeldeletedataitemid-str)
        - [设置项目的天气数据坐标，加载天气数据 DataManageModel.SetProjectPosition( longitude, latitude)](#设置项目的天气数据坐标加载天气数据-datamanagemodelsetprojectposition-longitude-latitude)
        - [获取指定时间段的天气数据 DataManageModel.GetAtmosData(startDate, endDate)](#获取指定时间段的天气数据-datamanagemodelgetatmosdatastartdate-enddate)
    - [方案优选模块 IESLabPlanModel](#方案优选模块-ieslabplanmodel)
      - [IESLabPlanModel 实例变量说明](#ieslabplanmodel-实例变量说明)
        - [算例id IESLabPlanModel.simulationId](#算例id-ieslabplanmodelsimulationid)
        - [优化目标设置信息 IESLabPlanModel.optimizationInfo](#优化目标设置信息-ieslabplanmodeloptimizationinfo)
      - [IESLabPlanModel 实例方法说明](#ieslabplanmodel-实例方法说明)
        - [设置优化目标 IESLabPlanModel.SetOptimizationInfo(optType)](#设置优化目标-ieslabplanmodelsetoptimizationinfoopttype)
        - [获取优化目标 IESLabPlanModel.GetOptimizationInfo()](#获取优化目标-ieslabplanmodelgetoptimizationinfo)
        - [运行方案优选 IESLabPlanModel.run()](#运行方案优选-ieslabplanmodelrun)
        - [获得运行实例 IESLabPlanModel.GetRunner()](#获得运行实例-ieslabplanmodelgetrunner)
        - [停止并删除当前运行的优化算例 IESLabPlanModel.kill()](#停止并删除当前运行的优化算例-ieslabplanmodelkill)
        - [获取当前算例是否处于运行中 GetLastTaskResult()](#获取当前算例是否处于运行中-getlasttaskresult)
    - [方案评估模块 IESLabEvaluationModel](#方案评估模块-ieslabevaluationmodel)
      - [IESLabEvaluationModel 实例方法说明](#ieslabevaluationmodel-实例方法说明)
        - [获取指定方案财务评估模块的基础信息 IESLabEvaluationModel.GetFinancialParams(planID)](#获取指定方案财务评估模块的基础信息-ieslabevaluationmodelgetfinancialparamsplanid)
        - [运行方案评估 IESLabEvaluationModel.run(planID, type=None)](#运行方案评估-ieslabevaluationmodelrunplanid-typenone)
        - [运行环保评价方案评估 IESLabEvaluationModel.EnvironmentalEvaluationRun(planID)](#运行环保评价方案评估-ieslabevaluationmodelenvironmentalevaluationrunplanid)
        - [运行能效评价方案评估 IESLabEvaluationModel.EnergyEvaluationRun(planID)](#运行能效评价方案评估-ieslabevaluationmodelenergyevaluationrunplanid)
        - [获得运行实例 IESLabEvaluationModel.GetRunner(planID)](#获得运行实例-ieslabevaluationmodelgetrunnerplanid)



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

## 本地执行器启动任务后的相关接口

- 该模块包含函数相关的

### FunctionExecution

- 当前执行的 FunctionExecution 单例

#### FunctionExecution 实例变量说明

##### 任务ID FunctionExecution.id

- 执行器被创建时的任务ID

##### 函数ID FunctionExecution.functionId

- 执行器被创建时的任务函数ID

##### 执行器ID FunctionExecution.executorId

- 执行器被创建时的执行器ID

##### 执行器名称 FunctionExecution.executorName

- 执行器被创建时的执行器名称

##### 执行器版本 FunctionExecution.executorVersion

- 执行器被创建时的执行器版本

##### api地址 FunctionExecution.apiUrl

- 执行器被创建时的api地址

##### gql地址 FunctionExecution.gqlUrl

- 执行器被创建时的gql地址

##### 任务token FunctionExecution.token

- 执行器被创建时的任务token

##### 函数token FunctionExecution.functionToken

- 执行器被创建时的函数token

##### 函数参数 FunctionExecution.args

- 执行器被创建时的函数参数

#### FunctionExecution 静态方法说明

##### 获取当前执行的 FunctionExecution FunctionExecution.current()

- 获取当前执行的 FunctionExecution 单例
  - 参数
    - 无
  - 返回值
    - 返回当前执行的 FunctionExecution 单例
  - 实例：

    ```python
        FunctionExecution.current()
    ```
#### FunctionExecution 实例方法说明

##### 结束任务 FunctionExecution.exit(code)

- 结束任务

  - 当任务未被取消时，分别被标记为 `'resolved'` 和 `'rejected'`；
            当任务被取消时，分别被标记为 `'aborted'` 和 `'rejected'`。

  - 调用此函数将导致进程直接终止，调用前请完成清理工作。

  - 参数：
    - code 程序退出码，运行成功返回 0，否则返回非 0
  - 返回值
    - 无
  - 实例：

    ```python
        FunctionExecution.current().exit(0)
    ```

##### 发送图表信息 FunctionExecution.plot(traces=[], layout={}, title='', key=None, verb='replace')

- 发送图表信息
  - 参数：
    - traces 图表数据
    - layout 图表布局
    - title 图表标题
    - key 图表key
    - verb 图表操作类型，replace 替换，append 追加
  - 返回值
    - 无
  - 实例：

    ```python
        FunctionExecution.current().plot(traces=[], layout={}, title='', key=None, verb='replace')
    ```

##### 发送表格信息 FunctionExecution.table(columns=[], title='', key=None, verb='replace')

- 发送表格信息
  - 参数：
    - columns 表格数据
    - title 表格标题
    - key 表格key
    - verb 表格操作类型，replace 替换，append 追加
  - 返回值
    - 无
  - 实例：

    ```python
        FunctionExecution.current().table(columns=[], title='', key=None, verb='replace')
    ```

##### 发送日志消息 FunctionExecution.log(content, level='info', html=False, key=None)

- 发送日志消息
  - 参数：
    - content 日志内容
    - level 日志级别，info,warning,error
    - html 是否为html内容
    - key 日志key
  - 返回值
    - 无
  - 实例：

    ```python
        FunctionExecution.current().log(content, level='info', html=False, key=None)
    ```

##### 发送分组消息 `FunctionExecution.container(items=[],layout={'type': 'tabs','position': 'top'},key=None)`


##### 发送 tabs 布局分组消息 `FunctionExecution.tabsContainer( items=[], position='top', key=None)`

##### 发送 grid 布局分组消息 `FunctionExecution.gridContainer(item=[],grid="'item1 . item2' 1fr 'item1 item3 item4' 1fr / 1fr auto 2fr",key=None)`

##### 发送进度信息 `FunctionExecution.progress(value=0, title='', key='progress-1')`

##### 监听前台的终止事件 `FunctionExecution.on_abort(func, args=[], kwargs={})`


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

## DSlab 相关接口

## IESlab 相关接口

### IESLabSimulation

#### IESLabSimulation 实例变量说明

##### 算例id IESLabSimulation.id

- 算例id

##### 算例名称 IESLabSimulation.name

- 算例名称

##### 算例分组信息 IESLabSimulation.project_group

- 算例分组信息

##### 算例拓扑信息 IESLabSimulation.model

- 算例拓扑信息（[见Model类](#model)）

##### 算例的数据管理模块数据 IESLabSimulation.dataManageModel

- 算例的数据管理模块数据

#### IESLabSimulation 静态方法说明

##### 获取算例信息 static IESLabSimulation.fetch(id)

- 获取算例信息
  - 参数
    - id 算例id
  - 返回值
    - 返回一个算例
  - 实例：

    ```python
        IESLabSimulation.fetch(id)
    ```

##### 创建项目组 static IESLabSimulation.create(group_name, desc=None, createById=None)

- 创建项目组
  - 参数
    - group_name 项目组名称
    - desc 项目组描述
    - createById 创建者id
  - 返回值
    - 返回一个项目组
  - 实例：

    ```python
        IESLabSimulation.create(group_name, desc=None, createById=None)
    ```

##### 创建项目 static IESLabSimulation.createProject(project_group, desc=None, createById=None)

- 创建项目
  - 参数
    - project_group 项目组id
    - desc 项目描述
    - createById 创建者id
  - 返回值
    - 返回一个项目
  - 实例：

    ```python
        IESLabSimulation.createProject(project_group, desc=None, createById=None)
    ```

#### IESLabSimulation 实例方法说明

##### 调用仿真 IESLabSimulation.run( job=None, name=None)

- 调用仿真
  - 参数
    - job 仿真任务
    - name 仿真任务名称
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabSimulation.run( job=None, name=None)
    ```

### IESLabPlan

#### IESLabPlan 实例变量说明

##### 算例id IESLabPlan.id

- 算例id

##### 算例名称 IESLabPlan.name

- 算例名称

##### 算例分组信息 IESLabPlan.project_group

- 算例分组信息

##### 算例拓扑信息 IESLabPlan.model

- 算例拓扑信息（[见Model类](#model)）

##### 算例的数据管理模块数据 IESLabPlan.dataManageModel

- 算例的数据管理模块数据，具体使用方法见[数据管理模块](#数据管理模块-datamanagemodel)

##### 方案优选模块 IESLabPlan.planModel

- 方案优选模块，具体使用方法见[方案优选模块](#方案优选模块-ieslabplanmodel)

##### 方案评估模块 IESLabPlan.evaluationModel

- 方案评估模块，具体使用方法见[方案评估模块](#方案评估模块-ieslabevaluationmodel)

##### 方案优选结果数据 IESLabPlan.currentPlanResult

- 方案优选结果数据，具体使用方法见[方案优选结果数据](#ieslabplanresult)

##### 方案评估结果数据 IESLabPlan.currentEvaluationResult

- 方案评估结果数据，具体使用方法见[方案评估结果数据](#ieslabevaluationresult)

#### IESLabPlan 静态方法说明

##### 获取算例信息 static IESLabPlan.fetch(id)

- 获取算例信息
  - 参数
    - id 算例id
  - 返回值
    - 返回一个算例
  - 实例：

    ```python
        IESLabPlan.fetch(id)
    ```

##### 创建项目组 static IESLabPlan.create(group_name, desc=None, createById=None)

- 创建项目组
  - 参数
    - group_name 项目组名称
    - desc 项目组描述
    - createById 创建者id
  - 返回值
    - 返回一个项目组
  - 实例：

    ```python
        IESLabPlan.create(group_name, desc=None, createById=None)
    ```

##### 创建项目 static IESLabPlan.createProject(project_group, desc=None, createById=None)

- 创建项目
  - 参数
    - project_group 项目组id
    - desc 项目描述
    - createById 创建者id
  - 返回值
    - 返回一个项目
  - 实例：

    ```python
        IESLabPlan.createProject(project_group, desc=None, createById=None)
    ```

#### IESLabPlan 实例方法说明

##### 运行典型日计算 IESLabPlan.iesLabTypicalDayRun( job=None, name=None, **kwargs)

- 运行典型日计算
  - 参数
    - job 仿真任务
    - name 仿真任务名称
    - kwargs 仿真参数
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabTypicalDayRun( job=None, name=None, **kwargs)
    ```

##### 运行方案评估 IESLabPlan.iesLabEvaluationRun( planId, type=None)

- 运行方案评估
  - 参数
    - planId 方案id
    - type 评估类型
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabEvaluationRun( planId, type=None)
    ```

##### 运行能效评价 IESLabPlan.iesLabEnergyEvaluationRun( planId)

- 运行能效评价
  - 参数
    - planId 方案id
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabEnergyEvaluationRun( planId)
    ```

##### 运行方案优选 IESLabPlan.iesLabPlanRun( )

- 运行方案优选
  - 参数
    - 无
  - 返回值
    - 返回一个仿真任务
  - 实例：

    ```python
        IESLabPlan.iesLabPlanRun( )
    ```

##### 停止并删除方案优选算例 IESLabPlan.iesLabPlanRun( )

- 停止并删除方案优选算例
  - 参数
    - 无
  - 返回值
    - 无
  - 实例：

    ```python
        IESLabPlan.iesLabPlanRun( )
    ```

### 数据管理模块 DataManageModel

#### DataManageModel 实例方法说明

##### 获取ID对应的数据信息 DataManageModel.GetDataItem(ID: str)

- 获取ID对应的数据信息
  - 参数
    - ID 数据ID
  - 返回值
    - 返回ID对应的数据信息
  - 实例：

    ```python
        DataManageModel.GetDataItem(ID: str)
    ```

##### 获取dataType类型对应所有数据项的列表 DataManageModel.GetItemList(dataType)

- 获取dataType类型对应所有数据项的列表
  - 参数
    - dataType string类型，代表数据项的类型，可以在所有类型的数据项中实现唯一标识
  - 返回值
    - 返回dataType类型对应所有数据项的列表
  - 实例：

    ```python
        DataManageModel.GetItemList(dataType)
    ```

##### 向dataType类型的数据库中添加内容为data的数据项 DataManageModel.AddDataItem( dataType, data)

- 向dataType类型的数据库中添加内容为data的数据项
  - 参数
    - dataType string类型，代表数据项的类型，可以在所有类型的数据项中实现唯一标识
    - data dict类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  - 返回值
    - bool 类型，返回True 添加成功
  - 实例：

    ```python
        DataManageModel.AddDataItem( dataType, data)
    ```

##### 更新数据管理模块数据 DataManageModel.UpdateDataManageModel(ID: str, data)

- 更新数据库ID对应数据项"光伏"、"风机"、"燃气轮机"、"热泵"、"燃气锅炉"、"热管式太阳能集热器"、"电压缩制冷机"、"吸收式制冷机"、"蓄电池"、"储水罐"、"变压器"、"传输线"、"模块化多电平变流器"、"离心泵"、"管道"、"采暖制冷负荷"、"电负荷"、"燃料"、"热"、"冷"、"常数电价"、"分时电价"、"阶梯电价"、"分时阶梯电价"数据
  - 参数
    - ID string类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识
    - data dict类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  - 返回值
    - bool 类型，返回True 更新成功
  - 实例：

    ```python
        DataManageModel.UpdateDataManageModel(ID: str, data)
    ```

##### 删除ID对应的数据 DataManageModel.DeleteDataItem(ID: str)

- 删除ID对应的数据
  - 参数
    - ID 数据ID
  - 返回值
    - 无
  - 实例：

    ```python
        DataManageModel.DeleteDataItem(ID: str)
    ```

##### 设置项目的天气数据坐标，加载天气数据 DataManageModel.SetProjectPosition( longitude, latitude)

- 设置项目的天气数据坐标，加载天气数据
  - 参数
    - longitude 经度
    - latitude 纬度
  - 返回值
    - 无
  - 实例：

    ```python
        DataManageModel.SetProjectPosition( longitude, latitude)
    ```

##### 获取指定时间段的天气数据 DataManageModel.GetAtmosData(startDate, endDate)

- 获取在startDate到endDate之间的气象数据
  - 参数
    - startDate 开始时间
    - endDate 结束时间
  - 返回值
    - 返回指定时间段的天气数据
  - 实例：

    ```python
        DataManageModel.GetAtmosData(startDate, endDate)
    ```

### 方案优选模块 IESLabPlanModel

#### IESLabPlanModel 实例变量说明

##### 算例id IESLabPlanModel.simulationId

##### 优化目标设置信息 IESLabPlanModel.optimizationInfo

#### IESLabPlanModel 实例方法说明

##### 设置优化目标 IESLabPlanModel.SetOptimizationInfo(optType)

- 设置优化目标
  - 参数
    - optType 优化目标类型
  - 返回值
    - 无
  - 实例：

    ```python
        IESLabPlanModel.SetOptimizationInfo(optType)
    ```

##### 获取优化目标 IESLabPlanModel.GetOptimizationInfo()

- 获取优化目标
  - 参数
    - 无
  - 返回值
    - 返回优化目标
  - 实例：

    ```python
        IESLabPlanModel.GetOptimizationInfo()
    ```

##### 运行方案优选 IESLabPlanModel.run()

- 运行方案优选
  - 参数
    - 无
  - 返回值
    - 成功返回运行任务实例
    - 如果算例已经运行过方案优选，再次运行会抛异常
  - 实例：

    ```python
        IESLabPlanModel.run()
    ```

##### 获得运行实例 IESLabPlanModel.GetRunner()

- 获得运行实例
  - 参数
    - 无
  - 返回值
    - 返回运行实例
  - 实例：

    ```python
        IESLabPlanModel.GetRunner()
    ```

##### 停止并删除当前运行的优化算例 IESLabPlanModel.kill()

- 停止并删除当前运行的优化算例
  - 参数
    - 无
  - 返回值
    - 无
  - 实例：

    ```python
        IESLabPlanModel.kill()
    ```

##### 获取当前算例是否处于运行中 GetLastTaskResult()

- 获取当前算例是否处于运行中
  - 参数
    - 无
  - 返回值
    - 返回任务运行状态
  - 实例：

    ```python
        GetLastTaskResult()
    ```

### 方案评估模块 IESLabEvaluationModel

#### IESLabEvaluationModel 实例方法说明

##### 获取指定方案财务评估模块的基础信息 IESLabEvaluationModel.GetFinancialParams(planID)

##### 运行方案评估 IESLabEvaluationModel.run(planID, type=None)

- 运行方案评估
  - 参数
    - planID 方案id
    - type 评估类型
  - 返回值
    - 成功返回运行任务实例
  - 实例：

    ```python
        IESLabEvaluationModel.run(planID, type=None)
    ```

##### 运行环保评价方案评估 IESLabEvaluationModel.EnvironmentalEvaluationRun(planID)

- 运行环保评价方案评估
  - 参数
    - planID 方案id
  - 返回值
    - 成功返回运行任务实例
  - 实例：

    ```python
        IESLabEvaluationModel.EnvironmentalEvaluationRun(planID)
    ```

##### 运行能效评价方案评估 IESLabEvaluationModel.EnergyEvaluationRun(planID)

- 运行能效评价方案评估
  - 参数
    - planID 方案id
  - 返回值
    - 成功返回运行任务实例
  - 实例：

    ```python
        IESLabEvaluationModel.EnergyEvaluationRun(planID)
    ```

##### 获得运行实例 IESLabEvaluationModel.GetRunner(planID)

- 获得运行实例
  - 参数
    - planID 方案id
  - 返回值
    - 返回运行实例
  - 实例：

    ```python
        IESLabEvaluationModel.GetRunner(planID)
    ```
