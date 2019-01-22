# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

<demo-button-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/basic.vue
</demo-code-box>

### 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

<demo-button-icon/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/icon.vue
</demo-code-box>

### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

<demo-button-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/size.vue
</demo-code-box>

### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<demo-button-disabled/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/disabled.vue
</demo-code-box>

### 加载中状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

<demo-button-loading/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/loading.vue
</demo-code-box>

### 多个按钮组合

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。

<demo-button-multiple/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/multiple.vue
</demo-code-box>

### 按钮组合

可以将多个 `Button` 放入 `Button.Group` 的容器中。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

<demo-button-group/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/group.vue
</demo-code-box>

### 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

<demo-button-ghost/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/ghost.vue
</demo-code-box>

### Block 按钮

`block`属性将使按钮适合其父宽度。

<demo-button-block/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/button/block.vue
</demo-code-box>

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

| 属性     | 说明                                                                                                                                 | 类型                         | 默认值    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------- |
| disabled | 按钮失效状态                                                                                                                         | boolean                      | `false`   |
| ghost    | 幽灵属性，使按钮背景透明，版本 2.7 中增加                                                                                            | boolean                      | false     |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致                                                                                | string                       | -         |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                       | `button`  |
| icon     | 设置按钮的图标类型                                                                                                                   | string                       | -         |
| loading  | 设置按钮载入状态                                                                                                                     | boolean \| { delay: number } | `false`   |
| shape    | 设置按钮形状，可选值为 `circle` 或者不设                                                                                             | string                       | -         |
| size     | 设置按钮大小，可选值为 `small` `large` 或者不设                                                                                      | string                       | `default` |
| target   | 相当于 a 链接的 target 属性，href 存在时生效                                                                                         | string                       | -         |
| type     | 设置按钮类型，可选值为 `primary` `dashed` `danger`(版本 2.7 中增加) 或者不设                                                         | string                       | -         |
| onClick  | 点击按钮时的回调                                                                                                                     | (event) => void              | -         |
| block    | 将按钮宽度调整为其父宽度的选项                                                                                                       | boolean                      | `false`   |

支持原生 button 的其他所有属性。

`<NebulaButton>Hello world!</NebulaButton>` 最终会被渲染为 `<button><span>Hello world!</span></button>`，并且除了上表中的属性，其它属性都会直接传到 `<button></button>`。

`<NebulaButton href="http://example.com">Hello world!</NebulaButton>` 则会渲染为 `<a href="http://example.com"><span>Hello world!</span></a>`。
