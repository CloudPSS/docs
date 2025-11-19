---
title: 变更操作 (Mutation)
description: CloudPSS GraphQL API 快速入门变更操作

tags:
- graphql
- quick-start
---

## 账户管理

### 创建账户验证质询
<!-- ```graphql showLineNumbers
mutation CreateAccountUser($input: CreateAccountUserInput!) {
  createAccountUser(input: $input) {
    name
    displayName
    email
  }
}
``` -->

```graphql showLineNumbers
mutation CreateAccountChallenge($input: CreateAccountChallengeInput!) {
  createAccountChallenge(input: $input) {
    id
    groups {
      items {
        id
        type
        data
      }
      required
    }
    user {
      cid
      bio
      name
      displayName
      email
      phone
      company
      type
      expiredAt
      suspendedAt
      secure_digest
      challenges {
        password
        email
        phone
        totp
        webauthn
        wechat
      }
      challengesUpdateTime {
        challenge
        email
        password
        phone
        totp
        webauthn
        wechat
      }
      memberOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      moderatorOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      ownerOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
    }
  }
}
```

### 创建组织账户
```graphql showLineNumbers
mutation CreateAccountOrganization($input: CreateAccountOrganizationInput!) {
  createAccountOrganization(input: $input) {
    name
    displayName
    description
    email
    phone
    type
    suspendedAt
    expiredAt
    owner {
      name
      displayName
      description
      email
      phone
      type
      expiredAt
      suspendedAt
      members {
        cid
      }
      moderators {
        cid
      }
      owner {
        name
      }
    }
    members {
      cid
      bio
      name
      displayName
      email
      phone
      company
      type
      expiredAt
      suspendedAt
      secure_digest
      challenges {
        password
        email
        phone
        totp
        webauthn
        wechat
      }
      challengesUpdateTime {
        challenge
        email
        password
        phone
        totp
        webauthn
        wechat
      }
      memberOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      moderatorOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      ownerOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
    }
    moderators {
      cid
      bio
      name
      displayName
      email
      phone
      company
      type
      expiredAt
      suspendedAt
      secure_digest
      challenges {
        password
        email
        phone
        totp
        webauthn
        wechat
      }
      challengesUpdateTime {
        challenge
        email
        password
        phone
        totp
        webauthn
        wechat
      }
      memberOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      moderatorOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      ownerOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
    }
  }
}
```

### 创建账户令牌（登录/注册）
```graphql showLineNumbers
mutation CreateAccountToken($input: CreateAccountTokenInput!) {
  createAccountToken(input: $input) {
    user {
      cid
      bio
      name
      displayName
      email
      phone
      company
      type
      expiredAt
      suspendedAt
      secure_digest
      challenges {
        password
        email
        phone
        totp
        webauthn
        wechat
      }
      challengesUpdateTime {
        challenge
        email
        password
        phone
        totp
        webauthn
        wechat
      }
      memberOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      moderatorOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      ownerOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
    }
    roles
    publicKey
    scopes
    expirationTime
    token
  }
}
```

### 更新账户信息
```graphql showLineNumbers
mutation UpdateAccount($input: UpdateAccountInput!) {
  updateAccount(input: $input) {
    name
    displayName
    type
    expiredAt
    suspendedAt
    ... on AccountUser {
      cid
      bio
      name
      displayName
      email
      phone
      company
      type
      expiredAt
      suspendedAt
      secure_digest
      challenges {
        password
        email
        phone
        totp
        webauthn
        wechat
      }
      challengesUpdateTime {
        challenge
        email
        password
        phone
        totp
        webauthn
        wechat
      }
      memberOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      moderatorOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      ownerOf {
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
    }
    ... on AccountOrganization {
      name
      displayName
      description
      email
      phone
      type
      suspendedAt
      expiredAt
      owner {
        name
        displayName
        description
        email
        phone
        type
        expiredAt
        suspendedAt
        members {
          cid
        }
        moderators {
          cid
        }
        owner {
          name
        }
      }
      members {
        cid
        bio
        name
        displayName
        email
        phone
        company
        type
        expiredAt
        suspendedAt
        secure_digest
        challenges {
          password
          email
          phone
          totp
          webauthn
          wechat
        }
        challengesUpdateTime {
          challenge
          email
          password
          phone
          totp
          webauthn
          wechat
        }
        memberOf {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
        moderatorOf {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
        ownerOf {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
      }
      moderators {
        cid
        bio
        name
        displayName
        email
        phone
        company
        type
        expiredAt
        suspendedAt
        secure_digest
        challenges {
          password
          email
          phone
          totp
          webauthn
          wechat
        }
        challengesUpdateTime {
          challenge
          email
          password
          phone
          totp
          webauthn
          wechat
        }
        memberOf {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
        moderatorOf {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
        ownerOf {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
      }
    }
  }
}
```

