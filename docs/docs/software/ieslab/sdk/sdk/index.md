---
title: SDK Docs
description: IESLab SDK 文档
sidebar_position: 20
---

import DocCardList from '@theme/DocCardList';

<DocCardList />

## IESLab SDK概述
与SDK的关系（IESLsb SDK是在CloudPSS SDK基础上继承封装的，是子类）,总结包含哪些数据接口（数据管理模块接口，方案优选模块接口），适用的范围（IES建模仿真平台&IES规划设计平台），在这里说明IES建模仿真平台&IES规划设计平台共有的SDK方法合并介绍，不同的方法分开介绍。



## 数据管理模块相关接口
介绍使用数据管理模块数据管理模块相关接口之前的准备工作和相关接口功能的详细介绍
==数据管理模块对应一个 Python 类 `DataManageModel` ，类实例与具体的算例（`Model` 类的实例）相绑定，本教程将介绍如何使用该模块的各个接口方法。==

### 0. 准备工作
#### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。
```python 
import os
import cloudpss

# 申请并设置自己账户的token
cloudpss.setToken('{token}')  

# 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

# 仿真测试——获取指定 simuid 的项目
iesProject = cloudpss.IESLabSimulation.fetch('632')

```
### 1. GetDataItem()
简单描述该接口的功能，输入参数，返回的结果。如有案例，增加案例。如有注意事项，增加注意事项。

### 2. GetItemList()
#### 描述
根据数据种类获取该类型下所有数据项的列表。

#### 语法
```python
GetItemList(dataType)
```
参数说明:
- `dataType`：string 类型，数据的种类标识，包含：“光伏”、“风机”、“燃气轮机”、“热泵”、“燃气锅炉”、“热管式太阳能集热器”、“电压缩制冷机”、“吸收式制冷机”、“蓄电池”、“储水罐”、“变压器”、“传输线”、“模块化多电平变流器”、“离心泵”、“管道”、“采暖制冷负荷”、“电负荷”、“燃料”、“热”、“冷”、“常数电价”、“分时电价”、“阶梯电价”、“分时阶梯电价”
  
#### 返回值
- list 类型，返回该种类下所有数据项的列表

#### 实例
以下实例展示了 GetItemList 的使用方法：
```python
data_type = "光伏"
items_list = iesProject.dataManageModel.GetItemList(data_type)
print(f"List of {data_type} items: {items_list}")
```
执行以上代码，输出结果如下：
```
List of 光伏 items: [
    {'id': 6705, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741337891862', 'simu': 632, 'isTypicalCase': False
    },
    {'id': 6706, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741346142082', 'simu': 632, 'isTypicalCase': False
    }
]
```
### 3. AddDataItem()
#### 描述
使用 AddDataItem(dataType, data) 方法，向数据库中添加数据项。

#### 语法
```python
AddDataItem(data_type, data)
```
参数说明:
- `dataType`：string 类型，数据的种类标识
- `data`：dict 类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  
#### 返回值
- string 类型，返回新添加数据项的 ID

#### 实例
以下实例展示了 AddDataItem 的使用方法：
```python
data_type = "光伏"
trueAdd = iesProject.dataManageModel.AddDataItem(data_type, items_list[0])
items_list = iesProject.dataManageModel.GetItemList(data_type)
print(f"List of {data_type} items(add): {items_list}")
print(f"您新添加数据项的ID是: {trueAdd}")
```
执行以上代码，输出结果如下：
```
List of 光伏 items(add): [
    {'id': 6705, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741337891862', 'simu': 632, 'isTypicalCase': False
    },
    {'id': 6706, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741346142082', 'simu': 632, 'isTypicalCase': False
    },
    {'id': 6765, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1685437432641321', 'simu': 632, 'isTypicalCase': False
    }
]
您新添加数据项的ID是: 6765
```
### 4. UpdateDataItem()
#### 描述
使用 UpdateDataItem() 方法，向数据库中更新数据项。

#### 语法
```python
UpdateDataItem(ID, data)
```
参数说明:
- `ID`：：string 类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识
- `data`：dict 类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  
#### 返回值
- bool 类型，返回 True 更新成功

#### 实例
以下实例展示了 AddDataItem 的使用方法：
```python
items_list[1]['manufacturer'] = 'PV720'
trueUpdate = iesProject.dataManageModel.UpdateDataItem(items_list[1]['id'], items_list[1])
items_list = iesProject.dataManageModel.GetItemList(data_type)
print(f"List of {data_type} items(update): {items_list}")
if trueUpdate:
    print("数据项更新成功")
else:
    print("数据项更新失败")
```
执行以上代码，输出结果如下：
```
List of 光伏 items(update): [
    {'id': 6705, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741337891862', 'simu': 632, 'isTypicalCase': False
    },
    {'id': 6706, 'name': '请输入', 'manufacturer': 'PV720', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741346142082', 'simu': 632, 'isTypicalCase': False
    },
    {'id': 6765, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1685437432641321', 'simu': 632, 'isTypicalCase': False
    }
]
数据项更新成功
```
### 5. DeleteDataItem()
#### 描述
使用 DeleteDataItem(ID) 方法，通过ID在数据库中删除数据项。

#### 语法
```python
DeleteDataItem(ID)
```
参数说明:
- `ID`：：string 类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识
  
#### 返回值
- bool 类型，删除是否成功，如果 ID 错误，抛出异常

