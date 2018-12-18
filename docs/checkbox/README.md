# Checkbox

Checkbox component.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

### Basic

Basic usage of checkbox.

<demo-checkbox-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/checkbox/basic.vue
</demo-code-box>

### Disabled

Disabled checkbox.

<demo-checkbox-disabled/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/checkbox/disabled.vue
</demo-code-box>

### Controlled Checkbox

Communicated with other components.

<demo-checkbox-controller/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/checkbox/controller.vue
</demo-code-box>

### Checkbox Group

Generate a group of checkboxes from an array.

<demo-checkbox-group/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/checkbox/group.vue
</demo-code-box>

### Check all

The `indeterminate` property can help you to achieve a 'check all' effect.

<demo-checkbox-check-all/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/checkbox/check-all.vue
</demo-code-box>

## API

### Props

#### Checkbox

| Property       | Description                                                           | Type              | Default |
| -------------- | --------------------------------------------------------------------- | ----------------- | ------- |
| autoFocus      | get focus when component mounted                                      | boolean           | false   |
| checked        | Specifies whether the checkbox is selected.                           | boolean           | false   |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected. | boolean           | false   |
| disabled       | Disable checkbox                                                      | boolean           | false   |
| indeterminate  | indeterminate checked state of checkbox                               | boolean           | false   |
| onChange       | The callback function that is triggered when the state changes.       | Function(e:Event) | -       |

#### Checkbox Group

| Property     | Description                                                     | Type                   | Default |
| ------------ | --------------------------------------------------------------- | ---------------------- | ------- |
| defaultValue | Default selected value                                          | string\[]              | \[]     |
| disabled     | Disable all checkboxes                                          | boolean                | false   |
| options      | Specifies options                                               | string\[]              | \[]     |
| value        | Used for setting the currently selected value.                  | string\[]              | \[]     |
| onChange     | The callback function that is triggered when the state changes. | Function(checkedValue) | -       |

### Methods

#### Checkbox

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
