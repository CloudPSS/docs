---
title: 符号函数
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3002
order: 500

classname: _newSgn
symbol: newSgn
---
## 基本描述
{% compsymbol newSgn %}

> **该元件实现符号函数运算，函数关系式为：**
> $$y(x) = \left\{ \begin{gathered}
>  1,x > 0  \\
>  0,x = 0  \\
>   - 1,x < 0 \\ 
> \end{gathered}  \right.$$



## 参数列表
### Configuration
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| Name | 元件名称 | 文本 | 此处输入符号函数的名称（可缺省） |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 |输出端口 |

## 使用说明



## 相关元件

[绝对值函数](comp_newAbs.md)