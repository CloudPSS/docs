---
title: 自定义元件模型 DSL 与 CSP 实例
description: IESLab 规划优化平台-元件库-自定义元件-DSL 语法与塔式光热（CSP）
sidebar_position: 10
---
## 功能定义

本文教你**在平台上自定义一个能源设备的优化模型**——不需要修改任何平台代码，只需填写**元件定义表**（集合 / 参数 / 变量 / 约束 / 目标 / 统计），并在约束与目标中书写**表达式**，即可把一台新设备（如平台现有组件的改进型、塔式光热、新型热泵）接入规划与运行优化。

三个要点：

- **通用表达**：用通用数学式（`sum(...) in 域`、`mean(效率列)`、`Etes[pd-1]`）描述设备模型，不绑定任何一家优化语言的语法，与具体求解器无关。
- **表格 + 表达式两种输入**：结构（有哪些参数、变量、约束）用表格声明；数学关系（约束式、目标式）用表达式书写。
- **以塔式光热（CSP）贯穿示例**：第二章讲表达式语法，第三章用真实 CSP 模型（镜场→吸热器→熔盐储热→汽轮机→电）完整走一遍"从填表到出模型"的过程。

![CSP](./csp.png "塔式光热（CSP）系统示意")

---

## 一 自定义元件模型定义与DSL示例

一个元件模型由下面七部分组成，按顺序填表即可。**每种设备型号对应设备表中的一行**：填几行型号，平台就按几个型号建模，你只需描述"这一类设备长什么样"。

| 部分                           | 平台表格                | 作用                                   |
| :----------------------------- | :---------------------- | :------------------------------------- |
| 标识与接入                     | 元件基本信息            | 组件 rid、能量类型、接入端口           |
| 集合 IndexTable                | 集合表                  | 模型的索引维度（时段、设备型号等）     |
| 参数 ParamTable                | 参数表 + 各设备表列     | 已知数据：曲线、系数、单价、容量上下限 |
| 变量 VarTable                  | 变量表                  | 决策量：投资台数、逐时功率、储热存量等 |
| 约束 ConstraintTable           | 约束表                  | 物理与耦合关系（表达式）               |
| 目标 ObjectiveTable            | 目标表                  | 成本项（默认最小化）                   |
| 统计 SpecialTable / StatsTable | 指标统计表 / 结果统计表 | 结果指标公式与展示分组                 |

### 1.1 标识与接入

| 字段        | 含义           | CSP 取值 |
| :---------- | :------------- | :------- |
| rid         | 元件唯一标识符 | csp      |
| energy_type | 能量类型       | electric |
| pin_type    | 接入端口类型   | ac/dc    |

### 1.2 集合 IndexTable

集合回答"模型建在哪些维度上"。除平台全局的**时段**（PERIOD）、月（MONTH）、日（DAY）外，元件可以自声明设备集合。集合表每行三列：**集合名、索引简称、含义中文说明**。

| 集合           | 简称 | 含义         |
| :------------- | :--- | :----------- |
| FIELD          | fd   | 定日镜场型号 |
| TURBINEPOWER   | td   | 汽轮机型号   |
| THERMALSTORAGE | ts   | 储热型号     |
| PERIOD         | pd   | 逐时运行时段 |

> 实际型号数量以对应设备表的行数为准：多填几行就是多型号，定义无需改动。

**DSL 示例**（声明一个设备集合，key=value 一行一条）：

```text
set = { name: "FIELD", alias: "fd", desc: "定日镜场索引：一行一个定日镜型号，采购面积由变量 Kfield 决定，对应设备表 FieldTable" }
set = { name: "PERIOD", alias: "pd", desc: "逐时运行时段索引：运行变量（Qch/Qdis、Pgen/Pcut 等）在此维度上逐时定义" }
```

### 1.3 参数

参数是"已知数"。平台提供**三条声明通道**，参数的值从哪条通道来，在填表前先分清楚：

**通道① 元件级参数表 ParamTable**——每行声明：参数名 / 索引（留空为标量）/ 默认值 / 单位 / **类别 kind**。适合与时序曲线、一般标量。塔式光热只在此声明了一行：逐时法向直射辐照 `dnipd`（索引 pd，单位 W/m²，类别 curve）。

**通道② 设备表列（设备级参数）**——**定义 + 赋值一体**：列名即参数名，一行一个型号。单台容量、逐型号效率、充放能力系数、采购与运维单价都放这里。增删型号行时声明零改动，向量赋值自动跟随。

**通道③ 隐式标量通道**——在元件参数面板里直接录入的数值标量（如规划上下限、SOC 系数、设计日照强度），无需在参数表中声明，即可在表达式与条件中按名字引用。

**kind 类别**（通道①的语义分类，平台据此做统一校验）：

| kind           | 含义                            | 填写要求                                       |
| :------------- | :------------------------------ | :--------------------------------------------- |
| price_invest   | 投资单价                        | 必须填单位（元或万元），金额口径以所填单位为准 |
| price_om       | 运维单价（年固定 / 按电量变动） | 必须填单位                                     |
| efficiency     | 效率、系数                      | —                                             |
| planning_bound | 容量上下限（Min、Max 开头）     | 必须是标量（不索引任何集合）                   |
| curve          | 时序曲线（按时段索引）          | —                                             |
| state          | 状态系数（如储热初值比例）      | —                                             |
| general        | 一般参数（缺省）                | —                                             |

> 通道②的设备表单价列走平台统一的金额口径约定（采购成本元/台·m²·kWh、固定运维元/年、可变运维元/kWh），无需再填 kind 与单位；**口径必须唯一，否则报表会差 1 万倍**。

**系统级平均用 mean 算子**：效率与可变运维单价放在设备表列（逐型号），表达式中直接写 `mean(etapb)` 即取全部型号的算术平均——**设备表增删型号行后平均值自动跟随，公式无需修改**。不要再声明 `scope=system` 的 `_sys` 参数行（旧机制仅为存量元件保留）。

**平台注入参数**：`kydt`（各时段代表小时数，全年合计约 8760）、`crf`（投资年化系数）、`pscale`（典型日缩放系数）、`pdinday`（每日时段数）由框架自动注入，**不要**在参数表中重复声明。

> 平台表单中的枚举列（kind / scope / domain / role / flow_role / sense / direction 等）都是**下拉选择**（choice / multiSelect）：选项与描述以内核帮助词典（`spec.py` 的 `VAR_ROLE_HELP` 等）为单一事实源，界面提示与校验报错同源。`indices` 列为多选下拉，选项即集合声明表里的集合；设备表的 `indices` 列为单选（`FIELD:fd` 形态，与集合声明表保持一致）。

**DSL 示例**（三条通道各一行，均可在表达式与条件中按名字引用）：

```text
param = { name: "dnipd", indices: ["pd"], default: "", unit: "W/m2", kind: "curve", scope: "per_model", source: "" }   # 通道①：逐时辐照曲线，取值由系统内置注入
device_row = { name: "镜场1", indices: "FIELD:fd", Ahelio: 32.76, FieldRho: 0.51, FieldEtarec: 0.84, FieldPurchaseCost: 710, FieldFixedOMCost: 14.75 }   # 通道②：设备表一行一个型号，列名即参数名
scalar = { DNI: 0, DayStart: 9, DayEnd: 17, socini: 0.5, soclow: 0.05, socup: 0.95, MinFieldArea: 0, MaxFieldArea: 100000 }   # 通道③：参数面板数值标量，免声明直接引用
```

### 1.4 变量 VarTable

每行声明：变量名 / 索引（多选下拉，绑定集合声明表）/ **类型 domain**（real 实数、integer 整数、binary 0-1 变量）/ **角色 role** / 中文标签 / 单位 / 下限 / 上限 / **流向角色 flow_role**（该量进哪个载体的能量平衡；留空 = 内部量，不参与平衡派生）。

- **投资决策 = 各型号台数**（integer，角色 investment）：如镜场份数 Kfield、汽轮机台数 Kturb、储热份数 Ktes，求解结果回填到设备配置。单台容量放在设备表列中，**总容量在约束里写"单台容量 × 台数再求和"，不设总容量参数**。
- **运行变量 = 系统级逐时量**（索引为时段 pd，real，下限 0）：如充热功率、放热功率、发电功率、储热存量。
- **角色 role** 标记变量的物理含义，平台据此**自动完成节点功率平衡与结果统计**，通常无需手写平衡方程。CSP 用到的角色：

| role                 | 含义                                                                                                | 对应变量          |
| :------------------- | :-------------------------------------------------------------------------------------------------- | :---------------- |
| investment           | 投资决策量：被规划决策的容量/台数，会进设备配置表与成本报表，并按所填 domain 求解（台数填 integer） | Kfield Kturb Ktes |
| heat_input           | 热量输入：内部吸热（如镜场集热充入），不代表网络侧能量输入                                          | Qch               |
| operational          | 普通运行量：逐时优化的物理量，不直接进入设备配置与投资统计                                          | Qpb Qdis          |
| heat_curtailment     | 热量弃置：弃热功率                                                                                  | Qcurt             |
| state_of_charge      | 储能存量：储能介质的当前存量，参与 SOC 递推与限幅                                                   | Etes              |
| electric_output      | 电量输出：向外供电的功率（发电上网）                                                                | Pgen              |
| electric_curtailment | 电量弃置：可发电而放弃上网的功率（弃电）                                                            | Pcut              |

role 与 flow_role 各管各的：**role 管用途分类，flow_role 管能量方向**（`<载体>_output/_input/_curtailment`，如 electric_output 是"向节点注入电功率"）。两者在平台界面均为下拉选择，选项全集与内核词表同源（role = 物理量词表 ∪ 三个求解分类，flow_role = 载体 × 三方向 + 空）。

**DSL 示例**（投资量、运行量、能量平衡出口各一条）：

```text
var = { name: "Kfield", indices: ["fd"], domain: "integer", lower_bound: "0", upper_bound: "", role: "investment", flow_role: "None", label: "镜场型号份数", unit: "份" }   # 投资量：整数台数，结果回填设备配置与成本报表
var = { name: "Qch", indices: ["pd"], domain: "real", lower_bound: "0", upper_bound: "", role: "heat_input", flow_role: "None", label: "充热功率", unit: "kWth" }           # 逐时运行量：热是内部量，flow_role 留空（None）
var = { name: "Pgen", indices: ["pd"], domain: "real", lower_bound: "0", upper_bound: "", role: "electric_output", flow_role: "None", label: "理想发电功率", unit: "kW" }   # 电量出口：role 带词表物理量，平台据此自动生成节点平衡
```

### 1.5 约束 ConstraintTable

每行声明：约束名 / 中文标签 label / 条件 condition / 表达式 body / 角色 role。约束的界写在表达式内（比较符 `<=` `>=` `==`）；**约束表没有上下限两列**，需要双边限制时拆成两条单边约束（如储热存量下限一条、上限一条）。无条件生效的约束条件列填 `true`。角色三选项（下拉）：**coupling** 耦合类——投资与运行/结构关系同时出现（容量限幅、转换上限、总量界等，CSP 大多数约束属此类）；**operational** 运行类——仅逐时运行量（如 SOC 逐时递推）；**investment** 投资类——仅投资决策量。

**约束是逐时的还是总量的，不需要单独指定**：表达式中出现逐时量（如逐时功率）即为逐时约束（每个时刻都要成立）；全是标量即为总量约束（整体成立一次）。

**DSL 示例**（总量耦合、逐时递推、条件生效各一条）：

```text
constraint = { name: "tes_charge_cap", label: "储热充热上限", condition: "true", role: "coupling",
               body: "Qch <= sum(StorageChCapCoef * Eunit * Ktes) in thermalstorage" }                       # 总量耦合：Σ 单台×台数
constraint = { name: "tes_balance", label: "储热 SOC 动态递推", condition: "pd >= 1", role: "operational",
               body: "Etes == Etes[pd-1] + mean(etach) * Qch - Qdis / mean(etadis)" }                        # 逐时运行：时间递推 + mean 均值
constraint = { name: "field_area_up", label: "镜场总量上界", condition: "MaxFieldArea > 0", role: "coupling",
               body: "sum(Ahelio * Kfield) in field <= MaxFieldArea" }                                       # 条件生效：上限留空（=0）即不约束
```

### 1.6 目标 ObjectiveTable

每行声明：目标名 / 中文标签 / 角色 role / 表达式 body / 优化方向 sense。角色两选项（下拉）：**investment** 投资口径——一次性投资与年固定运维（乘 crf/pscale 或年度值）；**operational** 运行口径——按逐时电量/热量计的费用（乘 kydt），留空缺省按运行口径。方向当前仅支持 **minimize**（最小化成本）；要最大化收益请把该项系数取负。塔式光热共四类成本：投资 invest、固定运维 fixed_om、可变运维 var_om、弃电弃热惩罚 penalty_curtail。

**DSL 示例**（投资口径与运行口径各一条，金额 ÷10000 折万元）：

```text
objective = { name: "invest", label: "投资成本", role: "investment", sense: "minimize",
              body: "(sum(Ahelio * Kfield * FieldPurchaseCost) in field + sum(Punit * Kturb * PowerPurchaseCost) in turbinepower + sum(Eunit * Ktes * StoragePurchaseCost) in thermalstorage) * crf * pscale / 10000" }
objective = { name: "var_om", label: "年可变运维成本", role: "operational", sense: "minimize",
              body: "sum((Pgen - Pcut) * kydt) in period * mean(VariableOMCost) / 10000" }
```

### 1.7 派生统计与结果统计

- **派生统计 SpecialTable**：声明结果指标的计算公式（formula）与单位，如年发电小时数、年弃电率、投资成本、年固定运维。公式语法与约束表达式一致，直接写聚合式即可。
- **节点平衡**：元件向所接端口净输出的功率，决定它如何参与整个系统的能量平衡。塔式光热的净上网功率 = 理想发电 − 弃电，由发电 / 弃电两个角色的变量自动生成。
- **结果统计 StatsTable**：声明哪些量进入结果展示与能量平衡图，每行指定：变量 var / 中文标签 / 展示类型 kind（curve 逐时曲线、config 配置量、special 等公式类）/ 能量载体 energy（Electric / Heat / …，首字母大写；留空 = 只出曲线不进平衡图）/ 分组 group / 单位 / 方向 direction（**supply** 供能正贡献、**load** 受能与弃能负贡献——弃能视同供给平衡节点的负荷，小写；留空 = 按流向角色自动推导，output→supply、input/curtailment→load）/ 收支 money（expense / income；留空 = 不统计收支）。各列在平台界面均为下拉选择；「（空）」选项的 key 约定为 None/none（解析期归一化为空串），每个 choice 列都必须有默认选型。

**DSL 示例**（派生指标与结果曲线各一条）：

```text
special = { label: "年弃电率", unit: "%", formula: "100 * sum(Pcut*kydt) / max(sum(Pgen*kydt), 极小正数)" }
stats = { label: "发电功率", kind: "curve", group: "功率(kW)", unit: "kW", var: "Pgen", energy: "Electric", direction: "supply", money: "None" }   # 进电平衡图，供能正贡献
stats = { label: "弃电功率", kind: "curve", group: "功率(kW)", unit: "kW", var: "Pcut", energy: "Electric", direction: "load", money: "None" }     # 弃能归负荷
stats = { label: "汽轮机型号台数", kind: "config", unit: "台", var: "Kturb", energy: "None", direction: "none", money: "None" }                    # 配置量：写进设备配置表
```

---

## 二 表达式 DSL 特性

表达式出现在约束、目标、变量上下限与派生统计四处，语法完全相同。表达式中引用的每个名字都必须已在参数表、设备表列或变量表中声明（平台注入的基础参数 kydt、crf、pscale、pdinday 可直接引用）。第一章各定义表均附有 `set/param/var/constraint/objective/special/stats = {...}` 的 key=value 示例，本章讲这些示例中**表达式部分**的特性，第三章给完整实例。

### 2.1 求和与作用域

求和写作 `sum(表达式) in 域`，域写在括号外，读作"在……上求和"。它只修饰紧邻的那个 `sum`：`sum(a) in field * crf` 等价于 `(sum(a) in field) * crf`。

| 写法                | 聚合什么                                    | 用在哪                             |
| :------------------ | :------------------------------------------ | :--------------------------------- |
| `sum(X) in field` | 只在 field 维度求和，其余维度（如时段）保留 | 逐时约束：每个时刻成立，按型号求和 |
| `sum(X)`          | 对表达式中所有索引维度求和                  | 总量约束与目标：如总容量、全年电量 |

- **多维求和用括号并列**：`sum((Pgen - Pcut) * kydt) in (td, pd)` 表示先按型号、再按时段；重复域会报错（会被嵌套聚合两次，数值放大）。嵌套写法 `sum(sum(X) in td) in pd` 依然合法，两者等价。
- **域可写简称**：`in td` 等价于 `in TURBINEPOWER`、`in pd` 等价于 `in PERIOD`。
- **域名匹配宽松**：大小写与连字符、下划线、空格不计，`field`、`FIELD`、`Field` 等价，照页面上看到的集合名写即可。可用域 = 全局时段 / 月 / 日 + 本元件声明的集合。

### 2.2 mean 集合平均算子

`mean(表达式)[ in 域]` —— 对设备表全部型号取**算术平均**：

```text
mean(etapb)                # 汽轮机效率按设备表全部型号平均
mean(etach)                # 储热充热效率均值
mean(VariableOMCost)       # 可变运维单价均值
```

- 语义 = 聚合后除以集合规模，集合规模就是**设备表行数**——增删型号行自动跟随；
- 参数与变量都可作操作数，不引入非线性；
- 域规则与 sum 一致，可省略（按声明索引自动确定）；只能用于**设备集合**，不能对时段做 mean；
- 它取代了旧的 `scope=system` + `<列>_sys` 声明写法——均值是表达式内的即时运算，不是声明出来的独立参数。

### 2.3 下标可省

符号的下标一般不需要手写，平台按声明自动补齐：

```text
Qch + Qpb              # 逐时约束中自动按当前时段取值
Ahelio * Kfield        # 在 in field 域内自动按当前型号取值
kydt                   # 全局参数按时段自动取值
```

唯一需要显式写下标的是**时间递推**：`Etes[pd - 1]` 表示上一时段的存量。

### 2.4 运算符与函数

| 类别     | 写法                                                                                                                                               | 说明                                                   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| 四则运算 | `+ - * /`、负号 `-x`                                                                                                                           | 先乘除后加减                                           |
| 聚合     | `sum(...)`、`mean(...)`                                                                                                                        | 配合`in 域` 使用                                     |
| 比较     | `<=` `>=` `==`                                                                                                                               | 不支持严格不等号`<` `>`（优化模型没有严格不等式）  |
| 时间偏移 | `Etes[pd - 1]`                                                                                                                                   | 仅支持"变量名 ± 数字"                                 |
| 函数     | `max(a,b)` `min(a,b)` `abs(x)`                                                                                                               | 只能作用于参数与常数，不能作用于变量                   |
| 数值     | `100` `0.5`                                                                                                                                    | 不支持科学计数法，一百万要写`1000000` 不能写 `1e6` |
| 关键字   | `sum` `mean` `max` `min` `abs` `in`，全局集合 `PERIOD`/`MONTH`/`DAY` 与简称 `pd`/`m`/`d`，全局参数 `kydt`/`PenaltyRen` | 不能用作参数或变量名                                   |

> 不支持幂运算 `^`、百分号与中文符号名。

### 2.5 条件索引

条件让约束只在部分时段生效，写在约束的 condition 列：

```text
"pd >= 1"                          # 从第二个时段起（递推段）
"pd == 0"                          # 第一个时段（初始段）
"(pd % pdinday) == (pdinday - 1)"  # 每个典型日的最后一个时段
"MaxPowerRate > 0"                 # 容量上限填了正值才生效（留空即不限制）
```

- 取余写 `%`，整除写 `//`（不要写 `mod` / `div` 关键字）；
- 多个条件用 `and` 连接，不支持 `or`；
- 条件中的参数、变量直接写名字即可。

### 2.6 常见错误与排查

| 现象或提示                      | 原因                                     | 处理                                                                                           |
| :------------------------------ | :--------------------------------------- | :--------------------------------------------------------------------------------------------- |
| 提示"未登记的域"                | 域名拼错，或该集合未声明                 | 按提示的可用域清单核对；确认集合已声明                                                         |
| 提示"归一化后多义"              | 两个集合去掉分隔符后重名                 | 写精确的集合名                                                                                 |
| 提示"索引变量未量化"            | 符号的索引、求和域、约束类型不一致       | 三者保持一致                                                                                   |
| 提示"名称未声明"                | 引用了未声明的参数或变量                 | 在参数表、设备表列或参数面板中补充                                                             |
| mean 报"集合规模未知"           | 对时段等全局域做 mean                    | mean 仅支持设备集合（规模=设备表行数）                                                         |
| 提示"direction='Supply' 不合法" | 统计表方向手写了大小写与词表不符         | direction 用小写 supply/load（弃能归 load，无 abs）；energy 用首字母大写 Electric/Heat/…；空选项填 None/none（合法，归一化为空）；界面用下拉选择即可避免 |
| 结果中配置恒为 0                | 容量上下限小于单台容量（台数取整后为 0） | 放宽上下限，或增补小容量型号                                                                   |

---

## 三 CSP 塔式光热实例

**系统组成**：定日镜场集热 → 吸热器 → 熔盐储热（充 / 放）→ 汽轮机发电 → 上网。塔式光热 = **镜场、汽轮机、储热**三个子系统的组合，各对应一张设备表；热是内部量，只对外发电。

### 3.1 集合与设备表

四个索引集合见 1.2 节表格。三张设备表一行一个型号：

| 设备表       | 集合                 | 列（即设备级参数）                                                                                                                                                                 |
| :----------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FieldTable   | FIELD（fd）          | Ahelio 单份采光面积 m²、FieldRho 光学效率、FieldEtarec 吸热器效率、FieldPurchaseCost 采购单价、FieldFixedOMCost 固定运维单价                                                      |
| TurbineTable | TURBINEPOWER（td）   | Punit 单台额定功率 kW、etapb 热-电效率、PowerPurchaseCost、PowerFixedOMCost、VariableOMCost 可变运维 元/kWh                                                                        |
| StorageTable | THERMALSTORAGE（ts） | Eunit 单台容量 kWh、etach / etadis 充放热效率、StorageChCapCoef / StorageDischCapCoef 充放能力系数、StoragePurchaseCost、StorageFixedOMCost、tcold / thot 冷热罐设计温度（记录用） |

每行还带型号名称 name、中文说明 label 与索引声明（如 `FIELD:fd`）——平台界面为**下拉选择**，选项即本表所属的集合声明（与集合声明表保持一致）。模板默认按 1MW 档配置（100MW 档改 Punit / Eunit 即可），采购单价按 元/m²、元/kW、元/kWh 录入。

### 3.2 参数

| 参数                                                                            | 通道         | 说明                                                                                       |
| :------------------------------------------------------------------------------ | :----------- | :----------------------------------------------------------------------------------------- |
| dnipd                                                                           | 参数表 curve | 逐时法向直射辐照：设计日照强度大于 0 时取设计值（仅日照时段内），为 0 时由平台气象数据换算 |
| MinFieldArea MaxFieldArea MinPowerRate MaxPowerRate MinStorageCap MaxStorageCap | 隐式标量     | 三个子系统的总容量界；留空（=0）表示不限制                                                 |
| socini soclow socup                                                             | 隐式标量     | 储热初值比例、SOC 上下限比例                                                               |
| DNI DayStart DayEnd                                                             | 隐式标量     | 设计日照强度与日照起止小时，用于生成 dnipd 曲线                                            |
| pdinday crf pscale kydt                                                         | 平台注入     | 每日时段数、投资年化系数、典型日缩放系数、时段代表小时数，无需用户填写                     |

效率与单价（各设备表列）为逐型号量，表达式中用 `mean(列名)` 取系统级平均——增删型号行自动跟随，公式无需修改，也不再声明 `_sys` 参数。

### 3.3 变量（10 个）

| 变量              | 索引         | 类型 / 角色                 | 含义                                |
| :---------------- | :----------- | :-------------------------- | :---------------------------------- |
| Kfield Kturb Ktes | fd / td / ts | integer / investment        | 各子系统的型号台数（定容决策）      |
| Qch               | pd           | real / heat_input           | 储热充热功率                        |
| Qpb Qdis          | pd           | real / operational          | 镜场直通汽轮机热功率 / 储热放热功率 |
| Qcurt             | pd           | real / heat_curtailment     | 弃热功率                            |
| Etes              | pd           | real / state_of_charge      | 储热存量                            |
| Pgen              | pd           | real / electric_output      | 理想发电功率（毛值）                |
| Pcut              | pd           | real / electric_curtailment | 弃电功率                            |

净上网功率 = 理想发电 − 弃电，平台据此自动生成节点平衡。无上网功率限制时，弃电的最优解恒为 0（弃电只增加惩罚、不带来收益），属预期行为。

### 3.4 约束（17 条，全部单边）

**(a) 能量转换（4 条，角色 coupling）**

```text
field_alloc        Qch + Qpb + Qcurt == sum(dnipd * FieldRho * FieldEtarec / 1000 * Ahelio * Kfield) in field
turbine_heat_cap   Qpb + Qdis <= sum(Punit * Kturb) in turbinepower / mean(etapb)
power_convert      Pgen == mean(etapb) * (Qpb + Qdis)
pc_cap             Pcut <= Pgen
```

说明：镜场集热三路分配（充热 / 直通 / 弃热）；进热不超过汽轮机额定电功率折算的热耗（÷ 热-电效率）；发电功率等于效率乘进热；弃电不超过发电。

**(b) 储热运行（7 条）**——展示时间递推与条件索引的用法：

```text
tes_balance_init   条件 pd == 0（角色 operational）：
    Etes == socini * sum(Eunit * Ktes) in thermalstorage + mean(etach) * Qch - Qdis / mean(etadis)
tes_balance        条件 pd >= 1（角色 operational）：
    Etes == Etes[pd-1] + mean(etach) * Qch - Qdis / mean(etadis)
tes_eod_restore    条件 (pd % pdinday) == (pdinday - 1)（角色 operational）：
    Etes == socini * sum(Eunit * Ktes) in thermalstorage
tes_soc_low        Etes >= soclow * sum(Eunit * Ktes) in thermalstorage
tes_soc_up         Etes <= socup * sum(Eunit * Ktes) in thermalstorage
tes_charge_cap     Qch  <= sum(StorageChCapCoef * Eunit * Ktes) in thermalstorage
tes_discharge_cap  Qdis <= sum(StorageDischCapCoef * Eunit * Ktes) in thermalstorage
```

说明：初始时刻存量由初值系数 socini 决定；其后逐时递推；每个典型日结束时存量恢复初值（日循环）；存量按总容量的比例限幅（soclow ~ socup）；充放功率受储热自身的充放能力系数限制——充热能力约束同时关闭了"零容量储热罐倾泻全部集热"的物理漏洞。

**(c) 容量上下限（6 条）**——上下限留空（=0）即该约束不生效：

```text
field_area_low/up     sum(Ahelio * Kfield) in field        >= MinFieldArea  / <= MaxFieldArea     条件 Min*/Max* > 0
turbine_cap_low/up    sum(Punit * Kturb) in turbinepower   >= MinPowerRate  / <= MaxPowerRate     条件 Min*/Max* > 0
storage_cap_low/up    sum(Eunit * Ktes) in thermalstorage  >= MinStorageCap / <= MaxStorageCap    条件 Min*/Max* > 0
```

### 3.5 目标（4 条，sense 均为 minimize）

```text
invest           ( sum(Ahelio * Kfield * FieldPurchaseCost) in field
                 + sum(Punit * Kturb * PowerPurchaseCost) in turbinepower
                 + sum(Eunit * Ktes * StoragePurchaseCost) in thermalstorage ) * crf * pscale / 10000
fixed_om         同上结构，单价换为固定运维单价，/ 10000
var_om           sum((Pgen - Pcut) * kydt) in period * mean(VariableOMCost) / 10000
penalty_curtail  PenaltyRen * ( sum(Qcurt * kydt) in period + sum(Pcut * kydt) in period )
```

三条口径说明：

- **投资**乘 crf（年化系数）与 pscale（典型日缩放），把一次性投资折算到优化周期；固定运维为年度值，不折算；投资与固定运维均为一次性总量式（标量约束口径，`sum` 无域即聚合全部索引）；
- **按电量计的费用**（可变运维、弃电弃热惩罚）乘 kydt（各时段的代表小时数，全年合计约 8760），得到年电量口径；
- **单价按元录入**，投资 / 固定运维 / 可变运维三项在目标式中除以 10000 统一折算为**万元**；惩罚单价 PenaltyRen 由平台注入、口径已与万元制一致，惩罚项不再折算。同一个金额口径务必全模型唯一，否则报表会差 1 万倍。

### 3.6 派生统计与结果展示

**派生统计 SpecialTable**（结果指标公式）：

| 指标         | 公式                                                                       | 单位    |
| :----------- | :------------------------------------------------------------------------- | :------ |
| 年发电小时数 | `sum(Pgen*kydt) / max(sum(Punit*Kturb), 极小正数)`（分母加保护避免除零） | h       |
| 年弃电率     | `100 * sum(Pcut*kydt) / max(sum(Pgen*kydt), 极小正数)`                   | %       |
| 投资成本     | 三子系统`单台容量×台数×采购单价` 求和后 / 10000                        | 万元    |
| 年固定运维   | 三子系统固定运维求和后 / 10000                                             | 万元/年 |

**结果统计 StatsTable**：逐时曲线按分组展示——电功率组（发电 Pgen、弃电 Pcut，单位 kW）、热功率组（直通 Qpb、充热 Qch、放热 Qdis、弃热 Qcurt，单位 kWth）、储热量组（存量 Etes，单位 kWh）；配置量（Kfield / Kturb / Ktes 台数）作为 config 项展示。能量平衡方向：发电取 supply（正贡献）、弃电取 load（负贡献——弃能视同供给平衡节点的负荷），热功率与储热量不进电平衡（energy 留空）；注意词表大小写——direction 小写、energy 首字母大写。

---

## 四 典型场景配置指南

- **纯发电（默认）**：如上配置，热仅内部量，净上网功率接入交流母线。
- **抑制弃电弃热**：保留弃电弃热惩罚项（乘惩罚单价 PenaltyRen），系统会自动在富余时段减少弃电弃热。
- **多型号 / 扩缩容**：在设备表中增加或删减型号行即可——mean 均值自动跟随行数，公式无需修改；台数为整数，单台容量列决定每一档的规模。
- **给定装机只做运行**：把相应台数变量的下限与上限设为同一数值（固定配置），模型即退化为给定装机下的运行优化。

## 使用限制

- 模型为**线性混合整数规划**。`max / min / abs` 只能作用于参数与常数；含变量的非线性关系（变量相乘、变量作分母等）不被支持，需要先做线性化。
- 不支持严格不等号 `<` `>`、科学计数法、幂运算 `^`、中文变量名。
- 元件内部的表达式 DSL 与跨设备的**系统约束 DSL** 是两套语言（主要是作用域的不同，前者用 `in 域`表示组件内部域、后者用 `@组件`表示跨组件的域），不要混用。

## 常见问题

- **参数填了不生效**：容量上限小于单台容量时，整数台数只能为 0（平台会给出"配置自相矛盾"提示）；上下限留空即不限制，不是错误。
- **报表金额差 1 万倍**：单价按元录入时，目标式中除以 10000 折算万元；若按万元录入则不再除。全模型金额口径必须唯一。
- **修改后结果没变**：检查表达式中的求和域与集合声明是否一致（改了集合名要同步修改声明与求和域）；设备表增删行后 mean 均值自动跟随，无需改公式。
