const body = document.querySelector('body');
const nav = document.querySelector('nav');
const toggle = document.querySelector(".toggle");
const searchBtn = document.querySelector(".search-box");
const modeSwitch = document.querySelector(".bottom-toggle-switch");
const modeText = document.querySelector(".mode-text");
const moon = document.querySelector("bx bx-moon icon moon");
const sun = document.querySelector("bx bx-moon icon sun");
const sidebar = document.querySelector('.sidebar');
const conteudo = document.querySelector('.conteudo');

toggle.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    conteudo.classList.toggle('collapsed');
});


toggle.addEventListener("click" , () =>{
    nav.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    nav.classList.remove("close");
})

function sun_moon() {

    body.classList.toggle('dark')

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
        moon.computedStyleMap.display = "none"
        sun.computedStyleMap.display = "inline-block"
    }else{
        modeText.innerText = "Dark mode";
        sun.computedStyleMap.display = "none"
        moon.computedStyleMap.display = "inline-block"
    }

}