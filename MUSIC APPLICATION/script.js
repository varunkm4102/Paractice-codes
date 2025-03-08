const playButton = document.getElementById("click-play");
const pauseButton = document.getElementById("pauseButton");
const progressSlider = document.getElementById("progressSlider");
const anotherSong1 = document.getElementById("phir-kabhi");
const anotherSong2 = document.getElementById("ab-chala");
const anotherSong3 = document.getElementById("lute-gye");
const anotherSong4 = document.getElementById("koun-tujhe");
const anotherSong5 = document.getElementById("jabtak");
const anotherSong6 = document.getElementById("terimeri");
const anotherSong7 = document.getElementById("khushi");
let audioPlayer = new Audio("all song/song1.m4a");


anotherSong1.addEventListener("click", () =>{
    audioPlayer = new Audio("all song/song2.m4a");
});

anotherSong2.addEventListener("click", () =>{
  audioPlayer = new Audio("all song/song3.mp3");
});

anotherSong3.addEventListener("click", () =>{
  audioPlayer = new Audio("all song/song4.mp3");
});
anotherSong4.addEventListener("click", () =>{
  audioPlayer = new Audio("all song/song6.m4a");
});
anotherSong5.addEventListener("click", () =>{
  audioPlayer = new Audio("all song/song7.m4a");
});
anotherSong6.addEventListener("click", () =>{
  audioPlayer = new Audio("all song/song8.mp3");
});
anotherSong7.addEventListener("click", () =>{
  audioPlayer = new Audio("all song/song9.mp3");
});
playButton.addEventListener("click", () => {
  audioPlayer.play();
});

pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
});

audioPlayer.addEventListener("timeupdate", () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  // Update the progress slider's value and max attributes
  progressSlider.value = currentTime;
  progressSlider.max = duration;
});

progressSlider.addEventListener("input", () => {
  const seekTime = parseFloat(progressSlider.value);
  audioPlayer.currentTime = seekTime;
});
