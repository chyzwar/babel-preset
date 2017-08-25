

module.exports = {
  plugins: [
  	[require("babel-plugin-transform-es2015-modules-commonjs"), {"noInterop": true}],
    [require("babel-plugin-add-module-exports")]
  ],
};
