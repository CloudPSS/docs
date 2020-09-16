---
title: 元件表
type: features
category: 1000
order: 250
author: songyk
author_email: songyankan@cloudpss.net
---

鼠标右键单击仿真图层的空白处，选择查看元件表可弹出元件表对话框，对话框左侧为该仿真工程中所有元件的分类(如电容类)及具体元件组成(如 newCapacitor 1、newCapacitor 2)的列表，右侧为所有该类元件的参数列表。参数列表可修改，且将直接影响对应元件参数设置对话框内的值。利用元件表可实现对所有元件的全参数统一批量修改及查看的功能。

![元件列表](ComponentTable/Y1.png '查看元件表选项')
![元件列表](ComponentTable/Y2.png '元件表页面')

{% pullquote tip %}

- 元件参数设置面板中的“选择类”参数在参数表中对应为键值(Key Value)，例如：Yes 对应为 1，No 对应为 0。
- 直接填写参数列表时，需注意表内值的格式与元件参数设置面板的要求一致，例如上图中的 Branch Current [kA]内需填写以#号开头的信号名称。
- 元件表支持复制、粘贴、自动填充功能。用户可将元件表内参数导入进 Excel 等表格工具继续处理，再粘贴回 CloudPSS 平台。
  {% endpullquote %}
