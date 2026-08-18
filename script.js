const songs = [
  {
    title: "Chall meri saruli kimasaadi haat ma",
    artist: "Garhwali Bangers",
    file: "songs/Chal meri saruli kimsadihat ma full new jagar Panwada song new  gadwali song Pritam Bhartwan.mp3"
  },
  {
    title: "Gajna",
    artist: "Garhwali Bangers",
    file: "songs/Gajna(गजन)  New latest Gadwali Song 2026  Pritam Bhartwan.mp3"
  },
  {
    title: "Challpatti",
    artist: "Garhwali Bangers",
    file: "songs/Challpatti  Latest Garhwali Song 2020  Diwan Singh Panwar  Meena Rana  Shivay Music.mp3"
  },
  {
    title: "Ramdai ka hotel",
    artist: "Garhwali Bangers",
    file: "songs/RAMDAI KA HOTEL II CHANDANI ENTERPRISES II KUMAONI SONG II SATENDRA GANGOLA II LALIT GITYAR.mp3"
  },
  {
    title: "Jiya kori kori khandu",
    artist: "Garhwali Bangers",
    file: "songs/Jiya Kori Kori Khando  New  Garhwali Song 2025  Kishan Mahipal  Tanu Rawat  Anoop Parmar.mp3"
  },
  {
    title: "Gulabi sharara",
    artist: "Garhwali Bangers",
    file: "songs/Gulabi Sharara  l  गलब शरर  Inder Arya Rakesh Joshi Neeru Bora Latest Uttarakhandi song.mp3"
  },
  {
    title: "Roop ku Mantar",
    artist: "Garhwali Bangers",
    file: "songs/Roop Ku Mantar  Official Visualizer  Priyanka Meher  Vivek Nautiyal.mp3"
  },
  {
    title: "Aachri",
    artist: "Garhwali Bangers",
    file: "songs/Achhri New Garhwali Song 2025  Darshan Farswan  LB Shivam Bhatt.mp3"
  },
  {
    title: "Chaita ki chatwali",
    artist: "Garhwali Bangers",
    file: "songs/Chaita Ki Chaitwal  Audio चत क चतवल  Amit Sagar Gunjan Dangwal  गढवल आछर जगर.mp3"
  },
  {
    title: "Aankhon ka baan",
    artist: "Garhwali Bangers",
    file: "songs/Aankhon Ka Baan  New Garhwali  Song 2025  Meena Rana & AnuragKant  #meghakhugshal.mp3"
  },
  {
    title: "Ho be laliye",
    artist: "Garhwali Bangers",
    file: "songs/Ho Be Laliye Kullvi Traditional Song Kullvi Nati Folk Song  Himachal diaries Kritika Tanwar.mp3"
  },
  {
    title: "Nandre Tu",
    artist: "Garhwali Bangers",
    file: "songs/Nandre Tu  ननदर त  Rohit Chauhan  Latest Uttarakhandi Song.mp3"
  },
  {
    title: "Mund Ma Tupuli Saji",
    artist: "Garhwali Bangers",
    file: "songs/Mund Ma Tupuli Saji ge Latest Garhwali DJ Song 2020  Devesh Rawat  Mars Series II Team M J.mp3"
  },
  {
    title: "Ab Laglu Mandaan",
    artist: "Garhwali Bangers",
    file: "songs/Ab Laglu Mandaan  Ruhaan Bhardwaj  X KARISHMA SHAH X Official Song  youth festival 2020.mp3"
  },
  {
    title: "Mohana Teri Murali Baaji",
    artist: "Garhwali Bangers",
    file: "songs/Mohana Teri Murali Baaji [Full Song] Rajuli.mp3"
  },
  {
    title: "Samloyna Rumaal",
    artist: "Garhwali Bangers",
    file: "songs/Samlonya Rumaal  Rohit Chauhan  Uttarakhandi Song.mp3"
  },
  {
    title: "Sachi Bonu Chho",
    artist: "Garhwali Bangers",
    file: "songs/SACHI BONU CHHO  SAURAV MAITHANI  SANJU SILODI & RUCHI RAWAT  HIMALAYAN PULSE.mp3"
  },
  {
    title: "Syali Bol Bharuna",
    artist: "Garhwali Bangers",
    file: "songs/Syali Bol Bharuna  Letest Garhwali Video Song 2020  GeetaRam Kanswal  Ruchi  Naresh Bailwal.mp3"
  },
  {
    title: "Bareilly Ko Jhumka",
    artist: "Garhwali Bangers",
    file: "songs/BAREILLY KO JHUMKA  ROHIT CHAUHAN  UTTARAKHANDI SONG  OFFICIAL VIDEO.mp3"
  },
  {
    title: "LP Gadi",
    artist: "Garhwali Bangers",
    file: "songs/LP Gadi By Vicky Chauhan & Geeta Bhardwaj ft Neeraj Dabral & Shubhangi  Latest Himachali Video 2022.mp3"
  },
  {
    title: "Hey Kanchhi",
    artist: "Garhwali Bangers",
    file: "songs/Hey Kanchhi  , by Anil Bisht.mp3"
  },
  {
    title: "Chhakna Baand",
    artist: "Garhwali Bangers",
    file: "songs/Chhakna Baand [Full Song] Chhakna Baand.mp3"
  },
  {
    title: "Gori Mukhadi Sazeli",
    artist: "Garhwali Bangers",
    file: "songs/Gori Mukhadi Sazeli.mp3"
  }
];


