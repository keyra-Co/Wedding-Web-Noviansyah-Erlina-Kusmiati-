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
  // plural: true, //use plurals
  // inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  // inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // // in case of inline set to false
  // enableUtc: false,
  // onEnd: function () {
  //     // your code
  //     return;
  // },
  // refresh: 1000, //default refresh every 1s
  // sectionClass: 'simply-section', //section css class
  // amountClass: 'simply-amount', // amount css class
  // wordClass: 'simply-word', // word css class
  // zeroPad: false,
  // countUp: false, // enable count up if set to true
});

// Offcanvas navbar
// const stickyTop = document.querySelector('.sticky-top');
// const offCanvas = document.querySelector('.offcanvas');

// offCanvas.addEventListener('show.bs.offcanvas', function () {
//   stickyTop.style.overflow = 'visible';
// });

// offCanvas.addEventListener('hidden.bs.offcanvas', function () {
//   stickyTop.style.overflow = 'hidden';
// });

// Play audio
const rootElement = document.querySelector(':root');
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
let isPlaying = 'false';
const song = document.querySelector('#song');
const enable = document.querySelector('.enable');

// function disableScroll() {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//   window.onscroll = function () {
//     window.scrollTo(scrollTop, scrollLeft);
//   };

//   rootElement.style.scrollBehavior = 'auto';
// }

enable.onclick = function () {
  window.onscroll = function () {};

  rootElement.style.scrollBehavior = 'smooth';

  // localStorage.setItem('opened', 'true')
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

// if (!localStorage.getItem('opened')) {
//   disableScroll();
// }

// disableScroll();

// Params
// const urlParams = new URLSearchParams(window.location.search);
// const nama = urlParams.get('n') || '';
// const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';

// const namaContainer = document.querySelector('.hero h4 span');
// namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

// document.querySelector('#nama').value = nama;
