---
title: 用户自定义电磁暂态仿真元件

sidebar_position: 100

tags:
- EMTLab
---

使用 EMTLab Core SDK 构建用户自定义电磁暂态仿真元件。

## 文档摘要
本节首先介绍 SDK 元件的前端构建方法，然后通过案例详细介绍 SDK 元件的构建方法和调试方法。阅读此文档，用户可结合 [EMTLab Core SDK](../../../SDK/CoreSDK/index.md) 帮助文档，熟悉 EMTLab Core SDK 的基本使用方法。

## 功能说明

### 新建 SDK 元件  

在 SimStudio 工作台点击 `新建`，在 `项目模板` 中选择 `CloudPSS 元件测试`，点击新建。  

![新建元件测试模板](./新建元件测试模板.png)   

### 导入元件编译产物

在 `实现标签页` 选择 `电磁暂态` ，将 `EMTLab Core SDK` 的 `.so` 编译产物拖放至电磁暂态实现框中。
`EMTLab Core SDK` 的使用和元件代码编写等内容详见 [EMTLab Core SDK](../../../SDK/CoreSDK/index.md) 帮助文档。

![元件编译产物上传](./元件编译产物上传.png)  

其中ClassName会根据上传的`.so`文件名自动生成，而`SubType`需要填写，表示元件的类型，大于0为电气元件，小于0为控制元件。

### 元件接口与图形设计  

对SDK元件进行接口设计，在`接口标签页`，设置元件的`参数组`，`引脚`和`图标设计`。  

![元件接口设计](./元件接口设计.jpg)  

### 元件名称与权限设置  

在`总览标签页中`，填写`元件名称`，点击`显示高级设置`，设置`权限`和`元件标签`。  

![总览标签填写](./总览标签填写.png )  

:::info
保存的元件可以在设置的元件标签中查找，也可通过搜索查找。
:::

## 案例1：电感元件（SDK电气元件）
本案例介绍基础电气元件——电感元件的设计、编写和调试方法。
### 元件前端设计
元件前端设计分为以下几个方面：  
- 元件参数组设计
- 元件引脚列表定义
- 元件图形设计
- 元件标签和权限设置   

以下开始详细介绍每一部分的详细操作。

1.  元件参数组设计  
    在SimStudio工作台点击`新建`,在`项目模板`中选择`CloudPSS元件测试`，点击新建。在`接口标签页`，开始设置元件的`参数组`。在本案例中，设置两个参数组`Configuration`和`Monitoring`，`Configuration`用于设置电感的相关参数，`Monitoring`用于监测电感元件内部信息。参数组具体设置如下图所示：

    ![电感参数组设置](./电感参数组设置.png "电感参数组设置")  

1.  元件引脚列表定义  
    在`接口标签页`，开始设置元件的`引脚列表`。在本案例中，电感元件含有2个引脚，用`Pin +`和`Pin -`表示参考方向。本案例的电感元件为单相元件，数据维数为1维。由于电感元件为电气元件，引脚的连接类型均为电气。引脚的具体的设置如下图所示：  

    ![电感引脚设置](./电感引脚设置.png "电感引脚设置") 

1.  元件图形设计  
    在`接口标签页`，开始设置元件的`图形设计`。点击`路径`，利用SVG的path代码来构建电感电气图形,具体设置如下图：


    ![电感图形设计1](./电感图形设计1.png "电感图形设计1") 

    path代码如下：
    ```SVG  
    M 0 0
    H 9.9
    a 5 5 180 1 0 10 0
    h0.1
    a 5 5 180 1 0 10 0
    h0.1
    a 5 5 180 1 0 10 0
    H 50
    ```
    点击`文本`，使用`+`符号来标识电感元件的参考方向，具体设置如下图所示：

    ![电感图形设计2](./电感图形设计2.png "电感图形设计2") 

    同理，点击`文本`，使用参数组中的参数`Inductance`来标识电感元件的电感值，具体设置如下图所示：

    ![电感图形设计3](./电感图形设计3.png "电感图形设计3") 

    点击`引脚`，将引脚拖拽至电感图形的引脚连接处，将`引脚`和引脚列表定义的键进行绑定，具体设置如下图所示：

    ![电感图形设计4](./电感图形设计4.png "电感图形设计4") 

1.  元件标签和权限设置   
    在`总览标签页中`，填写`名称`为单相电感demo，设置`权限`为私有，`元件标签`为自定义元件，具体设置如下图所示：

    ![电感权限和标签设置](./电感权限和标签设置.png "电感权限和标签设置") 

### 元件后端设计
元件后端设计主要分为以下几个方面：
- `.h`文件编写
- `.cpp`文件编写
- 元件编译

以下开始详细介绍每一部分的详细操作。 