/* =========================
   ELEMENTS
========================= */

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


/* =========================
   FORMAT TIME
========================= */

function formatTime(seconds) {

  if (isNaN(seconds) || seconds === Infinity) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${minutes}:${secs
    .toString()
    .padStart(2, "0")}`;
}


/* =========================
   LOAD SONG
========================= */

function loadSong(index) {

  if (!songs.length) return;

  currentIndex = index;

  const song = songs[currentIndex];

  audio.pause();

  /* SONG FILE LOAD */

  audio.src = song.file;

  audio.load();


  /* SONG NAME */

  nowTitle.textContent = song.title;

  nowArtist.textContent = song.artist;


  /* RESET PROGRESS */

  progress.value = 0;

  currentTime.textContent = "0:00";

  duration.textContent = "0:00";
}


/* =========================
   PLAY SONG
========================= */

function playSong() {

  if (!songs.length) return;

  player.classList.add("open");

  audio.play()
    .then(() => {

      playPause.textContent = "⏸";

    })
    .catch((error) => {

      console.error(
        "Song play error:",
        error
      );

    });

}


/* =========================
   PAUSE SONG
========================= */

function pauseSong() {

  audio.pause();

  playPause.textContent = "▶";

}


/* =========================
   NEXT SONG
========================= */

function nextSong() {

  currentIndex++;

  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }

  loadSong(currentIndex);

  playSong();

}


/* =========================
   PREVIOUS SONG
========================= */

function previousSong() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = songs.length - 1;
  }

  loadSong(currentIndex);

  playSong();

}


/* =========================
   PLAY / PAUSE BUTTON
========================= */

playPause.addEventListener("click", () => {

  if (audio.paused) {

    playSong();

  } else {

    pauseSong();

  }

});


/* =========================
   NEXT BUTTON
========================= */

next.addEventListener(
  "click",
  nextSong
);


/* =========================
   PREVIOUS BUTTON
========================= */

prev.addEventListener(
  "click",
  previousSong
);


/* =========================
   MUSIC BUTTON
   SHOW / HIDE PLAYER
========================= */

musicButton.addEventListener("click", () => {

  player.classList.toggle("open");

});


/* =========================
   FULLSCREEN BUTTON
========================= */

fullscreenButton.addEventListener("click", () => {

  if (!document.fullscreenElement) {

    document.documentElement
      .requestFullscreen()
      .catch((error) => {

        console.log(
          "Fullscreen error:",
          error
        );

      });

  } else {

    document.exitFullscreen();

  }

});


/* =========================
   PROGRESS UPDATE
========================= */

audio.addEventListener(
  "timeupdate",
  () => {

    if (!audio.duration) return;

    progress.value =
      (audio.currentTime / audio.duration) * 100;

    currentTime.textContent =
      formatTime(audio.currentTime);

  }
);


/* =========================
   SONG DURATION
========================= */

audio.addEventListener(
  "loadedmetadata",
  () => {

    duration.textContent =
      formatTime(audio.duration);

  }
);


/* =========================
   SEEK SONG
========================= */

progress.addEventListener(
  "input",
  () => {

    if (!audio.duration) return;

    audio.currentTime =
      (progress.value / 100) *
      audio.duration;

  }
);


/* =========================
   SONG ENDED
========================= */

audio.addEventListener(
  "ended",
  () => {

    nextSong();

  }
);


/* =========================
   PLAY EVENT
========================= */

audio.addEventListener(
  "play",
  () => {

    playPause.textContent = "⏸";

  }
);


/* =========================
   PAUSE EVENT
========================= */

audio.addEventListener(
  "pause",
  () => {

    playPause.textContent = "▶";

  }
);


/* =========================
   AUDIO ERROR
========================= */

audio.addEventListener(
  "error",
  () => {

    console.error(
      "SONG FILE ERROR:",
      songs[currentIndex].file
    );

  }
);


/* =========================
   LOAD FIRST SONG
========================= */

loadSong(0);
