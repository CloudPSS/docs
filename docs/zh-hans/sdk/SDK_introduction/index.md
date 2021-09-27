---
title: SDK简介
author: syk
category: 100
order: 100
---

CloudPSS SDK是基于CloudPSS-API封装的模型及软件开发套件。用户可通过编写Python、Matlab等脚本构建自定义模型，或是调用CloudPSS平台中的模型修改、仿真计算功能，实现诸如自动修改模型、批量仿真计算、自动化生成报告等复杂且繁琐的功能。用户也可在其自己的应用程序中调用CloudPSS仿真引擎，实现仿真驱动的高级分析应用。

CloudPSS SDK包含模型层、算法层和应用层三种开发套件，其中：

1. `模型层开发套件`帮助用户在CloudPSS SimStudio官方潮流计算、电磁暂态仿真、移频电磁暂态仿真、综合能源能量流计算等内核中开发第三方模型或用户自定义模型。目前，模型层SDK已开放基于Matlab函数的自定义控制元件接入，后续将进一步开放Python、C/C++的标准元件开发套件。
2. `算法层开发套件`帮助用户在CloudPSS FuncStudio中集成自己的算法内核，从而借助CloudPSS XStudio平台快速开发并部署自己的计算应用。该部分内容将在年内发布，敬请期待。
3. `应用层开发套件`帮助用户在利用脚本的形式快速调用CloudPSS官方计算内核和第三方接入的计算内核，从而方便用户开发高级计算分析应用。其中，SimStudio-SDK现已支持SimStudio中的模型修改和`潮流计算`和`电磁暂态仿真`两种计算内核。

```mermaid
graph TD
A[CloudPSS-SDK] --> B[模型层]
A --> C[算法层]
A --> D[应用层]
B --> E[Matlab函数]
B --> F[C/C++]
B --> G[Python函数]
C --> H[FuncStudio-SDK]
D --> I[SimStudio-SDK]
D --> J[AppStudio-SDK]
```
          

