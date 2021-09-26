---
title: 快速入门
type: examples
author: pcp
category: 200
order: 101
---

### python调用CloudPSS SDK实现批量潮流仿真

:::info
**通过python调用CloudPSS SDK，快速实现算例中元件参数的批量修改和仿真。本例以3机9节点标准测试系统算例的批量潮流仿真为例，帮助用户快速入门CloudPSS SDK的使用。**
:::

### 1.3机9节点标准测试系统算例

首先，在CloudPSS Simstudio中打开[3机9节点标准测试系统算例](https://internal.cloudpss.net/project/k/cs#/design/diagram/canvas/canvas_0)。

![3机9节点标准测试系统算例](./1.png "3机9节点标准测试系统算例")

点击`运行`标签页，在计算方案中选择默认的**潮流计算方案1**。

![选择潮流计算方案](./2-1.png "选择潮流计算方案")

点击`启动任务`运行仿真，在`结果`页面会生成潮流计算结果。

![潮流计算结果](./3-2.png "潮流计算结果")

:::tip
若要分析算例中**Gen2**发电机的有功出力与**Bus2**的电压相角之间的关系，常规方法是修改参数后多次仿真，绘制出有功出力与电压相角的描点图。这个方法操作复杂且效率低下，而用python调用**CloudPSS SDK**可以快速完成批量仿真。
:::

### 2.潮流计算交互python代码

在**VScode**中配置好**python**环境，输入以下代码。
```python
import time
import json
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))

if __name__ == '__main__':
    import cloudpss
    cloud-pss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJ1bmtub3duIl0sInR5cGUiOiJTREsiLCJleHAiOjE2NTg1NjgzNDYsImlhdCI6MTYyNjk0MTQ1MX0.hDRBisqpd2bXzg5HZVoTVnxw2GmOAihY5HHALNpFs_gcLCL45Xt8rYKrCUq3CZKq-iM-mYfQvPgWIn2B_QCmUezHtUuRQw_nmBBLb5NMpIAiFJJiBFDGjBvzwBAINCbBFnr8zDxUvwHZMoAb3ed9VNJDqI_CTzB8Q3udTb10-TXs')

    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'
    # 获取指定 rid 的项目
    project = cloudpss.Project.fetch('project/admin/aaaa')

    config = project.configs[0]  # 不填默认用project的第一个config
    job = project.jobs[0]  # 不填默认用project的第一个job
    comp = project.getComponentsByKey('canvas_0_757')
    print(comp.args)
    
    comp.args['pf_P'] = '180'
    runner = project.run('4242311', job, config)
    while not runner.status():
        # print('running',flush=True)
        logs = runner.result.getLogs()
        for log in logs:
            # del log['id']
            print(log)
        # 获取所有分组信息
        time.sleep(1)
    print('end')
    print(runner.result.getBranches())
    print(runner.result.getBuses())
    # plowerFlowResults = runner.result.getPlowerFlowResults()
    # runner.result.(project)
    # project.save()
```

:::tip
**地址与Token替换**  

使用时需要将 `os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'`中的`'https://cloudpss.net/'`替换为用户当前使用的平台网址地址。

同时需要申请和修改Token，替换`cloud-pss.setToken`后的内容。Token的申请和注销详见[setToken用户认证](../../interface/setToken.md)帮助文档。
:::

:::tip
**算例指定**  

使用时需要将 `project = cloudpss.Project.fetch('project/admin/aaaa')`中的`('project/admin/aaaa')`替换为用户当前使用的算例地址。

例如：算例地址为https://cloudpss.net/project/user/example#，则代码中对应部分应替换为`project/user/example`。
:::

:::tip
**元件指定**

选中算例中的发电机**Gen2**，此时地址变为`https://cloudpss.net/project/user/example#/design/diagram/cells/canvas_0_757`，`canvas_0_757`即为发电机**Gen2**的元件标识，其它元件的元件标识可以用相同的方式获取，并替换代码中

```python
comp = project.getComponentsByKey('canvas_0_757')
```
此语句可以直接复制进代码中，不用修改。不过Python中要注意缩进。此语句中的参数`canvas_0_757`其实就是此算例中的发电机的名称。当用户点击发电机元件的时候，会发现浏览器的网址变成了https://cloudpss.net/project/k/cs#/design/diagram/cells/`canvas_0_757`，此网址中的最后一个单词即是发电机模块。如果后续需要使用其他的模块，可以如此获得模块名称。
:::

### 5.指定具体元件的参数


在**Power Flow Data**参数组中，**Injected Active Power**的值为150，即此PV节点输入系统的有功功率为150MW。在对应的代码中，第19行的位置暂时是空行，但是没有关系，在其中补充以下语句即可。
在第19行的后面，也就是第20行插入一行代码。
print(comp.args)
然后运行代码，此语句会输出此同步发电机的所有输入参数。如下所示。
```python
{'Name': 'Gen2', 'P': '=4', 'Smva': '=325', 'V': '=$Bus_2_Vbase / sqrt(3)', 'freq': '=50', 'R0': '=10000', 'ParamType': '0', 'ModelType': '0', 'Rs': '=0.000301', 'Xls': '=0', 'Xq': '=0.283875', 'Xd': '=0.283875', 'Rfd': '=0.000117219', 'Xlfd': '=0.047921256', 'Rkd': '=0.009822918', 'Xlkd': '=0.097868236', 'Rkqg': '=50000', 'Xlkqg': '=50000', 'RkqQ': '=0.005334267', 'XlkqQ': '=0.059027851', 'Rs_2': '=0.000301', 'Xls_2': '=0', 'Xd_2': '=0.283875', 'Xdp_2': '=0.041', 'Xdpp_2': '=0.028895', 'Xq_2': '=0.283875', 'Xqp_2': '=0.056603', 'Xqpp_2': '=0.028895', 'Td0p_2': '=9.01', 'Td0pp_2': '=0.045', 'Tq0p_2': '=0.956', 'Tq0pp_2': '=0.069', 'Control': '1', 'Tj': '=5', 'Dm': '=0', 'StartupType': '4', 'RampingTime': '=0.06', 'V_mag': 1, 'V_ph': 8.092582389805873, 'AP': 150, 'RP': 10.551261791343547, 's2m': '@S2M', 'l2n': '@L2N', 'BusType': '1', 'pf_P': '=150', 'pf_Q': '=100', 'pf_V': '=1', 'pf_Theta': '=0', 'pf_Vmin': '=0.001', 'pf_Vmax': '=10', `'pf_Qmin'`: '=-200', 'pf_Qmax': '=200', 's2m_o': '#initEx2', 'l2n_o': '#initGv2', 'Ef0_o': '#Ef02', 'Tm0_o': '#Tm02', 'wr_o': '#wr2', 'theta_o': '', 'loadangle_o': '', 'loadangle_so': '', 'VT_o': '#VT2', 'IT_o': '#IT2', 'PT_o': '#P2', 'QT_o': '#Q2', 'IT_inst': ''}
```
其中标红部分就是在拓扑图中的“Injected Active Power”。注意其前面的参数名称“pf_P”就是我们后面需要使用的有功功率的参数名称。
然后在第21行插入代码为comp.args['pf_P'] = '180'，此时便是通过设置此“pf_P”参数重新设置了同步发电机的注入功率。此时在网页的拓扑图中的发电机的参数依然是150，但是实际在运行Python代码仿真的时候，使用的参数是180。

### 6.运行Python程序，查看输出结果
完成了以上步骤之后，可以直接运行此Python文件，输出结果中，除了之前的
```python
print(comp.args)
```
打印出的发电机参数结果以外，在程序的第32行和第33行
```python
print('end')
print(runner.result.getBranches())
```
语句表明下面打印的结果，在“end”字符后面就是上面图3所示的branch表格的结果。
如果需要使用到图3中的bus表格的数据，那么在程序的下面手动添加
```python
print(runner.result.getBuses())
```
语句即可。

至此，本文便使用Python命令得到了一个算例输出的所有结果。如果需要输出的表格中的某些单元格的数值，使用Python的切片操作去获取即可。
