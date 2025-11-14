---
title: 开发示例
description: CloudPSS API 快速入门开发示例（NodeJS）

tags:
- API
- quick-start
---

以下是一个完整的 Node.js 示例，展示如何使用 CloudPSS XStudio GraphQL API

### 1. 安装依赖

```bash showLineNumbers
npm install axios graphql-request dotenv
```

### 2. 环境配置

创建 `.env` 文件：
```env showLineNumbers
CLOUDPSS_API_URL=https://cloudpss.net/graphql
CLOUDPSS_USERNAME=your_username
CLOUDPSS_PASSWORD=your_password
```

### 3. API 客户端实现

```javascript showLineNumbers
// cloudpss-client.js
import "dotenv/config";
import { GraphQLClient } from "graphql-request";

class CloudPSSClient {
  constructor() {
    this.apiUrl = process.env.CLOUDPSS_API_URL;
    if (!this.apiUrl) {
      throw new Error("CLOUDPSS_API_URL 未配置");
    }
    this.client = new GraphQLClient(this.apiUrl);
    this.token = null;
  }

  // 身份验证
  async authenticate(username, password) {
    try {
      // 1. 创建账户质询
      const challengeQuery = `
        query accountChallenge($input: AccountChallengeInput!) {
          accountChallenge(input: $input) {
            id
            groups {
              items {
                id
                type
              }
            }
          }
        }
      `;

      const challengeResult = await this.client.request(challengeQuery, {
        input: {
          name: username,
        },
      });

      // 2. 响应质询获取令牌
      const tokenQuery = `
        mutation CreateToken($input: CreateAccountTokenInput!) {
          createAccountToken(input: $input) {
            token
            expirationTime
            user {
              name
              displayName
            }
          }
        }
      `;

      const challengeId =
        challengeResult.accountChallenge.groups[0].items.find(
          (item) => item.type === "PASSWORD"
        ).id ?? "";

      const tokenResult = await this.client.request(tokenQuery, {
        input: {
          id: challengeResult.accountChallenge.id,
          answers: [
            {
              id: challengeId,
              answer: { password },
            },
          ],
        },
      });

      this.token = tokenResult.createAccountToken.token;

      // 设置认证头
      this.client.setHeader("Authorization", `Bearer ${this.token}`);

      return tokenResult.createAccountToken;
    } catch (error) {
      throw new Error(`Authentication failed: ${error.message}`);
    }
  }

  // 获取系统信息
  async getSystemInfo() {
    const query = `
      query SystemInfo {
        systemInfo {
          machineId
        }
      }
    `;

    return await this.client.request(query);
  }

  // 查询用户信息
  async getAccount(name, type = "USER") {
    const query = `
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
        }
      }
    `;

    return await this.client.request(query, {
      input: { name, type },
    });
  }

  // 查询应用程序列表
  async getApplications(options = {}) {
    const query = `
      query GetApplications($input: ApplicationsInput!) {
        applications(input: $input) {
          items {
            rid
            name
            description
            owner
            updatedAt
            tags
          }
          cursor
          count
          total
        }
      }
    `;

    const input = {
      orderBy: options.orderBy || ["updatedAt>"],
      limit: options.limit || 20,
      ...options,
    };

    return await this.client.request(query, { input });
  }

  // 创建应用程序
  async createApplication(appData) {
    const mutation = `
      mutation CreateApplication($input: CreateApplicationInput!) {
        createApplication(input: $input) {
          rid
          name
          description
          owner
        }
      }
    `;

    return await this.client.request(mutation, {
      input: appData,
    });
  }

  // 提交任务
  async submitJob(jobData) {
    const mutation = `
      mutation CreateJob($input: CreateJobInput!) {
        createJob(input: $input) {
          id
          status
          createTime
          user
        }
      }
    `;

    return await this.client.request(mutation, {
      input: jobData,
    });
  }

  // 查询任务状态
  async getJobStatus(jobId) {
    const query = `
      query GetJob($input: JobInput!) {
        job(input: $input) {
          id
          status
          createTime
          startTime
          endTime
          args
          context
          priority
        }
      }
    `;

    return await this.client.request(query, {
      input: { id: jobId },
    });
  }

  // 查询任务列表
  async getJobs(options = {}) {
    const query = `
      query GetJobs($input: JobsInput!) {
        jobs(input: $input) {
          items {
            id
            status
            createTime
            startTime
            endTime
            user
          }
          cursor
          count
          total
        }
      }
    `;

    const input = {
      orderBy: options.orderBy || ["createTime<"],
      limit: options.limit || 20,
      ...options,
    };

    return await this.client.request(query, { input });
  }

  // 终止任务
  async abortJob(jobId, timeout = 30) {
    const mutation = `
      mutation AbortJob($input: AbortJobInput!) {
        abortJob(input: $input) {
          id
          status
        }
      }
    `;

    return await this.client.request(mutation, {
      input: { id: jobId, timeout },
    });
  }
}

export default CloudPSSClient;
```

### 4. 使用示例

