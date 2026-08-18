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

const currentTime =
  document.getElementById("currentTime");

const duration =
  document.getElementById("duration");

let currentIndex = 0;


/* TIME FORMAT */

function formatTime(seconds) {

  if (!seconds || isNaN(seconds)) {
    return "0:00";
  }

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60);

  return `${minutes}:${secs
    .toString()
    .padStart(2, "0")}`;
}


/* LOAD SONG */

function loadSong(index) {

  if (!songs.length) return;

  currentIndex = index;

  const song = songs[currentIndex];

  audio.src = song.file;

  nowTitle.textContent =
    song.title;

  nowArtist.textContent =
    song.artist;

  progress.value = 0;

  currentTime.textContent =
    "0:00";

  duration.textContent =
    "0:00";
}


/* PLAY */

function playSong() {

  if (!songs.length) return;

  player.classList.add("open");

  audio.play()
    .then(() => {

      playPause.textContent =
        "⏸";

    })
    .catch((error) => {

      console.log(
        "Song play error:",
        error
      );

    });

}


/* PAUSE */

function pauseSong() {

  audio.pause();

  playPause.textContent =
    "▶";
}


/* NEXT SONG */

function nextSong() {

  currentIndex++;

  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }

  loadSong(currentIndex);

  playSong();
}


/* PREVIOUS SONG */

function previousSong() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex =
      songs.length - 1;
  }

  loadSong(currentIndex);

  playSong();
}


/* PLAY / PAUSE */

playPause.addEventListener(
  "click",
  () => {

    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }

  }
);


/* NEXT */

next.addEventListener(
  "click",
  nextSong
);


/* PREVIOUS */

prev.addEventListener(
  "click",
  previousSong
);


/* SHOW / HIDE PLAYER */

musicButton.addEventListener(
  "click",
  () => {

    player.classList.toggle(
      "open"
    );

  }
);


/* PROGRESS */

audio.addEventListener(
  "timeupdate",
  () => {

    if (!audio.duration) return;

    progress.value =
      (audio.currentTime /
        audio.duration) * 100;

    currentTime.textContent =
      formatTime(
        audio.currentTime
      );

  }
);


/* SONG DURATION */

audio.addEventListener(
  "loadedmetadata",
  () => {

    duration.textContent =
      formatTime(
        audio.duration
      );

  }
);


/* SEEK SONG */

progress.addEventListener(
  "input",
  () => {

    if (!audio.duration) return;

    audio.currentTime =
      (progress.value / 100) *
      audio.duration;

  }
);


/* AUTO NEXT */

audio.addEventListener(
  "ended",
  nextSong
);


/* UPDATE PLAY BUTTON */

audio.addEventListener(
  "play",
  () => {

    playPause.textContent =
      "⏸";

  }
);


audio.addEventListener(
  "pause",
  () => {

    playPause.textContent =
      "▶";

  }
);


/* FULLSCREEN */

fullscreenButton.addEventListener(
  "click",
  () => {

    if (!document.fullscreenElement) {

      document.documentElement
        .requestFullscreen()
        .catch(err => {

          console.log(err);

        });

    } else {

      document.exitFullscreen();

    }

  }
);


/* STARTING SONG */

loadSong(0);
