---
title: 案例 1 获取仿真结果数据
description: IESLab SDK 案例 1 获取仿真结果数据
sidebar_position: 30
---

  
### 1.1 案例概述
本案例利用cloudpss平台提供的API接口，展示了如何对系统进行仿真计算，并获取系统的仿真结果数据。通过本案例，您可以学习到以下功能和方法如何在实际案例中使用：
- [**cloudpss.setToken(token):**](https://sdk-directory.com/api/cloudpss/setToken) 设置访问云端仿真服务所需的API令牌。 
- [**cloudpss.IESLabSimulation.fetch(id):**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 根据模型ID获取仿真模型对象。 
- [**run():**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 启动模型的仿真计算。
- [**status():**](https://sdk-directory.com/api/cloudpss/IESLabSimulation/fetch) 检查仿真计算的状态。
- [**getPlotData(componentID, labelName):**](https://sdk-directory.com/api/cloudpss/getPlotData) 获取指定组件的绘图数据。


### 1.2 代码解析
导入必要的库。确保已安装 cloudpss 库。如果没有安装，可以通过运行 pip install cloudpss 来安装它。
```python
import time
import os
import cloudpss
```
使用cloudpss.setToken()方法设置有效的API访问令牌。通过os.environ['CLOUDPSS_API_URL']设置正确的API地址。注意令牌需要是有效且未过期的,否则无法调用云端仿真服务。地址URL需要准确,并以'/'结尾。
```python
if __name__ == '__main__':    
    # 设置API访问令牌和API地址
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUyNywidXNlcm5hbWUiOiJsaXUxNTk2MzIiLCJzY29wZXMiOlsibW9kZWw6OTgzNjciLCJmdW5jdGlvbjo5ODM2NyIsImFwcGxpY2F0aW9uOjMyODMxIl0sInJvbGVzIjpbImxpdTE1OTYzMiJdLCJ0eXBlIjoiYXBwbHkiLCJleHAiOjE3NDIxMTIyMTEsIm5vdGUiOiJTREvmoYjkvosiLCJpYXQiOjE3MTEwMDgyMTF9.Bg3MC1ETj-0Pik7YCfH0QQsFJQlNUnengWeywBOa4Rq9YlEYvYrdkRAKKzWnHv40FeUhyNBLoCyGr5kxzKapgw')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
```
使用cloudpss.IESLabSimulation.fetch()方法获取指定ID为1888的模型对象。确保使用的模型ID（本例中为 1888）是存在的。如果ID不存在，将无法获取模型对象。
```python
    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)    
```
通过调用iesProject.run()方法启动仿真计算。使用runner.status()来检查仿真是否完成。
```python
    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(3)
    print('计算完成')
    ies_result = runner.result
```
指定组件ID为"/PhotovoltaicSys_6"，标签名为"功率(kW)"。调用ies_result.getPlotData()方法获取指定组件和标签的绘图数据。组件ID和标签名称的精确性非常重要。任何拼写错误或格式错误都可能导致无法获取预期的绘图数据。
```python
    # 示例：使用 getPlotData 方法
    compID = "/PhotovoltaicSys_6"
    labelName = "功率(kW)"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data) 
```

### 1.3 结果展示
以下为案例运行的结果
```python
running
running
running
running
计算完成
Plot data:  defaultdict(<function IESResult.getPlotData.<locals>.<lambda> at 0x000001E417B7B920>, {'有功功率': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00', '2021-01-01 08:00:00', '2021-01-01 09:00:00', '2021-01-01 10:00:00', '2021-01-01 11:00:00', '2021-01-01 12:00:00', '2021-01-01 13:00:00', '2021-01-01 14:00:00', '2021-01-01 15:00:00', '2021-01-01 16:00:00', '2021-01-01 17:00:00', '2021-01-01 18:00:00', '2021-01-01 19:00:00', '2021-01-01 20:00:00', '2021-01-01 21:00:00', '2021-01-01 22:00:00', '2021-01-01 23:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.83453077690992, 14.606343058556925, 29.867047880425343, 35.292360874944606, 32.42029908112464, 17.067628492714082, 18.197775497994073, 15.81915160011411, 7.335965942276747, 1.3796850340064308, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, '无功功率': {'x': ['2021-01-01 00:00:00', '2021-01-01 01:00:00', '2021-01-01 02:00:00', '2021-01-01 03:00:00', '2021-01-01 04:00:00', '2021-01-01 05:00:00', '2021-01-01 06:00:00', '2021-01-01 07:00:00', '2021-01-01 08:00:00', '2021-01-01 09:00:00', '2021-01-01 10:00:00', '2021-01-01 11:00:00', '2021-01-01 12:00:00', '2021-01-01 13:00:00', '2021-01-01 14:00:00', '2021-01-01 15:00:00', '2021-01-01 16:00:00', '2021-01-01 17:00:00', '2021-01-01 18:00:00', '2021-01-01 19:00:00', '2021-01-01 20:00:00', '2021-01-01 21:00:00', '2021-01-01 22:00:00', '2021-01-01 23:00:00'], 'y': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}})
```


### 1.4 常见问题

**Q1: 如何解决 "API访问令牌无效或过期" 的问题？**  
A1: 如果您的令牌已过期，您需要重新获取一个有效的API令牌。具体获取方法可以参考[链接](#)。

**Q2: 我不知道算例ID，在哪里可以获取我的算例ID？**  
A2: 如果您不知道具体的模型ID，您可以通过查看算例上方的URL地址，如本算例URL地址中的即为算例ID。
![算例ID](./算例ID.png "算例ID")

**Q3: 仿真一直在 "running" 状态，没有完成，我该怎么办？**  
A3: 如果仿真在长时间内仍未完成，可能是因为模型过于复杂或者服务器负载过高。首先，检查您的模型配置是否正确，并尝试简化模型。如果问题仍然存在，请[联系客服](#)获取帮助。

**Q4: 为什么我无法获取到我想要的绘图数据？**  
A4: 确保您传入`getPlotData`方法的组件ID和标签名称与模型中定义的完全一致。任何拼写错误或格式错误都可能导臀无法检索到数据。如果您确认信息无误但仍然无法获取数据，可能是因为模型仿真结果中不存在该数据。组件ID和标签名称获取方法如下：
获取元件ID
![元件表](./元件表.png "元件表")
![元件ID](./元件ID.png "元件ID")
获取标签名称
![标签名称](./标签名称.png "标签名称")

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
```