```javascript showLineNumbers
// example.js
import CloudPSSClient from "./cloudpss-client.js";

async function main() {
  const client = new CloudPSSClient();

  try {
    // 1. 身份验证
    console.log("正在登录...");
    const authResult = await client.authenticate(
      process.env.CLOUDPSS_USERNAME,
      process.env.CLOUDPSS_PASSWORD
    );
    console.log("登录成功:", authResult.user.displayName);

    // 2. 获取系统信息
    console.log("\n获取系统信息...");
    const systemInfo = await client.getSystemInfo();
    console.log("系统信息:", systemInfo);

    // 3. 查询应用程序列表
    console.log("\n查询应用程序列表...");
    const apps = await client.getApplications({ limit: 5 });
    console.log(`找到 ${apps.applications.total} 个应用程序:`);
    apps.applications.items.forEach((app) => {
      console.log(`- ${app.name} (${app.rid})`);
    });

    // 4. 查询用户任务
    console.log("\n查询任务列表...");
    const user = authResult.user.name;
    const jobs = await client.getJobs({
      limit: 10,
      user: ["or", user],
    });
    console.log(`找到 ${jobs.jobs.total} 个任务:`);
    jobs.jobs.items.forEach((job) => {
      console.log(
        `- 任务 ${job.id}: ${job.status} (${new Date(
          job.createTime
        ).toLocaleString()})`
      );
    });

    // 5. 提交新任务示例
    console.log("\n提交新任务...");
    const newJob = await client.submitJob({
      context: ["function/CloudPSS/hello"],
      args: {
        message: "Hello from Node.js!",
        timestamp: Date.now(),
      },
      policy: {
        queue: 1,
        tres: {
          cpu: 1,
          ecpu: 0,
          mem: 0,
        },
        priority: 0,
      },
    });

    console.log("任务已提交:", newJob.createJob);

    // 6. 监控任务状态
    console.log("\n监控任务状态...");
    const jobId = newJob.createJob.id;
    let completed = false;

    while (!completed) {
      const jobStatus = await client.getJobStatus(jobId);

      console.log(`任务 ${jobId} 状态: ${jobStatus.job.status}`);

      if (
        ["COMPLETED", "FAILED", "ABORTED", "CANCELED"].includes(
          jobStatus.job.status
        )
      ) {
        completed = true;
        console.log("任务执行完成");
      } else {
        // 等待 5 秒后再次检查
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
  } catch (error) {
    console.error("错误:", error.message);
    if (error.response) {
      console.error("响应详情:", error.response.errors);
    }
  }
}

// 运行示例
main().catch(console.error);

```

### 5. 高级功能示例

```javascript showLineNumbers
// advanced-examples.js
import CloudPSSClient from "./cloudpss-client.js";

class CloudPSSAdvanced extends CloudPSSClient {
  // 批量任务管理
  async batchSubmitJobs(jobsData) {
    const results = [];
    for (const jobData of jobsData) {
      try {
        const result = await this.submitJob(jobData);
        results.push({ success: true, job: result.createJob });
      } catch (error) {
        results.push({ success: false, error: error.message });
      }
    }
    return results;
  }

  // 等待任务完成（默认 5 分钟超时）
  async waitForJobCompletion(jobId, maxWaitTime = 300000) {
    const startTime = Date.now();

    while (Date.now() - startTime < maxWaitTime) {
      const { job } = await this.getJobStatus(jobId);
      const status = job.status;

      if (["COMPLETED", "FAILED", "ABORTED", "CANCELED"].includes(status)) {
        return job;
      }

      // 等待 3 秒
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    throw new Error(`Job ${jobId} did not complete within ${maxWaitTime}ms`);
  }

  // 资源权限管理
  async updateResourcePermissions(resourceId, permissions) {
    const mutation = `
      mutation UpdateResource($input: UpdateResourceInput!) {
        updateResource(input: $input) {
          rid
          permissions {
            owner
            moderator
            member
            everyone
          }
        }
      }
    `;

    return await this.client.request(mutation, {
      input: { rid: resourceId, permissions },
    });
  }

  // 发布应用页面
  async publishApplicationPage(resourceId, pageKey, pagePath) {
    const mutation = `
      mutation PublishPage($input: PublishPageInput!) {
        publishPage(input: $input) {
          pageId
          resource
          key
          path
          mode
        }
      }
    `;

    return await this.client.request(mutation, {
      input: {
        resource: resourceId,
        key: pageKey,
        path: pagePath,
        mode: "production",
      },
    });
  }
}

export default CloudPSSAdvanced;

```

### 6. 实用工具函数

```javascript showLineNumbers
// utils.js

// 构建资源ID
function buildResourceId(type, owner, key) {
  return `${type}/${owner}/${key}`;
}

// 解析资源ID
function parseResourceId(rid) {
  const parts = rid.split('/');
  if (parts.length !== 3) {
    throw new Error('Invalid resource ID format');
  }
  return {
    type: parts[0],
    owner: parts[1],
    key: parts[2]
  };
}

// 格式化任务状态
function formatJobStatus(status) {
  const statusMap = {
    'WAITING': '等待中',
    'RUNNING': '运行中',
    'COMPLETED': '已完成',
    'FAILED': '失败',
    'ABORTED': '已中止',
    'CANCELED': '已取消',
    'TIMED_OUT': '超时',
    'ABORTING': '中止中',
    'KILLED': '被终止'
  };
  return statusMap[status] || status;
}

// 错误处理器
function handleGraphQLError(error) {
  if (error.response && error.response.errors) {
    const messages = error.response.errors.map(err => err.message).join(', ');
    throw new Error(`GraphQL Error: ${messages}`);
  }
  throw error;
}

module.exports = {
  buildResourceId,
  parseResourceId,
  formatJobStatus,
  handleGraphQLError
};
```