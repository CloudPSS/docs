---
title: PSASP_AVR_1
author:
author_email:

date: 2019/12/24 10:26:16
updated: 2019/12/24 10:26:16

type: components
category: -4003
order: 100

classname: _PSASP_AVR_1
symbol: PSASP_AVR_1
---

## 基本描述

## 参数列表

### PSASP_AVR_1（常规励磁调节系统）参数

PSASP_AVR_1（常规励磁调节系统）参数


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Kr |  | 量测环节放大倍数 | 实数（常量） |  |
| Ka |  | 放大环节（可控硅传递函数）放大倍数 | 实数（常量） |  |
| Kf |  | 反馈环节放大倍数 | 实数（常量） |  |
| Efdmin | p.u. | 励磁电压下限，标幺值(p.u.) | 实数（常量） |  |
| Efdmax | p.u. | 励磁电压上限，标幺值(p.u.) | 实数（常量） |  |
| Tr | s | 量测环节时间常数，单位为秒(s) | 实数（常量） |  |
| Ta | s | 放大环节（可控硅传递函数）时间常数，单位为秒(s) | 实数（常量） |  |
| Tf | s | 反馈环节时间常数，单位为秒(s) | 实数（常量） |  |
| Te | s | 调压器放大器的时间常数（秒） | 实数（常量） |  |



## 端口列表

| 端口名 | 描述 | 类型 | 数据维数 |
| ------ | ---- |:----:|:--------:|
| Vref |  | 输入 | 1 x 1 |
| Vs |  | 输入 | 1 x 1 |
| VT |  | 输入 | 1 x 1 |
| Ef0 |  | 输入 | 1 x 1 |
| S2M |  | 输入 | 1 x 1 |
| Vref0 |  | 输出 | 1 x 1 |
| Ef |  | 输出 | 1 x 1 |




