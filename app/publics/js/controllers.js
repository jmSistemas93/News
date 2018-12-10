'use strict';

angular.module('newsApp')
  .controller('newsController', ['$scope', 'newsService', function($scope, newsService) {
    $scope.search = '';
    console.log($scope.search);

    $scope.news = newsService.getNews();
  }])
  .controller('newsDetailController', ['$scope', '$stateParams', 'newsService', function($scope, $stateParams, newsService) {
       $scope.new = newsService.getNew(parseInt($stateParams.id,10));

  }]);
