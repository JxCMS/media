/**
 * Loader controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('controller').Controller_Main,
    Promise = require('promise').Promise;


(function(){

    var Controller = exports.Controller = new Class({

        Extends: Controller_Main,

        index_action: function(request, response) {
            var promise = new Promise();
            
            core.log('In index_action() of media controller');

            //do work here

            promise.resolve('true');
            return promise;
        }

    });

    exports.routes = [
        ['media','GET /media/(\\w*)(\\.\\w{2,})', ['file','type'], new Controller(),{action: 'index'}]
    ]

})();