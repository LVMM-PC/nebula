# InputNumber

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 代码演示

### 基本

数字输入框。

<demo-input-number-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/basic.vue
</demo-code-box>

### 三种大小

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

<demo-input-number-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/size.vue
</demo-code-box>

### 不可用

点击按钮切换可用状态。

<demo-input-number-disabled/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/disabled.vue
</demo-code-box>

### 小数

和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

<demo-input-number-digit/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/digit.vue
</demo-code-box>

### 格式化展示

通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

<demo-input-number-formatter/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/formatter.vue
</demo-code-box>

## API

属性如下

| 成员             | 说明                                                       | 类型                                      | 默认值    |
| ---------------- | ---------------------------------------------------------- | ----------------------------------------- | --------- |
| autoFocus        | 自动获取焦点                                               | boolean                                   | false     |
| defaultValue     | 初始值                                                     | number                                    |           |
| disabled         | 禁用                                                       | boolean                                   | false     |
| formatter        | 指定输入框展示值的格式                                     | function(value: number \| string): string | -         |
| max              | 最大值                                                     | number                                    | Infinity  |
| min              | 最小值                                                     | number                                    | -Infinity |
| parser           | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number                 | -         |
| precision        | 数值精度                                                   | number                                    | -         |
| decimalSeparator | 小数点                                                     | string                                    | -         |
| size             | 输入框大小                                                 | string                                    | 无        |
| step             | 每次改变步数，可以为小数                                   | number\|string                            | 1         |
| value            | 当前值                                                     | number                                    |           |
| onChange         | 变化回调                                                   | Function(value: number \| string)         |           |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
