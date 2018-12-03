---
title: 并联电容/电抗器
author: 
author_email:

date: 2018/12/3 15:48:31
updated: 2018/12/3 15:48:31

type: components
category: 3004
order: 100

classname: _newShuntLC_3p
symbol: newShuntLC
---
## 基本描述
{% compsymbol newShuntLC %}

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 |  |
| Rated Frequency | Hz | 额定频率 | 实数（常量） |  |
| Rated Voltage (L-L, RMS) | kV | 额定线电压有效值 | 实数（常量） |  |
| Input Capacity | MVar | 投入容量（电容为负，电抗为正） | 实数（常量） |  |

### Monitoring
| 参数名 | 备注 | 类型 | 描述 |
| :--- | :--- | :--: | :--- |
| 3 Phase Current Vector \[kA\] | 三相电流 | 文本 |  |
| RMS Current \[kA\] | 电流均方根值 | 文本 |  |
| Active Power \[MW\] | 有功功率 | 文本 |  |
| Reactive Power \[MVar\] | 无功功率 | 文本 |  |


## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Pin + | 3×1 | |                   

## 使用说明


## 测试模型
[<test name>](<test link>)显示了并联电容/电抗器的典型应用。

## 相关元件


