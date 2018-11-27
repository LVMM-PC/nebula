const filterProps = (props: any, propsData = {}) => {
  const res: any = {};
  Object.keys(props).forEach(k => {
    if (k in propsData || props[k] !== undefined) {
      res[k] = props[k];
    }
  });
  return res;
};

export function filterEmpty(children = []) {
  // @ts-ignore
  return children.filter(c => c.tag || (c.text && c.text.trim() !== ""));
}

function getType(fn: any) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}

const getAttrs = (ele: any) => {
  let data = ele.data;
  if (ele.$vnode) {
    data = ele.$vnode.data;
  }
  return data ? data.attrs || {} : {};
};

const getOptionProps = (instance: any) => {
  if (instance.componentOptions) {
    const componentOptions = instance.componentOptions;
    const { propsData = {}, Ctor = {} } = componentOptions;
    const props = (Ctor.options || {}).props || {};
    const res: any = {};
    for (const [k, v] of Object.entries(props)) {
      // @ts-ignore
      const def = v.default;
      if (def !== undefined) {
        res[k] =
          // @ts-ignore
          typeof def === "function" && getType(v.type) !== "Function"
            ? def.call(instance)
            : def;
      }
    }
    return { ...res, ...propsData };
  }
  const { $options = {}, $props = {} } = instance;
  return filterProps($props);
};

const hasProp = (instance: any, prop: string) => {
  const $options = instance.$options || {};
  const propsData = $options.propsData || {};
  return prop in propsData;
};

export { hasProp, filterProps, getAttrs, getOptionProps };

export default hasProp;
