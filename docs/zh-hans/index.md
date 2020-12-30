---
title: 帮助文档
nav: false
toc: false
---

![](bg.jpg)

CloudPSS是一款面向能源互联网的建模仿真平台，其采用完全自主研发的电磁暂态仿真内核，利用云端的异构并行计算资源，为用户提供面向交直流混联电网、可再生能源发电、微电网、配电网、供热网等多种能源网络的建模及仿真分析功能。

> ## 快速入门
> ![](快速入门.png)
> 
> CloudPSS建模及仿真平台的介绍和快速入门文档。帮助用户快速熟悉平台的基本操作，建立简单电路模型，执行仿真功能，并查看仿真结果曲线。
> + [账号注册与登录](guide/Login.md)
> + [入门案例](guide/rumen.md)
> + [CloudPSS-MiNi简介](guide/manual.md)
> + [CloudPSS-MiNi用户中心](guide/UserCenter_Mini.md)
> 
> [更多](guide/index.md)

> ## 元件帮助
> ![](元件帮助.png)
> 
> CloudPSS模型库提供的全部元件的帮助文档，包括元件的基本原理、参数列表、引脚列表的详细说明，部分复杂元件的使用说明，以及测试算例链接。
> + [电气元件](components/comp_PSS/comp_PSSelectrical/BasicPassiveComp.md)
> + [量测元件](components/comp_PSS/comp_PSSMeasure.md)
> + [控制元件](components/comp_PSS/comp_PSSControl/BasicComp.md)
> + [综合能源元件](components/comp_IES/PowerSourceComp.md)
> 
> [更多](components/index.md)

> ## 功能帮助
> ![](功能帮助.png)
> 
> CloudPSS建模及仿真平台提供的全部功能的详细说明文档。
> + [CloudPSS功能帮助向导](features/IntroGuide.md)
> + [工作台介绍](features/Workbench.md)
> + [基础功能](features/Basic.md)
> + [其他功能](features/Other.md)
> + [电磁暂态建模仿真工作台](features/EMTP.md)
> + [移频电磁暂态仿真工作台](features/SFEMT.md)
> + [潮流计算仿真工作台](features/Powerflow.md)
> + [综合能源系统建模仿真平台](features/IESLab.md)
> 
> [更多](features/index.md)

> ## 案例介绍
> ![](案例介绍.png)
> 
> CloudPSS模板算例及主页示例案例的模型和使用说明，帮助用户熟悉CloudPSS各类功能，快速理解相关算例的使用，并在相关算例的基础上进行修改。
> + [IEEE标准测试系统](examples/EMTP/IEEE39.md)
> + [LCC-HVDC测试系统](examples/EMTP/LCC.md)
> + [MMC-HVDC测试系统](examples/EMTP/MMC.md)
> + [综合能源系统案例](examples/IESLab/demo_case.md)
> 
>  [更多](examples/index.md)

> ## 旧平台文档
> ![](旧平台文档.png)
> 
> CloudPSS旧版平台的使用说明（原CloudPSS“下载”区的文档）。
> 
> [打开](//www.cloudpss.net/downloadnew/)


---
->Copyright (c) 2015- by CloudPSS<-
->[京ICP备16015429号-1](https://beian.miit.gov.cn)<-
->[清华大学能源互联网创新研究院](http://www.eiri.tsinghua.edu.cn)<-

<style>
h1[id="title"]{
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    position: absolute;
    top: 200px;
    color: #fff;
    z-index: 20;
}
article p {
  margin: 1em 0;
  line-height: 1.6em;
  z-index: 1;
  word-spacing: .05em;
}
article blockquote h2 {
  font-size: 2em
}
article blockquote {
  font-size: 15px;
  border-left: 1px solid rgba(var(--theme-color-primary-A200),0.2) !important;
  grid-template-columns: 1fr 20px 1fr;
  grid-template-rows: 90px auto auto 60px;
  display: grid;
  grid-column-gap: 10px;
  padding: 0 0 0 20px !important;
  z-index: 1;
  vertical-align: middle;
  color:var(--theme-foreground-base) !important;
  box-shadow: 0 4px 10px 2px rgba(0,0,0,.3) !important;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  margin-bottom: 25px !important;
}
article > figure {
 display: flex;
  height: 370px;
  width: 100%;
  margin: 0 !important

}
article > figure img {
  width: 100%;
  position: absolute;
  top: 0;
  left:0;
  height: 370px
}

article blockquote:hover {
    box-shadow: 0 6px 12px 4px rgba(0,0,0,.3);
    transform: translateY(-4px);
}
article blockquote figure {
  grid-column: 3;
  grid-row: 1 / 5;
  min-width: unset !important;
  margin: 0 auto !important;
  height:100%;
  display:flex !important;
}
article blockquote figure img {
  height: 100%;
  width: 100%;
  object-fit: cover;
    
}
article blockquote h2 {
  grid-column: 1;
  grid-row: 1;
  margin: 1em 0;
}
article blockquote h2 a.header-anchor {
  display: none !important;
}
article blockquote  p:first-of-type {
  grid-column: 1;
  grid-row: 2;
  margin: 0 
}
article blockquote ul {
  grid-column: 1;
  grid-row: 3;
}
article blockquote p:last-of-type {
  grid-column: 1;
  grid-row: 4;
}
article blockquote a {
  color: var(--theme-color-primary-A200) !important;
}
article blockquote a:hover {
  color: var(--theme-color-primary-A400) !important;
}

article blockquote > p:last-of-type > a {
  display: inline-block;
  text-align: center;
  transition: all .5s ease;
  background: #4285f4;
  padding: 5px;
  width: 100px;
  box-shadow: 0 0 2px #999;
  border-radius: 1px;
}
article blockquote > p:last-of-type > a {


  
  color: #fff !important;
}
article blockquote > p:last-of-type > a:hover {
  background: #3c75d2;
}
article li {
    margin: .5em 0;
}
@media screen and (max-width: 1300px) {
  article blockquote  {
    font-size:13px;
  }
}
@media screen and (max-width: 600px) {
  article blockquote  {
    grid-template-rows: 250px 70px auto auto 60px;
    grid-template-columns: 1fr;
  }
  article blockquote figure {
    grid-column: 1;
    grid-row: 1;
    margin-left: -20px !important
  }
  article blockquote h2 {
    grid-row: 2;
  }
  article blockquote p:first-of-type {
    grid-row: 3;
  }
  article blockquote ul {
    grid-row: 4;
  }
  article blockquote p:last-of-type {
    grid-row: 5;
  }
}
</style>