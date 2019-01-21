# Input

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

## When To Use

- A user input in a form field is needed.
- A search input is required.

## Examples

### Basic

The most basic usage.

<demo-input-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/basic.vue
</demo-code-box>

### Three sizes of Input

There are three sizes of an Input box: `large` (40px)、`default` (30px) and `small` (24px).

<demo-input-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/size.vue
</demo-code-box>

### Pre / Post tab

Using pre & post tabs example.

<demo-input-addon/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/addon.vue
</demo-code-box>

### Input Group

Input.Group example

Note: You don't need `Col` to control the width in the `compact` mode.

<demo-input-group/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/group.vue
</demo-code-box>

### Search box

Example of creating a search box by grouping a standard input with a search button, added in `2.5.0`.

<demo-input-search-input/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/search-input.vue
</demo-code-box>

### TextArea

For multi-line input.

<demo-input-textarea/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/textarea.vue
</demo-code-box>

### Autosizing the height to fit the content

`autosize` prop for a `textarea` type of `Input` makes the height to automatically adjust based on the content.
An options object can be provided to `autosize` to specify the minimum and maximum number of lines the textarea will automatically adjust.

<demo-input-autosize-textarea/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/autosize-textarea.vue
</demo-code-box>

### Prefix and Suffix

Add prefix or suffix icons inside input.

<demo-input-presuffix/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/input/presuffix.vue
</demo-code-box>

## API

### Input

| Property     | Description                                                                                                                                                        | Type              | Default   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | --------- |
| addonAfter   | The label text displayed after (on the right side of) the input field.                                                                                             | string\|ReactNode |           |
| addonBefore  | The label text displayed before (on the left side of) the input field.                                                                                             | string\|ReactNode |           |
| defaultValue | The initial input content                                                                                                                                          | string            |           |
| disabled     | Whether the input is disabled.                                                                                                                                     | boolean           | false     |
| id           | The ID for input                                                                                                                                                   | string            |           |
| prefix       | The prefix icon for the Input.                                                                                                                                     | string\|ReactNode |           |
| size         | The size of the input box. Note: in the context of a form, the `large` size is used. Available: `large` `default` `small`                                          | string            | `default` |
| suffix       | The suffix icon for the Input.                                                                                                                                     | string\|ReactNode |           |
| type         | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)(use `Input.TextArea` instead of `type="textarea"`) | string            | `text`    |
| value        | The input content value                                                                                                                                            | string            |           |
| onChange     | callback when user input                                                                                                                                           | function(e)       |           |
| onPressEnter | The callback function that is triggered when Enter key is pressed.                                                                                                 | function(e)       |           |

> When `Input` is used in a `Form.Item` context, if the `Form.Item` has the `id` and `options` props defined
> then `value`, `defaultValue`, and `id` props of `Input` are automatically set.

The rest of the props of Input are exactly the same as the original [input](https://facebook.github.io/react/docs/events.html#supported-events).

### Input.TextArea

> If you are using `antd@<2.12`, please use `Input[type=textarea]`.

| Property     | Description                                                                                   | Type            | Default |
| ------------ | --------------------------------------------------------------------------------------------- | --------------- | ------- |
| autosize     | Height autosize feature, can be set to `true|false` or an object `{ minRows: 2, maxRows: 6 }` | boolean\|object | false   |
| defaultValue | The initial input content                                                                     | string          |         |
| value        | The input content value                                                                       | string          |         |
| onPressEnter | The callback function that is triggered when Enter key is pressed.                            | function(e)     |         |

The rest of the props of `Input.TextArea` are the same as the original [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

#### Input.Search

`Added in 2.5.0`

| Property    | Description                                                                                   | Type                   | Default |
| ----------- | --------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| enterButton | to show an enter button after input                                                           | boolean\|ReactNode     | false   |
| onSearch    | The callback function that is triggered when you click on the search-icon or press Enter key. | function(value, event) |         |

Supports all props of `Input`.

#### Input.Group

| Property | Description                                                                                                       | Type    | Default   |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ------- | --------- |
| compact  | Whether use compact style                                                                                         | boolean | false     |
| size     | The size of `Input.Group` specifies the size of the included `Input` fields. Available: `large` `default` `small` | string  | `default` |

```html
<NebulaInputGroup>
  <NebulaInput />
  <NebulaInput />
</NebulaInputGroup>
```