#### 实例
以下实例展示了 DeleteDataItem 的使用方法：
```python
trueDelete = iesProject.dataManageModel.DeleteDataItem(items_list[-1]['id'])
items_list = iesProject.dataManageModel.GetItemList(data_type)
print(f"List of {data_type} items(delete): {items_list}")
if trueDelete:
    print("数据项删除成功")
else:
    print("数据项删除失败")
```
执行以上代码，输出结果如下：
```
List of 光伏 items(delete): [
    {'id': 6705, 'name': '请输入', 'manufacturer': '请输入', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741337891862', 'simu': 632, 'isTypicalCase': False
    },
    {'id': 6706, 'name': '请输入', 'manufacturer': 'PV720', 'kind': 'PhotovoltaicSys', 'equipType': '请输入', 'ratedParam': {'ConversionEfficiency': '16.5', 'SinglePanelArea': '1.95', 'PowerFactor': '1.0'
        }, 'operationalConstraints': {'maxPowerGenerating': '0.31'
        }, 'economicParam': {'purchaseCost': '0.06', 'fixationMaintainCost': '10', 'maintainCost': '0.001', 'designLife': '0'
        }, 'related': False, 'isDelete': False, 'timeid': '1684741346142082', 'simu': 632, 'isTypicalCase': False
    }
]
数据项删除成功
```
### 6. SetProjectPosition()
#### 描述
设定项目经纬度位置坐标。

#### 语法
```python
SetProjectPosition(longitude, latitude)
```
参数说明:
- `longitude`：float 类型，表示经度
- `latitude`：float 类型，表示纬度
  

#### 实例
以下实例展示了 SetProjectPosition 的使用方法：
```
longitude, latitude = 120.5, 33.0
iesProject.dataManageModel.SetProjectPosition(longitude, latitude)
```
### 7. GetAtmosData()
#### 描述
使用 GetAtmosData(startDate, endDate) 方法，获取指定时间范围内的气象数据。

#### 语法
```python
GetAtmosData(startDate, endDate)
```
参数说明:
- `startDate`：dateTime 类型，表示开始时间
- `endDate`：dateTime 类型，表示结束时间
  
#### 返回值
- list 类型，为源数据的引⽤，返回当前项⽬位置对应时间范围内的⽓象数据序列，每个元素⽤字典进⾏表⽰，字典的 key 即区分不同的⽓象数据项（如风速、太阳辐照等）以及标识当前时间点。

#### 实例
以下实例展示了 GetAtmosData 的使用方法：
```python
startDate = "2021-01-01"
endDate = "2021-01-02"
atmosData = iesProject.dataManageModel.GetAtmosData(startDate, endDate)
print(atmosData)
```
执行以上代码，输出结果如下：
```
[
    {'id': 13206798, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 00: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.7931213378906', 'u10m': '2.8389973640441895', 'u50m': '4.7698974609375', 'v10m': '1.2812020778656006', 'v50m': '2.158491849899292'
    },
    {'id': 13206799, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 01: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.5496826171875', 'u10m': '2.67037034034729', 'u50m': '4.449131965637207', 'v10m': '1.3326034545898438', 'v50m': '2.234306573867798'
    },
    {'id': 13206800, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 02: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.4158020019531', 'u10m': '2.3731441497802734', 'u50m': '3.9124395847320557', 'v10m': '1.4983257055282593', 'v50m': '2.494563579559326'
    },...(由于结果过长，此处省略后续内容)...
]
```
 



## SimStudio 工作台相关接口
介绍使用SimStudio 工作台相关接口之前的准备工作和相关接口功能的详细介绍
## ==目前该模块 `SimStudio` 中的计算方案主要包括综合能源仿真和综合能源运⾏优化两种，这两种方案的算例操作、启动计算的接口与现有 `SimStudio` 相关 `SDK` 保持⼀致，主要实现 `result` 类的相关接口（两种计算方案可共用一个 `result` 类）==
### 1 建模仿真平台
#### 1.0 准备工作
在进行对各个接口的具体操作前，您需要先获取指定的项目。
```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 仿真测试——获取指定 simuid 的项目
    iesProject = cloudpss.IESLabSimulation.fetch('632')

```
#### 1.1 getPlotData()
#### 描述
对 `result` 实例，获取时序的曲线数据。

#### 语法
获取元件 `ID` 为` compID` 的元件，对应标签为 `labelName` 、图例名称为 `traceName` 的 `plot` 数据的第 `index` 项：
```python
getPlotData(self, compID, labelName, traceName=‘all’, index=-1)
```
参数说明:
- `compID`：string类型，代表元件的标识符
- `lableName`：string类型，代表 `plot` 曲线的分组标签
- `traceName`： string类型，代表 `plot `曲线对应分组下的图例名称，当为 `all` 时，返回所有图例的数据
- `index`：int类型，代表对应图例时序数据中的第 `index` 项，当⼩于0时，返回该图例所有的时序数据
  
#### 返回值
- dict 类型

#### 实例
以下实例展示了 getPlotData 的使用方法：
```python
    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('计算完成')
    ies_result = runner.result

    # 示例：使用 getPlotData 方法
    compID = "/AbsorptionChiller_4"
    labelName = "相角"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data)
```
执行以上代码，输出结果如下：
```
running
running
计算完成
Plot data:  defaultdict(<function IESResult.getPlotData.<locals>.<lambda> at 0x0000015CCD61CC10>, {'相角': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}})

```
### 2 规划设计平台
#### 2.0 准备工作
#### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目, 开始计算并获得结果。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('220')

    # 典型场景生成模块计算测试
    typical_runner = iesplanProject.iesLabTypicalDayRun()
    while not typical_runner.status():
        pass
    print('计算完成')
    iesplan_result = typical_runner.result
```
#### 2.1 GetTypical()
#### 描述
对 `result` 实例，获取所有典型日的数据项。

#### 语法
获取当前 `result` 的典型日:
```python
GetTypicalDay()
```
  
#### 返回值
- list类型，代表所有典型日数据项

#### 实例
以下实例展示了 GetTypicalDay 的使用方法：
```python
    typical = iesplan_result.GetTypical()
    print(typical)
```
执行以上代码，输出结果如下：
```
[{'info': {'typicalDayID': 0, 'name': '1月典型日1', 'duration': 31, 'maxElectricalLoad': 7720.588086022015, 'maxHeatLoad': 3461.6093853955576, 'maxCoolLoad': 3661.2903225806454}, 'data': {'电负荷': [5931.581750212044, 5689.9335806312265, 5501.34578470439, 5444.161312404916, 5318.516719646267, 5377.333754188872, 5583.714797071458, 5848.910937467917, 7178.654263122871, 7647.321885581427, 7720.588086022015, 7661.984971501583, 7464.4816988600305, 7384.940332290695, 7157.802864514773, 7440.75209400269, 7472.91489168119, 7421.966151652237, 7411.168164423549, 7235.525529670466, 7239.907806234916, 7011.119233543028, 6317.049283466789, 5830.335091410339], '热负荷': [2057.2985177897235, 2151.756450498455, 2227.0683895705747, 2249.7275899843607, 2283.6632357428275, 2340.38301920558, 2591.676868833595, 2713.74222266357, 2949.5086845428514, 3075.3909879879675, 3103.445289409819, 3461.6093853955576, 3049.212885786688, 2714.901069695315, 1975.137884431512, 1869.151082618032, 1808.4417390842505, 2344.44868095947, 2459.6375681903164, 2483.9586890447763, 2476.053810061264, 1910.841728367477, 1791.7610052490693, 1886.2121170023518], '冷负荷': [3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454], '辐照强度': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.004296837846830444, 43.92709727953839, 189.8776600540325, 349.5726934453492, 485.2101239440262, 571.3691758186586, 601.9930561845022, 571.0431224864016, 477.9933926982265, 338.5456986376033, 175.84363771254013, 34.00895350466493, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], '环境温度': [12.693514391170993, 12.320290645476405, 11.96505832467028, 11.624285757413531, 11.288898394184741, 10.965863266811596, 10.657294455907731, 11.025994544900868, 12.809548950195335, 15.285186406617527, 17.63220277191499, 19.370473357169885, 20.58324880292338, 21.349967185399862, 21.633062842584422, 21.390622506090438, 20.576444859658523, 18.547200816164775, 16.73993408859417, 15.889592619865198, 15.066019004903922, 14.308716115643904, 13.648738377068696, 13.140748021935963], '土壤温度': [15.147509962512572, 14.708225340484262, 14.311038568968513, 13.951149364184289, 13.622464711179077, 13.318598560620444, 13.034774911531827, 12.859775797526083, 13.135009076518486, 13.913923169207806, 15.08778788248702, 16.45528515231223, 17.814874595724177, 19.005849661878415, 19.89043037660656, 20.3667530018796, 20.381208489530877, 19.876422644174284, 18.996264517179156, 18.178249531407516, 17.45085173576109, 16.79339563513321, 16.195752346900235, 15.653749494655187], '建筑物高度风速': [3.368699162475555, 3.397316086426304, 3.461161402961951, 3.5173856946518534, 3.5739071326294116, 3.653197861248377, 3.719443107362344, 4.0719044571694685, 4.567502790580311, 4.645340381778368, 4.4536512937619515, 4.079251272208159, 3.7620671798043763, 3.546744792141268, 3.4721013120161928, 3.500353053716388, 3.4958780938969087, 2.8852914995810397, 3.018806235885369, 3.3460370420493084, 3.468058502468055, 3.4753518462561708, 3.439012677275404, 3.3905055681708762], '风机高度风速': [5.289227153849876, 5.298012385098882, 5.358675614171336, 5.434998364126607, 5.5172094028616, 5.638250915932266, 5.752597888530066, 5.685704473970761, 5.4155009824146365, 5.434751866855312, 5.133995414262727, 4.667245573388812, 4.284037264154868, 4.03111367746576, 3.958972904520311, 4.042078363380671, 4.208798026210292, 4.505803556296989, 5.114273625770206, 5.510871329609307, 5.618290242810185, 5.573911114579707, 5.448951022101216, 5.32373465508559]}},...(由于输出过长，此处省略其他11个典型日的数据项)...]
```
#### 2.2 GetTypicalDayNum()
#### 描述
对 `result` 实例，获取典型日的数量。

#### 语法
获取当前 `result` 的典型日数量:
```python
GetTypicalDayNum()
```
  
#### 返回值
- int 类型，代表典型日数量

#### 实例
以下实例展示了 GetTypicalDayNum 的使用方法：
```python
    typical_num = iesplan_result.GetTypicalDayNum()
    print("典型日数量: ", typical_num)
```
执行以上代码，输出结果如下：
```
典型日数量: 12
```
#### 2.3 GetTypicalDayInfo()
#### 描述
对 `result` 实例，获取指定典型日的基础信息。

#### 语法
获取 `dayID` 对应典型日的基础信息:
```python
GetTypicalDayInfo(dayID)
```
 参数说明:
- `dayID`： int类型，表示典型日的 `ID` ，数值位于`0~典型日数量`之间

#### 返回值
- dict 类型，代表典型日的基础信息，包括典型日所代表的日期范围、典型日的名称等

#### 实例
以下实例展示了 GetTypicalDayInfo 的使用方法：
```python
    typical_info = iesplan_result.GetTypicalDayInfo(0)
    print(typical_info)
```
执行以上代码，输出结果如下：
```
{'typicalDayID': 0, 'name': '1月典型日1', 'duration': 31, 'maxElectricalLoad': 7720.588086022015, 'maxHeatLoad': 3461.6093853955576, 'maxCoolLoad': 3661.2903225806454}
```
#### 2.4 GetTypicalDayCurve()
#### 描述
对 `result` 实例，获取指定典型日下指定参数类型的时序曲线。

#### 语法
获取 `dayID` 对应典型日下 `dataType` 参数的时序曲线:
```python
GetTypicalDayCurve(dayID, dataType)
print(typical_curve)
```
 参数说明:
- `dayID`： int 类型，表示典型日的 `ID` ，数值位于`0~典型日数量`之间
- `dataType`：`enum` 类型，标识辐照强度、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型

  
#### 返回值
-  list 类型，代表以1h为时间间隔的该参数的日内时序曲线

#### 实例
以下实例展示了 GetTypicalDayCurve 的使用方法：
```python
    typical_curve = iesplan_result.GetTypicalDayCurve(0, '辐照强度')
