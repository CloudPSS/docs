# CloudPSS MCP 接入指南

本文档说明如何在不同智能体（Agent）中接入 **CloudPSS MCP** 服务，以及如何完成身份认证。

## 功能定义

**CloudPSS MCP**（Model Context Protocol）服务用于在 AI Agent 与 **CloudPSS** 仿真平台之间建立标准化通信通道，使智能体能够在授权范围内调用 **CloudPSS** 的计算、建模与资源管理能力。

基础架构流程如下

```
AI Agent
   ↓ (MCP Tool Call)
MCP Server
   ↓ (RPC / Context Binding)
SimStudio / CloudPSS Backend
   ↓
仿真计算 / 模型系统
```

## 功能说明

通过 MCP 协议，AI Agent 可以以统一的工具接口访问 **CloudPSS** 系统能力，包括但不限于：

- 仿真任务创建与执行
- 模型参数配置与修改
- 计算结果查询与回传
- 多会话（connection）上下文管理

每个 connection 对应一个 CloudPSS 项目上下文，所有操作均在指定上下文中执行。

### 服务地址

**CloudPSS MCP** 服务支持公网平台和私有部署两种接入方式，根据当前所处环境，选择对应的 MCP 接入地址：

| 环境 | 描述 | MCP 接入地址 |
| --- | --- | --- |
| **公网平台** | **CloudPSS** 公网： `https://cloudpss.net` | `https://cloudpss.net/api/mcp` |
| **私有部署** | 部署在私有服务器上，IP 地址例如： `http://10.101.10.45` | `http://10.101.10.45/api/mcp` |

:::tip
下文中所有示例均使用公网平台地址 `https://cloudpss.net/api/mcp`，请根据实际环境替换为对应地址。
:::


### 身份认证

**CloudPSS MCP** 服务支持通过身份认证流程完成登录授权。如果当前智能体不支持该认证流程，可使用 [SDK Token](../../software/50-user-center/40-general-account-settings/30-sdk-token-managemment/index.md) 方式进行认证。

1. 申请 **CloudPSS SDK Token**

- 登录 **CloudPSS** 用户中心。
- 进入 **设置** → **SDK Token 管理**。
- 申请并获取 Token。

:::info
如何申请 SDK Token，详情参考 [SDK Token 管理](../../software/50-user-center/40-general-account-settings/30-sdk-token-managemment/index.md)页面
:::

2. 在请求头中携带 Token

在调用 MCP 接口时，于 HTTP 请求头中添加 `authorization` 字段，格式如下：

```http
authorization: Bearer <你的 SDK Token>
```

示例：

```http
GET /api/mcp HTTP/1.1
Host: cloudpss.net
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
:::warning
Token 具有访问权限，请妥善保管，避免泄露。
:::

### 接入后工作流程

MCP 配置成功后，打开 **SimStudio** 界面，点击右下角聊天图标，完成客户端 RPC 在 MCP 服务器上的连接。在聊天界面，可以复制当前连接的 connection ID。

![复制当前连接的 ID](copy-id.png)

**CloudPSS MCP** 连接管理工具：
- **`list_connections`** — 列出当前可用的 RPC 客户端连接。
- **`use_connection`** — 切换到指定的连接 ID，后续操作均在该连接对应的 **CloudPSS** 项目上下文中执行。

**工作流：**

1. 如需确认可用连接，调用 `list_connections`。
2. 使用 `use_connection` 切换到目标连接（如果当前连接已正确则跳过）。
3. 后续所有 **CloudPSS** 操作直接调用对应工具。


## 案例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="case1" label="Claude 中接入 MCP 服务器">

**添加 MCP 服务器**

1. 在 Claude 命令行中执行以下命令：

```bash
claude mcp add-json cloudpss-mcp '{ "type": "http", "url": "https://cloudpss.net/api/mcp" }'
```

**查看与认证**

进入 Claude 控制台，使用 `/mcp` 命令查看已添加的 MCP 服务器。选择 `cloudpss-mcp` 服务器，点击 `authenticate` 选项完成认证。

</TabItem>

<TabItem value="case2" label="OpenCode 中接入 MCP 服务器">

**配置文件**

在 OpenCode 配置文件的 `mcp` 字段下定义 MCP 服务器。为每个 MCP 指定一个唯一名称，后续可在提示词中通过该名称引用。

```json title="opencode.json"
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "cloudpss-mcp": {
      "type": "remote",
      "url": "https://cloudpss.net/api/mcp",
      "enabled": true
    }
  }
}
```

**触发认证**

如果服务器需要身份验证，OpenCode 会在首次使用时提示进行认证。也可以使用以下命令手动触发：

```bash
opencode mcp auth cloudpss-mcp
```

</TabItem>

</Tabs>

##  常见问题

接入后无响应？

:   确认使用的 MCP 地址与当前网络环境一致。

智能体不支持自动认证流程怎么办？

:   请参考本文档[身份认证](#身份认证)，使用 **SDK Token** 方式手动在请求头中完成认证。


## 相关链接

- [OpenCode 配置](https://opencode.ai/config.json)
- [Claude MCP 接入](https://code.claude.com/docs/zh-CN/mcp)

