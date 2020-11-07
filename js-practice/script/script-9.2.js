// obj lanjutan

function objMobil(namaSupir, rute, penumpang, kas) {
  //
  this.namaSupir = namaSupir;
  this.rute = rute;
  this.penumpang = penumpang;
  this.kas = kas;

  //
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      //
      console.log("angkot kosong");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas = this.kas + bayar; // this.kas += bayar
        return this.penumpang;
      }
    }
  };
}

let mobil1 = new objMobil("Fikri", ["Cibaduyut", "Ciwidey"], [], 0);

console.log(mobil1.penumpangNaik("Kuman"));
console.log(mobil1.penumpangNaik("Reza"));
console.log(mobil1.penumpangTurun("Kuman", 2500));
console.log(mobil1);
