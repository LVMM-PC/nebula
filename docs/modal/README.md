# Modal

Modal dialogs.

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting
the user's workflow, you can use `this.$method` to create a new floating layer over the current page to get user
feedback or display information.
Additionally, if you need show a simple confirmation dialog, you can use `this.$confirm()`,
and so on.

## Examples

### Basic

Basic modal.

<demo-modal-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/basic.vue
</demo-code-box>

### Asynchronously close

Asynchronously close a modal dialog when a user clicked OK button, for example,
you can use this pattern when you submit a form.

<demo-modal-async/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/async.vue
</demo-code-box>

### Customized Footer

A more complex example which define a customized footer button bar,
the dialog will change to loading state after clicking submit button, when the loading is over,
the modal dialog will be closed.

You could set `footer` to `null` if you don't need default footer buttons.

<demo-modal-customized-footer/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/customized-footer.vue
</demo-code-box>

### Confirmation modal dialog

To use `this.$confirm()` to popup a confirmation modal dialog.

<demo-modal-confirm/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/confirm.vue
</demo-code-box>

### Confirmation modal dialog

To use `this.$confirm()` to popup confirmation modal dialog. Let onCancel/onOk function return a promise object to
delay closing the dialog.

<demo-modal-confirm-promise/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/confirm-promise.vue
</demo-code-box>

### Information modal dialog

In the various types of information modal dialog, only one button to close dialog is provided.

<demo-modal-info/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/info.vue
</demo-code-box>

### Internationalization

To customize the text of the buttons, you need to set `okText` and `cancelText` props.

<demo-modal-locale/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/locale.vue
</demo-code-box>

### Manual to update destroy

Manually updateing and destroying a modal from `this.$method`.

<demo-modal-manual/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/manual.vue
</demo-code-box>

### To customize the position of modal

You can use `centered`,`style.top` or other styles to
set position of modal dialog.

<demo-modal-position/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/position.vue
</demo-code-box>

### Customize footer buttons props

Passing `okButtonProps` and `cancelButtonProps` can customize the ok button and cancel button props.

<demo-modal-button-props/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/button-props.vue
</demo-code-box>

## API

| Property          | Description                                                                                                | Type                    | Default               |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- |
| afterClose        | Specify a function that will be called when modal is closed completely.                                    | function                | -                     |
| bodyStyle         | Body style for modal body element. Such as height, padding etc.                                            | object                  | {}                    |
| cancelText        | Text of the Cancel button                                                                                  | string                  | `Cancel`              |
| centered          | Centered Modal                                                                                             | Boolean                 | `false`               |
| closable          | Whether a close (x) button is visible on top right of the modal dialog or not                              | boolean                 | true                  |
| confirmLoading    | Whether to apply loading visual effect for OK button or not                                                | boolean                 | false                 |
| destroyOnClose    | Whether to unmount child components on onClose                                                             | boolean                 | false                 |
| footer            | Footer content, set as `footer={null}` when you don't need default buttons                                 | string\|VueNode         | OK and Cancel buttons |
| getContainer      | Return the mount node for Modal                                                                            | (instance): HTMLElement | () => document.body   |
| mask              | Whether show mask or not.                                                                                  | Boolean                 | true                  |
| maskClosable      | Whether to close the modal dialog when the mask (area outside the modal) is clicked                        | boolean                 | true                  |
| maskStyle         | Style for modal's mask element.                                                                            | object                  | {}                    |
| okText            | Text of the OK button                                                                                      | string                  | `OK`                  |
| okType            | Button `type` of the OK button                                                                             | string                  | `primary`             |
| okButtonProps     | The ok button props                                                                                        | [ButtonProps](/button/) | -                     |
| cancelButtonProps | The cancel button props                                                                                    | [ButtonProps](/button/) | -                     |
| style             | Style of floating layer, typically used at least for adjusting the position.                               | object                  | -                     |
| title             | The modal dialog's title                                                                                   | string\|VueNode         | -                     |
| visible           | Whether the modal dialog is visible or not                                                                 | boolean                 | false                 |
| width             | Width of the modal dialog                                                                                  | string\|number          | 420                   |
| wrapClassName     | The class name of the container of the modal dialog                                                        | string                  | -                     |
| zIndex            | The `z-index` of the Modal                                                                                 | Number                  | 1000                  |
| onCancel          | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | function(e)             | -                     |
| onOk              | Specify a function that will be called when a user clicks the OK button                                    | function(e)             | -                     |

#### Note

> The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set `destroyOnClose` on it.

### this.method()

There are five ways to display the information based on the content's nature:

- `this.$info`
- `this.$success`
- `this.$error`
- `this.$warning`
- `this.$confirm`

The items listed above are all functions, expecting a settings object as parameter.
The properties of the object are follows:

| Property          | Description                                                                                                                                                                                                                                                                              | Type                        | Default           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------- |
| autoFocusButton   | Specify which button to autofocus                                                                                                                                                                                                                                                        | null\|string: `ok` `cancel` | `ok`              |
| cancelText        | Text of the Cancel button                                                                                                                                                                                                                                                                | string                      | `Cancel`          |
| centered          | Centered Modal                                                                                                                                                                                                                                                                           | Boolean                     | `false`           |
| className         | className of container                                                                                                                                                                                                                                                                   | string                      | -                 |
| content           | Content                                                                                                                                                                                                                                                                                  | string\|VueNode             | -                 |
| iconType          | Icon `type` of the Icon component                                                                                                                                                                                                                                                        | string                      | `question-circle` |
| keyboard          | Whether support press esc to close                                                                                                                                                                                                                                                       | Boolean                     | true              |
| maskClosable      | Whether to close the modal dialog when the mask (area outside the modal) is clicked                                                                                                                                                                                                      | Boolean                     | `false`           |
| okText            | Text of the OK button                                                                                                                                                                                                                                                                    | string                      | `OK`              |
| okType            | Button `type` of the OK button                                                                                                                                                                                                                                                           | string                      | `primary`         |
| okButtonProps     | The ok button props                                                                                                                                                                                                                                                                      | [ButtonProps](/button/)     | -                 |
| cancelButtonProps | The cancel button props                                                                                                                                                                                                                                                                  | [ButtonProps](/button/)     | -                 |
| title             | Title                                                                                                                                                                                                                                                                                    | string\|VueNode             | -                 |
| width             | Width of the modal dialog                                                                                                                                                                                                                                                                | string\|number              | 420               |
| zIndex            | The `z-index` of the Modal                                                                                                                                                                                                                                                               | Number                      | 1000              |
| onCancel          | Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed | function                    | -                 |
| onOk              | Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed     | function                    | -                 |

All the `this.$method`s will return a reference, and then we can update and close the modal dialog by the reference.

```jsx
const modal = this.$info();

modal.update({
  title: "Updated title",
  content: "Updated content"
});

modal.destroy();
```
