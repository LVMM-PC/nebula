import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./build/nebula-ui.rollup.js",
  output: {
    file: "./dist/nebula-ui.esm.js",
    format: "esm"
  },
  plugins: [commonjs({})]
};
