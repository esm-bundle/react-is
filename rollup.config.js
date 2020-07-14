import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: `src/index.js`,
    output: {
      file: `${dir}/index.js`,
      sourcemap: true,
      format,
      exports: "named",
    },
    plugins: [
      resolve(),
      commonjs(),
      replace({
        values: {
          "process.env.NODE_ENV": JSON.stringify("production"),
        },
      }),
      terser(),
    ],
  };
}

export default [createConfig("module"), createConfig("system")];
