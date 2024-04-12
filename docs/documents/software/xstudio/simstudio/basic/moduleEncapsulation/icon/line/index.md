---
title: 直线
description: 直线
sidebar_position: 11
---

本文档介绍元件图标绘制中直线的使用及属性设置。

用户可从图标组件库拖拽或点击```直线```组件，将其添加至绘图工作区。

直线的可配置项如下表所示：

<table>
    <tr>
        <td>**属性模块**</td>
        <td>**属性配置项**</td>
        <td>**含义及说明**</td>
    </tr>
    <tr>
        <td rowspan="4">**大小和位置**</td>
        <td>X</td>
        <td>控制该组件左上角的定位点在绘图区中的横坐标，向**右**为正方向。一般填写5的倍数，详见[规范](./regulations/index.md)。</td>
    </tr>
    <tr>
        <td>Y</td>
        <td>控制该组件左上角的定位点在绘图区中的纵坐标，向**下**为正方向。一般填写5的倍数，详见[规范](./regulations/index.md)。</td>
    </tr>
    <tr>
        <td>宽度</td>
        <td>控制直线的长度。一般填写5的倍数，详见[规范](./regulations/index.md)。当填写负数时，相当于水平翻转直线。</td>
    </tr>
    <tr>
        <td>高度</td>
        <td>不影响直线类型的组件。</td>
    </tr>
    <tr>
        <td rowspan="6">**排列**</td>
        <td>隐藏</td>
        <td>将隐藏该组件，仅影响当前绘图区的视角，不影响调用模块时该组件的实际显示。在组件隐藏后，可以在[窗格](#窗格)工作区点击**显示全部**重新显示隐藏的组件。</td>
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
        <td>点击选色按钮![选色图标](image-15.png)可以弹出调色板，用于选择线条的颜色和透明度.</td>
    </tr>
    <tr>
        <td>线条宽度</td>
        <td>填写线条宽度值，以像素（px）为单位，默认为2px。</td>
    </tr>
    <tr>
        <td>填充颜色</td>
        <td>不影响直线类型的组件。</td>
    </tr>
    <tr>
        <td>数据</td>
        <td>条件</td>
        <td>该组件将在什么条件下显示。可以引用[参数列表](../../parameter-list/index.md)中的参数，例如```mode==1```条件的组件只在参数```mode```值为1时显示。</td>
    </tr>
</table>