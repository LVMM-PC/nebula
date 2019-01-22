# Switch 开关选择器

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本

最简单的用法。

<demo-switch-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/basic.vue
</demo-code-box>

### 不可用

Switch 失效状态。

<demo-switch-disabled/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/disabled.vue
</demo-code-box>

### 文字和图标

带有文字和图标。

<demo-switch-switch-text/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/switch-text.vue
</demo-code-box>

### 两种大小

`size="small"` 表示小号开关。

<demo-switch-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/size.vue
</demo-code-box>

### 加载中

标识开关操作仍在执行中。

<demo-switch-loading/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/loading.vue
</demo-code-box>

## API

| 参数              | 说明                                | 类型                      | 默认值  |
| ----------------- | ----------------------------------- | ------------------------- | ------- |
| autoFocus         | 组件自动获取焦点                    | boolean                   | false   |
| checked           | 指定当前是否选中                    | boolean                   | false   |
| checkedChildren   | 选中时的内容                        | string\|ReactNode         |         |
| defaultChecked    | 初始是否选中                        | boolean                   | false   |
| disabled          | 是否禁用                            | boolean                   | false   |
| loading           | 加载中的开关                        | boolean                   | false   |
| size              | 开关大小，可选值：`default` `small` | string                    | default |
| unCheckedChildren | 非选中时的内容                      | string\|ReactNode         |         |
| onChange          | 变化时回调函数                      | Function(checked:Boolean) |         |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
