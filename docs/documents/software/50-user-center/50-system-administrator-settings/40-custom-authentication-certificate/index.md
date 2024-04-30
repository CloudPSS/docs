---
title: 自定义认证证书管理

tags: 
- 个人中心

---

:::tip 权限提醒
此页面需要系统管理员权限。
:::

点击页面左下角的账户**设置**按钮，然后点击左侧的**自定义认证证书管理**按钮，进入自定义认证证书管理页面。

![自定义认证证书管理](customized-authentication-certificate-management.png "自定义认证证书管理")

## 使用指南

点击**如何使用**查看使用指南。如下图所示：

1. **生成自定义token**

```ts showLineNumbers
//私钥
const privateKey = 申请的私钥;
const sign = 申请的签名;
//需要签名数据，要求该username唯一
const r = {
    sign: sign,
    username: 'custom-name',
}
//签名
import jwt from 'jsonwebtoken';
const token = jwt.sign(r, privateKey, { algorithm: 'ES256', allowInvalidAsymmetricKeyTypes: true });
```

2. **跳转链接**

构建 **ip 地址 + 签名 + 自定义 token** 的页面链接跳转，例如：`http://10.101.10.45/jwt/签名/自定义token`

![使用指南](how-to-use.png "使用指南")

## 功能介绍

### 新建签名证书

点击页面右上角的**新建**按钮。输入证书自定义名称，校验通过后，自动生成签名证书和密钥。

![自定义名称](custom-name.png "自定义名称")

:::tip 证书名称规则
证书名称需要以数字、字母、- 或 _ 组成，必须以字母开头，5 ~ 20 个字符
:::

![新建签名证书](new-signing-certificate.png "新建签名证书")


### 复制签名/复制公钥/复制私钥

点击页面签名右方的**复制签名**/**复制公钥**/**复制私钥**按钮，或者**新建签名证书**后在证书申请成功弹出框页面点击**复制签名**/**复制公钥**/**复制私钥**按钮。

### 删除签名证书

点击页面签名右方的**删除**按钮。