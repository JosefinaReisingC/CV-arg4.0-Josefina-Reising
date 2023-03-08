const $acordeon = document.querySelectorAll('.subtitulos');

for (let i = 0; i < $acordeon.length; i++) {
    $acordeon[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}