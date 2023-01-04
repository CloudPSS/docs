---
title: 数据管理模块相关接口
order: 10
---


## ==数据管理模块对应一个Python类`DataManageModel`，类实例与具体的算例（`Model`类的实例）相绑定，提供以下接口方法：==

### 1 根据`timeID`直接获取对应元素的信息，函数签名如下：
### GetDataItem(itemID)
:::info
获取`itemID`对应的元素信息
:::
**Params timeID:**  string类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识

**返回:**  dict类型，为源数据的引用，返回该数据项的信息

### 2 根据数据种类获取该类型下所有数据项的`timeID`列表，函数签名如下：
### GetItemList(dataType)
:::info
获取`dataType`类型对应所有数据项的列表
:::
**Params dataType:**  dataType enum类型，数据的种类标识，⽐如`Transformer`, `Load`,`HeatPrice`等等

**返回:**  list类型，返回该种类下所有数据项的`timeID`的列表

### 3 向数据库中添加数据项，函数签名如下：
### AddDataItem(dataType, data)
:::info
向`dataType`类型的数据库中添加内容为`data`的数据项
:::
**Params dataType:**  dataType enum类型，数据的种类标识，⽐如`Transformer`, `Load`,`HeatPrice`等等

**Params data:**  dict类型，表⽰添加的数据内容，其数据结构应满⾜对应数据项的结构要求

**返回:**  string类型，返回新添加数据项的`timeID`，如果数据结构不满⾜要求，抛出异常

### 4 向数据库中更新数据项，函数签名如下：
### UpdateDataItem(dataType, data)
:::info
向`dataType`类型的数据库中更新内容为`data`的数据项
:::
**Params dataType:**  dataType enum类型，数据的种类标识，⽐如`Transformer`, `Load`,`HeatPrice`等等

**Params data:**  dict类型，表⽰添加的数据内容，其数据结构应满⾜对应数据项的结构要求

**返回:**   bool类型，修改是否成功

### 5 通过`timeID`在数据库中删除数据项，函数签名如下：
### DeleteDataItem(timeID)
:::info
删除对应`timeID`的数据
:::
**Params timeID:**  string类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识

**返回:**    bool类型，删除是否成功，如果`itemID`错误，抛出异常

### 6 设定项⽬经纬度位置坐标，函数签名如下：
### SetProjectPosition(longitude, latitude)
:::info
将项⽬的经纬度位置坐标设置为(`longitude`, `latitude`)
:::
**Params longitude:**  float类型，表⽰经度，范围为⽓象数据源的经度范围

**Params latitude:**  float类型，表⽰纬度，范围为⽓象数据源的纬度范围

### 7 获取指定时间范围内的⽓象数据，函数签名如下：
### GetAtmosData(startDate, endDate)
:::info
获取在`startDate`到`endDate`之间的⽓象数据
:::
**Params startDate:**  dateTime类型，表⽰开始时间

**Params endDate:**  dateTime类型，表⽰结束时间

**返回:**    list<dict>类型，为源数据的引⽤，返回当前项⽬位置对应时间范围内的⽓象数据序列，每个元素⽤字典进⾏表⽰，字典的key即区分不同的⽓象数据项（如风速、太阳辐照等）以及标识当前时间点