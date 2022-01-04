---
title: 帮助文档
nav: false
toc: false
---

![](bg.jpg)

CloudPSS 是一款面向能源互联网的数字孪生应用构建平台，其采用完全自主研发的电磁暂态仿真内核，利用云端的异构并行计算资源，为用户提供面向交直流混联电网、可再生能源发电、微电网、配电网、供热网等多种能源网络的建模、仿真、分析功能。

其中 SimStudio 可以组织和管理能源电力系统数字孪生模型仿真模型；

FuncStudio 助力能源电力系统数字孪生云边融合业务订制；

AppStudio 用于构建能源电力系统数字孪生应用场景。

> ## 引导
> ![](快速入门.png)
> 
> CloudPSS 平台的引导介绍。帮助用户登录平台，熟悉主页内容。
> + [账号注册与登录](guide1/login.md)
> + [首页介绍](guide1/main.md)
> 
> [更多](guide1/index.md)

> ## SimStudio
> ![](功能帮助.png)
> 
> 提供 CloudPSS SimStudio 建模及仿真应用的快速入门文档，帮助用户快速熟悉应用的基本操作；提供全部功能的详细说明文档；提供模板算例以及主页展示案例的模型和使用说明，帮助用户熟悉 SimStudio 各类功能，快速理解相关算例的使用，并在相关算例的基础上进行修改。
> + [快速入门](simstudio/guide.md)
> + [功能帮助](simstudio/features.md)
> + [案例介绍](simstudio/examples.md)
> 
> [更多](simstudio/index.md)

> ## FuncStudio
> ![](元件帮助.png)
> 
> 提供 CloudPSS FuncStudio 业务订制应用的快速入门文档，帮助用户快速熟悉应用的基本操作；提供全部功能的详细说明文档；帮助用户熟悉 FuncStudio 各类功能，快速理解相关函数的构建方法。
> + [快速入门](funcstudio/guide.md)
> + [功能帮助](funcstudio/features.md)
> 
> [更多](funcstudio/index.md)


> ## AppStudio
> ![](案例介绍.png)
> 
> 提供 CloudPSS AppStudio 舞台构建应用的快速入门文档，帮助用户快速熟悉应用的基本操作；提供全部功能的详细说明文档；提供全部控件的详细功能说明文档；帮助用户熟悉 AppStudio 各类功能，快速理解相关舞台场景的搭建方法。
> + [快速入门](appstudio/guide.md)
> + [功能帮助](appstudio/features.md)
> + [控件帮助](appstudio/control.md)
> 
>  [更多](appstudio/index.md)


> ## 旧平台文档
> ![](旧平台文档.png)
> 
> CloudPSS 旧版平台的使用说明（原 CloudPSS “下载”区的文档）。
> 
> [打开](//www.cloudpss.net/downloadnew/)


---
->Copyright (c) 2015- by CloudPSS<-
->[蜀ICP备2020037721号](https://beian.miit.gov.cn)<-
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