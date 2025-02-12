import withSolid from "rollup-preset-solid";

export default withSolid([
  {
    input: "src/lib/index.tsx",
    mappingName: "lib",
    output: {
      file: "./dist/lib/index.js",
      format: "module",
    },
  },
  {
    input: "src/lib/index.tsx",
    mappingName: "lib",
    solidOptions: {
      generate: "ssr",
      hydratable: false,
    },
    targets: ["cjs"],
    output: {
      file: "./dist/lib/index.cjs",
      format: "cjs",
    },
  },
]);
