---
title: 案例 4 规划典型日生成
description: IESLab SDK 案例 4 规划典型日生成
sidebar_position: 30
---

  
### 1.1 案例概述
本案例旨在展示如何利用IES Lab平台典型日生成模块，方便快速生成综合能源系统规划的典型日生成。您可以通过编写Python脚本自动化地获取特定项目的典型日、辐射强度、环境温度、负荷等数据。通过本案例，您可以学习到以下功能和方法在实际案例中的使用：
cloudpss.IESLabPlan.fetch()：获取指定项目的详细信息。
iesLabTypicalDayRun()：执行典型场景生成模块的计算。
GetTypicalDayCurve():获取指定条件下的典型日曲线。
GetTypicalMonthCurve()：获取指定条件下的典型月曲线。

### 1.2 代码解析
详细解释案例代码的关键步骤，帮助用户理解案例代码
同样是一些常规的算例前期准备工作。包括导入所需的模块、设置访问令牌、设置API URL、获取指定项目的信息。这里需要注意的是cloudpss.IESLabPlan.fetch()与前面案例的cloudpss.IESLabPlan.fetch()类名不同，但功能相同，都是用于获取算例。使用此方法需要注意。
```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJtb2RlbDo5ODM2NyIsImZ1bmN0aW9uOjk4MzY3IiwiYXBwbGljYXRpb246MzI4MzEiXSwicm9sZXMiOlsiYWRtaW4iXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzQyMTIwODg2LCJub3RlIjoiU0RL5rWL6K-VIiwiaWF0IjoxNzExMDE2ODg2fQ.ntQdnpLMIoDTf6xaZvWXsA_dXDeaCppqKLLqj7UcpjXhVCLBH1xIv74XNtINyqahltFisOTbS9jlVUatdivR1A')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'http://10.101.10.40/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch(207)
```
启动典型场景生成模块的计算。等待计算完成。这一步可能需要一些时间,取决于计算的复杂度。
```python
    #典型场景生成模块计算测试
    typical_runner = iesplanProject.iesLabTypicalDayRun()
    while not typical_runner.status():
        pass
    print('计算完成')
    iesplan_result = typical_runner.result
```
通过iesplan_result.GetTypicalDayCurve(0,'电负荷')获取第一个典型日的电负荷曲线数据。参数0表示第一个典型日,'电负荷'指定要获取的曲线类型。通过iesplan_result.GetTypicalMonthCurve(12,'电负荷')获取12月的典型日电负荷曲线数据。参数12表示12月,'电负荷'指定要获取的曲线类型。
```python
    # 综合能源典型场景的典型日曲线
    typical = iesplan_result.GetTypical()
    typical_num = iesplan_result.GetTypicalDayNum()
    typical_info = iesplan_result.GetTypicalDayInfo(0)
    typical_curve = iesplan_result.GetTypicalDayCurve(0,'电负荷')
```
获取指定月份（在此例中为12月）的典型日电负荷曲线数据。iesplan_result.GetTypicalMonth方法可以获取到所有月份的信息。
```python
    # 综合能源典型场景某月的典型日曲线
    typical_month = iesplan_result.GetTypicalMonth()
    typical_month12 = iesplan_result.GetTypicalMonthNum(12)
    typical_monthcurve = iesplan_result.GetTypicalMonthCurve(12,'电负荷')  
```
### 1.3 结果展示

### 1.4 常见问题
Q3:请求不存在的典型日信息（例如，索引超出实际数量）。月份参数错误或请求的曲线类型不存在。
Q3:
Q3: 如何获取除了电负荷之外的其他类型的典型日曲线数据？
A3: 通过修改GetTypicalDayCurve()和GetTypicalMonthCurve()方法中的曲线类型参数，您可以获取到不同类型的曲线数据。具体可用的曲线类型，请参考IES Lab平台的API文档。例如，如果您想获取气温曲线，您可能需要将'电负荷'替换为相应的曲线类型标识符。
Q6: 如果我需要获取一个项目中所有典型月的曲线数据，应该如何操作？
A6: 您可以通过循环遍历所有可能的月份（1至12），并使用GetTypicalMonthCurve()方法为每个月份获取曲线数据。请确保在循环中正确处理任何可能的异常或错误，比如对于没有典型日数据的月份。
问题3:如何获取不同类型的曲线数据,比如辐射强度或环境温度? 答案:您可以将GetTypicalDayCurve()或GetTypicalMonthCurve()的第二个参数更改为其他类型,如'辐射强度'或'环境温度'。可用的曲线类型请查阅CloudPSS API文档，查询可支持的类型。
如果想获取第二个典型日或第三个典型月的数据,应该如何修改代码? 答案:对于GetTypicalDayInfo()和GetTypicalDayCurve()函数,将参数从0改为1或2即可获取第二个或第三个典型日的数据。对于GetTypicalMonthNum()和GetTypicalMonthCurve()函数,将参数从12改为其他月份的数字即可。

### 1.5 完整代码
```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJtb2RlbDo5ODM2NyIsImZ1bmN0aW9uOjk4MzY3IiwiYXBwbGljYXRpb246MzI4MzEiXSwicm9sZXMiOlsiYWRtaW4iXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzQyMTIwODg2LCJub3RlIjoiU0RL5rWL6K-VIiwiaWF0IjoxNzExMDE2ODg2fQ.ntQdnpLMIoDTf6xaZvWXsA_dXDeaCppqKLLqj7UcpjXhVCLBH1xIv74XNtINyqahltFisOTbS9jlVUatdivR1A')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'http://10.101.10.40/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch(207)

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
    typical_curve = iesplan_result.GetTypicalDayCurve(0,'电负荷')

    # 综合能源典型场景某月的典型日曲线
    typical_month = iesplan_result.GetTypicalMonth()
    typical_month12 = iesplan_result.GetTypicalMonthNum(12)
    typical_monthcurve = iesplan_result.GetTypicalMonthCurve(12,'电负荷')  
```

