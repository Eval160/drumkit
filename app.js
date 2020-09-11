const allValidKeys = ["q", "s", "d", "f", "g", "h", "j", "k", "l"]

const playSound = (event) => {
  const keyAudio = document.getElementById(event.key)
  const audioName = keyAudio.querySelector(".sound").innerText.toLowerCase()
  const audio = new Audio(`sound/${audioName}.wav`)
  audio.play()
};

const keySelected = (key) => {
  return document.getElementById(key).classList
};

const addClass = (event) => {
  if (allValidKeys.includes(event.key)) {
    keySelected(event.key).add("played");
    playSound(event);
  }
};

document.addEventListener("keydown", addClass);

const removeTransition = (event) => {
  if (event.propertyName !== "transform") return;
  event.srcElement.classList.remove("played")
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition)
});
