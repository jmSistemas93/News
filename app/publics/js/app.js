'use strict';
angular.module('newsApp', []);

//
// angular.module('newsApp', ['ui.router'])
//     .config(function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//             .state('app', {
//                 url: '/',
//                 views: {
//                     'header': {
//                         templateUrl: 'views/header.html'
//                     },
//                     'content': {
//                         template: '<p>content home</p>'
//                     },
//                     'footer': {
//                         template: '<hr><h2>footer container<small> within content</small></h2>'
//                     }
//                 }
//             })
//
//             .state('app.contact', {
//                 url: 'contact',
//                 views: {
//                     'content@': {
//                         templateUrl: 'views/contact.html',
//                         controller: 'ContactController'
//                     }
//                 }
//             })
//
//             .state('app.about', {
//                 url: 'about',
//                 views: {
//                     'content@': {
//                         templateUrl: 'views/about.html',
//                         controller: 'AboutController'
//                     }
//                 }
//             });
//
//             $urlRouterProvider.otherwise('/');
//     });
