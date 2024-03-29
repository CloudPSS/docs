---
title: 元件表
description: 元件表
sidebar_position: 20
---

参数和引脚除了在元件的参数和引脚面板配置，还可以在元件表中进行批量配置，本节介绍元件表的功能和使用方法。

## 功能定义

元件表的主要功能是统一查看和批量修改元件的参数和引脚，对于查看和编辑大规模复杂算例的参数和引脚配置有很大帮助。

## 功能说明

### 打开元件表

在实现标签页的顶部菜单栏或者右键图纸可以打开元件表。元件表会列出项目中所有使用到的元件，显示它们的所有参数和引脚信息。

![打开元件表](./1.png)

### 编辑元件表

利用元件表可实现对所有元件的全参数和引脚的统一批量编辑功能。修改完成后点击右上角确认保存并退出元件表，会同步应用和显示到拓扑图上对应的元件内。用户在需要批量修改元件参数时，不用再手动查找和定位每一个元件，再进入元件参数面板一一修改。

元件表支持批量复制、粘贴、**自动填充**功能。操作方法与`Excel`类似，可以选中一个框，拖动右下角的小黑点来进行批量覆盖。

![元件表批量覆盖](./2.png)

同时在元件表中，用户可以框选复制这些参数引脚信息到`Excel`等表格工具中进行数据处理，然后再将`Excel`中的数据复制到元件表。

![数据导入导出](./3.png)

### 导出元件表

点击元件表对话框右上角的**导出**按钮，可以导出所有元件的参数列表。

## 常见问题

参数批量复制导入有数量限制吗？

:   目前元件表支持的最大批量复制导入数量为 1000 行。

