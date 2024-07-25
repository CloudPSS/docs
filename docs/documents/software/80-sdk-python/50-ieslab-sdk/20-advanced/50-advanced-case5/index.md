---
title: 批量仿真获取结果进行二次处理
description: 批量仿真获取结果进行二次处理

tags:
- sdk

---

## 功能介绍
通过 IESLab SDK 批量进行仿真计算，获取仿真结果数据，并对数据进行进一步的分析和处理，以生成有价值的图表和报告。
## 使用说明

### 用到的 API
[Class: IESLabSimulation](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 

    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `IESLabSimulation.fetch(simulationId) ` |   获取算例信息    |
    | `IESLabSimulation.run(job=None, name=None) ` |   调用仿真    |
    
[Class: Runner](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 

    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `Runner.status() ` |   运行状态   |

[Class: IESResult](../../../70-api/50-ieslab/index.md#class-ieslabsimulation)   

    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `IESResult.getPlotData(compID, labelName, traceName='all', index=-1)  ` |   获取结果数据   |

[Class: DataManageModel](../../../70-api/50-ieslab/index.md#class-ieslabsimulation) 
    
    | 方法     | 功能 | 
    | ---------------- | :-----------: |     
    | `dataManageModel.GetItemList(dataType)`                |  获取所有数据项的列表  | 

[Class: Model](../../../70-api/50-ieslab/index.md#class-ieslabsimulation)

    | 方法     | 功能 | 
    | ---------------- | :-----------: |     
    | `Model.getComponentByKey(componentKey: str)`                |  通过key获取对应的元件  |  
    

### 调用方式
+ 通过IESLabSimulation.fetch(simulationId)方法获取算例信息，在此基础上通过dataManageModel.GetItemList(dataType)方法和Model.getComponentByKey(componentKey: str)方法获取元件设备参数。
+ 通过IESLabSimulation.run(job=None, name=None)方法调用仿真，Runner.status() 方法检测运行状态，之后使用IESResult.getPlotData(compID, labelName, traceName='all', index=-1)方法获取指定元件的仿真结果数据。



## 案例介绍
通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本。**案例旨在演示如何通过系统地的修改参数，获取系统在不同参数配置下的仿真结果并对仿真结果进行二次处理**。通过本案例，您可以学习到以下功能和方法：  
1. 如何获取和修改 CloudPSS 模型中的元件与设备参数，并进行批量仿真计算的完整流程。  
2. 如何提取仿真结果数据，并使用 Matplotlib 对结果进行二次处理。

:::tip
您可以在本案例的基础上修改代码用于分析不同参数对系统性能的影响，选择最优的系统设计参数组合等场景。
:::

### 代码解析
导入必要的库，matplotlib.pyplot 和 numpy 用于数据可视化和数值计算。mpl_toolkits.mplot3d 用于绘制 3D 图形；接下来进行算例准备工作，包括设置网址与账户 token、获取获取算例，详细解释参考案例 1 代码解析。获取拟修改的元件与设备信息。详细解释参考案例 2 代码解析。
```python
import time
import os
import cloudpss
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D  # 导入3D绘图工具

if __name__ == '__main__':
    # 设置API访问令牌和API地址
    cloudpss.setToken('{token}')
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(1888)

    # 获取拟修改的元件与设备信息
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    model = iesProject.model
    model_pv = model.getComponentByKey("PhotovoltaicSys_6")
```

使用 `np.arange()` 创建最大功率和倾角的参数范围。注意，确保参数范围和步长设置合理。
```python
# 假设的参数范围
    maximum_powers = np.arange(700, 901, 50)  # 从700W到900W，步长为100W
    dip_angles = np.arange(20, 61, 10)  # 从20度到60度，步长为20度
```
使用 `np.zeros()` 创建一个与参数范围大小相匹配的数组,用于存储结果。使用 `np.meshgrid()` 基于参数范围创建网格,用于后续的参数扫描。
```python
    # 初始化结果存储
    results = np.zeros((len(maximum_powers), len(dip_angles)))
    X, Y = np.meshgrid(dip_angles, maximum_powers)  # 创建参数网格
```
**使用嵌套循环遍历参数网格中的每个参数组合。更新数据管理模块和拓扑编辑模块中的参数值**。
使用 `iesProject.run()` 执行仿真计算。通过 `ies_result.getPlotData()` 获取指定元件 `"PhotovoltaicSys_6"` 的指定数据 `"功率（$\mathrm{kW}$）")`。从获取的数据中提取特定时间点(本例为第 11 个时间点)的有功功率值,并存储在结果数组中。
:::note
这个过程可能会花费一定的时间。确保网络连接稳定并耐心等待。
:::

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
            labelName = "功率（$\mathrm{kW}$）"
            plot_data = ies_result.getPlotData(compID, labelName)
            results[i, j] = plot_data['有功功率']['y'][11]  # 假设使用第11个时间点的值
```
将获取到的数据进行二次处理，绘制三维曲面图。

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

### 结果展示
下图为元件 PhotovoltaicSys_6 有功功率随倾斜角和光伏设备最大功率变化的曲面图。
![结果数据](./result_data.png "结果数据")

## 调试技巧
在批量仿真获取结果并进行二次处理时，可能会遇到一些常见的问题。以下是一些调试技巧，帮助你更容易地定位和解决这些问题：
+ 确保API访问令牌设置正确且未过期。同时，确认访问的网址设置是否正确。
+ 验证函数和方法调用，特别注意IESResult.getPlotData(compID, labelName, traceName='all', index=-1)方法参数的顺序和必填项。确认每个API调用的返回值是否符合预期。
+ 如果获取结果数据失败，请检查元件的ID是否正确，以及是否存在于IESLab中的元件库中。


## 常见问题
**Q1:参数范围和步长应该如何设置?**  
A1:参数范围和步长的设置取决于具体的分析需求。一般来说,范围应该覆盖感兴趣的参数区间,步长不宜过大或过小。过大的步长可能导致结果不够精细,忽略重要的变化趋势;过小的步长会增加计算量,延长仿真时间。需要根据实际情况平衡精度和效率。  
**Q2: 如果我想要修改其他类型的元件参数，应该怎么做？**  
A2: **修改其他类型元件参数的方法与修改光伏系统参数类似**。首先，使用 `iesProject.dataManageModel.GetItemList('元件类型')` 获取目标元件的信息，然后根据元件的具体参数使用 `model.getComponentByKey("元件键值")` 获取元件对象，并修改相应的参数。此外，您还可以根据 CloudPSS 的文档来确定正确的参数名称和可接受的参数范围。（插入参考链接）

## 完整代码
```python
import time
import os
import cloudpss
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D  # 导入3D绘图工具

if __name__ == '__main__':
    # 设置API访问令牌和API地址
    cloudpss.setToken('{token}')
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
            labelName = "功率（$\mathrm{kW}$）"
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