---
title: 案例2 项目使用案例
type: examples
author: pcp
category: 400
order: 101
---



本实例代码介绍**项目Project对象**的使用方法。

```python
import sys,os
sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
import cloudpss
import json
if __name__ == '__main__':
    cloudpss.setToken('{token}')

    # 获取项目列表
    data = cloudpss.Project.fetchMany()
    print('获取项目列表', data)

    # ### 获取指定 rid 的项目
    project = cloudpss.Project.fetch('project/Demo/SDK_TEST1')
    print('项目', project)

    # 保存项目到本地
    filePath = 'D:\data/simulation/test.cproj'
    cloudpss.Project.dump(project, filePath)

    project = cloudpss.Project.load('D:\data/simulation/test.cproj')
    print('项目', project.rid)

    # 创建一个改项目的参数方案
    config = project.createConfig('测试参数方案')
    print('参数方案', config)

    # 修改参数方案
    config['args']['T_Tm_change'] = '2'

    # 将参数方案加入到项目中
    # project.addConfig(config)

    job = project.createJob('emtp', '测试计算方案')
    print('参数方案', job)

    # 修改计算方案
    job['args']['end_time'] = '2'

    # 将参数方案加入到项目中
    # project.addJob(job)

    r = project.save()
    print('保存信息', r)