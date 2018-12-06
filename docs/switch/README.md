# Switch

Switching Selector.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## Examples

### Basic

The most basic usage.

<demo-switch-basic/>

^^^ @/docs/.vuepress/components/demo/switch/basic.vue

### Disabled

Disabled state of `Switch`.

<demo-switch-disabled/>

^^^ @/docs/.vuepress/components/demo/switch/disabled.vue

### Text & icon

With text and icon.

<demo-switch-switch-text/>

^^^ @/docs/.vuepress/components/demo/switch/switch-text.vue

### Two sizes

`size="small"` represents a small sized switch.

<demo-switch-size/>

^^^ @/docs/.vuepress/components/demo/switch/size.vue

### Loading

Mark a pending state of switch.

<demo-switch-loading/>

^^^ @/docs/.vuepress/components/demo/switch/loading.vue

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| checked | determine whether the `Switch` is checked | boolean | false |
| checkedChildren | content to be shown when the state is checked | string\|ReactNode |  |
| defaultChecked | to set the initial state | boolean | false |
| disabled | Disable switch | boolean | false |
| loading | loading state of switch | boolean | false |
| size | the size of the `Switch`, options: `default` `small` | string | default |
| unCheckedChildren | content to be shown when the state is unchecked | string\|ReactNode |  |
| onChange | a callback function, can be executed when the checked state is changing | Function(checked:Boolean) |  |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
