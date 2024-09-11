var radius = 320; // Radius lingkaran yang lebih besar untuk mengakomodasi lebih banyak gambar
var autoRotate = true; // Rotasi otomatis atau tidak
var rotateSpeed = -60; // Satuan: detik/360 derajat
var imgWidth = 60; // Lebar gambar (unit: px)
var imgHeight = 80; // Tinggi gambar (unit: px)

// Link musik latar belakang - set 'null' jika tidak ingin memutar musik latar belakang
var bgMusicURL = 'https://raw.githubusercontent.com/FirzaSyauqi/ForMyVibi/main/JustTheTwoOfUs.mp3';
var bgMusicControls = true; // Tampilkan kontrol musik

// ===================== start =======================
// animasi dimulai setelah 1000 milidetik
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // gabungkan 2 array

// Ukuran gambar
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Ukuran ground - bergantung pada radius
var ground = document.getElementById('ground');
ground.style.width = radius * 2 + "px"; // Diameter lingkaran
ground.style.height = radius * 2 + "px"; // Diameter lingkaran

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTransform(obj) {
  // Batasi sudut kamera (antara 0 dan 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Terapkan sudut
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
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

// tambahkan musik latar belakang
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX, sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX, nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTransform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTransform(odrag);
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

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

// fungsi untuk menambahkan hati berjatuhan
function createFallingHearts() {
  var container = document.getElementById('heart-container');
  var colors = ['#FF0000', '#FF69B4']; // Warna hati

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  for (var i = 0; i < 20; i++) {
    var heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.backgroundColor = randomColor();
    heart.style.left = randomIntFromRange(0, window.innerWidth) + 'px';
    heart.style.animationDuration = randomIntFromRange(5, 10) + 's';
    container.appendChild(heart);
  }
}

createFallingHearts();
