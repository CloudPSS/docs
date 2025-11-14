---
title: 身份验证
description: CloudPSS GraphQL API 快速入门身份验证

tags:
- graphql
- quick-start
---

### 1. 获取访问令牌

```graphql showLineNumbers
mutation CreateAccountToken($input: CreateAccountTokenInput!) {
  createAccountToken(input: $input) {
    token
    expirationTime
    user {
      name
      displayName
      email
    }
  }
}
```

### 2. 使用令牌访问API

```
Authorization: Bearer YOUR_JWT_TOKEN
```

:::tip 提示
所有 API 请求的 HTTP 头中需包含 YOUR_JWT_TOKEN
:::


### 3. 令牌管理

```graphql showLineNumbers
# 查询当前令牌信息
query GetAccountToken($input: AccountTokenInput!) {
  accountToken(input: $input) {
    token
    scopes
    roles
    expirationTime
  }
}

# 销毁令牌
mutation DestroyAccountToken($input: DestroyAccountTokenInput!) {
  destroyAccountToken(input: $input)
}
```
