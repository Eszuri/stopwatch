document.body.style.color = "white";
document.body.style.backgroundColor = "darkgreen";

// var
let jam;
let menit;
let detik;
let milidetik;
let interval;
let titik;
let boolean = true;
let angka = 0;
window.addEventListener('load', function (e) {
    jam = document.getElementById('Jam').innerHTML = parseInt("0");
    menit = document.getElementById('Menit').innerHTML = parseInt("0");
    detik = document.getElementById('Detik').innerHTML = parseInt("0");
    milidetik = document.getElementById('MiliDetik').innerHTML = parseInt("0");
});
function Start() {
    milidetik += 1;
    document.getElementById('MiliDetik').innerHTML = milidetik;
    if (milidetik == 99) {
        milidetik = -1;
        detik += 1;
        document.getElementById('Detik').innerHTML = detik;
    }
    if (detik == 59) {
        detik = -1;
        menit += 1;
        document.getElementById('Menit').innerHTML = menit;
    }
    if (menit == 59) {
        menit = -1;
        jam += 1;
        document.getElementById('Jam').innerHTML = jam;
    }
}
document.getElementById("Start").addEventListener('click', function (e) {
    interval = setInterval(Start, 10);
    document.getElementById('Start').style.padding = "0px";
    document.getElementById('Start').style.width = "0px";// End
    document.getElementById("Stop/resume").style.padding = "4px";
    document.getElementById("Stop/resume").style.width = "8rem";
    document.getElementById("Stop/resume").style.margin = "5px"; //End
    document.getElementById("refresh").style.padding = "4px";
    document.getElementById("refresh").style.width = "5rem";
    document.getElementById("refresh").style.margin = "5px";
    document.getElementById("mark").style.padding = "4px";
    document.getElementById("mark").style.width = "5rem";
    document.getElementById("mark").style.margin = "5px";
    document.getElementById('str').style.height = "0px";
});
// stop interval
document.getElementById("Stop/resume").addEventListener('click', function (e) {
    if (boolean == true) {
        clearInterval(interval);
        boolean = false;
        document.getElementById('Stop/resume').innerText = "LANJUT";
    } else {
        interval = setInterval(Start, 10);
        boolean = true;
        document.getElementById('Stop/resume').innerText = "STOP";
    }
});

// ulang stopwatch dari awal
document.getElementById('refresh').addEventListener('click', function (e) {
    document.getElementById('Stop/resume').innerText = "STOP";
    boolean = true;
    const konfirmasi = confirm('Yakin akan mengulang dari awal');
    if (konfirmasi) {
        document.getElementById("marker").style.height = "0rem";
        clearInterval(interval);
        jam = document.getElementById('Jam').innerHTML = parseInt("0");
        menit = document.getElementById('Menit').innerHTML = parseInt("0");
        detik = document.getElementById('Detik').innerHTML = parseInt("0");
        milidetik = document.getElementById('MiliDetik').innerHTML = parseInt("0");
        document.getElementById('Start').style.padding = "4px";
        document.getElementById('Start').style.width = "10rem";// End
        document.getElementById("Stop/resume").style.padding = "0px";
        document.getElementById("Stop/resume").style.width = "0rem";
        document.getElementById("Stop/resume").style.margin = "0px"; //End
        document.getElementById("refresh").style.padding = "0px";
        document.getElementById("refresh").style.width = "0rem";
        document.getElementById("refresh").style.margin = "0px";
        document.getElementById("mark").style.padding = "0px";
        document.getElementById("mark").style.width = "0rem";
        document.getElementById("mark").style.margin = "0px";
        document.getElementById('str').style.height = "";
    }
});


// catat waktu
document.getElementById('mark').addEventListener('click', function (e) {
    document.getElementById("marker").style.height = "20rem";
    document.getElementById("marker").style.borderRadius = "4px";
    const spanElement = document.createElement("span");
    spanElement.classList.add("flex", "m-2", "bg-emerald-500", "rounded");

    // Buat elemen <h1>
    const h1Element = document.createElement("h1");
    h1Element.classList.add("w-16", "ml-1", "text-purple-700", "font-extrabold");
    angka += 1; titik = '.';
    h1Element.textContent = angka + titik;

    // Buat elemen <p>
    const pElement = document.createElement("p");
    pElement.classList.add("ml-1");
    pElement.textContent = document.getElementById('Jam').innerHTML + ", " + document.getElementById('Menit').innerHTML + ", " + document.getElementById('Detik').innerHTML + ", " + document.getElementById('MiliDetik').innerHTML;

    // Masukkan elemen <h1> dan <p> ke dalam elemen <span>
    spanElement.appendChild(h1Element);
    spanElement.appendChild(pElement);
    document.getElementById('marker').appendChild(spanElement);
});