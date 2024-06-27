---
title: 批量修改元件及设备参数
description: 利用 IESLab SDK 批量修改元件及设备参数

tags:
- sdk

---

## 功能介绍

利用SDK实现设置项目经纬度位置坐标及获取气象数据的，对设备、负荷及能源信息库进行增删改查。

## 使用说明

### 用到的 API
- [**SetProjectPosition:**](https://sdk-directory.com/api/cloudpss/setToken) 设置仿真项目的地理位置坐标。 
- [**GetAtmosData:**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 获取指定时间段内的气象数据。 
- [**GetItemList、AddDataItem、UpdateDataItem、DeleteDataItem:**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 对数据管理模块中的设备参数进行增删改查操作。
- [**getComponentByKey:**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 获取模型中的特定元件参数。  

### 调用方式

### `datamanageModel.SetProjectPosition(longitude, latitude)`

- 实例方法
- `longitude`: [Float][Float] 经度，范围为气象数据源的经度范围
- `latitude`: [Float][Float] 纬度，范围为气象数据源的纬度范围

设置项目的天气数据坐标，加载天气数据。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.datamanageModel.SetProjectPosition(longitude, latitude)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.datamanageModel.SetProjectPosition(longitude, latitude)
```

### `datamanageModel.GetItemList(dataType)`

获取 dataType 类型对应所有数据项的列表。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.datamanageModel.GetItemList(dataType)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.datamanageModel.GetItemList(dataType)
```



### `datamanageModel.GetAtmosData(startDate, endDate)`

- 实例方法
- `startDate`: [String][String] 开始时间，格式为'YYYY-MM-DD'
- `endDate`: [String][String] 结束时间，格式为'YYYY-MM-DD'
- Returns: [List][List] 返回当前项目位置对应时间范围内的气象数据序列，每个元素用字典进行表示，字典的 key 即区分不同的气象数据项（如风速、太阳辐照等）以及标识当前时间点

获取在 startDate 到 endDate 之间的气象数据。

```python showLineNumbers
# IESLabSimulation
ieslabSimulation = IESLabSimulation.fetch(id)
# highlight-next-line
ieslabSimulation.datamanageModel.GetAtmosData(startDate, endDate)

# IESLabPlan
ieslabPlan = IESLabPlan.fetch(id)
# highlight-next-line
ieslabPlan.datamanageModel.GetAtmosData(startDate, endDate)
```




## 案例介绍
本案例重点介绍如何在仿真的过程中**使用 SDK，对数据管理模块进行操作。此外，还展示了如何修改元件的参数**。这些操作对于在仿真环境中准确模拟综合能源系统的实际工作条件至关重要。

### 代码解析
首先进行案例准备工作。设置网址与账户 `token`、获取获取算例并进行仿真计算。
```python showLineNumbers 
import time
import os
import cloudpss

if __name__ == '__main__':    
    # 设置API访问令牌和API地址
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUyNywidXNlcm5hbWUiOiJsaXUxNTk2MzIiLCJzY29wZXMiOlsibW9kZWw6OTgzNjciLCJmdW5jdGlvbjo5ODM2NyIsImFwcGxpY2F0aW9uOjMyODMxIl0sInJvbGVzIjpbImxpdTE1OTYzMiJdLCJ0eXBlIjoiYXBwbHkiLCJleHAiOjE3NDIxMTIyMTEsIm5vdGUiOiJTREvmoYjkvosiLCJpYXQiOjE3MTEwMDgyMTF9.Bg3MC1ETj-0Pik7YCfH0QQsFJQlNUnengWeywBOa4Rq9YlEYvYrdkRAKKzWnHv40FeUhyNBLoCyGr5kxzKapgw')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
    
    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)
    
    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(3)
    print('计算完成')
    ies_result = runner.result
```
通过 `iesProject.dataManageModel.SetProjectPosition(longitude, latitude)` 方法设置项目的地理位置坐标。这一步非常重要,因为很多能源系统的性能与地理位置密切相关,如光伏发电受当地日照条件影响。
```python
    #获取与修改数据管理模块信息
    #设定项目经纬度位置坐标
    longitude, latitude = 120.5, 33.0
    iesProject.dataManageModel.SetProjectPosition(longitude, latitude) 
```
使用 `iesProject.dataManageModel.GetAtmosData(startDate, endDate)` 方法获取指定时间段内的气象数据。注意日期格式应为 "YYYY-MM-DD" 的字符串形式。
```python
    #获取某时间段的气象数据
    startDate = "2021-01-01"
    endDate = "2021-01-02"
    atmosData = iesProject.dataManageModel.GetAtmosData(startDate, endDate)
```
`GetItemList('光伏')` 用于获取类型为 `"光伏"` 的所有设备数据列表。`AddDataItem('光伏', data_PV[0])` 用于添加一个新的光伏设备数据项,第二个参数为新数据对象。通过修改 `data_PV[0]['ratedParam']['MaximumPower']` 来更新最大功率参数。`UpdateDataItem(data_PV[1]['id'], data_PV[0])` 用于更新 id 为 `data_PV[1]['id']` 的数据项,第二个参数为更新后的数据对象。`DeleteDataItem(data_PV[-1]['id'])` 用于删除最后一个光伏设备数据项。在进行数据项的修改、更新和删除操作时，确保传递的参数正确，特别是数据项的 ID。
```python
    #数据管理模块中的数据获取、修改、更新及删除
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    trueAdd = iesProject.dataManageModel.AddDataItem('光伏',data_PV[0])
    data_PV[0]['ratedParam']['MaximumPower'] = str(790)
    trueUpdate = iesProject.dataManageModel.UpdateDataItem(data_PV[1]['id'],data_PV [0])
    trueDelete = iesProject.dataManageModel.DeleteDataItem(data_PV[-1]['id'])
```
获取与修改拓扑编辑模块信息。`model.getComponentByKey("PhotovoltaicSys_6")` 根据关键字获取特定的光伏组件对象。通过 `model_pv.args['DipAngle'] = str(40)` 修改元件的倾角参数为 40 度。
```python
    #获取与修改拓扑编辑模块信息
    # 修改参数值
    model = iesProject.model
    model_pv=model.getComponentByKey("PhotovoltaicSys_6")
    model_pv.args['DipAngle'] = str(40)  
```
再次运行仿真计算并获取修改参数后的结果数据。
```python
    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(3)
    print('计算完成')
    ies_result = runner.result

    # 示例：使用 getPlotData 方法
    compID = "/PhotovoltaicSys_6"
    labelName = "功率（$\mathrm{kW}$）"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data) 
```
:::tip
在规划平台同样具备以上的功能点，在使用的时候需要将获取模型的方法cloudpss.IESLabSimulation.fetch(id)改为cloudpss.IESLabPlan.fetch(id)，其余的操作方法与仿真平台类似。
:::

### 结果展示
```python
running
running
running
running
running
计算完成
Plot data:  defaultdict(<function IESResult.getPlotData.<locals>.<lambda> at 0x000001E417B7AC00>, {'有功功率': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00', '2021-01-01 08:00:00', '2021-01-01 09:00:00', '2021-01-01 10:00:00', '2021-01-01 11:00:00', '2021-01-01 12:00:00', '2021-01-01 13:00:00', '2021-01-01 14:00:00', '2021-01-01 15:00:00', '2021-01-01 16:00:00', '2021-01-01 17:00:00', '2021-01-01 18:00:00', '2021-01-01 19:00:00', '2021-01-01 20:00:00', '2021-01-01 21:00:00', '2021-01-01 22:00:00', '2021-01-01 23:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.83453077690992, 14.606343058556925, 29.867047880425343, 35.292360874944606, 32.42029908112464, 17.067628492714082, 18.197775497994073, 15.81915160011411, 7.335965942276747, 1.3796850340064308, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, '无功功率': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00', '2021-01-01 08:00:00', '2021-01-01 09:00:00', '2021-01-01 10:00:00', '2021-01-01 11:00:00', '2021-01-01 12:00:00', '2021-01-01 13:00:00', '2021-01-01 14:00:00', '2021-01-01 15:00:00', '2021-01-01 16:00:00', '2021-01-01 17:00:00', '2021-01-01 18:00:00', '2021-01-01 19:00:00', '2021-01-01 20:00:00', '2021-01-01 21:00:00', '2021-01-01 22:00:00', '2021-01-01 23:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}})
running
running
running
计算完成
Plot data:  defaultdict(<function IESResult.getPlotData.<locals>.<lambda> at 0x000001E41723F060>, {'有功功率': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00', '2021-01-01 08:00:00', '2021-01-01 09:00:00', '2021-01-01 10:00:00', '2021-01-01 11:00:00', '2021-01-01 12:00:00', '2021-01-01 13:00:00', '2021-01-01 14:00:00', '2021-01-01 15:00:00', '2021-01-01 16:00:00', '2021-01-01 17:00:00', '2021-01-01 18:00:00', '2021-01-01 19:00:00', '2021-01-01 20:00:00', '2021-01-01 21:00:00', '2021-01-01 22:00:00', '2021-01-01 23:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.2154165996566704, 16.105570438054414, 32.805587209650426, 37.86729691380207, 33.89333005901522, 17.20321229726841, 18.788408066023898, 16.745908896011407, 7.805927407977448, 1.4541853106712024, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, '无功功率': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00', '2021-01-01 08:00:00', '2021-01-01 09:00:00', '2021-01-01 10:00:00', '2021-01-01 11:00:00', '2021-01-01 12:00:00', '2021-01-01 13:00:00', '2021-01-01 14:00:00', '2021-01-01 15:00:00', '2021-01-01 16:00:00', '2021-01-01 17:00:00', '2021-01-01 18:00:00', '2021-01-01 19:00:00', '2021-01-01 20:00:00', '2021-01-01 21:00:00', '2021-01-01 22:00:00', '2021-01-01 23:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}})
```

## 调试技巧



## 常见问题
**Q1: 如果 `GetItemList` 方法返回空列表怎么办？**  
A2: 确保项目中确实存在该类型的数据项。如果项目是新的或尚未添加任何设备数据项，则列表将为空。

**Q2: 更新数据项时发生错误的原因是什么?**  
A2: 很大可能是与原始数据项格式不匹配，请仔细核查。

**Q3:如何修改数据项的其他属性?**  
A3:只需根据数据项格式修改相应的键值对即可。

**Q4: 我想修改拓扑编辑模块中的元件其它参数，我不知道参数键名怎么办？**  
A4: 参数项键名的获取方法如下：
![参数项键名](./参数项键名.png "参数项键名")

## 完整代码
```python
import time
import os
import cloudpss

if __name__ == '__main__':    
    # 设置API访问令牌和API地址
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUyNywidXNlcm5hbWUiOiJsaXUxNTk2MzIiLCJzY29wZXMiOlsibW9kZWw6OTgzNjciLCJmdW5jdGlvbjo5ODM2NyIsImFwcGxpY2F0aW9uOjMyODMxIl0sInJvbGVzIjpbImxpdTE1OTYzMiJdLCJ0eXBlIjoiYXBwbHkiLCJleHAiOjE3NDIxMTIyMTEsIm5vdGUiOiJTREvmoYjkvosiLCJpYXQiOjE3MTEwMDgyMTF9.Bg3MC1ETj-0Pik7YCfH0QQsFJQlNUnengWeywBOa4Rq9YlEYvYrdkRAKKzWnHv40FeUhyNBLoCyGr5kxzKapgw')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
    
    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)
    
    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(3)
    print('计算完成')
    ies_result = runner.result

    # 示例：使用 getPlotData 方法
    compID = "/PhotovoltaicSys_6"
    labelName = "功率（$\mathrm{kW}$）"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data)
    
    
    #获取与修改数据管理模块信息
    #设定项目经纬度位置坐标
    longitude, latitude = 120.5, 33.0
    iesProject.dataManageModel.SetProjectPosition(longitude, latitude)    
    #获取某时间段的气象数据
    startDate = "2021-01-01"
    endDate = "2021-01-02"
    atmosData = iesProject.dataManageModel.GetAtmosData(startDate, endDate)
    
    #数据管理模块中的数据获取、修改、更新及删除
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    trueAdd = iesProject.dataManageModel.AddDataItem('光伏',data_PV[0])
    data_PV[0]['ratedParam']['MaximumPower'] = str(790)
    trueUpdate = iesProject.dataManageModel.UpdateDataItem(data_PV[1]['id'],data_PV [0])
    trueDelete = iesProject.dataManageModel.DeleteDataItem(data_PV[-1]['id'])
    #获取与修改拓扑编辑模块信息
    # 修改参数值
    model = iesProject.model
    model_pv=model.getComponentByKey("PhotovoltaicSys_6")
    model_pv.args['DipAngle'] = str(40)    

    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(3)
    print('计算完成')
    ies_result = runner.result

    # 示例：使用 getPlotData 方法
    compID = "/PhotovoltaicSys_6"
    labelName = "功率（$\mathrm{kW}$）"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data)  
```