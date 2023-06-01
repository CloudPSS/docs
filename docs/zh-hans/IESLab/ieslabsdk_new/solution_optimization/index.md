---
title: 方案优选模块相关接口
order: 30
---

## ==方案优选模块对应有两个 Python 类，第一种类实例与具体的算例（ `Model` 类的实例）相绑定，第二种类实例与计算结果（ `Result` 类的实例）相绑定。本教程将介绍如何使用各个接口方法。==


## 1 `Model` 类实例
###  1.0 准备工作
#### 描述
在进行对各个接口的具体操作前，您需要先获取指定的项目。

```python
import os
import cloudpss

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    ies_plan_project = cloudpss.IESLabPlan.fetch('219')

```


### 1.1 GetOptimizationInfo()
#### 描述
获取方案优化模块的优化目标设置信息。

#### 语法
获取当前算例的优化目标设置信息：
```python
GetOptimizationInfo()
```

  
#### 返回值
- enum 类型，代表经济性优化和环保性优化的类型

#### 实例
以下实例展示了 GetOptimizationInfo 的使用方法：
```python
    # 获取优化目标设置信息
    optimization_info = ies_plan_project.planModel.GetOptimizationInfo()
    print("优化目标设置信息:", optimization_info)
```
执行以上代码，输出结果如下：
```json
优化目标设置信息: OptimizationMode.经济性

```


### 1.2 SetOptimizationInfo()
#### 描述
设置方案优化模块的优化目标。

#### 语法
设置当前算例的优化目标：
```python
SetOptimizationInfo(optType)
```
参数说明:
- `optType`： enum 类型，代表经济性优化和环保性优化的类型
  
#### 返回值
- bool 类型，代表参数设置是否成功

#### 实例
以下实例展示了 SetOptimizationInfo 的使用方法：
```python
    # 设置优化目标
    opt_type = ies_plan_project.planModel.SetOptimizationInfo(cloudpss.ieslab.OptimizationMode.经济性)  
    if opt_type:
        print("优化目标设置成功")
    else:
        print("优化目标设置失败")

```
执行以上代码，输出结果如下：
```json
优化目标设置成功

```




## 2 `PlanResult`类实例
目前该模块 `SimStudio` 中的计算方案为典型日生成，对该计算方案的 `result` 类新增的接口如下所示：


### 2.1 GetPlanNum()
#### 描述
获取优化方案的数量。
#### 语法
获取当前 `result` 实例对应的优化方案数量:
```python
GetTypicalDayInfo(dayID)
```
#### 返回值
-  int 类型，代表优化方案的数量


### 2.2 GetPlanInfo()
#### 描述
获取指定优化方案的基础信息。
#### 语法
获取 `planID` 对应的优化方案的基础信息:
```python
GetPlanInfo(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
#### 返回值
- dict类型，代表该方案的基础信息，包括投资、运行成本、负荷总量等信息


### 2.3 GetPlanConfiguration()
#### 描述
获取指定优化方案的配置信息。
#### 语法
获取 `planID` 对应的优化方案的配置信息:
```python
GetPlanConfiguration(planID)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
#### 返回值
- dict 类型，代表该方案的配置信息，包括每种设备的选型配置、容量配置、成本等相关信息


### 2.4 GetComponentResult()
#### 描述
获取指定优化方案下特定元件的运行信息。
#### 语法
获取 `planID` 对应的优化方案下 `componentID` 在典型日 `typicalDayName` 下的运行信息:
```python
GetComponentResult(planID, componentID, typicalDayName)
```
参数说明:
- `planID`： int类型，表示优化方案的 `ID` ，数值位于 `0~优化方案数量` 之间
- `componentID`： str类型，表示元件的标识符
- `typicalDayName`： str类型，代表典型日的名称
#### 返回值
- dict类型，代表该元件在指定典型日下的运行信息




