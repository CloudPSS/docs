---
title: Token申请与设置
type: examples
author: pcp
category: 200
---

## 申请token

首先点击`主页`标签页进入 CloudPSS 主页，然后点击左下角的`设置`按钮进入设置页面。

![设置页面](./token1.png "设置页面")

点击 `SDK Token 申请`标签进入 Token 申请界面，并选择`时效`。

![基本设置界面](./token2.png "基本设置界面")

然后点击`生成`按键进行 Token 申请。

![申请 Token 界面](./token3.png "申请 Token 界面")

点击`复制`按钮将所申请的Token复制到剪贴板。

![复制Token](./token4.png "复制Token")

:::warning 
Token将不会保存在`用户中心`->`Token申请`页面。离开页面后数据将丢失。用户需将Token记录下来，防止丢失。如不慎丢失，需重新申请。
:::

## 设置token

**params:**  token token

```[pyhton][setToken]
cloudpss.setToken('{token}')
```