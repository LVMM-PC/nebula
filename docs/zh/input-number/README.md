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

| property         | description                                                                                       | type                                      | default   |
| ---------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | --------- |
| autoFocus        | get focus when component mounted                                                                  | boolean                                   | false     |
| defaultValue     | initial value                                                                                     | number                                    |           |
| disabled         | disable the input                                                                                 | boolean                                   | false     |
| formatter        | Specifies the format of the value presented                                                       | function(value: number \| string): string | -         |
| max              | max value                                                                                         | number                                    | Infinity  |
| min              | min value                                                                                         | number                                    | -Infinity |
| parser           | Specifies the value extracted from formatter                                                      | function( string): number                 | -         |
| precision        | precision of input value                                                                          | number                                    | -         |
| decimalSeparator | decimal separator                                                                                 | string                                    | -         |
| size             | width of input box                                                                                | string                                    | -         |
| step             | The number to which the current value is increased or decreased. It can be an integer or decimal. | number\|string                            | 1         |
| value            | current value                                                                                     | number                                    |           |
| onChange         | The callback triggered when the value is changed.                                                 | function(value: number \| string)         |           |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
