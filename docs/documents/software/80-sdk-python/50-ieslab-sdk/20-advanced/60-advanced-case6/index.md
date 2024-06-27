---
title: 规划典型日生成
description: 规划典型日生成

tags:
- sdk

---

## 功能介绍
规划典型日生成功能是综合能源系统规划与设计中的重要模块。通过该功能，用户可以生成并获取综合能源系统在典型日和典型月的电负荷曲线数据，从而为能源系统的优化和调度提供有力支持。以下是该功能的详细介绍：

## 使用说明

### 用到的 API
获取典型日数量
使用 GetTypicalDayNum() 方法可以获取生成的典型日数量。这有助于用户了解系统在规划过程中识别出的典型日总数。
通过 GetTypicalDayInfo(index) 方法，用户可以获取指定索引的典型日的详细信息。这包括了该典型日的日期、特征等信息。
GetTypicalDayCurve(index, '电负荷') 方法允许用户获取指定典型日的电负荷曲线数据。这对于分析能源负荷在典型日的变化规律非常有用。
使用 GetTypicalMonth() 方法可以获取综合能源系统的典型月信息。这有助于用户了解全年中哪些月份被识别为典型月。
通过 GetTypicalMonthNum(month) 方法，用户可以获取指定月份的典型日数量。例如，获取12月份的典型日数量。
GetTypicalMonthCurve(month, '电负荷') 方法允许用户获取指定月份的典型日电负荷曲线数据。这对于分析全年中某个月份的能源负荷变化规律非常有用。

### 调用方法


## 案例介绍
**本案例旨在展示如何利用 IESLab 平台典型日生成模块，方便快速生成综合能源系统规划的典型日生成**。您可以通过编写 Python 脚本自动化地获取指定项目的典型日数据，如辐射强度、环境温度、负荷数据等。通过本案例，您可以学习到以下功能和方法在实际案例中的使用：
- [**cloudpss.IESLabPlan.fetch()：**](https://sdk-directory.com/api/cloudpss/setToken) 获取指定项目的详细信息。
- [**iesLabTypicalDayRun()：**](https://sdk-directory.com/api/cloudpss/setToken) 执行典型场景生成模块的计算。
- [**GetTypicalDayCurve()：**](https://sdk-directory.com/api/cloudpss/setToken) 
 获取指定条件下的典型日曲线。
- [**GetTypicalMonthCurve()：**](https://sdk-directory.com/api/cloudpss/setToken)获取指定条件下的典型月曲线。

### 代码解析
首先进行算例准备工作。包括设置网址与账户 `token`、获取获取算例，详细解释参考案例 1 代码解析。
:::warning
这里需要注意的是 `cloudpss.IESLabPlan.fetch()` 与前面案例1、2、3的`cloudpssIESLabSimulation.fetch()` 类名不同，但功能相同，都是用于获取算例。使用此方法时需要注意。
:::
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
通过 `iesplanProject.iesLabTypicalDayRun()` 启动典型日生成模块的计算，耐心等待计算完成。
```python
    #典型场景生成模块计算测试
    typical_runner = iesplanProject.iesLabTypicalDayRun()
    while not typical_runner.status():
        pass
    print('计算完成')
    iesplan_result = typical_runner.result
```
使用 `iesplan_result.GetTypical()`、`iesplan_result.GetTypicalDayNum()` 方法分别获取所有典型日信息以及典型日的数量。通过 `iesplan_result.GetTypicalDayCurve(0,'电负荷')` 获取第一个典型日的电负荷曲线数据。参数 `0` 表示第一个典型日,`'电负荷'` 指定要获取的曲线类型。通过 `iesplan_result.GetTypicalMonthCurve(12,'电负荷')` 获取 12 月的典型日电负荷曲线数据。参数 `12` 表示12月,`'电负荷'` 指定要获取的曲线类型。
```python
    # 综合能源典型场景的典型日曲线
    typical = iesplan_result.GetTypical()
    typical_num = iesplan_result.GetTypicalDayNum()
    typical_info = iesplan_result.GetTypicalDayInfo(0)
    typical_curve = iesplan_result.GetTypicalDayCurve(0,'电负荷')
```
`iesplan_result.GetTypicalMonth` 方法可以获取到所有月份的典型日信息。通过 `iesplan_result.GetTypicalMonthNum(12)` 获取指定月份（在此例中为12月）的典型日数量，电负荷曲线数据。通过 `iesplan_result.GetTypicalMonthCurve(12,'电负荷')` 获取指定月份的典型日的电负荷曲线数据。 
```python
    # 综合能源典型场景某月的典型日曲线
    typical_month = iesplan_result.GetTypicalMonth()
    typical_month12 = iesplan_result.GetTypicalMonthNum(12)
    typical_monthcurve = iesplan_result.GetTypicalMonthCurve(12,'电负荷')  
```

### 结果展示

由于结果过长，在此只展示 `iesplan_result.GetTypicalDayCurve(0,'电负荷')` 的输出结果。
```python
计算完成
1月典型日1电负荷曲线： [39.60529993363616, 35.71495216067563, 32.56108447836463, 31.616657068002272, 29.329236551161326, 30.17835477332198, 31.824604387715084, 35.74094557563972, 43.417667461704404, 48.63367939783412, 49.56077786488708, 49.283514771936645, 47.28202181970084, 44.578706663434275, 40.29845766601221, 45.670430091926555, 46.814140350347024, 48.31309394661021, 49.16221216877085, 46.623521973943596, 47.524627026032455, 45.48847618717783, 41.00027987004295, 35.446353539379906]
```

## 调试技巧
打印详细的中间结果
在获取和处理数据时，打印详细的中间结果，帮助定位问题。例如，打印典型日和典型月的详细信息。
验证数据完整性
确保获取的数据是完整且合理的。例如，检查曲线数据的长度和内容。
7. 检查数据类型和范围
确保请求的数据类型和范围是正确的。例如，检查曲线类型标识符是否存在，索引是否超出范围。
2. 检查项目获取
在调用 fetch 方法获取项目时，打印返回的项目对象，确保项目 ID 是正确的，并且您有权限访问该项目。


## 常见问题

**Q1:请求的数据不存在是什么原因呢？**  
A1:请仔细检查您的系统中是否包含此数据，例如您的系统中元件没有绑定负荷数据，或者数据管理模块没有创建相应的数据卡，则会出现数据不存在的情况。此外，您还需要仔细核查索引是否超出范围以及请求的曲线类型标识符是否存在。  
**Q2:如何获取不同类型的曲线数据,比如辐射强度或环境温度?**  
A2:您可以将 `GetTypicalDayCurve()` 或 `GetTypicalMonthCurve()` 的第二个曲线类型参数更改为其他类型,如'辐射强度'或'环境温度'。可用的曲线类型标识符请查阅CloudPSS SDK python文档。 

## 完整代码
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