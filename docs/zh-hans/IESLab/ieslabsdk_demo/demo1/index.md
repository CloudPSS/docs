---
title: 案例 1 基本使用方法
author: pcp
category: 400
order: 100
---


**本实例代码介绍`cloudPSS-IESLab SDK` 的基本使用方法, 具体包括:**

1. `token`申请

2. 通过算例`id`获取算例文件

3. 对数据管理模块的数据进行查询获取、修改、更新及删除

4. 启动仿真计算并获取结果文件

5. 启动规划设计典型场景生成程序，并获取典型场景的结果曲线

**案例代码如下**
```python
import time
import os
import cloudpss
if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')

    # 仿真测试——获取指定 simuid 的项目
    iesProject = cloudpss.IESLabSimulation.fetch('628')
    #获取某时间段的气象数据
    data_Atmos1 = iesProject.dataManageModel.GetAtmosData("2021-01-01", "2021-02-01")
    #数据管理模块中的数据获取、修改、更新及删除
    data_PV = iesProject.dataManageModel.GetItemList('光伏')
    trueAdd = iesProject.dataManageModel.AddDataItem('光伏',data_PV[0])
    data_PV[0]['manufacturer'] = 'PV720'
    trueUpdate = iesProject.dataManageModel.UpdateDataItem(data_PV[1]['id'],data_PV[0])
    trueDelete = iesProject.dataManageModel.DeleteDataItem(data_PV[-1]['id'])

    # 仿真计算测试
    runner = iesProject.run()
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('计算完成')
    ies_result = runner.result
    
    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('182')
    dataplan_PV = iesplanProject.dataManageModel.GetItemList('光伏')
    #典型场景生成模块计算测试
    typical_runner = iesplanProject.iesLabTypicalDayRun()
    while not typical_runner.status():
        pass
    print('计算完成')
    iesplan_result = typical_runner.result

    # 综合能源典型场景的典型日曲线
    typical = iesplan_result.GetTypical()
    typical_num = iesplan_result.GetTypicalDayNum()
    typical_info = iesplan_result.GetTypicalDayInfo(0)
    typical_curve = iesplan_result.GetTypicalDayCurve(0,'辐照强度')

    # 综合能源典型场景某月的典型日曲线
    typical_month = iesplan_result.GetTypicalMonth()
    typical_month12 = iesplan_result.GetTypicalMonthNum(12)
    typical_monthcurve = iesplan_result.GetTypicalMonthCurve(12,'辐照强度')
```