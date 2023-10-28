let lepes;
let sor;
const lampak = document.querySelectorAll(".lampa");

function kapcsol(az) {
    const lampa = lampak[az];
    if (sor[az] == 0) {
        lampa.style.backgroundColor = "yellow";
        sor[az] = 1;
    } else {
        lampa.style.backgroundColor = "black";
        sor[az] = 0;
    }
}
function valt(n) {
    kapcsol(n);
    if (n < 6) {
        kapcsol(n+1);
    } else {
        kapcsol(0);
    }
    if (n > 0) {
        kapcsol(n-1);
    } else {
        kapcsol(6);
    }
}
function kever() {
    lepes = 0;
    sor = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 100; i++) {
        valt(Math.floor(Math.random() * sor.length));
    }
    if (sor.toString() == "0,0,0,0,0,0,0")
        kever();
}
kever();
function vege() {
    if (sor.toString() == "0,0,0,0,0,0,0") {
        let n = prompt("Gratulálok, sikerült " + lepes + " lépésben!\nNeved?");
        kever();
    } 
}
for (let i = 0; i < lampak.length; i++) {
    lampak[i].onclick = function() {
        valt(i);
        lepes++;
        setTimeout(vege, 100);
    }
}