//closure
// kenapa menggunakan closure?
//untuk membuat function factories
//untuk membuat private method

// function build(){
//     let name = 'Ivan'
//     function sayName(){
//         console.log(name);
//     }

//     sayName()
// }

// build()

// function build(){
//     let name = 'Ivan';
//     function sayName(){
//         console.log(name);
//     }

//     return sayName;
// }

// let b = build();
// b();

//contoh penggunaan

// function sayHello(time){
//     return function(name) {
//         console.log(`Hello ${name}, Selamat ${time}`);
//     }
// }

// let goodMorning = sayHello('Morning');
// let goodAfternoon = sayHello('Sore');
// let goodNight = sayHello('Malam');

// goodMorning('Imam');
// goodMorning('jESS');

// goodAfternoon('Ocil');
// goodNight('Nadia') 

let say = (function() {
    let counter = 0; // <-- private variable
    return function() {
        return ++counter;
    }
})();

counter = 100; // <---- tidak bisa

console.log(say());
console.log(say());
console.log(say());

