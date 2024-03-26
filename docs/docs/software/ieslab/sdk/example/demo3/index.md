---
title: 案例 3 批量仿真+结果二次处理
description: IESLab SDK 案例 3 批量仿真+结果二次处理
sidebar_position: 30
---

### 1.1 案例概述
有什么功能，在什么场景使用
数据管理模块对应一个 Python 类 `DataManageModel` ，类实例与具体的算例（`Model` 类的实例）相绑定，本案例将介绍如何使用该模块的各个接口方法。通过本案例，您将学会如何获取、添加、更新和删除数据项。这些功能可以在需要对数据项进行管理和操作的场景中使用，如数据处理、模型建立等。

### 1.2 代码解析
#### 准备工作
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="feature1" label="添加数据">

</TabItem>
<TabItem value="feature2" label="删除数据">


</TabItem>
<TabItem value="feature3" label="新增数据">



</TabItem>
<TabItem value="feature4" label="获取数据">

若 BPA/PSASP 算例工程提供了地理信息接线图文件，算例转换工具可根据地理信息图，按照场站信息对元件进行自动分组和布局，并将低压场站合并至相应高压母线的场站内，自动生成 CloudPSS 上的可视化算例。


</TabItem>
<TabItem value="feature5" label="一键脱敏">


</TabItem>
</Tabs>
### 1.3 结果展示
如案例有结果，将进行结果的展示

### 1.4 常见问题
总结常见的问题，以及注意事项
Q: 如何处理数据项更新失败的情况？

A: 可以通过检查返回的更新结果来确定是否更新成功，若失败可尝试重新更新或检查数据格式是否符合要求。
Q: 是否可以批量删除数据项？

A: 目前接口暂不支持批量删除数据项，每次只能删除单个数据项。

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