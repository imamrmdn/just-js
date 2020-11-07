//sudo variable argument didalam function

//--------------------------------------
function num() {
  let hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

const result = () => {
  console.log("hi there");
};

res = () => {
  return "Hi there";
};

function tes() {
  a = 5;
}

console.log(res() + " hasil " + num(3, 4, 5, 6));
//
tes();
console.log(a);