1.  `.h`文件编写  
    在本地的代码编辑器（如VSCode）中打开`EMTLab Core SDK`所在文件夹，在文件夹下新建`_Inductance_demo.h`文件，在该文件中添加如下代码：

    ```cpp
    #ifndef _INDUCTANCE_DEMO_H
    #define _INDUCTANCE_DEMO_H

    #include "Component.h"

    class _Inductance_demo : public Component
    {
    public:
      _Inductance_demo(){};
      ~_Inductance_demo(){};

      virtual void initialComponent(int id, string name, Json::Value &root);
      virtual void calculateNortonEquivalentResistance(double time); 
      virtual int regEMTPParaMem(EMTPMem &);
      virtual void formcheckNoneInterpolatedSwitchVec(std::vector<std::function<int(double time, double *, double *, double *, double *, std::map<string, vec> &)>> &);
      virtual void formNortonEquivCurrentCalCallVec(std::vector<std::function<int(double time, double *, double *, std::map<string, vec> &)>> &);
      virtual void formNortonEquivCurrentCDACalCallVec(std::vector<std::function<int(double time, double *, double *, std::map<string, vec> &)>> &);
      virtual void formBranchCurrentCalCallVec(std::vector<std::function<int(double time, double *, double *, std::map<string, vec> &)>> &funVec);

    private:
      string IName, VName;
      int DECLAREOUTFLAG(IName), DECLAREOUTFLAG(VName);
      double inductanceValue;
    };

    #endif
    ```
    代码的具体含义可参阅[EMTLab Core SDK](../../../SDK/CoreSDK/index.md)帮助文档，本处不在赘述。

