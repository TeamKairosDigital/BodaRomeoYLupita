simplyCountdown('#cuenta', {
    year: 2024, // required
    month: 11, // required
    day: 23, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Día', plural: 'Días' },
        hours: { singular: 'Hrs', plural: 'Hrs' },
        minutes: { singular: 'Min', plural: 'Min' },
        seconds: { singular: 'Seg', plural: 'Seg' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});


document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    var playButton = document.getElementById('playButton');
    var playIcon = playButton.querySelector('i');
    var contenido = document.getElementById('contenido');

    // Función para alternar entre reproducción y pausa
    playButton.addEventListener('click', function() {
        if (music.paused) {
            // Si la música está pausada, se reproduce
            music.play().then(() => {
                playIcon.classList.remove('fa-circle-play'); // Quita el icono de "play"
                playIcon.classList.add('fa-circle-pause');  // Agrega el icono de "pause"
            }).catch(function(error) {
                console.log('No se pudo reproducir el audio: ', error);
            });
        } else {
            // Si la música está en reproducción, se pausa
            music.pause();
            playIcon.classList.remove('fa-circle-pause'); // Quita el icono de "pause"
            playIcon.classList.add('fa-circle-play');  // Agrega el icono de "play"
        }
    });

    var modal = document.getElementById('welcomeModal');
    var startButton = document.getElementById('startButton');

    // Mostrar el modal siempre al cargar la página
    modal.classList.remove('hidden'); // Muestra el modal

    // Al hacer clic en el botón, se cierra el modal y comienza la música
    startButton.addEventListener('click', function() {
        modal.classList.add('hidden'); // Oculta el modal

            contenido.style.display = 'block';

        music.play().catch(function(error) {
            console.log('Error al reproducir el audio: ', error);
        });
    });
});

