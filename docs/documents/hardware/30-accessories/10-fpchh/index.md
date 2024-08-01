---
title: CloudPSS FPCHH 半高卡
description: CloudPSS FPCHH 半高卡
sidebar_position: 10
---

## 基本参数
CloudPSS (RT) 通过 FPGA 实现与外部设备的交互和通信，FPGA 半高卡主要提供 FPCHH A 和 FPCHH B 两个型号，其中 FPCHH B 可搭载小步长电磁暂态仿真计算内核，支持 64 节点系统小步长实时仿真，FPGA 半高卡具体参数如下：
|    配件型号     |   FPCHH A 通信卡  |   FPCHH B 计算通信卡 |
|:-----------------:|:---------------------------:|:---------------------------:|  
|  FPGA型号   |   7K325T   |   7K325T  |
|  通信接口   |  2 * SFP ，最高 10Gbps    |  2 * SFP，最高 10Gbps  |
|  Flash 存储   | SPI/BPI     |  SPI/BPI     |
|  通信协议   |    Aurora 通信协议    |    Aurora 通信协议      |
|  小步长电磁暂态求解器   |   不支持    |   支持 64 节点    |
|   ^   |  ^  |   2μs 步长    |
|   ^   |  ^  |   双精度数据类型    |