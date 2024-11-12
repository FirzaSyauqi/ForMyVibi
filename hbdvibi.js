const body = document.querySelector("body");
const iniwp = [];
let iden = 1;
const swals = Swal.mixin({
  timer: 99999,
  allowOutsideClick: false,
  showConfirmButton: true,
  timerProgressBar: false,
  imageHeight: 90,
});

let audio = new Audio(linkmp3.src);
let ftganti = 0;
let fungsi = 0;
let fungsiAwal = 0;
let deffotostiker = fotostiker.src;

function berjatuhan() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = `${Math.random() * 90}vw`;
  heart.style.animationDuration = `${(Math.random() * 3) + 2}s`;
  body.appendChild(heart);
}

setInterval(() => {
  const heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);

Content.style = "opacity:1;margin-top:14vh";

const box = document.getElementById('pergeseran');
const totalSlide = box.children.length;
console.log('Skrip dibuat oleh feeldream.id 😋');
console.log('Total Slide: ', totalSlide);
let totalPesan = totalSlide;

let sudahklik = true;
loveIn.innerHTML = "<label class='lovein'><svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg></label>";

document.getElementById("loveIn").onclick = function() {
  if (sudahklik && fungsiAwal === 0) {
    loveIn.style = "transition:all .5s ease;opacity:0";
    ftAwal.style = "transition:all .5s ease;opacity:0";
    ket.style = "transition:all .5s ease;opacity:0";
    link.style = "transition:all .5s ease;opacity:0";
    fungsiAwal = 1;
    setTimeout(initengahan, 300);
  } else {
    sudahklik = true;
    loveIn.innerHTML = "<label class='lovein'><svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg></label>";
  }
};

function initengahan() {
  link.style = "display:none";
  ftAwal.style = "display:none";
  loveIn.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:10vh";
  setTimeout(inipesan, 200);
  audio.play();
}

let aktigeser = 0;
let thisgeser = 1;
document.getElementById("bodyblur").onclick = function() {
  multifungsi();
};

function multifungsi() {
  if (aktigeser === 1) {
    if (thisgeser === totalPesan) {
      aksiakhir();
    }
    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();
    keterangan.style = "";
    if (thisgeser > totalPesan) {
      document.getElementById('dots-container').style = "";
    } else {
      moveToNextDot();
    }
  }
  if (thisgeser === 100) {
    setTimeout(aksibalas, 150);
  }
}

async function inipesan() {
  let nama = "Kamu";
  window.nama = nama;
  mulainama();
}

async function mulainama() {
  setTimeout(pgmuncul, 200);
}

function hsementara() {
  thisgeser += 1;
  aktigeser = 0;
  setTimeout(munculkembali, 500);
}

function munculkembali() {
  if (thisgeser <= totalPesan) {
    aktigeser = 1;
  }
}

function aksiakhir() {
  pergeseran.style = "position:relative;";
  bodyblur.style = "opacity:.2";
  setTimeout(() => {
    document.getElementById("gift").classList.add("animate");
    document.getElementById("teksgift").classList.add("textanimate");
    setTimeout(bqmuncul, 2000);
  }, 600);
}

function kalimatakhir() {
  new TypeIt("#kalimat", {
    strings: [katakata],
    startDelay: 50,
    speed: 37,
    cursor: true,
    afterComplete: function () {
      kalimat.innerHTML = katakata;
      setTimeout(munculteksnim, 300);
    },
  }).go();
}

function munculteksnim() {
  teksnim.style = "position:relative;opacity:1;transform:scale(1);margin:20px auto";
  setTimeout(jjteksnim, 550);
  ftganti = 1;
  fthilang();
}

function jjteksnim() {
  teksnim.style.animation = "rto .8s infinite alternate";
}

function pgmuncul() {
  pergeseran.style = "position:relative;opacity:1;transform:scale(1);";
  keterangan.style = "opacity:.7";
  document.getElementById('dots-container').style = "opacity:1";
  setTimeout(munculkembali, 500);
}

function bqmuncul() {
  bodyblur.style = "";
  Content.style = "opacity:1;margin-top:7vh";
  fotostiker.style = "display:none";
  pergeseran.style = "display:none";
  bq.style = "position:relative;opacity:1;visibility:visible;margin-top:0px;transform: scale(1);";
  setTimeout(kalimatakhir, 200);
  ftganti = 0;
  fthilang();
}

const pergeseran = document.getElementById('pergeseran');
const dotsContainer = document.getElementById('dots-container');

// Create dots based on the number of <p> elements
const paragraphs = pergeseran.getElementsByTagName('p');
const numberOfDots = paragraphs.length;

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  if (i === 0) {
    dot.classList.add('active');
  }
  dotsContainer.appendChild(dot);
}

let currentDotIndex = 0;

function moveToNextDot() {
  dotsContainer.children[currentDotIndex].classList.remove('active');
  currentDotIndex = (currentDotIndex + 1) % numberOfDots;
  dotsContainer.children[currentDotIndex].classList.add('active');
}

function fthilang() {
  if (ftganti === 1) {
    ftAwal.style.display = "none";
  }
}
