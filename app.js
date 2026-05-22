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
<div class="ver">v2.0 // CASE FILES</div>

<div class="section">
НАВИГАЦИЯ

<ul>
<li>⌂ ГЛАВНАЯ</li>
<li>⌘ ДОСЬЕ: СОНЯ</li>
<li>✢ АРХИВ ДЕЛ</li>
<li>✦ КАРТА ГОРОДА</li>
<li>📝 ЗАМЕТКИ</li>
<li>◫ МЕДИА</li>
<li>⚙ СИСТЕМА</li>
</ul>

</div>

<div class="section">

СТАТУС АРХИВА<br>
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
РАСПОЛОЖЕНИЕ: КВАРТИРА 28<br><br>

УРОВЕНЬ ОПАСНОСТИ:

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

ОБЪЕКТ:
неопознанная сущность<br><br>

ТИП:
искажённая реальность<br><br>

УГРОЗА:
⬛⬛⬛⬜⬜

</div>

</div>

</section>



<section class="panel case">

<h3>ДЕЛО №002 «МОРФЕЙ»</h3>

<div class="caseWrap">

<img
src="assets/observer_eye.png">

<div>

ПСИХОАКТИВНОЕ
ВОЗДЕЙСТВИЕ<br><br>

СТАТУС:<br>

🔒 ДОСТУП
ОГРАНИЧЕН

</div>

</div>

</section>



<section class="panel observer">

<h3>ИЗМЕНЕНИЯ СУБЪЕКТА</h3>

<div class="observerWrap">

<img
src="assets/paper_note.png">

<div>

+ синяк под глазом<br>
+ нарушение сна<br>
+ повышенная усталость<br>
+ неизвестная реакция

</div>

</div>

</section>



<section class="panel room">

<h3>

ЛИЧНОЕ ПРОСТРАНСТВО
// ПОСЛЕДНИЙ КАДР

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

ПОСЛЕДНИЕ
НАБЛЮДЕНИЯ // LOG

</h3>

02:14 субъект вернулся<br>
02:16 долго стояла у окна<br>
02:29 активность высокая<br>
02:33 смотрит на экран

</section>


<section class="panel note">

<img
src="assets/paper_note.png">

</section>


<section class="panel">

<h3>КАРТА ГОРОДА</h3>

<img
src="assets/city_map.png">

</section>

</aside>

</div>
`;

setInterval(()=>{

document.getElementById(
"clock"

).innerText=

new Date()
.toLocaleTimeString()

},1000);

+ нарушение сна<br>
+ метка<br>
+ неизвестная реакция

</section>

<section class="panel">
<h3>ЛИЧНОЕ ПРОСТРАНСТВО</h3>

комната сони<br>
монитор • кружка<br>
игрушки • плакаты

</section>

</div>

<section class="panel">
СИСТЕМНЫЙ ПРОТОКОЛ<br>
[WARN] аномалия сектор Квартира 28
</section>

</main>

<aside>

<section class="panel">
LOG<br><br>

02:33 смотрит на экран<br>
02:44 сигнал стабилен

</section>

<section class="panel warn">
ПОМНИ:<br><br>

наблюдать, а не спасать.

</section>

</aside>

</div>
`;

function updateClock(){
document.getElementById(
"clock"
).innerText=
new Date().toLocaleTimeString(
"ru-RU"
);
}

setInterval(updateClock,1000);
updateClock();