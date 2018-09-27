# Installation

## Using npm or yarn

We recommend using npm or yarn to install, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```
npm install nebula-ui --save
```

```
yarn add nebula-ui
```

## Import in Browser

Add`script`and`link`tags in your browser and use the global variable`NebulaUi`.

## Usage

```js
import NebulaUi from "nebula-ui";

Vue.use(NebulaUi);
```

And import stylesheets manually:

```js
import "nebula-ui/dist/nebula-ui.css";
```

## Use modularized nebula-ui

```js
import { NebulaButton, NebulaButtonGroup, NebulaIcon } from "nebula-ui";

Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.component("NebulaIcon", NebulaIcon);
```
