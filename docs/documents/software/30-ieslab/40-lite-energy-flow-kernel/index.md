---
title: 轻量级能量流计算内核
description: SimStudio IES 轻量级能量流计算内核
sidebar_position: 40
tags:
- ieslab
- function
---


SimStudio IES 是 CloudPSS 团队在 IESLab 基础上内部研发的一款**综合能源系统的轻量级能量流计算内核**，在 IESLab **稳态能量流仿真计算**内核基础上，新增了**碳排放流跟踪计算**功能。。能够灵活搭建综合能源系统拓扑，进行**仿真模拟**和**碳排放流跟踪计算**，并开放 **SDK 开发套件**，让用户能够实现更多高级功能。

## 内核简介

为统一 CloudPSS 系列平台风格，兼容 SimStudio 平台各项人性化功能特性，综合能源系统平台 IESLab 开发测试并公开了**轻量级能量流计算内核**供用户使用。该内核在 IESLab **稳态能量流仿真计算**内核基础上，新增了**碳排放流跟踪计算**功能。

SimStudio IES 由**总览**、**接口**、**实现**和**运行**等模块构成，**总览**可以项目信息和权限进行管理，**接口**模块在“项目类型”为元件启用，**实现**模块用搭建系统拓扑并设置元件参数，**运行**模块用于仿真参数设置和计算结果的展示。

## 特色功能

能量流计算的基础上，我们进一步研发了基于图计算的**碳足迹分析**内核，实现与能量流相匹配的碳足迹分析。用户仅需输入碳源的碳注入曲线，内核便能够在能量流计算的同时，精确追踪系统中每一个设备的碳排放**流向、比例和大小**。

碳流计算完成后会自动处理结果数据，并自动绘制出**碳流桑基图**，以清晰展示碳排放的结构，有利于分析碳减排潜力和影响碳排放的关键因素，为**碳配额管理、碳排放达标及碳排放定价**提供理论依据。

如需深入了解各平台功能，请跳转相应帮助文档查阅。

import DocCardList from '@theme/DocCardList';

<DocCardList />