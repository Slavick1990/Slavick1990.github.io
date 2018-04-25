
'use strict';
window.onload=function () {

    var searchResults;
    var req = new XMLHttpRequest();
    req.open("GET", '/data.json', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                searchResults = JSON.parse(req.responseText);

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

function createArticle(film) {
    var article = document.createElement('article');

    article.appendChild(createHeader(film.header));
    article.appendChild(createDetails(film.details));
    article.appendChild(createFooter(film.footer));

    return article;
}

function createHeader(header) {
    var headerOne = document.createElement('header');
    headerOne.className = 'headers';

    var divBlur=document.createElement('div');
    divBlur.className='blur-effect';

    var anchor = document.createElement('a');
    anchor.setAttribute('href', header.url);

    var hOne=document.createElement('h1');
    divBlur.appendChild(hOne);


    var titleParts = header.title.split(':');
    var mark = document.createElement('mark');
    mark.appendChild(document.createTextNode(titleParts[0]));
    hOne.appendChild(mark);
    hOne.appendChild(anchor);

    anchor.appendChild(document.createTextNode(':' + titleParts[1]));
    headerOne.appendChild(divBlur);

    return headerOne;
// <header class="headers">
//         <div class="blur-effect">
//         <h1>
//         <mark>Властелин колец</mark>
//     <a href="page2.html" target="_blank"> : Возвращение Короля</a>
//     </h1>
//     </div>
//     // </header>
}


function createDetails(details) {
    var section = document.createElement('div');
    section.setAttribute('class', 'information');

    var divPictures=document.createElement('div');
    divPictures.className='pictures';
    section.appendChild(divPictures);

    var poster = document.createElement('figure');
    poster.innerHTML =
        '<img src="' +
        details.poster +
        '" class="imageZoom" />' +
        '<figcaption>Обложка фильма</figcaption>';

    var text = document.createElement('div');
    text.className='info1';

    var description = document.createElement('section');
    description.innerHTML = '<h1>Описание</h1><p>' + details.description + '</p>';
    var actors = document.createElement('section');
    actors.innerHTML = '<h1>Актеры</h1><p>' + details.actors + '</p>';
    text.appendChild(description);
    text.appendChild(actors);

    section.appendChild(poster);
    section.appendChild(text);

    return section;
// <div class="information">
//         <div class="picturess">
//         <figure>
//
//         <img src="images/img1.jpg" title="Возвращение Короля"
//     usemap="#img1.jpg" class="imageZoom">
//         <map name="img1.jpg">
//         <area shape="rect" coords="299,117,355,256" alt="Гэндальф" target="_blank"
//     href="http://ru.protagonist.wikia.com/wiki/%D0%93%D1%8D%D0%BD%D0%B4%D0%B0%D0%BB%D1%8C%D1%84">
//         <area shape="circle" coords="186,192,79" alt="Арагорн" target="_blank"
//     href="https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%BD">
//         </map>
//         <figcaption>Возвращение Короля</figcaption>
//     </figure>
//     </div>
//
//     <div class="info1">
//         <section>
//         <h1>Описание</h1>
//         <p>Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя
//     спасения
//     Средиземья.
//         Повелитель сил. Тьмы Саурон направляет свои бесчисленные рати под стены
//     Минас-Тирита,
//         крепости Последней Надежды.</p>
//     </section>
//     <section>
//     <h1>Актеры</h1>
//     <p>Элайджа Вуд,Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик
//     Монахэн, Билли
//     Бойд,
//         Энди
//     Серкис,
//          eeeeМиранда Отто,Бернард Хилл</p>
//     </section>
//     </div>
//     </div>
}

function createFooter(footer) {
    var divInfo3=document.createElement('div');
    divInfo3.className='info3';
    divInfo3.innerHTML='<p>'+'<b>Год</b>'+footer.time+'<b>Оценка <span class="tooltip">IMDb:<span class="tooltext">Internet Movie Database</span> </span></b>' +footer.imdb.estimate+
        '<small>'+footer.imdb.add +'</small>'+'<b>Бюджет:</b>'+footer.budget+'<b>Страна:</b>'+footer.country;
//         <div class="info3">
//         <p><b>Год:</b>2001, <b>Оценка  <span class="tooltip">IMDb:
// <span class="tooltext">Internet Movie Database</span>
//     </span> </b>8.80
//     <small>(1 389 831)</small>
//         , <b>Бюджет:</b> $93 000 000,<b>Страна:</b> США
//     </p>
//     </div>
    return divInfo3
}


window.onload = function () {
    var main = document.querySelector('main');
    // var main = document.getElementsByTagName('main')[0];3



}