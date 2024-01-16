---
title: 案例 2 项目使用案例
type: examples
author: pcp
category: 400
order: 101
---



项目使用案例。具体见 **example-project.py**,案例参数代码。

```python
import sys,os
import cloudpss
import json
if __name__ == '__main__':
    cloudpss.setToken('{token}')

    # 获取项目列表
    data = cloudpss.Model.fetchMany()
    print('获取项目列表', data)

    # ### 获取指定 rid 的项目
    model = cloudpss.Model.fetch('model/Demo/SDK_TEST1')
    print('项目', model)

    # 保存项目到本地
    filePath = 'D:\data/simulation/test.cproj'
    cloudpss.Model.dump(model, filePath)

    model = cloudpss.Model.load('D:\data/simulation/test.cproj')
    print('项目', model.rid)

    # 创建一个改项目的参数方案
    config = model.createConfig('测试参数方案')
    print('参数方案', config)

    # 修改参数方案
    config['args']['T_Tm_change'] = '2'

    # 将参数方案加入到项目中
    # model.addConfig(config)

    job = model.createJob('emtp', '测试计算方案')
    print('参数方案', job)

    # 修改计算方案
    job['args']['end_time'] = '2'

    # 将参数方案加入到项目中
    # model.addJob(job)

    r = model.save()
    print('保存信息', r)