### 2.5 实例
#### 2.5.1 实例代码
```python
import os
import cloudpss
import time

if __name__ == '__main__':
    # 申请并设置自己账户的token
    cloudpss.setToken('{token}')  

    # 将'https://cloudpss.net/'替换为用户当前使用的平台网址地址
    os.environ['CLOUDPSS_API_URL'] = 'https://cloudpss.net/'

    # 规划设计典型场景生成测试——获取指定 simuid 的项目
    iesplanProject = cloudpss.IESLabPlan.fetch('220')


    # 启动计算
    runner = ies_plan_project.iesLabPlanRun()
    last_plan_num = 0
    while not runner.status():
        # print('running', flush=True)
        time.sleep(1)
        plan_result = runner.result
        plan_num = plan_result.GetPlanNum()
        if plan_num > last_plan_num:
            for plan_id in range(last_plan_num, plan_num):
                print("优化方案", plan_id + 1)
                plan_info = plan_result.GetPlanInfo(plan_id)
                print("基础信息:", plan_info)
                plan_config = plan_result.GetPlanConfiguration(plan_id)
                print("配置信息:", plan_config)
                plan_config = plan_result.GetComponentResult(plan_id, "/component_absorption_chiller_1", "1月典型日1")
                print("运行信息:", plan_config)
                print("=" * 30)
            last_plan_num = plan_num
    print('计算完成')

```


