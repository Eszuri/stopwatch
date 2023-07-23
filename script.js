document.body.style.color = "white";
document.body.style.backgroundColor = "darkgreen";
// var
let jam;
let menit;
let detik;
let milidetik;
let interval;
let titik;
let spanElement;
let h1Element;
let pElement;
let boolean = true;
let boolean2 = true;
let boolean3 = true;
let angka = 0;
window.addEventListener('load', function (e) {
    jam = document.getElementById('Jam').innerHTML = parseInt("0");
    menit = document.getElementById('Menit').innerHTML = parseInt("0");
    detik = document.getElementById('Detik').innerHTML = parseInt("0");
    milidetik = document.getElementById('MiliDetik').innerHTML = parseInt("0");
    document.getElementById('Jam').style.color = "red";
    document.getElementById('Menit').style.color = "rgb(0, 253, 8)";
    document.getElementById('Detik').style.color = "rgb(17, 65, 255)";
    document.getElementById('MiliDetik').style.color = "white";
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
        document.getElementById('save').style.width = '0rem';
        document.getElementById('inputsave').style.width = "0rem";
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
        angka = 0;
        while (document.getElementById('marker').firstChild) {
            document.getElementById("marker").removeChild(document.getElementById("marker").firstChild);
        }
    }
});

// catat waktu
document.getElementById('mark').addEventListener('click', function () {
    if (localStorage.length == 5) {
        document.getElementById('save').style.width = '0rem';
        document.getElementById('inputsave').style.width = "0rem";
    } else {
        document.getElementById('save').style.width = '18rem';
        document.getElementById('inputsave').style.width = "18rem";
    }
    document.getElementById("marker").style.height = "10rem";
    document.getElementById("marker").style.scrollBehavior = "smooth";
    document.getElementById("marker").style.borderRadius = "4px";
    document.getElementById('marker').scrollTo(0, 99999999999999);
    spanElement = document.createElement("span");
    spanElement.classList.add("flex", "m-2", "bg-emerald-500", "rounded");

    // Buat elemen <h1>
    h1Element = document.createElement("h1");
    h1Element.classList.add("w-16", "ml-1", "text-purple-700", "font-extrabold");
    angka += 1; titik = '.';
    h1Element.textContent = angka + titik;

    // Buat elemen <p>
    pElement = document.createElement("p");
    pElement.classList.add("ml-1", "text-3xl");
    pElement.textContent = document.getElementById('Jam').innerHTML + ", " + document.getElementById('Menit').innerHTML + ", " + document.getElementById('Detik').innerHTML + ", " + document.getElementById('MiliDetik').innerHTML;

    // Masukkan elemen <h1> dan <p> ke dalam elemen <span>
    spanElement.appendChild(h1Element);
    spanElement.appendChild(pElement);
    document.getElementById('marker').appendChild(spanElement);
});

// simpan ke localstorage
document.getElementById("save").addEventListener('click', function (e) {
    if (document.getElementById('inputsave').value === '') {
        alert('DI ISI CUY');
    } else {
        localStorage.setItem(document.getElementById("inputsave").value, document.getElementById('marker').innerHTML);
        alert('TERIMPAN DI LOCALSTORAGE');
        document.getElementById('save').style.width = "0rem";
        document.getElementById('inputsave').style.width = "0rem";
        document.getElementById('inputsave').value = "";
        document.getElementById('marker').style.height = "0rem";
        angka = 0;
        while (document.getElementById('marker').firstChild) {
            document.getElementById("marker").removeChild(document.getElementById("marker").firstChild);
        }
    }
});

//
document.getElementById("ls").addEventListener('click', function (e) {
    if (boolean2 == true) {
        document.getElementById('getItem1').innerHTML = localStorage.getItem(localStorage.key(0));
        document.getElementById('ls1').innerText = localStorage.key(0);
        //
        document.getElementById('getItem2').innerHTML = localStorage.getItem(localStorage.key(1));
        document.getElementById('ls2').innerText = localStorage.key(1);
        //
        document.getElementById('getItem3').innerHTML = localStorage.getItem(localStorage.key(2));
        document.getElementById('ls3').innerText = localStorage.key(2);
        //
        document.getElementById('getItem4').innerHTML = localStorage.getItem(localStorage.key(3));
        document.getElementById('ls4').innerText = localStorage.key(3);
        //
        document.getElementById('getItem5').innerHTML = localStorage.getItem(localStorage.key(5));
        document.getElementById('ls5').innerText = localStorage.key(4);
        document.getElementById('locStorgSect').style.bottom = "0%";
        document.getElementById('locStorgSect2').style.bottom = "40px";
        boolean2 = false;
    } else {
        document.getElementById('locStorgSect').style.bottom = "200%";
        document.getElementById('locStorgSect2').style.bottom = "200%";
        boolean2 = true;
    }
});

//
document.getElementById("delet").addEventListener('click', function (e) {
    localStorage.removeItem(document.getElementById('inputDelet').value);
    document.getElementById('getItem1').innerHTML = localStorage.getItem(localStorage.key(0));
    document.getElementById('ls1').innerText = localStorage.key(0);
    //
    document.getElementById('getItem2').innerHTML = localStorage.getItem(localStorage.key(1));
    document.getElementById('ls2').innerText = localStorage.key(1);
    //
    document.getElementById('getItem3').innerHTML = localStorage.getItem(localStorage.key(2));
    document.getElementById('ls3').innerText = localStorage.key(2);
    //
    document.getElementById('getItem4').innerHTML = localStorage.getItem(localStorage.key(3));
    document.getElementById('ls4').innerText = localStorage.key(3);
    //
    document.getElementById('getItem5').innerHTML = localStorage.getItem(localStorage.key(4));
    document.getElementById('ls5').innerText = localStorage.key(4);
    document.getElementById('inputDelet').value = "";
});

//
document.getElementById('ls1').addEventListener('click', function (e) {
    document.getElementById('inputDelet').value = document.getElementById('ls1').textContent;
    document.getElementById('delet').scrollIntoView();
});
//
document.getElementById('ls2').addEventListener('click', function (e) {
    document.getElementById('inputDelet').value = document.getElementById('ls2').textContent;
    document.getElementById('delet').scrollIntoView();
});
//
document.getElementById('ls3').addEventListener('click', function (e) {
    document.getElementById('inputDelet').value = document.getElementById('ls3').textContent;
    document.getElementById('delet').scrollIntoView();
});
//
document.getElementById('ls4').addEventListener('click', function (e) {
    document.getElementById('inputDelet').value = document.getElementById('ls4').textContent;
    document.getElementById('delet').scrollIntoView();
});
//
document.getElementById('ls5').addEventListener('click', function (e) {
    document.getElementById('inputDelet').value = document.getElementById('ls5').textContent;
    document.getElementById('delet').scrollIntoView();
});

//
document.getElementById("sett").addEventListener('click', function (e) {
    if (boolean3 == true) {
        document.getElementById('Sett').style.bottom = "0%";
        document.getElementById('Sett2').style.bottom = "40px";
        boolean3 = false;
    } else {
        document.getElementById('Sett').style.bottom = "200%";
        document.getElementById('Sett2').style.bottom = "200%";
        boolean3 = true;
    }
});