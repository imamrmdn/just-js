// switch case

console.log("belajar switch case");
// -------------------------------

let cond = true;
let item;

// while (cond) {
//   item = prompt("masukan item pilihan anda : \n contoh('bangku, meja, kursi')");
//   switch (item) {
//     case "bangku":
//       alert("ini " + item);
//       cond = confirm("apakah anda ingin mengulang?");
//       break;
//     case "meja":
//       alert("ini " + item);
//       cond = confirm("apakah anda ingin mengulang?");
//       break;
//     case "kursi":
//       alert("ini " + item);
//       cond = confirm("apakah anda ingin mengulang?");
//       break;
//     case " ":
//       alert("anda belom memasukan item");
//       cond = confirm("apakah anda ingin mengulang?");
//       break;
//     default:
//       alert("anda memasukan item yang salah");
//       cond = confirm("apakah anda ingin mengulang?");
//       break;
//   }
// }

//refactor
while (cond) {
  item = prompt("masukan item pilihan anda : \n contoh('bangku, meja, kursi')");
  switch (item) {
    case "bangku":
    case "meja":
    case "kursi":
      alert("ini " + item);
      cond = confirm("apakah anda ingin mengulang?");
      break;
    default:
      alert("anda memasukan item yang salah");
      cond = confirm("apakah anda ingin mengulang?");
      break;
  }
}

alert("selesai");
console.log(item);
