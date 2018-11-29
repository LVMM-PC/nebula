# Radio

## When To Use

- Used to select a single state in multiple options.
- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice, which makes there shouldn't be too many of them.

## Examples

### Basic

The simplest use.

<demo-radio-basic/>

^^^ @/docs/.vuepress/components/demo/radio/basic.vue

### Disabled

Radio unavailable.

<demo-radio-disabled/>

^^^ @/docs/.vuepress/components/demo/radio/disabled.vue

### Radio Group

A group of radio components.

<demo-radio-group/>

^^^ @/docs/.vuepress/components/demo/radio/group.vue

### Vertical RadioGroup

Vertical RadioGroup, with more radios.

<demo-radio-group-more/>

^^^ @/docs/.vuepress/components/demo/radio/group-more.vue

### RadioGroup group - optional

Render radios by configuring `options`.

<demo-radio-group-options/>

^^^ @/docs/.vuepress/components/demo/radio/group-options.vue

### Radio style

The combination of radio button style.

<demo-radio-button/>

^^^ @/docs/.vuepress/components/demo/radio/button.vue

### RadioGroup with name

Passing the `name` property to all `input[type="radio"]` that are in the same RadioGroup. It is usually used to let the browser see your RadioGroup as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same RadioGroup.

<demo-radio-group-with-name/>

^^^ @/docs/.vuepress/components/demo/radio/group-with-name.vue

### Size

There are three sizes available: large, medium, and small. It can coordinate with input box.

<demo-radio-size/>

^^^ @/docs/.vuepress/components/demo/radio/size.vue

### Solid radio button

Solid radio button style.

<demo-radio-button-solid/>

^^^ @/docs/.vuepress/components/demo/radio/button-solid.vue

## API

### Radio

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| checked | Specifies whether the radio is selected. | boolean | - |
| defaultChecked | Specifies the initial state: whether or not the radio is selected. | boolean | false |
| disabled | Disable radio | boolean | false |
| value | According to value for comparison, to determine whether the selected | any | - |

### RadioGroup

Radio group can wrap a group of `Radio`。

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | Default selected value | any | - |
| disabled | Disable all radio buttons | boolean | false |
| name | The `name` property of all `input[type="radio"]` children | string | - |
| options | set children optional | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | - |
| size | size for radio button style | `large` \| `default` \| `small` | `default` |
| value | Used for setting the currently selected value. | any | - |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | - |
| buttonStyle | style type of radio button | `outline` \| `solid` | `outline` |

## Methods

### Radio

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
