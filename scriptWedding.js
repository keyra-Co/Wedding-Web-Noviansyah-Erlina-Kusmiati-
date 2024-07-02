// Simply Countdown
simplyCountdown('.simply-countdown', {
  year: 2024, // required
  month: 7, // required
  day: 14, // required
  hours: 9, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: 'hari', plural: 'hari' },
    hours: { singular: 'jam', plural: 'jam' },
    minutes: { singular: 'menit', plural: 'menit' },
    seconds: { singular: 'detik', plural: 'detik' },
  },
});

// Play audio
const rootElement = document.querySelector(':root');
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
let isPlaying = 'false';
const song = document.querySelector('#song');
const enable = document.querySelector('.enable');
rootElement.style.scrollBehavior = 'smooth';

enable.onclick = function () {
  window.onscroll = function () {};

  rootElement.style.scrollBehavior = 'smooth';

  playAudio();
};

function playAudio() {
  song.volume = 0.1;
  audioIconWrapper.style.display = 'flex';
  audioIconWrapper.classList.add('onMusic');
  song.play();
  isPlaying = 'true';
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove('bi-music-note-beamed');
    audioIcon.classList.add('bi-pause-fill');
    audioIconWrapper.classList.remove('onMusic');
  } else {
    song.play();
    audioIcon.classList.add('bi-music-note-beamed');
    audioIcon.classList.remove('bi-pause-fill');
    audioIconWrapper.classList.add('onMusic');
  }

  isPlaying = !isPlaying;
};
