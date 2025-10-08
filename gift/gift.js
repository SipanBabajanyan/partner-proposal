var c = document.getElementById('container');
var box = document.getElementById('box');

window.addEventListener('devicemotion', function(e) {
  console.log(e);
  var ps = document.querySelectorAll('p');
  ps[0] = 'a'+e.rotationRate.aplha;
  ps[1] = 'b'+e.rotationRate.beta;
  ps[2] = 'g'+e.rotationRate.gamma;
  ps[3].textContent = e.accelerationIncludingGravity.x;
  ps[4].textContent = e.accelerationIncludingGravity.y;
  ps[5].textContent = e.accelerationIncludingGravity.z;
});
/*
c.animate([
  {transform: 'rotateY(-40deg) rotateZ(60deg)'},
  {transform: 'rotateY(40deg) rotateZ(-60deg)'}
], {
  duration: 1600,
  easing: 'ease-in-out',
  direction: 'alternate',
  iterations: Infinity
});
//*/



