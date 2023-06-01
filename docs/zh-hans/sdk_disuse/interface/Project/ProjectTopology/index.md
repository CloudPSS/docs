---
title: ProjectTopology类
type: examples
author: pcp
category: 101
order: 103
---


## ==class cloudpss.project.topology.ProjectTopology==
:::info
项目`拓扑`类，通过该类的静态方法fetch获取一个拓扑实例
:::
**实例变量说明:**

**components:** 摊平后的拓扑元件，参数和引脚不再保留表达式的形式，如果元件为拓扑实现，并有读取权限时将被展开

**mappings:** 拓扑分析后的一些映射数据

### static dump(topology, filePath, indent=None)
:::info
以JSON格式`保存`数据到指定文件
:::
**Params:** topology 拓扑实例

**Params:** file 文件路径

**Params:** indent json 格式缩进

### static fetch(hash, implementType, config, maximumDepth=None)
:::info
`获取`拓扑
:::
**Params:** hash

**Params：** implementType 实现类型

**Params：** config 参数方案

**Params：** maximumDepth 最大递归深度，用于自定义项目中使用 diagram 实现元件展开情况

**: return: 拓扑实例** 拓扑实例
```python
data = ProjectTopology.fetch('','emtp',{})
```
### toJSON()
:::info
将类`转换`为 dict 数据
:::
