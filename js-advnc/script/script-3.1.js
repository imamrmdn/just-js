//arrow function
let arr = ['Imron', 'Reja', 'Dikiharidansyah'];

// let array = arr.map((e) => `${e} ${e.length}`)
let array = arr.map((e, i) => ({ nama: e, panjang: e.length, nomor: i}))

// console.log(array);
console.table(array);

//konsep this pada arrow function
//Constructor Function
// const User = function () {
//     this.name = 'Imron'
//     this.age = 22
//     this.sayName = () => {
//         return `Halo ${this.name} Umur ${this.age}`
//     }

//     //NaN
//     // setInterval(function() {
//     //     console.log(this.age++);
//     // }, 600)

//     //penggunaan arrow function difunction yang didalamnya terdapat method
//     setInterval(() => {
//         console.log(this.age++);
//     }, 200)
// }

// const users = new User()

//implementasi this pada arrow function

const box = document.querySelector('.box')

box.addEventListener('click', function() {

    let one = 'size'
    let two = 'caption'

    //cek ada atau tidak/ true or false
    if(this.classList.contains(one)){
        //mengubah 2 variabel sekaligus fitur baru js
        [one, two] = [two, one]
    }

    //classlist untuk mengecek disebuah class
    this.classList.toggle(one)

    //method setTimeout 
    setTimeout(() => {
        this.classList.toggle(two)
    }, 700)
})



//
// let lang = -616.3225708007812

// const number = (a, b) => a.toFixed(b) 

// console.log(number(lang, 4));