const songs = [
  {
    title: "Gajna",
    artist: "Garhwali Bangers",
    file: "songs/Gajna(गजन)  New latest Gadwali Song 2026  Pritam Bhartwan.mp3"
  },
  {
    title: "Chall meri saruli kimasaadi haat ma",
    artist: "Garhwali Bangers",
    file: "songs/Chal meri saruli kimsadihat ma full new jagar Panwada song new  gadwali song Pritam Bhartwan.mp3"
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
  }
];


const audio = document.getElementById("audio");
const songList = document.getElementById("songList");
const songCount = document.getElementById("songCount");
const empty = document.getElementById("empty");

const player = document.getElementById("player");
const musicButton = document.getElementById("musicButton");
const closePlayer = document.getElementById("closePlayer");

const playPause = document.getElementById("playPause");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const progress = document.getElementById("progress");

const nowTitle = document.getElementById("nowTitle");
const nowArtist = document.getElementById("nowArtist");
const playerTitle = document.getElementById("playerTitle");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");


let currentIndex = 0;


/* TIME FORMAT */

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}


/* UPDATE PLAY / PAUSE BUTTONS IN SONG LIST */

function updateSongButtons() {
  document.querySelectorAll(".song").forEach((item, index) => {
    const button = item.querySelector(".song-play");

    if (index === currentIndex && !audio.paused) {
      button.textContent = "⏸";
    } else {
      button.textContent = "▶";
    }
  });
}


/* SHOW SONGS */

function showSongs() {
  songList.innerHTML = "";

  songCount.textContent =
    `${songs.length} ${songs.length === 1 ? "song" : "songs"}`;

  if (songs.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  songs.forEach((song, index) => {
    const item = document.createElement("div");

    item.className = "song";

    item.innerHTML = `
      <div class="hero-art" style="width:50px;height:50px;font-size:22px;">
        🎵
      </div>

      <div class="song-info">
        <b>${song.title}</b>
        <span>${song.artist}</span>
      </div>

      <button class="song-play">▶</button>
    `;

    /* CLICK ON SONG */

    item.addEventListener("click", (event) => {
      loadSong(index);
      playSong();
    });

    songList.appendChild(item);
  });
}


/* LOAD SONG */

function loadSong(index) {
  if (!songs.length) return;

  currentIndex = index;

  const song = songs[currentIndex];

  audio.src = song.file;
  audio.load();

  nowTitle.textContent = song.title;
  nowArtist.textContent = song.artist;
  playerTitle.textContent = song.title;

  progress.value = 0;
  currentTime.textContent = "0:00";
  duration.textContent = "0:00";

  document.querySelectorAll(".song").forEach((item, i) => {
    item.classList.toggle("active", i === currentIndex);
  });

  updateSongButtons();
}


/* PLAY SONG */

function playSong() {
  if (!songs.length) return;

  player.classList.add("open");

  audio.play()
    .then(() => {
      playPause.textContent = "⏸";
      updateSongButtons();
    })
    .catch(error => {
      console.log("Song play nahi hua:", error);
    });
}


/* PAUSE SONG */

function pauseSong() {
  audio.pause();

  playPause.textContent = "▶";

  updateSongButtons();
}


/* NEXT SONG */

function nextSong() {
  if (!songs.length) return;

  currentIndex++;

  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }

  loadSong(currentIndex);
  playSong();
}


/* PREVIOUS SONG */

function previousSong() {
  if (!songs.length) return;

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = songs.length - 1;
  }

  loadSong(currentIndex);
  playSong();
}


/* OPEN / CLOSE PLAYER */

musicButton.addEventListener("click", () => {
  player.classList.toggle("open");
});


closePlayer.addEventListener("click", () => {
  player.classList.remove("open");
});


/* MAIN PLAY / PAUSE BUTTON */

playPause.addEventListener("click", () => {
  if (!songs.length) return;

  if (!audio.src) {
    loadSong(currentIndex);
    playSong();
    return;
  }

  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});


/* NEXT / PREVIOUS */

next.addEventListener("click", nextSong);

prev.addEventListener("click", previousSong);


/* SONG PROGRESS */

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  progress.value =
    (audio.currentTime / audio.duration) * 100;

  currentTime.textContent =
    formatTime(audio.currentTime);
});


/* SONG DURATION */

audio.addEventListener("loadedmetadata", () => {
  duration.textContent =
    formatTime(audio.duration);
});


/* CHANGE SONG POSITION */

progress.addEventListener("input", () => {
  if (!audio.duration) return;

  audio.currentTime =
    (progress.value / 100) * audio.duration;
});


/* AUTO NEXT SONG */

audio.addEventListener("ended", () => {
  nextSong();
});


/* KEEP BUTTONS SYNCED */

audio.addEventListener("play", () => {
  playPause.textContent = "⏸";
  updateSongButtons();
});


audio.addEventListener("pause", () => {
  playPause.textContent = "▶";
  updateSongButtons();
});


/* SHOW SONGS */

showSongs();
