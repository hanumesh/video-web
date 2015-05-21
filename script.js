
/*var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(9000);


*/
var app = Built.App('blt63d9c5665cab6d1c');


var user = Built.App('blt63d9c5665cab6d1c').User();
user.login('hanumesh.palla59@gmail.com','Hanumesh2@')
.then(function(user){
  // logged in user
});