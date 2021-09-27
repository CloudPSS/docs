---
title:  案例5 导入本地结果文件
type: examples
author: pcp
category: 400
order: 104
---

本实例代码介绍**导入本地结果文件并使用plotly绘制曲线**的功能。结果文件可以是直接在SimStudio运行页面下载的结果，也可是通过CloudPSS SDK下载的结果。

```python
import cloudpss
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
# import plotly.graph_objects as go
"""
    运行指定项目版本的仿真程序,
    运行指定版本的项目时只能参数方案和计算方案
"""
if __name__ == '__main__':
    result = cloudpss.EMTResult.load('D:\\data\\result\\test.cjob')
    print(result)
    plots = result.getPlots()

    for i in range(len(plots)):
        print(plots[i])
        # fig = go.Figure()
        # channels= result.getPlotChannelNames(i)
        # for val in channels:
        #     channel=result.getPlotChannelData(i,val)
        #     fig.add_trace(go.Scatter(channel))
        # fig.show()
