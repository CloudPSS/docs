---
title: 执行器类
description: CloudPSS SDK API 文档执行器类

tags:
- SDK

---

### Class: `FunctionExecution`

- Extends: [Object] [Object]
  
**CloudPSS** 当前执行器类。

### `functionExecution.id`

- [String] [String]

执行器被创建时的任务ID。

### `functionExecution.functionId`

- [String] [String]

执行器被创建时的任务函数ID。

### `functionExecution.executorId`

- [String] [String]

执行器被创建时的执行器ID。

### `functionExecution.executorName`

- [String] [String]

执行器被创建时的执行器名称。

### `functionExecution.executorVersion`

- [String] [String]

执行器被创建时的执行器版本。

### `functionExecution.apiUrl`

- [String] [String]

执行器被创建时的api地址。

### `functionExecution.gqlUrl`

- [String] [String]

执行器被创建时的gql地址。

### `functionExecution.token`

- [String] [String]

执行器被创建时的任务token。

### `functionExecution.functionToken`

- [String] [String]

执行器被创建时的函数token。

### `functionExecution.args`

- [Dict] [Dict]

执行器被创建时的函数参数。


### `FunctionExecution.current()`

- Returns: [FunctionExecution](#class-functionexecution) 返回当前执行的 FunctionExecution 单例

获取当前执行的 FunctionExecution 单例。

```python showLineNumbers
FunctionExecution.current()
```

### `functionExecution.exit(code)`

- `code`: [Number] [Number]；程序退出码
- Returns: [Number] [Number]；运行成功返回 0，否则返回非 0

结束任务。调用此函数将导致进程直接终止，调用前请完成清理工作。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-next-line
f.exit(0)
```

:::note
当任务未被取消时，分别被标记为 `'resolved'` 和 `'rejected;`

当任务被取消时，分别被标记为 `'aborted'` 和 `'rejected'`
:::

### `functionExecution.plot(traces=[], layout={}, title='', key=None, verb='replace')`

- `traces`: [List] [List] 图表数据
- `layout`: [Dict] [Dict] 图表布局
- `title`: [String] [String] 图表标题
- `key`: [String] [String] 图表key
- `verb`: [String] [String] 特殊谓词，图表操作类型：
  - `replace` 插入内容
  - `append` 追加内容

发送图表信息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-next-line
f.plot(traces=[], layout={}, title='', key=None, verb='replace')
```

### `functionExecution.table(columns=[], title='', key=None, verb='replace')`

- `columns`: [List] [List] 按列分组的表格内容
- `title`: [String] [String] 表格标题
- `key`: [String] [String] 表格消息 key，用于在多个消息中引用同一消息实体，以便进行更新，或将指定 key 的消息放入容器
- `verb` [String] [String] 特殊谓词，表格操作类型：
  - `replace` 插入内容
  - `append` 追加内容

发送表格信息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-start
f.table(columns=[
    { 'name': 'col1', 'type': 'text', 'data': ['a', 'b', 'c'] },
    { 'name': 'col2', 'type': 'number', 'data': [1, 2, 3] },
], title='', key=None, verb='replace')
# highlight-end
```

### `functionExecution.log(content, level='info', html=False, key=None)`

- `content`：[String] [String] 日志内容
- `level`：[String] [String] 日志级别：
  - `info`: 运行信息
  - `warning`：警告信息
  - `error`: 错误信息
  - `verbose`: 详细信息
  - `debug`：调试信息
  - `critical`: 严重信息
- `html`: [Boolean] [Boolean] 是否为 html 内容
- `key`: [String] [String] 日志消息 key，用于在多个消息中引用同一消息实体，以便进行更新，或将指定 key 的消息放入容器

发送日志消息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-next-line
f.log("日志测试内容", level='info', html=False, key=None)
```

### `functionExecution.container(items=[], layout={'type': 'tabs','position': 'top'}, key=None)`

- `items`: [List] [List] 分组成员，如 `[{'title': 'tab1', 'placeholder': 'Data loading', 'html': false, 'query': {'type': 'message', 'key': 'item-1'}}]`
- `position`: [Dict] [Dict] 分组布局，如无特殊需求请直接使用 `{@link tabsContainer}` 和 `{@link gridContainer}`
- `key`: [String] [String] 消息 key，用于在多个消息中引用同一消息实体，以便进行更新，或将指定 key 的消息放入容器

发送分组消息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-next-line
f.container([{'title': 'tab1', 'placeholder': 'Data loading', 'html': false, 'query': {'type': 'message', 'key': 'item-1'}}], layout={'type': 'tabs','position': 'top'}, key=None)
```

### `functionExecution.tabsContainer(items=[], position='top', key=None)`

- `items`: [List] [List]  分组成员，如 `[{'title': 'tab1', 'placeholder': 'Data loading', 'html': false, 'query': {'type': 'message', 'key': 'item-1'}}]`
- `position`: [String] [String] tab 位置：
  - `top`: 上
  - `bottom`: 下
  - `left`: 左
  - `right`: 右
- `key`: [String] [String] 消息 key，用于在多个消息中引用同一消息实体，以便进行更新，或将指定 key 的消息放入容器

发送 tabs 布局分组消息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-start
f.tabsContainer([
    { 'title': 'tab1', 'placeholder': 'Data loading', 'html': false, 'query': { 'type': 'message', key: 'message-key-1' } },
    { 'title': 'tab2', 'placeholder': 'Data loading', 'html': false, 'query': { 'type': 'message', 'key': 'message-key-2' } },
], position='top', key=None)
# highlight-end
```

### `functionExecution.gridContainer(item=[], grid="'item1 . item2' 1fr 'item1 item3 item4' 1fr / 1fr auto 2fr", key=None)`

- `item`: [List] [List] 分组成员，如 `[{title: 'item1', placeholder: 'Data loading', html: false, query: {type: 'message', key: 'item-1'}}]`
- `grid`: [String] [String] grid 布局，如 `'item1 . item2' 1fr 'item1 item3 item4' 1fr / 1fr auto 2fr`，详情参见 [grid布局](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
- `key`: [String] [String] 消息 key，用于在多个消息中引用同一消息实体，以便进行更新，或将指定 key 的消息放入容器

发送 grid 布局分组消息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-start
f.gridContainer([
[
    { 'title': 'item1', 'placeholder': 'Data loading', 'html': False, 'query': { 'type': 'message', 'key': 'message-key-1' } },
    { title: 'item2', placeholder: 'Data loading', html: False, query: { type: 'message', key: 'message-key-2' } },
    { title: 'item3', placeholder: 'Data loading', html: False, query: { type: 'message', key: 'message-key-3' } },
], `'item1 item2' 1fr 'item3 item3' 2fr / 1fr 2fr`, key=None)
# highlight-end
```

### `functionExecution.progress(value=0, title='', key='progress-1')`

- `value`: [Number] [Number] 当前进度值，取值范围 0~1
- `title`: [String] [String] 进度标题
- `key`: [String] [String] 消息 key，用于在多个消息中引用同一消息实体，以便进行更新，或将指定 key 的消息放入容器，默认为: `progress-1`

发送进度信息。

```python showLineNumbers
f = FunctionExecution.current()
# highlight-next-line
f.progress(0.1, '测试进度消息', 'progress-1')
```

### `functionExecution.on_abort(func, args=[], kwargs={})`

- `func`: 响应后的回调函数
- `args`: [List] [List] 回调函数参数
- `kwargs`: [Dict] [Dict] 回调函数参数

监听前台的终止事件。

```python showLineNumbers
def exitCallback(a, b, c, d):
  print('收到前台的退出通知，我准备退出，最后做点什么再关闭程序')
  print("从 args 传入参数: 结束前做最后计算 a+b={0}".format(a + b), flush=True)
  print("从 kwargs 传入参数", c, d, flush=True)
  time.sleep(2)
  print('我退出了')
  job.exit(0)

f = FunctionExecution.current()
# highlight-next-line
f.on_abort(exitCallback, args=(1, 2), kwargs={"c": 3, "d": {'e': 4}})
```


[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries