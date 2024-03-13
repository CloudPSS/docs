---
title: 数据管理模块相关接口
description: IESLab 规划设计数据管理模块相关接口
sidebar_position: 10
---



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
 



