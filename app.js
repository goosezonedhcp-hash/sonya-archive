const app = document.getElementById("app");

const isAdmin =
window.location.pathname
.includes("/admin");



if(isAdmin){

app.innerHTML = `

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



<div class="layout">

<main>

<section class="panel">

<h1>

🔒 ДОСТУП

</h1>

<br>

<input
id="pwd"

placeholder="
пароль"

style="
width:100%;
padding:12px;
background:#0a0a0a;
border:1px solid #222;
color:white;
margin-bottom:12px;
">

<button

onclick="login()"

style="
width:100%;
padding:12px;
background:#111;
color:white;
border:1px solid #222;
cursor:pointer;
"

>

ВОЙТИ

</button>

</section>



<section

id="adminArea"

style="
display:none;
margin-top:14px;
"

>

<div class="grid">

<section class="panel">

<h2>

ДОБАВИТЬ
НАБЛЮДЕНИЕ

</h2>

<textarea

id="log"

style="
width:100%;
height:140px;
background:#080808;
color:white;
border:1px solid #222;
padding:10px;
"

></textarea>

<br><br>

<button
onclick="addLog()">

СОХРАНИТЬ

</button>

</section>



<section class="panel">

<h2>

НОВОЕ ДЕЛО

</h2>

<input
id="caseName"

placeholder="
название">

<br><br>

<button
onclick="addCase()">

СОЗДАТЬ

</button>

</section>



<section class="panel">

<h2>

СОСТОЯНИЕ
СОНИ

</h2>

<input

id="state"

placeholder="
новая метка">

<br><br>

<button
onclick="
addState()">

ДОБАВИТЬ

</button>

</section>



<section class="panel">

<h2>

АНОМАЛИЯ

</h2>

<input

id="anom"

placeholder="
описание">

<br><br>

<button
onclick="
addAnomaly()">

СОЗДАТЬ

</button>

</section>

</div>

</section>

</main>

</div>

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

}

};



window.addLog=()=>{

alert(
"наблюдение сохранено"
);

};

window.addCase=()=>{

alert(
"дело создано"
);

};

window.addState=()=>{

alert(
"состояние изменено"
);

};

window.addAnomaly=()=>{

alert(
"аномалия зарегистрирована"
);

};





}else{

app.innerHTML = `

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

v2.0 //
CASE FILES

</div>

<div class="section">

НАВИГАЦИЯ

<ul class="nav">

<li
data-link="index.html">

⌂ ГЛАВНАЯ

</li>

<li
data-link="pages/sonya.html">

⌘ ДОСЬЕ: СОНЯ

</li>

<li
data-link="admin">

⚙ АДМИН

</li>

</ul>

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

СТАТУС [ONLINE]<br>
КВАРТИРА 28

</div>

<div class="seal">

<img
src="assets/seal_eye.png">

</div>

</section>

</main>

</div>

`;



function updateClock(){

const c=
document
.getElementById(
"clock"
);

if(c){

c.innerText=

new Date()

.toLocaleTimeString(
"ru-RU"
);

}

}

updateClock();

setInterval(
updateClock,
1000
);

}