---
title: SimStudio 工作台相关接口
order:
---

## 1 建模仿真平台
## ==目前该模块`SimStudio`中的计算方案主要包括综合能源仿真和综合能源运⾏优化两种，这两种方案的算例操作、启动计算的接口与现有`SimStudio`相关`SDK`保持⼀致，主要实现`result`类的相关接口（两种计算方案可共用一个`result`类）==

### 1.1 对`result`实例，获取时序的曲线数据，函数签名如下（已在现有`SDK`中实现）
### getPlotData(self, compID, labelName, traceName='all', index=-1)
:::info
获取元件`ID`为`compID`的元件，对应标签为`labelName`、图例名称为`traceName`的`plot`数据的第`index`项
:::
**Params compID:**  string类型，代表元件的标识符

**Params lableName:**  string类型，代表`plot`曲线的分组标签

**Params traceName:**  string类型，代表`Plot`曲线对应分组下的图例名称，当为`'all'`时，返回所有图例的数据

**Params index:**  int类型，代表对应图例时序数据中的第`index`项，当⼩于0时，返回该图例所有的时序数据

**返回:**  dict类型

## 2 规划设计平台
## ==目前该模块`SimStudio`中的计算方案为典型日生成，对该计算方案的`result`类新增的接口包括==

### 2.1 对`result`实例，获取所有典型日的数据项，函数签名如下：
### GetTypicalDay()
:::info
获取当前`result`的典型日
:::

**返回:**  list类型，代表所有典型日数据项

### 2.2 对`result`实例，获取典型日的数量，函数签名如下：
### GetTypicalDayNum()
:::info
获取当前`result`的典型日数量
:::

**返回:**  int类型，代表典型日数量

### 2.3 对`result`实例，获取指定典型日的基础信息，函数签名如下：
### GetTypicalDayInfo(dayID)
:::info
获取`dayID`对应典型日的基础信息
:::

**Params dayID:**  int类型，表示典型日的`ID`，数值位于 `0~典型日数量` 之间

**返回:**  dict类型，代表典型日的基础信息，包括典型日所代表的日期范围、典型日的名称等

### 2.4 对`result`实例，获取指定典型日下指定参数类型的时序曲线，函数签名如下：
### GetTypicalDayCurve(dayID, dataType)
:::info
获取`dayID`对应典型日下`dataType`参数的时序曲线
:::

**Params dayID:**  int类型，表示典型日的`ID`，数值位于 `0~典型日数量` 之间

**Params dataType:**  `enum`类型，标识辐照强度、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型

**返回:**  list<float>类型，代表以1h为时间间隔的该参数的日内时序曲线

### 2.5 对`result`实例，获取所有月份的典型日数据项，函数签名如下：
### GetTypicalMonth()
:::info
获取所有月份的典型日数据
:::

**返回:**  list<dict>类型，代表各月各类型的典型日数据

### 2.6 对`result`实例，获取指定月份的典型日数量，函数签名如下：
### GetTypicalMonthNum(monthID)
:::info
获取第`monthID`月各类型的典型日数据
:::

**Params monthID:**  int类型，表示典型月的`ID`，数值位于 `1-12` 之间

**返回:**  dict类型，代表第`monthID`月各类型的典型日数据

### 2.7 对`result`实例，获取指定月份典型日下指定参数类型的时序曲线，函数签名如下：
### GetTypicalMonthCurve(monthID, dataType)
:::info
获取第`monthID`月典型日下`dataType`参数的时序曲线
:::

**Params monthID:**  int类型，表示典型月的`ID`，数值位于 `1-12` 之间

**Params dataType:**  `enum`类型，标识辐照强度、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型

**返回:**  list<list>类型，代表以1h为时间间隔的该参数的典型日内时序曲线