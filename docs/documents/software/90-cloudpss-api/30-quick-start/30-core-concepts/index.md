---
title: 核心概念
description: CloudPSS GraphQL API 快速入门核心概念

tags:
- graphql
- quick-start
---

### 资源标识符 (ResourceId)
格式: `type/owner/key`
- `type`: 资源类型 (application, function, model)
- `owner`: 资源所有者
- `key`: 资源唯一键名

### 权限系统
- **Owner**: 资源所有者，拥有全部权限
- **Moderator**: 管理员，可以管理资源和权限
- **Member**: 成员，有限的访问权限
- **Everyone**: 公开访问权限

### 分页查询
所有列表查询都支持基于游标的分页：
- `cursor`: 分页游标
- `limit`: 每页数量限制
- `orderBy`: 排序字段