### 更新账户验证质询配置
```graphql showLineNumbers
mutation UpdateAccountChallenge($input: UpdateAccountChallengeInput!) {
  updateAccountChallenge(input: $input)
}
```

### 删除账户令牌
```graphql showLineNumbers
mutation DestroyAccountToken($input: DestroyAccountTokenInput!) {
  destroyAccountToken(input: $input)
}
```

### 删除组织账户
```graphql showLineNumbers
mutation DestroyAccountOrganization($input: DestroyAccountOrganizationInput!) {
  destroyAccountOrganization(input: $input)
}
```

### 删除账户令牌存根
```graphql showLineNumbers
mutation DestroyAccountTokenStub($input: DestroyAccountTokenStubInput!) {
  destroyAccountTokenStub(input: $input)
}
```

## 资源管理

### 创建模型
```graphql showLineNumbers
mutation CreateModel($input: CreateModelInput!, $type: String!) {
  createModel(input: $input) {
    access {
      permission
      role
    }
    configs
    context
    rid
    name
    description
    createdAt
    jobs
    key
    keywords
    owner
    pages {
      key
      mode
      pageId
      path
      resource
    }
    permissions {
      everyone
      member
      moderator
    }
    revision {
      author
      createdAt
      documentation
      graphic
      hash
      implement(type: $type)
      implements
      message
      parameters
      parent {
        author
        hash
      }
      pins
      version
    }
    storage
    tags
    type
    updatedAt
  }
}
```

### 创建模型哈希
```
mutation CreateModelRevision($input: CreateModelRevisionInput!, $type: String!) {
  createModelRevision(input: $input) {
    author
    createdAt
    documentation
    graphic
    hash
    implement(type: $type)
    implements
    message
    parameters
    parent {
      author
      hash
    }
    pins
    version
  }
}
```

### 更新模型
```graphql showLineNumbers
mutation UpdateModel($input: UpdateModelInput!) {
  updateModel(input: $input) {
    access {
      permission
      role
    }
    configs
    context
    rid
    name
    description
    createdAt
    jobs
    key
    keywords
    owner
    pages {
      key
      mode
      pageId
      path
      resource
    }
    permissions {
      everyone
      member
      moderator
    }
    revision {
      author
      createdAt
      documentation
      graphic
      hash
      implement(type: $type)
      implements
      message
      parameters
      parent {
        author
        hash
      }
      pins
      version
    }
    storage
    tags
    type
    updatedAt
  }
}
```

### 删除模型
```graphql showLineNumbers
mutation DestroyModel($input: DestroyModelInput!) {
  destroyModel(input: $input)
}
```

### 创建应用程序
```graphql showLineNumbers
mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    rid
    name
    description
    access {
      permission
      role
    }
    context
    createdAt
    key
    type
    keywords
    tags
    storage
    updatedAt
    pages {
      key
      mode
      pageId
      path
      resource
    }
    permissions {
      everyone
      member
      moderator
    }
    owner
    revision {
      assets
      author
      createdAt
      documentation
      hash
      message
      parent {
        hash
        author
      }
      scenes
      version
    }
  }
}
```

### 创建应用程序哈希
```graphql showLineNumbers
mutation CreateApplicationRevision($input: CreateApplicationRevisionInput!) {
  createApplicationRevision(input: $input) {
    assets
    author
    createdAt
    documentation
    hash
    message
    parent {
      hash
      author
    }
    scenes
    version
  }
}
```

