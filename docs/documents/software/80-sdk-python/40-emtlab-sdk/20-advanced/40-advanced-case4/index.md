---
title: 拓扑信息获取及解析
description: EMTLab JSON 拓扑文件的获取及解析

tags:
- sdk

---

## 功能介绍

使用 EMTLab SDK 获取仿真模型项目的 JSON 拓扑文件，并进行解析。

## 使用说明

### 用到的 API

模型类：[`Class: Model`](../../../70-api/10-model/index.md#class-model)

+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `model.revision.hash` |   获取当前版本项目的 hash    | 
    | `model.fetchTopology()` |   获取项目拓扑实例    |


拓扑类：[`Class: ModelTopology`](../../../70-api/10-model/index.md#class-modeltopology)

+ 静态方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `ModelTopology.fetch(hash, implementType, config, maximumDepth=None)`                |  通过项目 hash,获取项目拓扑实例  | 
    | `ModelTopology.dump(topology, filePath, indent=None)`                |  保存拓扑到本地文件（JSON 格式）  | 


+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `modelTopology.components` |   拓扑解析，摊平后的拓扑元件，参数和引脚不再保留表达式的形式，如果元件为拓扑实现，并有读取权限时将被展开    | 
    | `modelTopology.mappings` |   拓扑分析后的一些映射数据    | 

版本类：[`Class: ModelRevision`](../../../70-api/10-model/index.md#class-modelrevision)

+ 静态方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `ModelRevision.create(revision, parentHash=None)`                |  创建一个新版本, 返回当前版本 hash  | 

+ 实例方法：
    | 方法     | 功能 | 
    | ---------------- | :-----------: | 
    | `modelRevision.fetchTopology(implementType, config, maximumDepth)` |  通过项目 hash，获取项目拓扑实例    | 


### 调用方式

#### 获取项目拓扑实例

获取项目拓扑实例的方式有以下三种

1. 通过模型类获取
   
 + 使用`model.fetch`方法，获取项目实例
 + 使用`model.fetchTopology()`方法，获取项目拓扑实例


2. 通过拓扑类获取
   
 + 使用`model.fetch`方法，获取项目实例
 + 使用`model.revision.hash`方法，获取当前版本项目的 hash
 + 使用`ModelTopology.fetch(hash, implementType, config, maximumDepth=None)`获取项目拓扑实例
  

3. 通过版本类获取
   
 + 使用`model.fetch`方法，获取项目实例
 + 使用`model.revision.hash`方法，获取当前版本项目的 hash
 + 使用`ModelRevision.create(revision, parentHash=None)`基于当前项目的 hash 创建一个新版本
 + 使用`modelRevision.fetchTopology(implementType, config, maximumDepth)`获取项目拓扑实例


#### 拓扑实例解析

 + 使用`modelTopology.components`方法获取项目摊平后的拓扑元件的参数和引脚信息
 + 使用`modelTopology.mappings`方法得到拓扑分析后的一些映射数据

#### 拓扑JSON文件获取

 + 使用`ModelTopology.dump(topology, filePath, indent=None)`将拓扑实例保存为本地 JSON 文件
  

## 案例介绍

以[IEEE-3机9节点项目](../../../../20-emtlab/30-quick-start/10-start-from-template/index.md)为例，通过三个完整的案例来介绍如何基于上述 API 编写 Python 脚本获取项目拓扑实例并进行解析。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="通过模型类获取拓扑实例进行解析">

```python title="获取IEEE 3机9节点项目实例" showLineNumbers

import os
import cloudpss   

if __name__ == '__main__':
    os.environ['CLOUDPSS_API_URL'] = 'http://orange.local.cloudpss.net/'
    cloudpss.setToken('{token}')  
    # 获取IEEE 3机9节点项目实例
    model =  cloudpss.Model.fetch('model/Maxwell/IEEE')
    
```

</TabItem>
<TabItem value="py" label="通过拓扑类获取拓扑实例进行解析">

```python title="获取IEEE 3机9节点项目实例" showLineNumbers

import os
import cloudpss   

if __name__ == '__main__':
    os.environ['CLOUDPSS_API_URL'] = 'http://orange.local.cloudpss.net/'
    cloudpss.setToken('{token}')  
    # 获取IEEE 3机9节点项目实例
    model =  cloudpss.Model.fetch('model/Maxwell/IEEE')
    
```

</TabItem>
<TabItem value="java" label="通过版本类获取拓扑实例进行解析">

```python title="获取IEEE 3机9节点项目实例" showLineNumbers

import os
import cloudpss   

if __name__ == '__main__':
    os.environ['CLOUDPSS_API_URL'] = 'http://orange.local.cloudpss.net/'
    cloudpss.setToken('{token}')  
    # 获取IEEE 3机9节点项目实例
    model =  cloudpss.Model.fetch('model/Maxwell/IEEE')
    
```

</TabItem>
</Tabs>

### 代码解析






### 结果展示

## 调试技巧

## 常见问题

## 完整代码