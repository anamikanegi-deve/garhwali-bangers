const songs = [
  {
    title: "Chall meri saruli kimasaadi haat ma",
    artist: "Garhwali Bangers",
    file: "songs/Chal meri saruli kimsadihat ma full new jagar Panwada song new  gadwali song Pritam Bhartwan.mp3",
    start: 0
  },
  {
    title: "Gajna",
    artist: "Garhwali Bangers",
    file: "songs/Gajna(गजन)  New latest Gadwali Song 2026  Pritam Bhartwan.mp3",
    start: 7
  },
  {
    title: "Challpatti",
    artist: "Garhwali Bangers",
    file: "songs/Challpatti  Latest Garhwali Song 2020  Diwan Singh Panwar  Meena Rana  Shivay Music.mp3",
    start: 0
  },
  {
    title: "Ramdai ka hotel",
    artist: "Garhwali Bangers",
    file: "songs/RAMDAI KA HOTEL II CHANDANI ENTERPRISES II KUMAONI SONG II SATENDRA GANGOLA II LALIT GITYAR.mp3",
    start: 0
  },
  {
    title: "Jiya kori kori khandu",
    artist: "Garhwali Bangers",
    file: "songs/Jiya Kori Kori Khando  New  Garhwali Song 2025  Kishan Mahipal  Tanu Rawat  Anoop Parmar.mp3",
    start: 5
  },
  {
    title: "Gulabi sharara",
    artist: "Garhwali Bangers",
    file: "songs/Gulabi Sharara  l  गलब शरर  Inder Arya Rakesh Joshi Neeru Bora Latest Uttarakhandi song.mp3",
    start: 7
  },
  {
    title: "Roop ku Mantar",
    artist: "Garhwali Bangers",
    file: "songs/Roop Ku Mantar  Official Visualizer  Priyanka Meher  Vivek Nautiyal.mp3",
    start: 0
  },
  {
    title: "Aachri",
    artist: "Garhwali Bangers",
    file: "songs/Achhri New Garhwali Song 2025  Darshan Farswan  LB Shivam Bhatt.mp3",
    start: 4
  },
  {
    title: "Chaita ki chatwali",
    artist: "Garhwali Bangers",
    file: "songs/Chaita Ki Chaitwal  Audio चत क चतवल  Amit Sagar Gunjan Dangwal  गढवल आछर जगर.mp3",
    start: 4
  },
  {
    title: "Ho be laliye",
    artist: "Garhwali Bangers",
    file: "songs/Ho Be Laliye Kullvi Traditional Song Kullvi Nati Folk Song  Himachal diaries Kritika Tanwar.mp3",
    start: 0
  },
  {
    title: "Nandre Tu",
    artist: "Garhwali Bangers",
    file: "songs/Nandre Tu  ननदर त  Rohit Chauhan  Latest Uttarakhandi Song.mp3",
    start: 3
  },
  {
    title: "Mund Ma Tupuli Saji",
    artist: "Garhwali Bangers",
    file: "songs/Mund Ma Tupuli Saji ge Latest Garhwali DJ Song 2020  Devesh Rawat  Mars Series II Team M J.mp3",
    start: 10
  },
  {
    title: "Ab Laglu Mandaan",
    artist: "Garhwali Bangers",
    file: "songs/Ab Laglu Mandaan  Ruhaan Bhardwaj  X KARISHMA SHAH X Official Song  youth festival 2020.mp3",
    start: 4
  },
  {
    title: "Mohana Teri Murali Baaji",
    artist: "Garhwali Bangers",
    file: "songs/Mohana Teri Murali Baaji [Full Song] Rajuli.mp3",
    start: 0
  },
  {
    title: "Samloyna Rumaal",
    artist: "Garhwali Bangers",
    file: "songs/Samlonya Rumaal  Rohit Chauhan  Uttarakhandi Song.mp3",
    start: 0
  },
  {
    title: "Sachi Bonu Chho",
    artist: "Garhwali Bangers",
    file: "songs/SACHI BONU CHHO  SAURAV MAITHANI  SANJU SILODI & RUCHI RAWAT  HIMALAYAN PULSE.mp3",
    start: 4
  },
  {
    title: "Syali Bol Bharuna",
    artist: "Garhwali Bangers",
    file: "songs/Syali Bol Bharuna  Letest Garhwali Video Song 2020  GeetaRam Kanswal  Ruchi  Naresh Bailwal.mp3",
    start: 4
  },
  {
    title: "Bareilly Ko Jhumka",
    artist: "Garhwali Bangers",
    file: "songs/BAREILLY KO JHUMKA  ROHIT CHAUHAN  UTTARAKHANDI SONG  OFFICIAL VIDEO.mp3",
    start: 7
  },
  {
    title: "LP Gadi",
    artist: "Garhwali Bangers",
    file: "songs/LP Gadi By Vicky Chauhan & Geeta Bhardwaj ft Neeraj Dabral & Shubhangi  Latest Himachali Video 2022.mp3",
    start: 10
  },
  {
    title: "Hey Kanchhi",
    artist: "Garhwali Bangers",
    file: "songs/Hey Kanchhi  , by Anil Bisht.mp3",
    start: 0
  },
  {
    title: "Chhakna Baand",
    artist: "Garhwali Bangers",
    file: "songs/Chhakna Baand [Full Song] Chhakna Baand.mp3",
    start: 0
  },
  {
    title: "Gori Mukhadi Sazeli",
    artist: "Garhwali Bangers",
    file: "songs/Gori Mukhadi Sazeli.mp3",
    start: 0
  }
];


