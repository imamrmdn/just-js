// if else

console.log("belajar if else");
// ---------------------------

// let num = 1;
// let mobilBagus = 10;
// let jmlhMobil = 15;

// while (num <= 10) {
//   if (num <= 5) {
//     console.log("mobil " + num + " baik");
//     num++;
//   } else {
//     console.log("mobil " + num + " butut");
//     num++;
//   }
// }

// for (num; num <= jmlhMobil; num++) {
//   if (num <= mobilBagus) {
//     if (num == 7 || num == 2) {
//       console.log("mobil " + num + " lembur");
//     } else if (num == 5) {
//       console.log("mobil " + num + " otw puncak");
//     } else {
//       console.log("mobil " + num + " bagus");
//     }
//   } else if (num == 11) {
//     console.log("mobil " + num + " lembur");
//   } else {
//     console.log(num + " mobil butut");
//   }
// }
let num = 1;
let mobilBagus = 10;
let jmlhMobil = 15;

// refactoring
for (num; num <= jmlhMobil; num++) {
  if (num <= mobilBagus && num != 5 && num != 2) {
    console.log("mobil " + num + " bagus");
  } else if (num == 2) {
    console.log("mobil " + num + " otw puncak");
  } else if (num == 11 || num == 5) {
    console.log("mobil " + num + " lembur");
  } else if (num == 12) {
    console.log("joker");
  } else {
    console.log(num + 2 + " mobil butut");
  }
}
