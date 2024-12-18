---

title: 登录 CloudPSS 私有部署平台
description: 个人中心登录 CloudPSS 私有部署平台文档

tags: 
- user-center

---


## 访问指南

为了访问私有部署的 **CloudPSS** 服务，请遵循以下步骤：

1. **启动浏览器**：打开您的浏览器。
2. **输入服务器地址**：在浏览器的地址栏中输入服务器的 IP 地址，例如 `http://10.101.10.45`。
3. **登录 CloudPSS 个人中心**：
   - 首次访问时，您将被重定向到 CloudPSS 个人中心的登录界面，地址为 `http://10.101.10.45/account/login`。

> 为了确保最佳的显示效果，我们建议使用 **Chrome** 浏览器进行访问。

## 登录流程

如果您已经拥有账号，可按以下步骤登录：

1. 在登录页面的相应位置填写您的用户邮箱/手机号/账户名，并点击**下一步**。
2. 输入您的登录密码，然后点击**登录**按钮，密码验证通过，即可成功登录。
3. 如您需要其他登录方式，也可以使用微信、邮箱、手机号、动态口令码来验证登录，该功能需要提前绑定用户的微信、邮箱、手机号、动态口令，详情参见 [安全设置功能页](../../40-general-account-settings/20-account-security/index.md "安全设置")。


![输入登录账户](../10-cloudpss-public/输入登录账户.png "输入登录账户")

![输入登录密码](../10-cloudpss-public/输入登录密码.png "输入登录密码")

## 重置密码流程

如果您忘记了自己账号的密码，可以通过以下步骤来修改密码：

1. 从登录页面，点击**忘记了密码?** 进入重置密码页面。
2. 按照提示填写账户相应信息，并点击**下一步**按钮。
3. 进入身份验证界面，点击**获取验证码**以对注册所用的邮箱/手机/动态口令进行验证。
4. 进入重置密码界面，按照要求重新输入新密码，点击**提交**完成修改密码。

![账户信息界面](../10-cloudpss-public/账户信息.png "账户信息界面")

![邮箱/手机验证界面](../10-cloudpss-public/邮箱验证.png "邮箱/手机验证界面")

![重置密码页面](../10-cloudpss-public/重置密码.png "重置密码页面")

## 新建账户

私有部署的 **CloudPSS** 服务，仅支持通过**用户管理**来管理账户（支持新建账户、修改账户密码），该功能仅限系统管理员权限。详情参见 [用户管理页面](../../50-system-administrator-settings/10-user-management/index.md "用户管理")。
