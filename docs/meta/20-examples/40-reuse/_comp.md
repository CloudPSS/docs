
在<strong>{props.name ?? "未知模块"}</strong>中，blah……

## 普通模型项目的接口标签页

{props.children[0]}

## 元件项目的接口标签页

{props.children[1]}

## 元件项目

{props.children[2]}

<slot hidden={!props.ieslab}>

IESLAB 中，blah……

![普通模型项目的接口标签页](./2.png)

</slot>

<slot hidden={!props.dslab}>

DSLAB 中，blah……

</slot>

<slot hidden={!props.emtlab}>

EMTLAB 中，blah……

</slot>