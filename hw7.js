
'use strict';
// var $j=jQuery.noConflict()

// $.getJSON('/data.json', function (requests) {
//     ('main').append("createArticle(searchResults[i])")
//         for (var i = 0; i < searchResults.length; i++) ;
//
// })
window.onload=function () {

    var searchResults;
    var req = new XMLHttpRequest();
    req.open("GET", '/data.json', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                searchResults = JSON.parse(req.responseText);
                var main = document.querySelector('main');


                for (var i = 0; i < searchResults.length; i++) {
                    main.appendChild(createArticle(searchResults[i]));
                }
            }
            else {
                console.log(req.status, 'error №');
            }
        }
    };
    req.send(null);
};

$( function createArticle (film, queryFunFilm) {
    $('<article>').append(createHeader(film.header),createDetails(film.details),createFooter(film.footer))

    return queryFunFilm()
})

// function createArticle(film) {
//         var article = document.createElement('article');
//
//         article.appendChild(createHeader(film.header));
//         article.appendChild(createDetails(film.details));
//         article.appendChild(createFooter(film.footer));
//
//         return article;
// }
$(function createHeader (header, queryFunHeader) {
    $('<header>').addClass("headers")
    $('<div>').addClass("blur-effect").appendTo('header')
    $('<h1>').appendTo('div')
    $('<mark>').appendTo('h1')
    $('<a>').attr("href", (header.url)).appendTo('h1')
    return queryFunHeader()

// <header class="headers">
//         <div class="blur-effect">
//         <h1>
//         <mark>Властелин колец</mark>
//     <a href="page2.html" target="_blank"> : Возвращение Короля</a>
//     </h1>
//     </div>
//     // </header>
});

$(function createDetails (details, queryFunDetails) {
    $('<div>').addClass("information")
    $('<div>').addClass("pictures").appendTo('div')
    $('<figure>').appendTo('div.pictures')
    $('<img>').addClass("imageZoom").attr("src",(details.poster)).appendTo('figure')
    $('<figcaption>').appendTo('figure')

    $('<div>').addClass("info1").appendTo('div.information')
    $('<section>').appendTo('div.info1').html('<h1>Описание</h1><p>' + details.description + '</p>')
    $('<section>').appendTo('div.info1').html('<h1>Актеры</h1><p>' + details.actors + '</p>')
    return queryFunDetails()
})

$( function createFooter(footer,queryFunFooter) {
    $('<div>').addClass("info3").html('<p>'+'<b>Год</b>'+footer.time+'<b>Оценка <span class="tooltip">IMDb:<span class="tooltext">Internet Movie Database</span> </span></b>' +footer.imdb.estimate+
        '<small>'+footer.imdb.add +'</small>'+'<b>Бюджет:</b>'+footer.budget+'<b>Страна:</b>'+footer.country)
    return queryFunFooter()
})




