// Pengaturan untuk carousel 3D
var radius = 240; // Besarnya radius
var autoRotate = true; // Apakah carousel berputar otomatis
var rotateSpeed = -60; // Kecepatan putar (detik/360 derajat)
var imgWidth = 120; // Lebar gambar (satuan: px)
var imgHeight = 170; // Tinggi gambar (satuan: px)

// Link untuk musik latar belakang - gunakan 'null' jika tidak ingin memutar musik
var bgMusicURL = 'https://raw.githubusercontent.com/FirzaSyauqi/ForMyVibi/main/JustTheTwoOfUs.mp3';
var bgMusicControls = true; // Menampilkan kontrol musik

// Animasi dimulai setelah 1000 milidetik
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // Gabungkan 2 array

// Ukuran gambar
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Ukuran ground - bergantung pada radius
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

function applyTransform(obj) {
  // Batasi sudut kamera (antara 0 dan 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Terapkan sudut
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// Putaran otomatis
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// Tambahkan musik latar belakang
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// Setup events untuk mengontrol carousel
document.onpointerdown = function(e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function(e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTransform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function(e) {
    odrag.timer = setInterval(function() {
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

// Kontrol zoom dengan roda mouse
document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

// JavaScript untuk animasi hati berjatuhan
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // durasi jatuh antara 3-5 detik

  // Acak warna hati antara merah dan merah muda
  heart.style.backgroundColor = Math.random() > 0.5 ? 'red' : 'pink';

  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000); // Menghapus hati setelah 5 detik
}

// Membuat hati baru setiap 300 milidetik
setInterval(createHeart, 300);
