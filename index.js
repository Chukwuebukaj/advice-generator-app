const titleDisplay = document.querySelector(".title"),
  contentDisplay = document.querySelector(".content"),
  adviceButton = document.querySelector("#get-advice-btn");

adviceButton.addEventListener("click", getAdvice);
document.addEventListener("keydown", getAdvice);

function getAdvice() {
  contentDisplay.innerText = "Loading...";
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      titleDisplay.innerText = `ADVICE #${JSON.stringify(data.slip.id)}`;
      contentDisplay.innerText = JSON.stringify(data.slip.advice);
    })
    .catch((error) => console.log(error));
}
