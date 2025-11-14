---
title: 数据类型
description: CloudPSS API 快速入门数据类型

tags:
- API
- quick-start
---

### 核心数据类型

#### 账户类型 (AccountType)
- `SUPERUSER`: 超级用户
- `ADMINISTRATOR`: 管理员  
- `USER`: 普通用户
- `ORGANIZATION`: 组织账户

#### 任务状态 (JobStatus)
- `WAITING`: 等待运行
- `RUNNING`: 运行中
- `COMPLETED`: 运行成功
- `FAILED`: 运行失败
- `ABORTED`: 已中止
- `CANCELED`: 已取消

#### 权限类型 (ResourcePermission)
- `READ`: 只读权限
- `WRITE`: 读写权限
- `ADMIN`: 管理权限
- `NONE`: 无权限

### 输入类型说明

#### 查找条件 (FindCondition)
用于构建查询条件，支持：
- 精确匹配
- 模糊匹配
- 范围查询
- 空值检查

#### 集合查找条件 (FindSetCondition)
用于数组/集合字段的查询条件，支持：
- 包含检查
- 交集查询
- 子集查询
