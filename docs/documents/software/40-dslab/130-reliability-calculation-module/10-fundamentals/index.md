---
title: 基本原理
description: DSLab 源网荷储协同仿真平台-供电可靠性计算基本原理
sidebar_position: 10
# draft: true
tags:
- dslab
- function
---

本节主要介绍 DSLab 平台供电可靠性计算的基本原理。

## 功能定义

DSLab 平台提供基于解析法的供电可靠性计算功能。

## 功能说明

基于解析法的可靠性指标计算的基本原理为建立故障影响范围及后果，确定各设备故障导致的负荷停电范围及时间，从而评估系统保持安全稳定供电的能力。

### 解析法

对于复杂配电系统，需要结合系统拓扑、供电路径及矩阵运算进行综合分析。对拓扑图 $G=(V,E)$，忽略电源节点并建立表明节点与支路拓扑关系的关联矩阵 $N_B$，$N_B$ 中的元素 $n_{jk}$ 的计算公式如下式所示：

$$
n_{jk} =\begin{cases} 
+1 & \text{branch } k \text{ is directed towards } j \\
-1 & \text{branch } k \text{ leaves } j \\
0 & \text{branch } k \text{ is not associated with } j 
\end{cases}
$$

对节点-支路关联矩阵 $N_B$ 求逆，可以得到表示电源对各节点的供电路径矩阵 $B_N$。

$$
B_N = N_B^{-1}
$$

式中，如果元素 $b_{kj}$ 为 1 表示电源需要通过支路 $k$ 给节点 $j$ 供电，并且支路 $k$ 是节点 $j$ 的上游支路；如果 $b_{kj}$ 为 0，表示支路 $k$ 是节点 $j$ 的下游支路。

如果电源需要通过支路 $k$ 给节点 $j$ 供电，那么当支路 $k$ 发生故障时，电源到节点 $j$ 的供电路径被中断，负荷 $j$ 失去电源供给，必然停电，负荷 $j$ 的停电时间等于支路 $k$ 的维修时间，因此通过 $N_B$ 可以判断支路发生故障影响下下游负荷的影响范围及停电时间。

支路故障不仅会向下游传播，导致下游负荷节点停电，同时，故障也会向上游节点传播，如果上游节点有保护装置，并且保护装置安全可靠动作，那么故障可以被隔离开，上游负荷节点不会受到影响。如果上游节点保护装置存在失效概率，那么需要判断保护设备失效时下游支路故障对上游负荷节点影响。忽略上游节点拓扑结构及功率分布，构建 $B_{NQ1}$ 矩阵初步判断各支路故障并且保护设备失效情况下，上游节点故障的概率。

$$
B_{NQ1(i,j)} =\begin{cases} 
q_i & B_{NQ(i,j)} = 0, \text{branch is protected} \\
1 & B_{NQ(i,j)} = 0, \text{branch is not protected} 
\end{cases} 
$$

在 $B_{NQ1}$ 的基础上，将上游节点故障传播路径等效为串联网络，并综合计算支路故障对上游负荷节点影响。下游支路 $m$ 故障，上游节点 $n$ 发生故障的概率可以通过下式计算：

$$
B_{NQ(m,j)} = \prod_{m \in P_{\text{diff}}} q_m
$$

$$
P_{\text{diff}} = \{q_m \in P_{m,s} \land q_m \notin P_{j,s}\}
$$

式中，$P_{m,s}$ 表示支路 $m$ 到电源节点的最短供电路径。$P_{j,s}$ 表示负荷节点 $j$ 到电源节点的最短供电路径。$P_{\text{diff}}$ 表示支路 $m$ 到电源节点最短路径中，排除节点 $n$ 到电源节点路径的保护设备故障率乘积。

利用上述方法求得的 $B_{NQ2}$ 的部分元素如下：

$$
B_{NQ2(i,j=7)} = \begin{bmatrix}
1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 \\
q_3 & q_3 & 1 & q_3 & q_3 & 1 & q_3 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 \\
q_5 & q_5 & q_5 & q_5 & 1 & q_5 & q_5 \\
q_3 q_6 & q_3 q_6 & q_6 & q_3 q_6 & q_3 q_6 & 1 & q_3 q_6 \\
q_7 & q_7 & q_7 & q_7 & q_7 & q_7 & 1
\end{bmatrix} 
$$

在得到 $B_{NQ2}$ 后，可以通过式（4-16）计算负荷故障率 $\lambda_L$：

$$
\lambda_L = B_{NQ2}^T \cdot \lambda_B
$$

式中 $\lambda_B$ 为支路的故障率。

将 $B_{NQ2}$ 中元素为 1 的值修改为对应支路的修复时间，将其余元素修改为对应保护设备的开关时间或修复时间，可以得到 $B_{\text{NTini}}$。

通过下式可以计算负荷的年平均停电时间 $U_L$：

$$
U_L = [B_{\text{NTini}} \odot B_{NQ2}]^T \cdot \lambda_B
$$

式中，$\odot$ 表示矩阵对应位置相乘。
