---
title: 案例 3 批量仿真+结果二次处理
description: IESLab SDK 案例 3 批量仿真+结果二次处理
sidebar_position: 30
---

### 1.1 案例概述
本案例旨在演示如何通过系统地的修改参数，并获取系统在不同参数配置下的仿真结果并对仿真结果进行二次处理。可用于分析不同参数对系统性能的影响，选择最优的系统设计参数组合等场景。通过本案例，您可以学习到以下功能和方法：
1.如何获取和修改CloudPSS模型中的元件与设备参数，并进行批量仿真计算的完整流程。
2.如何提取仿真结果数据，并使用Matplotlib对结果进行二次处理。

### 1.2 代码解析
cloudpss是用于电力系统仿真的库。matplotlib.pyplot和numpy用于数据可视化和数值计算。mpl_toolkits.mplot3d用于绘制3D图形。设置API访问令牌和API地址，获取模型对象。# 获取拟修改的元件与设备信息。


```python
import time
import os
import cloudpss
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D  # 导入3D绘图工具

if __name__ == '__main__':
    # 设置API访问令牌和API地址
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUyNywidXNlcm5hbWUiOiJsaXUxNTk2MzIiLCJzY29wZXMiOlsibW9kZWw6OTgzNjciLCJmdW5jdGlvbjo5ODM2NyIsImFwcGxpY2F0aW9uOjMyODMxIl0sInJvbGVzIjpbImxpdTE1OTYzMiJdLCJ0eXBlIjoiYXBwbHkiLCJleHAiOjE3NDIxMTIyMTEsIm5vdGUiOiJTREvmoYjkvosiLCJpYXQiOjE3MTEwMDgyMTF9.Bg3MC1ETj-0Pik7YCfH0QQsFJQlNUnengWeywBOa4Rq9YlEYvYrdkRAKKzWnHv40FeUhyNBLoCyGr5kxzKapgw')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)

    # 获取拟修改的元件与设备信息
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    model = iesProject.model
    model_pv = model.getComponentByKey("PhotovoltaicSys_6")
```


使用np.arange()创建最大功率和倾角的参数范围。注意，确保参数范围和步长设置合理。
```python
# 假设的参数范围
    maximum_powers = np.arange(700, 901, 50)  # 从700W到900W，步长为100W
    dip_angles = np.arange(20, 61, 10)  # 从20度到60度，步长为20度
```
使用np.zeros()创建一个与参数范围大小相匹配的数组,用于存储结果。使用np.meshgrid()基于参数范围创建网格,用于后续的参数扫描。
```python
    # 初始化结果存储
    results = np.zeros((len(maximum_powers), len(dip_angles)))
    X, Y = np.meshgrid(dip_angles, maximum_powers)  # 创建参数网格
```
使用嵌套循环遍历参数网格中的每个参数组合。更新数据管理模块和拓扑编辑模块中的参数值。
使用iesProject.run()执行仿真计算。通过ies_result.getPlotData()获取指定组件("PhotovoltaicSys_6")的指定数据("功率(kW)")。从获取的数据中提取特定时间点(第11个时间点)的有功功率值,并存储在结果数组中。
注意:确保组件ID和数据标签名称正确。这个过程可能会花费一定的时间。确保网络连接稳定并耐心等待。
```python
    for i, max_power in enumerate(maximum_powers):
        for j, dip_angle in enumerate(dip_angles):
            # 更新参数值
            data_PV[0]['ratedParam']['MaximumPower'] = str(max_power)
            model_pv.args['DipAngle'] = str(dip_angle)

            # 执行仿真计算
            runner = iesProject.run()
            while not runner.status():
                print('running', flush=True)
                time.sleep(3)
            print('计算完成')
            ies_result = runner.result
            # 获取并存储有功功率数据（这里假设使用第11个时间点的有功功率作为结果）
            compID = "/PhotovoltaicSys_6"
            labelName = "功率(kW)"
            plot_data = ies_result.getPlotData(compID, labelName)
            results[i, j] = plot_data['有功功率']['y'][11]  # 假设使用第11个时间点的值
```
将获取到的数据进行二次处理，绘制三维曲面图:

