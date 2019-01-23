# Tooltip

A simple text popup tip.

## When To Use

- The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
- To provide an explanation of a `button/text/operation`. It's often used instead of the html `title` attribute.

## Examples

### Basic

The simplest usage.

<demo-tooltip-basic/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/tooltip/basic.vue
</demo-code-box>

### Placement

The ToolTip has 12 placements choice.

<demo-tooltip-placement/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/tooltip/placement.vue
</demo-code-box>

### Arrow pointing at the center

By specifying `arrowPointAtCenter` prop, the arrow will point to the center of the target element.

<demo-tooltip-arrow-point-at-center/>

<demo-code-box>
^^^ @/docs/.vuepress/components/demo/tooltip/arrow-point-at-center.vue
</demo-code-box>

## API

| Property | Description                   | Type                           | Default |
| -------- | ----------------------------- | ------------------------------ | ------- |
| title    | The text shown in the tooltip | string\|VueNode\|() => VueNode | -       |

### Common API

The following APIs are shared by Tooltip, Popconfirm, Popover.

| Property           | Description                                                                                                                                                                                           | Type                                           | Default             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------- |
| arrowPointAtCenter | Whether the arrow is pointed at the center of target                                                                                                                                                  | boolean                                        | `false`             |
| autoAdjustOverflow | Whether to adjust popup placement automatically when popup is off screen                                                                                                                              | boolean                                        | `true`              |
| defaultVisible     | Whether the floating tooltip card is visible by default                                                                                                                                               | boolean                                        | `false`             |
| getPopupContainer  | The DOM container of the tip, the default behavior is to create a `div` element in `body`                                                                                                             | Function(triggerNode)                          | () => document.body |
| mouseEnterDelay    | Delay in seconds, before tooltip is shown on mouse enter                                                                                                                                              | number                                         | 0                   |
| mouseLeaveDelay    | Delay in seconds, before tooltip is hidden on mouse leave                                                                                                                                             | number                                         | 0.1                 |
| overlayClassName   | Class name of the tooltip card                                                                                                                                                                        | string                                         | -                   |
| overlayStyle       | Style of the tooltip card                                                                                                                                                                             | object                                         | -                   |
| placement          | The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string                                         | `top`               |
| trigger            | Tooltip trigger mode                                                                                                                                                                                  | `hover` \| `focus` \| `click` \| `contextMenu` | `hover`             |
| visible            | Whether the floating tooltip card is visible or not                                                                                                                                                   | boolean                                        | `false`             |
| onVisibleChange    | Callback executed when visibility of the tooltip card is changed                                                                                                                                      | (visible) => void                              | -                   |
| align              | this value will be merged into placement's config, please refer to the settings                                                                                                                       | Object                                         | -                   |

## Note

Please ensure that the child node of `Tooltip` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.
