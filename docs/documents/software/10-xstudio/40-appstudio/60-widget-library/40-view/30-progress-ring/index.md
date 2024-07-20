---
title: 进度环
description: 进度环控件
---

本节主要介绍 AppStudio 控件库里的进度环控件。

![进度环控件](progress-ring-conrtol.png "进度环控件")


## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />


### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 背景 | `attribute/over-background` |  | 是否显示背景 | 开关 | 是否显示背景，默认为否 |


### 圆环样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 轨道颜色 | `style/--spectrum-progresscircle-medium-track-color` |  | 轨道颜色 | 颜色选择器 | 点击轨道颜色，弹出颜色选择器自定义轨道颜色 |
| 已填充轨道颜色 | `style/--spectrum-progresscircle-medium-track-fill-color` |  | 已填充轨道颜色 | 颜色选择器 | 点击已填充轨道颜色，弹出颜色选择器自定义已填充轨道颜色 |

### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 进度 | `progress` | `%`  | 输入控件内容进度 | 常量 | 控件内容进度，默认显示：27（百分制） |
| 不设定进度 | `indeterminate` |   | 不设定进度开关 | 开关 | 不设定进度开关，开启后进度条始终在加载状态 |

## 案例介绍

### 接入 FuncStudio 函数的典型应用

1. 创建一个按钮控件，在右侧的属性配置区内给按钮命名为 A

2. 创建一个进度环控件，在右侧的属性配置区内给进度环命名为 B，调整下进度环控件的大小

3. 创建函数资源 asset1，选择资源类型为函数

4. 配置函数资源 asset1，点击`选择资源`，绑定 `rid` 为 `function/Maxwell/demo` 的示例函数

5. 鼠标选中选择器 A 的事件/点击属性栏，按下<kbd> Ctrl </kbd> 输入 `$asset1.start()`

6. 鼠标选中选择器 B 的内容/进度属性栏，切换到 fx 表达式模式输入 `($asset1.progress * 100).toFixed(1)`；

7. 点击工具栏的预览快捷按钮(或者 <kbd>Ctrl</kbd> + <kbd>P</kbd> )，进入预览模式，点击操作按钮运行 `function/Maxwell/demo` 示例函数，并显示出运行进度


![创建按钮控件](create-button-control.png "创建按钮控件")

![创建进度环控件](create-progress-ring-control.png "创建进度环控件")

![创建函数资源](create-function-resource.png "创建函数资源")

![绑定示例函数](bind-example-function.png "绑定示例函数")

![示例函数详情](example-function-details.png "示例函数详情")

![更改按钮属性](change-button-attributes.png "更改按钮属性")

![配置进度环属性](config-progress-ring-attributes.png "配置进度环属性")

![预览模式](preview-mode.png "预览模式")



:::tip FuncStudio 函数使用详情

查看 [FuncStudio 函数工坊使用指南](../../../../30-funcstudio/10-user-guide/index.md)

:::


## 常见问题



import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />