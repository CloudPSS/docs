---
title: 时序潮流模块
description: 使用 DSLab SDK 进行时序潮流计算，获取结果

tags:
- sdk
- dslab
- powerflow
---

## 概述

介绍如何使用接口运行时序潮流方案内核，并获取指定的运行结果。

## 准备工作

在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 仿真测试——获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('{simuid}')
```

## 运行时序潮流方案内核

运行时序潮流方案内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

### 语法

```python
runIESPowerFlow(job, name)
```

#### 参数说明

- `job`: [String][String] 计算方案名称，可选，默认使用第一个计算方案，如果同名使用最靠前一个
- `name`: [String][String] 任务名称，为空时使用项目的参数方案名称和计算方案名称

#### 返回值

- [Job][Object] 返回一个运行实例

### 实例

以下实例展示了 `runIESPowerFlow` 的使用方法：

```python
try:
    runner = dsProject.runIESPowerFlow()
    while not runner.status():
        print('running', flush=True)
        # logs = runner.result.getLogs()
        # for log in logs:
        #     print(log)
        time.sleep(1)
    print('end')

    messages = runner.result.getMessagesByType('plot')

    for message in messages:
        if message['key'] == '/file0_PD_10100000_436F_功率(kW)':  # 获取指定键对应数据项的数据
            desired_message = message
            break
    print(desired_message)

except Exception as e:
    print('error', e)
```

执行以上代码，输出结果如下：

```
running
running
running
running
running
running
running
end
{'verb': 'append', 'data': {'title': 'XXX线-file0_PD_10100000_436F功率(kW)', 'traces': [
            {'name': '有功损失', 'type': 'scatter', 'x': ['2021-01-01 22: 00: 00'
                ], 'y': [
                    77.60716779440949
                ]
            },
            {'name': '无功损失', 'type': 'scatter', 'x': ['2021-01-01 22: 00: 00'
                ], 'y': [
                    57.12306143030657
                ]
            },
            {'name': '有功功率', 'type': 'scatter', 'x': ['2021-01-01 22: 00: 00'
                ], 'y': [
                    10846.160186989075
                ]
            },
            {'name': '无功功率', 'type': 'scatter', 'x': ['2021-01-01 22: 00: 00'
                ], 'y': [
                    77.84933634225892
                ]
            },
            {'name': '持续极限容量', 'type': 'scatter', 'x': ['2021-01-01 22: 00: 00'
                ], 'y': [
                    5317.768259999999
                ]
            }
        ], 'xAxis': {'title': 'time'
        }, 'yAxis': {'title': '功率(kW)'
        }
    }, 'key': '/file0_PD_10100000_436F_功率(kW)', 'type': 'plot', 'version': 1
}
```

[Object]: https://docs.python.org/3.8/tutorial/classes.html#class-objects
[String]: https://docs.python.org/3.8/tutorial/introduction.html#strings