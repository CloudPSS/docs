---
title: Receiver 类
type: examples
author: pcp
category: 199
order: 112
---


## ==class cloudpss.runner.receiver.Receiver(taskId, db, url: Optional[str] = None, **kwargs)==
:::info
socket 接收服务
:::
### close(ws)

### connect()

### on_close(ws)

### on_error(ws, error)

### on_message(ws, message)
:::info
消息接收处理
:::
**Params ws:**  socket 实例

**Params message:** 接收到的数据

heartbeat ws 心跳服务 __testData__


### on_open(ws)

### status()