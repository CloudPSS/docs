---
title: 案例4 使用项目版本的hash运行算例文件
type: examples
author: pcp
category: 300
order: 103
---



​    
​    
    使用项目版本的hash运行算例文件。具体见**example-revison.py**,案例参数代码:
    ```
       import sys,os
       sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
       import cloudpss
       import json
       import time
    ```
    
    **运行指定项目版本的仿真程序,运行指定版本的项目时只能参数方案和计算方案**
    ```
       if __name__ == '__main__':
    ``` 
    cloudpss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsInVzZXJuYW1lIjoiRGVtbyIsInR5cGUiOiJTREsiLCJpYXQiOjE2MTk0Mzg3ODMsImV4cCI6MTYyMTU2NTM5M30.nzpUimT3vg1Ad72DIFp_99Lh2btU5cnqmbqnwKHvJnVi7QfLn1jZdprVQkNtV1ixtIb-JPRez_rGBPVCHBZXmDr2x-7SOGPvB492I8IP_FkmQVGV083zBzN-8L9EGU54kdOL2H70ByVjJcSS34kSRvzukWPo8SCxjm_oLWQKkyk')


​    
    ```
    
           config={'args': {'T_Tm_change': '1.5', 'T_Speed_change': '2'}, 'name': '参数方案 1', 'pins': {}}
           job={'rid': 'job-definition/cloudpss/emtp', 'args': {'debug': '0', 'n_cpu': '1', 'solver': '1', 'end_time': '3', 'task_cmd': '', 'step_time': '0.000002', 'begin_time': '0', 'task_queue': '', 'initial_type': '0', 'ramping_time': '0', 'load_snapshot': '0', 'save_snapshot': '0', 'solver_option': '0', 'output_channels': [['电磁转矩', '1000', '1000', '', 'canvas_0_122,canvas_0_404'], ['a相定子电流', '1000', '1000', '', 'canvas_0_305'], ['转速', '1000', '1000', '', 'canvas_0_399,canvas_0_403']], 'max_initial_time': '1', 'load_snapshot_name': '', 'save_snapshot_name': 'snapshot', 'save_snapshot_time': '1'}, 'name': '电磁暂态仿真方案 1'}
           try:
        
               runner=cloudpss.Runner.create('424111','4043acbddb9ce0c6174be65573c0380415bc48186c74a459f88865313743230c',job=job,config=config)
        
               while  not runner.status():
                   print('running')
                   print(runner.result.getLogs())
                   time.sleep(1)


​    
              //获取所有分组信息
               plots = runner.result.getPlots()
        
               print(plots)
           except Exception as e:
               print(e)
     ```xxxxxxxxxx        # 获取所有分组信息       plots = runner.result.getPlots()       print(plots)   except Exception as e:       print(e)