```python
    # 绘制二维曲面图
    fig = plt.figure(figsize=(12, 8))
    ax = fig.add_subplot(111, projection='3d')
    surf = ax.plot_surface(X, Y, results, cmap='viridis')

    ax.set_xlabel('Dip Angle (degrees)')
    ax.set_ylabel('Max Power (W)')
    ax.set_zlabel('Active Power (kW)')
    ax.set_title('Active Power vs. Max Power and Dip Angle')
    fig.colorbar(surf, shrink=0.5, aspect=5)  # 添加颜色条

    plt.show()
```  
### 1.3 结果展示


### 1.4 常见问题
Q1:参数范围和步长应该如何设置? 
A1:参数范围和步长的设置取决于具体的分析需求。一般来说,范围应该覆盖感兴趣的参数区间,步长不宜过大或过小。过大的步长可能导致结果不够精细,忽略重要的变化趋势;过小的步长会增加计算量,延长仿真时间。需要根据实际情况平衡精度和效率。
Q2: 如果我想要修改其他类型的元件参数，应该怎么做？
A2: 修改其他类型元件参数的方法与修改光伏系统参数类似。首先，使用iesProject.dataManageModel.GetItemList('元件类型')获取目标元件的信息，然后根据元件的具体参数使用model.getComponentByKey("元件键值")获取元件对象，并修改相应的参数。最后，执行仿真计算。注意，每种元件的参数可能不同，需要根据CloudPSS的文档来确定正确的参数名称和可接受的参数范围。

### 1.5 完整代码
附上案例完整代码
```python
import time
import os
import cloudpss
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D  # 导入3D绘图工具

if __name__ == '__main__':
    # 设置API访问令牌和API地址
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUyNywidXNlcm5hbWUiOiJsaXUxNTk2MzIiLCJzY29wZXMiOlsibW9kZWw6OTgzNjciLCJmdW5jdGlvbjo5ODM2NyIsImFwcGxpY2F0aW9uOjMyODMxIl0sInJvbGVzIjpbImxpdTE1OTYzMiJdLCJ0eXBlIjoiYXBwbHkiLCJleHAiOjE3NDIxMTIyMTEsIm5vdGUiOiJTREvmoYjkvosiLCJpYXQiOjE3MTEwMDgyMTF9.Bg3MC1ETj-0Pik7YCfH0QQsFJQlNUnengWeywBOa4Rq9YlEYvYrdkRAKKzWnHv40FeUhyNBLoCyGr5kxzKapgw')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)

    # 获取拟修改的元件与设备信息
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    model = iesProject.model
    model_pv = model.getComponentByKey("PhotovoltaicSys_6")

    # 假设的参数范围
    maximum_powers = np.arange(700, 901, 50)  # 从700W到900W，步长为100W
    dip_angles = np.arange(20, 61, 10)  # 从20度到60度，步长为20度

    # 初始化结果存储
    results = np.zeros((len(maximum_powers), len(dip_angles)))

    X, Y = np.meshgrid(dip_angles, maximum_powers)  # 创建参数网格

    for i, max_power in enumerate(maximum_powers):
        for j, dip_angle in enumerate(dip_angles):
            # 更新参数值
            data_PV[0]['ratedParam']['MaximumPower'] = str(max_power)
            model_pv.args['DipAngle'] = str(dip_angle)

            # 执行仿真计算
            runner = iesProject.run()
            while not runner.status():
                print('running', flush=True)
                time.sleep(3)
            print('计算完成')
            ies_result = runner.result
            # 获取并存储有功功率数据（这里假设使用第11个时间点的有功功率作为结果）
            compID = "/PhotovoltaicSys_6"
            labelName = "功率(kW)"
            plot_data = ies_result.getPlotData(compID, labelName)
            results[i, j] = plot_data['有功功率']['y'][11]  # 假设使用第11个时间点的值

    # 绘制二维曲面图
    fig = plt.figure(figsize=(12, 8))
    ax = fig.add_subplot(111, projection='3d')
    surf = ax.plot_surface(X, Y, results, cmap='viridis')

    ax.set_xlabel('Dip Angle (degrees)')
    ax.set_ylabel('Max Power (W)')
    ax.set_zlabel('Active Power (kW)')
    ax.set_title('Active Power vs. Max Power and Dip Angle')
    fig.colorbar(surf, shrink=0.5, aspect=5)  # 添加颜色条

    plt.show()
```    


