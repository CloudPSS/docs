<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### Configuration

Configuration

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Name | `Name` | 文本 | 通道名称 |
| Channel ID | `channel_id` | 整数 | 数字量组别序号：<br/> 0 为第 1 组，1 为第 2 组，以此类推，可填入 0-11。<br/> 组别序号与端子台引脚对应如下：<br/> Channel 0 对应 TX17-24<br/> Channel 1 对应 TX25-32<br/> Channel 2 对应 TX1-8 <br/> Channel 3 对应 TX9-16 <br/> Channel 4 对应 TX49-56 <br/> Channel 5 对应 TX57-64 <br/> Channel 6 对应 TX33-40 <br/> Channel 7 对应 TX41-48 <br/> Channel 8 对应 TX81-88 <br/> Channel 9 对应 TX89-96 <br/> Channel 10 对应 TX65-72 <br/> Channel 11 对应 TX73-80 |
| Line ID | `line_id` | 整数 | 数字量在组中的通道序号：<br/> 比特位，0 为该组第 1 路，1 为该组第 2 路，以此类推，可填入 0-7。 |


</slot>
