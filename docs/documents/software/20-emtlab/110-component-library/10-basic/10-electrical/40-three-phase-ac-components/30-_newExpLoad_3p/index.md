---
title: "静态负载"
description: ""
tags:
- emtlab
- components
---

## 元件定义

该元件用以建模指数型三相静态负载（单线图），其基本表达式如下。  
<center>
$P=P_N\left(\frac V{V_N}\right)^{NP}(1+K_{PF}\Delta f)\\Q=Q_N\left(\frac V{V_N}\right)^{NQ}(1+K_{QF}\Delta f)$
</center>

## 元件说明

### 1. **恒功率负荷**
   - **设置方法**：令 \(NP = 0\)，\(NQ = 0\)
   - **特性**：功率与电压无关，仅与频率偏差相关
   - **应用场景**：电动机、电子设备等恒功率运行设备

### 2. **恒电流负荷**
   - **设置方法**：令 \(NP = 1\)，\(NQ = 1\)
   - **特性**：功率与电压成正比
   - **物理意义**：电流保持不变，功率随电压线性变化
   - **应用场景**：照明负荷、整流设备等

### 3. **恒阻抗负荷**
   - **设置方法**：令 \(NP = 2\)，\(NQ = 2\)
   - **特性**：功率与电压平方成正比
   - **物理意义**：阻抗保持不变，符合欧姆定律
   - **应用场景**：电阻炉、白炽灯等纯阻性负荷


### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

## 案例

## 常见问题

