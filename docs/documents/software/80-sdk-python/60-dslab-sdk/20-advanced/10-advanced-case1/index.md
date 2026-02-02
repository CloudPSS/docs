---
title: 数据管理模块
description: 使用 DSLab SDK 管理数据管理模块

tags:
- sdk
- dslab
- data management
---

## 概述
介绍如何使用数据管理模块的各个接口方法。

## 准备工作

在进行对各个接口的具体操作前，需先获取指定的项目。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('{simuid}')
```

## 接口调用

### `LocationGet()`

获取气象定位点数据。

#### 语法

```python
LocationGet()
```

#### 返回值

- [List][List] 类型，返回气象定位点数据，包含id，经度坐标，纬度坐标，定位点名称。

#### 实例

以下实例展示了 `LocationGet` 的使用方法：

```python
location = dsProject.dataManageModel.LocationGet()
print(location)
```

执行以上代码，输出结果如下：

```json
[
    {
        "id": 106,
        "name": "定位点1",
        "lat": 34.268026,
        "lng": 111.045688
    },
    {
        "id": 107,
        "name": "定位点2",
        "lat": 34.734492,
        "lng": 113.648906
    }
]
```



### `LocationCreate(name, longitude, latitude)`

创建气象定位点。

#### 语法

```python
LocationCreate(name, longitude, latitude)
```

#### 参数说明

- `name`: [String][String] 定位点名称，可选
- `longitude`: [Float][Float] 可选，表示经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 可选，表示纬度，范围为气象数据源的纬度范围

#### 返回值

无

#### 实例

以下实例展示了 `LocationCreate` 的使用方法：

```python
location = dsProject.dataManageModel.LocationGet()
print("原气象定位点数据：", location)

name = '新定位点'
lng = 112.5
lat = 34.2
dsProject.dataManageModel.LocationCreate(name, lng, lat)
location_new = dsProject.dataManageModel.LocationGet()
print("添加新气象定位点后的数据：", location_new)
```

执行以上代码，输出结果如下：

```json
原气象定位点数据： [
    {'id': 106, 'name': '定位点1', 'lat': 34.268026, 'lng': 111.045688
    },
    {'id': 107, 'name': '定位点2', 'lat': 34.734492, 'lng': 113.648906
    }
]
添加新气象定位点后的数据： [
    {'id': 106, 'name': '定位点1', 'lat': 34.268026, 'lng': 111.045688
    },
    {'id': 107, 'name': '定位点2', 'lat': 34.734492, 'lng': 113.648906
    },
    {'id': 108, 'name': '新定位点', 'lat': 34.2, 'lng': 112.5
    }
]
```



### `LocationUpdate(id, name, longitude, latitude)`

修改气象定位点。

#### 语法

```python
LocationUpdate(id, name, longitude, latitude)
```

#### 参数说明

- `id`: [String][String] 定位点 id
- `name`: [String][String] 定位点名称，可选
- `longitude`: [Float][Float] 可选，表示经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 可选，表示纬度，范围为气象数据源的纬度范围

#### 返回值

无

#### 实例

以下实例展示了 `LocationUpdate` 的使用方法：

```python
location = dsProject.dataManageModel.LocationGet()
print("修改前的气象定位点数据：", location)

id = 108
name = '修改的定位点'
lng = 120.5
lat = 30.5
dsProject.dataManageModel.LocationUpdate(id, name, lng, lat)
location_update = dsProject.dataManageModel.LocationGet()
print("修改后的气象定位点数据：", location_update)
```

执行以上代码，输出结果如下：

```json
修改前的气象定位点数据： [
    {'id': 106, 'name': '定位点1', 'lat': 34.268026, 'lng': 111.045688
    },
    {'id': 107, 'name': '定位点2', 'lat': 34.734492, 'lng': 113.648906
    },
    {'id': 108, 'name': '新定位点', 'lat': 34.2, 'lng': 112.5
    }
]
修改后的气象定位点数据： [
    {'id': 106, 'name': '定位点1', 'lat': 34.268026, 'lng': 111.045688
    },
    {'id': 107, 'name': '定位点2', 'lat': 34.734492, 'lng': 113.648906
    },
    {'id': 108, 'name': '修改的定位点', 'lat': 30.5, 'lng': 120.5
    }
]
```



### `LocationDelete(id)`

删除指定 id 的气象定位点。

#### 语法

```python
LocationDelete(id)
```

#### 参数说明

- `id`: [String][String] 定位点 id

#### 返回值

无

#### 实例

以下实例展示了 `LocationDelete` 的使用方法：

```python
location = dsProject.dataManageModel.LocationGet()
print("删除前的气象定位点数据：", location)

