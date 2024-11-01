<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### 基本参数

基本参数

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 设备名称 | `Name` | 文本 | 设备名称 |
| 系统频率 | `Freq` | 实数 [Hz] | 系统频率 |
| Ⅰ段投切控制字 | `Enable1` | 布尔 | 投切控制字（0为保护退出，1为保护启用） |
| Ⅱ段投切控制字 | `Enable2` | 布尔 | 投切控制字（0为保护退出，1为保护启用） |
| Ⅲ段投切控制字 | `Enable3` | 布尔 | 投切控制字（0为保护退出，1为保护启用） |

#### 负压过流保护参数整定

负压过流保护I段、Ⅱ段、Ⅲ段参数整定

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Ⅰ段保护整定电流 | `Iset1` | 实数 [kA] | Ⅰ段保护整定电流 |
| Ⅰ段保护动作时限 | `Delay1` | 实数 [s] | Ⅰ段保护动作时限 |
| Ⅱ段保护整定电流 | `Iset2` | 实数 [kA] | Ⅱ段保护整定电流 |
| Ⅱ段保护动作时限 | `Delay2` | 实数 [s] | Ⅱ段保护动作时限 |
| Ⅲ段保护整定电流 | `Iset3` | 实数 [kA] | Ⅲ段保护整定电流 |
| Ⅲ段保护动作时限 | `Delay3` | 实数 [s] | Ⅲ段保护动作时限 |
| 低压整定值 | `Ulow_set` | 实数 [kV] | 低压整定值 |
| 负序电压整定值 | `U2_set` | 实数 [kV] | 负序电压整定值 |

#### 日志记录

日志记录

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Ⅰ段动作告警信息 | `Info1` | 文本 | Ⅰ段动作告警信息 |
| Ⅱ段动作告警信息 | `Info2` | 文本 | Ⅱ段动作告警信息 |
| Ⅲ段动作告警信息 | `Info3` | 文本 | Ⅲ段动作告警信息 |

#### Monitoring

动作信号监测

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 复压过流Ⅰ段动作信号 | `Trip1` | 虚拟引脚（输出） | 复压过流Ⅰ段动作信号 |
| 复压过流Ⅱ段动作信号 | `Trip2` | 虚拟引脚（输出） | 复压过流Ⅱ段动作信号 |
| 复压过流Ⅲ段动作信号 | `Trip3` | 虚拟引脚（输出） | 复压过流Ⅲ段动作信号 |
| 复序电压 | `U2` | 虚拟引脚（输出） | 复序电压（2维，极坐标形式输出，0：幅值，1：相位） |


</slot>
