const app = document.getElementById("app");

const isAdmin =
window.location.pathname
.includes("/admin");



if(isAdmin){

app.innerHTML=`

<div class="topbar">

<span>
NIGHTFALL //
ADMIN PANEL
</span>

<span>
OBSERVER
</span>

<span>
LOCKED
</span>

</div>


<section class="panel">

<h1>

ПАНЕЛЬ НАБЛЮДАТЕЛЯ

</h1>

<br>

<input
id="pwd"
placeholder="пароль">

<button
onclick="login()">

ВОЙТИ

</button>

</section>



<section
id="adminArea"

style="
display:none;
margin-top:14px;
">

<div class="grid">

<section class="panel">

<h2>
ДОБАВИТЬ ЛОГ
</h2>

<textarea id="log">

</textarea>

</section>



<section class="panel">

<h2>

НОВОЕ ДЕЛО

</h2>

<input
placeholder="
название">

</section>

</div>

</section>

`;

window.login=()=>{

if(

document
.getElementById(
"pwd"
).value

===

"NIGHTFALL-7"

){

document
.getElementById(
"adminArea"
)

.style.display=
"block";


const logs=

localStorage.getItem(
"nightfall_logs"
);

if(logs){

document
.getElementById(
"log"
).value=
logs;

}

}

};

}



else{



app.innerHTML=`

<div class="topbar">

<span>
SONYA ARCHIVE //
OBSERVATION INTERFACE
</span>

<span>
NIGHTFALL-7
</span>

<span id="clock"></span>

</div>



<div class="layout">

<aside class="sidebar panel">

<h2>

SONYA ARCHIVE

</h2>

<div class="ver">

v2.0 // CASE FILES

</div>

<div class="section">

НАВИГАЦИЯ

<ul class="nav">

<li>⌂ ГЛАВНАЯ</li>

<li>⌘ ДОСЬЕ: СОНЯ</li>

<li>✢ АРХИВ ДЕЛ</li>

<li>✦ КАРТА ГОРОДА</li>

<li>📝 ЗАМЕТКИ</li>

<li>◫ МЕДИА</li>

<li>

<a
href="pages/admin.html"

style="
color:white;
text-decoration:none">

⚙ АДМИН

</a>

</li>

</ul>

</div>

<div class="section">

АРХИВ: АКТИВЕН<br>

НАБЛЮДЕНИЕ: ВКЛ<br>

СУБЪЕКТ: СОНЯ<br>

ПРОТОКОЛ:
NIGHTFALL

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
src="assets/sonya_portrait.png">

</div>

<div class="heroInfo">

<h1>

ДОСЬЕ: СОНЯ

</h1>

ИМЯ: Соня<br>

ВОЗРАСТ:
неизвестно<br>

ПОЛ:
женский<br><br>

СТАТУС [ONLINE]<br>

СОН [НЕСТАБИЛЕН]<br>

КВАРТИРА 28

<br><br>

УРОВЕНЬ ОПАСНОСТИ

<br>

⬛⬛⬛⬜⬜

</div>

<div class="seal">

<img
src="assets/seal_eye.png">

</div>

</section>



<div class="grid">

<section class="panel case">

<h3>

ДЕЛО №001

</h3>

<div class="caseWrap">

<img
src="assets/case001_door28.png">

<div>

КВАРТИРА 28

<br><br>

НЕОПОЗНАННАЯ
СУЩНОСТЬ

</div>

</div>

</section>



<section class="panel case">

<h3>

ДЕЛО №002
«МОРФЕЙ»

</h3>

<div class="caseWrap">

<img
src="assets/observer_eye.png">

<div id="morpheus">

🔒 ДОСТУП ОГРАНИЧЕН

</div>

</div>

</section>



<section class="panel observer">

<h3>

ИЗМЕНЕНИЯ
СУБЪЕКТА

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

ПОСЛЕДНИЙ
КАДР

</h3>

<img
src="assets/room_lastframe.png">

</section>

</div>



<section class="panel protocol">

[INFO]
соединение
установлено

<br>

[WARN]
обнаружена
активность

</section>

</main>




<aside class="rightbar">

<section class="panel">

<h3>

LOG

</h3>

<div id="logArea">

</div>

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

document
.getElementById(
"clock"
)

.innerText=

new Date()

.toLocaleTimeString(
"ru-RU"
);

}

updateClock();

setInterval(
updateClock,
1000
);

}

const logBox=
document.getElementById(
"log"
);

if(logBox){

logBox.addEventListener(
"input",
()=>{

localStorage.setItem(
"nightfall_logs",
logBox.value
);

});

}


const logArea=
document.getElementById(
"logArea"
);

if(logArea){

const saved=

localStorage.getItem(
"nightfall_logs"
);

if(saved){

logArea.innerHTML=
saved.replaceAll(
"\n",
"<br>"
);

}

}

let logs=

JSON.parse(

localStorage.getItem(
"nightfallLogs"
)

||

"[]"

);

let area=

document.getElementById(
"logArea"
);

if(area){

area.innerHTML=

logs.map(

x=>x+"<br>"

).join("");

}



if(

logs.length>=3

){

document
.getElementById(
"morpheus"
)

.innerHTML=

`

ДОСТУП РАЗРЕШЁН

<br><br>

ПРОЕКТ МОРФЕЙ
АКТИВЕН

`;

}