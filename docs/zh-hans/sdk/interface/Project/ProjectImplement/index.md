---
title: ProjectImplement类
type: examples
author: pcp
category: 101
order: 102
---


## class cloudpss.project.implements.ProjectImplement(implements: dict = {})
实现类

### 1.getDiagram() 
获取拓扑实现，不存在返回空

**返回:**  示意图实例
```python
implement.getDiagram()
```
### 2.toJSON()
类对象序列化为 dict :return: dict
```python
implement.toJSON()
```
## diagram

>项目拓扑实现类 class cloudpss.project.implements.diagram.DiagramImplement(diagram: dict = {})

### 1.getAllComponents()
获取所有元件
**返回:** dict<Component>
```python
diagram.getAllComponents()
```
### 2.toJSON()
类对象序列化为dict:return:dict
```python
diagram.toJSON()
```

## component

>项目元件类 class cloudpss.project.implements.component.Component(diagram: dict = {})

**实例变量说明：**

**definition:** 元件定义， 连接线没有definition

**args:** 元件参数数据，连接线没有参数数据

**pins:** 元件引脚数据，连接线没有引脚数据

**shapes diagram-component:** 表示元件，diagram-edge 表示连接线

### 1.toJSON()
类对象序列化为dict:return:dict
```python
comp.toJSON()
```