let counter = 0;
const popUpButtons = document.querySelectorAll('.pop-up-button'),
popupContainer = document.querySelector(".pop-up-container");

popUpButtons.forEach(button => {
  if (button.dataset.mode == "copy") {
    button.onmousedown = () => {
      textCopy(button.dataset.copytxt);
      popUpCreate(button.dataset.img, button.dataset.msg, "copy");
    };
  } 
  else if (button.dataset.mode == "dnld") {
    button.onclick = () => {
      popUpCreate(button.dataset.img, button.dataset.msg, "download");
    };
  } 
  else console.log("Не инструкций для попапа");
});

function textCopy(text) {
  navigator.clipboard.writeText(text);
}

function popUpCreate(path2img, message, mode) {
  counter++;
  
  let newPopup = document.createElement('div');
  newPopup.id = `pop-up ${mode} ${counter}`;
  newPopup.className = 'pop-up';

  let img = document.createElement('img');
  img.src = `${path2img}`;

  let span = document.createElement('span');
  span.textContent = message;

  newPopup.appendChild(img);
  newPopup.appendChild(span);

  popupContainer.appendChild(newPopup);

  if (popupContainer.style.display != "flex")
    popupContainer.style.display = "flex";

  setTimeout(function () {
    newPopup.remove();
    if (popupContainer.childNodes.length <= 0) {
      popupContainer.style.display = "none";
      counter = 0;
    }
  }, 3000);
}