```
执行以上代码，输出结果如下：
```
[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.004296837846830444, 43.92709727953839, 189.8776600540325, 349.5726934453492, 485.2101239440262, 571.3691758186586, 601.9930561845022, 571.0431224864016, 477.9933926982265, 338.5456986376033, 175.84363771254013, 34.00895350466493, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
```
#### 2.5 GetTypicalMonth()
#### 描述
对 `result` 实例，获取所有月份的典型日数据项。

#### 语法
获取所有月份的典型日数据:
```python
GetTypicalMonth()
```
  
#### 返回值
- list 类型，代表各月各类型的典型日数据

#### 实例
以下实例展示了 GetTypicalMonth 的使用方法：
```python
    typical_month = iesplan_result.GetTypicalMonth()
    print(typical_month)
```
执行以上代码，输出结果如下：
```
[{'月份': 1, '持续天数': [31], '电负荷': [[5931.581750212044, 5689.9335806312265, 5501.34578470439, 5444.161312404916, 5318.516719646267, 5377.333754188872, 5583.714797071458, 5848.910937467917, 7178.654263122871, 7647.321885581427, 7720.588086022015, 7661.984971501583, 7464.4816988600305, 7384.940332290695, 7157.802864514773, 7440.75209400269, 7472.91489168119, 7421.966151652237, 7411.168164423549, 7235.525529670466, 7239.907806234916, 7011.119233543028, 6317.049283466789, 5830.335091410339]], '热负荷': [[2057.2985177897235, 2151.756450498455, 2227.0683895705747, 2249.7275899843607, 2283.6632357428275, 2340.38301920558, 2591.676868833595, 2713.74222266357, 2949.5086845428514, 3075.3909879879675, 3103.445289409819, 3461.6093853955576, 3049.212885786688, 2714.901069695315, 1975.137884431512, 1869.151082618032, 1808.4417390842505, 2344.44868095947, 2459.6375681903164, 2483.9586890447763, 2476.053810061264, 1910.841728367477, 1791.7610052490693, 1886.2121170023518]], '冷负荷': [[3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454]], '辐照强度': [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.004296837846830444, 43.92709727953839, 189.8776600540325, 349.5726934453492, 485.2101239440262, 571.3691758186586, 601.9930561845022, 571.0431224864016, 477.9933926982265, 338.5456986376033, 175.84363771254013, 34.00895350466493, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], '环境温度': [[12.693514391170993, 12.320290645476405, 11.96505832467028, 11.624285757413531, 11.288898394184741, 10.965863266811596, 10.657294455907731, 11.025994544900868, 12.809548950195335, 15.285186406617527, 17.63220277191499, 19.370473357169885, 20.58324880292338, 21.349967185399862, 21.633062842584422, 21.390622506090438, 20.576444859658523, 18.547200816164775, 16.73993408859417, 15.889592619865198, 15.066019004903922, 14.308716115643904, 13.648738377068696, 13.140748021935963]], '土壤温度': [[15.147509962512572, 14.708225340484262, 14.311038568968513, 13.951149364184289, 13.622464711179077, 13.318598560620444, 13.034774911531827, 12.859775797526083, 13.135009076518486, 13.913923169207806, 15.08778788248702, 16.45528515231223, 17.814874595724177, 19.005849661878415, 19.89043037660656, 20.3667530018796, 20.381208489530877, 19.876422644174284, 18.996264517179156, 18.178249531407516, 17.45085173576109, 16.79339563513321, 16.195752346900235, 15.653749494655187]], '建筑物高度风速': [[3.368699162475555, 3.397316086426304, 3.461161402961951, 3.5173856946518534, 3.5739071326294116, 3.653197861248377, 3.719443107362344, 4.0719044571694685, 4.567502790580311, 4.645340381778368, 4.4536512937619515, 4.079251272208159, 3.7620671798043763, 3.546744792141268, 3.4721013120161928, 3.500353053716388, 3.4958780938969087, 2.8852914995810397, 3.018806235885369, 3.3460370420493084, 3.468058502468055, 3.4753518462561708, 3.439012677275404, 3.3905055681708762]], '风机高度风速': [[5.289227153849876, 5.298012385098882, 5.358675614171336, 5.434998364126607, 5.5172094028616, 5.638250915932266, 5.752597888530066, 5.685704473970761, 5.4155009824146365, 5.434751866855312, 5.133995414262727, 4.667245573388812, 4.284037264154868, 4.03111367746576, 3.958972904520311, 4.042078363380671, 4.208798026210292, 4.505803556296989, 5.114273625770206, 5.510871329609307, 5.618290242810185, 5.573911114579707, 5.448951022101216, 5.32373465508559]]}, ...(由于输出过长，此处省略其他11个月份的典型日数据项)...]
```
#### 2.6 GetTypicalMonthNum()
#### 描述
对 `result` 实例，获取指定月份的典型日数量。

#### 语法
获取第 `monthID` 月各类型的典型日数据:
```python
GetTypicalMonthNum(monthID)
```
 参数说明:
- `monthID`：int类型，表示典型月的 `ID`，数值位于 `1-12` 之间

  
#### 返回值
-  dict 类型，代表第 `monthID` 月各类型的典型日数据

#### 实例
以下实例展示了 GetTypicalMonthNum 的使用方法：
```python
    month = input('请指定月份：')
    typical_month12 = iesplan_result.GetTypicalMonthNum(int(month))
    print(f"{month}月的典型日数量: {typical_month12}")
```
执行以上代码，输出结果如下：
```
请指定月份：1
1月的典型日数量: {'月份': 1, '持续天数': [31], '电负荷': [[5931.581750212044, 5689.9335806312265, 5501.34578470439, 5444.161312404916, 5318.516719646267, 5377.333754188872, 5583.714797071458, 5848.910937467917, 7178.654263122871, 7647.321885581427, 7720.588086022015, 7661.984971501583, 7464.4816988600305, 7384.940332290695, 7157.802864514773, 7440.75209400269, 7472.91489168119, 7421.966151652237, 7411.168164423549, 7235.525529670466, 7239.907806234916, 7011.119233543028, 6317.049283466789, 5830.335091410339]], '热负荷': [[2057.2985177897235, 2151.756450498455, 2227.0683895705747, 2249.7275899843607, 2283.6632357428275, 2340.38301920558, 2591.676868833595, 2713.74222266357, 2949.5086845428514, 3075.3909879879675, 3103.445289409819, 3461.6093853955576, 3049.212885786688, 2714.901069695315, 1975.137884431512, 1869.151082618032, 1808.4417390842505, 2344.44868095947, 2459.6375681903164, 2483.9586890447763, 2476.053810061264, 1910.841728367477, 1791.7610052490693, 1886.2121170023518]], '冷负荷': [[3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3660.7526881720432, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454, 3661.2903225806454]], '辐照强度': [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.004296837846830444, 43.92709727953839, 189.8776600540325, 349.5726934453492, 485.2101239440262, 571.3691758186586, 601.9930561845022, 571.0431224864016, 477.9933926982265, 338.5456986376033, 175.84363771254013, 34.00895350466493, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], '环境温度': [[12.693514391170993, 12.320290645476405, 11.96505832467028, 11.624285757413531, 11.288898394184741, 10.965863266811596, 10.657294455907731, 11.025994544900868, 12.809548950195335, 15.285186406617527, 17.63220277191499, 19.370473357169885, 20.58324880292338, 21.349967185399862, 21.633062842584422, 21.390622506090438, 20.576444859658523, 18.547200816164775, 16.73993408859417, 15.889592619865198, 15.066019004903922, 14.308716115643904, 13.648738377068696, 13.140748021935963]], '土壤温度': [[15.147509962512572, 14.708225340484262, 14.311038568968513, 13.951149364184289, 13.622464711179077, 13.318598560620444, 13.034774911531827, 12.859775797526083, 13.135009076518486, 13.913923169207806, 15.08778788248702, 16.45528515231223, 17.814874595724177, 19.005849661878415, 19.89043037660656, 20.3667530018796, 20.381208489530877, 19.876422644174284, 18.996264517179156, 18.178249531407516, 17.45085173576109, 16.79339563513321, 16.195752346900235, 15.653749494655187]], '建筑物高度风速': [[3.368699162475555, 3.397316086426304, 3.461161402961951, 3.5173856946518534, 3.5739071326294116, 3.653197861248377, 3.719443107362344, 4.0719044571694685, 4.567502790580311, 4.645340381778368, 4.4536512937619515, 4.079251272208159, 3.7620671798043763, 3.546744792141268, 3.4721013120161928, 3.500353053716388, 3.4958780938969087, 2.8852914995810397, 3.018806235885369, 3.3460370420493084, 3.468058502468055, 3.4753518462561708, 3.439012677275404, 3.3905055681708762]], '风机高度风速': [[5.289227153849876, 5.298012385098882, 5.358675614171336, 5.434998364126607, 5.5172094028616, 5.638250915932266, 5.752597888530066, 5.685704473970761, 5.4155009824146365, 5.434751866855312, 5.133995414262727, 4.667245573388812, 4.284037264154868, 4.03111367746576, 3.958972904520311, 4.042078363380671, 4.208798026210292, 4.505803556296989, 5.114273625770206, 5.510871329609307, 5.618290242810185, 5.573911114579707, 5.448951022101216, 5.32373465508559]]}
```

#### 2.7 GetTypicalMonthCurve()  
#### 描述
对 `result` 实例，获取指定月份典型日下指定参数类型的时序曲线。

#### 语法
获取第 `monthID` 月典型日下 `dataType` 参数的时序曲线:
```python
GetTypicalMonthCurve(monthID, dataType)
```
 参数说明:
- `monthID`： int类型，表示典型月的 `ID` ，数值位于 `1-12` 之间
- `dataType`：`enum` 类型，标识辐照强度、环境温度、土壤温度、建筑物高度风速、风机高度风速、电负荷、热负荷、冷负荷的参数类型

  
#### 返回值
-  list类型，代表以1h为时间间隔的该参数的典型日内时序曲线

#### 实例
以下实例展示了 GetTypicalMonthCurve 的使用方法：
```python
    month = input('请指定月份：')
    dataType = input('请指定参数类型：')
    typical_monthcurve = iesplan_result.GetTypicalMonthCurve(int(month), dataType)
    print(f"{month}月的典型日下，参数类型为{dataType}的时序曲线: {typical_monthcurve}")
```
执行以上代码，输出结果如下：
```
请指定月份：1
请指定参数类型：辐照强度
1月的典型日下，参数类型为辐照强度的时序曲线: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.004296837846830444, 43.92709727953839, 189.8776600540325, 349.5726934453492, 485.2101239440262, 571.3691758186586, 601.9930561845022, 571.0431224864016, 477.9933926982265, 338.5456986376033, 175.84363771254013, 34.00895350466493, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]
```  




## 方案优选模块相关接口
介绍使用方案优选模块相关接口之前的准备工作和相关接口功能的详细介绍
## ==方案优选模块对应有两个 Python 类，第一种类实例与具体的算例（ `Model` 类的实例）相绑定，第二种类实例与计算结果（ `Result` 类的实例）相绑定。本教程将介绍如何使用该模块的各个接口方法。==

### 1 IESLabPlanModel 类实例
#### 1.0 准备工作
    #### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    ies_plan_project = cloudpss.IESLabPlan.fetch('219')

```
#### 1.1 GetOptimizationInfo()
#### 描述
获取方案优化模块的优化目标设置信息。

