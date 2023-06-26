---
title: 负荷预测模块相关接口
order: 20
---

## ==本教程将介绍如何使用接口运行`负荷预测方案`内核，并储存运行结果。 ==


## 1. 准备工作
### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python 
import os
import cloudpss
import time


if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 仿真测试——获取指定 simuid 的项目
    dsProject = cloudpss.DSLab.fetch('{simuid}')

```


## 2. 运行`负荷预测方案`内核
### 描述
运行`负荷预测方案`内核，如果当前 model 没有创建 Job 时报错，默认使用第一个计算方案，进行仿真。

### 语法
```python
runIESLoadPrediction(job,name)
```
参数说明:
- `job`：计算方案名称，可选，字符串类型或者字典类型，默认使用第一个计算方案，如果同名使用最靠前一个
- `name`：任务名称，为空时使用项目的参数方案名称和计算方案名称
### 返回值
- runner Runner[IESResult]

### 实例
以下实例展示了 runIESLoadPrediction 的使用方法：
```python
    try:
        runner = dsProject.runIESLoadPrediction()
        while not runner.status():
            print('running', flush=True)
            logs = runner.result.getLogs()
            for log in logs:
                print(log)
            time.sleep(1)
        print('end')
        print(runner.result.getMessagesByType('plot'))

        # 保存结果到JSON文件
        result_data = runner.result.getMessagesByType('plot')
        # 生成唯一的文件名
        timestamp = int(time.time())  # 使用时间戳作为文件名的一部分
        file_name = f"output_{timestamp}.json"
        # 获取当前脚本的目录
        current_dir = os.path.dirname(os.path.abspath(__file__))
        # 生成JSON文件的完整路径
        file_path = os.path.join(current_dir, file_name)
        with open(file_path, 'w') as file:
            json.dump(result_data, file)

    except Exception as e:
        print('error', e)
```
执行以上代码，输出结果如下：
```
running
running
{'type': 'log', 'verb': 'create', 'version': 1, 'key': '1686724615.123849869', 'data': {'level': 'info', 'content': '启动算法'}, 'sender': 'remote', 'when': datetime.datetime(2023, 6, 14, 14, 36, 55, 123850)}
{'type': 'log', 'verb': 'create', 'version': 1, 'key': '1686724615.123849869', 'data': {'level': 'info', 'content': '计算任务进入队列，等待运行'}, 'sender': 'remote', 'when': datetime.datetime(2023, 6, 14, 14, 36, 55, 123850)}
running
{'data': {'content': '数据获取开始', 'html': False, 'level': 'info'}, 'type': 'log', 'verb': 'create', 'version': 1}
{'data': {'content': '数据获取完成，耗时：0.071s', 'html': False, 'level': 'info'}, 'type': 'log', 'verb': 'create', 'version': 1}
{'data': {'content': '负荷数据解析开始', 'html': False, 'level': 'info'}, 'type': 'log', 'verb': 'create', 'version': 1}
running
running
running
running
running
{'type': 'log', 'verb': 'create', 'version': 1, 'key': '1686724621.322948694', 'data': {'level': 'info', 'content': '计算任务运行结束'}, 'sender': 'remote', 'when': datetime.datetime(2023, 6, 14, 14, 37, 1, 322948)}
{'data': {'items': [{'placeholder': '暂无数据', 'query': {'key': '卢氏县', 'type': 'message'}, 'title': '卢氏县'}, {'placeholder': '暂无数据', 'query': {'key': '三门峡220kV卢氏变电站', 'type': 'message'}, 'title': '卢氏县/三门峡220kV卢氏变电站'}, {'placeholder': '暂无数据', 'query': {'key': '三门峡220kV卢氏变电站卢明线', 'type': 'message'}, 'title': '卢氏县/三门峡220kV卢氏变电站/卢明线'}, ...(由于结果过长，此处省略后续内容)...

```




