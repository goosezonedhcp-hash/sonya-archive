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

<div class="section">
НAВИГАЦИЯ
<ul>
<li>⌂ ГЛАВНАЯ</li>
<li>⌘ ДОСЬЕ: СОНЯ</li>
<li>✢ АРХИВ ДЕЛ</li>
<li>✦ КАРТА ГОРОДА</li>
</ul>
</div>

<div class="section">
СТАТУС АРХИВА<br>
НАБЛЮДЕНИЕ: ВКЛ<br>
СУБЪЕКТ: СОНЯ
</div>

</aside>

<main>

<section class="panel hero">

<div class="portrait">
<pre>
   c
 /(•_•)\\
 /| |\\
</pre>
</div>

<div>
<h1>ДОСЬЕ: СОНЯ</h1>

СТАТУС [ONLINE]<br>
СОН [НЕСТАБИЛЕН]<br>
РАСПОЛОЖЕНИЕ: КВАРТИРА 28<br><br>

Субъект представляет интерес.
</div>

</section>

<div class="grid">

<section class="panel">
<h3>ДЕЛО №001</h3>

ФОТО: ДВЕРЬ 28<br>
УГРОЗА ▣▣□<br>
Статус: АКТИВНО

</section>

<section class="panel">
<h3>ДЕЛО №002 «МОРФЕЙ»</h3>
🔒 нет доступа
</section>

<section class="panel">
<h3>ИЗМЕНЕНИЯ СУБЪЕКТА</h3>

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