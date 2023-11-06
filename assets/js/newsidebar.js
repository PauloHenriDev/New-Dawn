const body = document.querySelector('body');
const nav = document.querySelector('nav');
const toggle = document.querySelector(".toggle");
const searchBtn = document.querySelector(".search-box");
const modeSwitch = document.querySelector(".bottom-toggle-switch");
const modeText = document.querySelector(".mode-text");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const toggleBtn = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const conteudo = document.querySelector('.conteudo');

toggleBtn.addEventListener('click', function() {
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
        modeText.innerText = "Light Mode";
        moon.style.display = "none";
        sun.style.display = "inline-block";
    }else{
        modeText.innerText = "Dark Mode";
        sun.style.display = "none"
        moon.style.display = "inline-block"
    }

}