/* Get our elements */
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const play = document.querySelector(".toggle");
const ranges = document.querySelector(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");
// const playbackRate = document.querySelector("[name=playbackRate]");
// const rewind10 = document.querySelector("[data-skip='-10']");

console.log(video);

/*Build out functions */

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  // e.type === "play" ? (play.innerHTML = "⏸️") : (play.innerHTML = "▶️");
  const icon = this.paused ? "▶️" : "⏸️";
  play.textContent = icon;
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

play.addEventListener("click", togglePlay);
