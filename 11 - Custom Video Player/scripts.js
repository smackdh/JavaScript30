/* Get our elements */
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const play = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");
const progressBar = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const fullScreenToggle = document.querySelector(".fullscreenToggle");
// const playbackRate = document.querySelector("[name=playbackRate]");
// const rewind10 = document.querySelector("[data-skip='-10']");

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

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // takes where I clicked amd divides it with total width of pogress. Then multiplies it with the video duration, to get a percentage.
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullscreen() {
  console.log("fullscreen");
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}
/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((slider) =>
  slider.addEventListener("change", handleRangeUpdate)
);
ranges.forEach((slider) =>
  slider.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

play.addEventListener("click", togglePlay);

fullScreenToggle.addEventListener("click", handleFullscreen);
