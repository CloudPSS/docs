---
title: dq-αβ坐标转换器
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3007
order: 300

classname: _newXYtoDQ
symbol: newXYtoDQ
---
## 基本描述
{% compsymbol newXYtoDQ %}

> **该元件实现dq坐标轴到αβ坐标轴的互相转换功能。**

## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输dq-αβ坐标转换器的名称（可缺省） |
| Direction of Transformation | 变换方向 | 选择 | 选择变换的方向为dq-αβ或αβ-dq |
| Rotating Frame Alignment | 旋转轴对齐 | 选择 | 选择坐标变换的d轴与A相对齐或滞后90度 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Theta | 1×1 |输入相角端口 |                   
| α | 1×1 |αβ-dq变换时α轴的输入端口 |                   
| β | 1×1 |αβ-dq变换时β轴的输入端口 |                   
| d | 1×1 |αβ-dq变换时d轴的输出端口 |                   
| q | 1×1 |αβ-dq变换时q轴的输出端口 |                   
| d | 1×1 |dq-αβ变换时d轴的输入端口 |                   
| q | 1×1 |dq-αβ变换时q轴的输入端口 |                   
| α | 1×1 |dq-αβ变换时α轴的输出端口 |                   
| β | 1×1 |dq-αβ变换时β轴的输出端口 |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了dq-αβ坐标转换器的典型应用。

## 相关元件

[Park变换器](/components/comp_newParkTransform.html)、[Clark变换器](/components/comp_newClarkTransform.html)
