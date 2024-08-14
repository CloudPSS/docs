---
title: "SFP接口"
description: "光纤通信接口，64 路通道。"
---

## 元件定义

该元件为 SFP 接口元件，通过光纤接口实现仿真模型与外部的通信，可用于联合仿真，最多支持 64 路通道。

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

### 使用方法

元件遵循内置的 Aurora 通信协议，协议各参数如下表。

    | **参数项** | **协议内容** |
    | :------------: | :-----------: |
    | 帧格式 | 32 位 Float |    
    | 同步帧 | 1 通道，4 字节，0x12345678 |
    | 有效帧 | 64 通道，256 字节，用户自定义 |
    | 帧长度 | 共 65 通道，260 字节 |
    | 光口速率 | 5Gbps |
    | 解析方式 | 大端解析 |

## 案例

## 常见问题

