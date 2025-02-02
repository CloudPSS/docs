---
title: 格式卡
description: 格式卡
tags:
- xstudio
- simstudio
- workbench
- introduce
---
<!-- :::warning 修改建议 
1. 不要滥用代码框，对于平台中存在的按钮、选项，使用加粗即可。（已修改）
2. 部分文字口语化太严重，比如描述操作步骤时，“首先点击实现标签页的图纸选项，然后点击新建图纸即可。”标准的写法应去掉口语化的首先、然后这类助词。“点击**实现标签页**左侧资源栏顶部的**图纸**，切换至图纸标签栏，点击**新建图纸**可添加新的图纸。”（已修改）
3. 部分操作说明不清晰，比如“在图纸标签栏，鼠标右键点击待链接的图纸，鼠标右键选择**复制图纸链接**”。（已修改）
::: -->

## 功能定义

格式卡主要负责对图纸中的连接线和元件的格式进行设置。

## 功能说明

### 连接线格式

在拓扑编辑区，点击鼠标左键选中元件与元件之间的连接线后，右侧的属性栏内会出现连接线的格式卡。

![连接线格式卡](./1.png)

#### 大小和位置

##### 首端/末端

用于选择连接线的首末端，选项是当前图纸中所有元件的引脚，由元件标签名称/引脚`key`组成，鼠标悬停在选项上会显示出该引脚的元件标签名称、元件的`key`、元件类型、元件的`RID`、元件的引脚、元件引脚的`key`。

![首端/末端](./2.png)

##### 移除路径点

选中连接线后在连接线路径上点击鼠标左键可以在鼠标光标所在处设置路径点，鼠标左键常按路径点可以拖动调整位置。

点击移除路径点可以消除这条连接线的所有路径点。

![移除路径点](./3.png)

#### 排列

##### 置于顶/底层

调整连接线的图层。

#### 线条属性

##### 路由类型

可选**无**或者**正交**，选择为**无**时，路径点之间会直接通过线段连接。

![路由类型-无](./4.png)

选择为**正交**时，路径点之间通过正交（水平或垂直）线段连接。

![路由类型-正交](./5.png)

##### 连接类型

用于设置连接线的样式，可选**无**、**正交**或者**平滑**。
当连接线的连接类型选择为**无**时，连接线是线段；选择为**圆角**时，连接线拐角处为圆角；选择**平滑**时，连接线为光滑的曲线。

![连接类型](./6.png)

#### 样式

连接线样式主要包含线条颜色、线条宽度设置。

![连接样式](./7.png)

### 元件格式

在拓扑编辑区，点击鼠标左键选中元件后，右侧的属性栏内会出现元件的格式卡。

![元件格式栏](./10.png)

#### 大小和位置

用户可通过 **X** 和 **Y** 来修改元件在图纸中的位置，**X** 和 **Y** 是元件左上角顶点的坐标，图纸左上角顶点的坐标为 X = 0、Y = 0。

通过**宽度**和**高度**修改元件的大小，点击**重设大小**恢复元件默认大小。

:::info
由于 SimStudio 内置模型库中所有元件的大小都是 5 的整倍数，建议用户在修改元件大小的位置时配置为 5 的整数倍，便于元件之间连线。
:::

#### 排列

当不同元件重叠在一起时，通过排列功能设置重叠先后顺序，可选择置于顶层或置于底层。

点击顺时针旋转、逆时针旋转、水平翻转和垂直翻转按钮，设置元件的旋转角度。

当框选多个元件及其间的连接线时，可设置多元素的对齐方式和分布方式，如左对齐、水平居中、右对齐、顶端对齐、居中对齐、底端对齐、横向等距分布或纵向等距分布等。

![多元件排列](./8.png)

#### 样式

##### 线条颜色

修改元件边框线条的颜色。

##### 线条宽度

修改元件边框线条的粗细。

:::tip 响应缩放的像素相对单位

提供响应缩放的像素相对单位`apx`和`rpx`（默认为`px`），用于设置线宽、字体大小在缩放中的不同效果：

+ 以`px`为单位的尺寸不随缩放变化，
+ 以`apx`为单位的尺寸在缩放中始终保持大小不变
+ 以`rpx`为单位的尺寸会随缩放比例动态调整尺寸大小

使用时，可在线条宽度、字体大小等以px为单位的参数后填写`a`或`r`以激活相应的相对单位。
:::

![缩放的像素相对单位](./缩放的像素相对单位.png)

##### 填充颜色

可以对元件的底色进行填充。

##### 文本颜色

修改元件内文字及元件标签名称的颜色。

##### 字体

修改元件内文字及元件标签名称的字体。

##### 字号

修改元件内文字及元件标签名称的字体大小。

##### 转换为线性元件

点击后可将该元件转换为连接线。

![元件样式](./9.png)

## 常见问题

多端口元件能转换为线性元件吗？

:   多端口元件可以转换为线性元件，但是只有两个引脚可以连接，其余引脚无法连接，无法通过拓扑校验，因此多端口元件不支持被转换为线性元件。
