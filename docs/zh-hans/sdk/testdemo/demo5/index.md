---
title:  案例5 导入本地结果文件
type: examples
author: pcp
category: 400
order: 104
---

**导入本地结果文件并使用 plotly 绘制曲线**，导入的结果文件支持 SDK 保存的
和从网站下载的结果文件。具体见 **example-load-result.py** 。

**案例参数代码:**

``` 
import sys,os
   sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
   import plotly.graph_objects as go
   import cloudpss
```
**运行指定项目版本的仿真程序**

```
   if __name__ == '__main__':
       result = cloudpss.ResultDb.load('C:\\Users\\dps-dm\\cloudpss-sdk\\result\\电磁暂态仿真方案 1_参数方案 1.cjob')
       print (result)
       plots = result.getPlots()
       for i in range(len(plots)):
           fig = go.Figure()
           channels= result.getPlotChannelNames(i)
           for val in channels:
               channel=result.getPlotChannelData(i,val)
               fig.add_trace(go.Scatter(channel))
           fig.show()
```