---
title: 案例1 通过项目rid运行项目
author: pcp
category: 300
order: 100
---


**通过rid运行项目，等待项目运行结束并获取结果数据**。具体见 **example-run.py**,案例参数代码:

```
   import sys,os
   sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
   import cloudpss
   import json
   import time
   if __name__ == '__main__':
 ```

 cloudpss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsInVzZXJuYW1lIjoiRGVtbyIsInR5cGUiOiJTREsiLCJpYXQiOjE2MTk0Mzg3ODMsImV4cCI6MTYyMTU2NTM5M30.nzpUimT3vg1Ad72DIFp_99Lh2btU5cnqmbqnwKHvJnVi7QfLn1jZdprVQkNtV1ixtIb-JPRez_rGBPVCHBZXmDr2x-7SOGPvB492I8IP_FkmQVGV083zBzN-8L9EGU54kdOL2H70ByVjJcSS34kSRvzukWPo8SCxjm_oLWQKkyk')
​      
 **获取指定 rid 的项目**

    project=cloudpss.Project.fetch('project/Demo/SDK_TEST1')
    print('项目',project)
     config=project.configs[0] **不填默认用project的第一个config**
     job=project.jobs[1]  **不填默认用project的第一个job**
     try:
        runner=project.run('424111',job=job,config=config)
        while  not runner.status():
        print('running')
        print(runner.result.getLogs())
        time.sleep(1)

**获取所有分组信息**

           plots = runner.result.getPlots()
           print(plots)
           filePath= './result/result.cjob'
           cloudpss.ResultDb.dump(runner.result,filePath)
       except Exception as e:
           print(e)

**运行结束时间为默认时间,通过while循环获取任务状态判断是否运行结果**

