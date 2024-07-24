var counter = 0,
  button = document.querySelector('.download-btn'),
  popup_container = document.querySelector('.pop-up-container');


button.onclick = function() {

  var new_popup = document.getElementById('pop-up-download-pattern').content.cloneNode(true).querySelector('.pop-up');

  counter++;
  new_popup.id = `popupdownload${counter}`;
  popup_container.appendChild(new_popup);

  if (popup_container.style.display != 'flex') popup_container.style.display = 'flex';

  setTimeout(function() {
    new_popup.remove();
    if (popup_container.childNodes.length <= 0 ) {
      popup_container.style.display = 'none';
      counter = 0;
    }
  },
    3000);
}
