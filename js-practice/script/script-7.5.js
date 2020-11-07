// implementasi rekrusif
// - menggantikan Looping
// - Fibonacci
// - pencarian dan penelusuran pada struktur data list dan tree

console.log("function rekrusif");
//------------------------------

function printNumber(n) {
  //basecase
  if (n == 0) return;

  console.log(n);
  printNumber(n - 1);
}

printNumber(13);

//pemanfaatan function rekrusif untuk menghitung faktorial sebuah nilai
function faktorial(n) {
  if (n == 0) return 1;
  return n * faktorial(n - 1);
}
//6 * 5 * 4 * 3 * 2 * 1
console.log(faktorial(6));

//faktorial menggunakan loop
let hasil = 1;
for (let i = 6; i > 0; i--) {
  hasil *= i;
}
console.log(hasil);

//function expression
let result = (n) => {
  return n * 3;
};

let res = (j, i) => {
  console.log(j * i);
};

res(result(5), 5);
