# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基本使用

基本使用。

<demo-input-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/basic.vue
</demo-code-box>

### 三种大小

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`30px` 和 `24px`。

<demo-input-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/size.vue
</demo-code-box>

### 前置/后置标签

用于配置一些固定组合。

<demo-input-addon/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/addon.vue
</demo-code-box>

### 输入框组合

输入框的组合展现。

注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

<demo-input-group/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/group.vue
</demo-code-box>

### 搜索框

带有搜索按钮的输入框，`2.5.0` 时新增。

<demo-input-search-input/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/search-input.vue
</demo-code-box>

### 文本域

用于多行输入。

<demo-input-textarea/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/textarea.vue
</demo-code-box>

### 适应文本高度的文本域

`autosize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autosize` 可以设定为一个对象，指定最小行数和最大行数。

<demo-input-autosize-textarea/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/autosize-textarea.vue
</demo-code-box>

### 前缀和后缀

在输入框上添加前缀或后缀图标。

<demo-input-presuffix/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/presuffix.vue
</demo-code-box>

## API

### Input

| 参数         | 说明                                                                                                                                                                                  | 类型            | 默认值    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------- |
| addonAfter   | 带标签的 input，设置后置标签                                                                                                                                                          | string\|VueNode |           |
| addonBefore  | 带标签的 input，设置前置标签                                                                                                                                                          | string\|VueNode |           |
| defaultValue | 输入框默认内容                                                                                                                                                                        | string          |           |
| disabled     | 是否禁用状态，默认为 false                                                                                                                                                            | boolean         | false     |
| id           | 输入框的 id                                                                                                                                                                           | string          |           |
| prefix       | 带有前缀图标的 input                                                                                                                                                                  | string\|VueNode |           |
| size         | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small`                                                                                                    | string          | `default` |
| suffix       | 带有后缀图标的 input                                                                                                                                                                  | string\|VueNode |           |
| type         | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`)。 | string          | `text`    |
| value        | 输入框内容                                                                                                                                                                            | string          |           |
| onChange     | 输入框内容变化时的回调                                                                                                                                                                | function(e)     |           |
| onPressEnter | 按下回车的回调                                                                                                                                                                        | function(e)     |           |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 Vue 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。

### Input.TextArea

> `2.12` 后新增的组件，旧版请使用 `Input[type=textarea]`。

| 参数         | 说明                                                                       | 类型            | 默认值 |
| ------------ | -------------------------------------------------------------------------- | --------------- | ------ |
| autosize     | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean\|object | false  |
| defaultValue | 输入框默认内容                                                             | string          |        |
| value        | 输入框内容                                                                 | string          |        |
| onPressEnter | 按下回车的回调                                                             | function(e)     |        |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

#### Input.Search

| 参数        | 说明                           | 类型                   | 默认值 |
| ----------- | ------------------------------ | ---------------------- | ------ |
| enterButton | 是否有确认按钮，可设为按钮文字 | boolean\|VueNode       | false  |
| onSearch    | 点击搜索或按下回车键时的回调   | function(value, event) |        |

其余属性和 Input 一致。

#### Input.Group

| 参数    | 说明                                                                  | 类型    | 默认值    |
| ------- | --------------------------------------------------------------------- | ------- | --------- |
| compact | 是否用紧凑模式                                                        | boolean | false     |
| size    | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string  | `default` |

```html
<NebulaInputGroup>
  <NebulaInput />
  <NebulaInput />
</NebulaInputGroup>
```
