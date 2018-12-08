'use strict';

angular.module('newsApp')
    .controller('newsController', ['$scope', function($scope) {
      var news = [
        {
          title: "¿Qué es Lorem Ipsum?",
          content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
          date: "2018-12-07T18:01:37.093Z",
          image: "publics/image/bbc_news_logo.png"
        },
        {
          title: "¿Por qué lo usamos?",
          content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
          date: "2018-12-07T18:01:37.093Z",
          image: "publics/image/bbc_news_logo.png"
        },
        {
          title: "¿De dónde viene?",
          content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
          date: "2018-12-07T18:01:37.093Z",
          image: "publics/image/bbc_news_logo.png"
        },
        {
          title: "¿Dónde puedo conseguirlo?",
          content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
          date: "2018-12-07T18:01:37.093Z",
          image: "publics/image/bbc_news_logo.png"
        }
      ];

      $scope.news = news;
    }]);
