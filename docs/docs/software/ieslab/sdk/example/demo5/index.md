---
title: 案例 5 获取规划结果
description: IESLab SDK 案例 5
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
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJtb2RlbDo5ODM2NyIsImZ1bmN0aW9uOjk4MzY3IiwiYXBwbGljYXRpb246MzI4MzEiXSwicm9sZXMiOlsiYWRtaW4iXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzQyMTIwODg2LCJub3RlIjoiU0RL5rWL6K-VIiwiaWF0IjoxNzExMDE2ODg2fQ.ntQdnpLMIoDTf6xaZvWXsA_dXDeaCppqKLLqj7UcpjXhVCLBH1xIv74XNtINyqahltFisOTbS9jlVUatdivR1A')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'http://10.101.10.40/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('274')


    # 启动计算
    runner = iesplanProject.iesLabPlanRun()
    last_plan_num = 0
    while not runner.status():
        # print('running', flush=True)
        time.sleep(1)
        plan_result = runner.result
        plan_num = plan_result.GetPlanNum()
        if plan_num > last_plan_num:
            for plan_id in range(last_plan_num, plan_num):
                print("优化方案", plan_id + 1)
                plan_info = plan_result.GetPlanInfo(plan_id)
                print("基础信息:", plan_info)
                plan_config = plan_result.GetPlanConfiguration(plan_id)
                print("配置信息:", plan_config)
                plan_config = plan_result.GetComponentResult(plan_id, "/component_photovoltaic_2", "1月典型日1")
                print("运行信息:", plan_config)
                print("=" * 30)
            last_plan_num = plan_num
    print('计算完成')
```

