# InputNumber

Enter a number within certain range with the mouse or keyboard.

## When To Use

When a numeric value needs to be provided.

## Examples

### Basic

Numeric-only input box.

<demo-input-number-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/basic.vue
</demo-code-box>

### Sizes

There are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.

<demo-input-number-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/size.vue
</demo-code-box>

### Disabled

Click the button to toggle between available and disabled states.

<demo-input-number-disabled/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/disabled.vue
</demo-code-box>

### Decimals

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.

<demo-input-number-digit/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input-number/digit.vue
</demo-code-box>

### Formatter

Display value within it's situation with `formatter`, and we usually use `parser` at the same time.

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
