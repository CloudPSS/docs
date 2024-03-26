---
title: 案例 5 获取规划结果
description: IESLab SDK 案例 5
sidebar_position: 30
---

  
### 1.1 案例概述
该案例主要用于演示如何通过IESLab SDK进行综合能源系统的规划设计,获取优化方案并查看各种详细信息。您也可以在本案例的基础上，比较多个优化方案的结果。将获取的结果进行二次处理，如将每个方案的关键指标如装机容量、投资成本、运行成本等提取出来,汇总到一个表格或数据结构中,然后进行对比分析。通过本案例，您可以学习到以下功能和方法在实际案例中的使用：
iesLabPlanRun()方法启动规划设计计算过程。
plan_result.GetPlanNum()方法用于获取优化方案的数量。
plan_result.GetPlanInfo()方法用于获取指定优化方案的基础信息。
plan_result.GetPlanConfiguration()方法用于获取指定优化方案的配置信息。
plan_result.GetComponentResult()方法用于获取指定优化方案中特定组件的运行信息。
### 1.2 代码解析
准备工作
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
```
iesplanProject.iesLabPlanRun()启动规划设计计算过程。runner.result()获取计算结果对象。使用plan_result.GetPlanNum()获取优化方案的数量。
```python
    # 启动计算
    runner = iesplanProject.iesLabPlanRun()
    last_plan_num = 0
    while not runner.status():
        # print('running', flush=True)
        time.sleep(1)
        plan_result = runner.result
        plan_num = plan_result.GetPlanNum()
```
当发现新的优化方案时，遍历并打印每个方案的基础信息、配置信息和特定组件的运行信息。使用GetPlanInfo()、GetPlanConfiguration()和GetComponentResult()分别获取优化方案的基础信息、配置信息和组件运行信息。（可以考虑加入图表，看是获取到了哪里的信息。）
```python
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
### 1.3 结果展示
如案例有结果，将进行结果的展示
### 1.4 常见问题
问题1：获取到的优化方案数量为0，这表示什么？如何解决？

答案1： 如果plan_result.GetPlanNum()返回0，这可能表示没有找到任何优化方案，或者计算过程中存在问题。首先，确认您的输入数据和配置是否正确无误。然后，检查CloudPSS平台是否有任何关于计算失败的日志或错误信息。如果问题仍不明确，考虑与平台的技术支持联系寻求帮助。

问题2:GetComponentResult()方法的组件名称和典型日名称怎么获取? 
答案2:组件名称可以在项目的组件列表中查看获取,注意名称两边要加上斜杠,如"/component_photovoltaic_2"。典型日名称可在规划典型日生成模块结果中进行查看,如"1月典型日1"。（加入图片）


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

