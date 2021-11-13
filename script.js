var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

var el = document.getElementById('btn-play');
var playing = false; // текущее состояние плеера

var player = new Audio('kaif.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){ // слушаем окончание трека
  el.innerText = "Done";
  playing = false;
});
el.addEventListener('click', playPause); // слушаем нажатие на кнопку

function playPause() {
  if( playing) {
    player.pause();
    el.innerText = "Paused";
  } else {
    player.play();
    el.innerText = "Playing..";
  }
  playing = !playing;
}