---
title: 开关
description: 开关控件
---

本节主要介绍 **AppStudio** 控件库里的开关控件。

![开关控件](switch-control.png "开关控件")

## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />


### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/font-family` |  | 选择文字字体 | 选择 | 标签文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 布局 | `layout` |  | 选择控件布局 | 选择 | 垂直或者水平布局，默认为垂直 |

### 标签样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字号 | `style/--spectrum-global-dimension-font-size-100` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-alias-label-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--spectrum-alias-body-text-font-weight` |  | 选择文字粗细 | 选择 | 选择标签文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |

### 开关文字样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字号 | `style/--spectrum-switch-m-text-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 默认颜色 | `style/--spectrum-switch-m-text-color` |  | 开关默认颜色 | 颜色选择器 | 点击默认颜色，弹出颜色选择器自定义开关默认颜色 |
| 按下颜色 | `style/--spectrum-switch-m-text-color-down` |  | 开关按下颜色 | 颜色选择器 | 点击按下颜色，弹出颜色选择器自定义开关按下颜色 |
| 悬浮颜色 | `style/--spectrum-switch-m-text-color-hover` |  | 开关悬浮颜色 | 颜色选择器 | 点击悬浮颜色，弹出颜色选择器自定义开关悬浮颜色 |

### 开关样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 假值导轨颜色 | `style/--spectrum-switch-m-track-color` |  | 假值导轨颜色 | 颜色选择器 | 点击悬浮颜色，弹出颜色选择器自定义假值导轨颜色 |
| 真值导轨颜色 | `style/--spectrum-switch-m-emphasized-track-color-selected` |  | 真值导轨颜色 | 颜色选择器 | 点击悬浮颜色，弹出颜色选择器自定义真值导轨颜色 |
| 假值导轨交互颜色 | `style/--spectrum-switch-m-emphasized-track-color-selected-hover` |  | 假值导轨交互颜色 | 颜色选择器 | 点击悬浮颜色，弹出颜色选择器自定义假值导轨交互颜色 |

### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 标签 | `label` |  | 内容标签 | 常量 | 开关控件文字标签 |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |
| 真值标签 | `trueText` |  | 真值标签 | 常量 | 真值标签 |
| 假值标签 | `falseText` |  | 假值标签 | 常量 | 假值标签 |
| 值 | `value` |  | 开关控件值 | 开关 | 开关控件默认值，默认为**关** |


### 事件


| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 更改 | `@change` |  | 输入结束时触发事件 | 函数 | 采用更新方式触发，失去焦点后控件的值才会更新 |

## 案例介绍


### 典型应用

1. 创建一个开关控件，在右侧的属性配置区内给开关命名为 A

2. 创建静态资源 asset1，值设置为 `false`
   
3. 将输入框 A 的内容/值属性切换到 fx 表达式模式，设置为 `$asset1.value`

4. 点击工具栏的预览快捷按钮（或者 <kbd>Ctrl</kbd> <kbd>P</kbd>），进入预览模式，在预览模式下修改开关 A 的值

![创建开关控件](create-switch-control.png "创建开关控件")

![创建静态资源](create-static-resource.png "创建静态资源")

![配置开关属性](configure-switch-attributes.png "配置开关属性")

![预览模式](preview-mode.png "预览模式")



:::tip 典型应用使用详情

查看 [AppStudio 应用工坊快速入门](../../../20-quick-start/10-simple-apps/index.md)

:::


### 接入 FuncStudio 函数的典型应用

1. 创建一个开关，在右侧的属性配置区内给开关命名为 A

2. 创建函数资源 asset2，选择资源类型为函数

3. 配置函数资源 asset2，点击**选择资源**，绑定 `rid` 为 `function/Maxwell/demo` 的示例函数，示例函数存在一个参数 `a`

4. 鼠标选中开关 A 的事件/更改属性栏，按下 <kbd>Ctrl</kbd> 输入 `$asset2.args.a = A.value; $asset2.start()`

5. 点击工具栏的预览快捷按钮（或者 <kbd>Ctrl</kbd> <kbd>P</kbd>），进入预览模式，在预览模式下修改开关 A 的值

![创建开关控件](create-switch-control.png "创建开关控件")

![创建函数资源](create-function-resource.png "创建函数资源")

![绑定示例函数](bind-example-function.png "绑定示例函数")

![示例函数详情](example-function-details.png "示例函数详情")

![更改开关属性](change-switch-attributes.png "更改开关属性")

![预览模式](preview-mode.png "预览模式")


:::tip FuncStudio 函数使用详情

查看 [FuncStudio 函数工坊使用指南](../../../../30-funcstudio/10-user-guide/index.md)

:::




## 常见问题



import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />