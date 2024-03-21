---
title: 案例 2 修改元件及设备参数
description: IESLab SDK 案例 2 修改元件及设备参数
sidebar_position: 30
---


  
### 1.1 案例概述
简单说明案例背景和目的，能够实现的功能
### 1.2 代码解析
详细解释案例代码的关键步骤，帮助用户理解案例代码
设置网址与账户 `token`。
```python
    # 申请并设置自己账户的token
    cloudpss.setToken(Your_token)

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = Your_URL
```
通过 `fetch` 方法获取指定算例。
```python
    # 仿真测试——获取指定 simuid 的项目
    iesProject = cloudpss.IESLabSimulation.fetch(simulation_id)
```
通过 `getComponentByKey` 方法获取拟修改的元件，然后通过 `args` 属性修改所指定的元件的参数值。
```python
        # 修改参数值
        model = iesProject.model
        thermalLoad = model.getComponentByKey(component_key)
        thermalLoad.args[parameter_name] = str(value_1)
```
通过 `run` 方法调用算例进行仿真，通过 `runner.result` 获取仿真结果。仿真的结果都储存在 `result` 的数据结构中。
```python
        # 仿真计算测试
        runner = iesProject.run()
        while not runner.status():
            print('running', flush=True)
            time.sleep(1)
        print('计算完成')
        ies_result = runner.result
```
使用 `getPlotData` 方法获取结果数据并对获取的数据进行处理。用户可以通过切片的方式获取自己关注的数据。
```python
        # 示例：使用 getPlotData 方法
        # 获取所有时间点的结果数据
        ies_result_time = ies_result.getPlotData(compID, labelName)[traceName]['x']
        # 转换时间输出格式为小时
        hour_list = []

        for time_str in ies_result_time:
            datetime_obj = datetime.strptime(time_str, '%Y-%m-%d %H:%M:%S')
            hour_str = datetime_obj.strftime('%H')
            if hour_str.startswith('0'):
                hour_str = hour_str[1:]
            hour_list.append(hour_str)
        plot_data = ies_result.getPlotData(compID, labelName)[traceName]['y']
```
### 1.3 结果展示
如案例有结果，将进行结果的展示
### 1.4 常见问题
如案例有结果，将进行结果的展示

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