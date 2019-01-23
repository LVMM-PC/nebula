# Select

Select component to select value from options.

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.
- Utilizing [Radio](/radio/) is recommended when there are fewer total options (less than 5).

## Examples

### Basic Usage

Basic Usage.

<demo-select-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/basic.vue
</demo-code-box>

### Select with search field

Search the options while expanded.

<demo-select-search/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/search.vue
</demo-code-box>

### multiple selection

Multiple selection, selecting from existing items (scroll the menu).

<demo-select-multiple/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/multiple.vue
</demo-code-box>

### Sizes

The height of the input field for the select defaults to 30px. If size is set to large, the height will be 40px, and if set to small, 24px.

<demo-select-size/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/size.vue
</demo-code-box>

### Tags

Select with tags, transform input to tag (scroll the menu)

<demo-select-tags/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/tags.vue
</demo-code-box>

### Option Group

Using `OptGroup` to group the options.

<demo-select-select-optgroup/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/select-optgroup.vue
</demo-code-box>

### coordinate

Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

Using the `Cascader` component is strongly recommended instead as it is more flexible and capable.

<demo-select-coordinate/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/coordinate.vue
</demo-code-box>

### Search Box

Search with remote data.

<demo-select-search-box/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/search-box.vue
</demo-code-box>

### Get value of selected item

As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.

The label of the selected item will be packed as an object for passing to the onChange callback.

<demo-select-label-in-value/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/label-in-value.vue
</demo-code-box>

### Automatic tokenization

Try to copy `Lucy,Jack` to the input. Only available in tags and multiple mode.

<demo-select-automatic-tokenization/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/automatic-tokenization.vue
</demo-code-box>

### Search and Select Users

A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.

<demo-select-select-users/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/select/select-users.vue
</demo-code-box>

## API

```html
<NebulaSelect>
  <NebulaOption value="lucy">lucy</Option>
</NebulaSelect>
```

### Select props

| Property                 | Description                                                                                                                                                                                                                                                    | Type                                            | Default                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------------- |
| allowClear               | Show clear button.                                                                                                                                                                                                                                             | boolean                                         | false                                              |
| autoFocus                | Get focus by default                                                                                                                                                                                                                                           | boolean                                         | false                                              |
| defaultActiveFirstOption | Whether active first option by default                                                                                                                                                                                                                         | boolean                                         | true                                               |
| defaultValue             | Initial selected option.                                                                                                                                                                                                                                       | string\|string\[]<br />number\|number\[]        | -                                                  |
| disabled                 | Whether disabled select                                                                                                                                                                                                                                        | boolean                                         | false                                              |
| dropdownClassName        | className of dropdown menu                                                                                                                                                                                                                                     | string                                          | -                                                  |
| dropdownMatchSelectWidth | Whether dropdown's width is same with select.                                                                                                                                                                                                                  | boolean                                         | true                                               |
| dropdownStyle            | style of dropdown menu                                                                                                                                                                                                                                         | object                                          | -                                                  |
| filterOption             | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option)         | true                                               |
| firstActiveValue         | Value of action option by default                                                                                                                                                                                                                              | string\|string\[]                               | -                                                  |
| getPopupContainer        | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative.                                                                                       | function(triggerNode)                           | () => document.body                                |
| labelInValue             | whether to embed label in value, turn the format of value from `string` to `{key: string, label: VueNode}`                                                                                                                                                     | boolean                                         | false                                              |
| maxTagCount              | Max tag count to show                                                                                                                                                                                                                                          | number                                          | -                                                  |
| maxTagPlaceholder        | Placeholder for not showing tags                                                                                                                                                                                                                               | VueNode/function(omittedValues)                 | -                                                  |
| mode                     | Set mode of Select (Support after 2.9)                                                                                                                                                                                                                         | 'default' \| 'multiple' \| 'tags'               | 'default'                                          |
| notFoundContent          | Specify content to show when no result matches..                                                                                                                                                                                                               | string                                          | 'Not Found'                                        |
| optionFilterProp         | Which prop value of option will be used for filter if filterOption is true                                                                                                                                                                                     | string                                          | value                                              |
| optionLabelProp          | Which prop value of option will render as content of select.                                                                                                                                                                                                   | string                                          | `value` for `combobox`, `children` for other modes |
| placeholder              | Placeholder of select                                                                                                                                                                                                                                          | string\|VueNode                                 | -                                                  |
| showArrow                | Whether to show the drop-down arrow                                                                                                                                                                                                                            | boolean                                         | true                                               |
| showSearch               | Whether show search input in single mode.                                                                                                                                                                                                                      | boolean                                         | false                                              |
| size                     | Size of Select input. `default` `large` `small`                                                                                                                                                                                                                | string                                          | default                                            |
| tokenSeparators          | Separator used to tokenize on tag/multiple mode                                                                                                                                                                                                                | string\[]                                       |                                                    |
| value                    | Current selected option.                                                                                                                                                                                                                                       | string\|number\|string\[]\|number\[]            | -                                                  |
| onBlur                   | Called when blur                                                                                                                                                                                                                                               | function                                        | -                                                  |
| onChange                 | Called when select an option or input value change, or value of input is changed in combobox mode                                                                                                                                                              | function(value, option:Option/Array&lt;Option>) | -                                                  |
| onDeselect               | Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only.                                                                                                        | function(value, option:Option)                  | -                                                  |
| onFocus                  | Called when focus                                                                                                                                                                                                                                              | function                                        | -                                                  |
| onInputKeyDown           | Called when key pressed                                                                                                                                                                                                                                        | function                                        | -                                                  |
| onMouseEnter             | Called when mouse enter                                                                                                                                                                                                                                        | function                                        | -                                                  |
| onMouseLeave             | Called when mouse leave                                                                                                                                                                                                                                        | function                                        | -                                                  |
| onPopupScroll            | Called when dropdown scrolls                                                                                                                                                                                                                                   | function                                        | -                                                  |
| onSearch                 | Callback function that is fired when input changed.                                                                                                                                                                                                            | function(value: string)                         |                                                    |
| onSelect                 | Called when a option is selected, the params are option's value (or key) and option instance.                                                                                                                                                                  | function(value, option:Option)                  | -                                                  |

### Select Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |

### Option props

| Property | Description                                                                                                                      | Type           | Default |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| disabled | Disable this option                                                                                                              | boolean        | false   |
| key      | Same usage as `value`. If Vue request you to set this property, you can set it to value of option, and then omit value property. | string         |         |
| title    | `title` of Select after select this Option                                                                                       | string         | -       |
| value    | default to filter with this property                                                                                             | string\|number | -       |

### OptGroup props

| Property | Description | Type                | Default |
| -------- | ----------- | ------------------- | ------- |
| key      |             | string              | -       |
| label    | Group label | string\|Vue.Element | -       |
