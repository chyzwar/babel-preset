import modulesCommnonJS from "babel-plugin-transform-es2015-modules-commonjs";
import modulesExport from "babel-plugin-add-module-exports";

export default = {
  plugins: [
    [modulesCommnonJS, { noInterop: true}]
    [modulesExport]
  ],
};
