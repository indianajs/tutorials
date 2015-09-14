var flowerPin = document.getElementById('flowerpin');
var rotationAnimation;
var i = 0;

function startPinRotationDemo() {
  rotationAnimation = setInterval(function() {
    flowerPin.style.webkitTransform = 'rotate(' + i + 'deg)';
    i++;
    //reset if we reached the full circle - actually not necessary because of the periodicity of the circle
    if (i > 360) i = 0;
  }, 50);
}