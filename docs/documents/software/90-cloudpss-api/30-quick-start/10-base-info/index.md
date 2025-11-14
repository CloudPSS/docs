---
title: 基本信息
description: CloudPSS API 快速入门基本信息

tags:
- API
- quick-start
---

CloudPSS XStudio 提供了一套完整的 GraphQL API，用于管理用户账户、资源、任务等核心功能。

### 基本信息

- **API 端点**: `https://cloudpss.net/graphql`
- **协议**: HTTPS
- **数据格式**: JSON
- **身份验证**: JWT Token

### API 架构概览

```
CloudPSS XStudio API
├── 用户管理 (Account Management)
│   ├── 用户账户 (User Accounts)
│   ├── 组织管理 (Organizations)
│   └── 身份验证 (Authentication)
├── 资源管理 (Resource Management)
│   ├── 应用程序 (Applications)
│   ├── 函数 (Functions)
│   ├── 模型 (Models)
│   └── 页面发布 (Page Publishing)
└── 任务管理 (Job Management)
    ├── 任务执行 (Job Execution)
    ├── 队列管理 (Queue Management)
    └── 策略配置 (Policy Configuration)
```