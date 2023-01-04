---
title: 内核运行接口添加
order: 50
---

## ==添加每个内核的运行入口用于运行指定内核程序，如下==

### 1 电磁暂态内核运行入口
### emtpRun(config=None,jobName=None,configName=None)
:::info
运行`emtp`内核，如果当前`model`没有创建`empt Job`时报错，默认使用第一个计算方案，进行仿真。
:::

**Params config:**  参数方案，可选，默认使用保存时选中的参数方案

**Params jobName:**  计算方案名称，可选，默认使用第一个计算方案，如果同名使用最靠前一个

**Params configName:**  参数方案名称，可选，如果同时使用config和configName 以config 为主，同名使用最靠前一个

**返回:**  runner Runner[EMTResult]

### 2 移频电磁暂态内核运行入口
### sfemtRun(job=None,config=None)
:::info
运行移频电磁暂态内核，如果当前`model`没有创建`Job`时报错，默认使用第一个计算方案，进行仿真。
:::

**Params job:**  计算方案名称，可选，字符串类型或者字典类型,默认使用第一个计算方案，如果同名使用最靠前一个

**Params config:**  参数方案，可选，字符串类型或者字典类型,默认使用保存时选中的参数方案

**返回:**  runner Runner[EMTResult]

### 3 潮流计算内核运行入口
### powerFlowRun(job=None,config=None)
:::info
运行潮流内核，如果当前`model`没有创建`Job`时报错，默认使用第一个计算方案，进行仿真。
:::

**Params job:**  计算方案名称，可选，字符串类型或者字典类型,默认使用第一个计算方案，如果同名使用最靠前一个

**Params config:**  参数方案，可选，字符串类型或者字典类型,默认使用保存时选中的参数方案

**返回:**  runner Runner[PowerFlowResult]

### 4 配电网三相不平衡潮流内核运行入口
### threePhasePowerFlowRun(job=None,config=None)
:::info
运行配电网三相不平衡潮流内核，如果当前`model`没有创建`Job`时报错，默认使用第一个计算方案，进行仿真。
:::

**Params job:**  计算方案名称，可选，字符串类型或者字典类型,默认使用第一个计算方案，如果同名使用最靠前一个

**Params config:**  参数方案，可选，字符串类型或者字典类型,默认使用保存时选中的参数方案

**返回:**  runner Runner[PowerFlowResult]