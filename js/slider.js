let offset = 0;
const sliderLine = document.querySelector('.main-aside-5-slider-line');
document.getElementById("btn0").style.backgroundColor = 'black';

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 33.3;
    if (offset > 199.8) {
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';
    if (offset == 0) {
        document.getElementById("btn0").style.backgroundColor = 'black';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 33.3) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'black';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 66.6) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'black';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset > 66.6 && offset < 133.2) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'black';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 133.2) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'black';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 166.5) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'black';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 199.8) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'black';
    }
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 33.3;
    if (offset < 0) {
        offset = 199.8;
    }
    sliderLine.style.left = -offset + '%';
    if (offset == 0) {
        document.getElementById("btn0").style.backgroundColor = 'black';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 33.3) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'black';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 66.6) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'black';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset > 66.6 && offset < 133.2) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'black';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 133.2) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'black';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 166.5) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'black';
        document.getElementById("btn6").style.backgroundColor = 'white';
    }
    if (offset == 199.8) {
        document.getElementById("btn0").style.backgroundColor = 'white';
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn6").style.backgroundColor = 'black';
    }
});
// Функция для открытия модального окна
function openModal(imageSrc, captionText) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;
    
    // Блокируем прокрутку body при открытом модальном окне
    document.body.style.overflow = "hidden";
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
    // Восстанавливаем прокрутку body
    document.body.style.overflow = "auto";
}

// Закрытие модального окна при клике вне изображения
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Закрытие модального окна по клавише Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});