---
title: 案例3 运行项目并使用matplot动态绘制曲线
type: examples
author: pcp
category: 400
order: 102
---


本实例代码为**运行项目并使用matplot动态绘制曲线**，具体见 **example-run-matplot.py** ，案例参数代码:
```python
import sys,os
sys.path.append(os.path.join(os.path.dirname(__file__), '..\\'))
import cloudpss
import json
import matplotlib.pyplot as plt
if __name__ == '__main__':
    cloudpss.setToken('{token}')


    ### 获取指定 rid 的项目
    project=cloudpss.Project.fetch('project/Demo/SDK_TEST1')
    print('项目',project)


    config=project.configs[0] # 不填默认用project的第一个config
    job=project.jobs[1]  # 不填默认用project的第一个job

    runner=project.run(job=job,config=config)
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
