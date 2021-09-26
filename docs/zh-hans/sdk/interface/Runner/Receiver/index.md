---
title: 接收服务类
type: examples
author: pcp
category: 199
order: 112
---


>class cloudpss.runner.receiver.Receiver(taskId, db, url: Optional[str] = None, **kwargs)

**socket接收服务类**

:::info
close(ws)
:::

:::info
connect()
:::

:::info
on_close(ws)
:::

:::info
on_error(ws, error)
:::

### 消息接收处理
:::info
on_message(ws, message)
:::

**Params ws:**  socket实例

**Params message:** 接收到的数据

**heartbeat ws:**   心跳服务 __testData__

:::info
on_open(ws)
:::

:::info
status()
:::