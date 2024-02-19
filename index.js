function github() {
    window.open('https://github.com/itsuigy/peticiones-asincronas');
}

function cargarImagen() {
    var img = document.createElement('img');
    img.src = 'assets/img/image.jpg';
    img.onload = function() {
        document.getElementById('imageContainer').appendChild(img);
    };
}

function contador() {
    var iniciarTimer = new Date().getTime();
    var timer = setInterval(function() {
        var actualTimer = new Date().getTime();
        var transcurridoTimer = actualTimer - iniciarTimer;
        var segundos = Math.floor((transcurridoTimer / 1000) % 60);
        var minutos = Math.floor((transcurridoTimer / (1000 * 60)) % 60);
        var horas = Math.floor((transcurridoTimer / (1000 * 60 * 60)) % 24);
        var milisegundos = transcurridoTimer % 1000;
        document.getElementById('timer').innerHTML = 'Tiempo de carga: ' + horas + 'h ' + minutos + 'm ' + segundos + 's ' + milisegundos + 'ms';
        if (document.getElementById('imageContainer').childElementCount > 0) {
            clearInterval(timer);
        }
    }, 100);
}