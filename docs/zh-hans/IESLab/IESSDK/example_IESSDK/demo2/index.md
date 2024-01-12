---
title: 案例 2 利用SDK实现参数扫描功能
author: pcp
category: 400
order: 100
---

## 用途
### 1.模型实验
可以帮助研究人员快速了解模型的行为和性能，以及**探索不同参数对模型输出和关注的指标的影响**，帮助研究人员进行模型和系统的优化。
### 2.敏感度分析
用于**评估模型输出对于参数变化的敏感程度的方法**。通过参数敏感度分析，可以了解模型输出对于不同参数的变化的响应情况，进而确定哪些参数对于模型输出的影响最大。
## 支持的功能
要实现参数扫描功能。常规方法是手动修改参数执行多次仿真，逐个记录结果并绘图，以探索参数变化对关注的指标的影响。这个方法操作复杂且效率低下。借助  `CloudPSS SDK`，利用 Python 脚本修改参数，批量调用系统仿真内核，可以快速完成上述功能。且此方法可以复用，**仅通过修改算例 `ID`、参数的名称、结果的 `lableName` 与 `traceName` 就可以实现不同的算例、全部的参数和所关注的结果的参数扫描**。极大的方便用户进行使用。
## 时间轨迹的参数扫描
### 时间轨迹的参数扫描代码展示
配置好 Python 开发环境，这里主要用到了 Python 依赖库 `numpy`、`matplotlib` 和 `scipy`，用户可以使用 `pip` 指令进行安装，如 `pip install numpy`。
```python
import os
import cloudpss
import time
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime
import matplotlib

def plot_parameter_scan(simulation_id, component_key, parameter_name, start_value, end_value, step_size):
    # 申请并设置自己账户的token
    cloudpss.setToken(Your_token)

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = Your_URL

    # 仿真测试——获取指定 simuid 的项目
    iesProject = cloudpss.IESLabSimulation.fetch(simulation_id)
    # 创建空列表，用于存储参数取值和相应结果
    result_values = []

    for value_1 in np.arange(start_value, end_value+1, step_size):
        # 修改参数值
        model = iesProject.model
        thermalLoad = model.getComponentByKey(component_key)
        thermalLoad.args[parameter_name] = str(value_1)

        # 仿真计算测试
        runner = iesProject.run()
        while not runner.status():
            print('running', flush=True)
            time.sleep(1)
        print('计算完成')
        ies_result = runner.result

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
        # 将参数取值和结果添加到列表中
        result_values.extend(plot_data)
        #将结果切分成与hour_list长度一致的子列表
        result_list=[result_values[j:j+len(hour_list)] for j in range(0,len(result_values),len(hour_list))]
    # 设置绘图中文字体为仿宋
    matplotlib.rc("font", family='SIMSUN')
    # 绘制曲线图
    for i in range(len(np.arange(start_value, end_value+1, step_size))):
        plt.plot(hour_list, result_list[i], label=f'{parameter_name}={np.arange(start_value, end_value+1, step_size)[i]}')
    plt.xlabel("时间(h)")
    plt.ylabel(labelName)
    plt.title(f"参数扫描: {parameter_name}")
    plt.legend()
    plt.show()

# 调用示例
#设置用户token及平台网址
Your_token='eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjM0LCJ1c2VybmFtZSI6ImxpdXNodWFpIiwic2NvcGVzIjpbXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzIzNzkzMjkxLCJpYXQiOjE2OTI2ODkyOTF9.PTmSgvh0wrfDnRCy3mU0tZAo3ByO2Zb717wcE4ujJnZJn_y-zk7IYEo9w2G1SpeeWHu5-16CnhWvFgY6aK7Lbg'
Your_URL='https://cloudpss.net/'
#获取算例及拟扫描的元件的参数
simulation_id='671'
component_key='component_thermal_load_4'
parameter_name='LocalPressureDropCoe'
#设置扫描参数的起始值、终止值及扫描步长
start_value=10
end_value=10000
step_size=2000
#选择目标元件的输出结果用于绘图
compID = f'/component_thermal_load_4'
labelName ='质量流量(kg/s)'
traceName='质量流量'
#调用参数扫描方法
plot_parameter_scan(simulation_id, component_key, parameter_name, start_value, end_value, step_size)
```
## 代码的部分说明
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
## 调用方法说明
1. 根据研究目标和问题，**选择拟扫描的元件参数**。可以选择单一参数进行扫描，也可以选择两个参数进行组合扫描。
2. 确定要进行参数扫描的**参数范围**，选择扫描**参数的始末值**，**扫描步长**。
3. 选择所关注的**目标元件的模拟结果数据**。
4. 调用扫描方法
 ### 调用代码
 ```python
 # 调用示例
#设置用户token及平台网址
Your_token='eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjM0LCJ1c2VybmFtZSI6ImxpdXNodWFpIiwic2NvcGVzIjpbXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzIzNzkzMjkxLCJpYXQiOjE2OTI2ODkyOTF9.PTmSgvh0wrfDnRCy3mU0tZAo3ByO2Zb717wcE4ujJnZJn_y-zk7IYEo9w2G1SpeeWHu5-16CnhWvFgY6aK7Lbg'
Your_URL='https://cloudpss.net/'
#获取算例及拟扫描的元件的参数
simulation_id='671'
component_key='component_thermal_load_4'
parameter_name='LocalPressureDropCoe'
#设置扫描参数的起始值、终止值及扫描步长
start_value=10
end_value=10000
step_size=2000
#选择目标元件的输出结果用于绘图
compID = f'/component_thermal_load_4'
labelName ='质量流量(kg/s)'
traceName='质量流量'
#调用参数扫描方法
plot_parameter_scan(simulation_id, component_key, parameter_name, start_value, end_value, step_size)
 ```  
 ## 调用过程所需信息的获取方法