#### 语法
获取当前算例的优化目标设置信息：
```python
GetOptimizationInfo()
```

  
#### 返回值
- enum 类型，代表经济性优化和环保性优化的类型

#### 实例
以下实例展示了 GetOptimizationInfo 的使用方法：
```python
    # 获取优化目标设置信息
    optimization_info = ies_plan_project.planModel.GetOptimizationInfo()
    print("优化目标设置信息:", optimization_info)
```
执行以上代码，输出结果如下：
```
优化目标设置信息: OptimizationMode.经济性
```
#### 1.2 SetOptimizationInfo() 
#### 描述
设置方案优化模块的优化目标。

#### 语法
设置当前算例的优化目标：
```python
SetOptimizationInfo(optType)
```
参数说明:
- `optType`： enum 类型，代表经济性优化和环保性优化的类型
  
#### 返回值
- bool 类型，代表参数设置是否成功

#### 实例
以下实例展示了 SetOptimizationInfo 的使用方法：
```python
    # 设置优化目标
    opt_type = ies_plan_project.planModel.SetOptimizationInfo(cloudpss.ieslab.OptimizationMode.经济性)  
    if opt_type:
        print("优化目标设置成功")
    else:
        print("优化目标设置失败")
```
执行以上代码，输出结果如下：
```
优化目标设置成功
```
#### 1.3 run()
#### 1.4 GetRunner() 
#### 1.5 kill()
#### 1.6 GetLastTaskResult()        
### 2 IESLabPlanResult类实例
目前该模块 `SimStudio` 中的计算方案为典型日生成，对该计算方案的 `result` 类新增的接口如下所示：
#### 2.0 准备工作
    #### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    ies_plan_project = cloudpss.IESLabPlan.fetch('219')
