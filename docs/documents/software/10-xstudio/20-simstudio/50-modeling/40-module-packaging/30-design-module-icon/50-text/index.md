---
title: 文本
description: 文本
tags:
- xstudio
- simstudio
- introduce
---

本文档介绍元件图标绘制中文本的使用及属性设置。

用户可从图标组件库拖拽或点击**文本组件**，将其添加至绘图工作区。

文本的可配置项如下表所示：

<table>
    <tr>
        <td>**属性模块**</td>
        <td>**属性配置项**</td>
        <td>**含义及说明**</td>
    </tr>
    <tr>
        <td rowspan="4">**大小和位置**</td>
        <td>X</td>
        <td>控制文本左上角的定位点在绘图区中的横坐标，向**右**为正方向。一般填写 5 的倍数，详见 [规范](../70-simstudio-icon-guideline/index.md)。</td>
    </tr>
    <tr>
        <td>Y</td>
        <td>控制文本左上角的定位点在绘图区中的纵坐标，向**下**为正方向。一般填写 5 的倍数，详见 [规范](../70-simstudio-icon-guideline/index.md)。</td>
    </tr>
    <tr>
        <td>宽度</td>
        <td>控制文本的宽度。一般填写 5 的倍数，详见 [规范](../70-simstudio-icon-guideline/index.md)。当填写负数时，文本选框将翻转，但无法反转文本的字符。</td>
    </tr>
    <tr>
        <td>高度</td>
        <td>控制文本的高度。一般填写 5 的倍数，详见 [规范](../70-simstudio-icon-guideline/index.md)。当填写负数时，文本选框将翻转，但无法反转文本的字符。</td>
    </tr>
    <tr>
        <td rowspan="6">**排列**</td>
        <td>隐藏</td>
        <td>将隐藏该组件，仅影响当前绘图区的视角，不影响调用模块时该组件的实际显示。在组件隐藏后，可以在窗格点击**显示全部**重新显示隐藏的组件。</td>
    </tr>
    <tr>
        <td>显示</td>
        <td>显示该隐藏的组件，仅影响当前绘图区的视角，不影响调用模块时该组件的实际显示。</td>
    </tr>
    <tr>
        <td>置于顶层</td>
        <td>将该组件置于所有组件的最顶层，最顶层的绘图组件将基于透明度覆盖下层的组件，鼠标点击时也会优先选中。</td>
    </tr>
    <tr>
        <td>置于底层</td>
        <td>将该组件置于所有组件的最底层，最底层的绘图组件将被上层的组件覆盖，鼠标点击时不会被优先选中。</td>
    </tr>
    <tr>
        <td>逆时针旋转</td>
        <td>以组件中心点为旋转中心，逆时针旋转该组件。</td>
    </tr>
    <tr>
        <td>顺时针旋转</td>
        <td>以组件中心点为旋转中心，顺时针旋转该组件。</td>
    </tr>
    <tr>
        <td rowspan="3">**样式**</td>
        <td>线条颜色</td>
        <td>点击选色按钮 ![选色图标](image-15.png) 可以弹出调色板，用于选择文本扩散的阴影颜色，默认为透明，即无阴影。</td>
    </tr>
    <tr>
        <td>线条宽度</td>
        <td>填写文本扩散的阴影宽度值，以像素（px）为单位，默认为 0px，即无阴影。</td>
    </tr>
    <tr>
        <td>填充颜色</td>
        <td>点击选色按钮 ![选色图标](image-15.png) 可以弹出调色板，用于选择文本的颜色和透明度，默认为黑色。</td>
    </tr>
    <tr>
        <td rowspan="8">**数据**</td>
        <td>条件</td>
        <td>该组件将在什么条件下显示。可以引用 [参数列表](../../10-define-module-param-list/index.md) 中的参数，例如 ```mode==1``` 条件的组件只在参数 ```mode``` 值为 1 时显示。</td>
    </tr>
    <tr>
        <td>文本</td>
        <td>需要显示的文本，可以使用 ```$variable``` 的形式引用参数，例如 ``` $mode ```；也可以使用 ``` $`expression` ``` 或 ``` ${expression} ``` 的形式输入公式，例如 ``` $`mode==1?'P':'Q'` ```。</td>
    </tr>
    <tr>
        <td>字体大小</td>
        <td>文本的字体大小，默认为 12px。</td>
    </tr>
    <tr>
        <td>文本对齐</td>
        <td>选择文本相对定位点 ![定位点](image.png) 的横向对其方式，分为左对齐、居中和右对齐。</td>
    </tr>
    <tr>
        <td>横向基础偏移</td>
        <td>字符相对定位点 ![定位点](image.png) 的横向基础偏移，参考方向与元件方向相同，该偏移量应用于该文本中的所有字符。单位是相对于单个字符大小的相对量 em。</td>
    </tr>
    <tr>
        <td>横向附加偏移</td>
        <td>在横向基础偏移的基础上，进一步的附加偏移量。此处输入单个数字时，表示对所有字符的偏移；输入以空格为分割的序列，则表示对第 1,2,3… 个字符的偏移量。当元件旋转 0°-180° 时，横向附加偏移与横向基础偏移方向相同；当元件旋转 180°-360° 时，横向附加偏移与横向基础偏移方向相反。</td>
    </tr>
    <tr>
        <td>纵向基础偏移</td>
        <td>字符相对定位点 ![定位点](image.png) 的纵向基础偏移，参考方向与元件方向相同，该偏移量应用于该文本中的所有字符。单位是相对于单个字符大小的相对量 em。</td>
    </tr>
    <tr>
        <td>纵向附加偏移</td>
        <td>在纵向基础偏移的基础上，进一步的附加偏移量。此处输入单个数字时，表示对所有字符的偏移；输入以空格为分割的序列，则表示对第 1,2,3… 个字符的偏移量。当元件旋转 0°-180° 时，纵向附加偏移与纵向基础偏移方向相同；当元件旋转 180°-360° 时，纵向附加偏移与纵向基础偏移方向相反。</td>
    </tr>

</table>