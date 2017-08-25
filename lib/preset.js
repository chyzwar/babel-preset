

module.exports = {
  plugins: [
    [require("babel-plugin-add-module-exports")],
  	[require("babel-plugin-transform-es2015-modules-commonjs"), {"noInterop": true}]
  ],
};
