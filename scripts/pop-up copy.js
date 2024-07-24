var counter = 0,
  button = document.querySelector('.copy-btn'),
  popup_container = document.querySelector('.pop-up-container');


button.onclick = function() {
  navigator.clipboard.writeText(button.textContent);

  var new_popup = document.getElementById('pop-up-copy-pattern').content.cloneNode(true).querySelector('.pop-up');

  counter++;
  new_popup.id = `popupcopy${counter}`;
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