const audio = document.getElementById("audio");

const player = document.getElementById("player");
const musicButton = document.getElementById("musicButton");
const fullscreenButton = document.getElementById("fullscreenButton");

const playPause = document.getElementById("playPause");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const progress = document.getElementById("progress");

const nowTitle = document.getElementById("nowTitle");
const nowArtist = document.getElementById("nowArtist");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");


let currentIndex = 0;


/* FORMAT TIME */

function formatTime(seconds) {

  if (isNaN(seconds) || !isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return minutes + ":" + secs.toString().padStart(2, "0");
}


/* PRELOAD NEXT SONG */

function preloadSong(index) {

  if (index < 0 || index >= songs.length) {
    return;
  }

  const preloadAudio = new Audio();

  preloadAudio.preload = "auto";

  preloadAudio.src = songs[index].file;
}


/* LOAD SONG */

function loadSong(index) {

  currentIndex = index;

  const song = songs[currentIndex];

  audio.pause();

  audio.src = song.file;

  audio.load();

  nowTitle.textContent = song.title;
  nowArtist.textContent = song.artist;

  progress.value = 0;

  currentTime.textContent = formatTime(song.start);
  duration.textContent = "0:00";


  /* PRELOAD NEXT SONG */

  let nextIndex = currentIndex + 1;

  if (nextIndex >= songs.length) {
    nextIndex = 0;
  }

  preloadSong(nextIndex);
}


/* PLAY SONG */

function playSong() {

  const song = songs[currentIndex];

  /*
    Starting silence skip.
    Song ke object me start value seconds me hai.
  */

  if (
    audio.currentTime < song.start &&
    audio.readyState >= 2
  ) {
    audio.currentTime = song.start;
  }

  audio.play()
    .then(function () {

      playPause.textContent = "⏸";

    })
    .catch(function (error) {

      console.log("Cannot play:", error);

    });
}


/* PAUSE SONG */

function pauseSong() {

  audio.pause();

  playPause.textContent = "▶";
}


/* PLAY / PAUSE */

playPause.addEventListener("click", function () {

  if (audio.paused) {

    playSong();

  } else {

    pauseSong();

  }

});


/* NEXT */

next.addEventListener("click", function () {

  currentIndex++;

  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }

  loadSong(currentIndex);

  /*
    Metadata/load hone ke baad play.
  */

  const startPlaying = function () {

    audio.removeEventListener("canplay", startPlaying);

    playSong();

  };

  audio.addEventListener("canplay", startPlaying);

});


/* PREVIOUS */

prev.addEventListener("click", function () {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = songs.length - 1;
  }

  loadSong(currentIndex);

  const startPlaying = function () {

    audio.removeEventListener("canplay", startPlaying);

    playSong();

  };

  audio.addEventListener("canplay", startPlaying);

});


/* MUSIC BUTTON */

musicButton.addEventListener("click", function () {

  player.classList.toggle("open");

});


/* FULLSCREEN */

fullscreenButton.addEventListener("click", function () {

  if (!document.fullscreenElement) {

    document.documentElement.requestFullscreen();

  } else {

    document.exitFullscreen();

  }

});


/* LOADED METADATA */

audio.addEventListener("loadedmetadata", function () {

  const song = songs[currentIndex];

  duration.textContent =
    formatTime(audio.duration);

  /*
    Progress bar ko starting point se begin karna
  */

  if (song.start > 0) {

    audio.currentTime = song.start;

    progress.value =
      (song.start / audio.duration) * 100;

    currentTime.textContent =
      formatTime(song.start);

  }

});


/* TIME UPDATE */

audio.addEventListener("timeupdate", function () {

  if (!audio.duration) {
    return;
  }

  const song = songs[currentIndex];

  /*
    Starting silence ke pehle progress ko show nahi karna
  */

  if (audio.currentTime < song.start) {
    return;
  }

  progress.value =
    (audio.currentTime / audio.duration) * 100;

  currentTime.textContent =
    formatTime(audio.currentTime);

});


/* PROGRESS BAR */

progress.addEventListener("input", function () {

  if (!audio.duration) {
    return;
  }

  audio.currentTime =
    (progress.value / 100) * audio.duration;

});


/* AUTO NEXT */

audio.addEventListener("ended", function () {

  currentIndex++;

  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }

  loadSong(currentIndex);

  const startPlaying = function () {

    audio.removeEventListener("canplay", startPlaying);

    playSong();

  };

  audio.addEventListener("canplay", startPlaying);

});


/* PLAY EVENT */

audio.addEventListener("play", function () {

  playPause.textContent = "⏸";

});


/* PAUSE EVENT */

audio.addEventListener("pause", function () {

  playPause.textContent = "▶";

});


/* ERROR */

audio.addEventListener("error", function () {

  console.log(
    "Audio file error:",
    songs[currentIndex].file
  );

});


/* FIRST SONG */

loadSong(0);
