# Switch

Switching Selector.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## Examples

### Basic

The most basic usage.

<demo-switch-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/basic.vue
</demo-code-box>

### Disabled

Disabled state of `Switch`.

<demo-switch-disabled/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/disabled.vue
</demo-code-box>

### Text & icon

With text and icon.

<demo-switch-switch-text/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/switch-text.vue
</demo-code-box>

### Two sizes

`size="small"` represents a small sized switch.

<demo-switch-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/size.vue
</demo-code-box>

### Loading

Mark a pending state of switch.

<demo-switch-loading/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/switch/loading.vue
</demo-code-box>

## API

| Property          | Description                                                             | Type                      | Default |
| ----------------- | ----------------------------------------------------------------------- | ------------------------- | ------- |
| autoFocus         | get focus when component mounted                                        | boolean                   | false   |
| checked           | determine whether the `Switch` is checked                               | boolean                   | false   |
| checkedChildren   | content to be shown when the state is checked                           | string\|VueNode           |         |
| defaultChecked    | to set the initial state                                                | boolean                   | false   |
| disabled          | Disable switch                                                          | boolean                   | false   |
| loading           | loading state of switch                                                 | boolean                   | false   |
| size              | the size of the `Switch`, options: `default` `small`                    | string                    | default |
| unCheckedChildren | content to be shown when the state is unchecked                         | string\|VueNode           |         |
| onChange          | a callback function, can be executed when the checked state is changing | Function(checked:Boolean) |         |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
