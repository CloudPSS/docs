
import Hello from './_hello-comp.md';
import CodeBlock from '@theme/CodeBlock';

传递的参数：

<CodeBlock language="json">{JSON.stringify(props, null, 2)}</CodeBlock>

在组件内使用组件，并传递参数：

<Hello name={props.compName} />
