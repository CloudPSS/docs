---
title: 图表与流程图
---

你可以通过 [在线编辑器](https://mermaid.live/) 设计图表。

将结果放在 `mermaid` 代码块中以进行渲染。
````md
```mermaid
Your mermaid code here
```
````

### Flowchart

```mermaid
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[Car]
```

[Flowchart Syntax](http://knsv.github.io/mermaid/#flowcharts-basic-syntax)

### Sequence diagram

```mermaid
sequenceDiagram
loop every day
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
end
```

[Sequence Diagram Syntax](http://knsv.github.io/mermaid/#sequence-diagrams)

### Gantt diagram

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d

section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser and jison          :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d

section Documentation
Describe gantt syntax               :active, a1, after des1, 3d
Add gantt diagram to demo page      :after a1  , 20h
Add another diagram to demo page    :doc1, after a1  , 48h

section Last section
Describe gantt syntax               :after doc1, 3d
Add gantt diagram to demo page      : 20h
Add another diagram to demo page    : 48h
```

[Gantt Diagram Syntax](http://knsv.github.io/mermaid/#gant-diagrams)

### Class diagram

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```

Class diagram is powered by [mermaid](https://github.com/knsv/mermaid).
