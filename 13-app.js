// These aren't built in modules, so before using it, we must install it as dependency.
// otherwise, node will not be able to identify it.

const _ = require('lodash')

const items = [1, [2, 3, [4, 5, 6]]];
const newItems = _.flattenDeep(items);
console.log(newItems);