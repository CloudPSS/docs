---
title: 电负荷
author: Jack 
author_email:

date: 2020/4/21 18:05:35
updated: 2020/4/21 18:05:35

type: components
category: 12000
order: 1001

classname: ElecLoad
symbol: ElecLoad
---
## 基本描述

> **本元件为电负荷，电能消费终端设备，平台研究统计了电力负荷历史数据，建立电力负荷模型，建立了典型日负荷、分月详细负荷和自定义负荷。**

![负荷](./ElecLoad.svg )

**典型日负荷模型**
典型日负荷模型按照负荷指标的模式设计，负荷指标由单位面积的负荷指标和建筑面积相乘得到，平台对常见类型的负荷曲线进行统计分析，根据负荷指标自动生成8760h负荷数据，提供了居民、工厂、医院、学校、商场、影院等共计13种典型8760h冷热电负荷数据模型。

**分月详细负荷模型**
分月详细负荷模型由用户输入每个月的2典型日4h平均负荷数据，根据是否区分工作日和休息日分为两类。

**自定义负荷模型**
自定义负荷模型允许用户上传负荷数据，表头分别为开始时间和负荷数值。用户可以上传已有的任意时间间隔的负荷数据（如24点、96点数据），用户上传的负荷数据平台会自动校验数据格式和合法性校验，当负荷数据时间点与仿真计算时间点不一致时，平台会自动进行数据插值外推。

### 引脚

电引脚，可以在引脚处填写相同的字符使得两个元件相连。

## 元件参数

**在对综合能源系统进行仿真模拟和规划优化前，务必绑定负荷和计价模型哦**

### 基础参数

>**在基础参数出编辑设备名称、台数等参数，并绑定数据管理模块录入的设备参数**
> 
> **元件名称**：输入该元件名称，方便管理及结果查看
> 
> **元件类型**：选择直流/交流元件，注意，交直流元件不能直接相连
> 
> **负荷曲线**：选择数据管理模块录入的负荷模型名称，系统将自动绑定对应的负荷曲线
>
> **用电计价模型**：选择数据管理模块录入的电价模型名称，系统将自动绑定对应的电价模型。平台认为在综合能源系统中，运营商通过建设高效的综合能源系统，向多能用户提供多种能源，对负荷收取对应的电费及冷热费用。负荷通过绑定对应的电价/冷热价格模型以计算系统的售电/冷热收入。