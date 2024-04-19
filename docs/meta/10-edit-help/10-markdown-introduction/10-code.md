---
title: 代码块
---

代码块的基本语法如下：

````md
```[语言]

```
````

## 高亮语言

可用的 `[语言]` 包括 `plain` `tex` `md` `yaml` `js` `html` `css` `c` `cpp` `csharp` `pyhton` `matlab`，完整的语言列表请参考 [prismjs 文档](https://prismjs.com/#supported-languages)。

需要将使用的语言添加到文档系统 `/docusaurus/prism.ts` 的 `additionalLanguages` 数组中以支持高亮。

如：

````md
```js
console.log(`Hello world`)
```
````

效果：

```js
console.log(`Hello world`)
```

## 标题和行号

在首行使用 `title="标题"` 语法可以添加标题，使用 `showLineNumbers` 可以显示行号。

如：

````md
```py title="Hello World" showLineNumbers
def main():
     print ("Hello World!")
```
````

效果：

```py title="Hello World" showLineNumbers
def main():
     print ("Hello World!")
```

## 高亮

使用 `highlight-next-line`、`error-next-line`、`warning-next-line` 注释高亮下一行，使用 `highlight-start` 和 `highlight-end` （`error`、`warning` 同理）高亮多行。

如：

````md
```js showLineNumbers
console.log(`Normal`);
// highlight-next-line
console.log(`This line will be highlighted`);
// warning-start
console.warn(`These
  lines will be marked
  as waring`);
// warning-end
// error-next-line
console.error(`This line will be marked error`);
```
````

效果：

```js showLineNumbers
console.log(`Normal`);
// highlight-next-line
console.log(`This line will be highlighted`);
// warning-start
console.warn(`These
  lines will be marked
  as waring`);
// warning-end
// error-next-line
console.error(`This line will be marked error`);
```
