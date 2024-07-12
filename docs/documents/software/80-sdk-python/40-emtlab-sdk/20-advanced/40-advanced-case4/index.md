---
title: 拓扑文件获取及解析
description: EMTLab JSON 拓扑文件的获取及解析

tags:
- SDK

---

## 功能介绍

## 使用说明

### 用到的 API

类：[`Class: ModelTopology`](../../../70-api/10-model/index.md#class-modeltopology)

+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `modelTopology.components` |   摊平后的拓扑元件    | 
    | `modelTopology.mappings`                |  拓扑分析后的一些映射数据  | 

+ 静态方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `ModelTopology.fetch(hash, implementType, config, maximumDepth=None)` |   获取项目拓扑    | 
    | `ModelTopology.dump(topology, filePath, indent=None)`                |  保存拓扑到本地文件（JSON 格式）  | 

### 调用方式

## 案例介绍

### 代码解析

### 结果展示

## 调试技巧

## 常见问题

## 完整代码