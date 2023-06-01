---
title: 数据管理模块相关接口
order: 10
---

## ==数据管理模块对应一个 Python 类 `DataManageModel` ，类实例与具体的算例（`Model` 类的实例）相绑定，本教程将介绍如何使用以下接口方法: ==


## 0. 准备工作
### 描述
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


## 1. GetItemList()
### 描述
根据数据种类获取该类型下所有数据项的列表。

### 语法
```python
GetItemList(dataType)
```
参数说明:
- `dataType`：string 类型，数据的种类标识，包含：“光伏”、“风机”、“燃气轮机”、“热泵”、“燃气锅炉”、“热管式太阳能集热器”、“电压缩制冷机”、“吸收式制冷机”、“蓄电池”、“储水罐”、“变压器”、“传输线”、“模块化多电平变流器”、“离心泵”、“管道”、“采暖制冷负荷”、“电负荷”、“燃料”、“热”、“冷”、“常数电价”、“分时电价”、“阶梯电价”、“分时阶梯电价”
  
### 返回值
- list 类型，返回该种类下所有数据项的列表

### 实例
以下实例展示了 GetItemList 的使用方法：
```python
data_type = "光伏"
items_list = iesProject.dataManageModel.GetItemList(data_type)
print(f"List of {data_type} items: {items_list}")
```
执行以上代码，输出结果如下：
```json
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

## 2. AddDataItem()
### 描述
使用 AddDataItem(dataType, data) 方法，向数据库中添加数据项。

### 语法
```python
AddDataItem(data_type, data)
```
参数说明:
- `dataType`：string 类型，数据的种类标识
- `data`：dict 类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  
### 返回值
- string 类型，返回新添加数据项的 ID

### 实例
以下实例展示了 AddDataItem 的使用方法：
```python
data_type = "光伏"
trueAdd = iesProject.dataManageModel.AddDataItem(data_type, items_list[0])
items_list = iesProject.dataManageModel.GetItemList(data_type)
print(f"List of {data_type} items(add): {items_list}")
print(f"您新添加数据项的ID是: {trueAdd}")

```
执行以上代码，输出结果如下：
```json
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



## 3. UpdateDataItem()
### 描述
使用 UpdateDataItem() 方法，向数据库中更新数据项。

### 语法
```python
UpdateDataItem(ID, data)
```
参数说明:
- `ID`：：string 类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识
- `data`：dict 类型，表示添加的数据内容，其数据结构应满足对应数据项的结构要求
  
### 返回值
- bool 类型，返回 True 更新成功

### 实例
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
```json

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




## 4. DeleteDataItem()
### 描述
使用 DeleteDataItem(ID) 方法，通过ID在数据库中删除数据项。

### 语法
```python
DeleteDataItem(ID)
```
参数说明:
- `ID`：：string 类型，代表数据项的标识符，可以在所有类型的数据项中实现唯一标识
  
### 返回值
- bool 类型，删除是否成功，如果 ID 错误，抛出异常

### 实例
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
```json
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



## 5. SetProjectPosition()
### 描述
设定项目经纬度位置坐标。

### 语法
```python
SetProjectPosition(longitude, latitude)
```
参数说明:
- `longitude`：float 类型，表示经度
- `latitude`：float 类型，表示纬度
  

### 实例
以下实例展示了 SetProjectPosition 的使用方法：
```python
longitude, latitude = 120.5, 33.0
iesProject.dataManageModel.SetProjectPosition(longitude, latitude)
```


## 6. GetAtmosData()
### 描述
使用 GetAtmosData(startDate, endDate) 方法，获取指定时间范围内的气象数据。

### 语法
```python
GetAtmosData(startDate, endDate)
```
参数说明:
- `startDate`：dateTime 类型，表示开始时间
- `endDate`：dateTime 类型，表示结束时间
  
### 返回值
- list 类型，为源数据的引⽤，返回当前项⽬位置对应时间范围内的⽓象数据序列，每个元素⽤字典进⾏表⽰，字典的 key 即区分不同的⽓象数据项（如风速、太阳辐照等）以及标识当前时间点。

