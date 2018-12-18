---
title: Park变换器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3007
order: 100

classname: _newParkTransform
symbol: newParkTransform
---
## 基本描述
{% compsymbol newParkTransform %}

> **该元件实现Park变换和逆Park变换计算。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输入Park变换器的名称（可缺省） |
| Direction of Transformation | 变换方向 | 选择 | 选择变换的方向为Park变换或Park变换 |
| Rotating Frame Alignment | 旋转轴对齐 | 选择 | 选择坐标变换的d轴与A相对齐或滞后90度 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Theta | 1×1 | |                   
| d | 1×1 |逆Park变换时d轴的输入端口 |                   
| q | 1×1 |逆Park变换时q轴的输入端口 |                   
| A | 1×1 |逆Park变换时a相的输出端口 |                   
| B | 1×1 |逆Park变换时b相的输出端口 |                   
| C | 1×1 |逆Park变换时c相的输出端口 |                   
| A | 1×1 |Park变换时a相的输入端口 |                   
| B | 1×1 |Park变换时b相的输入端口 |                   
| C | 1×1 |Park变换时c相的输入端口 |                   
| d | 1×1 |Park变换时d轴相的输出端口 |                   
| q | 自动 |Park变换时q轴的输出端口 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了Park变换器的典型应用。

## 相关元件

[Clark变换器](/components/comp_newClarkTransform.html)、[dq-αβ坐标转换器](/components/comp_newXYtoDQ.html)
