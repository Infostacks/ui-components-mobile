import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(), 
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.test.ts', '**/*.stories.tsx'],
     }),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];