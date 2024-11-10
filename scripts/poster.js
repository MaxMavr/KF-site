const popUpPosters = document.querySelectorAll(".poster-demonstration img"),
  popupPosterContainer = document.querySelector(".pop-up-poster-container");

popUpPosters.forEach((poster) => {
  poster.addEventListener("click", () => popUpPosterCreate(poster.cloneNode(true)));
});

function popUpPosterCreate(img) {
  const newPopup = document.createElement("div");
  newPopup.classList.add("pop-up-poster-bg");
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
  }, 10);
}
