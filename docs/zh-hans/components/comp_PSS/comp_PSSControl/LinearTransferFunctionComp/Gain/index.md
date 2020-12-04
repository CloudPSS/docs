---
title: 增益
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3003
order: 100

classname: _newGain
symbol: newGain
---
## 基本描述


> **该元件实现对输入信号的比例放大。函数式为：**
> $$y(t) = Ku(t)$$

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入增益环节的名称（可缺省） |
| Gain Constant |  | 增益常数 | 实数（常量） | 增益常数K，即放大或缩小的倍数 |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 | 输入端口|
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[乘法器](comp_newMultiply.md)
