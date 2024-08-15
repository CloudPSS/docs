---
title: "逻辑门"
description: "逻辑门"
---

## 元件定义
该元件实现四类基本逻辑运算：与、或、非、异或。

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

### 使用说明
1. 与门（AND）
  当且仅当所有输入信号为1，输出信号为1。逻辑函数表示为 Output = Input1 * Input2 。真值表如下：

  | Input1 | Input2 | Output |
  | :--- | :--- | :--- | 
  | 0 | 0 | 0 |
  | 0 | 1 | 0 |
  | 1 | 0 | 0 |
  | 1 | 1 | 1 |

2. 或门(OR)
   若任一输入信号为1，则输出信号为1。逻辑函数表示为 Output = Input1 + Input2 。真值表如下：

  | Input1 | Input2 | Output |
  | :--- | :--- | :--- | 
  | 0 | 0 | 0 |
  | 0 | 1 | 1 |
  | 1 | 0 | 1 |
  | 1 | 1 | 1 |

3. 异或门(XOR)
   如果两个输入信号不相同，则输出信号为1；如果两个输入信号相同，输出信号为0。逻辑函数表示为 Output = Input1' * Input2 + Input1 * Input2'。真值表如下：
   
  | Input1 | Input2 | Output |
  | :--- | :--- | :--- | 
  | 0 | 0 | 0 |
  | 0 | 1 | 1 |
  | 1 | 0 | 1 |
  | 1 | 1 | 0 |  

4. 非门（NOT）
   如果输入信号为1，则输出信号为0；如果输入信号为0，则输出信号为1。逻辑函数表示为 Output = Input'
   | Input | Output |
   | :--- | :--- | 
   | 0 | 1 |
   | 1 | 0 |

## 案例

## 常见问题

