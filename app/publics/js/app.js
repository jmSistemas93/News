'use strict';
angular.module('newsApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'newsController'
                    },
                    'content': {
                        templateUrl: 'views/content.html',
                        controller: 'newsController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            .state('app.newDetail', {
                url: 'newDetail/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/newDetail.html',
                        controller: 'newsDetailController'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');
    });
