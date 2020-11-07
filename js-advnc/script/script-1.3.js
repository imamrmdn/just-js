// prototype

function User(nama, hp){
    this.nama = nama;
    this.hp = hp;
}

User.prototype.eat = function (energy)  {
    this.hp += energy;
    return `Happy Eating ${this.nama}`;
}

User.prototype.playing = function (energy)  {
    this.hp += energy * 2;
    return `Happy Eating ${this.nama}`;
}

let user = new User('Imam', 50);
console.log(user);

// versi class 
// class User{
//     constructor(name, hp) {
//         this.name = name;
//         this.hp = hp;
//     }

//     eat(energy){
//         this.hp += energy;
//         return `Hallo ${this.name} happy eating`;
//     }

//     //.....
// }

//cara melihat proto/prototype sebuah object di js
//Number.prototype
//String.protype
//Array.prototyp
//dst