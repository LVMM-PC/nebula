import Vue from "vue";

// @ts-ignore
const filterProps = (props, propsData = {}) => {
  const res = {};
  Object.keys(props).forEach(k => {
    if (k in propsData || props[k] !== undefined) {
      // @ts-ignore
      res[k] = props[k];
    }
  });
  return res;
};

const getProps = (instance: Vue) => {
  const { $options = {}, $props = {} } = instance;
  return filterProps($props);
};

const hasProp = (instance: Vue, prop: string) => {
  const $options = instance.$options || {};
  const propsData = $options.propsData || {};
  return prop in propsData;
};

export { hasProp, filterProps, getProps };

export default hasProp;
