// fot of vs for in

//-----------------

const arr = ['Jess', 889, 'Ocil', ['NBoy'], 10.9]

//memakai forEach
arr.forEach(e => console.log(e));

console.log('------------------');

//memakai for ..of
for(let a of arr){
    let name = '';
    if(a == 'Jess'){
        name = 'Kucing Gila'
    }
    console.log(name);;
}