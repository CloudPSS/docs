---
title: Module Function
type: features
category: 1000
author: songyk
author_email: songyankan@cloudpss.net
order: 600
---

CloudPSS provides module function on the basis of subgraph function. It can further encapsulate the subgraph into common modules, which can be used in other simulation examples.

## Create Module

The module is directly created by the `Subgraph`, so the subgraph needs to be created first. This section introduces a three-phase asymmetric voltage source module as an example.

1. Build the three-phase asymmetric voltage source circuit as follows (pay attention to modify the phase number of the voltage source).
   ![三相不对称电压源电路](Module/origincircuit.png 'Circuit to be packaged: three phase asymmetrical voltage source circuit')

2. Select the part to be encapsulated as subgraph/module, right-click and select `Create Subgraph`.
   ![创建子图](Module/createsubgraph.png 'Right click to select and create a subgraph')

3. In the pop-up dialog box, click `OK` to enter the subgraph customization interface.
   ![确认自定义](Module/subgraphconfig1.png 'Confirm to enter the information window of self defined subgraph')

4. In the interface of `Subgraph Customization`, set the pin position and pin name (description) as follows.
   ![自定义子图信息窗口](Module/subgraphconfig2.png "Information window of self defined subgraph" =x350)

5. Click `New` to create a subgraph. Its icon is as follows.
   ![子图图标](Module/subgraphicon.png 'Subgraph icon')

6. Right click to select the subgraph and click `Save as Module` to open the `Module Configuration` interface.
   ![保存成模块](Module/saveasmodule.png 'Saving as module')

7. Click `Select the module icon`, upload the module icon (the icon displayed in the model library on the left), set the module name, module symbol, whether to publish, description, module parameters and other information.
   ![模块配置](Module/moduleconfig.png "Module configuration" =x400)

   {% pullquote tip %}

   - It is recommended to select a **square** image as the module icon.
   - After ticking `Whether to publish or not`, the module is visible to all users (enter the `Personal Homepage` of the module creator, this module can be found in `My Module`).
   - The `parameters` on the right are all `global parameters` used in the module.
     {% endpullquote %}

8. Click `Save` and a message will pop up indicating that the module has been saved successfully. After refreshing the workbench, the module will be displayed in the left `Module Library`->`Module`.
   ![模块保存成功](Module/savemodulesuccess.png 'Module saved successfully')
   ![模块列表](Module/ModuleList.png 'Module appears in the list after saving successfully')

   {% pullquote tip %}
   The module name is the unique identifier of the module and cannot be duplicate. If the save is not successful, please change the module name and try again.
   {% endpullquote %}

## View Module

Drag the created module into workspace and double-click the module icon to view the internal topology details of the module.

![查看模块](Module/moduleinner.png "Double click to view the internal details of the module" =x400)

Compared with the original subgraph, it can be seen that the two structures are identical.

![查看子图](Module/subgraph.png 'Internal details of subgraph')

## Test Module

The correctness of the result is tested by building a comparison example of the original circuit and the module.

![模块测试电路](Module/compare.png 'Module test circuit topology')

![模块与子图仿真结果对比](Module/compareresult.png 'Comparison of simulation results between modules and subgraphs')

It can be seen that the simulation results of the module are consistent with those of the original circuit.

## Delete Module

Users can delete the existing modules at `Personal Homepage`-> `Cloud Space`->`My Module`.

![我的模块](Module/moduleindex.png "My module folder" =x400)

![删除模块](Module/moduledelete.png "Delete a module" =x400)

{% pullquote tip %}
After the module is deleted, all simulation cases using the module will be affected! Please operate carefully.
{% endpullquote %}

## Modify Module

Users can open the encapsulated module at the `Personal Homepage`-> `Cloud Space`->`My Module`, view its internal details and modify them.

CloudPSS does not support module coverage. After the module is modified, only new modules can be created. If you want to overwrite the existing module after modification, delete the original module before saving, and fill in the information completely consistent with the previous module when saving the new module.
