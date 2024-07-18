---
title: 操作按钮
description: 操作按钮控件
---

本节主要介绍 AppStudio 控件库里的操作按钮控件。

![操作按钮控件](action-button-control.png "操作按钮控件")


## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />

### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 大小 | `size` |  | 选择样式大小 | 选择 | 样式大小：S、M、L、XL，默认为 M |
| 安静 | `quiet` |  | 选择是否安静 | 选择 | 选择**是**或者**否**，默认为**否**状态 |
| 强调 | `emphasized` |  | 选择是否强调 | 选择 | 选择**是**或者**否**，默认为**否**状态 |

### 文本样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/font-family` |  | 选择文字字体 | 选择 | 标签文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字间距 | `style/letter-spacing` |  | 输入文字间距 | 常量 | 文字间距 |
| 文字字号 | `style/font-size` |  | 输入文字字号 | 常量 | 输入文字字号 |
| 文字颜色 | `style/color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |
| 文字粗细 | `style/font-weight` |  | 选择文字粗细 | 选择 | 选择标签文字粗细，默认、100、200、300、400、500、600、700、800、900、1000 |


### 边框样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 边框圆角半径 | `style/border-radius` | px、cm、em、rem | 输入边框圆角半径 | 常量 | 输入边框圆角半径 |
| 边框宽度 | `style/border-width` | px、cm、em、rem | 输入边框宽度 | 常量 | 输入边框宽度 |
| 边框颜色 | `style/border-color` |  | 输入框 | 常量 | 输入边框颜色 |
| 边框类型 | `style/border-style` |  | 边框类型 | 选择 | 边框类型分为：默认、无边框、虚线边框、实线边框、双重边框、3D 沟槽边框、3D 脊边框、3D 突出边框、3D 嵌入边框，默认为实线边框 |

### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文本 | `innerText` |  | 按钮控件文本内容 | 常量 | 按钮控件文本内容，默认为：Click Me! |
| 链接 | `href` |  | 按钮控件链接 | 常量 | 按钮控件链接 |
| 文件名 | `download` |  | 下载文件的保存名称 | 常量 | 仅用作下载按钮时，下载文件的保存名称，默认为空 |
| 目标 | `target` |  | 超链接 | 常量 | 超链接打开的位置：`_blank` 表示在新窗口打开；`self` 表示在当前窗口打开；默认为 `_blank` |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |
| 自动切换 | `toggles` |  | 自动切换开关 | 开关 | 自动切换选择**是**或者**否**，默认为**否** |
| 选中 | `selected` |  | 选中开关 | 开关 | 选中选择**是**或者**否**，默认为**否** |


### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 点击 | `@click` |  | 当点击时触发 | 函数 | 采用点击方式触发函数 |
| 切换 | `@change` |  | 当选中状态变化时触发 | 函数 | 采用更新方式触发，当选中状态变化时触发，必须设置**自动切换**选项 |

## 案例介绍

### 接入 FuncStudio 函数的典型应用

1. 创建一个操作按钮控件，在右侧的属性配置区内给操作按钮命名为 A

2. 创建函数资源 asset1，选择资源类型为函数

3. 配置函数资源 asset1，点击`选择资源`，绑定 `rid` 为 `function/Maxwell/demo` 的示例函数

4. 鼠标选中选择器 A 的事件/更改属性栏，按下<kbd> Ctrl </kbd> 输入 `$asset1.start()`

5. 点击工具栏的预览快捷按钮(或者 <kbd>Ctrl</kbd> + <kbd>P</kbd> )，进入预览模式，点击操作按钮即可运行 `function/Maxwell/demo` 示例函数


![创建操作按钮控件](create-action-button-control.png "创建操作按钮控件")

![创建函数资源](create-function-resource.png "创建函数资源")

![绑定示例函数](bind-example-function.png "绑定示例函数")

![示例函数详情](example-function-details.png "示例函数详情")

![更改操作按钮属性](change-action-button-control.png "更改操作按钮属性")

![预览模式](preview-mode.png "预览模式")


:::tip FuncStudio 函数使用详情

查看 [FuncStudio 函数工坊使用指南](../../../../30-funcstudio/10-user-guide/index.md)

:::



## 常见问题



import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />