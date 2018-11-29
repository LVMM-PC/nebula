# Checkbox

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本用法

简单的 checkbox。

<demo-checkbox-basic/>

^^^ @/docs/.vuepress/components/demo/checkbox/basic.vue

### 不可用

checkbox 不可用。

<demo-checkbox-disabled/>

^^^ @/docs/.vuepress/components/demo/checkbox/disabled.vue

### 受控的 Checkbox

联动 checkbox。

<demo-checkbox-controller/>

^^^ @/docs/.vuepress/components/demo/checkbox/controller.vue

### Checkbox 组

方便的从数组生成 Checkbox 组。

<demo-checkbox-group/>

^^^ @/docs/.vuepress/components/demo/checkbox/group.vue

### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。

<demo-checkbox-check-all/>

^^^ @/docs/.vuepress/components/demo/checkbox/check-all.vue

## API

### 属性

#### Checkbox

| 参数           | 说明                                    | 类型                   | 默认值  |
| -------------- | --------------------------------------- | ---------------------- | ------- |
| autofocus      | 自动获取焦点                            | boolean                | `false` |
| checked        | 指定当前是否选中                        | boolean                | `false` |
| defaultChecked | 初始是否选中                            | boolean                | `false` |
| disabled       | 失效状态                                | boolean                | `false` |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean                | `false` |
| onChange       | 变化时回调函数                          | Function(checkedValue) | -       |

#### Checkbox Group

| 参数         | 说明           | 类型                   | 默认值  |
| ------------ | -------------- | ---------------------- | ------- |
| defaultValue | 默认选中的选项 | string\[]              | `[]`    |
| disabled     | 整组失效       | boolean                | `false` |
| options      | 指定可选项     | string\[]              | `[]`    |
| value        | 指定选中的选项 | string\[]              | `[]`    |
| onChange     | 变化时回调函数 | Function(checkedValue) | -       |

### 方法

#### Checkbox

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
