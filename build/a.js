'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _map = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/instance/map')
);

var arr = [1, 2, 3, 4];
(0, _map.default)(arr).call(arr, function (item) {
  return item * 2;
});
