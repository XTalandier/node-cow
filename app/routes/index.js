var router = module.exports = function(app){
  var routes = [
    //''
  ];
  routes.forEach(function(route) {
    module.exports[route] = require('./' + route)(app);
  });
}
