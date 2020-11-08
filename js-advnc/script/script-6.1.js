// Destructing Variable atau Assignment

//----------------------

const arr = ['Imam', 'Reja', 'Ivan']

const [a, b, c] = arr

//skip item
// const [a, , c] = arr

console.log(a);
console.log(b);
console.log(c);

//swap item
let i = 9;
let u = 10;

[i, u] = [u, i]
console.log(i);
console.log(u);

//
// const user = {
//     name: 'Imron',
//     age: 23,
//     email: 'iramadhan@binar.co.id'
// }

// const {name, age, email} = user

//tanpad deklarasi obj
({ name, age, email } = {
    name: 'Imron',
    age: 22,
    email: 'iramadhan@binar.co.id'
})

console.log(name);
console.log(age);
console.log(email);

//return value pada function
function print(){
    return [100, 987];
}

const [x, y] = print();
console.log(x);

//menggunakan rest params
const [j, ...values] = [23, 4, 5, 6, 10, 19];
console.log(j); //23
console.log(values); //sisanya

//mengambil field pada object, after send  as params for function
const hewan =  {
    id: 'of3091ue029j0a',
    name:  'Harimau',
    age: 10,
    zoo: 'Ragunan' 
}

function getHewan({ id, name, zoo }) {
    const h = `No Hewan: ${id}, Nama: ${name}, Asal: ${zoo}`;
    return h;
}

console.log(getHewan(hewan));

//
const mahasiswa = [
    {
        username: 'Zorks',
        nim: '1029109210',
        jurusan: 'Teknik Informasi'
    },
    {
        username: 'Buzz',
        nim: '134114143',
        jurusan: 'Teknik Pangan'
    },
    {
        username: 'Woody',
        nim: '235254657',
        jurusan: 'Teknik Miyak'
    },
]

const [k, l, m] = mahasiswa;

function getMhs({ username, nim }) {
    
    const mhs = `Nama: ${username}, nim: ${nim}`;

    return mhs;
}

console.log(getMhs(l));

//
function count(value1, value2) {
    return [value1 + value2, value1 * value2];
}

const [jmlh, kali] = count(90, 78);
console.log(`Hasil ${jmlh}`);
console.log(`Hasil ${kali}`);

//
const perpus = {
    name: 'Haryono',
    pekerjaan: 'Sortir Buku',
    task: {
        satu: 'administrasi',
        dua: 'tandatangan',
    }
}

function taskLib({ name, pekerjaan, task: { satu, dua} }) {
    return `${name}, ${pekerjaan}, ${satu} & ${dua}`
}

console.log(taskLib(perpus));