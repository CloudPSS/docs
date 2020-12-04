---
title: Documentation
nav: false
toc: false
---

![](bg.jpg)

CloudPSS is a modeling and simulation platform for the energy internet.
It uses a completely self-developed electromagnetic transient simulation kernel and heterogeneous and parallel computing resources in the cloud.
It can provide users with modeling and simulation analysis functions for a variety of energy internet such as hybrid AC-DC grid, renewable energy generation, microgrids, distribution network, heating network, and etc.

> ## Quick Start
> ![](Quick%20Start.png)
> 
> Introduction and quick start guide for CloudPSS platform. It helps users to quickly become familiar with the basic operations of the platform, build simple circuit models, perform simulation functions, and view simulation results curves.
> 
> + [Account Management](guide/User1.md)
> + [Platform Introduction](guide/User2.md)
> + [Operation of Simulation](guide/User3.md)
> + [Test Cases](guide/User4.md)
> 
> [More](guide/index.md)


> ## Components
> ![](Components.png)
> 
> Providing documents for all the components in CloudPSS model library, including detailed descriptions of the basic modeling equations, parameter lists, pin lists, instructions for some complex components, and test case links.
> 
> + [Electrical Components](components/compGND.md)
> + [Measuring Components](components/comp_NewBranchVoltageMeter.md)
> + [Control Components](components/comp_newConstant.md)
> + [Heat Network Components](components/comp-IES-Generator-PhotovoltaicSys.md)
> 
> [More](components/index.md)


> ## Features
> ![](Features.png)
> 
> Introduction of all the functions and features provided by CloudPSS.
> 
> + [Parameter and Pin System](features/ParameterSystem.md)
> + [Save and Import the Snapshot](features/Snapshot.md)
> + [Advanced Data Visualization](features/Dashboard.md)
> + [Heat System Simulation](features/IntegratedEnergySysGuide.md)
> 
> [More](features/index.md)


> ## Examples
> ![](Examples.png)
> 
> Introduction of provided template, index examples. It helps users to become familiar with the various functions of CloudPSS, quickly understand the related cases, and modify them on the basis of related cases.
> 
> + [IEEE 39-bus standard system](examples/IEEE39.md)
> + [LCC-HVDC standard system](examples/LCC.md)
> + [MMC-HVDC standard system](examples/MMC.md)
> + [Regional heat supply system](examples/IntegratedEnergySystem.md)
>
> [More](examples/index.md)


> ## Previous Documentation
> ![](Previous%20Documentation.png)
> 
> Instructions of the previous CloudPSS version (Documents in the original CloudPSS "Download" page)
> 
> [Open](//www.cloudpss.net/downloadnew/)


---
->Copyright (c) 2015- by CloudPSS<-
->[京ICP备16015429号-1](https://beian.miit.gov.cn)<-
->[Sichuan Energy Internet Research Institute, Tsinghua University](http://www.eiri.tsinghua.edu.cn)<-

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