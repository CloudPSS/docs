---
title: 控件
---

## [选项卡](https://docusaurus.io/docs/markdown-features/tabs)

````tsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>
````

效果：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

## 文档卡片列表

```jsx
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

效果：

import DocCardList from '@theme/DocCardList';

<DocCardList />

:::warning
该控件只能在包含多个文档（`.md` 文件）的文件夹中使用。
:::

## 重定向

```jsx
import {Redirect} from '@docusaurus/router';

<Redirect to={require("../10-edit-help/index.md").metadata.permalink} />
```

效果参考 [重定向](../../20-examples/30-redirect.md)