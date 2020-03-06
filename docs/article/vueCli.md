# vue-cli创建项目
::: tip 注意
我使用的是[vue-cli4](https://cli.vuejs.org/zh/guide/)的版本 :tada:
:::
## 安装vue-cli
::: warning 关于旧版本
Vue CLI 的包名称由`vue-cli`改成了`@vue/cli`。 如果你已经全局安装了旧版本的`vue-cli` (1.x 或 2.x)，你需要先通过`npm uninstall vue-cli -g`或`yarn global remove vue-cli`卸载它。
:::
::: tip Node 版本要求
Vue CLI 需要[Node.js 8.9](https://nodejs.org/en/) 或更高版本 (推荐 8.11.0+)。你可以使用[nvm](https://github.com/nvm-sh/nvm) 或[nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

可以使用下列任一命令安装这个新的包：
``` sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli

# 安装yarn
npm install -g yarn
# 查看版本
yarn --version
```
::: warning 注意
这里我使用 `yarn` 安装时一直安装不成功，建议先使用 `npm` 安装
:::


## 创建项目
::: tip 提示
如果有多种选项，可按上下键切换，单项选择直接回车就是当前光标所在位置的选项，多项选择可配合着空格选择不同的选项，然后按回车键继续下一步
:::
运行以下命令来创建一个新项目：
>文章中部分内容引用了别人的说明[原文链接](https://blog.csdn.net/qq_38652871/article/details/89600546)
``` sh
# vue create 你项目的名称
vue create hello-world
```
#### 输入命令之后会看到

<br />
<img :src="$withBase('/image/Snipaste1.png')" alt="1">


#### 这里我选择的手动设置 `Manually select features`
- `default (babel, eslint)` 默认配置，提供babel和eslint支持
- `Manually select features` 自定义选择需要的功能，提供更多的特性选择。
#### 下一步

<br />
<img :src="$withBase('/image/Snipaste3.png')" alt="2">

##### 上图中每一项的含义
 - TypeScript 支持使用 TypeScript 编写程序
 - Progressive Web App (PWA) Support PWA 支持，一般PC端是用不到。
 - Router 支持 vue-router 。
 - Vuex 支持 vuex 。
 - CSS Pre-processors 支持 CSS 预处理器。
 - Linter / Formatter 支持代码风格检查和格式化。
 - Unit Testing 支持单元测试。
 - E2E Testing 支持 E2E 测试。
 
#### 下一步
::: tip 提示
这里是询问 `vue Router` 使用什么模式？输入n：是使用的 `hash` 模式，输入y: 是使用 `history` 模式

这里我使用的是 `hash` 模式
:::
::: warning 注意
这里要注意 `history` 模式是需要后台支持的，如果后台没有正确的配置，当用户在浏览器直接访问时就会返回 404。
[官方说明](https://router.vuejs.org/zh/guide/essentials/history-mode.html) :tada:
:::

<br />
<img :src="$withBase('/image/Snipaste4.png')" alt="3">

#### 下一步
::: tip 提示
这里按照你习惯选择就好
:::

<br />
<img :src="$withBase('/image/Snipaste5.png')" alt="4">

#### 下一步
>这里是选择代码规范
::: tip 提示
这个也是看个人习惯选择，还有就是团队里选用的是那种代码规范
:::
<br />
<img :src="$withBase('/image/Snipaste6.png')" alt="5">

#### 下一步
::: tip 提示
如果规范报错了可以在[ESlint-规则](https://cn.eslint.org/docs/rules/)看你的代码不符合什么规范，
<!-- 两个都可以选择上哦 -->
:::

<br />
<img :src="$withBase('/image/Snipaste7.png')" alt="6">

- `Lint on save` 选项 选项是是在你写完代码按保存后 `ESlint` 就会检查你写的代码是否符合规范
- `Lint and fix on commit` 选项是在你 ` fix 和 commit` 时检查，如果不符合规范就会报提示的哦
::: danger 注意
如果不符合规范后会报错比如图上圈起来的，这时候可以在[ESlint-规则](https://cn.eslint.org/docs/rules/)里查看是违反里什么规范，可以`Ctrl+f`快速查找 'key-spacing'

<br />
<img :src="$withBase('/image/Snipaste8.png')" alt="73">

:::
#### 下一步
::: tip 提示
这里是询问像 `babel` `postcss` `eslint` 这些配置文件放哪
:::
- `In dedicated config files` 是放在独立的文件里放置
- `In package.json` 是放package.json里

<br />
<img :src="$withBase('/image/Snipaste9.png')" alt="8">

::: tip 提示
这里我选择的是 `In dedicated config files` 
:::

#### 下一步
::: tip 提示
图中第一项是询问是否将以上这些将此保存为未来项目的预配置吗？

选择是的时候，下次创建项目时，可以选择刚刚配置好的配置，不用再每个都配置一遍。

第2个选项的意思是输入一个名字，可以随意输入，点击确定就开始下载了

图中第一项如果选择不保存的话，就会直接下载了
:::

<br />
<img :src="$withBase('/image/Snipaste10.png')" alt="9">

::: tip 提示
如果下一次创建项目使用之前保存的预配置的话，可能会没有安装依赖，这个时候可以进入项目在命令行输入
``` sh
# 安装依赖
npm i
```
:::
#### 下载好之后

<br />
<img :src="$withBase('/image/Snipaste11.png')" alt="10">

#### 可以在命令行输入
``` sh
# cd 到项目中
cd hello-world
# 启动一个本地的服务
npm run serve
```
#### 下图就是是启动成功了

<br />
<img :src="$withBase('/image/Snipaste13.png')" alt="11">

#### 然后在浏览器[输入地址](http://localhost:8080/)就可以看到下图

<br />
<img :src="$withBase('/image/Snipaste12.png')" alt="12">
