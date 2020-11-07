// array

console.log("latihan array");
//--------------------------

let arr = [9, 8, 7, 5, 0];
arr.pop();
arr.push(9, 8, 10);

arr.join();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let array = [9, 10, 9, 0, 8, 2, 1];
let result = array.join(" ~ ");

console.log(arr);
console.log(result);

// shift dan unshift
//menambahkan dan menghapus di index awal array
let a = ["Imam", "Jai", "Sensu"];
a.unshift("Kuman");
console.log(a.join(" - "));
a.shift();
console.log(a.join(" - "));

//forEach tidak mengembalikan nilai array
//map mengembalikan nilai array
let angka = [9, 8, 7, 6, 3];
angka.forEach((e, i) => {
  console.log(`${e} index ke ${i}`);
});

let angkaMap = [8, 9, 6, 7, 10, 23];
let angkaMapBaru = angkaMap.map((e, i) => {
  return `${e} yang ke ${i}`;
});
console.log(angkaMapBaru);

//sort
let angkaSort = [13, 2, 4, 5, 6, 10, 1, 9, 7];
angkaSort.sort((e, f) => {
  return e - f;
});
console.log(angkaSort);

//filter untuk menemukan banyak nilai
//find untuk menemukan 1 nilai
let arrayFilter = [4, 5, 7, 9, 10, 8, 12, 20];
let arrFilter = arrayFilter.filter((e) => {
  return e > 7;
});
console.log(arrFilter);

let arrFind = arrayFilter.find((e) => {
  return e < 10;
});

console.log(arrFind);
