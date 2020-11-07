// for

console.log("belajar for");
// -----------------------

// let jumlahMobil = prompt("Masukan Jumlah Mobil yang ingin anda cek");
// let mobilBagus = prompt("berapa jumlah mobil yang baik untuk beroperasi?");
let jmlhMobil = 15;
let mobilBagus = 7;
let noMobil = 1;

while (noMobil <= mobilBagus) {
  console.log("mobil no " + noMobil + " beroperasi dengan baik");
  noMobil++;
}

for (noMobil; noMobil <= jmlhMobil; noMobil++) {
  console.log(noMobil + " tidak beroperasi dengan baik");
}
