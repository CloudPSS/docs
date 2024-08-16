---
title: "延时环节"
description: "延时环节"
tags:
- emtlab
- components
---

## 元件定义

该元件实现对输入信号延时设定时间输出。

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

### 使用说明

**最大采样点数**

如果延迟时间比仿真时间步长大得多，那么队列的大小可能变得过大。为了防止这种情况，采用在指定的时间延迟中，仅对输入值采样 N 次并放置在队列中。采样点数 N 越大，信号还原越好，但存储消耗越大，用户需平衡两者的取值。

## 案例

## 常见问题

