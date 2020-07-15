import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

function createConfig(format, env) {
  const dir = format === "module" ? "esm" : format;
  const isProd = env === "production";
  const suffix = isProd ? ".production.min" : ".development";
  return {
    input: `src/index.js`,
    output: {
      file: `${dir}/react-is${suffix}.js`,
      sourcemap: true,
      format,
      exports: "named",
    },
    plugins: [
      resolve(),
      commonjs(),
      replace({
        values: {
          "process.env.NODE_ENV": JSON.stringify(env),
        },
      }),
      isProd && terser(),
    ].filter(Boolean),
  };
}

export default [
  createConfig("module", "development"),
  createConfig("module", "production"),
  createConfig("system", "development"),
  createConfig("system", "production"),
];
