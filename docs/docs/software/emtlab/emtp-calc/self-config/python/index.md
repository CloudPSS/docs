---
title: Python 元件
description: 自定义 Python 元件
sidebar_position: 200
---

## 功能定义


## 文档摘要
EMTLab 支持使用 Python 语言构建自定义电磁暂态仿真元件。本节主要介绍自定义 Python 元件的的创建和使用方法。


## 功能说明

### 创建元件

### 参数、引脚设置

### 代码编辑

### 调用方式

## 案例
本文档提供 3 个案例，分别是...

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="case1" label="案例 1">
简单控制元件，每时步触发
</TabItem>

<TabItem value="case2" label="案例 2">
带有全局变量的控制元件，固定频率触发式
</TabItem>

<TabItem value="case3" label="案例 3">
多维输入、多维输出控制元件，外部触发式
</TabItem>
</Tabs>


## 常见问题
仿真运行报错："compile python code failed"
:

仿真运行报错："python module return type error"
:

仿真运行报错："execute python module failed"
:
为什么使用 print() 函数没有效果？
:   暂不支持在前台输出 print() 结果。