```
#### 2.1 status()

#### 2.2 GetLogs()
#### 2.3 GetPlanNum()
#### 描述
获取优化方案的数量。
#### 语法
获取当前 `result` 实例对应的优化方案数量:
```python
GetPlanNum()
```
#### 返回值
-  int 类型，代表优化方案的数量
#### 2.4 GetPlanInfo()
#### 描述
获取指定优化方案的基础信息。
#### 语法
获取 `planID` 对应的优化方案的基础信息:
```python
GetPlanInfo(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
#### 返回值
- dict类型，代表该方案的基础信息，包括投资、运行成本、负荷总量等信息
#### 2.5 GetPlanConfiguration()
#### 描述
获取指定优化方案的配置信息。
#### 语法
获取 `planID` 对应的优化方案的配置信息:
```python
GetPlanConfiguration(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
#### 返回值
- dict 类型，代表该方案的配置信息，包括每种设备的选型配置、容量配置、成本等相关信息


### 2.4 GetComponentResult()
#### 描述
获取指定优化方案下特定元件的运行信息。
#### 语法
获取 `planID` 对应的优化方案下 `componentID` 在典型日 `typicalDayName` 下的运行信息:
```python
GetComponentResult(planID, componentID, typicalDayName)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
- `componentID`： str类型，表示元件的标识符
- `typicalDayName`： str类型，代表典型日的名称
#### 返回值
- dict类型，代表该元件在指定典型日下的运行信息

#### 2.6 GetComponentResult()
#### 2.7 GetComponentTypiDays()
#### 2.8 实例
#### 2.5.1 实例代码
```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('220')


    # 启动计算
    runner = ies_plan_project.iesLabPlanRun()
    last_plan_num = 0
    while not runner.status():
        # print('running', flush=True)
        time.sleep(1)
        plan_result = runner.result
        plan_num = plan_result.GetPlanNum()
        if plan_num > last_plan_num:
            for plan_id in range(last_plan_num, plan_num):
                print("优化方案", plan_id + 1)
                plan_info = plan_result.GetPlanInfo(plan_id)
                print("基础信息:", plan_info)
                plan_config = plan_result.GetPlanConfiguration(plan_id)
                print("配置信息:", plan_config)
                plan_config = plan_result.GetComponentResult(plan_id, "/component_absorption_chiller_1", "1月典型日1")
                print("运行信息:", plan_config)
                print("=" * 30)
            last_plan_num = plan_num
    print('计算完成')
```


#### 2.5.2 运行结果
执行以上代码，输出结果如下：
```
优化方案 1
基础信息: {'方案名称': '方案1', '综合成本（万元）': 3062.541767940324, '设备投资费用（万元）': 11422.5, '设备年维护费用（万元）': 47.535512358556396, '年销售收入（万元）': 9330.964486970926, '年运营支出（万元）': 2301.1000055817676, '年CO2排放（吨）': 6179.243609112638, '年电负荷（kWh）': 94903561.61101785, '年热负荷（kWh）': 5416145.413115531, '年冷负荷（kWh）': 36871461.70857195}
配置信息: {'/component_absorption_chiller_1': {'CO2Discharge': 0.0, 'compManufacturer': 'AC', 'compModel': '1', 'compName': '/component_absorption_chiller_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.09999884259259259, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '吸收式制冷机1'},...(由于结果过长，此处省略后续配置信息)...}
运行信息: {'data': {'groupDesc': [{'desc': '质量流量(kg/s)', 'keyset': ['热水质量流量', '冷水质量流量']}, {'desc': '压力(MPa)', 'keyset': ['热水进口压力', '热水出口压力', '冷水进口压力', '冷水出口压力']}, {'desc': '温度(℃)', 'keyset': ['热水进口温度', '热水出口温度', '冷水进口温度', '冷水出口温度']}, {'desc': '能量(kW)', 'keyset': ['供冷量', '热负荷', '有功负荷', '无功负荷']}, {'desc': '相角(deg)', 'keyset': ['相角']}, {'desc': '电压(kV)', 'keyset': ['电压']}, {'desc': '运行策略', 'keyset': ['关闭', '挡位1', '挡位2', '挡位3', '挡位4', '挡位5', '挡位6', '挡位7', '挡位8', '挡位9']}]...(由于结果过长，此处省略后续运行信息)...}}
==============================
优化方案 2
...(由于结果过长，此处省略方案2内容及后续方案)...
```



## 方案评估模块相关接口
介绍使用方案优选模块相关接口之前的准备工作和相关接口功能的详细介绍
## ==方案评估选模块对应有两个 Python 类，第一种类实例与具体的算例（ `Model` 类的实例）相绑定，第二种类实例与计算结果（ `Result` 类的实例）相绑定。本教程将介绍如何使用该模块的各个接口方法。==
### 1 IESLabEvaluationModel 类实例
#### 1.0 准备工作
    #### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    ies_plan_project = cloudpss.IESLabPlan.fetch('220')
```
#### 1.1 GetFinancialParams()
#### 描述
获取指定方案的财务评估参数信息。

#### 语法
获取 planID 对应的优化方案下财务评估模块的基础信息：
```python
GetFinancialParams(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
  
#### 返回值
- dict 类型，为源数据的引用，代表该方案对应的财务评价基础参数信息

#### 实例
以下实例展示了 GetFinancialParams 的使用方法：
```python
    # 获取指定方案的财务评估参数信息
    planID = input("请输入要查看的方案ID：")
    evaluation_info = ies_plan_project.evaluationModel.GetFinancialParams(planID)
    print("该方案的财务评估参数信息:", evaluation_info)
```
执行以上代码，输出结果如下：
```
请输入要查看的方案ID：1
该方案的财务评估参数信息: {'investmentbanchandproportion': [
        {'id': 390, 'year': '2019', 'rate': '100', 'simu': 220, 'planId': 1
        }
    ], 'assetformation': [
        {'id': 22, 'fixedAssetsRatio': '95', 'residualRrate': '5', 'depreciationPeriod': '15', 'reimbursementPeriod': '5', 'simu': 220, 'planId': 1
        }
    ], 'productioncost': [
        {'id': 12, 'capacity': '4', 'annualSalary': '8', 'welfareFactor': '0', 'insuranceRate': '0.25', 'materialsExpenses': '5.0', 'otherExpenses': '1.0', 'simu': 220, 'planId': 1
        }
    ], 'workingcapitalandfinancialexpenses': [
        {'id': 11, 'workingCapitalLoanRatio': '70', 'interestRateAndWorkingCapital': '4', 'annualARCirculationTimes': '12', 'annualStockCirculationTimes': '12', 'annualCashCirculationTimes': '12', 'annualAPCirculationTimes': '12', 'simu': 220, 'planId': 1
        }
    ], 'projectcalculation': [
        {'id': 15, 'electricityVATRate': '18', 'steamSaleVATRate': '12', 'hotColdVATRate': '12', 'fuelBoughtVATRate': '10', 'materialBoughtVATRate': '17', 'legalAccumulationFundRate': '10', 'aleatoricAccumulationFundRate': '0', 'educationFeePlus': '5', 'localEducationPlus': '2', 'cityMaintenanceConstructionTaxTate': '5', 'corporateIncomeTaxRate': '25', 'basicDiscountRate': '8', 'simu': 220, 'planId': 1
        }
    ]
}
```
#### 1.2 run()
#### 1.3 EnvironmentalEvaluationRun()
#### 1.4 EnergyEvaluationRun()
#### 1.5 GetRunner()
### 2 IESLabEvaluationResult类实例
#### 2.0 准备工作
#### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('220')

```
#### 2.1 status()
#### 2.2 GetFinancialResult()
#### 描述
获取指定优化方案的特定类型的财务评估表格。
#### 语法
获取 `planID` 方案 `resultType` 类型的财务评估结果:
```python
GetFinancialResult(planID, resultType)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
- `resultType`： enum类型，表示财务评价结果表格的类型
#### 返回值
-  dict 类型，代表该方案对应 `resultType` 类型的财务评估结果

#### 实例
以下实例展示了 GetFinancialResult 的使用方法：
```python
    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result

    # 获取指定优化方案的特定类型的财务评估表格:
    financial_result = plan_result.GetFinancialResult("利润与利润分配", planID)
    print("该方案的财务评估表格:", financial_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
评估完成
该方案的财务评估表格: {'headerDesc': [{'headerName': '序号', 'key': 'serialNumber'}, {'headerName': '项目', 'key': '项目'}, {'headerName': '2019', 'key': '2019'}, {'headerName': '2020', 'key': '2020'}, {'headerName': '2021', 'key': '2021'}, {'headerName': '2022', 'key': '2022'}, {'headerName': '2023', 'key': '2023'}, {'headerName': '2024', 'key': '2024'},  ...(由于结果过长，此处省略后续内容)...

```
#### 2.3 GetOverviewResult()
#### 描述
获取当前方案的概览结果。
#### 语法
获取当前结果类对应的优化方案下的概览结果:
```python
GetOverviewResult()
```

#### 返回值
- array 类型，代表该方案对应的概览结果
#### 实例
以下实例展示了 GetFinancialResult 的使用方法：
```python
    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result

    # 获取当前方案的概览结果:
    overview_result = plan_result.GetOverviewResult(planID)
    print("该方案的概览结果:", overview_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
评估完成
该方案的概览结果: {'项目动态总投资': 12052.415247899778, '年销售收入': 9330.964486970926, '平均年总成本费用': 3346.68137046548, '总投资收益率': 32.584346918420145, '资本金利润率': 62.73151313986579, '资本金内部收益率': 88.58017535608217, '所得税前投资内部收益率': 57.1421700961323, '所得税前投资财务净现值': 43304.76173022156, '所得税前投资回报期': 2.7489328954969823, '所得税后投资内部收益率': 48.93780718777837, '所得税后投资财务净现值': 35541.595903739624, '所得税后投资回报期': 3.0383431246726587}
```
#### 2.4 GetEnergyEvaluationResult()
#### 描述
获取当前结果类对应的优化方案下的能效评价。
#### 语法
获取当前结果类对应的优化方案下的能效评价:
```python
GetEnergyEvaluationResultt(planID)
```
#### 返回值
- array 类型，代表该方案对应的能效评价结果
#### 实例
以下实例展示了 GetEnergyEvaluationResult 的使用方法：
```python
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID, '能效评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的能效评价:
    ene_result = plan_result.GetEnergyEvaluationResult(planID)
    print("该方案的能效评价:", ene_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
running
running
running
running
running
running
running
running
running
评估完成
该方案的能效评价: {'totalPowerSypply': 957175.8545535074, 'totalPowerLoad': 1101398.2566356198, 'totalPowerLoss': -144222.40208211244, 'totalHeatSupply': 124012.04729099869, 'totalHeatLoad': 81242.18119673297, 'totalHeatLoss': 42769.866094265715, 'totalCoolSupply': 477908.82443701365, 'totalCoolLoad': 553071.9256285792, 'totalCoolLoss': -75163.10119156557, 'energyEfficiency': 111.32807440373792, 'tableData': {'year': {'/component_absorption_chiller_1': {'power': [0.0, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806, -26264.129810728806], 'heat': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], 'cool': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, ...(由于结果过长，此处省略后续内容)...

```
#### 2.5 GetEnvironmentalEvaluationResult()
#### 描述
获取当前结果类对应的优化方案下的环保评价。
#### 语法
获取当前结果类对应的优化方案下的环保评价:
```python
GetEnvironmentalEvaluationResult()
```

#### 返回值
- array 类型，代表该方案对应的环保评价结果
#### 实例
以下实例展示了 GetEnvironmentalEvaluationResult 的使用方法：
```python
    planID = input("请输入要进行评估的方案ID：")
    runner = ies_plan_project.iesLabEvaluationRun(planID, '环保评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的环保评价:
    env_result = plan_result.GetEnvironmentalEvaluationResult(planID)
    print("该方案的环保评价:", env_result)
```
执行以上代码，输出结果如下：
```
请输入要进行评估的方案ID：0
running
running
running
running
running
running
running
running
running
running
评估完成
该方案的环保评价: {'tableData': {'year': {'CO2': [0.0, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638, 6179.243609112638], '氮化物': [0.0, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946], 'SO2': [0.0, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946, 20.047164380708946], '烟尘': [0.0, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481, 13.207543591996481]}, ...(由于结果过长，此处省略后续内容)...

```





