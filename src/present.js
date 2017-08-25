import modulesExport from "babel-plugin-add-module-exports";
import modulesCommnonJS from "babel-plugin-transform-es2015-modules-commonjs";

export default = {
  plugins: [
    [modulesExport],
    [modulesCommnonJS, { noInterop: true}]
  ],
};
