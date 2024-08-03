---
title: CloudPSS FPCFH 全高卡
description: CloudPSS FPCFH 全高卡
sidebar_position: 20
---

## 基本参数
CloudPSS (RT) 通过 FPGA 实现与外部设备的交互和通信，FPGA 全高卡主要提供 FPCFH A 和 FPCFH B 两个型号，其中 FPCFH B 可搭载小步长电磁暂态仿真计算内核，支持 128 节点系统小步长实时仿真，FPGA 全高卡具体参数如下：
|    配件型号     |    FPCFH A  |   FPCFH B  |
|:-----------------:|:---------------------------:|:---------------------------:|  
|  FPGA   |   >   |   Kintex Ultrascale  |
|  通信接口   |  > | 1 * QSFP+, 40Gbps (4 * SFP+, 单通道最高 10Gbps) |
|  通信协议   |    >    |    Aurora 通信协议      |
|  小步长电磁暂态求解器   |   不支持    |   128 电气节点（2 μs 步长）    |
|   ^   |  ^  |   250ns - 2μs 步长    |
|   ^   |  ^  |   双精度/混合精度数据类型    |