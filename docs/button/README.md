# Button

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Examples

### Basic

There are `primary` button, `default` button, `dashed` button and `danger` button in antd.

<Button-Basic/>

^^^ @/docs/.vuepress/components/Button/Basic.vue

### Icon

`NebulaButton` components can contain an `NebulaIcon`. This is done by setting the `icon` property or placing an `NebulaIcon` component within the `NebulaButton`

If you want specific control over the positioning and placement of the `NebulaIcon`, then that should be done by placing the `NebulaIcon` component within the `NebulaButton` rather than using the `icon` property.

<Button-Icon/>

^^^ @/docs/.vuepress/components/Button/Icon.vue

### Size

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

<Button-Size/>

^^^ @/docs/.vuepress/components/Button/Size.vue

### Disabled

To mark a button as disabled, add the `disabled` property to the `NebulaButton`.

<Button-Disabled/>

^^^ @/docs/.vuepress/components/Button/Disabled.vue

### Loading

A loading indicator can be added to a button by setting the `loading` property on the `NebulaButton`.

<Button-Loading/>

^^^ @/docs/.vuepress/components/Button/Loading.vue

### Multiple Button

If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `NebulaDropdownButton`.

<Button-Multiple/>

^^^ @/docs/.vuepress/components/Button/Multiple.vue

### Button Group

NebulaButtons can be grouped by placing multiple `NebulaButton` components into a `NebulaButtonGroup`.

The `size` can be set to `large`, `small` or left unset resulting in a default size.

<Button-Group/>

^^^ @/docs/.vuepress/components/Button/Group.vue

### Ghost Button

`ghost` property will make button's background transparent, it is common used in colored background.

<Button-Ghost/>

^^^ @/docs/.vuepress/components/Button/Ghost.vue

### Block Button

`block` property will make the button fit to its parent width.

<Button-Block/>

^^^ @/docs/.vuepress/components/Button/Block.vue

## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

| Property | Description                                                                                                                      | Type                         | Default   |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| disabled | disabled state of button                                                                                                         | boolean                      | `false`   |
| ghost    | make background transparent and invert text and border colors, added in 2.7                                                      | boolean                      | `false`   |
| href     | redirect url of link button                                                                                                      | string                       | -         |
| htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                       | `button`  |
| icon     | set the icon of button, see: Icon component                                                                                      | string                       | -         |
| loading  | set the loading status of button                                                                                                 | boolean \| { delay: number } | `false`   |
| shape    | can be set to `circle` or omitted                                                                                                | string                       | -         |
| size     | can be set to `small` `large` or omitted                                                                                         | string                       | `default` |
| target   | same as target attribute of a, works when href is specified                                                                      | string                       | -         |
| type     | can be set to `primary` `ghost` `dashed` `danger`(added in 2.7) or omitted (meaning `default`)                                   | string                       | `default` |
| onClick  | set the handler to handle `click` event                                                                                          | function                     | -         |
| block    | option to fit button width to its parent width                                                                                   | boolean                      | `false`   |

`<NebulaButton>Hello world!</NebulaButton>` will be rendered into `<button><span>Hello world!</span></button>`, and all the properties which are not listed above will be transferred to the `<button>` tag.

`<NebulaButton href="http://example.com">Hello world!</NebulaButton>` will be rendered into `<a href="http://example.com"><span>Hello world!</span></a>`.
