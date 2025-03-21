---
title: 能源信息库
description: IESLab 仿真规划平台-数据管理模块-能源信息库
sidebar_position: 30
tags:
- ieslab
- function
---

本节主要介绍能源信息库的计价模型、参数录入、编辑、导入及导出等功能使用方法，并通过常见问题答疑快速熟悉能源信息库的基本使用方法。

## 功能定义

录入编辑燃料、电冷热价格模型

## 功能说明

用户可在能源信息库中建立**燃料、电、冷、热**等能源的价格等信息，用于计算系统**经济性及环保性**指标。拓扑编辑模块可以选择对应价格模型，用户绑定该能源信息后平台将自动关联并纳入环保性和经济性的计算。

### 能源信息管理

#### 新建与删除

打开能源信息库并选择能源类型及种类后，进入能源信息管理页面，显示模式默认为**卡片**模式。点击卡片**新建**或右上方的**新建**快捷键，会自动创建一个新的卡片，初始化能源信息的各项参数并弹出编辑区域，默认值可以不用修改即可使用，点击左侧空白阴影处可以隐藏编辑区域；也可修改能源参数名称，并点击**保存**。
点击卡片右上角的“**×**”，可以删除此能源卡片。

![新建与删除](./new.png "新建与删除")

切换到**列表**模式时，需点击右上方的**新建**快捷键进行新建操作。点击能源项目右侧的**删除**，可以删除此能源。

![新建与删除](./new1.png "新建与删除")

#### 搜索与筛选

在页面右上方的**搜索输入框**，在输入框中输入关键字，点击放大镜**🔍**或回车确定，即可进行模糊搜索或筛选（关键字不区分大小写）。清空输入框后，点击放大镜**🔍**或回车确定可显示所有信息。


![搜索](./search.png "搜索")

### 能源参数编辑

在卡片模式下，点击能源所在的卡片或**编辑**；在列表模式下能源所在的行或**编辑**，即可编辑能源参数信息。修改成功后，点击**保存**完成修改并保存；点击**取消**放弃修改。若修改后点击非编辑区域的左侧空白阴影区域，则会弹出告警框，可选择**保存**、**不保存**或**返回**编辑区域。当用户未修改参数，左侧空白阴影区域则会隐藏编辑区域。

#### 导出与导入
在编辑区域下方有**从文件导入**、**保存到文件**和**从典型库导入**快捷键，当展示内容较多时，可使用鼠标滚轮向下滑动或选中编辑区域右侧的滑块下拉即可看到。

点击**保存到文件**会将该能源相关参数另存为 excel 文件。

点击**从文件导入**将会弹出文件选择框，选择相应类别及种类的能源参数 excel 文件后，平台将会自动校验文件格式，若格式无误会覆盖原能源参数；若格式有误将会提示**表格格式不正确!**。用户可以先**保存到文件**，参照导出文件的格式进行修改，再进行**从文件导入**。

#### 从典型库导入
点击编辑区域下方的**从典型库导入**快捷键，在弹出的**典型库**选择框中，选择厂商和型号后会自动显示能源参数信息，点击**确定**后，在弹出的**加载典型库**框中选择**确定**，将会**覆盖**当前能源参数，点击编辑区域下方的**保存**完成典型库导入。
![典型库](./typical-fuel.png "典型库")


### 燃料价格

燃料：内置典型库，主要包含煤炭天然气等，燃料热值（MJ/计量单位）用于计算燃料的消耗量，分月价格用于计算燃料的购置支出，污染物排放系数则用于计算 CO2 等污染物排放量。

![燃料](./fuel.png "燃料")

### 冷/热价格
供冷和供热的价格通常受到许多因素的影响，包括能源成本、运营和维护成本、政府政策和市场竞争等。按热量计价和按面积计价是两种常见的方法。

按热量计价是按照建筑物或设备的热量消耗来计价。这种方法的优点是可以鼓励用户减少能源消耗，并且可以根据建筑物或设备的实际负荷进行调整。但是，它需要测量和记录每个用户的热量消耗，这需要安装和运行热量计量设备，增加了成本和管理难度。

按面积计价是按照建筑物的面积来计价，即将供冷的区域（如空调房间）或供热的区域（如暖气房间）的面积作为计价的依据。这种方法的优点是简单易行，适用于大面积、大规模的建筑，有利于提高市场竞争力。但是，这种方法无法准确地反映出每个用户的冷热负荷和实际能源消耗，可能会导致用户对能源浪费缺乏意识。

![冷热](./thermal.png "冷热")

### 电价

电价模型平台提供了分月**常数电价**、**分时电价**、**阶梯电价**和**分时阶梯电价**。在综合能源项目中，运营商一般通过向电网购电，通过建设高效的综合能源系统，向用户提供能源并获取盈利。平台绑定用电/冷/热计价模型用于计算项目收入。电网及用燃料的设备的计价模型则用于计算项目支出。

特别地，平台提供**两部制**电费计价模式，两部制电价分成**基本电价**与**电度电价**两部。基本电价一般是按照工业企业的变压器容量或最大需量作为计算电价的依据；电度电价，是按用实际用电量（有功电量）计算的电价。
平台的需量电费计价模型绑定**常数电价**,按照电负荷最大需量计算基础电费,最大需量的基本电费=需量电费计价模型×最大需量。

常数电价：即单一制电价，只按用户的用电量（有功电量）计收电费，其中电价中有的还实行峰谷分时电价。它适用于居民生活用电、照明用电、商业用电、非工业用电和普通工业用电等。

![常数电价及典型库](./typical-fix.png "常数电价及典型库")

分时电价：即两部制电价中的一部分，按用户的有功用电量计收电费。在电度电价中，有的还实行峰谷分时电价及丰枯季节电价。适用于居民生活用电、商业用电、普通工业用电、大工业用户。

![分时电价及典型库](./typical-time.png "分时电价及典型库")

阶梯电价：根据用户用电量的不同，将用户划分为不同的阶梯，每个阶梯对应不同的电价。一般来说，低阶梯对应较低的电价，高阶梯对应较高的电价，用户消费超过某个阶梯后，按照该阶梯的电价计费。

![阶梯电价及典型库](./typical-stage.png "阶梯电价及典型库")

分时阶梯电价：在阶梯电价的基础上，根据时间段的不同划分成不同的阶梯，每个阶梯对应不同的电价。这种模式能够更好地反映电力供需的变化情况，让用户在电力供应充足的时段使用电力，从而减轻电网负荷压力，降低用电成本。

![分时阶梯电价及典型库](./typical-timestage.png "分时阶梯电价及典型库")

## 常见问题

价格模型有什么意义？  

: 平台的综合能源系统主要承担运营商投资者的角色，运营商通过建设高效的综合能源系统，从外部购买能源（如电网），向多能用户提供多种能源，对负荷收取对应的电费及冷热费用；因此有电冷热负荷处有收入；其支出主要为电网购电和燃料购置费等。

典型库中是否包含所有城市的电价信息，能够自动补全？  

: 平台典型库内置了部分典型的电价信息，暂不支持自动补全所有城市的电价信息。
