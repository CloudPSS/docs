---
title: 输入框
description: 输入框控件
---

本节主要介绍 **AppStudio** 控件库里的输入框控件。

![输入框控件](input-box-control.png "输入框控件")

## 属性

**CloudPSS** 提供了一套统一的控件属性参数管理

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />

### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 布局 | `layout` |  | 选择控件布局 | 选择 | 垂直或者水平布局，默认为垂直 |
| 安静 | `quiet` |  | 选择是否安静 | 选择 | 选择**是**或者**否**，默认为**否**状态 |

### 标签样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/font-family` |  | 选择文字字体 | 选择 | 标签文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字字号 | `style/--spectrum-global-dimension-font-size-100` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-alias-label-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/--spectrum-alias-body-text-font-weight` |  | 选择文字粗细 | 选择 | 选择标签文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |

### 输入框及其内容样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/--spectrum-alias-body-text-font-family` |  | 选择文字字体 | 选择 | 输入框内容文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字字号 | `style/--spectrum-textfield-m-text-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/--spectrum-alias-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 输入框高度 | `style/--spectrum-textfiled-m-height` | `px` | 输入输入框高度 | 常量 | 输入输入框高度 |


### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 标签 | `label` |  | 输入内容标签 | 常量 | 输入框控件文字标签 |
| 输入格式 | `type` |  | 选择输入格式 | 选择 | 输入格式：字符串、实数、整数 |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |
| 占位符 | `placeholder` |  | 输入框占位符 | 常量 | 输入框内容为空时显示的提示性内容，仅用于占位 |
| 值 | `value` |  | 输入框默认内容 | 常量 | 输入框默认内容 |
| 后缀 | `suffix` |  | 输入框后缀 | 常量 | 输入框最右侧显示的内容，一般为单位符号 |


### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 输入 | `@input` |  | 输入时触发事件 | 函数 | 采用输入方式触发，只要控件内容发生变化，控件的值就会实时更新 |
| 更改 | `@change` |  | 输入结束时触发事件 | 函数 | 采用更新方式触发，失去焦点后控件的值才会更新 |

## 案例介绍

### 颜色选择器类型

import ColorPicker from '../../60-grid/_color-picker.md'

<ColorPicker />

### 典型应用

1. 创建两个输入框，在右侧的属性配置区内给输入框命名为 A 和 B

2. 创建静态资源 asset1，值设置为 `2`
   
3. 将输入框 A 的值设置为 `1`，输入框 B 的值切换到 fx 表达式模式，设置为 `A.value + $asset1.value`

4. 点击工具栏的预览快捷按钮(或者 <kbd>Ctrl</kbd> + <kbd>P</kbd> )，进入预览模式，在预览模式下修改输入框 A 的值，输入框 B 的值自动发生变化


:::tip 

典型应用使用详情，请查看 [AppStudio 应用工坊快速入门](../../../20-quick-start/10-simple-apps/index.md)

:::

![放置输入框控件](place-input-box-control.png "放置输入框控件")

![创建静态资源](create-static-resource.png "创建静态资源")

![配置输入框属性](configure-input-box-attributes.png "配置输入框属性")

![预览模式](preview-mode.png "预览模式")

### 接入 FuncStudio 函数的典型应用

1. 创建两个输入框，在右侧的属性配置区内给输入框命名为 A 和 B

2. 创建函数资源 asset2，选择资源类型为函数

3. 配置函数资源 asset2，点击`选择资源`，绑定 `rid` 为 `function/Maxwell/demo` 的示例函数，示例函数存在两个参数 `a` 和 `b`

4. 输入框 A 的事件/更改属性栏输入 `$asset2.args.a =  A.value`；输入框 B 的事件/更改属性栏输入 `$asset2.args.b =  B.value`。实现更改输入框的值对 `FuncStudio` 函数资源的两个参数进行赋值


![放置输入框控件](place-input-box-control.png "放置输入框控件")

![创建函数资源](create-function-resource.png "创建函数资源")

![绑定示例函数](bind-example-function.png "绑定示例函数")

![示例函数详情](example-function-details.png "示例函数详情")

![更改事件属性](change-event-attributes.png "更改事件属性")


:::tip 

FuncStudio 函数使用详情，请查看 [FuncStudio 函数工坊使用指南](../../../../30-funcstudio/10-user-guide/index.md)

:::



## 常见问题

import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />
