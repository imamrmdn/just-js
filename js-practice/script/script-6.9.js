// game suwit gunting batu kertas

console.log("membuat game suwit gunting batu kertas");
//---------------------------------------------------

// pilihan player
let p = prompt(
  "Game Suwit \nMasukan pilihan anda: \ncontoh: Gunting, Batu, Kertas"
);

// computer memilih random
let comp = parseFloat(Math.random().toFixed(2));
let result;

// rules comp
if (comp <= 0.35) {
  comp = "Gunting";
} else if (comp >= 0.36 && comp < 0.65) {
  comp = "Batu";
} else if (comp >= 0.66) {
  comp = "Kertas";
}

// rules
if (p == "" || p == null) {
  alert("anda belum memasukan pilihan");
  p = "tidak ada";
  if (result == undefined) {
    result = "Tidak ada Hasil";
  }
} else if (p == comp) {
  result = "SERI";
} else if (p == "Gunting") {
  result = comp == "Kertas" ? "MENANG" : "KALAH";
} else if (p == "Batu") {
  result = comp == "Gunting" ? "MENANG" : "KALAH";
} else if (p == "Kertas") {
  result = comp == "Batu" ? "MENANG" : "KALAH";
} else {
  if (result == undefined) {
    result = "Tidak ada Hasil";
  }
  console.log("salah memasukan pilihan");
}

//
console.log("player memilih " + p);
console.log("computer memilih " + comp);
console.log("hasil " + result);
