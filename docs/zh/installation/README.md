# Installation 安装

## 使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```
npm install nebula-ui --save
```

```
yarn add nebula-ui
```

## 浏览器引入

在浏览器中使用`script`和`link`标签直接引入文件，并使用全局变量`NebulaUi`.

## 示例

```js
import NebulaUi from "nebula-ui";

Vue.use(NebulaUi);
```

引入样式：

```js
import "nebula-ui/dist/nebula-ui.css";
```

## 按需加载

```js
import { NebulaButton, NebulaButtonGroup, NebulaIcon } from "nebula-ui";

Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.component("NebulaIcon", NebulaIcon);
```