#### 2.5.2 运行结果
执行以上代码，输出结果如下：
```python

优化方案 1
基础信息: {'方案名称': '方案1', '综合成本（万元）': 3062.541767940324, '设备投资费用（万元）': 11422.5, '设备年维护费用（万元）': 47.535512358556396, '年销售收入（万元）': 9330.964486970926, '年运营支出（万元）': 2301.1000055817676, '年CO2排放（吨）': 6179.243609112638, '年电负荷（kWh）': 94903561.61101785, '年热负荷（kWh）': 5416145.413115531, '年冷负荷（kWh）': 36871461.70857195}
配置信息: {'/component_absorption_chiller_1': {'CO2Discharge': 0.0, 'compManufacturer': 'AC', 'compModel': '1', 'compName': '/component_absorption_chiller_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.09999884259259259, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '吸收式制冷机1'}, '/component_battery_1': {'CO2Discharge': 0.0, 'compManufacturer': '阳光电源', 'compModel': 'E1L-M100', 'compName': '/component_battery_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 16.38937015288889, 'deviceNum': 159, 'devicePurchaseCost': 1272.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '蓄电池1'}, '/component_bus_node_1': {'CO2Discharge': None, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_bus_node_1', 'coolSaleIncome': None, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': None, 'heatSaleIncome': None, 'powerExpense': None, 'powerSaleIncome': None, 'usrDefinedName': '母线元件1'}, '/component_bus_node_2': {'CO2Discharge': None, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_bus_node_2', 'coolSaleIncome': None, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': None, 'heatSaleIncome': None, 'powerExpense': None, 'powerSaleIncome': None, 'usrDefinedName': '母线元件1'}, '/component_bus_node_4': {'CO2Discharge': None, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_bus_node_4', 'coolSaleIncome': None, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': None, 'heatSaleIncome': None, 'powerExpense': None, 'powerSaleIncome': None, 'usrDefinedName': '母线元件2'}, '/component_bus_node_5': {'CO2Discharge': None, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_bus_node_5', 'coolSaleIncome': None, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': None, 'heatSaleIncome': None, 'powerExpense': None, 'powerSaleIncome': None, 'usrDefinedName': '母线元件2'}, '/component_centrifugal_pump_1': {'CO2Discharge': 0.0, 'compManufacturer': 'Pump', 'compModel': '1', 'compName': '/component_centrifugal_pump_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.09999884259259259, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '离心泵1'}, '/component_centrifugal_pump_2': {'CO2Discharge': 0.0, 'compManufacturer': 'Pump', 'compModel': '1', 'compName': '/component_centrifugal_pump_2', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.09999884259259259, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '离心泵1'}, '/component_electric_conditioner_1': {'CO2Discharge': 0.0, 'compManufacturer': 'Refrigerator', 'compModel': '1', 'compName': '/component_electric_conditioner_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 5.736754500303282, 'deviceNum': 27, 'devicePurchaseCost': 270.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '电压缩制冷机1'}, '/component_electric_load_2': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_2', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 81.02918888888892, 'usrDefinedName': '电负荷1'}, '/component_electric_load_3': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_3', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 2199.9979777777776, 'usrDefinedName': '电负荷1'}, '/component_electric_load_4': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_4', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 345.6394397777778, 'usrDefinedName': '电负荷1'}, '/component_electric_load_5': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_5', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 62.424185222222256, 'usrDefinedName': '电负荷1'}, '/component_electric_load_6': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_6', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 1.9618190356244591, 'usrDefinedName': '电负荷2'}, '/component_electric_load_7': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_7', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 236.69767929816234, 'usrDefinedName': '电负荷2'}, '/component_electric_load_8': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_8', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 315.2120890316082, 'usrDefinedName': '电负荷2'}, '/component_electric_load_9': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_electric_load_9', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 468.51983759198697, 'usrDefinedName': '电负荷2'}, '/component_external_power_source_1': {'CO2Discharge': 6179.243609112638, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_external_power_source_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 2301.1000055817676, 'powerSaleIncome': 0.0, 'usrDefinedName': '外部电源1'}, '/component_heat_pump_1': {'CO2Discharge': 0.0, 'compManufacturer': 'Gree', 'compModel': '1', 'compName': '/component_heat_pump_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 4.075984181587169, 'deviceNum': 31, 'devicePurchaseCost': 310.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '热泵1'}, '/component_ies_flex_electric_load_1': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_ies_flex_electric_load_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 1255.5641827996533, 'usrDefinedName': '柔性电负荷1'}, '/component_ies_flex_electric_load_2': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_ies_flex_electric_load_2', 'coolSaleIncome': 0.0, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 980.9095178122292, 'usrDefinedName': '柔性电负荷2'}, '/component_mmc_1': {'CO2Discharge': 0.0, 'compManufacturer': 'MMC', 'compModel': '1', 'compName': '/component_mmc_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.09999884259259259, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '模块化多电平变流器1'}, '/component_photovoltaic_1': {'CO2Discharge': 0.0, 'compManufacturer': 'PV', 'compModel': '1', 'compName': '/component_photovoltaic_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.55877418706692, 'deviceNum': 10, 'devicePurchaseCost': 0.5, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '光伏发电系统1'}, '/component_thermal_load_1': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_1', 'coolSaleIncome': 55.78974085884052, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 266.24418211853657, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_10': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_10', 'coolSaleIncome': 1501.4226222222221, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_11': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_11', 'coolSaleIncome': 700.7918888888889, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_12': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_12', 'coolSaleIncome': 44.63179268707228, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 1.1525116860866547e-13, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_4': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_4', 'coolSaleIncome': 100.09992015571613, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 51.96742500971018, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_5': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_5', 'coolSaleIncome': 50.835700565919005, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 40.723321226570164, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_6': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_6', 'coolSaleIncome': 17.704732246440077, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 15.781929381828993, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_7': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_7', 'coolSaleIncome': 11.157948171768144, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 53.24883642370763, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_8': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_8', 'coolSaleIncome': 298.9153397777777, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_thermal_load_9': {'CO2Discharge': 0.0, 'compManufacturer': '-', 'compModel': '-', 'compName': '/component_thermal_load_9', 'coolSaleIncome': 168.367251111111, 'deviceMaintainCost': '-', 'deviceNum': '-', 'devicePurchaseCost': '-', 'fuelExpense': 0.0, 'heatSaleIncome': 5.325938888888894, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '采暖制冷负荷'}, '/component_transfer_line_1': {'CO2Discharge': 0.0, 'compManufacturer': 'Line', 'compModel': '/', 'compName': '/component_transfer_line_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.9999884259259262, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '传输线1'}, '/component_transfer_line_2': {'CO2Discharge': 0.0, 'compManufacturer': 'Line', 'compModel': '/', 'compName': '/component_transfer_line_2', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.9999884259259262, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '传输线1'}, '/component_transformer_1': {'CO2Discharge': 0.0, 'compManufacturer': 'TR', 'compModel': '1', 'compName': '/component_transformer_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 0.0, 'deviceNum': 1, 'devicePurchaseCost': 10.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '交流变压器1'}, '/component_wind_turbine_1': {'CO2Discharge': 0.0, 'compManufacturer': '金风', 'compModel': 'GW140-3MW', 'compName': '/component_wind_turbine_1', 'coolSaleIncome': 0.0, 'deviceMaintainCost': 18.374657114487917, 'deviceNum': 10, 'devicePurchaseCost': 9500.0, 'fuelExpense': 0.0, 'heatSaleIncome': 0.0, 'powerExpense': 0.0, 'powerSaleIncome': 0.0, 'usrDefinedName': '风力发电机1'}, 'systemData': {'CO2Discharge': 6179.243609112638, 'compManufacturer': '-', 'compModel': '-', 'compName': 'systemData', 'coolSaleIncome': 2949.716936685756, 'deviceMaintainCost': 47.535512358556396, 'deviceNum': '-', 'devicePurchaseCost': 11422.5, 'fuelExpense': 0.0, 'heatSaleIncome': 433.29163304924236, 'powerExpense': 2301.1000055817676, 'powerSaleIncome': 5947.95591723593}}
运行信息: {'data': {'groupDesc': [{'desc': '质量流量(kg/s)', 'keyset': ['热水质量流量', '冷水质量流量']}, {'desc': '压力(MPa)', 'keyset': ['热水进口压力', '热水出口压力', '冷水进口压力', '冷水出口压力']}, {'desc': '温度(℃)', 'keyset': ['热水进口温度', '热水出口温度', '冷水进口温度', '冷水出口温度']}, {'desc': '能量(kW)', 'keyset': ['供冷量', '热负荷', '有功负荷', '无功负荷']}, {'desc': '相角(deg)', 'keyset': ['相角']}, {'desc': '电压(kV)', 'keyset': ['电压']}, {'desc': '运行策略', 'keyset': ['关闭', '挡位1', '挡位2', '挡位3', '挡位4', '挡位5', '挡位6', '挡位7', '挡位8', '挡位9']}], '供冷量': [['00:00', 399.9999999999927], ['01:00', 180.0], ['02:00', 280.0], ['03:00', 360.0], ['04:00', 399.99999999999636], ['05:00', 399.99999999999636], ['06:00', 400.0], ['07:00', 400.0], ['08:00', 400.0], ['09:00', 399.99999999999636], ['10:00', 400.0], ['11:00', 400.00000000000364], ['12:00', 400.0], ['13:00', 400.0], ['14:00', 400.0], ['15:00', 399.99999999999636], ['16:00', 400.0], ['17:00', 400.00000000000364], ['18:00', 399.99999999999636], ['19:00', 400.0], ['20:00', 400.00000000000364], ['21:00', 400.00000000000364], ['22:00', 399.99999999999636], ['23:00', 400.0]], '关闭': [['00:00', 0.0], ['01:00', 0.0], ['02:00', 0.0], ['03:00', 0.0], ['04:00', 0.0], ['05:00', 0.0], ['06:00', 0.0], ['07:00', 0.0], ['08:00', 0.0], ['09:00', 0.0], ['10:00', 0.0], ['11:00', 0.0], ['12:00', 0.0], ['13:00', 0.0], ['14:00', 0.0], ['15:00', 0.0], ['16:00', 0.0], ['17:00', 0.0], ['18:00', 0.0], ['19:00', 0.0], ['20:00', 0.0], ['21:00', 0.0], ['22:00', 0.0], ['23:00', 0.0]], '冷水出口压力': [['00:00', 0.19393237165561383], ['01:00', 0.19283060470593655], ['02:00', 0.1942605496627112], ['03:00', 0.19384463187991288], ['04:00', 0.19319212445540954], ['05:00', 0.19441316518432472], ['06:00', 0.1930417683271617], ['07:00', 0.19515522908921443], ['08:00', 0.19348287005257928], ['09:00', 0.194443520179022], ['10:00', 0.1955498462617408], ['11:00', 0.19483303578478217], ['12:00', 0.1951610243883682], ['13:00', 0.19430953904902123], ['14:00', 0.19498032783492394], ['15:00', 0.19265065007630583], ['16:00', 0.19477966770309527], ['17:00', 0.19506803062650732], ['18:00', 0.19446776382846973], ['19:00', 0.19414979904148227], ['20:00', 0.1951378297429831], ['21:00', 0.19476778347330861], ['22:00', 0.1943644806368021], ['23:00', 0.19471419348691618]], '冷水出口温度': [['00:00', 14.758445055898656], ['01:00', 14.964404864289078], ['02:00', 15.00005879096767], ['03:00', 14.811109163019648], ['04:00', 14.667634440575707], ['05:00', 14.824770816288925], ['06:00', 14.653100715159907], ['07:00', 14.9336147052647], ['08:00', 14.695358720133896], ['09:00', 14.820297834287855], ['10:00', 14.991626974758503], ['11:00', 14.874640323917882], ['12:00', 14.920434586938317], ['13:00', 14.793556967461711], ['14:00', 14.891752066986061], ['15:00', 14.592240563481674], ['16:00', 14.858310401177263], ['17:00', 14.902738394125224], ['18:00', 14.81292470877859], ['19:00', 14.769252927784947], ['20:00', 14.916695020175956], ['21:00', 14.859284844357292], ['22:00', 14.801148733812287], ['23:00', 14.85816441846111]], '冷水质量流量': [['00:00', 294.6657886745931], ['01:00', 312.7324254129778], ['02:00', 289.0661878141584], ['03:00', 296.14492852451895], ['04:00', 306.92151885969673], ['05:00', 286.4248666535753], ['06:00', 309.35153432743243], ['07:00', 273.2182608506626], ['08:00', 302.16714077064745], ['09:00', 285.8966024214592], ['10:00', 265.92821444745505], ['11:00', 279.0291674039439], ['12:00', 273.11260800423935], ['13:00', 288.22096504277164], ['14:00', 276.38784624336137], ['15:00', 315.58505226640716], ['16:00', 279.9800430217535], ['17:00', 274.80305354701204], ['18:00', 285.4739910357659], ['19:00', 290.9679390497777], ['20:00', 273.53521938993225], ['21:00', 280.1913487146011], ['22:00', 287.2700894249621], ['23:00', 281.14222433241]], '冷水进口压力': [['00:00', 0.20265], ['01:00', 0.20265], ['02:00', 0.20265], ['03:00', 0.20265], ['04:00', 0.20265], ['05:00', 0.20265], ['06:00', 0.20265], ['07:00', 0.20265], ['08:00', 0.20265], ['09:00', 0.20265], ['10:00', 0.20265], ['11:00', 0.20265], ['12:00', 0.20265], ['13:00', 0.20265], ['14:00', 0.20265], ['15:00', 0.20265], ['16:00', 0.20265], ['17:00', 0.20265], ['18:00', 0.20265], ['19:00', 0.20265], ['20:00', 0.20265], ['21:00', 0.20265], ['22:00', 0.20265], ['23:00', 0.20265]], '冷水进口温度': [['00:00', 15.083043360078813], ['01:00', 15.10203564187736], ['02:00', 15.231679137916107], ['03:00', 15.101788507765498], ['04:00', 14.979271160148327], ['05:00', 15.158708356074413], ['06:00', 14.962289468697632], ['07:00', 15.283693850801615], ['08:00', 15.011898814664828], ['09:00', 15.15485240574331], ['10:00', 15.351303045620032], ['11:00', 15.217428915496251], ['12:00', 15.270649159610837], ['13:00', 15.125413518179624], ['14:00', 15.237816543422786], ['15:00', 14.895322140434626], ['16:00', 15.19993480508612], ['17:00', 15.25079862878823], ['18:00', 15.147974549769879], ['19:00', 15.09797648274445], ['20:00', 15.266368512010052], ['21:00', 15.200651612969086], ['22:00', 15.134103743138677], ['23:00', 15.198376620775454]], '挡位1': [['00:00', 0.0], ['01:00', 0.0], ['02:00', 0.0], ['03:00', 0.0], ['04:00', 0.0], ['05:00', 0.0], ['06:00', 0.0], ['07:00', 0.0], ['08:00', 0.0], ['09:00', 0.0], ['10:00', 0.0], ['11:00', 0.0], ['12:00', 0.0], ['13:00', 0.0], ['14:00', 0.0], ['15:00', 0.0], ['16:00', 0.0], ['17:00', 0.0], ['18:00', 0.0], ['19:00', 0.0], ['20:00', 0.0], ['21:00', 0.0], ['22:00', 0.0], ['23:00', 0.0]], '挡位2': [['00:00', 0.0], ['01:00', 1.0], ['02:00', 0.0], ['03:00', 0.0], ['04:00', 0.0], ['05:00', 0.0], ['06:00', 0.0], ['07:00', 0.0], ['08:00', 0.0], ['09:00', 0.0], ['10:00', 0.0], ['11:00', 0.0], ['12:00', 0.0], ['13:00', 0.0], ['14:00', 0.0], ['15:00', 0.0], ['16:00', 0.0], ['17:00', 0.0], ['18:00', 0.0], ['19:00', 0.0], ['20:00', 0.0], ['21:00', 0.0], ['22:00', 0.0], ['23:00', 0.0]], '挡位3': [['00:00', 0.0], ['01:00', 0.0], ['02:00', 1.0], ['03:00', 0.0], ['04:00', 0.0], ['05:00', 0.0], ['06:00', 0.0], ['07:00', 0.0], ['08:00', 0.0], ['09:00', 0.0], ['10:00', 0.0], ['11:00', 0.0], ['12:00', 0.0], ['13:00', 0.0], ['14:00', 0.0], ['15:00', 0.0], ['16:00', 0.0], ['17:00', 0.0], ['18:00', 0.0], ['19:00', 0.0], ['20:00', 0.0], ['21:00', 0.0], ['22:00', 0.0], ['23:00', 0.0]], '挡位4': [['00:00', 0.0], ['01:00', 0.0], ['02:00', 0.0], ['03:00', 1.0], ['04:00', 0.0], ['05:00', 0.0], ['06:00', 0.0], ['07:00', 0.0], ['08:00', 0.0], ['09:00', 0.0], ['10:00', 0.0], ['11:00', 0.0], ['12:00', 0.0], ['13:00', 0.0], ['14:00', 0.0], ['15:00', 0.0], ['16:00', 0.0], ['17:00', 0.0], ['18:00', 0.0], ['19:00', 0.0], ['20:00', 0.0], ['21:00', 0.0], ['22:00', 0.0], ['23:00', 0.0]], '挡位5': [['00:00', 1.0], ['01:00', 0.0], ['02:00', 0.0], ['03:00', 0.0], ['04:00', 1.0], ['05:00', 1.0], ['06:00', 1.0], ['07:00', 1.0], ['08:00', 1.0], ['09:00', 1.0], ['10:00', 1.0], ['11:00', 1.0], ['12:00', 1.0], ['13:00', 1.0], ['14:00', 1.0], ['15:00', 1.0], ['16:00', 1.0], ['17:00', 1.0], ['18:00', 1.0], ['19:00', 1.0], ['20:00', 1.0], ['21:00', 1.0], ['22:00', 1.0], ['23:00', 1.0]], '无功负荷': [['00:00', 0.5294104411797699], ['01:00', 0.44117401962145975], ['02:00', 0.5294098739563327], ['03:00', 0.5294102941217321], ['04:00', 0.5294104411797748], ['05:00', 0.5294104411797748], ['06:00', 0.5294104411797795], ['07:00', 0.5294104411797795], ['08:00', 0.5294104411797795], ['09:00', 0.5294104411797748], ['10:00', 0.5294104411797795], ['11:00', 0.5294104411797843], ['12:00', 0.5294104411797795], ['13:00', 0.5294104411797795], ['14:00', 0.5294104411797795], ['15:00', 0.5294104411797748], ['16:00', 0.5294104411797795], ['17:00', 0.5294104411797843], ['18:00', 0.5294104411797748], ['19:00', 0.5294104411797795], ['20:00', 0.5294104411797843], ['21:00', 0.5294104411797843], ['22:00', 0.5294104411797748], ['23:00', 0.5294104411797795]], '有功负荷': [['00:00', 2.9999925000186956], ['01:00', 2.4999861111882713], ['02:00', 2.999989285752551], ['03:00', 2.999991666689815], ['04:00', 2.999992500018723], ['05:00', 2.999992500018723], ['06:00', 2.99999250001875], ['07:00', 2.99999250001875], ['08:00', 2.99999250001875], ['09:00', 2.999992500018723], ['10:00', 2.99999250001875], ['11:00', 2.9999925000187773], ['12:00', 2.99999250001875], ['13:00', 2.99999250001875], ['14:00', 2.99999250001875], ['15:00', 2.999992500018723], ['16:00', 2.99999250001875], ['17:00', 2.9999925000187773], ['18:00', 2.999992500018723], ['19:00', 2.99999250001875], ['20:00', 2.9999925000187773], ['21:00', 2.9999925000187773], ['22:00', 2.999992500018723], ['23:00', 2.99999250001875]], '热水出口压力': [['00:00', 0.20265], ['01:00', 0.20265], ['02:00', 0.20265], ['03:00', 0.20265], ['04:00', 0.20265], ['05:00', 0.20265], ['06:00', 0.20265], ['07:00', 0.20265], ['08:00', 0.20265], ['09:00', 0.20265], ['10:00', 0.20265], ['11:00', 0.20265], ['12:00', 0.20265], ['13:00', 0.20265], ['14:00', 0.20265], ['15:00', 0.20265], ['16:00', 0.20265], ['17:00', 0.20265], ['18:00', 0.20265], ['19:00', 0.20265], ['20:00', 0.20265], ['21:00', 0.20265], ['22:00', 0.20265], ['23:00', 0.20265]], '热水出口温度': [['00:00', 9.077115188972677], ['01:00', 73.06491531175209], ['02:00', 72.2086484405553], ['03:00', 71.73044338859198], ['04:00', 71.7137949266935], ['05:00', 71.47863307342111], ['06:00', 9.239608696053395], ['07:00', 71.30842005492806], ['08:00', 9.162088902812883], ['09:00', 8.972126482647791], ['10:00', 71.20722060470595], ['11:00', 8.885298849694893], ['12:00', 71.30699197758034], ['13:00', 71.50057707552968], ['14:00', 71.35075468732578], ['15:00', 71.80400879211392], ['16:00', 8.897575193224458], ['17:00', 8.82970944330807], ['18:00', 71.46690387196305], ['19:00', 71.53361447423553], ['20:00', 71.31269766784264], ['21:00', 71.40029195401355], ['22:00', 71.48899384407694], ['23:00', 71.4124668403024]], '热水质量流量': [['00:00', 34.929519124990804], ['01:00', 37.07112822157444], ['02:00', 34.26574554534534], ['03:00', 35.10485554225602], ['04:00', 36.382306582321746], ['05:00', 33.95264480023303], ['06:00', 36.67035926782739], ['07:00', 32.38714107465893], ['08:00', 35.81872524111736], ['09:00', 33.89002465121109], ['10:00', 31.52298301814369], ['11:00', 33.075962713911], ['12:00', 32.374617044857075], ['13:00', 34.165553306911875], ['14:00', 32.7628619687967], ['15:00', 37.40927702629796], ['16:00', 33.188678982154045], ['17:00', 32.57500152172787], ['18:00', 33.83992853198981], ['19:00', 34.49117808182967], ['20:00', 32.42471316407375], ['21:00', 33.21372704176099], ['22:00', 34.0528370386707], ['23:00', 33.326443310004095]], '热水进口压力': [['00:00', 0.2027724966271524], ['01:00', 0.20278797821571204], ['02:00', 0.20276788520104122], ['03:00', 0.20277372951139178], ['04:00', 0.20278289828477095], ['05:00', 0.2027657407087653], ['06:00', 0.20278501102895485], ['07:00', 0.20275531352353904], ['08:00', 0.20277881284391414], ['09:00', 0.20276531417251936], ['10:00', 0.2027497685208455], ['11:00', 0.2027598408550018], ['12:00', 0.202755232090313], ['13:00', 0.20276719682177655], ['14:00', 0.20275777116601806], ['15:00', 0.20279050686620037], ['16:00', 0.20276059076194278], ['17:00', 0.20275653880146471], ['18:00', 0.2027649735104528], ['19:00', 0.20276944142447947], ['20:00', 0.20275555801219397], ['21:00', 0.202760757754387], ['22:00', 0.20276642480455723], ['23:00', 0.20276151077944415]], '热水进口温度': [['00:00', 12.500000000000004], ['01:00', 74.99999999999997], ['02:00', 75.00000000000001], ['03:00', 74.99999999999999], ['04:00', 74.99999999999996], ['05:00', 75.00000000000001], ['06:00', 12.499999999999993], ['07:00', 74.99999999999996], ['08:00', 12.499999999999993], ['09:00', 12.500000000000005], ['10:00', 74.99999999999999], ['11:00', 12.500000000000005], ['12:00', 75.00000000000001], ['13:00', 75.00000000000001], ['14:00', 74.99999999999999], ['15:00', 75.00000000000001], ['16:00', 12.5], ['17:00', 12.500000000000002], ['18:00', 75.00000000000003], ['19:00', 75.0], ['20:00', 75.00000000000001], ['21:00', 74.99999999999999], ['22:00', 74.99999999999997], ['23:00', 74.99999999999999]], '热负荷': [['00:00', 499.9987510031133], ['01:00', 299.9990010033307], ['02:00', 399.9988581461166], ['03:00', 479.99872100341054], ['04:00', 499.99875100311874], ['05:00', 499.99875100311874], ['06:00', 499.9987510031224], ['07:00', 499.9987510031224], ['08:00', 499.9987510031224], ['09:00', 499.9987510031176], ['10:00', 499.9987510031224], ['11:00', 499.9987510031269], ['12:00', 499.9987510031242], ['13:00', 499.9987510031242], ['14:00', 499.9987510031224], ['15:00', 499.99875100311874], ['16:00', 499.99875100312283], ['17:00', 499.99875100312715], ['18:00', 499.9987510031224], ['19:00', 499.9987510031224], ['20:00', 499.99875100312784], ['21:00', 499.99875100312966], ['22:00', 499.99875100311874], ['23:00', 499.9987510031242]], '电压': [['00:00', 0.39998844998669947], ['01:00', 0.39998923442244694], ['02:00', 0.399989622289789], ['03:00', 0.39998970358774094], ['04:00', 0.39998986961974764], ['05:00', 0.39998977705210925], ['06:00', 0.39998817463781206], ['07:00', 0.3999882824685442], ['08:00', 0.39998306767844954], ['09:00', 0.3999817905580524], ['10:00', 0.3999822408161137], ['11:00', 0.39998118762641266], ['12:00', 0.3999830243051934], ['13:00', 0.3999832371900156], ['14:00', 0.3999843292421176], ['15:00', 0.3999838411105489], ['16:00', 0.39998361273101074], ['17:00', 0.39998353840632256], ['18:00', 0.39998402631047864], ['19:00', 0.3999843058579563], ['20:00', 0.3999844945387039], ['21:00', 0.3999856543515721], ['22:00', 0.3999879182977516], ['23:00', 0.3999890982620759]], '相角': [['00:00', -0.0013879665570542142], ['01:00', -0.0012891772621686324], ['02:00', -0.0012352184583328423], ['03:00', -0.0012224325412028858], ['04:00', -0.0011967685933769539], ['05:00', -0.0012114905435772474], ['06:00', -0.0013984769210698086], ['07:00', -0.0014117084120251458], ['08:00', -0.002120921240690548], ['09:00', -0.0023008427371544746], ['10:00', -0.002263187368055037], ['11:00', -0.0023602382373387283], ['12:00', -0.002153142087024505], ['13:00', -0.0021329941183345262], ['14:00', -0.002007998984005236], ['15:00', -0.0020760297993386886], ['16:00', -0.00209816605505446], ['17:00', -0.002088615763329909], ['18:00', -0.002033168856044614], ['19:00', -0.0019889152990728923], ['20:00', -0.0019657936683303854], ['21:00', -0.001821376427406351], ['22:00', -0.0014997618801640266], ['23:00', -0.001328338873952478]]}}
==============================
优化方案 2
...(由于结果过长，此处省略方案2内容及后续方案)...
```
