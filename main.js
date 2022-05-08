const music = new Audio("better.mp3");
// music.play();

// create Array

const songs = [
  {
    id: "1",
    songName: `Chris Brown <br/> 
    <div class="subtitle">Loyal</div>`,
    poster: "img/chris-brown-removebg-preview.png",
  },
  {
    id: "2",
    songName: `Better than this <br/> 
    <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "3",
    songName: `Better than this <br/> 
    <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "4",
    songName: `Chris Brown <br/> 
    <div class="subtitle">Loyal</div>`,
    poster: "img/chris-brown-removebg-preview.png",
  },
  {
    id: "5",
    songName: `Better than this <br/> 
    <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "6",
    songName: `Chris Brown <br/> 
    <div class="subtitle">Loyal</div>`,
    poster: "img/chris-brown-removebg-preview.png",
  },
  {
    id: "7",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "8",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "9",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "10",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "11",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "12",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "13",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "14",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "15",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "16",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "17",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "18",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "19",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "20",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "21",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
  {
    id: "22",
    songName: `Better than this <br/>
      <div class="subtitle">Khalid</div>`,
    poster: "img/better-khalid.jpeg",
  },
];

Array.from(document.getElementsByClassName("songitem")).forEach(
  (element, l) => {
    element.getElementsByTagName("img")[0].src = songs[l].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[l].songName;
  }
);

let masterplay = document.getElementById("masterplay");
let wave = document.getElementsByClassName("wave")[0];

masterplay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterplay.classList.remove("bx-play");
    masterplay.classList.add("bx-pause");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterplay.classList.add("bx-play");
    masterplay.classList.remove("bx-pause");
    wave.classList.remove("active2");
  }
});
