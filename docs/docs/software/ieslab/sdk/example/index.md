---
title: SDK 案例
description: IESLab SDK 案例
sidebar_position: 30
---

import DocCardList from '@theme/DocCardList';

<DocCardList />

## 案例  
### 1.1 案例概述
简单说明案例背景和目的，能够实现的功能
### 1.模型实验
可以帮助研究人员快速了解模型的行为和性能，以及**探索不同参数对模型输出和关注的指标的影响**，帮助研究人员进行模型和系统的优化。
### 2.敏感度分析
用于**评估模型输出对于参数变化的敏感程度的方法**。通过参数敏感度分析，可以了解模型输出对于不同参数的变化的响应情况，进而确定哪些参数对于模型输出的影响最大。
## 支持的功能
要实现参数扫描功能。常规方法是手动修改参数执行多次仿真，逐个记录结果并绘图，以探索参数变化对关注的指标的影响。这个方法操作复杂且效率低下。借助  `CloudPSS SDK`，利用 Python 脚本修改参数，批量调用系统仿真内核，可以快速完成上述功能。且此方法可以复用，**仅通过修改算例 `ID`、参数的名称、结果的 `lableName` 与 `traceName` 就可以实现不同的算例、全部的参数和所关注的结果的参数扫描**。极大的方便用户进行使用。
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

### 1.4 完整代码
附上案例完整代码，并说明使用该案例代码的注意事项
