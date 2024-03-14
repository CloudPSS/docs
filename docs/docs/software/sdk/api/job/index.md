---
title: 任务类
description: CloudPSS SDK API 文档任务类
sidebar_position: 43

tags:
- SDK

---

## Class: `Job`

- Extends: [Object][Object]
  
**CloudPSS** 算例任务类。

### `job.id`

- [String][String]

任务ID。

### `job.args`

- [String][String]

任务参数。

### `job.job_status`

- [String][String]

任务状态。

### `job.createTime`

- [String][String]

任务创建时间。

### `job.startTime`

- [String][String]

任务开始时间。

### `job.endTime`

- [String][String]

任务结束时间。

### `job.context`

- [Dict][Dict]

任务执行上下文信息。

### `job.input`

- [String][String]

任务执行输入流 ID，用于发送数据给当前任务。

### `job.output`

- [String][String]

任务执行输出流 ID，用于接收任务执行的输出结果。

### `job.result`

- [Dict][Dict]

任务结果，用于兼容旧版本的使用方法。

### `Job.fetch(id)`

- `id`: [String][String] 任务的 id
- Returns: [Job](#class-job) 返回当前任务实例

获取指定 id 的 job 信息，如果 id 不存在直接抛异常。

```python showLineNumbers
job = Job.fetch('job/1')
```

### `Job.fetchMany(name=None, cursor=[], pageSize=10)`

- `name`: [String][String] 查询名称，模糊查询
- `cursor`: [List][List] 分页游标
- `pageSize`: [Number][Number] 分页大小
- Returns: [Dict][Dict] 按分页信息返回 job 列表

获取用户有权限的 job 列表。

```python showLineNumbers
# highlight-next-line
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

# 查询下个游标后的数据 
cursor=data['cursor']
# highlight-next-line
data2 = Job.fetchMany(cursor=cursor)

# 模糊查询 
# highlight-next-line
data2 = Job.fetchMany(name='job1')
print('获取任务列表', data)

```

### `Job.create(revisionHash, job, config, name=None, rid="", policy=None, **kwargs)`

- `revisionHash`: [String][String] 项目版本的 hash
- `job`: [Dict][Dict] 计算方案
- `config`: [Dict][Dict] 参数方案
- `name`: [String][String] 任务名称
- `rid`: [String][String] 任务的 rid
- `policy`: [Dict][Dict] 仿真策略
- `kwargs`: [Dict][Dict] 仿真参数
- Returns: [Job](#class-job) 返回一个运行实例

创建一个运行任务。

```python showLineNumbers
job = Job.create(revisionHash, job, config, name=None, rid="", policy=None, **kwargs)
```

### `Job.dump(job, file, format="yaml", compress="gzip")`

- `job`: [Job](#class-job) 任务实例
- `file`: [String][String] 保存文件路径
- `format`: [String][String] 保存文件格式， 默认为 yaml 格式
- `compress`: [String][String] 保存文件压缩格式，默认为 gzip 格式

下载 job。

```python showLineNumbers
Job.dump(job, file, format="yaml", compress="gzip")
```

### `Job.load(file, format="yaml")`


- `file`: [String][String] 保存文件路径
- `format`: [String][String] 保存文件格式， 默认为 yaml 格式
- Returns: [Job](#class-job) 返回一个仿真任务

加载 job。

```python showLineNumbers
Job.load(file, format="yaml")
```

### `job.read(receiver=None, **kwargs)`

- `receiver`：[JobReceiver][Object] 接收者
- `kwargs`: [Dict][Dict] 仿真参数
- Returns: [MessageStreamReceiver][Object] 输出流实例

接收当前运行实例的输出。

```python showLineNumbers
Job.read(receiver=None, dev=False, **kwargs)
```

### `job.write(sender=None, **kwargs)`

- `sender`: [MessageStreamSender][Object] 发送者
- `kwargs`: [Dict][Dict] 仿真参数
- Returns: [MessageStreamSender][Object] 输入流实例

发送为当前运行实例输入。

```python showLineNumbers
Job.write(sender=None, dev=False, **kwargs)
```

### `job.view(viewType)`

- `viewType`: [View](../views/index.md) 视图类，分为：
    - `EMTView` 电磁暂态结果视图
    - `PowerFlowView` 潮流结果视图，
    - `IESView` 综合能源结果视图
    - `IESLabSimulationView` 综合能源建模仿真结果视图
    - `IESLabTypicalDayView` 综合能源典型日结果视图
- Returns: [View](../views/index.md) 返回一个结果视图

获取当前运行实例的输出。

```python showLineNumbers
view = await job.view(EMTView)
```

### `job.status()`

- Returns: [Number][Number] 返回任务状态
  - `0`: 运行中 
  - `1`: 运行完成 
  - `2`: 运行失败

任务状态（旧版本兼容）。

```python showLineNumbers
job.status()
```

### `job.abort(timeout=3)`

- `timeout`: [Number][Number] 超时 3 秒

中断当前运行实例。

```python showLineNumbers
job.abort(3)
```



[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries