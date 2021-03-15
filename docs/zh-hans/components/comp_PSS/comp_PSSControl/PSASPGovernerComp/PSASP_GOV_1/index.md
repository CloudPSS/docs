



> &nbsp;

## 参数列表

### PSASP_Gov1：水、火电机组均适用的通用调速器模型

PSASP_Gov1：水、火电机组均适用的通用调速器模型


| 参数名 | 单位 | 描述 | 类型 | 备注 |
| ------ | ---- | ---- |:----:| ---- |
| Kδ |  | 量测环节放大倍数。 | 实数（常量） |  |
| Ki |  | 硬负反馈放大倍数。 | 实数（常量） |  |
| Kβ |  | 软负反馈放大倍数。 | 实数（常量） |  |
| σmax | p.u. | 配压阀行程上限，标幺值(p.u.) | 实数（常量） |  |
| σmin | p.u. | 配压阀行程下限，标幺值(p.u.) | 实数（常量） |  |
| μmax | p.u. | 导水叶(汽门)开度上限，标幺值(p.u.) | 实数（常量） |  |
| μmin | p.u. | 导水叶(汽门)开度下限，标幺值(p.u.) | 实数（常量） |  |
| ε | p.u. | 调速器死区，标幺值(p.u.) | 实数（常量） |  |
| α |  | 汽轮机过热系数。若无中间过热， =1；对于水轮机， =1 | 实数（常量） |  |
| Ti | s | 水轮机软反馈时间常数，单位为秒(s)。 | 实数（常量） |  |
| Ts | s | 伺服机构时间常数，单位为秒(s) | 实数（常量） |  |
| T0 | s | 对于汽轮机， T0 为蒸汽容积时间常数，对于水轮机， T0=1/2Tw | 实数（常量） |  |
| Tw | s | 水锤效应时间常数，若无水锤效应，TW=0 | 实数（常量） |  |
| Trh | s | 汽轮机中间过热时间常数，单位为秒(s)。 | 实数（常量） |  |
| KmH |  | 发电机额定功 | 实数（常量） |  |



## 端口列表

| 端口名 | 描述 | 类型 | 数据维数 |
| ------ | ---- |:----:|:--------:|
| Pm0 |  | 输入 | 1 x 1 |
| wref |  | 输入 | 1 x 1 |
| w |  | 输入 | 1 x 1 |
| L2N |  | 输入 | 1 x 1 |
| Pm |  | 输出 | 1 x 1 |



