document.addEventListener("DOMContentLoaded", function() {
    var date = new Date();
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Tambahkan awalan nol jika jam atau menit kurang dari 10
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }

    var day = days[date.getDay()];
    var dateNum = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);

    var element = document.querySelector("body");
    var watermark = document.createElement("div");

    // Setel teks watermark dan propertinya
    watermark.textContent = day + ", " + dateNum + " " + month + " " + year;
    watermark.style = "color:white;opacity:.5;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:150";
    element.appendChild(watermark);

    // Inisialisasi TypeIt
    var initeksnimasi = document.querySelector("#teksnimasi").innerHTML;
    document.querySelector("#teksnimasi").innerHTML = "";

    function katateksnimasi() {
        new TypeIt("#teksnimasi", {
            strings: ["" + initeksnimasi],
            startDelay: 50,
            speed: 55,
            cursor: true,
            afterComplete: function() {
                document.querySelector("#teksnimasi").innerHTML = initeksnimasi;
                setTimeout(smn, 200);
            },
        }).go();
    }

    var fungsi = 0;
    var fungsiklik = 0;
    var skrg = 1;

    function tes() {
        if (fungsi == 0) {
            playaud();
            document.querySelector("#initom").style = "opacity:0;bottom:0;";
            window.scrollBy({ top: tinggi, behavior: 'smooth' });
            fungsi = 1;
            skrg++;
            if (skrg <= 2) { setTimeout(smn, 700); }
            if (skrg == 3) { setTimeout(katateksnimasi, 500); }
            if (skrg == 4) { setTimeout(muncultombol, 1200); }
        }
    }

    function smn() { fungsi = 0; document.querySelector("#initom").style = ""; }
    document.querySelector("#initom").style = "opacity:0;bottom:0;transition:none";

    function muncultombol() { fungtom = 1; document.querySelector("#Tombol").style = "opacity:1;transform:scale(1)"; }

    function aksiakhir() {
        if (fungsiklik == 0) {
            fungsiklik = 1;
            setTimeout(katajudul, 100);
        }
    }

    function katajudul() {
        new TypeIt("#judulakhir", {
            strings: ["" + teksjudulakhir],
            startDelay: 50,
            speed: 50,
            cursor: true,
            afterComplete: function() {
                document.querySelector("#judulakhir").innerHTML = teksjudulakhir;
                setTimeout(katakata, 400);
            },
        }).go();
    }

    function katakata() {
        new TypeIt("#kalimatakhir", {
            strings: ["" + tekskalimatakhir],
            startDelay: 50,
            speed: 48,
            cursor: true,
            afterComplete: function() {
                document.querySelector("#kalimatakhir").innerHTML = tekskalimatakhir;
                document.querySelector("#judulakhir").style = "opacity:0;transform:scale(0);";
                setTimeout(teksmuncul, 350);
                setInterval(berjatuhan, 200);
                setTimeout(kataakhir, 1000);
            },
        }).go();
    }

    function teksmuncul() {
        document.querySelector("#judulakhir").innerHTML = teksjudulakhir2;
        document.querySelector("#judulakhir").style = "font-family:var(--gaya-font3);font-size:27px";
        document.querySelector("#stikerakhir").style = "opacity:0;transform:scale(0)";
        setTimeout(gantifotoakhir, 400);
    }

    function gantifotoakhir() {
        document.querySelector("#stikerakhir").src = document.querySelector("#stikerakhir2").src;
        document.querySelector("#stikerakhir").style = "";
    }

    function kataakhir() {
        new TypeIt("#palingakhir", {
            strings: ["" + tekspalingakhir],
            startDelay: 50,
            speed: 50,
            cursor: true,
            afterComplete: function() {
                document.querySelector("#palingakhir").innerHTML = tekspalingakhir;
                setTimeout(muncultombol2, 500);
            },
        }).go();
    }

    function muncultombol2() {
        fungtom2 = 1;
        document.querySelector("#TombolWA").style = "opacity:1;transform:scale(1)";
    }

    function menuju() {
        if (fungtom2 == 1) {
            window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
        }
    }

    var tinggi = document.querySelector("#iniakhir").offsetHeight;

    function tentukantinggi() {
        tinggi = document.querySelector("#iniakhir").offsetHeight;
    }

    setInterval(tentukantinggi, 200);
    console.log(tinggi);

    var fungsiAud = 0;

    function playaud() {
        if (fungsiAud == 0) {
            fungsiAud = 1;
            document.querySelector("#linkmp3").play();
        }
    }

    function keatas() {
        window.scrollTo(0, 0);
    }

    window.addEventListener("load", (event) => {
        window.scrollTo(0, 0);
        setTimeout(keatas, 500);

        var overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
        document.querySelector("#initom").style = "";
        document.querySelector("#first_stiker").style = "opacity:1;transition:all 2s ease";
        ScrollReveal({ reset: true });
        ScrollReveal().reveal(".show-once", { reset: false });
        ScrollReveal().reveal(".title", { duration: 2500, origin: "top", distance: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", rotate: { x: 20, z: -10 } });
        ScrollReveal().reveal(".fade-in", { delay: 200, duration: 2500, move: 0 });
        ScrollReveal().reveal(".scaleUp", { duration: 2500, scale: 0.85 });
        ScrollReveal().reveal(".flip", { delay: 200, duration: 2000, rotate: { x: 20, z: 20 } });
        ScrollReveal().reveal(".slide-right", { duration: 1000, origin: "left", distance: "300px", easing: "ease-in-out" });
        ScrollReveal().reveal(".slide-up", { duration: 1500, origin: "bottom", distance: "100px", easing: "cubic-bezier(.37,.01,.74,1)", opacity: 0, scale: 0.5 });

        document.addEventListener('scroll', function(e) {
            let documentHeight = document.body.scrollHeight;
            let currentScroll = window.scrollY + window.innerHeight;
            let modifier = 200;
            if (currentScroll + modifier > documentHeight) {
                console.log('Sudah sampai bawah!');
                document.querySelector("#initom").style = "opacity:0;bottom:0";
                setTimeout(aksiakhir, 10);
            }
        });
    });
});
