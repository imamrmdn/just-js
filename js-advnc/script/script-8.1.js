//spread operator

const name = document.querySelector('.nama')

const obj = [...name.textContent].map(e => `<span>${e}</span>`).join('')

name.innerHTML = obj

//rest parameter
// function arr(a, ...values) {
//     return `${a} - ${values}`;
// }

function arr(...values) {
    return values;
}
//akan menghasilkan array

console.log(arr(1,2,3,4,5,6,7));

//array destruc
const kelompok = ['Naupal', 'Adam', 'Imam', 'Reza', 'Imron', 'Denanda']

const [pemimpin, wakil, ...anggota] = kelompok;

console.log(pemimpin);
console.log(wakil);
console.log(`${anggota}`);

//fliter difunction
function filterBy(type, ...values) {
    return values.filter(e => typeof e === type);
}

//param pertama bisa dimasukan tipe data, dan param ke dua dimasukan value
console.log(filterBy('string', 1, 2, 'imam', 'jigong', true, false, 'reja', 4));