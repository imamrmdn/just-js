const num = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9, 7, 12]
const angka = []
const a = 10

for(let i =0; i < num.length; i++){
    if(num[i] >= 3){
        angka.push(num[i])
    }
}

console.log(...angka);

//manipulasi array function filter
//pengganti for
// const newAngka = angka.filter(function(e){
//     return e >= 4
// })
const newAngka = angka.filter(e => e >= 4 )
console.log(newAngka);

//map
const newNumber = angka.map((e, i) => `${e * 2} yang ke ${i}`).join(' , ')
console.log(newNumber);

//reduce = menjumlahkan semua bilangan yg ada pad array
const newNum = angka.reduce((acc, curr) => acc + curr, 0) //0 nilai awal atau default
console.log(newNum);

//method Chaining
//cari angka >= 8
// dibagi 2
//dan jumlahkan
const newArr = angka.filter(e => e >= 8).map(e => e / 2).reduce((acc, curr)=> acc + curr)
console.log(newArr);