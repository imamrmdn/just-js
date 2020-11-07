// Execution Context, Hoisting, Scope
// ada 2 Fase pada Execution Context: Creation, Execution

//Creation phase pada Global Context
//nama berisi undifined ketika dijalankan begitu juga function 

console.log(nama);
var nama = 'imam'


//Execution Phase

var name = 'Imron';
var age = 44;

console.log(sayHello());

function sayHello(){
    return `${name} ${age}`
}


//function membuat Local Executin Context
// yang didalamnya terdapat creation dan execution phase
// bisa mengakses window dan argument/params