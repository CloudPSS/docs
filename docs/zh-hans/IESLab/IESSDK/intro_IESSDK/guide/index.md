---
title: CloudPSS SDK 快速入门
type: examples
author: pcp
category: 200
order: 200
---

:::info
**本例以通过 Python 脚本对 3 机 9 节点标准测试系统算例进行潮流计算和电磁暂态仿真为例，帮助用户快速入门 CloudPSS SDK 的使用。**
:::

## 1. 潮流计算内核调用

首先，在 CloudPSS Simstudio 中打开[ 3 机 9 节点标准测试系统算例](https://cloudpss.net/model/songyankan/3_Gen_9_Bus)。

![3机9节点标准测试系统算例](./1.png " 3 机 9 节点标准测试系统算例")

点击`运行`标签页，在计算方案中选择默认的**潮流计算方案1**。

![选择潮流计算方案](./2-1.png "选择潮流计算方案")

点击`启动任务`运行仿真，在`结果`页面会生成潮流计算结果。

![潮流计算结果](./3-2.png "潮流计算结果")

:::tip
若要分析算例中 **Gen2** 发电机的有功出力与 **Bus2** 的电压相角之间的关系，常规方法是手动修改参数执行多次仿真，绘制出有功出力与电压相角的描点图。这个方法操作复杂且效率低下。借助 CloudPSS SDK，利用 Python 脚本修改参数，批量调用潮流计算内核，可以快速完成上述功能。
:::

### 示例代码

配置好 **Python** 开发环境，输入以下脚本。
```python
import sys,os
import cloudpss
import json
import time

if __name__ == '__main__':
    
    cloudpss.setToken('{token}')

    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
    
    # 获取指定 rid 的项目
    model = cloudpss.Model.fetch('model/songyankan/3_Gen_9_Bus')

    # 修改 Gen2 发电机有功功率
    comp = model.getComponentByKey('canvas_0_757')
    print(comp.args)
    comp.args['pf_P'] = '180'
    
    # 启动计算任务
    config = model.configs[0]  # 若未设置，则默认用model的第一个config（参数方案）
    job = model.jobs[0]  # 若未设置，则默认用model的第一个job（计算方案）
    runner = model.run(job,config)
    while not runner.status():
        logs = runner.result.getLogs()
        for log in logs:
            print(log)
        time.sleep(1)
    print('end')
    
    # 打印结果
    print(runner.result.getBranches())
    print(runner.result.getBuses())
```

:::tip
**地址与Token替换**  
```python 
os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
```
使用时需要将`'https://cloudpss.net/'`替换为用户当前使用的平台网址地址。

```python
cloud-pss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJ1bmtub3duIl0sInR5cGUiOiJTREsiLCJleHAiOjE2NTg1NjgzNDYsImlhdCI6MTYyNjk0MTQ1MX0.hDRBisqpd2bXzg5HZVoTVnxw2GmOAihY5HHALNpFs_gcLCL45Xt8rYKrCUq3CZKq-iM-mYfQvPgWIn2B_QCmUezHtUuRQw_nmBBLb5NMpIAiFJJiBFDGjBvzwBAINCbBFnr8zDxUvwHZMoAb3ed9VNJDqI_CTzB8Q3udTb10-TXs')
```
同时需要申请和修改 Token，替换`cloudpss.setToken`后的内容。Token 的申请和注销详见 [setToken用户认证](../sdknew/../interface/settoken/index.md)帮助文档。
:::

:::tip
**指定算例**  
```python
model = cloudpss.Model.fetch('model/UserName/ModelRID')
```
使用时需要将 `model/UserName/ModelRID` 替换为用户当前使用的算例。如在当前算例中，`model/songyankan/3_Gen_9_Bus` 表示用户 `songyankan` 下的 `3_Gen_9_Bus` 算例。

例如：若算例的 URL 为 `https://cloudpss.net/model/user/example#`，则代码中对应部分应替换为 `model/user/example`。
:::

:::tip
**定位元件**
```python
comp = model.getComponentByKey('canvas_0_757')
```
CloudPSS SDK 中，提供了 `getComponentByKey` 函数，用户可以通过元件的 `Key` 来定位算例中的某个元件。在 SimStudio 中，选中算例中的发电机 **Gen2**，此时浏览器地址栏变为`https://cloudpss.net/model/songyankan/3_Gen_9_Bus#/design/diagram/cells/canvas_0_757`，`canvas_0_757`即为发电机 **Gen2**的 Key。在每个算例中，元件 Key 是唯一的。
:::

:::tip
**获取或修改参数**
在定位元件后，即可获取并任意修改该元件的参数 `args`。此处，通过输出元件 `comp` 的全部参数 `args` 可知，元件参数是以字典的形式存储的。
```python
print(comp.args)
{'Name': 'Gen2', 'P': '=4', 'Smva': '=325', 'V': '=$Bus_2_Vbase / sqrt(3)', 'freq': '=50', 'R0': '=10000', 'ParamType': '0', 'ModelType': '0', 'Rs': '=0.000301', 'Xls': '=0', 'Xq': '=0.283875', 'Xd': '=0.283875', 'Rfd': '=0.000117219', 'Xlfd': '=0.047921256', 'Rkd': '=0.009822918', 'Xlkd': '=0.097868236', 'Rkqg': '=50000', 'Xlkqg': '=50000', 'RkqQ': '=0.005334267', 'XlkqQ': '=0.059027851', 'Rs_2': '=0.000301', 'Xls_2': '=0', 'Xd_2': '=0.283875', 'Xdp_2': '=0.041', 'Xdpp_2': '=0.028895', 'Xq_2': '=0.283875', 'Xqp_2': '=0.056603', 'Xqpp_2': '=0.028895', 'Td0p_2': '=9.01', 'Td0pp_2': '=0.045', 'Tq0p_2': '=0.956', 'Tq0pp_2': '=0.069', 'Control': '1', 'Tj': '=5', 'Dm': '=0', 'StartupType': '4', 'RampingTime': '=0.06', 'V_mag': 1, 'V_ph': 8.092582389805873, 'AP': 150, 'RP': 10.551261791343547, 's2m': '@S2M', 'l2n': '@L2N', 'BusType': '1', 'pf_P': '=150', 'pf_Q': '=100', 'pf_V': '=1', 'pf_Theta': '=0', 'pf_Vmin': '=0.001', 'pf_Vmax': '=10', `'pf_Qmin'`: '=-200', 'pf_Qmax': '=200', 's2m_o': '#initEx2', 'l2n_o': '#initGv2', 'Ef0_o': '#Ef02', 'Tm0_o': '#Tm02', 'wr_o': '#wr2', 'theta_o': '', 'loadangle_o': '', 'loadangle_so': '', 'VT_o': '#VT2', 'IT_o': '#IT2', 'PT_o': '#P2', 'QT_o': '#Q2', 'IT_inst': ''}
```
其中，`'pf_P': '=150'` 即代表 **Gen2** 元件 **Power Flow Data** 参数组中 **Injected Active Power** 的值，表示此 PV 节点输入系统的有功功率为 150MW。此处的赋值支持数字和表达式字符串。
```python
comp.args['pf_P'] = '180'
comp.args['pf_P'] = '=180'
comp.args['pf_P'] = 180
```
通过设置此 `pf_P` 参数即可修改 **Gen2**潮流计算中的注入有功功率。上述 3 条语句执行的效果相同。
:::

**运行**
```python
config = model.configs[0]
job = model.jobs[0]
runner = model.run(job,config)
```
上述语句中的 `model.configs` 即为 SimStudio 中相关算例的全部参数方案（从上到下从0开始编号），`model.jobs` 为全部计算方案（从上到下从 0 开始编号）。通过选择指定的参数方案和计算方案，执行 `model.run(job,config)` ，即可生成并执行以参数方案 `config` 和计算方案 `job` 的相应计算任务。

运行过程中，不断请求 `runner.status` 即可获得当前任务的计算状态（`False`对应进行中，`True` 对应运行结束）。


### 结果输出

潮流计算结果均保存在 `runner.result` 中。用户可查看 result 类的接口说明文档获取更多帮助。
```python
print(runner.result.getBranches())
print(runner.result.getBuses())
```
通过上述两条语句可得到母线（Buses）和线路（Branches）的潮流计算，其与 SimStudio 的结果页面展示的结果一致。

若需要输出表格中的某些单元格的数值，使用 Python 的切片操作获取即可。例如：
```python
Busesresult = runner.result.getBuses()
Vavalue = Busesresult[0]['data']['columns'][3]['data'][0]
print(Vavalue)
```
此时输出的数值即为此算例在 **Gen2** 输入功率为 **180MW** 时对应的 **Bus2** 的相角。

![输出单元格数值](./单个结果.png "输出单元格数值")

### 批量运行潮流
若使用 **for循环** 反复调用以上操作，在 150MW 到 200MW 之间改变 **Gen2** 的有功出力，可以得到对应母线 **Bus2** 的相角的变化曲线。

![批量运行绘制曲线](./绘制曲线.png "批量运行绘制曲线")

## 2. 电磁暂态计算内核调用

与调用潮流计算内核的方式相同，调用电磁暂态仿真计算内核时，需要指定计算方案（Job）为电磁暂态计算方案。在该案例中，`model.jobs[1]`即为电磁暂态计算方案。通过修改故障元件的故障结束时间，来执行不同的电磁暂态仿真案例。

### 示例代码
配置好 **Python** 开发环境，输入以下脚本。

```python
import sys,os
import cloudpss
import json
import time

if __name__ == '__main__':
    
    cloudpss.setToken('{token}')

    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
    
    # 获取指定 rid 的项目
    model = cloudpss.Model.fetch('model/songyankan/3_Gen_9_Bus')

    # 修改故障元件的故障结束时间
    comp = model.getComponentByKey('canvas_0_1150')
    print(comp.args)
    comp.args['fe'] = 3.2
    
    # 启动计算任务
    config = model.configs[0]  # 若未设置，则默认用 model 的第一个 config（参数方案）
    job = model.jobs[1]  # 若未设置，则默认用 model 的第一个 job（计算方案），此处选择 jobs[1]，为电磁暂态仿真任务
    runner = model.run(job,config)
    while not runner.status():
        logs = runner.result.getLogs()
        for log in logs:
            print(log)
        time.sleep(1)
    print('end')
    
    # 打印结果
    plots = runner.result.getPlots() #获取全部输出通道
```
### 结果输出

电磁暂态计算结果均保存在`runner.result`中。用户可查看 result 类的接口说明文档获取更多帮助。此处可以使用 matplotlib 库或 plotly 库绘制结果曲线。

:::tip
**使用 matplotlib 绘制曲线**
```python
import matplotlib.pyplot as plt
for it in range(0,len(plots)):
    legend = runner.result.getPlotChannelNames(it)
    print('示波器分组',it,':',legend)
    plt.figure('示波器分组'+str(it),figsize = (15,4))
    for jt in range(0,len(legend)):
        plot = runner.result.getPlotChannelData(it,legend[jt])
        plt.plot(plot['x'],plot['y'])
        plt.title('Scope '+str(it))
        plt.xlim([min(plot['x']),max(plot['x'])])
        plt.legend(legend)
        plt.xlabel('Time/s')
```
在 Jupyter Notebook 中的效果如下。
![使用 matplotlib 绘图](./matplotlib_curves.png "使用 matplotlib 绘图")
:::

:::tip
**使用 plotly 绘制曲线**
```python
import plotly.graph_objects as go
for i in range(len(plots)):
        fig = go.Figure()
        channels= runner.result.getPlotChannelNames(i)
        for val in channels:
            channel=runner.result.getPlotChannelData(i,val)
            fig.add_trace(go.Scatter(channel))
        fig.show()
```
在 Jupyter Notebook 中的效果如下。
![使用 plotly 绘图](./plotly_curves.png "使用 plotly 绘图")
:::