let heading = document.querySelector("h1");
let btn = document.querySelector(".btn");
let randomNum1 = Math.floor(((Math.random() * 100) % 6) + 1);
let randomNum2 = Math.floor(((Math.random() * 100) % 6) + 1);
document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNum1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNum2}.png`);
if (randomNum1 > randomNum2) {
  heading.textContent = "Player One Wins";
  heading.classList.add("win");
} else if (randomNum1 < randomNum2) {
  heading.textContent = "Player Two Wins";
  heading.classList.add("win");
} else {
  heading.textContent = "Tied. Refresh Again! ";
  heading.classList.add("tied");
}
btn.addEventListener("click", () => {
  location.reload();
});
