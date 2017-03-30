require('moment');
var _ = require('lodash');

console.log(moment().toDate());
console.log(_.camelCase('hoge'));

module.exports = {
  now: moment().toDate(),
  hoge: _.camelCase('hoge')
};
