---
title: 查询操作 (Query)
description: CloudPSS GraphQL API 快速入门查询操作

tags:
- graphql
- quick-start
---

## 系统查询

### 系统信息
```graphql showLineNumbers
query SystemInfo {
  systemInfo {
    machineId
  }
}
```

## 账户查询

### 账户信息
```graphql showLineNumbers
query GetAccount($input: AccountInput!) {
  account(input: $input) {
    name
    displayName
    type
    expiredAt
    suspendedAt
    ... on AccountUser {
      cid
      displayName
      name
      type
      email
      phone
      bio
      company
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
      expiredAt
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
      secure_digest
      suspendedAt
    }
    ... on AccountOrganization {
      name
      displayName
      email
      phone
      type
      expiredAt
      description
      suspendedAt
      members {
        cid
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      moderators {
        cid
        displayName
        expiredAt
        name
        suspendedAt
        type
      }
      owner {
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

### 账户列表
```graphql showLineNumbers
query GetAccounts($input: AccountsInput!) {
  accounts(input: $input) {
    items {
      name
      displayName
      type
      expiredAt
      suspendedAt
      ... on AccountUser {
        cid
        displayName
        name
        type
        email
        phone
        bio
        company
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
        expiredAt
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
        secure_digest
        suspendedAt
      }
      ... on AccountOrganization {
        name
        displayName
        email
        phone
        type
        expiredAt
        description
        suspendedAt
        members {
          cid
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
        moderators {
          cid
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
        owner {
          displayName
          expiredAt
          name
          suspendedAt
          type
        }
      }
    }
    cursor
    count
    total
  }
}
```

### 账户令牌信息
```graphql showLineNumbers
query GetAccountToken($input: AccountTokenInput!) {
  accountToken(input: $input) {
    user {
      cid
      displayName
      name
      type
      email
      phone
      bio
      company
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
      expiredAt
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
      secure_digest
      suspendedAt
    }
    token
    scopes
    roles
    publicKey
    expirationTime
  }
}
```

### 账户验证质询
```graphql showLineNumbers
query GetAccountChallenge($input: AccountChallengeInput!) {
  accountChallenge(input: $input) {
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
      name
      displayName
      type
      expiredAt
      suspendedAt
      ... on AccountUser {
        cid
        displayName
        name
        type
        email
        phone
        bio
        company
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
        expiredAt
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
        secure_digest
        suspendedAt
      }
    }
  }
}
```

### 账户令牌存根列表
```graphql showLineNumbers
query GetAccountTokenStubs {
  accountTokenStubs {
    id
    token
    expirationTime
  }
}
```


## 资源查询

### 资源列表
```graphql showLineNumbers
query GetResources($input: ResourcesInput!) {
  resources(input: $input) {
    count
    cursor
    items {
      rid
      name
      description
      tags
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
      keywords
      updatedAt
    }
    orderBy
    total
  }
}
```


### 指定资源
```graphql showLineNumbers
query GetResouce($input: ResourceInput!) {
  resource(input: $input) {
    rid
    name
    description
    tags
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
    keywords
    updatedAt
  }
}
```

### 资源标签列表
```graphql showLineNumbers
query GetResouceTags($input: ResourceTagsInput!) {
  resourceTags(input: $input) {
    count
    cursor
    items
    total
  }
}
```

### 模型资源
```graphql showLineNumbers
query GetModel($input: ModelInput!, $type: String!) {
  model(input: $input) {
    rid
    name
    description
    configs
    jobs
    access {
      permission
      role
    }
    context
    type
    owner
    key
    keywords
    tags
    storage
    pages {
      key
      mode
      pageId
      path
      resource
    }
    createdAt
    updatedAt
    permissions {
      everyone
      member
      moderator
    }
    revision {
      author
      createdAt
      documentation
      hash
      graphic
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
}
```

### 模型资源列表
```graphql showLineNumbers
query GetModels($input: ModelsInput!) {
  models(input: $input) {
    count
    cursor
    items {
      rid
      name
      description
      type
      owner
      key
      keywords
      tags
      createdAt
      updatedAt
      permissions {
        everyone
        member
        moderator
      }
    }
    total
  }
}
```

### 模型资源拓扑
```graphql showLineNumbers
query GetModelTopology($input: ModelTopologyInput!) {
  modelTopology(input: $input) {
    components
    mappings
    ports
  }
}
```

### 模型资源哈希
```graphql showLineNumbers
query GetModelRevision($input: ModelRevisionInput! $type: String!) {
  modelRevision(input: $input) {
    author
    createdAt
    documentation
    graphic
    hash
    implements
    implement(type: $type)
    message
    parameters
    parent {
      author
    }
    pins
    version
  }
}
```

### 模型资源发布
```graphql showLineNumbers
query GetPage($input: PageInput!) {
  page(input: $input) {
    key
    mode
    pageId
    path
    resource
  }
}
```

### 应用程序资源
```graphql showLineNumbers
query GetApplication($input: ApplicationInput!) {
  application(input: $input) {
    rid
    name
    description
    revision {
      assets
      author
      createdAt
      documentation
      hash
      message
      parent {
        author
        hash
      }
      scenes
      version
    }
    access {
      permission
      role
    }
    context
    createdAt
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
    storage
    tags
    type
    updatedAt
  }
}
```

### 应用程序资源列表
```graphql showLineNumbers
query GetApplications($input: ApplicationsInput!) {
  applications(input: $input) {
    count
    cursor
    items {
      rid
      name
      description
      revision {
        assets
        author
        createdAt
        documentation
        hash
        message
        parent {
          author
          hash
        }
        scenes
        version
      }
      access {
        permission
        role
      }
      context
      createdAt
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
      storage
      tags
      type
      updatedAt
    }
    total
  }
}
```

### 应用程序资源哈希
```graphql showLineNumbers
query GetApplicationRevision($input: ApplicationRevisionInput!) {
  applicationRevision(input: $input) {
    assets
    author
    createdAt
    documentation
    hash
    message
    parent {
      author
      hash
    }
    scenes
    version
  }
}
```

### 函数资源
```graphql showLineNumbers
query GetFunction($input: FunctionInput!) {
  function(input: $input) {
    rid
    name
    description
    configs
    revision {
      author
      createdAt
      documentation
      hash
      implement
      implementType
      parameters
      message
      parent {
        author
        hash
      }
      version
    }
    access {
      permission
      role
    }
    context
    createdAt
    jobExecutor {
      id
      name
      valid
    }
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
    storage
    tags
    type
    updatedAt
  }
}
```

### 函数资源列表
```graphql showLineNumbers
query GetFunctions($input: FunctionsInput!) {
  functions(input: $input) {
    count
    cursor
    items {
      rid
      name
      description
      configs
      revision {
        author
        documentation
        hash
        implement
        implementType
        parameters
        message
        parent {
          author
          hash
        }
        version
      }
      context
      createdAt
      jobExecutor {
        id
        name
        valid
      }
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
      storage
      tags
      type
      updatedAt
    }
    total
  }
}
```

### 函数资源哈希
```graphql showLineNumbers
query GetFunctionRevision($input: FunctionRevisionInput!) {
  functionRevision(input: $input) {
    author
    createdAt
    documentation
    hash
    implement
    implementType
    parameters
    message
    parent {
      author
      hash
    }
    version
  }
}
```

## 任务查询

### 任务信息
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
    debug
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
    position
  }
}
```

### 任务列表
```graphql showLineNumbers
query GetJobs($input: JobsInput!) {
  jobs(input: $input) {
    items {
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
      position
      priority
      startTime
      status
      user
    }
    cursor
    count
    total
  }
}
```

### 任务策略
```graphql showLineNumbers
query GetJobPolicy($input: JobPolicyInput!) {
  jobPolicy(input: $input) {
    id
    createTime
    functions
    maxDuration
    maxPriority
    minPriority
    name
    queue {
      id
      name
      createTime
      load
      machines {
        id
        name
        tres {
          cpu
          ecpu
          mem
        }
        valid
      }
      running {
        id
        createTime
        endTime
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
        policy {
          name
          maxDuration
          priority
          queue
          tres {
            cpu
            ecpu
            mem
          }
        }
        progress
        startTime
      }
      scheduler
      updateTime
      waiting {
        id
        createTime
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
        priority
      }
    }
    tres {
      cpu
      ecpu
      mem
    }
    updateTime
    users
    visibility
  }
}
```

### 任务策略列表
```graphql showLineNumbers
query GetJobPolicies($input: JobPoliciesInput!) {
  jobPolicies(input: $input) {
    count
    cursor
    items {
      id
      createTime
      functions
      maxDuration
      maxPriority
      minPriority
      name
      queue {
        createTime
        id
        load
        machines {
          id
          name
          tres {
            cpu
            ecpu
            mem
          }
          valid
        }
        name
        running {
          createTime
          endTime
          id
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
          progress
          startTime
        }
        scheduler
        updateTime
        waiting {
          createTime
          id
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
          priority
        }
      }
      tres {
        cpu
        ecpu
        mem
      }
      updateTime
      users
      visibility
    }
    total
  }
}
```


## 日志查询

### 日志信息
```graphql showLineNumbers
query GetAuditLogs($input: AuditLogsInput!) {
    auditLogs(input: $input) {
    count
    cursor
    items {
      action
      actor
      context
      createdAt
      data
      id
      ip
      subject
      token
      userAgent
    }
    total
  }
}
```

### 日志操作
```graphql showLineNumbers
query GetLogAction {
  auditLogActions {
    action
    display
    service
    subject
  }
}
```