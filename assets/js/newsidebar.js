const toggleBtn = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const conteudo = document.querySelector('.conteudo');

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    conteudo.classList.toggle('collapsed');
});