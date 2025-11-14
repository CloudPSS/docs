---
title: 变更操作 (Mutation)
description: CloudPSS API 快速入门变更操作

tags:
- API
- quick-start
---

### 用户管理变更

#### 创建用户账户
```graphql showLineNumbers
mutation CreateAccountUser($input: CreateAccountUserInput!) {
  createAccountUser(input: $input) {
    name
    displayName
    email
  }
}
```

#### 创建组织
```graphql showLineNumbers
mutation CreateAccountOrganization($input: CreateAccountOrganizationInput!) {
  createAccountOrganization(input: $input) {
    name
    displayName
    description
  }
}
```

#### 更新账户信息
```graphql showLineNumbers
mutation UpdateAccount($input: UpdateAccountInput!) {
  updateAccount(input: $input) {
    name
    displayName
    ... on AccountUser {
      email
      phone
      bio
    }
  }
}
```

### 资源管理变更

#### 创建应用程序
```graphql showLineNumbers
mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    rid
    name
    description
  }
}
```

#### 创建函数
```graphql showLineNumbers
mutation CreateFunction($input: CreateFunctionInput!) {
  createFunction(input: $input) {
    rid
    name
    description
  }
}
```

#### 创建模型
```graphql showLineNumbers
mutation CreateModel($input: CreateModelInput!) {
  createModel(input: $input) {
    rid
    name
    description
  }
}
```

#### 更新资源
```graphql showLineNumbers
mutation UpdateResource($input: UpdateResourceInput!) {
  updateResource(input: $input) {
    rid
    name
    description
    tags
    keywords
  }
}
```

### 任务管理变更

#### 创建任务
```graphql showLineNumbers
mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    id
    status
    createTime
  }
}
```

#### 终止任务
```graphql showLineNumbers
mutation AbortJob($input: AbortJobInput!) {
  abortJob(input: $input) {
    id
    status
  }
}
```