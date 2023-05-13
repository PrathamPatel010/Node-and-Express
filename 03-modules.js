// Node uses CommonJS.  Every file is a module by default.
// Module is encapsulated code that only share minimum

// importing the names and function
const names = require('./04-names');
const sayHi = require('./05-utils');

sayHi('Tom');
// Names tobey and andrew are imported into names object. We cannot directly access them.
// but we can access it using dot operator.
sayHi(names.tobey);
sayHi(names.andrew);

const data = require('./06-alternative-flavours');
console.log(data);

// this statement will bring the addition function, even though we haven't assigned it with a variable. because node will bydefault wrap everything and will bring it here.
// but it's always a good practice to assign imports with a variable.
require('./07-mind grenade')