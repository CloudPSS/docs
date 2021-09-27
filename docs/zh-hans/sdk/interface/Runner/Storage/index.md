---
title: Storage类
type: examples
author: pcp
category: 199
order: 111
---



## ==class cloudpss.runner.storage.Storage==
:::info
消息`存储`类，用于存储接收到的消息数据，并提供数据保存、加载两个数据本地化函数。
提供通过数据类型获取数据，通过数据位置获取数据、和获取当前数据长度的函数
:::
### static dump(result, file)
:::info
`保存`结果到本地文件
:::
**Params file：** 保存文件的目录
```python
Result.dump(result,file)
{...}
```
### getMessage(index)
:::info
`获取`指定位置的`消息数据`
:::
**Params index:**  数据的位置信息

**返回:**  消息数据
```python
message= db.getMessage(1)
```

### getMessageLength()
:::info
`获取`指定消息的`长度`
:::
**返回:**  数据长度
```python
length=db.getMessageLength()
```
### getMessagesByType(type)
:::info
`获取`指定类型的`消息数据`
:::
**Params type:**  数据类型

**返回:**  对应类型的数据数组

```python
message= db.getMessagesByType('log')
```
### static load(file)
:::info
`加载`本地结果文件
:::
**Params:** file 文件目录

**返回:**  返回一个项目实例
```python
result = Result.load('C:\Users\dps-dm\cloudpss-sdk\result\424111.cjob')
```
### storeMessage(message)
:::info
消息`存储` db.storeMessage(message)
:::
**Params message:**  需要存储的消息