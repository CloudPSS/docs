---
title:  案例 6 配电网三相不对称三相不对称潮流计算案例
type: examples
author: Lcm
category: 400
order: 105
---

:::info
**本例以通过 Python 脚本对 IEEE-123 节点标准测试系统算例进行三相不对称潮流计算为例，帮助用户快速入门 CloudPSS SDK 的使用。**
:::

## 1. 配电网三相不对称潮流计算内核调用

首先，在 CloudPSS Simstudio 中打开[ IEEE-123 节点标准测试系统算例](https://internal.cloudpss.net/model/lcm20/123Nodes3)。

![IEEE-123节点标准测试系统算例](./1.png " IEEE-123节点标准测试系统算例")

点击`运行`标签页，在计算方案中选择默认的**配电网三相不平衡潮流计算方案1**。

![选择潮流计算方案](./2-1.png "选择潮流计算方案")

点击`启动任务`运行仿真，在`结果`页面会生成三相不对称潮流计算结果。

![潮流计算结果](./3-2.png "潮流计算结果")

:::tip
若要分析算例中 **Source2** 电源的A相有功出力与 **Bus25**母线的A相相角之间的关系。常规方法是手动修改参数执行多次仿真，绘制出有功出力与电压相角的描点图。这个方法操作复杂且效率低下。借助 CloudPSS SDK，利用 Python 脚本修改参数，批量调用三相不对称潮流计算内核，可以快速完成上述功能。
:::

### 示例代码

配置好 **Python** 开发环境，输入以下脚本。
```python

import time
import json
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))


if __name__ == '__main__':
    import cloudpss
    cloudpss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJ1bmtub3duIl0sInR5cGUiOiJTREsiLCJleHAiOjE2NTg1NjgzNDYsImlhdCI6MTYyNjk0MTQ1MX0.hDRBisqpd2bXzg5HZVoTVnxw2GmOAihY5HHALNpFs_gcLCL45Xt8rYKrCUq3CZKq-iMmYfQvPgWIn2B_QCmUezHtUuRQw_nmBBLb5NMpIAiFJJiBFDGjBvzwBAINCbBFnr8zDxUvwHZMoAb3ed9VNJDqI_CTzB8Q3udTb10-TXs')

    os.environ['CLOUDPSS_API_URL'] = 'https://internal.cloudpss.net/'
    # 获取指定 rid 的项目
    project = cloudpss.Model.fetch('model/lcm20/123Nodes3')

    comp = project.getComponentByKey('component_dacVoltageSource_1')
    comp.args[' pf_PPA'] = '180'
    print(comp.args)
    config = project.configs[0]  # 不填默认用project的第一个config
    job = project.jobs[3]  # 不填默认用project的第一个job
    runner = project.run( job, config)
    while not runner.status():
        # print('running',flush=True)
        logs = runner.result.getLogs()
        for log in logs:
            # del log['id']
            print(log)
        # 获取所有分组信息
        time.sleep(1)
    print('end')
    print("getBranches:",runner.result.getBranches())
    print("getBuses:",runner.result.getBuses())
```

:::tip
**地址与Token替换**  
```python 
os.environ['CLOUDPSS_API_URL'] = 'https://internal.cloudpss.net/'
```
使用时需要将`'https://internal.cloudpss.net/'`替换为用户当前使用的平台网址地址。

```python
cloudpss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJ1bmtub3duIl0sInR5cGUiOiJTREsiLCJleHAiOjE2NTg1NjgzNDYsImlhdCI6MTYyNjk0MTQ1MX0.hDRBisqpd2bXzg5HZVoTVnxw2GmOAihY5HHALNpFs_gcLCL45Xt8rYKrCUq3CZKq-iMmYfQvPgWIn2B_QCmUezHtUuRQw_nmBBLb5NMpIAiFJJiBFDGjBvzwBAINCbBFnr8zDxUvwHZMoAb3ed9VNJDqI_CTzB8Q3udTb10-TXs')
```
同时需要申请和修改 Token，替换`cloudpss.setToken`后的内容。Token 的申请和注销详见 [setToken用户认证](../sdknew/../interface/settoken/index.md)帮助文档。
:::

:::tip
**指定算例**  
```python
model = cloudpss.Model.fetch('model/UserName/ModelRID')
```
使用时需要将 `model/UserName/ModelRID` 替换为用户当前使用的算例。如在当前算例中，`model/lcm20/123Node3` 表示用户 `lcm20` 下的 `123node3` 算例。

例如：若算例的 URL 为 `https://cloudpss.net/model/user/example#`，则代码中对应部分应替换为 `model/user/example`。
:::

:::tip
**定位元件**
```python
comp = project.getComponentByKey('component_dacVoltageSource_1')
```
CloudPSS SDK 中，提供了 `getComponentByKey` 函数，用户可以通过元件的 `Key` 来定位算例中的某个元件。在 SimStudio 中，选中算例中的电源 **配电网交流电压源2**，此时浏览器地址栏变为`https://internal.cloudpss.net/model/lcm20/123Nodes3#/design/diagram/cells/component_dacVoltageSource_1`，`component_dacVoltageSource_1`即为电源 **配电网交流电压源2**的 Key。在每个算例中，元件 Key 是唯一的。
:::

:::tip
**获取或修改参数**
在定位元件后，即可获取并任意修改该元件的参数 `args`。此处，通过输出元件 `comp` 的全部参数 `args` 可知，元件参数是以字典的形式存储的。
```python
print(comp.args)
{'BusType': '1', 'Dr': '0.2', 'Fault': '0', 'Func': '0', 'GeneratorType': '6', 'Grnd': '1', 'I': '', 'Init': '0', 'Irms': '', 'Name': 'Source2', 'P': '', 'Ph': '0', 'Q': '', 'R': '0', 'Tconstant': '0.05', 'Tfe': '0.4', 'Tfs': '0.2', 'Tramp': '0.05', 'V': '', 'Vm': '4.16', 'Vrms': '', 'f': '50', 'pf_PPA': '180', 'pf_PPB': '225', 'pf_PPC': '225', 'pf_QQA': '100', 'pf_QQB': '100', 'pf_QQC': '100', 'pf_Qmax': '200', 'pf_Qmin': '-200', 'pf_ThetaA': '0', 'pf_ThetaB': '0', 'pf_ThetaC': '0', 'pf_VVA': '1', 'pf_VVB': '1', 'pf_VVC': '1', 'pf_Vmax': '10', 'pf_Vmin': '0.001'}
```
其中，`'pf_PPA': '180'` 即代表 **配电网交流电压源2** 元件 **Power Flow Data** 参数组中 **Phase A Injected Active Power** 的值，表示此 PV 节点输入系统的有功功率为 180kW。此处的赋值支持数字和表达式字符串。
```python
comp.args['pf_PPA'] = '180'
comp.args['pf_PPA'] = '=180'
comp.args['pf_PPA'] = 180
```
通过设置此 `pf_PPA` 参数即可修改 **配电网交流电压源2**三相不对称潮流计算中的注入有功功率。上述 3 条语句执行的效果相同。
:::

**运行**
```python
config = model.configs[0]
job = model.jobs[3]
runner = model.run(job,config)
```
上述语句中的 `model.configs` 即为 SimStudio 中相关算例的全部参数方案（从上到下从0开始编号），`model.jobs` 为全部计算方案（从上到下从 0 开始编号）。通过选择指定的参数方案和计算方案，执行 `model.run(job,config)` ，即可生成并执行以参数方案 `config` 和计算方案 `job` 的相应计算任务。

运行过程中，不断请求 `runner.status` 即可获得当前任务的计算状态（`False`对应进行中，`True` 对应运行结束）。


### 结果输出

三相不对称潮流计算结果均保存在 `runner.result` 中。用户可查看 result 类的接口说明文档获取更多帮助。
```python
print(runner.result.getBranches())
print(runner.result.getBuses())
```
通过上述两条语句可得到母线（Buses）和线路（Branches）的三相不对称潮流计算结果，其与 SimStudio 的结果页面展示的结果一致。

若需要输出表格中的某些单元格的数值，使用 Python 的切片操作获取即可。例如：
```python
Busesresult = runner.result.getBuses()
Vavalue = Busesresult[0]['data']['columns'][2]['data'][182]
print(Vavalue)
```
此时输出的数值即为此算例在 **配电网交流电压源2** 输入功率为 **180kW** 时对应的 **Bus25** 母线的A相相角。

![输出单元格数值](./单个元素结果.png "输出单元格数值")

### 批量运行潮流
若使用 **for循环** 反复调用以上操作，在 150kW 到 200kW 之间改变 **配电网交流电压源2** 的A相有功出力，可以得到对应母线 **Bus25** 的相角的变化曲线。

![批量运行绘制曲线](./绘制曲线.png "批量运行绘制曲线")
