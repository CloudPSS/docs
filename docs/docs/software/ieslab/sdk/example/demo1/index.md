---
title: 案例 1 获取仿真结果数据
description: IESLab SDK 案例 1 获取仿真结果数据
sidebar_position: 30
---

  
### 1.1 案例概述
本案例利用cloudpss平台提供的API接口，展示了如何对系统进行仿真计算，并获取系统的输出数据。通过本案例，用户可以了解到如何使用cloudpss平台提供的SDK进行仿真计算，以及如何获取并处理仿真结果。
### 1.2 代码解析
详细解释案例代码的关键步骤，帮助用户理解案例代码
导入所需的Python模块：cloudpss是一个用于访问CloudPSS平台的Python库。
```python
import time
import os
import cloudpss
```
使用cloudpss.setToken()方法设置访问CloudPSS平台的API访问令牌。通过设置环境变量CLOUDPSS_API_URL指定CloudPSS平台的API地址。
```python
if __name__ == '__main__':    
    # 设置API访问令牌和API地址
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUyNywidXNlcm5hbWUiOiJsaXUxNTk2MzIiLCJzY29wZXMiOlsibW9kZWw6OTgzNjciLCJmdW5jdGlvbjo5ODM2NyIsImFwcGxpY2F0aW9uOjMyODMxIl0sInJvbGVzIjpbImxpdTE1OTYzMiJdLCJ0eXBlIjoiYXBwbHkiLCJleHAiOjE3NDIxMTIyMTEsIm5vdGUiOiJTREvmoYjkvosiLCJpYXQiOjE3MTEwMDgyMTF9.Bg3MC1ETj-0Pik7YCfH0QQsFJQlNUnengWeywBOa4Rq9YlEYvYrdkRAKKzWnHv40FeUhyNBLoCyGr5kxzKapgw')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
```
使用cloudpss.IESLabSimulation.fetch()方法获取指定ID为1888的模型对象。
```python
    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)    
```
通过调用iesProject.run()方法启动仿真计算
```python
    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(3)
    print('计算完成')
    ies_result = runner.result
```
指定组件ID为"/PhotovoltaicSys_6"，标签名为"功率(kW)"。调用ies_result.getPlotData()方法获取指定组件和标签的绘图数据。
```python
    # 示例：使用 getPlotData 方法
    compID = "/PhotovoltaicSys_6"
    labelName = "功率(kW)"
    plot_data = ies_result.getPlotData(compID, labelName)
    print("Plot data: ", plot_data) 
```

### 1.3 结果展示
如案例有结果，将进行结果的展示


### 1.4 常见问题
1.无法获取算例
API令牌过期或无效：如果令牌已过期，需要登录到CloudPSS平台重新生成一个新的API令牌
2.仿真计算时间过长或未能完成。 在启动仿真计算后，可能会遇到计算时间过长或仿真未能成功完成的情况。这可能是由于模型复杂度高、服务器负载大或者仿真模型存在配置错误等原因造成的。
检查仿真模型的配置，确保模型设置正确，没有错误或不合理的参数设置。
如果模型复杂度较高，需要耐心等待，因为复杂模型的仿真计算可能需要较长时间。
尝试在非高峰时段运行仿真，以避免服务器负载过大影响计算速度。
如果问题持续存在，可以尝试联系CloudPSS平台的技术支持，寻求帮助。

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

