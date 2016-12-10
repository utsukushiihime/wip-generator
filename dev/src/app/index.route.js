(function ()
{
    'use strict';

    angular
        .module('wipGenerator')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($locationProvider, $urlRouterProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
    }

})();
