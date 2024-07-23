---
title: 拓扑文件获取及解析
description: EMTLab JSON 拓扑文件的获取及解析

tags:
- sdk

---

## 功能介绍

## 使用说明

### 用到的 API

模型类：[`Class: Model`](../../../70-api/10-model/index.md#class-model)

+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `fetchTopology()` |   获取项目拓扑    | 


拓扑类：[`Class: ModelTopology`](../../../70-api/10-model/index.md#class-modeltopology)

+ 静态方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `ModelTopology.dump(topology, filePath, indent=None)`                |  保存拓扑到本地文件（JSON 格式）  | 

### 调用方式

+ 使用`model.fetchTopology`方法，获取项目拓扑实例进行解析
+ 使用`ModelTopology.dump`方法，将拓扑实例保存为到本地 JSON 文件

## 案例介绍

通过一个完整的案例来展示如何基于上述 API 编写 Python 脚本获取项目拓扑实例并进行解析。

### 代码解析

以[IEEE-3机9节点项目](../../../../20-emtlab/30-quick-start/10-start-from-template/index.md)为例，使用`Model.fetch`方法获取该项目实例。

```python title="获取IEEE 3机9节点项目实例" showLineNumbers

import os
import cloudpss   

if __name__ == '__main__':
    os.environ['CLOUDPSS_API_URL'] = 'http://orange.local.cloudpss.net/'
    cloudpss.setToken('{token}')  
    # 获取IEEE 3机9节点项目实例
    model =  cloudpss.Model.fetch('model/Maxwell/IEEE')
    
```
调用`model.fetchTopology`方法，获取项目拓扑实例，调用该方法时需要提供如下参数：

| 参数     | 含义 |  注意事项 |
| ---------------- | :-----------: |  :-----------: |
| `definition` |   元件的RID    |     每一类元件的 RID 是唯一且固定的，可在 SimStudio 工作台的**元件信息**中获取     | 
| `label`                |  元件的标签  |  可置空，不可缺省    |
| `args`                |       元件的参数       |   可在 SimStudio 工作台的**元件参数卡**中获取，只需要列写需要修改值的参数，其他参数为默认值    |
| `pins`         |      元件的引脚       |  可以通过输入相同的引脚名来指定元件之间的连接关系    |
| `canvas`         |      元件所在的图纸  ID       |  可缺省，默认为 `'canvas_0'`  |
| `position`         |      元件的位置坐标       |  可缺省，默认为 `{'x': 0, 'y': 0}`  |
| `size`         |      元件的大小       |  可缺省，但默认为`{'width': 1, 'height': 1}`，可在 SimStudio 工作台的**元件格式卡**中获取元件的默认大小数据进行配置  |




### 结果展示

## 调试技巧

## 常见问题

## 完整代码