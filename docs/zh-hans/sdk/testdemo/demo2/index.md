---
title: 案例2 项目使用案例
type: examples
author: pcp
category: 300
order: 101
---



**项目使用案例**。具体见 **example-project.py**,案例参数代码:
```
   import sys,os
   sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
   import cloudpss
   import json
   if __name__ == '__main__':
   
```
 cloudpss.setToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsInVzZXJuYW1lIjoiRGVtbyIsInR5cGUiOiJTREsiLCJpYXQiOjE2MTk0Mzg3ODMsImV4cCI6MTYyMTU2NTM5M30.nzpUimT3vg1Ad72DIFp_99Lh2btU5cnqmbqnwKHvJnVi7QfLn1jZdprVQkNtV1ixtIb-JPRez_rGBPVCHBZXmDr2x-7SOGPvB492I8IP_FkmQVGV083zBzN-8L9EGU54kdOL2H70ByVjJcSS34kSRvzukWPo8SCxjm_oLWQKkyk')


**设置运行地址**
```
  os.environ['CLOUDPSS_API_URL']='https://api.dogfood-proxy.cloudpss.net/' 
  ```
**获取项目列表**
```
       data=cloudpss.Project.fetchMany()
       print('获取项目列表',data)
 ```   
  **获取指定 rid 的项目**
       ```
       project=cloudpss.Project.fetch('project/Demo/SDK_TEST1')
       print('项目',project)

**保存项目到本地**

```
       filePath= './simulation/test.cproj'
       cloudpss.Project.dump(project,filePath)
    
       project =cloudpss.Project.load('./simulation/test.cproj')
       print('项目',project.rid)
```

**创建一个改项目的参数方案**

   
       config = project.createConfig('测试参数方案')
       print('参数方案',config)
  

**修改参数方案**

   ```
      config['args']['T_Tm_change']='2'
   ```
 **将参数方案加入到项目中**
 
      
       # project.addConfig(config)
    
       job=project.createJob('emtp','测试计算方案')
       print('参数方案',job)
      
 **修改计算方案**
     
       job['args']['end_time']='2'
     

 **将参数方案加入到项目中**
      
       # project.addJob(job)
    
       r=project.save()
    
       print('保存信息',r)
       