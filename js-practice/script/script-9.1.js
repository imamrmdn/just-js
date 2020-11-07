//  object pada js
//---------------

// obj literal
let user = {
  name: "Imam Ramadhan",
  age: 19,
  email: "imamramadhan40@gmail.com",
  nim: "1028012901920",
};

console.log(user);

//memaskannya kedalam function declaration
function objMhs(name, age, email, nim) {
  let mhs = {};
  mhs.name = name;
  mhs.age = age;
  mhs.email = email;
  mhs.nim = nim;

  return mhs;
}

let mhsNew = objMhs("Imam Ramadhan", 22, "imam@gmail.com", "2312131");
let mhsNew2 = objMhs("Reza", 21, "reza@gmail.com", "4524135");
console.log(mhsNew);
console.log(mhsNew2);

//construktor
function ObjUser(name, age, email, nim) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.nim = nim;
}

let userNew = new ObjUser("Ramadhan", 25, "ramad@gmail.com", "126172617");
console.log(userNew);
