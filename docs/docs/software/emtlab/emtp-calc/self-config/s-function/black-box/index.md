---
title: 黑盒模型
description: 黑盒模型 S-Function 实现的具体步骤
sidebar_position: 20
---

## 文档摘要
本文档介绍黑盒模型 S-Function 实现的具体步骤。

## 实现步骤

### 步骤 1. 在 Linux 环境编译生成 .so 文件

将代码文件 `.cpp` 复制到 Linux 环境，使用以下指令编译：  

```
gcc -Wall -fPIC -s -lm -shared -DRT xx1.cpp xx2.cpp -o xx.so
```

对于已经编译为 `.a` 的文件，使用以下指令编译：  

```
gcc -Wall -fPIC -s -lm -shared xx.a -o xx.so -u <entry_name>
```
:::tip
`<entry_name>`是入口函数名。
:::

### 步骤 2：根据全局参数和输入输出接口信息构建 S-Function 实现元件  

#### a. 参数引脚列表定义  

打开空白 S-Function 模型模板，在`接口标签页`参数列表添加参数，引脚列表添加引脚，并绘制元件图形。参数键名必须与 S-Function 引用的全局参数名一致；引脚键名不作要求，但顺序必须分别与 S-Function 的输入输出引脚一致。  

![添加元件引脚并绘制图形 ](./1-8.png "添加元件引脚并绘制图形")   

#### b. 导入 .so 文件  

在`实现标签页`导入步骤2生成的 `.so` 文件，并填写入口函数名。  

![导入 .so 文件并填写入口函数](./1-9.png "导入 .so 文件并填写入口函数")   

:::warning
入口函数名是 S-Function 名称，不是 `.so` 的文件名。
:::

#### c. 保存项目，元件添加到模型库中  


## 常见问题
编译 .so 文件失败
:   
