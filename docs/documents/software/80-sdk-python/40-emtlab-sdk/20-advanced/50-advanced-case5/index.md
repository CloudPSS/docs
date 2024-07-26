---
title: 断面存储和断面导入
description: 用脚本实现 EMTLab 从给定断面开始仿真的功能

tags:
- sdk

---

## 功能介绍
使用 EMTLab SDK 完成断面存储，通过断面载入实现电磁暂态仿真从给定断面开始仿真的功能。

## 使用说明

### 用到的 API
模型类：[`Class: Model`](../../../70-api/10-model/index.md#class-model)

+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `model.configs` |   获取项目的所有参数方案    |
    | `model.jobs`                |  获取项目的所有计算方案  |
    | `model.run(job=None, config=None)`                |  运行仿真任务  | 
    | `model.save(key=None)`         |      保存/另存项目       |

+ 静态方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `Model.fetch(rid)` |   获取指定 rid 的项目    |

结果类：[`Class: Result`](../../../70-api/40-result/index.md#class-result)

+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `result.result` |   仿真完成后的结果缓存    | 


### 调用方式
- 使用 `Model.fetch(rid)` 静态方法，获取项目实例;
- 使用 `model.configs` 和 `model.jobs` 示例方法获取项目的参数方案和计算方案，并对计算方案进行存储断面的相关设置；
- 使用 `model.run(job=None, config=None)` 运行仿真任务，并获取仿真结果 `runner.result`，在仿真结果中记录存储断面的 hash 值，可利用 hash 值进行载入断面的相关计算方案设置；
- 使用 `model.save(key=None)` 保存项目。

## 案例介绍
通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本实现断面存储，以及通过断面载入实现电磁暂态仿真从给定断面开始仿真的功能。

### 代码解析
以 [IEEE-3机9节点项目](../../../../20-emtlab/30-quick-start/10-start-from-template/index.md#典型模板案例) 为例，使用 `Model.fetch` 方法获取该项目实例。

```python title="获取IEEE 3机9节点项目实例" showLineNumbers
import os
import cloudpss   

if __name__ == '__main__':
    os.environ['CLOUDPSS_API_URL'] = 'http://orange.local.cloudpss.net/'
    cloudpss.setToken('{token}')  
    # 获取IEEE 3机9节点项目实例
    model =  cloudpss.Model.fetch('model/Maxwell/IEEE')
```

使用 `model.jobs` 获取该项目的计算方案，`model.jobs[0]` 为默认的计算方案，修改计算方案里存储断面和载入断面的相关参数。

```python title="修改计算方案" showLineNumbers
job = model.jobs[0]                              # 获取计算方案
job['args']['snapshot_cfg'] = 1                  # 开启配置断面参数功能
job['args']['load_snapshot'] = 0                 # 关闭载入断面功能
job['args']['save_snapshot'] = 1                 # 开启存储断面功能
job['args']['save_snapshot_time'] = 2            # 设置断面存储时间
job['args']['save_snapshot_name'] = 'snapshot_1' # 设置断面名称
```

修改计算方案后，使用 `model.run(job=None, config=None)` 运行仿真任务，并获取仿真结果 `runner.result`，
 

### 结果展示

## 调试技巧

## 常见问题

## 完整代码