### 平台的网址
使用时需要将 `https://cloudpss.net/` 替换为用户当前使用的平台网址地址。
### Token的获取
`Token`  的申请详见 [setToken用户认证](../sdknew/../interface/settoken/index.md) 帮助文档。
### 算例id的获取
使用时需要将 `671` 替换为用户当前使用的算例。算例 `ID` 可通过 `URL` 地址获取，如在 `https://cloudpss.net/ieslab/ies/header/data/weather/map?simu_id=1589` 中，`1589` 即为当前的算例的 `ID`。 
![](./图片1.png )
### 元件 Key 的获取
元件的 `Key` 可以通过查询元件表获取。如 `采暖制冷负荷-1` 的元件 `ID` 为 `thermalload_4`。
![](./图片2.png )
![](./图片3.png )
### 参数名称的获取
**点击元件显示参数表，将鼠标悬停到参数名称上**，会自动弹出一个小窗格，其中**绿色字体**即为代码中所需的关于参数名称的信息。
![](./图片4.png )
### 结果的获取
进入结果展示界面，如下图中的 `labelName` 为`功率(kW)`、`相角(deg)`、`电压(kV)`，`traceName` 为`有功功率`、`无功功率`。
![](./图片5.png )
## 时间断面的参数扫描 
### 时间断面的参数扫描代码展示
```python
import os
import cloudpss
import time
import numpy as np
import matplotlib.pyplot as plt
from scipy.interpolate import griddata

def parameter_scan( your_component_key_1,  parameter_name_1=None, start_value_1=None, end_value_1=None, step_size_1=None,your_component_key_2=None, parameter_name_2=None, start_value_2=None, end_value_2=None, step_size_2=None):
    # 设置API访问令牌和API地址
    cloudpss.setToken(Your_token)
    os.environ['CLOUDPSS_API_URL'] = Your_URL

    # 获取模型对象
    iesProject = cloudpss.IESLabSimulation.fetch(simulation_id)

    # 创建空列表，用于存储参数取值和相应结果
    parameter_values_1 = []
    parameter_values_2 = []
    result_values = []

    if your_component_key_2 is None or parameter_name_2 is None:
        # 单参数扫描
        for value_1 in np.arange(start_value_1, end_value_1+1, step_size_1):
            # 修改参数值
            model = iesProject.model
            thermalLoad=model.getComponentByKey(your_component_key_1)
            thermalLoad.args[parameter_name_1] = str(value_1)
          # 仿真计算测试       
            runner = iesProject.run()
            while not runner.status():
                print('running', flush=True)
                time.sleep(1)
            print('计算完成')
            ies_result = runner.result       
            plot_data = ies_result.getPlotData(compID, labelName)[traceName]['y'][12]
            # 将参数取值和结果添加到列表中
            parameter_values_1.append(value_1)
            result_values.append(plot_data)
        # 将参数列表转换为NumPy数组
        parameter_array_1 = np.array(parameter_values_1)
        result_array = np.array(result_values)

        # 插值处理
        parameter_interp = np.linspace(start_value_1, end_value_1, 100)
        result_interp = griddata(parameter_array_1, result_array, parameter_interp, method='cubic')

        # 绘制曲线图
        plt.plot(parameter_interp, result_interp)
        plt.xlabel(parameter_name_1)
        plt.ylabel('Result')
        plt.title(f'Parameter Scan: {parameter_name_1}')
        plt.show()

    else:
        # 双参数扫描
        for value_1 in np.arange(start_value_1, end_value_1+1, step_size_1):
            for value_2 in np.arange(start_value_2, end_value_2+1, step_size_2):
                # 修改参数值
                model = iesProject.model
                thermalLoad=model.getComponentByKey(your_component_key_1)
                thermalLoad.args[parameter_name_1] = str(value_1)
                thermalLoad=model.getComponentByKey(your_component_key_2)
                thermalLoad.args[parameter_name_2] = str(value_2)
              # 仿真计算测试       
                runner = iesProject.run()
                while not runner.status():
                    print('running', flush=True)
                    time.sleep(1)
                print('计算完成')
                ies_result = runner.result                 

                # 示例：使用 getPlotData 方法
                plot_data = ies_result.getPlotData(compID, labelName)[traceName]['y'][12]
                parameter_values_1.append(value_1)
                parameter_values_2.append(value_2)
                result_values.append(plot_data)

        # 将参数列表转换为NumPy数组
        parameter_array_1 = np.array(parameter_values_1)
        parameter_array_2 = np.array(parameter_values_2)
        result_array = np.array(result_values)

        # 创建网格点
        parameter_grid_1, parameter_grid_2 = np.meshgrid(np.linspace(start_value_1, end_value_1, 100), np.linspace(start_value_2, end_value_2, 100))

        # 使用插值函数进行插值
        result_interp = griddata((parameter_array_1, parameter_array_2), result_array, (parameter_grid_1, parameter_grid_2), method='cubic')

        # 创建曲面图
        fig = plt.figure()
        ax = fig.add_subplot(111, projection='3d')
        ax.plot_surface(parameter_grid_1, parameter_grid_2, result_interp, cmap='rainbow', edgecolor='none')
        ax.set_xlabel(parameter_name_1)
        ax.set_ylabel(parameter_name_2)
        ax.set_zlabel('Result')
        plt.title(f'Parameter Scan: {parameter_name_1} vs {parameter_name_2}')
        plt.show()
        
# 调用示例
#设置用户token及平台网址
Your_token='eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjM0LCJ1c2VybmFtZSI6ImxpdXNodWFpIiwic2NvcGVzIjpbXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzIzNzkzMjkxLCJpYXQiOjE2OTI2ODkyOTF9.PTmSgvh0wrfDnRCy3mU0tZAo3ByO2Zb717wcE4ujJnZJn_y-zk7IYEo9w2G1SpeeWHu5-16CnhWvFgY6aK7Lbg'
Your_URL='https://cloudpss.net/'

#单参数调用示例
#获取算例及拟扫描的元件的参数
simulation_id='671'
your_component_key_1='component_thermal_load_4'
parameter_name_1='LocalPressureDropCoe'
#设置扫描参数的起始值、终止值及扫描步长
start_value_1 = 0
end_value_1 = 90
step_size_1 = 10
#选择目标元件的输出结果用于绘图
compID = f'/component_thermal_load_4'
labelName ='质量流量(kg/s)'
traceName='质量流量'
parameter_scan( your_component_key_1, parameter_name_1, start_value_1, end_value_1, step_size_1)


# # # 双参数示例调用
# #获取算例及拟扫描的元件的参数
# simulation_id='671'
# your_component_key_1 = 'component_photovoltaic_1'
# parameter_name_1 = 'DeviceNumber'
# start_value_1 = 10
# end_value_1 = 15
# step_size_1 = 1
# your_component_key_2 = 'component_photovoltaic_1'
# parameter_name_2 = 'DipAngle'
# start_value_2 = 0
# end_value_2 = 90
# step_size_2 = 10
# #选择目标元件的输出结果用于绘图
# compID = f'/component_photovoltaic_1'
# labelName ='功率(kW)'
# traceName='有功功率'
# parameter_scan( your_component_key_1, parameter_name_1, start_value_1, end_value_1, step_size_1,your_component_key_2, parameter_name_2, start_value_2, end_value_2, step_size_2)



```
>时间断面的参数扫描的代码实现逻辑与轨迹参数扫描基本相同。**主要不同的是轨迹参数扫描获取了模拟时间内全部的数据，单双参数扫描通过切片只获取了某个时间断面的数据**。如需获取其它时间断面的结果，可对其进行相应的修改。如下述代码是获取**时间断面为 12h** 的模拟结果数据。需要注意的是，**获取的时间断面取值需要在模拟时间内**。
```python
        # 示例：使用 getPlotData 方法
        plot_data = ies_result.getPlotData(compID, labelName)[traceName]['y'][12]
```
## 扫描结果展示
### 单参数扫描
![](./图片6.png )
### 双参数扫描
![](./图片7.png )
### 单参数时间轨迹扫描
![](./图片8.png )
