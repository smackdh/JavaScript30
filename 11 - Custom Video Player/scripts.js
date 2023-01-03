/* Get our elements */
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const play = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");
const progressBar = document.querySelector(".progress__filled");
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

play.addEventListener("click", togglePlay);
