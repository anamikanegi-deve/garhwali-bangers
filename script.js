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


function formatTime(seconds) {
  if (isNaN(seconds) || !seconds) return "0:00";

  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);

  return `${min}:${sec.toString().padStart(2, "0")}`;
}


function loadSong(index) {

  currentIndex = index;

  const song = songs[currentIndex];

  // Purana source hatao
  audio.pause();
  audio.removeAttribute("src");

  // Exact filename use karo
  audio.src = song.file;

  // Audio reload
  audio.load();

  nowTitle.textContent = song.title;
  nowArtist.textContent = song.artist;

  progress.value = 0;
  currentTime.textContent = "0:00";
  duration.textContent = "0:00";
}


function playSong() {

  if (!songs.length) return;

  player.classList.add("open");

  audio.play()
    .then(() => {
      playPause.textContent = "⏸";
    })
    .catch((error) => {
      console.error("Audio error:", error);
      alert("Song play nahi hua. Filename check karo: " + songs[currentIndex].file);
    });
}


function pauseSong() {
  audio.pause();
  playPause.textContent = "▶";
}


function nextSong() {

  currentIndex++;

  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }

  loadSong(currentIndex);
  playSong();
}


function previousSong() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = songs.length - 1;
  }

  loadSong(currentIndex);
  playSong();
}


playPause.addEventListener("click", () => {

  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }

});


next.addEventListener("click", nextSong);

prev.addEventListener("click", previousSong);


/* 🎵 BUTTON - PLAYER SHOW/HIDE */

musicButton.addEventListener("click", () => {
  player.classList.toggle("open");
});


/* ⛶ FULLSCREEN */

fullscreenButton.addEventListener("click", () => {

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }

});


/* PROGRESS BAR */

audio.addEventListener("timeupdate", () => {

  if (!audio.duration) return;

  progress.value =
    (audio.currentTime / audio.duration) * 100;

  currentTime.textContent =
    formatTime(audio.currentTime);

});


audio.addEventListener("loadedmetadata", () => {

  duration.textContent =
    formatTime(audio.duration);

});


progress.addEventListener("input", () => {

  if (!audio.duration) return;

  audio.currentTime =
    (progress.value / 100) * audio.duration;

});


audio.addEventListener("ended", () => {
  nextSong();
});


audio.addEventListener("play", () => {
  playPause.textContent = "⏸";
});


audio.addEventListener("pause", () => {
  playPause.textContent = "▶";
});


/* AGAR FILE LOAD NA HO */

audio.addEventListener("error", () => {

  console.error(
    "FILE NOT FOUND:",
    songs[currentIndex].file
  );

});


/* FIRST SONG LOAD */

loadSong(0);
