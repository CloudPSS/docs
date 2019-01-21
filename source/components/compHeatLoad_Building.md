---
title: 建筑物（负荷）
author: 
author_email:

date: 2018/12/4 18:05:35
updated: 2018/12/4 18:05:35

type: components
category: 10000
order: 2000

classname: HeatLoad_Building
symbol: Heat5
---
## 基本描述
{% compsymbol Heat5 %}

> **该元件代表普通居民建筑物的简易模型。**

## 参数列表
### 水力控制条件
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 是否控制流量？ | | Specify Mass Flowrate? | 选择 | 通过建筑物进行循环的热媒流量，此处选择是否将热媒流量设定为已知值 |
| 流量 | kg/s | Mass Flowrate | 表格 | 输入不同时间点热媒流量的设定值 |
| 是否控制供水压力？ |  | Specify Supply Pressure? | 选择 | 建筑物的进口热媒压力，此处选择是否将供水压力设定为已知值 |
| 供水压力 | MPa | Supply Pressure | 表格 | 输入不同时间点供水压力的设定值 |
| 内部压降 | MPa | Pressure Drop | 表格 | 热媒流经建筑物产生的压力降，此处输入不同时间点内部压降的设定值 |

### 热力控制条件
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 是否控制室内温度？ |  | Specify Indoor Temperature? | 选择 | 选择是否将室内温度设定为已知值 |
| 室内温度设定值 | ℃ | Indoor Temperature | 表格 | 输入不同时间点室内温度的设定值 | 
| 是否控制回水温度？ |  | Specify Return Temperature？ | 选择 | 流出建筑物的热媒温度，此处选择是否将回水温度设定为已知值 |
| 回水温度 | ℃ |  Return Temperature | 表格 | 输入不同时间点回水温度的设定值 |
| 初始室内温度 | ℃ | Initial Temperature | 实数（常量） | 输入室内温度的初始值 |

### 建筑物属性
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| 外墙面积 | m² | Outer Wall Area | 实数（常量） | 建筑物外墙的表面积 |
| 外墙厚度 | mm | Outer Wall Thickness | 实数（常量） | 建筑物外墙的厚度 |
| 外墙密度 | kg/m³ | Outer Wall Density | 实数（常量） | 建筑物外墙材料的密度 |
| 外墙导热系数 | W/(m·℃) | Outer Wall Heat Conductivity Coefficient | 实数（常量） | 建筑物外墙的导热系数 |
| 外墙比热容 | J/(kg·℃) | Outer Wall Specific Heat Capacity | 实数（常量） | 建筑物外墙材料的比热容 |
| 外墙辐射吸收系数 |  | Outer Wall Radiation Absorbing Coefficient | 实数（常量） | 建筑物外墙材料的辐射吸收系数 |
| 屋面面积 | m² | Roof Area | 实数（常量） | 建筑物屋顶的面积 |
| 屋面厚度 | mm | Roof Thickness | 实数（常量） | 建筑物屋顶的厚度 |
| 屋面密度 | kg/m³ | Roof Density | 实数（常量） | 建筑物屋顶材料的密度 |
| 屋面导热系数 | W/(m·℃) | Roof Heat Conductivity Coefficient | 实数（常量） | 建筑物屋顶材料的导热系数 |
| 屋面比热容 | J/(kg·℃) | Roof Specific Heat Capacity | 实数（常量） | 建筑物屋顶材料的比热容 |
| 屋面辐射吸收系数 |  | Roof Radiation Absorbing Coefficient | 实数（常量） | 建筑物屋顶材料的辐射吸收系数 |
| 窗户面积 | m² | Window Area | 实数（常量） | 建筑物窗户的总面积 |
| 窗户厚度 | mm | Window Thickness | 实数（常量） | 建筑物窗户的平均厚度 |
| 窗户密度 | kg/m³ | Window Density | 实数（常量） | 建筑物窗户材料的密度 |
| 窗户导热系数 | W/(m·℃) | Window Heat Conductivity Coefficient | 实数（常量） | 建筑物窗户材料的导热系数 |
| 窗户比热容 | J/(kg·℃) | Window Specific Heat Capacity | 实数（常量） | 建筑物窗户材料的比热容 |
| 窗户辐射吸收系数 |  | Window Radiation Absorbing Coefficient | 实数（常量） | 建筑物窗户材料的辐射吸收系数 |
| 建筑物体积 | m³ | Total Volume of the Building | 实数（常量） |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input&Output | 1×1 | 同时代表建筑物元件的入口连接点和出口连接点 |                   

## 使用说明

{% pullquote tip %}
目前版本中建筑物（负荷）与其它元件相连时建筑物（负荷）应作为终点，否则极易引发错误。
{% endpullquote %}


