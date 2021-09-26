---
title: Storage类
type: examples
author: pcp
category: 199
order: 111
---



## classcloudpss.runner.storage.Storage(key, name, job, config, revision, project, messages=None, finished=None, **kwargs)

**Storage消息存储类**，用于存储接收到的消息数据，并提供数据保存、加载两个数据本地化函数，提供通过数据类型获取数据，通过数据位置获取数据、和获取当前数据长度的函数

### staticdump(result, file)
保存结果到本地文件

**Params file：** 保存文件的目录
```python
Result.dump(result,file)
{...}
```
### getMessage(index)
获取指定位置的消息数据

**Params index:**  数据的位置信息

**返回:**  消息数据
```python
message= db.getMessage(1)
```

### getMessageLength()
获取指定消息的长度

**返回:**  数据长度
```python
length=db.getMessageLength()
```
### getMessagesByType(type)
获取指定类型的消息数据

**Params type:**  数据类型

**返回:**  对应类型的数据数组

```python
message= db.getMessagesByType('log')
```
### staticload(file)
加载本地结果文件

**Params file:** 文件目录

**返回:**  返回一个项目实例
```python
result = Result.load('C:\Users\dps-dm\cloudpss-sdk\result\424111.cjob')
```
### storeMessage(message)
消息存储

```python
db.storeMessage(message)
```
**Params message:**  需要存储的消息