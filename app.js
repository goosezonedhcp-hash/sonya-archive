const app = document.getElementById("app");

app.innerHTML = `

<div class="topbar">
    <span>SONYA ARCHIVE // OBSERVATION INTERFACE</span>
    <span>NIGHTFALL-7</span>
    <span id="clock"></span>
</div>

<div class="layout">

<aside class="sidebar panel">

<h2>SONYA ARCHIVE</h2>

<div class="ver">
v2.0 // CASE FILES
</div>

<div class="section">

НАВИГАЦИЯ

<ul class="nav">

<li data-link="index.html">
⌂ ГЛАВНАЯ
</li>

<li data-link="pages/sonya.html">
⌘ ДОСЬЕ: СОНЯ
</li>

<li data-link="pages/cases.html">
✢ АРХИВ ДЕЛ
</li>

<li data-link="pages/map.html">
✦ КАРТА ГОРОДА
</li>

<li data-link="pages/notes.html">
📝 ЗАМЕТКИ
</li>

<li data-link="pages/media.html">
◫ МЕДИА
</li>

<li>
⚙ СИСТЕМА
</li>

</ul>

</div>

<div class="section">

АРХИВ: АКТИВЕН<br>
НАБЛЮДЕНИЕ: ВКЛ<br>
СУБЪЕКТ: СОНЯ<br>
ПРОТОКОЛ: NIGHTFALL

</div>

<div class="quote">

«Иногда наблюдение —
единственный способ
защитить то,
что уже нельзя спасти.»

</div>

</aside>



<main>

<section class="panel hero">

<div class="portrait">

<img
src="assets/sonya_portrait.png"
alt="sonya">

</div>

<div class="heroInfo">

<h1>ДОСЬЕ: СОНЯ</h1>

ИМЯ: Соня<br>
ВОЗРАСТ: неизвестно<br>
ПОЛ: женский<br><br>

СТАТУС [ONLINE]<br>
СОН [НЕСТАБИЛЕН]<br>
КВАРТИРА 28<br><br>

УРОВЕНЬ ОПАСНОСТИ<br>

⬛⬛⬛⬜⬜

<br><br>

Субъект представляет интерес.<br>
Рекомендуется продолжать наблюдение.

</div>

<div class="seal">

<img src="assets/seal_eye.png">

</div>

</section>



<div class="grid">

<section class="panel case">

<h3>ДЕЛО №001</h3>

<div class="caseWrap">

<img
src="assets/case001_door28.png">

<div>

КВАРТИРА 28<br><br>

НЕОПОЗНАННАЯ СУЩНОСТЬ<br><br>

ТИП:<br>
искажённая реальность<br><br>

УГРОЗА<br>

⬛⬛⬛⬜⬜

</div>

</div>

</section>



<section class="panel case">

<h3>
ДЕЛО №002 «МОРФЕЙ»
</h3>

<div class="caseWrap">

<img
src="assets/observer_eye.png">

<div>

ПСИХОАКТИВНОЕ
ВОЗДЕЙСТВИЕ

<br><br>

🔒 ДОСТУП
ОГРАНИЧЕН

</div>

</div>

</section>



<section class="panel observer">

<h3>
ИЗМЕНЕНИЯ СУБЪЕКТА
</h3>

<div class="observerWrap">

<img
src="assets/paper_note.png">

<div>

+ нарушение сна<br>
+ усталость<br>
+ реакция

</div>

</div>

</section>



<section class="panel room">

<h3>

ПОСЛЕДНИЙ КАДР

</h3>

<img
src="assets/room_lastframe.png">

</section>

</div>



<section class="panel protocol">

СИСТЕМНЫЙ ПРОТОКОЛ<br><br>

[INFO] соединение установлено<br>

[WARN] обнаружена активность<br>

[WARN] сектор квартира 28<br>

[INFO] наблюдение продолжается

</section>

</main>



<aside class="rightbar">

<section class="panel">

<h3>

LOG

</h3>

02:14 субъект вернулся<br>
02:16 окно<br>
02:33 смотрит

</section>



<section class="panel note">

<img
src="assets/paper_note.png">

</section>



<section class="panel">

<h3>
КАРТА ГОРОДА
</h3>

<img
src="assets/city_map.png">

</section>

</aside>

</div>

`;

function updateClock(){

document.getElementById(
"clock"
).innerText=

new Date()
.toLocaleTimeString(
"ru-RU"
);

}

setInterval(
updateClock,
1000
);

updateClock();



document
.querySelectorAll(
".nav li"
)

.forEach(el=>{

el.addEventListener(
"click",

()=>{

const link =
el.dataset.link;

if(link){

location.href=
link;

}

}

);

});