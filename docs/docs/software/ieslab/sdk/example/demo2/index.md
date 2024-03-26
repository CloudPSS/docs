---
title: 案例 2 修改元件及设备参数
description: IESLab SDK 案例 2 修改元件及设备参数
sidebar_position: 30
---


  
### 1.1 案例概述

我们在案例1中介绍了利用SDK获取仿真结果的方法。在学习本案例前，默认您已经熟悉了案例1中的功能和方法。本案例在案例1的基础上重点介绍如何在仿真的过程中使用SDK，对数据管理模块进行操作。此外，还展示了如何修改仿真模型中元件的参数。这些操作对于在仿真环境中准确模拟综合能源系统的实际工作条件至关重要。通过本案例，您可以在案例1的基础上，学习到以下功能和方法在实际案例中的使用：
- [**SetProjectPosition:**](https://sdk-directory.com/api/cloudpss/setToken) 设置仿真项目的地理位置坐标。 
- [**GetAtmosData:**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 获取指定时间段内的气象数据。 
- [**GetItemList、AddDataItem、UpdateDataItem、DeleteDataItem:**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 对数据管理模块中的设备参数进行增删改查操作。
- [**getComponentByKey:**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 获取模型中的特定元件参数。

### 1.2 代码解析
详细解释案例代码的关键步骤，帮助用户理解案例代码
设置网址与账户 `token`、获取获取算例并进行仿真计算，详细解释参考案例1代码解析。
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
```
通过iesProject.dataManageModel.SetProjectPosition(longitude, latitude)方法设置项目的地理位置坐标。这一步非常重要,因为很多能源系统的性能与地理位置密切相关,如光伏发电受当地日照条件影响。
```python
    #获取与修改数据管理模块信息
    #设定项目经纬度位置坐标
    longitude, latitude = 120.5, 33.0
    iesProject.dataManageModel.SetProjectPosition(longitude, latitude) 
```
使用iesProject.dataManageModel.GetAtmosData(startDate, endDate)方法获取指定时间段内的气象数据。注意日期格式应为"YYYY-MM-DD"的字符串形式。
```python
    #获取某时间段的气象数据
    startDate = "2021-01-01"
    endDate = "2021-01-02"
    atmosData = iesProject.dataManageModel.GetAtmosData(startDate, endDate)
```
GetItemList('光伏')用于获取类型为"光伏"的所有设备数据列表。AddDataItem('光伏', data_PV[0])用于添加一个新的光伏设备数据项,第二个参数为新数据对象。通过修改data_PV[0]['ratedParam']['MaximumPower']来更新最大功率参数。UpdateDataItem(data_PV[1]['id'], data_PV[0])用于更新id为data_PV[1]['id']的数据项,第二个参数为更新后的数据对象。DeleteDataItem(data_PV[-1]['id'])用于删除最后一个光伏设备数据项。在进行数据项的修改、更新和删除操作时，确保传递的参数正确，特别是数据项的ID。
```python
    #数据管理模块中的数据获取、修改、更新及删除
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    trueAdd = iesProject.dataManageModel.AddDataItem('光伏',data_PV[0])
    data_PV[0]['ratedParam']['MaximumPower'] = str(790)
    trueUpdate = iesProject.dataManageModel.UpdateDataItem(data_PV[1]['id'],data_PV[0])
    trueDelete = iesProject.dataManageModel.DeleteDataItem(data_PV[-1]['id'])
```
获取与修改拓扑编辑模块信息。model.getComponentByKey("PhotovoltaicSys_6")根据关键字获取特定的光伏组件对象。通过model_pv.args['DipAngle'] = str(40)修改组件的倾角参数为40度。
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
    labelName = "功率(kW)"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data) 
```
### 1.3 结果展示
如案例有结果，将进行结果的展示
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
### 1.4 常见问题
**Q1: 如果GetItemList方法返回空列表怎么办？**
A2: 确保项目中确实存在类型为'光伏'的数据项。如果项目是新的或尚未添加任何光伏数据项，则列表将为空。

**Q2: 更新数据项时发生错误的原因是什么?**
A2: 很大可能是与原始数据项格式不匹配，请仔细核查。

**Q3:如何修改数据项的其他属性?**
A3:只需根据数据项格式修改相应的键值对即可。

**Q4: 我想修改拓扑编辑模块中的元件其它参数，我不知道参数键名怎么办？**
A4: 参数项键名的获取方法如下：
![参数项键名](./参数项键名.png "参数项键名")



### 1.5 完整代码
附上案例完整代码，并说明使用该案例代码的注意事项
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
    labelName = "功率(kW)"
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
    trueUpdate = iesProject.dataManageModel.UpdateDataItem(data_PV[1]['id'],data_PV[0])
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
    labelName = "功率(kW)"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data)  
```