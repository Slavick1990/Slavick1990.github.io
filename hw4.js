/**
 * Created by Слава on 17.04.18.
 */
'use strict'
document.getElementById('four').innerHTML = '<div class="search_results"> <p class="res">Результаты по запросу: <mark> <Strong> Властелин колец </Strong> </mark> </p> </div><hr/>' +
    ' <article>'+
    '<header class="headers">'+
    '<div class="blur-effect">'+
    '<h1>'+
    '<mark>Властелин колец</mark>'+
'<a href="page2.html" target="_blank"> : Возвращение Короля</a>'+
'</h1></div></header>'+
'<div class="information">'+
'<div class="picturess">'+
    '<figure> <img src="images/img1.jpg" title="Возвращение Короля"usemap="#img1.jpg" class="imageZoom"> <map name="img1.jpg">'+
    '<area shape="rect" coords="299,117,355,256" alt="Гэндальф" target="_blank" href="http://ru.protagonist.wikia.com/wiki/%D0%93%D1%8D%D0%BD%D0%B4%D0%B0%D0%BB%D1%8C%D1%84">'+
    '<area shape="circle" coords="186,192,79" alt="Арагорн" target="_blank" href="https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%B3%D0%BE%D1%80%D0%BD">'+
    '</map> <figcaption>Возвращение Короля</figcaption> </figure> </div>'+
    '<div class="info1">'+
    '<section> <h1>Описание</h1> <p>Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья.'+
    'Повелитель сил. Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, крепости Последней Надежды.</p> </section>'+
'<section> <h1>Актеры</h1> <p>Элайджа Вуд,Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто,Бернард Хилл</p> </section> </div> </div>'+
    '<div class="info3"> <p><b>Год:</b> 2003, <b>Оценка  <span class="tooltip">IMDb: <span class="tooltext">Internet Movie Database</span> </span> </b>8.90 <small>(1 349 172)</small>, <b>Бюджет:</b> $94 000 000. <b>Страна:</b> США. </p> </div> </article>'+
//2
    '<article> <header class="headers"> <div class="blur-effect"> <h1> <mark>Властелин колец</mark> <a href="page2.html" target="_blank"> : Возвращение Короля</a>'+
'</h1> </div> </header>'+
    '<article> <header class="headers"> <div class="blur-effect"> <h1> <mark> Властелин колец</mark>'+
'<a href="page3.html" target="_blank"> : Две крепости</a> </h1> </div> </header><div class="information"> <div class="picturess">'+
    '<figure> <img src="images/img3.jpg" title="Две крепости"  class="imageCombination"> <figcaption>Две крепости</figcaption> </figure> </div>'+
        ' <div class="info1"> <section> <h1>Описание</h1> <p>Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм'+
'вынуждены доверить свои жизни Голлуму, который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой.</p> </section>'+
'<section> <h1>Актеры</h1> <p>Элайджа Вуд,Шон Эстин,Орландо Блум,Вигго Мортенсен,Иэн МакКеллен,Доминик Монахэн, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд</p> </section> </div> </div>'+
    '<div class="info3"> <p><b>Год:</b>2002, <b>Оценка  <span class="tooltip">IMDb: <span class="tooltext">Internet Movie Database</span> </span> </b>8.70 <small>(1 221 214)</small>, <b>Бюджет:</b> $94 000 000, <b>Страна:</b>США </p> </div> </article>'+
        //3
    '<article> <header class="headers"> <div class="blur-effect"> <h1> <mark>Властелин колец</mark> <a href="page4.html" target="_blank"> : Братство Кольца</a>'+
'</h1> </div> </header> <div class="information"> <div class="picturess"> <figure> <img src="images/img2.jpg" title="Братство Кольца" class="imageZoom">'+
   ' <figcaption>Братсво Кольца</figcaption> </figure> </div>'+
   ' <div class="info1"> <section> <h1>Описание</h1> <p>Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу'+
'лет.Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.</p> </section>'+
'<section> <h1>Актеры</h1> <p>Элайджа Вуд, Иэн МакКеллен,Вигго Мортенсен,Шон Бин,Орландо Блум,Джон Рис-Дэвис,Иэн Холм,Шон Эстин,Билли Бойд,Доминик Монахэн</p> </section> </div> </div>'+
    '<div class="info3"> <p><b>Год:</b>2001, <b>Оценка  <span class="tooltip">IMDb: <span class="tooltext">Internet Movie Database</span> </span> </b>8.80 <small>(1 389 831)</small>, <b>Бюджет:</b> $93 000 000,<b>Страна:</b> США </p> </div> </article>'
//сделал структуру
/*
 window.onload= function Structure () {
 var articleMovie = document.createElement('article');
 document.body.appendChild(articleMovie);
 var header = document.createElement('div');
 header.className = 'headers';
 articleMovie.appendChild(header);
 var h1header = document.createElement('h1');
 header.appendChild(h1header);
 var mark = document.createElement('mark');
 h1header.appendChild(mark);
 var a = document.createElement('a');
 h1header.appendChild(a);
 var divInformation = document.createElement('div');
 articleMovie.appendChild(divInformation);
 divInformation.className = 'information';
 var divPictures = document.createElement('div');
 divPictures.className = 'picturess';
 divInformation.appendChild(divPictures);

 var figure = document.createElement('figure');
 divPictures.appendChild(figure);
 var img = document.createElement('img');
 figure.appendChild(img);
 img.className='imageZoom';
 img.src=imgMassive[0]

 var figcaption = document.createElement('figcaption');
 figure.appendChild(figcaption);
 var divInfo1 = document.createElement('div');
 divInfo1.className = 'info-1';
 divInformation.appendChild(divInfo1);
 var section = document.createElement('section');
 divInfo1.appendChild(section);
 section.appendChild(h1header);
 var p = document.createElement('p');
 section.appendChild(p);
 var section2 = document.createElement('section');
 divInfo1.appendChild(section2);
 section2.appendChild(h1header);
 var p2 = document.createElement('p');
 section2.appendChild(p2);

 var divInfo3 = document.createElement('div')
 divInfo3.className = 'info-3'
 articleMovie.appendChild(divInfo3)

 var pInfo3 = document.createElement('p')
 divInfo3.appendChild(pInfo3);}
 */

