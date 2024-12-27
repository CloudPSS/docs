---
title: 滑块
description: 滑块
tags:
- xstudio
- appstudio
- widgets
---

本节主要介绍 **AppStudio** 控件库里的滑块控件。

该控件的主要作用包括：

- 作为 FuncStudio 函数资源的输入输出接口，用于给**函数传参**或**接收输出结果**；
- 作为 EMTLab 中实时电磁暂态仿真任务的输入输出接口，用于**修改虚拟输入端口的值**或**接收虚拟输出端口的值**。
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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="case1" label="典型应用">

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

</TabItem>

<TabItem value="case2" label="接入 FuncStudio 函数">

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

</TabItem>

<TabItem value="case3" label="实时仿真输入输出">

滑块控件提供**向导**功能，会将向导中设置的方案按照特定的表达式**自动写入**滑块控件的属性输入框中，帮助用户快速将实时仿真模型的虚拟输入输出端口值与输入框的值进行绑定。

<!-- 滑块控件除了可以作为 FuncStudio 函数资源的输入输出控件外，也能作为 EMTLab 中实时电磁暂态仿真任务的输入输出控件，用于控制虚拟输入端口的值和接收虚拟输出端口的值。 -->

1. 在资源标签页内添加需要进行实时仿真的 SimStudio 模型资源，具体的模型资源添加方法参见[资源标签页](../../../40-workbench/20-function-zone/20-asset-tab/index.md)。

1. 可通过元件向导进行**实时仿真输入输出**参数的设置：
   
- 可选中输入框元件，在右侧参数配置区上方点击向导图标进入向导界面。

![向导界面 =x400](./guide.png)

- 点击**绑定资源**选择器，选项中会自动加载出所有函数资源和模型资源，选择需要进行实时仿真的 SimStudio 模型资源；

- 选中模型资源后，**绑定信号**选择器的选项中会自动加载出该模型的所有虚拟输入端口和虚拟输出端口名称，选择需要绑定的端口名称；
  
- 如果选择了虚拟输入端口，则将**绑定方向**选择器配置为输入，如果选择了虚拟输出端口，则将**绑定方向**选择器配置为输出；

- 对于虚拟输入端口，可以选择触发方式：更改（采用输入方式触发，只要控件内容发生变化，控件的值就会实时更新）或者输入（采用更新方式触发，失去焦点后控件的值才会更新）。
  
- 点击向导界面的确定按钮后，会将向导中设置的方案按照特定的表达式写入滑块控件的属性框中
<!-- 对于熟练使用表达式的用户，也可以参照表达式自己配置 -->

对于输入信号，进入预览模式，通过修改滑块的值即可在实时仿真过程中实时控制所绑定的虚拟输入端口的值；

![作为输入信号的输入框向导配置 =x400](./guide-setting.png)

![将输入信号的向导配置通过表达式写入输入框控件的属性输入框](./param-list.png)

对于输出信号，进入预览模式，即可在仿真过程中通过滑块实时显示所绑定的虚拟输出端口的值。

![作为输出信号的输入框向导配置 =x400](./guide-setting1.png)

![将输出信号的向导配置通过表达式写入输入框控件的属性输入框](./param-list1.png)

具体的操作流程参见[实时仿真案例](../../../70-case-study/50-emt-rt-apps/index.md)。

  <!-- ![向导界面 =x600](./guide.png) -->

</TabItem>
</Tabs>

## 常见问题

import Fx from '../../60-grid/_expression.md'

<Fx />

import Event from '../../60-grid/_event.md'

<Event />
