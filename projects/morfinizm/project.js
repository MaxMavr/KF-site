let eyesRectCenter = [];
const eyes = document.querySelectorAll("#eye");


eyes.forEach((eye) => {
  const eyeRect = eye.getBoundingClientRect();

  eye.style.transition = "all .1s cubic-bezier(0.35, 0.36, 0.58, 0.98)";

  eyesRectCenter.push({
    eye: eye,
    width: eyeRect.width,
    height: eyeRect.height,
    centerX: eyeRect.left + eyeRect.width / 2,
    centerY: eyeRect.top + eyeRect.height / 2 + window.scrollY,
  });
});

function rotationEyes(el) {
  eyesRectCenter.forEach((eyeRectCenter) => {
    let offsetX = el.clientX - eyeRectCenter.centerX,
      offsetY = el.clientY - eyeRectCenter.centerY + window.scrollY;

    let angle = Math.atan2(offsetY, offsetX);

    eyeRectCenter.eye.style.transform = `
    translate(
        ${Math.cos(angle) * eyeRectCenter.width * 1.5}px,
        ${Math.sin(angle) * eyeRectCenter.height * 1.5}px)
        `;  

    if (Math.abs(offsetY) < 50 && Math.abs(offsetX) < 50) {
      eyeRectCenter.eye.setAttribute('ry', '0');
    } else {
      eyeRectCenter.eye.setAttribute('ry', '5');
    }
  });
}

document.body.addEventListener("mousemove", rotationEyes);
