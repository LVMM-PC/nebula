# Modal 模态框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `this.$method` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `this.$confirm()` 等方法。

## 代码演示

### 基本

第一个对话框。

<demo-modal-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/basic.vue
</demo-code-box>

### 异步关闭

点击确定后异步关闭对话框，例如提交表单。

<demo-modal-async/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/async.vue
</demo-code-box>

### 自定义页脚

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

<demo-modal-customized-footer/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/customized-footer.vue
</demo-code-box>

### 确认对话框

使用 `this.$confirm()` 可以快捷地弹出确认框。

<demo-modal-confirm/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/confirm.vue
</demo-code-box>

### 确认对话框

使用 `this.$confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭

<demo-modal-confirm-promise/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/confirm-promise.vue
</demo-code-box>

### 信息提示

各种类型的信息提示，只提供一个按钮用于关闭。

<demo-modal-info/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/info.vue
</demo-code-box>

### 国际化

设置 `okText` 与 `cancelText` 以自定义按钮文字。

<demo-modal-locale/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/locale.vue
</demo-code-box>

### 手动更新和移除

手动更新和关闭 `this.$method` 方式创建的对话框。

<demo-modal-manual/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/manual.vue
</demo-code-box>

### 自定义位置

使用 `centered` 或类似 `style.top` 的样式来设置对话框位置。

<demo-modal-position/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/position.vue
</demo-code-box>

### 自定义页脚按钮属性

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。

<demo-modal-button-props/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/modal/button-props.vue
</demo-code-box>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | 无 |
| bodyStyle | Modal body 样式 | object | {} |
| cancelText | 取消按钮文字 | string | 取消 |
| centered | 垂直居中展示 Modal | Boolean | `false` |
| closable | 是否显示右上角的关闭按钮 | boolean | true |
| confirmLoading | 确定按钮 loading | boolean | 无 |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | string\|ReactNode | 确定取消按钮 |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body |
| keyboard | 是否支持键盘esc关闭 | boolean | true |
| mask | 是否展示遮罩 | Boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| maskStyle | 遮罩样式 | object | {} |
| okText | 确认按钮文字 | string | 确定 |
| okType | 确认按钮类型 | string | primary |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button) | - |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button) | - |
| style | 可用于设置浮层的样式，调整浮层位置等 | object | - |
| title | 标题 | string\|ReactNode | 无 |
| visible | 对话框是否可见 | boolean | 无 |
| width | 宽度 | string\|number | 420 |
| wrapClassName | 对话框外层容器的类名 | string | - |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | 无 |
| onOk | 点击确定回调 | function(e) | 无 |

#### 注意

> `<Modal />` 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnClose`。

### Modal.method()

包括：

- `this.$info`
- `this.$success`
- `this.$error`
- `this.$warning`
- `this.$confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocusButton | 指定自动获得焦点的按钮 | null\|string: `ok` `cancel` | `ok` |
| cancelText | 取消按钮文字 | string | 取消 |
| centered | 垂直居中展示 Modal | Boolean | `false` |
| className | 容器类名 | string | - |
| content | 内容 | string\|ReactNode | 无 |
| iconType | 图标 Icon 类型 | string | question-circle |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | `false` |
| okText | 确认按钮文字 | string | 确定 |
| okType | 确认按钮类型 | string | primary |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button) | - |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button) | - |
| title | 标题 | string\|ReactNode | 无 |
| width | 宽度 | string\|number | 420 |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function | 无 |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function | 无 |

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

```jsx
const modal = this.$info();

modal.update({
  title: '修改的标题',
  content: '修改的内容',
});

modal.destroy();
```