del_id = 108
dsProject.dataManageModel.LocationDelete(del_id)
location_del = dsProject.dataManageModel.LocationGet()
print("删除后的气象定位点数据：", location_del)
```

执行以上代码，输出结果如下：

```json
删除前的气象定位点数据： [
    {'id': 106, 'name': '定位点1', 'lat': 34.268026, 'lng': 111.045688
    },
    {'id': 107, 'name': '定位点2', 'lat': 34.734492, 'lng': 113.648906
    },
    {'id': 108, 'name': '修改的定位点', 'lat': 30.5, 'lng': 120.5
    }
]
删除后的气象定位点数据： [
    {'id': 106, 'name': '定位点1', 'lat': 34.268026, 'lng': 111.045688
    },
    {'id': 107, 'name': '定位点2', 'lat': 34.734492, 'lng': 113.648906
    }
]
```



### `LoadWeather()`

加载气象数据。

#### 语法

```python
LoadWeather()
```

#### 返回值

无

#### 实例

以下实例展示了 `LoadWeather` 的使用方法：

```python
dsProject.dataManageModel.LoadWeather()
```



### `GetAtmosData(locationId, date)`

获取日期在 date 的气象数据。

#### 语法

```python
GetAtmosData(locationId, date)
```

#### 参数说明

- `locationId`: [String][String] 定位点 id
- `date`: [String][String] 时间，格式为 'YYYY-MM-DD'

#### 返回值

- [List][List] 返回当前项目位置对应时间范围内的气象数据序列，每个元素用字典进行表示，字典的key即区分不同的气象数据项（如风速、太阳辐照等）以及标识当前时间点

#### 实例

以下实例展示了 `GetAtmosData` 的使用方法：

```python
locationId, date = 106, "2021-01-01"
atmos_data = dsProject.dataManageModel.GetAtmosData(locationId, date)
print(atmos_data)
```

执行以上代码，输出结果如下：

```json
[{'id': 2884681, 'lat': 34.5, 'lng': 111.33333333, 'time': 0, 'date': '2021-01-01', 'tsoil3': '265.8891906738281', 'lwgab_swgdn': '0', 't10m': '263.9046936035156', 'u2m': '', 'u10m': '3.3861000537872314', 'u50m': '6.325496196746826', 'v2m': '', 'v10m': '0.12162360548973083', 'v50m': '0.1767696738243103'}, {'id': 2884682, 'lat': 34.5, 'lng': 111.33333333, 'time': 60, 'date': '2021-01-01', 'tsoil3': '265.78472900390625', 'lwgab_swgdn': '0', 't10m': '263.8388977050781', 'u2m': '', 'u10m': '3.4322192668914795', 'u50m': '6.416775226593018', 'v2m': '', 'v10m': '-0.02124585211277008', 'v50m': '-0.09121418744325638'},  ...(由于结果过长，此处省略后续内容)...]
```



### `GetItemList(kind)`

获取 kind 类型对应所有数据项的列表。

#### 语法

```python
GetItemList(kind)
```

#### 参数说明

- `kind`: [String][String] 数据的种类标识，包含：光伏、风机、燃气、水电、常规小火电、生物质发电、垃圾电厂、传输线、变压器、开关、负荷分类、负荷用户、储能配置、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价

#### 返回值

- [List][List] 返回该种类下所有数据项的列表

#### 实例

以下实例展示了 `GetItemList` 的使用方法：

```python
data_kind = "光伏"
item_List = dsProject.dataManageModel.GetItemList(data_kind)
print(f"List of {data_kind} items: {item_List}")
```

执行以上代码，输出结果如下：

```json
List of 光伏 items: [
       {'id': 68272, 'user': 'admin', 'name': '光伏电站1', 'data': {'Global ID': '183611', '发电户号': '52489374590', '发电户名': '光伏电站1', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线1', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': '14a1999d-1121-4f32-bacd-4359810743d4', 'timeid': 'd6081160-8368-4a47-8680-d6de0c7a3007', 'createdAt': '2023-05-29T03: 33: 06.574Z', 'updatedAt': '2023-05-29T03: 33: 06.574Z'
    },
    {'id': 68273, 'user': 'admin', 'name': '光伏电站2', 'data': {'Global ID': '383101', '发电户号': '52489374590', '发电户名': '光伏电站2', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线2', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': 'cb9e1dbe-332a-472d-bbe5-8c411ab0a9bb', 'timeid': '77d80dbd-0fb1-4c2f-b9d0-45afe94e251f', 'createdAt': '2023-05-29T03: 33: 06.909Z', 'updatedAt': '2023-05-29T03: 33: 06.909Z'
    },
    
]
```



### `AddDataItem(kind, data)`

向 kind 类型的数据库中添加内容为 data 的数据项。

#### 语法

```python
AddDataItem(kind, data)
```

#### 参数说明

- `kind`: [String][String] 数据的种类标识，包含：光伏、风机、燃气、水电、常规小火电、生物质发电、垃圾电厂、传输线、变压器、开关、负荷分类、负荷用户、储能配置、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- `data`: [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求

#### 返回值

- [List][List] 返回该种类下所有数据项的列表

#### 实例

以下实例展示了 `AddDataItem` 的使用方法：

```python
data_kind = "光伏"
item_list = dsProject.dataManageModel.GetItemList(data_kind)
trueAdd = dsProject.dataManageModel.AddDataItem(data_kind, item_list[0])
print(f"List of {data_kind} items(add):", trueAdd)
```

执行以上代码，输出结果如下：

```json
List of 光伏 items(add): [
    {'id': 68272, 'user': 'admin', 'name': '光伏电站1', 'data': {'Global ID': '183611', '发电户号': '52489374590', '发电户名': '光伏电站1', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线1', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': '14a1999d-1121-4f32-bacd-4359810743d4', 'timeid': 'd6081160-8368-4a47-8680-d6de0c7a3007', 'createdAt': '2023-05-29T03: 33: 06.574Z', 'updatedAt': '2023-05-29T03: 33: 06.574Z'
    },
    {'id': 68273, 'user': 'admin', 'name': '光伏电站2', 'data': {'Global ID': '383101', '发电户号': '52489374590', '发电户名': '光伏电站2', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线2', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': 'cb9e1dbe-332a-472d-bbe5-8c411ab0a9bb', 'timeid': '77d80dbd-0fb1-4c2f-b9d0-45afe94e251f', 'createdAt': '2023-05-29T03: 33: 06.909Z', 'updatedAt': '2023-05-29T03: 33: 06.909Z'
    },
    {'id': 78811, 'user': 'admin', 'name': '光伏电站1', 'data': {'Global ID': '183611', '发电户号': '52489374590', '发电户名': '光伏电站1', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线1', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': '7bad79fc-9f7c-491d-90fc-8a167dce544e', 'timeid': 'dbeed509-5111-4dc3-bb71-5d2d991c7b1f', 'createdAt': '2023-06-15T06: 48: 44.116Z', 'updatedAt': '2023-06-15T06: 48: 44.116Z'
    }
]
```



### `UpdateDataItem(kind, data)`

更新 kind 类型对应数据项。

#### 语法

```python
UpdateDataItem(kind, data)
```

#### 参数说明

- `kind`: [String][String] 数据的种类标识，包含：光伏、风机、燃气、水电、常规小火电、生物质发电、垃圾电厂、传输线、变压器、开关、负荷分类、负荷用户、储能配置、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价
- `data`: [Dict][Dict] 添加的数据内容，其数据结构应满足对应数据项的结构要求

#### 返回值

- [List][List] 返回该种类下所有数据项的列表

#### 实例

以下实例展示了 `UpdateDataItem` 的使用方法：

```python
data_kind = "光伏"
item_list = dsProject.dataManageModel.GetItemList(data_kind)
item_list[-1]['name'] = '光伏电站3'
trueUpdate = dsProject.dataManageModel.UpdateDataItem(data_kind, item_list)
print(f"List of {data_kind} items(update):", trueUpdate)
```

执行以上代码，输出结果如下：

```json
List of 光伏 items(update): [
    {'id': 68272, 'user': 'admin', 'name': '光伏电站1', 'data': {'Global ID': '183611', '发电户号': '52489374590', '发电户名': '光伏电站1', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线1', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': '14a1999d-1121-4f32-bacd-4359810743d4', 'timeid': 'd6081160-8368-4a47-8680-d6de0c7a3007', 'createdAt': '2023-05-29T03: 33: 06.574Z', 'updatedAt': '2023-05-29T03: 33: 06.574Z'
    },
    {'id': 68273, 'user': 'admin', 'name': '光伏电站2', 'data': {'Global ID': '383101', '发电户号': '52489374590', '发电户名': '光伏电站2', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线2', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': 'cb9e1dbe-332a-472d-bbe5-8c411ab0a9bb', 'timeid': '77d80dbd-0fb1-4c2f-b9d0-45afe94e251f', 'createdAt': '2023-05-29T03: 33: 06.909Z', 'updatedAt': '2023-05-29T03: 33: 06.909Z'
    },
    {'id': 78811, 'user': 'admin', 'name': '光伏电站3', 'data': {'Global ID': '183611', '发电户号': '52489374590', '发电户名': '光伏电站3', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线1', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': '7bad79fc-9f7c-491d-90fc-8a167dce544e', 'timeid': 'dbeed509-5111-4dc3-bb71-5d2d991c7b1f', 'createdAt': '2023-06-15T06: 48: 44.116Z', 'updatedAt': '2023-06-15T06: 48: 44.116Z'
    }
]


进程已结束,退出代码1
```



### `DeleteDataItem(id, kind)`

删除 kind 类型下指定 id 的数据项。

#### 语法

```python
DeleteDataItem(id, kind)
```

#### 参数说明

- `id`: [Number][Number] 数据的 id
- `kind`: [String][String] 数据的种类标识，包含：光伏、风机、燃气、水电、常规小火电、生物质发电、垃圾电厂、传输线、变压器、开关、负荷分类、负荷用户、储能配置、上网电价、输配电价、常数电价、阶梯电价、分时电价、分时阶梯电价

#### 返回值

- [List][List] 返回该种类下所有数据项的列表

#### 实例

以下实例展示了 `DeleteDataItem` 的使用方法：

```python
data_kind = "光伏"
item_list = dsProject.dataManageModel.GetItemList(data_kind)
trueDelete = dsProject.dataManageModel.DeleteDataItem(item_list[-1]['id'], data_kind)
print(f"List of {data_kind} items(delete): ", trueDelete)
```

执行以上代码，输出结果如下：

```json
List of 光伏 items(delete): [
    {'id': 68272, 'user': 'admin', 'name': '光伏电站1', 'data': {'Global ID': '183611', '发电户号': '52489374590', '发电户名': '光伏电站1', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线1', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': '14a1999d-1121-4f32-bacd-4359810743d4', 'timeid': 'd6081160-8368-4a47-8680-d6de0c7a3007', 'createdAt': '2023-05-29T03: 33: 06.574Z', 'updatedAt': '2023-05-29T03: 33: 06.574Z'
    },
    {'id': 68273, 'user': 'admin', 'name': '光伏电站2', 'data': {'Global ID': '383101', '发电户号': '52489374590', '发电户名': '光伏电站2', '台区编号': '0000741897', '装机容量': '20', '关联气象曲线': '定位点0', '基准出力曲线': '曲线2', '关联气象曲线x': ''
        }, 'isDelete': 0, 'isTypicalCase': 0, 'uuid': 'cb9e1dbe-332a-472d-bbe5-8c411ab0a9bb', 'timeid': '77d80dbd-0fb1-4c2f-b9d0-45afe94e251f', 'createdAt': '2023-05-29T03: 33: 06.909Z', 'updatedAt': '2023-05-29T03: 33: 06.909Z'
    }
]
```



[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[Number]: https://docs.python.org/3.8/tutorial/introduction.html#numbers
[Float]: https://docs.python.org/3.8/c-api/float.html
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings
[Boolean]: https://docs.python.org/3.8/c-api/bool.html
[List]: https://docs.python.org/3.8/tutorial/introduction.html#lists
[Dict]: https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries
[Enum]: https://docs.python.org/3.8/library/enum.html