### 实例
以下实例展示了 GetAtmosData 的使用方法：
```python
startDate = "2021-01-01"
endDate = "2021-01-02"
atmosData = iesProject.dataManageModel.GetAtmosData(startDate, endDate)
print(atmosData)
```
执行以上代码，输出结果如下：
```json
[
    {'id': 13206798, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 00: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.7931213378906', 'u10m': '2.8389973640441895', 'u50m': '4.7698974609375', 'v10m': '1.2812020778656006', 'v50m': '2.158491849899292'
    },
    {'id': 13206799, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 01: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.5496826171875', 'u10m': '2.67037034034729', 'u50m': '4.449131965637207', 'v10m': '1.3326034545898438', 'v50m': '2.234306573867798'
    },
    {'id': 13206800, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 02: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.4158020019531', 'u10m': '2.3731441497802734', 'u50m': '3.9124395847320557', 'v10m': '1.4983257055282593', 'v50m': '2.494563579559326'
    },
    {'id': 13206801, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 03: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '266.22064208984375', 'u10m': '2.1190013885498047', 'u50m': '3.459629774093628', 'v10m': '1.7731051445007324', 'v50m': '2.916311264038086'
    },
    {'id': 13206802, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 04: 00: 00', 'tsoil3': '273.1589660644531', 'lwgab_swgdn': '0.0', 't10m': '265.9488830566406', 'u10m': '2.021885395050049', 'u50m': '3.182021379470825', 'v10m': '2.2274374961853027', 'v50m': '3.4976532459259033'
    },
    {'id': 13206803, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 05: 00: 00', 'tsoil3': '273.11737060546875', 'lwgab_swgdn': '0.0', 't10m': '265.56585693359375', 'u10m': '2.3176472187042236', 'u50m': '3.2963051795959473', 'v10m': '2.85113263130188', 'v50m': '4.038365364074707'
    },
    {'id': 13206804, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 06: 00: 00', 'tsoil3': '273.06597900390625', 'lwgab_swgdn': '0.0', 't10m': '265.18341064453125', 'u10m': '2.759345054626465', 'u50m': '3.6485841274261475', 'v10m': '3.2044198513031006', 'v50m': '4.212469577789307'
    },
    {'id': 13206805, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 07: 00: 00', 'tsoil3': '273.0273742675781', 'lwgab_swgdn': '38.52812576293945', 't10m': '265.1667175292969', 'u10m': '3.0860378742218018', 'u50m': '3.8756566047668457', 'v10m': '3.255743980407715', 'v50m': '4.053351879119873'
    },
    {'id': 13206806, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 08: 00: 00', 'tsoil3': '273.02099609375', 'lwgab_swgdn': '208.02499389648438', 't10m': '267.4739990234375', 'u10m': '2.616079568862915', 'u50m': '3.184647560119629', 'v10m': '3.180340051651001', 'v50m': '3.8193182945251465'
    },
    {'id': 13206807, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 09: 00: 00', 'tsoil3': '273.05419921875', 'lwgab_swgdn': '383.6499938964844', 't10m': '271.1583251953125', 'u10m': '3.0985729694366455', 'u50m': '3.8728628158569336', 'v10m': '3.331732749938965', 'v50m': '3.712721347808838'
    },
    {'id': 13206808, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 10: 00: 00', 'tsoil3': '273.11676025390625', 'lwgab_swgdn': '515.375', 't10m': '273.9227600097656', 'u10m': '4.506906509399414', 'u50m': '5.544923782348633', 'v10m': '3.0147745609283447', 'v50m': '3.4051520824432373'
    },
    {'id': 13206809, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 11: 00: 00', 'tsoil3': '273.15936279296875', 'lwgab_swgdn': '587.3499755859375', 't10m': '275.4870910644531', 'u10m': '4.665317058563232', 'u50m': '6.125600337982178', 'v10m': '2.7119030952453613', 'v50m': '3.3868820667266846'
    },
    {'id': 13206810, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 12: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '591.5499877929688', 't10m': '276.36993408203125', 'u10m': '4.655278205871582', 'u50m': '6.333678245544434', 'v10m': '2.8044421672821045', 'v50m': '3.663451671600342'
    },
    {'id': 13206811, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 13: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '530.2000122070312', 't10m': '276.9737854003906', 'u10m': '4.867539405822754', 'u50m': '6.655753135681152', 'v10m': '2.75970196723938', 'v50m': '3.6452414989471436'
    },
    {'id': 13206812, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 14: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '390.8999938964844', 't10m': '277.13409423828125', 'u10m': '4.766776084899902', 'u50m': '6.617967128753662', 'v10m': '2.2740774154663086', 'v50m': '3.0676932334899902'
    },
    {'id': 13206813, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 15: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '235.10000610351562', 't10m': '276.56719970703125', 'u10m': '3.568222761154175', 'u50m': '5.777444362640381', 'v10m': '1.4687762260437012', 'v50m': '2.354806900024414'
    },
    {'id': 13206814, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 16: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '66.9375', 't10m': '273.5251159667969', 'u10m': '2.875793933868408', 'u50m': '5.050045967102051', 'v10m': '1.1293245553970337', 'v50m': '1.989693284034729'
    },
    {'id': 13206815, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 17: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.06057129055261612', 't10m': '271.4792785644531', 'u10m': '3.011715888977051', 'u50m': '4.852036952972412', 'v10m': '0.9461179375648499', 'v50m': '1.5459885597229004'
    },
    {'id': 13206816, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 18: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '271.1221008300781', 'u10m': '2.9112696647644043', 'u50m': '4.658196926116943', 'v10m': '0.463631808757782', 'v50m': '0.7787390351295471'
    },
    {'id': 13206817, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 19: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '270.96295166015625', 'u10m': '2.652285575866699', 'u50m': '4.170923233032227', 'v10m': '-0.10583467781543732', 'v50m': '-0.12345607578754425'
    },
    {'id': 13206818, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 20: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '270.84832763671875', 'u10m': '2.310662031173706', 'u50m': '3.5028486251831055', 'v10m': '-0.5881987810134888', 'v50m': '-0.8637378811836243'
    },
    {'id': 13206819, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 21: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '270.7297058105469', 'u10m': '1.9282798767089844', 'u50m': '2.7732021808624268', 'v10m': '-0.9321399927139282', 'v50m': '-1.3408124446868896'
    },
    {'id': 13206820, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 22: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '270.6353759765625', 'u10m': '1.4083080291748047', 'u50m': '1.9666088819503784', 'v10m': '-1.137258768081665', 'v50m': '-1.5920851230621338'
    },
    {'id': 13206821, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-01 23: 00: 00', 'tsoil3': '273.1459045410156', 'lwgab_swgdn': '0.0', 't10m': '270.6353454589844', 'u10m': '0.7802668809890747', 'u50m': '1.0629829168319702', 'v10m': '-1.2584811449050903', 'v50m': '-1.7154089212417603'
    },
    {'id': 13206822, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 00: 00: 00', 'tsoil3': '273.0955505371094', 'lwgab_swgdn': '0.0', 't10m': '270.47662353515625', 'u10m': '0.07834553718566895', 'u50m': '0.10285162925720215', 'v10m': '-1.2157312631607056', 'v50m': '-1.6300973892211914'
    },
    {'id': 13206823, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 01: 00: 00', 'tsoil3': '273.0518493652344', 'lwgab_swgdn': '0.0', 't10m': '270.10113525390625', 'u10m': '-0.6567727327346802', 'u50m': '-0.9016901254653931', 'v10m': '-1.002064824104309', 'v50m': '-1.3445985317230225'
    },
    {'id': 13206824, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 02: 00: 00', 'tsoil3': '273.00640869140625', 'lwgab_swgdn': '0.0', 't10m': '269.4451599121094', 'u10m': '-1.3388620615005493', 'u50m': '-1.9020493030548096', 'v10m': '-0.7355048656463623', 'v50m': '-1.0088919401168823'
    },
    {'id': 13206825, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 03: 00: 00', 'tsoil3': '272.5940856933594', 'lwgab_swgdn': '0.0', 't10m': '268.866455078125', 'u10m': '-1.8822733163833618', 'u50m': '-2.783979654312134', 'v10m': '-0.4609456956386566', 'v50m': '-0.6440007090568542'
    },
    {'id': 13206826, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 04: 00: 00', 'tsoil3': '271.72772216796875', 'lwgab_swgdn': '0.0', 't10m': '268.1490173339844', 'u10m': '-2.256075620651245', 'u50m': '-3.416619062423706', 'v10m': '-0.1993785798549652', 'v50m': '-0.2641192078590393'
    },
    {'id': 13206827, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 05: 00: 00', 'tsoil3': '270.85272216796875', 'lwgab_swgdn': '0.0', 't10m': '267.4966125488281', 'u10m': '-2.4176454544067383', 'u50m': '-3.680647850036621', 'v10m': '0.06807168573141098', 'v50m': '0.14064821600914001'
    },
    {'id': 13206828, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 06: 00: 00', 'tsoil3': '270.1123352050781', 'lwgab_swgdn': '0.0', 't10m': '266.9683532714844', 'u10m': '-2.4063148498535156', 'u50m': '-3.637270212173462', 'v10m': '0.35287442803382874', 'v50m': '0.5708961486816406'
    },
    {'id': 13206829, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 07: 00: 00', 'tsoil3': '269.5945129394531', 'lwgab_swgdn': '36.017189025878906', 't10m': '266.9565734863281', 'u10m': '-2.1787045001983643', 'u50m': '-3.358579635620117', 'v10m': '0.7421233057975769', 'v50m': '1.1982040405273438'
    },
    {'id': 13206830, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 08: 00: 00', 'tsoil3': '270.03485107421875', 'lwgab_swgdn': '196.16250610351562', 't10m': '269.2713623046875', 'u10m': '-2.338167428970337', 'u50m': '-2.8824586868286133', 'v10m': '1.3034614324569702', 'v50m': '1.6144970655441284'
    },
    {'id': 13206831, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 09: 00: 00', 'tsoil3': '271.32196044921875', 'lwgab_swgdn': '363.25', 't10m': '271.74896240234375', 'u10m': '-2.0416901111602783', 'u50m': '-2.181269407272339', 'v10m': '1.4901666641235352', 'v50m': '1.5942518711090088'
    },
    {'id': 13206832, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 10: 00: 00', 'tsoil3': '272.8559265136719', 'lwgab_swgdn': '478.92498779296875', 't10m': '274.4847412109375', 'u10m': '-1.7953238487243652', 'u50m': '-2.1265077590942383', 'v10m': '1.6435743570327759', 'v50m': '2.04435658454895'
    },
    {'id': 13206833, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 11: 00: 00', 'tsoil3': '273.1591796875', 'lwgab_swgdn': '476.0249938964844', 't10m': '276.0199279785156', 'u10m': '-1.9017846584320068', 'u50m': '-2.268562078475952', 'v10m': '1.682060956954956', 'v50m': '2.0659544467926025'
    },
    {'id': 13206834, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 12: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '410.625', 't10m': '276.7261657714844', 'u10m': '-2.1407346725463867', 'u50m': '-2.5179684162139893', 'v10m': '1.3615498542785645', 'v50m': '1.6528639793395996'
    },
    {'id': 13206835, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 13: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '320.125', 't10m': '277.00201416015625', 'u10m': '-2.4167773723602295', 'u50m': '-2.903815984725952', 'v10m': '1.1432713270187378', 'v50m': '1.4038118124008179'
    },
    {'id': 13206836, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 14: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '231.10000610351562', 't10m': '276.87493896484375', 'u10m': '-2.65291428565979', 'u50m': '-3.351850748062134', 'v10m': '1.1014585494995117', 'v50m': '1.411998987197876'
    },
    {'id': 13206837, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 15: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '139.60000610351562', 't10m': '276.0877990722656', 'u10m': '-2.176553726196289', 'u50m': '-3.8812098503112793', 'v10m': '0.9299492835998535', 'v50m': '1.6804050207138062'
    },
    {'id': 13206838, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 16: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '51.578125', 't10m': '273.7927551269531', 'u10m': '-2.496082305908203', 'u50m': '-4.527719497680664', 'v10m': '1.3132377862930298', 'v50m': '2.3899667263031006'
    },
    {'id': 13206839, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 17: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0703125', 't10m': '272.02606201171875', 'u10m': '-2.826383113861084', 'u50m': '-5.037280082702637', 'v10m': '1.7429696321487427', 'v50m': '3.1237218379974365'
    },
    {'id': 13206840, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 18: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '272.4241638183594', 'u10m': '-2.748154640197754', 'u50m': '-5.267776966094971', 'v10m': '1.9310966730117798', 'v50m': '3.716550350189209'
    },
    {'id': 13206841, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 19: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '272.73388671875', 'u10m': '-2.760007858276367', 'u50m': '-5.453904628753662', 'v10m': '2.0386228561401367', 'v50m': '4.035988807678223'
    },
    {'id': 13206842, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 20: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '272.8074951171875', 'u10m': '-2.7595064640045166', 'u50m': '-5.486449718475342', 'v10m': '2.0781643390655518', 'v50m': '4.142290115356445'
    },
    {'id': 13206843, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 21: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '272.69287109375', 'u10m': '-2.6183369159698486', 'u50m': '-5.174809455871582', 'v10m': '1.9631117582321167', 'v50m': '3.886061191558838'
    },
    {'id': 13206844, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 22: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '272.55902099609375', 'u10m': '-2.51147198677063', 'u50m': '-4.888851165771484', 'v10m': '1.6831815242767334', 'v50m': '3.277435779571533'
    },
    {'id': 13206845, 'sid': 632, 'address': None, 'lat': 33.284747, 'lng': 118.013665, 'time': '2021-01-02 23: 00: 00', 'tsoil3': '273.1600036621094', 'lwgab_swgdn': '0.0', 't10m': '272.40478515625', 'u10m': '-2.438873291015625', 'u50m': '-4.640678405761719', 'v10m': '1.40999174118042', 'v50m': '2.6779820919036865'
    }
]


```
