const popUpPosters = document.querySelectorAll(".poster-demonstration div"),
  popupPosterContainer = document.querySelector(".pop-up-poster-container");

popUpPosters.forEach((poster) => {
  poster.onclick = () => {
    popUpPosterCreate(
      poster.style.backgroundImage.match(/url\(["'](.*)["']\)/)[1]
    );
  };
});

function popUpPosterCreate(path2img) {
  let newPopup = document.createElement("div");
  newPopup.classList.add("pop-up-poster-bg");
  let img = document.createElement("img");
  img.src = path2img;
  newPopup.appendChild(img);

  newPopup.onclick = () => {
    newPopup.classList.remove("isvisible");
    setTimeout(function () {
      newPopup.remove();
    }, 300);
  };

  popupPosterContainer.appendChild(newPopup);
  setTimeout(function () {
    newPopup.classList.add("isvisible");
  }, 1);
}
