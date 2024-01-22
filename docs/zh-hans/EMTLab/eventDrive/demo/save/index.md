---
title: 案例 3 控制事件-断面保存
order: 300
---
:::info
本实例代码介绍**通过SDK保存正在运行的仿真断面**的流程,首先，配置好 **Python** 开发环境，输入以下脚本，设置好数据库的**主机地址**、**端口**和**密码**；然后，在仿真开始后输入**仿真任务ID**，运行**Python**代码。
:::

```python
import json
import redis
# 潮流断面保存
if __name__ == '__main__':
    client = redis.StrictRedis(host='XX', port=XX, password=XX)
    taskId = 'XX' # 仿真开始后输入仿真任务ID
    event = {
        'eventType': 'time',
        'eventTime': '-1',
        'eventTimeType': '1',
        "defaultApp": {}
    }
    param = {
        "ctrl_type": "0",
        "snapshot_number": "1234",
        "uuid": "xxxx2",
        'message': {
            'log': '保存断面 ',
        },
    }
    eventData = {}
    eventData = {'SnapshotCtrl': param}

    event['defaultApp'] = {'SnapshotCtrl': eventData}
    print(json.dumps(event), flush=True)
    client.publish('extern_input_' + str(taskId), json.dumps([event]))
```