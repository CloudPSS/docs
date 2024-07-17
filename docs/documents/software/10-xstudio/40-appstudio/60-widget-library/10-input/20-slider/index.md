---
title: 滑块
description: 滑块
---

本节主要介绍 **AppStudio** 控件库里的滑块控件。

![滑块控件](slider-control.png "滑块控件")


## 属性

**CloudPSS** 提供了一套统一的控件属性参数

### 通用样式

import CommonStyle from '../../60-grid/_common-style.md'

<CommonStyle />

### 标签样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字颜色 | `style/--spectrum-alias-label-text-color` |  | 选择文字颜色 | 颜色选择器 | 点击文字颜色，弹出颜色选择器自定义颜色 |


### 样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 类型 | `variant` |  | 选择样式类型 | 选择 | 样式类型：标准、填充、刻度、斜坡 |
| 刻度大小 | `tickStep` |  | 输入刻度大小 | 常量 | 刻度大小，默认为 10 |
| 显示刻度标签 | `tickLabels` |  | 显示刻度标签 | 开关 | 显示刻度标签，默认为关 |
| 可编辑 | `editable` |  | 选择是否可编辑 | 开关 | 是否开启滑块进度编辑，默认为关 |

### 文字样式

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 文字字体 | `style/font-family` |  | 选择文字字体 | 选择 | 文字字体样式，字体类型包括：默认、宋体、黑体、楷体、微软雅黑、Georgia、Palatino Linotype、Times New Roman、Arial、Arial Black、Verdana、Courier New、Trebuchet MS |
| 文字间距 | `style/letter-spacing` | px  | 输入文字间距 | 常量 | 显示文字间距 |
| 文字粗细 | `style/font-weight` |   | 选择文字粗细 | 选择 | 文字粗细：默认、100、200、300、400、500、600、700、800、900、1000 |

### 内容

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 标签 | `innerText` |  | 输入内容标签 | 常量 | 滑块控件文字标签 |
| 禁用 | `disabled` |  | 禁用开关 | 开关 | 禁用选择**开**或者**关**，开启后控件禁止点击和交互，默认为**关** |
| 值 | `value` |  | 滑块默认值 | 常量 | 滑块默认值，默认为 50 |
| 最小值 | `min` |  | 滑块默认值 | 常量 | 块的滑动范围最小值，默认为 0 |
| 最大值 | `max` |  | 滑块默认值 | 常量 | 滑块的滑动范围最大值，默认为 100 |
| 步进值 | `step` |  | 滑块默认值 | 常量 | 滑块的滑动步长，默认为 1 |


### 事件

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 输入 | `@input` |  | 输入时触发事件 | 函数 | 采用输入方式触发，只要控件内容发生变化，控件的值就会实时更新  |
| 更改 | `@change` |  | 输入结束时触发事件 | 函数 | 采用更新方式触发，失去焦点后控件的值才会更新 |


## 案例介绍


### 典型应用

1. 创建一个滑块控件，在右侧的属性配置区内给滑块命名为 A

2. 创建静态资源 asset1，值设置为 `20`
   
3. 将输入框 A 的内容/值属性切换到 fx 表达式模式，设置为 `$asset1.value + 10`

4. 点击工具栏的预览快捷按钮（或者 <kbd>Ctrl</kbd> <kbd>P</kbd>），进入预览模式，在预览模式下修改滑块 A 的值

![创建滑块控件](create-slider-control.png "创建滑块控件")

![创建静态资源](create-static-resource.png "创建静态资源")

![配置滑块属性](configure-slider-attributes.png "配置滑块属性")

![预览模式](preview-mode.png "预览模式")

:::tip 典型应用使用详情

查看 [AppStudio 应用工坊快速入门](../../../20-quick-start/10-simple-apps/index.md)

:::

### 接入 FuncStudio 函数的典型应用

1. 创建一个滑块，在右侧的属性配置区内给滑块命名为 A

2. 创建函数资源 asset2，选择资源类型为函数

3. 配置函数资源 asset2，点击**选择资源**，绑定 `rid` 为 `function/Maxwell/demo` 的示例函数，示例函数存在两个参数 `a` 和 `b`

4. 鼠标选中滑块 A 的事件/更改属性栏，按下 <kbd>Ctrl</kbd> 输入 `$asset2.args.a = A.value + $asset1.value; $asset2.start()`

5. 点击工具栏的预览快捷按钮（或者 <kbd>Ctrl</kbd> <kbd>P</kbd>），进入预览模式，在预览模式下修改滑块 A 的值

![创建滑块控件](create-slider-control.png "创建滑块控件")

![创建函数资源](create-function-resource.png "创建函数资源")

![绑定示例函数](bind-example-function.png "绑定示例函数")

![示例函数详情](example-function-details.png "示例函数详情")

![更改滑块属性](change-slider-attributes.png "更改滑块属性")

![预览模式](preview-mode.png "预览模式")


:::tip FuncStudio 函数使用详情

查看 [FuncStudio 函数工坊使用指南](../../../../30-funcstudio/10-user-guide/index.md)

:::

## 常见问题


import Fx from '../../60-grid/_expression.md'

<Fx />



import Event from '../../60-grid/_event.md'

<Event />
