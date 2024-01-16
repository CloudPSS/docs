---
title:  案例 5 导入本地结果文件
type: examples
author: pcp
category: 400
order: 104
---

本实例代码介绍**导入本地结果文件，导入的结果文件支持 SDK 保存的和从网站下载的结果文件。具体见 example-load-result.py**。

```python
import cloudpss
import sys
import os
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
