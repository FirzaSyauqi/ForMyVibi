var radius = 250; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -80; // unit: seconds/360 degrees
var imgWidth = 100; // width of images (unit: px)
var imgHeight = 160; // height of images (unit: px)

// Link of background music - set 'null' if you don't want to play background music
var bgMusicURL = 'https://raw.githubusercontent.com/FirzaSyauqi/ForMyVibi/main/beautiful.mp3';
var bgMusicControls = true; // Show UI music control

// ===================== start =======================
// animation start after 1000 milliseconds
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music with 'muted' initially for autoplay compliance
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
    <audio id="bgMusic" src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop muted>    
      <p>If you are reading this, it is because your browser does not support the audio element.</p>
    </audio>
  `;
  
  // Attempt to play the audio and unmute after the page loads
  window.addEventListener('load', function() {
    var audio = document.getElementById('bgMusic');
    audio.muted = false; // Unmute once the page has loaded
    audio.play().catch(error => {
      console.log('Autoplay was prevented:', error);
      // Optionally, show a UI element to let users play the audio manually
    });
  });
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

// Wheel event for zoom in/out on desktop
document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

// ===================== Mobile Pinch-to-Zoom Start =====================
var initialDistance = 0;
var initialRadius = radius;

// Fungsi untuk menghitung jarak antara dua titik sentuh
function getDistance(touches) {
  var dx = touches[0].clientX - touches[1].clientX;
  var dy = touches[0].clientY - touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

// Event listener untuk mulai menyentuh layar (2 jari untuk pinch)
document.addEventListener('touchstart', function (e) {
  if (e.touches.length === 2) {
    initialDistance = getDistance(e.touches);
    initialRadius = radius;
  }
});

// Event listener untuk pinch (zoom in/out)
document.addEventListener('touchmove', function (e) {
  if (e.touches.length === 2) {
    var currentDistance = getDistance(e.touches);
    var distanceChange = currentDistance - initialDistance;
    
    // Ubah radius berdasarkan perubahan jarak
    radius = initialRadius + distanceChange * 0.1; // Sesuaikan nilai zoom (0.1 adalah kecepatan zoom)
    
    init(1); // Apply perubahan radius ke gambar
    e.preventDefault(); // Mencegah scroll atau zoom default di browser
  }
});
// ===================== Mobile Pinch-to-Zoom End =====================
