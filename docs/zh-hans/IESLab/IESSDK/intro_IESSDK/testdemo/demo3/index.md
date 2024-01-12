---
title: 案例 3 运行项目并使用 matplot 动态绘制曲线
type: examples
author: pcp
category: 400
order: 102
---


本实例代码介绍**项目运行及使用 matplotlib 动态绘制曲线，具体见 example-run-matplot.py ，本示例需要自行安装 matplotlib 依赖库，案例参数代码**的方法。
```python
import sys,os
import cloudpss
import json
import matplotlib.pyplot as plt
if __name__ == '__main__':
    cloudpss.setToken('{token}')


    ### 获取指定 rid 的项目
    model=cloudpss.Model.fetch('model/Demo/SDK_TEST1')
    print('项目',model)


    config=model.configs[0] # 不填默认用model的第一个config
    job=model.jobs[1]  # 不填默认用model的第一个job

    runner=model.run(job=job,config=config)
    plotMap={}
    fig, ax = plt.subplots()
    while  not runner.status():
        print('running')
        # 获取通道分组下的曲线名称
        print(runner.result.getLogs())
        plotKeys = runner.result.getPlotChannelNames(1)
        if plotKeys is not  None:
            for val in plotKeys:

                line = plotMap.get(val,None)

                # 获取曲线数据
                channel=runner.result.getPlotChannelData(1,val)

                if line is None:

                    line, = ax.plot(channel['x'], channel['y'], label=val )
                    plotMap[val]=line
                else:
                    line.set_data(channel['x'],channel['y'])

        plt.pause(0.1)

    print('end')

    plt.show()