2.  `.cpp`文件编写  
    在`EMTLab Core SDK`所在文件夹下新建`_Inductance_demo.cpp`文件，在该文件中添加如下代码：

    ```cpp
    #include "_Inductance_demo.h"
    #include <iostream>
    using namespace std;

    void _Inductance_demo::initialComponent(int id, string name, Json::Value &root) {
      type = 22;
      nElePort = 2;
      nCtrlInPort = 0;
      nCtrlOutPort = 0;
      this->id = id;
      nOrder = 1;
      mergeRequestNumber = 0;
      this->name = name;
      // define elePort
      for (int i = 0; i < nElePort; ++i) {
        char nodeName[100];
        sprintf(nodeName, "%d", i);
        EMTPNode tempNode(1, 1, root["pin"][nodeName]);
        eleNode.push_back(tempNode);
      }
      // define branchInfo
      NodeIdx from;
      from.init(0, 0);
      NodeIdx to;
      to.init(1, 0);
      branchInfo.push_back(EMTPBranchInfo(from, to)); 
      // init elementValue/matrix
      inductanceValue = atof(root["param"]["Inductance"].asCString());
      initialMatrix();
      // define monitoring var
      DECLAREOUTFLAG(IName) = setOutputVariable(IName, "I", vec(1).zeros(), root);
      DECLAREOUTFLAG(VName) = setOutputVariable(VName, "V", vec(1).zeros(), root);
      debug_logger->warn("initial inductance component is completed");
    }

    int _Inductance_demo::regEMTPParaMem(EMTPMem &emtpMem){
      debug_logger->warn("skip regEMTPParaMem");
      return 0;
    }

    void _Inductance_demo::calculateNortonEquivalentResistance(double time) {
        branchEquivalentConductance(0, 0) = deltaT / (2.0 * inductanceValue);
        debug_logger->warn("calculate Norton Equivalent Resistance is completed");
    }

    void _Inductance_demo::formcheckNoneInterpolatedSwitchVec(std::vector<std::function<int(double time, double *nodeMem, double *paraMem, double *nodeMemHist, double *paraMemHist, std::map<string, vec> &)>> &funVec) {
      debug_logger->warn("skip formcheckNoneInterpolatedSwitchVec");
      auto funCall = [=](double time, double *nodeMem, double *paraMem, double *nodeMemHist, double *paraMemHist, std::map<string, vec> &globalParamMap) {
        return 0;
      };
      funVec.push_back(funCall);
    }

    void _Inductance_demo::formNortonEquivCurrentCalCallVec(std::vector<std::function<int(double time, double *, double *, std::map<string, vec> &)>> &funVec) {
      int nBranch = getBranchInfoSize();
      if (nBranch <= 0) return;
      int branchCurrentPtr = emtpMemInfo.branchCurrentPtr[0];
      int branchVoltagePtr = emtpMemInfo.branchVoltagePtr[0];
      int branchEquivalentConductancePtr = emtpMemInfo.nortonEquivalentConductancePtr[0];
      int nortonEquivalentCurrentPtr = emtpMemInfo.nortonEquivalentCurrentPtr[0];
      debug_logger->warn("begin formNortonEquivCurrentCalCallVec");

      auto funCall = [=](double time, double *nodeMem, double *paraMem, std::map<string, vec> &globalParamMap) {
        vec branchVoltage(&nodeMem[branchVoltagePtr], nBranch, false, false);
        vec branchCurrent(&nodeMem[branchCurrentPtr], nBranch, false, false);
        vec nortonEquivalentCurrent(&nodeMem[nortonEquivalentCurrentPtr], nBranch, false, false);
        mat branchEquivalentConductance(&nodeMem[branchEquivalentConductancePtr], nBranch, nBranch, false, false);
        
        nortonEquivalentCurrent = branchCurrent + branchEquivalentConductance * branchVoltage;
        return 0;
      };
      funVec.push_back(funCall);
    }

    void _Inductance_demo::formNortonEquivCurrentCDACalCallVec(std::vector<std::function<int(double time, double *, double *, std::map<string, vec> &)>> &funVec) {
      int nBranch = getBranchInfoSize();
      if (nBranch <= 0) return;
      int branchCurrentPtr = emtpMemInfo.branchCurrentPtr[0]; 
      int branchVoltagePtr = emtpMemInfo.branchVoltagePtr[0];
      int nortonEquivalentCurrentPtr = emtpMemInfo.nortonEquivalentCurrentPtr[0];
      int branchEquivalentConductancePtr = emtpMemInfo.nortonEquivalentConductancePtr[0];
      debug_logger->warn("begin formNortonEquivCurrentCDACalCallVec");

      auto funCall = [=](double time, double *nodeMem, double *paraMem, std::map<string, vec> &globalParamMap) {
        vec branchCurrent(&nodeMem[branchCurrentPtr], nBranch, false, false);
        vec branchVoltage(&nodeMem[branchVoltagePtr], nBranch, false, false);
        vec nortonEquivalentCurrent(&nodeMem[nortonEquivalentCurrentPtr], nBranch, false, false);
        mat branchEquivalentConductance(&nodeMem[branchEquivalentConductancePtr], nBranch, nBranch, false, false);

        nortonEquivalentCurrent = branchCurrent;
        return 0;
      };
      funVec.push_back(funCall);
    }

    void _Inductance_demo::formBranchCurrentCalCallVec(std::vector<std::function<int(double time, double *, double *, std::map<string, vec> &)>> &funVec) {
      int nBranch = getBranchInfoSize();
      if (nBranch <= 0) return;
      int branchCurrentPtr = emtpMemInfo.branchCurrentPtr[0];
      int branchVoltagePtr = emtpMemInfo.branchVoltagePtr[0];
      int nortonEquivalentCurrentPtr = emtpMemInfo.nortonEquivalentCurrentPtr[0];
      int branchEquivalentConductancePtr = emtpMemInfo.nortonEquivalentConductancePtr[0];
      debug_logger->warn("begin formBranchCurrentCalCallVec");

      auto funCall = [=](double time, double *nodeMem, double *paraMem, std::map<string, vec> &globalParamMap) {
        vec branchCurrent(&nodeMem[branchCurrentPtr], nBranch, false, false);
        vec branchVoltage(&nodeMem[branchVoltagePtr], nBranch, false, false);
        vec nortonEquivalentCurrent(&nodeMem[nortonEquivalentCurrentPtr], nBranch, false, false);
        mat branchEquivalentConductance(&nodeMem[branchEquivalentConductancePtr], nBranch, nBranch, false, false);
        branchCurrent = nortonEquivalentCurrent + branchEquivalentConductance * branchVoltage;

        SETOUTVAR(VName, branchVoltage / 1e3);
        SETOUTVAR(IName, branchCurrent / 1e3);
        return 0;
      };
      funVec.push_back(funCall);
    }

    extern "C"
    {
        Component *_Inductance_demomaker()
        {
            return new _Inductance_demo;
        }
    }
    ```
    在`_Inductance_demo.cpp`的代码中，为了方便调试，在每个方法中均添加了debug_logger->warn()用于在仿真结果中显示相关日志。

