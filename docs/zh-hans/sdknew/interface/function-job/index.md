---
title: FunctionJob 类
type: examples
author: pcp
category: 200
order: 300
---

## ==class cloudpss.function.job.Args==
:::info
`参数类`
:::
## ==class cloudpss.function.job.Job(**kwargs)==
### Function Job
### abort(data)
:::info
发送中止消息
:::
**Params data:** 消息数据
```python
job.abort({})
```

### property args
### container(data, key=None, verb=None)
:::info
发送消息组 
:params key: `图标索引` key 
:params verb: `操作类型`，可选  ‘create’ | ‘replace’ | ‘append’ | ‘prepend’
:params data: 分组数据
:::
```python
{
    layout?:
        | {
            /** 浮窗显示，title 为 anchor（如：`/design/diagram/cells/canvas_0_16`），用于决定显示的内容 */
            type: 'float';
        }
        | {
            /** tab 页方式显示，title 为 tab 的标题 */
            type: 'tabs';
            position: 'left' | 'right' | 'top' | 'bottom';
        }
        | {
            /** grid 布局显示，title 为 grid-area 名称 */
            type: 'grid';
            /** CSS grid 属性，如 `'item1 . item2' 1fr 'item1 item3 item4' 1fr / 1fr auto 2fr` */
            grid: string;
        };
    items: Array<{
        /** 根据 `layout.type` 具有不同的功能 */
        title: string;
        /** 对应 key 数据不存在时显示 */
        placeholder: string;
        /** placeholder 是否使用 html */
        html: boolean;
        /** 获取用于填充的数据的方式 */
        query?:
            | {
                /** 查找指定 key 的消息填充 */
                type: 'message';
                key: string;
                /** 当此属性存在时，如未找到指定消息，向调用方发送该 payload 进行查询 */
                signal?: MessagePayload;
            }
            | {
                /** 通用 web api */
                type: 'http';
                method: string;
                url: string;
                headers: Record<string, string>;
                body: unknown;
                /** 从响应中获取消息的方法 */
                picker?:
                    | string[] // 从响应体的路径 pick（lodash.get）
                    | ExpressionSource<unknown>; // 通过表达式获取（可用对象 $req, $res）
            }
            | {
                /** 从对象存储获取指定对象填充 */
                type: 'object-storage';
                hash: string;
            }
            | {
                /** 从对象存储获取指定对象填充 */
                type: 'object-storage';
                hash: string;
            };
    };
}
```
```python
job.container(data,”key-c”)
```

### static current()
:::info
获取当前任务 Returns: Job: 任务类
:::

### feedDog()
:::info
通知看门狗，当前程序还在运行，当程序 30s 内没有输出时，执行器将直接 kill 运行脚本
:::

### gridContainer(items, grid=None, key=None, verb=None)
:::info
发送类型为 grid 的消息组
:::
**Params items:** 需要关联的其他图表消息 {‘title’:标题，’placeholder’: 默认显示内容，key：需要关联的图表}

**Params tabsPosition:** 操作类型，可选 ‘top’ | ‘bottom’

**Params key:** 图标索引 key

**Params verb:** 操作类型，可选  ‘create’ | ‘replace’ | ‘append’ | ‘prepend’
```python
job.abort({})
```

### static loadArgs()
:::info
加载当前任务参数 Returns: dict: 任务参数
:::

### message(msg, level='info', key=None, verb='create')
:::info
发送日志信息
:::
**Params msg:** str 消息内容

**Params level:** 消息类型 默认 info 可选：’critical’ | ‘error’ | ‘warning’ | ‘info’ | ‘verbose’ | ‘debug’

**Params key:** str 目标, key 相同的数据会往同一个目标写入数据

**Params verb:** 操作类型，可选  ‘create’ | ‘replace’ | ‘append’ | ‘prepend’
```python
job.message('info message')
job.message('error message', level='error')
```
:::info
在同一个目标显示消息
:::
```python
job.message(‘message1’, key=’log-1’)
job.message(‘message2’, key=’log-1’,verb=’append’)
```
:::info
替换目标数据
:::
```python
job.message(‘message1’, key=’log-1’) 
job.message(‘message2’, key=’log-1’,verb=’replace’)
```

### plot(key, traces, verb='append', layout={}, **kwargs)
:::info
发送绘图消息
:::
**Params key:** 目标， key 相同数据将显示到同一个图表上

**Params traces:** Array 曲线数据组 
```python
[{
    'name': str, 列名称
    'type': 'text' | 'html' | 'number',  列类型
    'data': unknown[]  列数据
}]
```
**Params title:** str 图表标题

**Params xAxis:** dict 坐标轴设置

**Params yAxis:** dict 坐标轴设置 
```python
{
    ‘title’:str,   轴标题 ‘type’ : ‘linear’ | ‘log’ | ‘date’,
    轴类型 ‘range’: [number, number] | ‘auto’   显示范围
}
```
**Params verb:**  str 消息内容 可选： ‘create’ | ‘replace’ | ‘append’ |‘prepend’ | ‘update’

```python
job.plot('plot-1',[{'name':'t1','type':'scatter','x':[1,2],'y':[3,4]}])
```

### plotLyDataToTrace(data)
### print(message)
### progress(val, key='progress-1', title='')
:::info
发送进度信息
:::
**Params val:** float 进度值 [0-1]

**Params key:** str 目标, key 相同的数据会往同一个目标写入数据 

**Params title:** str 进度 标题

```python
job.progress(0.2)
```

### tabContainer(items, tabsPosition='top', key=None, verb=None)
:::info
发送类型为 grid 的消息组
:::
**Params keys:** 需要关联的其他图表列表

**Params tabsPosition:** 操作类型，可选  ‘top’ | ‘bottom’ 

**Params key:** 图标索引 key

**Params key:** 操作类型，可选  ‘create’ | ‘replace’ | ‘append’ | ‘prepend’

### table(key, columns, title='', verb='append', **kwargs)
:::info
发送表格数据
:::
**Params key:** str 目标, key 相同的数据会往同一个目标写入数据

**Params columns:** Array 表格的列数据组 
```python
[{
    'name': str, 列名称
    'type': 'text' | 'html' | 'number',  列类型
    'data': unknown[]  列数据
}]
```
**Params title:** str 图表标题

**Params verb:** 操作类型，可选  'create' | 'replace' | 'append' | 'prepend'
```python
job.table('info message')
job.table('error message', level='error')
```

### terminate(status)
:::info
发送结束消息
:::
**Params status:** 结束状态 可以选 ‘resolved’ | ‘rejected’ | ‘aborted’ | ‘timed_out’
```python
job.terminate('resolved')
```