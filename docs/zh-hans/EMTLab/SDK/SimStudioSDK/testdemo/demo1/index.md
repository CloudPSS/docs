---
title: 案例 1 通过项目 rid 运行项目
author: pcp
category: 400
order: 100
---


本实例代码介绍**通过 rid 运行项目，等待项目运行结束并获取结果数据，具体见 example-run.py,案例参数代码**的流程。
```python
import sys,os
import cloudpss
import json
import time
if __name__ == '__main__':
    cloudpss.setToken('{token}')


    ### 获取指定 rid 的项目
    model=cloudpss.Model.fetch('model/Demo/example')


    try:
        runner=model.run()
        while  not runner.status() :
            print('running',flush=True)
            logs = runner.result.getLogs()
            for log in logs:
                print(log)
            time.sleep(1)

        # 打印 0 号分组数据
        print(runner.result.getPlot(0))
        filePath = 'D:\data/result/test.cjob'
        cloudpss.Result.dump(runner.result,filePath)
        print('end')
    except Exception as e:
        print('error',e)
# 运行结束时间为默认时间
# 通过while循环获取任务状态判断是否运行结果
```