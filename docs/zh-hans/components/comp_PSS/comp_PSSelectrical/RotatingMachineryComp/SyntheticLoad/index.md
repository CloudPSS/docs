---
title: 综合负荷模型
author: 
author_email:

date: 2019/12/23
updated: 2019/12/23

type: components
category: 3009
order: 3003

classname: SyntheticLoad
symbol: 综合负荷模型
---

## 参数列表

### Configuration

Configuration


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Name |  | 元件名称 | 文本 |  |
| Rated Power | MVA | 系统额定容量 | 实数（常量） |  |
| Rated Stator Voltage (L-L, RMS) | kV | 额定线电压有效值 | 实数（常量） |  |
| Base Operation Frequency | Hz | 额定频率 | 实数（常量） |  |
| Stator Neutral Resistance | Ω | 定子中性点电阻 | 实数（常量） |  |
| Model Type |  | 选择负荷模型种类 | 选择 |  |

### Load Data

Load Data


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Active Power | MW | 综合负荷消耗的有功功率 | 实数（常量） |  |
| Initial Reactive Power | MVar | 综合负荷消耗的感性无功功率 | 实数（常量） |  |
| Dynamic Load Ratio |  | 动态负荷的有功功率占综合负荷总有功功率的比值 | 实数（常量） |  |
| Ap (Static Load Parameter) |  | 有功-电压静特性参数， Ap+Bp+Cp=1 | 实数（常量） |  |
| Aq (Static Load Parameter) |  | 无功-电压静特性参数， Aq+Bq+Cq=1 | 实数（常量） |  |
| Bp (Static Load Parameter) |  | 有功-电压静特性参数， Ap+Bp+Cp=1 | 实数（常量） |  |
| Bq (Static Load Parameter) |  | 无功-电压静特性参数， Aq+Bq+Cq=1 | 实数（常量） |  |
| Voltage Index for P |  | 有功功率-电压指数 | 实数（常量） |  |
| Voltage Index for Q |  | 无功功率-电压指数 | 实数（常量） |  |
| Freq Index for P |  | 有功功率-频率系数 | 实数（常量） |  |
| Freq Index for Q |  | 无功功率-频率系数 | 实数（常量） |  |

### Induction Motor Data

Induction Motor Data


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Magnetizing Parameter Format |  | 选择输入激磁电抗Xm或定子开路转子回路时间常数Tdol' | 选择 |  |
| Stator Resistance | p.u. | 定子绕组电阻 | 实数（常量） |  |
| Rotor Resistance | p.u. | 转子绕组电阻 | 实数（常量） |  |
| Stator Leakage Reactance | p.u. | 定子绕组漏电抗 | 实数（常量） |  |
| Rotor Leakage Reactance | p.u. | 转子绕组漏电抗 | 实数（常量） |  |
| Magnetizing Reactance | p.u. | 励磁电抗（Xmd） | 实数（常量） |  |
| Stator Open-Curcuit Time Constant | s | 定子开路时间常数 | 实数（常量） |  |

### Rotor Equation

Rotor Equation


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Mechanical Torque Type |  | 选择自动计算的机械转矩计算模型 | 选择 |  |
| Inertia Constant | s | 惯性时间常数 | 实数（常量） |  |
| α (Type-1 parameter) |  | 与转速无关的阻力矩系数, Tm=KL(α+(1-α)(1-s)^p) | 实数（常量） |  |
| p (Type-1 parameter) |  | 与转速有关的阻力矩方次, Tm=KL(α+(1-α)(1-s)^p) | 实数（常量） |  |
| A (Type-5 parameter) |  | 阻力矩与转速平方相关的比例系数, Tm=Tm(Aω^2+Bω+C) | 实数（常量） |  |
| B (Type-5 parameter) |  | 阻力矩与转速相关的比例系数, Tm=Tm(Aω^2+Bω+C) | 实数（常量） |  |

### Initial Condition

Initial Condition


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Initial Parameter Format |  | 异步电机初始参数输入类型 | 选择 |  |
| Initial Voltage Magnitude | p.u. | 潮流稳态相电压标幺值 | 实数（常量） |  |
| Initial Slip s₀ |  | 初始滑差 s₀ | 实数（常量） |  |
| Initial Load Factor Mlf |  | 初始负载率 | 实数（常量） |  |

### Monitoring

Monitoring


| 参数名 |  描述 | 类型 | 备注 |
| ------ |  ---- |:----:| ---- |
| 3 Phase Load Current Vector [kA] |  综合负荷三相线电流 | 虚拟引脚（输出） |  |
| RMS Load Current [p.u.] |  综合负荷三相线电流有效值 | 虚拟引脚（输出） |  |
| RMS Stator Voltage [p.u.] |  定子端三相电压有效值 | 虚拟引脚（输出） |  |
| Active Power [MW] |  定子侧有功功率 | 虚拟引脚（输出） |  |
| Reactive Power [MW] |  定子侧无功功率 | 虚拟引脚（输出） |  |

### Monitoring (Induction Motor)

Monitoring (Induction Motor)


| 参数名 |  描述 | 类型 | 备注 |
| ------ |  ---- |:----:| ---- |
| 3 Phase Stator Current [kA] |  定子端三相线电流 | 虚拟引脚（输出） |  |
| RMS Stator Current [p.u.] |  定子端三相线电流有效值 | 虚拟引脚（输出） |  |
| 3 Phase Rotor Current [kA] |  转子端三相线电流 | 虚拟引脚（输出） |  |
| Mechanical Speed [p.u.] |  转子机械转速 | 虚拟引脚（输出） |  |
| Motor Slip s [p.u.] |  转子转差率s | 虚拟引脚（输出） |  |
| Rotor Position [Rad] |  转子角位置 | 虚拟引脚（输出） |  |
| Electrical Torque [p.u.] |  电磁转矩 | 虚拟引脚（输出） |  |
| Mechanical Torque [p.u.] |  机械转矩 | 虚拟引脚（输出） |  |
| Mechanical Speed (Initialization) [p.u.] |  稳态启动的转子机械转速（可用于感应电机初始化） | 虚拟引脚（输出） |  |
| Mechanical Torque (Initialization) [p.u.] |  根据公式计算的PSASP模型机械转矩（可用于感应电机Tm的输入） | 虚拟引脚（输出） |  |
| Motor Rated Power Sb [MVA] |  感应电机额定容量（可经由初始转差或负荷率计算） | 虚拟引脚（输出） |  |
| Active Power (Induction Motor) [MW] |  感应电机定子侧有功功率 | 虚拟引脚（输出） |  |
| Reactive Power (Induction Motor) [MW] |  感应电机定子侧无功功率 | 虚拟引脚（输出） |  |



## 端口列表

| 端口名 | 描述 | 类型 | 数据维数 |
| ------ | ---- |:----:|:--------:|
| Stator Port |  | 电气 | 3 x 1 |
| Input Speed |  | 输入 | 1 x 1 |
| Control Switch Signal |  | 输入 | 1 x 1 |
| Input Torque |  | 输入 | 1 x 1 |




