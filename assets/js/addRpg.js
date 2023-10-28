const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');

openPopupBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
});

closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});