---
title: 角度转换器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 300

classname: _newAngleResolver
symbol: newAngleResolver
---
## 基本描述
{% compsymbol newAngleResolver %}

> **该元件实现对输入信号的角度/弧度变换计算。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输入角度转换器的名称（可缺省） |
| Input in | 输入类型 | 选择 | 选择输入为弧度制还是角度制 |
| Output in | 输出类型 | 选择 | 选择输出为弧度制还是角度制 |
| Output Range | 输出范围 | 选择 | 选择输出范围为0到2π或-π到π |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |                   
| Output | 1×1 |输出端口 |                   

## 使用说明

{% pullquote tip %}
+ 配置Configuration/Input Is in、Output Is in选择输入角度信号从角度制转化到弧度制，或者从弧度制转换到角度制。
+ 配置Output Range选择输出范围为0到2π(360°)或-π(-180°)到π(180°)。
{% endpullquote %}

## 相关元件


