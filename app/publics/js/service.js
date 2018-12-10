'use strict';

angular.module('newsApp')
  .service('newsService', function () {
    var news = [
      {
        _id: 1,
        title: "¿Qué es Lorem Ipsum?",
        content: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
        date: "2018-12-07T18:01:37.093Z",
        image: "publics/image/bbc_news_logo.png"
      },
      {
        _id: 2,
        title: "¿Por qué lo usamos?",
        content: "Cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería  de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
         date: "2018-12-07T18:01:37.093Z",
        image: "publics/image/bbc_news_logo.png"
      },
      {
        _id: 3,
        title: "¿De dónde viene?",
        content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. . Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
        date: "2018-12-07T18:01:37.093Z",
        image: "publics/image/bbc_news_logo.png"
      },
      {
        _id: 4,
        title: "¿Dónde puedo conseguirlo?",
        content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
        date: "2018-12-07T18:01:37.093Z",
        image: "publics/image/bbc_news_logo.png"
      }
    ];

    this.getNews = function () {
      return news;
    }

    this.getNew = function (index) {
      return news[index-1];
    }
  });
