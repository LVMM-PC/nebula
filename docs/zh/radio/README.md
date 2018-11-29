# Radio

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

### 基本

最简单的用法。

<demo-radio-basic/>

^^^ @/docs/.vuepress/components/demo/radio/basic.vue

### 不可用

Radio 不可用。

<demo-radio-disabled/>

^^^ @/docs/.vuepress/components/demo/radio/disabled.vue

### 单选组合

一组互斥的 Radio 配合使用。

<demo-radio-group/>

^^^ @/docs/.vuepress/components/demo/radio/group.vue

### RadioGroup 垂直

垂直的 RadioGroup，配合更多输入框选项。

<demo-radio-group-more/>

^^^ @/docs/.vuepress/components/demo/radio/group-more.vue

### RadioGroup 组合 - 配置方式

通过配置 `options` 参数来渲染单选框。

<demo-radio-group-options/>

^^^ @/docs/.vuepress/components/demo/radio/group-options.vue

### 按钮样式

按钮样式的单选组合。

<demo-radio-button/>

^^^ @/docs/.vuepress/components/demo/radio/button.vue

### 单选组合 - 配合 name 使用

可以为 RadioGroup 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

<demo-radio-group-with-name/>

^^^ @/docs/.vuepress/components/demo/radio/group-with-name.vue

### 大小

大中小三种组合，可以和表单输入框进行对应配合。

<demo-radio-size/>

^^^ @/docs/.vuepress/components/demo/radio/size.vue

### 填底的按钮样式

实色填底的单选按钮样式。

<demo-radio-button-solid/>

^^^ @/docs/.vuepress/components/demo/radio/button-solid.vue

## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | - |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的值 | any | - |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |
| options | 以配置形式设置子元素 | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | - |
| size | 大小，只对按钮样式生效 | `large` \| `default` \| `small` | `default` |
| value | 用于设置当前选中的值 | any | - |
| onChange | 选项变化时的回调函数 | Function(e:Event) | - |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |

## 方法

### Radio

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