### 更新应用程序
```graphql showLineNumbers
mutation UpdateApplication($input: UpdateApplicationInput!) {
  updateApplication(input: $input) {
    rid
    name
    description
    access {
      permission
      role
    }
    context
    createdAt
    key
    type
    keywords
    tags
    storage
    updatedAt
    pages {
      key
      mode
      pageId
      path
      resource
    }
    permissions {
      everyone
      member
      moderator
    }
    owner
    revision {
      assets
      author
      createdAt
      documentation
      hash
      message
      parent {
        hash
        author
      }
      scenes
      version
    }
  }
}
```

### 删除应用程序
```graphql showLineNumbers
mutation DestroyApplication($input: DestroyApplicationInput!) {
  destroyApplication(input: $input)
}
```

### 创建函数
```graphql showLineNumbers
mutation CreateFunction($input: CreateFunctionInput!) {
  createFunction(input: $input) {
    rid
    name
    description
    access {
      permission
      role
    }
    configs
    context
    createdAt
    key
    type
    keywords
    jobExecutor {
      id
      name
      valid
    }
    tags
    storage
    updatedAt
    pages {
      key
      mode
      pageId
      path
      resource
    }
    permissions {
      everyone
      member
      moderator
    }
    owner
    revision {
      author
      createdAt
      documentation
      hash
      message
      parent {
        hash
        author
      }
      parameters
      implement
      implementType
      version
    }
  }
}
```

### 创建函数哈希
```graphql showLineNumbers
mutation CreateFunctionRevision($input: CreateFunctionRevisionInput!) {
  createFunctionRevision(input: $input) {
    author
    createdAt
    documentation
    hash
    message
    parent {
      hash
      author
    }
    parameters
    implement
    implementType
    version
  }
}
```

### 更新函数
```graphql showLineNumbers
mutation UpdateFunction($input: UpdateFunctionInput!) {
  updateFunction(input: $input) {
    rid
    name
    description
    access {
      permission
      role
    }
    configs
    context
    createdAt
    key
    type
    keywords
    jobExecutor {
      id
      name
      valid
    }
    tags
    storage
    updatedAt
    pages {
      key
      mode
      pageId
      path
      resource
    }
    permissions {
      everyone
      member
      moderator
    }
    owner
    revision {
      author
      createdAt
      documentation
      hash
      message
      parent {
        hash
        author
      }
      parameters
      implement
      implementType
      version
    }
  }
}
```

### 删除函数
```graphql showLineNumbers
mutation DestroyFunction($input: DestroyFunctionInput!) {
  destroyFunction(input: $input)
}
```

### 更新资源
```graphql showLineNumbers
mutation UpdateResource($input: UpdateResourceInput!) {
  updateResource(input: $input) {
    rid
    name
    description
    tags
    keywords
    type
    owner
    key
    access {
      permission
      role
    }
    permissions {
      everyone
      member
      moderator
    }
    updatedAt
  }
}
```

### 发布页面
```graphql showLineNumbers
mutation PublishPage($input: PublishPageInput!) {
  publishPage(input: $input) {
    key
    mode
    path
    pageId
    resource
  }
}
```

### 取消发布
```graphql showLineNumbers
mutation UnPublishPage($input: UnpublishPageInput!) {
   unpublishPage(input: $input)
}
```

### 

## 任务管理

### 创建任务
```graphql showLineNumbers
mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    args
    context
    createTime
    debug
    endTime
    id
    input
    machine {
      id
      name
      tres {
        cpu
        ecpu
        mem
      }
      valid
    }
    output
    policy {
      maxDuration
      name
      priority
      queue
      tres {
        cpu
        ecpu
        mem
      }
    }
    position
    priority
    startTime
    status
    user
  }
}
```

### 终止任务
```graphql showLineNumbers
mutation AbortJob($input: AbortJobInput!) {
  abortJob(input: $input) {
    id
    status
    args
    context
    createTime
    debug
    endTime
    input
    machine {
      id
      name
      tres {
        cpu
        ecpu
        mem
      }
      valid
    }
    output
    policy {
      maxDuration
      name
      priority
      queue
      tres {
        cpu
        ecpu
        mem
      }
    }
    position
    priority
    startTime
    user
  }
}
```