(function ()
{
    'use strict';

    angular
        .module('demo', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('home', {
                url        : '/demo',
                templateUrl: 'app/demo/demo.html',
                controller : 'DemoController as vm'
            });
    }
})();
