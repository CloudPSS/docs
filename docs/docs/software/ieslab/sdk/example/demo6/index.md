---
title: 案例 6 方案评估
description: IESLab SDK 案例 6 方案评估
sidebar_position: 30
---

  
### 1.1 案例概述
该案例主要演示了如何通过IESLabSDK对规划设计项目进行评估和分析,涵盖了从获取项目信息到查看各类评估报告的完整流程。如财务评估、环保评估和能效评估等。
通过本案例，您可以学习到以下的功能和方法在实际案例中的应用：
iesplanProject.evaluationModel.GetFinancialParams()获取指定方案的财务评估参数信息。
iesplanProject.iesLabEvaluationRun()方法启动指定方案的评估计算,可指定评估类型如财务评估、环保评价、能效评价等。
plan_result.GetFinancialResult()获取指定方案的特定类型财务评估表格。
plan_result.GetEnvironmentalEvaluationResult()获取指定方案的环保评价结果。
plan_result.GetEnergyEvaluationResult()获取指定方案的能效评价结果。
### 1.2 代码解析
在进行评估前，您需要确保有规划的方案。如何进行调用规划请参考案例5，准备工作。
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
详解：这段代码首先通过input()函数获取用户输入的方案ID，然后使用GetFinancialParams(planID)方法获取该方案的财务评估参数信息，并打印出来。
注意事项：
确保输入的方案ID是存在的，否则可能无法获取到参数信息。
这段代码用于启动对指定方案ID的评估计算。首先获取方案ID，然后调用iesLabEvaluationRun(planID)方法启动评估。获取指定优化方案下的特定类型（如"利润与利润分配"）的财务评估表格，并打印出来。
使用plan_result.GetFinancialResult("利润与利润分配", planID)获取指定方案的特定类型（"利润与利润分配"）的财务评估表格。
```python
    # 获取指定方案的财务评估参数信息
    planID = input("请输入要查看的方案ID：")
    evaluation_info = iesplanProject.evaluationModel.GetFinancialParams(planID)
    print("该方案的财务评估参数信息:", evaluation_info)  
```
输入要进行环保评价的方案ID。使用iesplanProject.iesLabEvaluationRun(planID, '环保评价')启动对指定方案的环保评价计算。评估计算完成后，通过runner.result获取评估结果对象。
使用plan_result.GetEnvironmentalEvaluationResult(planID)获取指定方案的环保评价结果。

```python
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '环保评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的环保评价:
    env_result = plan_result.GetEnvironmentalEvaluationResult(planID)
    print("该方案的环保评价:", env_result)    
```
输入要进行能效评价的方案ID。使用iesplanProject.iesLabEvaluationRun(planID, '能效评价')启动对指定方案的能效评价计算。评估计算完成后，通过runner.result获取评估结果对象。
使用plan_result.GetEnergyEvaluationResult(planID)获取指定方案的能效评价结果。
```python
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '能效评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的能效评价:
    ene_result = plan_result.GetEnergyEvaluationResult(planID)
    print("该方案的能效评价:", ene_result) 
```
### 1.3 结果展示
如案例有结果，将进行结果的展示
### 1.4 常见问题
Human: 我想问一下，在代码中，如果我想获取多个方案的评估结果，应该怎么做？ Human: 比如说我有10个方案，我想一次性获取这10个方案的评估结果，应该怎么修改代码？ Claude-3-Sonnet: 如果您想一次性获取多个方案的评估结果,可以使用循环来遍历所有需要评估的方案ID,并分别启动评估计算和获取结果。
如何获取多个方案的评估结果？

答：如果您想一次性获取多个方案的评估结果，可以通过循环遍历所有需要评估的方案ID，并对每个ID分别进行评估计算和结果获取。您可以创建一个方案ID列表，然后使用for循环逐一处理。
如何确保输入的方案ID是有效的？

答：在进行评估之前，确保您输入的方案ID在平台上是存在的。您可以通过平台提供的界面或API查询已有的方案ID。输入无效的方案ID将导致评估失败。
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
    # 获取指定方案的财务评估参数信息
    planID = input("请输入要查看的方案ID：")
    evaluation_info = iesplanProject.evaluationModel.GetFinancialParams(planID)
    print("该方案的财务评估参数信息:", evaluation_info)    

    # 启动计算，评估指定方案
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID)
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    # 获取优化方案结果
    plan_result = runner.result

    # 获取指定优化方案的特定类型的财务评估表格:
    financial_result = plan_result.GetFinancialResult("利润与利润分配", planID)
    print("该方案的财务评估表格:", financial_result) 
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '环保评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的环保评价:
    env_result = plan_result.GetEnvironmentalEvaluationResult(planID)
    print("该方案的环保评价:", env_result)    
    planID = input("请输入要进行评估的方案ID：")
    runner = iesplanProject.iesLabEvaluationRun(planID, '能效评价')
    while not runner.status():
        print('running', flush=True)
        time.sleep(1)
    print('评估完成')
    plan_result = runner.result
    # 获取当前结果类对应的优化方案下的能效评价:
    ene_result = plan_result.GetEnergyEvaluationResult(planID)
    print("该方案的能效评价:", ene_result)  
```

