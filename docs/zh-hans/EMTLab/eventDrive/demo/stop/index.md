---
title: 案例 4 控制事件-结束程序
order: 400
---
:::info
本实例代码介绍**通过SDK保存正在运行的仿真断面**的流程,首先，配置好 **Python** 开发环境，输入以下脚本，设置好数据库的**主机地址**、**端口**和**密码**；然后，填入需要修改的参数值；最后，在仿真开始后输入**仿真任务ID**，运行**Python**代码。
:::

```python
import json
import redis

if __name__ == '__main__':
    client = redis.StrictRedis(host='XX', port=XX, password=XX)
    taskId = 'XX'# 仿真开始后输入仿真任务ID
    event = {
        'eventType': 'time',
        'eventTime': '-1',
        'eventTimeType': '1',
        "defaultApp": {}
    }
    param = {
        "ctrl_type": "0",
        "uuid": "xxxx2",
        'message': {
            'log': '停止任务 ',
        }
    }
    eventData = {}
    eventData = {'SimuCtrl': param}

    event['defaultApp'] = {'SimuCtrl': eventData}
    print(json.dumps(event), flush=True)
    client.publish('extern_input_' + str(taskId), json.dumps([event]))
```