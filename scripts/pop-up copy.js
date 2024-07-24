let counter = 0,
  button = document.querySelector(".copy-button"),
  buttonSmall = document.querySelector(".copy-button-small"),
  popupСontainer = document.querySelector(".pop-up-container");

button.onmousedown = function () {
  navigator.clipboard.writeText(button.textContent);
  popUpCreater();
};

buttonSmall.onmousedown = function () {
  navigator.clipboard.writeText(buttonSmall.dataset.copy);
  popUpCreater();
};

function popUpCreater() {
  var new_popup = document
    .getElementById("pop-up-copy-pattern")
    .content.cloneNode(true)
    .querySelector(".pop-up");

  counter++;
  new_popup.id = `popupcopy${counter}`;
  popupСontainer.appendChild(new_popup);

  if (popupСontainer.style.display != "flex")
    popupСontainer.style.display = "flex";

  setTimeout(function () {
    new_popup.remove();
    if (popupСontainer.childNodes.length <= 0) {
      popupСontainer.style.display = "none";
      counter = 0;
    }
  }, 3000);
}