1.  元件编译  
    在`EMTLab Core SDK`所在文件夹的`xmake.lua`文件中添加以下代码：
    ```lua
    set_targetdir("$(buildir)")
    target("_Inductance_demo")
        -- set kind
    set_kind("shared")
    --set_kind("static")
    set_languages("c99","cxx11")
    --    set_symbols("debug")
    add_cxflags("-fPIC")
    -- add files
    add_files("_Inductance_demo.cpp")
    set_warnings("all")

    --add_includedirs("inc/")
    add_linkdirs("/usr/local/lib/octave/6.3.0/")
    add_links("CloudPSSCore");
    ```
    使用docker容器进行代码编译，代码`.so`编译产物会生成在`build`文件夹下，按照[导入元件编译产物](#导入元件编译产物)方法进行导入，并保存元件。

### 元件调试

在EMTLab平台新建仿真项目，在`实现标签页`点击`模型`，在`用户名/自定义元件`标签下选中`单相电感demo`,拖拽至图纸中，开始构建测试算例，本案例构建的测试算例如下图所示：

![电感仿真测试](./电感仿真测试.png "电感仿真测试") 

其中交流单相电源的电压设置为10kV；`单相电感demo`的电感值设为10H，`Monitoring`选项下的直流电压和直流电流分别填入`#IL`和`#VL`；使用电流表和支路电压表测量电感的电流和电压，与内部监测信号进行对比；电阻值设置为10000Ω。

运行测试算例，得到的仿真结果如下图所示：

![调试日志](./调试日志.png "调试日志")   

![仿真结果](./仿真结果.png "仿真结果")

仿真结果中可以看出，通过电流表和电压表的测量值与通过元件内部信号获取的值完全一致，电流和电压曲线也符合预期。

## 常见问题

### 前端创建的SDK元件的参数与引脚怎么与后端程序进行绑定？  
  
`.cpp`文件中的`initialComponent`函数的入参`root`为该元件的JSON脚本，包含了前端定义的参数和引脚信息。在`initialComponent`函数中，需要定义好元件的电气引脚、控制引脚、元件支路信息和内部监测信号。

以案例1的电感元件为例，代码如下。该元件有两个电气引脚（1\*1维），没有控制输入引脚和控制输出引脚。按照定义的电气引脚顺序，定义电气节点。电感元件只有一条支路，定义该支路的信息。前台元件参数可通过root脚本获取。内部监测信号则通过定义虚拟引脚进行初始化。

```cpp
void _Inductance_demo::initialComponent(int id, string name, Json::Value &root) {
  // nElePort、nCtrlInPort、nCtrlOutPort分别代表电气引脚数量、控制输入引脚数量、控制输出引脚数量
  type = 22; // 大于0代表电气元件
  nElePort = 2;
  nCtrlInPort = 0;
  nCtrlOutPort = 0;
  this->id = id;
  nOrder = 1;
  mergeRequestNumber = 0;
  this->name = name;
  // 定义电气引脚
  for (int i = 0; i < nElePort; ++i) {
    char nodeName[100];
    sprintf(nodeName, "%d", i);
    // 定义一个tempNode为1*1维的电气引脚
    EMTPNode tempNode(1, 1, root["pin"][nodeName]);
    // eleNode为EMTPNode类型的Vector，使用push_back()在向量的末尾添加这个tempNode。
    eleNode.push_back(tempNode);
  }
  // 定义支路信息
  NodeIdx from;
  from.init(0, 0);// from.init(0, i)代表这条支路的起始点为0号节点的第i维
  NodeIdx to;
  to.init(1, 0);// to.init(1, i)代表这条支路的终止点为1号节点的第i维。
  branchInfo.push_back(EMTPBranchInfo(from, to)); 
  // 获取前台元件参数
  inductanceValue = atof(root["param"]["Inductance"].asCString());
  // 初始化支路电流、电压等矩阵，必须调用
  initialMatrix();
  // 虚拟引脚的初始化
  DECLAREOUTFLAG(IName) = setOutputVariable(IName, "I", vec(1).zeros(), root);
  DECLAREOUTFLAG(VName) = setOutputVariable(VName, "V", vec(1).zeros(), root);
}
```
  
### 如何通过一个SDK元件实现多种功能？  
在SDK元件的参数设计时，可以添加选择类型的参数，例如元件设计为可在电阻、电感和电容之间切换，可以按下图设置元件类型，通过元件类型来判断相关的参数是否启用。

![参数设置](./参数设置.png "参数设置")

![参数启用条件](./参数设置1.png "参数启用条件")

同样的，在元件后端程序中通过选择类型的参数进行判断，分别给出不同的元件逻辑，实现SDK元件的多种功能。

### SDK元件除了案例中介绍的调试方法，还有什么常用的调试方法？
常用调试方法如下：
- 短仿真时间调试  
  仿真时间设置为10个时步，比如积分步长为50μs,设置仿真结束时间为500μs。在后端`.cpp`代码中将关键的变量（支路电压、支路电流、诺顿等值电流等）都在日志中输出，通过日志查看各个变量是否与预期结果相符和。
- 多种测试用例  
  在保证SDK元件可以正常使用后，用户可以根据SDK元件的特性和功能，搭建多种符合元件使用的测试场景，对SDK元件进行全面的测试。
