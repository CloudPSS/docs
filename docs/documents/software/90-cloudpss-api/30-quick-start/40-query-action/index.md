---
title: 查询操作 (Query)
description: CloudPSS GraphQL API 快速入门查询操作

tags:
- graphql
- quick-start
---

### 系统信息查询

```graphql showLineNumbers
# 获取系统信息
query SystemInfo {
  systemInfo {
    machineId
  }
}
```

### 用户管理查询

#### 查询账户信息
```graphql showLineNumbers
query GetAccount($input: AccountInput!) {
  account(input: $input) {
    name
    displayName
    type
    ... on AccountUser {
      email
      phone
      bio
      company
    }
    ... on AccountOrganization {
      description
      moderators {
        name
        displayName
      }
    }
  }
}
```

#### 查询账户列表
```graphql showLineNumbers
query GetAccounts($input: AccountsInput!) {
  accounts(input: $input) {
    items {
      name
      displayName
      type
    }
    cursor
    count
    total
  }
}
```

### 资源管理查询

#### 查询应用程序
```graphql showLineNumbers
query GetApplication($input: ApplicationInput!) {
  application(input: $input) {
    rid
    name
    description
    owner
    tags
    keywords
    permissions {
      owner
      moderator
      member
      everyone
    }
    revision {
      hash
      author
      message
      version
      documentation
    }
  }
}
```

#### 查询函数
```graphql showLineNumbers
query GetFunction($input: FunctionInput!) {
  function(input: $input) {
    rid
    name
    description
    configs
    revision {
      hash
      implementType
      parameters
    }
  }
}
```

#### 查询模型
```graphql showLineNumbers
query GetModel($input: ModelInput!) {
  model(input: $input) {
    rid
    name
    description
    configs
    jobs
    revision {
      hash
      graphic
      implements
      parameters
      pins
    }
  }
}
```

### 任务管理查询

#### 查询任务
```graphql showLineNumbers
query GetJob($input: JobInput!) {
  job(input: $input) {
    id
    args
    createTime
    startTime
    endTime
    status
    context
    user
    priority
    policy {
      name
      queue
      tres {
        cpu
        ecpu
        mem
      }
    }
  }
}
```

#### 查询任务列表
```graphql showLineNumbers
query GetJobs($input: JobsInput!) {
  jobs(input: $input) {
    items {
      id
      status
      createTime
      user
    }
    cursor
    count
    total
  }
}
```