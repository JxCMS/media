/**
 * main file for media module
 *
 * 
 */

/**
 * Dependencies
 */
var routes = require('./controllers/media').routes,
    controller = require('./controllers/media').Controller;

//use a closure so we don't pollute the global namespace
(function(){

//needs to have an init() method for setting up the module
exports.init = function(db, router){
    //load and intialize the loader controller
    //setup routing
    router.add(routes);
    controller.setModule(exports);
    return true;
};


/**
 * Other methods exposed for others to use go here
 */
 
var paths = [];

exports.registerPath = function(path){
    paths.push(path);    
};

exports.getPaths = function(){
    return paths;
};

/**
 * From here down are specific functions that this module will need
 */


})();