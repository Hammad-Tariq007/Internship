let buttons = document.querySelectorAll("button");
function playSound(src) {
  const audio = new Audio(`sounds/${src}.mp3`);
  audio.play();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("pressed");
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 100);
    // console.log(btn.textContent);
    const key = btn.innerText.toLowerCase();
    handleInput(key);
    // playSound("crash");
  });
  btn.addEventListener("keydown", (e) => {
    // console.log(e.key);
    btn.classList.add("pressed");
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 100);
    handleInput(e.key);
  });
});

function handleInput(key) {
  switch (key) {
    case "w":
      playSound("tom-1");
      break;
    case "a":
      playSound("tom-3");
      break;
    case "s":
      playSound("snare");
      break;
    case "d":
      playSound("crash");
      break;
    case "j":
      playSound("kick-bass");
      break;
    case "k":
      playSound("tom-4");
      break;
    case "l":
      playSound("tom-2");
      break;
  }
}
