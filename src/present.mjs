import transformFlowStripTypes from "@babel/plugin-transform-flow-strip-types";

const config = {
  plugins: [
    [transformFlowStripTypes],
  ],
};

export default config;
