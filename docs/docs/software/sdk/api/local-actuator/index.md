---
title: 本地执行器相关接口
description: CloudPSS SDK API 文档本地执行器相关接口
sidebar_position: 42

tags:
- SDK

---

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
