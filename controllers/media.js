/**
 * Loader controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('../../../system/controller').Controller_Main,
    Promise = require('promise').Promise,
    path = require('path');


(function(){

    var Controller = exports.Controller = new( new Class({

        Extends: Controller_Main,

        index_action: function(request, response) {
            var promise = new Promise();
            
            core.log('In index_action() of media controller');

            //do work here

            promise.resolve('true');
            return promise;
        },
        
        images_action: function (request, response) {
            var p = this.findFile('images', request.getParam('file'), request.getParam('ext'));
            
            core.debug('path returned from findFile()', p);
            response.view.set('filepath', p);
        },
        
        file_action: function (request, response) {
            var p = this.findFile('file', request.getParam('file'), request.getParam('ext'));
            
            response.view.set('filepath', p);
        },
        
        js_action: function (request, response) {
            var p = this.findFile('js', request.getParam('file'), request.getParam('ext'));
            
            response.view.set('filepath', p);
        },
        
        css_action: function (request, response) {
            var p = this.findFile('css', request.getParam('file'), request.getParam('ext'));
            
            response.view.set('filepath', p);
        },
        
        
        findFile: function (folder, file, ext) {
            var paths = this.module.getPaths(),
                p = null;
            
            core.debug('paths returned from media module', paths);
            Array.from(paths).each(function (pathToCheck) {
                var s = pathToCheck + '/' + folder + '/' + file + ext;
                core.debug('checking path', s);
                if (nil(p) && path.existsSync(s)) {
                    core.log('\tfile exists');
                    p = s;
                } else {
                    core.log('\tfile does not exist');
                }
            }, this);
            
            core.debug('path being returned',p);
            return p;
        }

    }))();

    exports.routes = [
        ['media','GET /media/(\\w*)/([\\w\\-]*)(\\.\\w{2,})', ['action','file','ext'], Controller,{format: 'file'}],
        ['favicon','GET /favicon.ico',null,Controller,{action: 'images', format: 'file', file: 'favicon', ext: '.ico'}]
    ];
    
})();