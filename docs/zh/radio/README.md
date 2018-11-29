# Radio

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

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

### 属性

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] |
| disabled | 整组失效 | boolean | false |
| options | 指定可选项 | string\[] | \[] |
| value | 指定选中的选项 | string\[] | \[] |
| onChange | 变化时回调函数 | Function(checkedValue) | - |

### 方法

#### Checkbox

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
