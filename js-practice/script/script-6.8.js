// pengulangan dan pengkodisian

console.log("pengulangan dan pengkodisian bersarang");
// --------------------------------------------------

let x = "";
let n = "";
let s = "";
// x += "*"; itu = x = x + '*'

for (let i = 0; i < 5; i++) {
  if (i == 3 || i == 0) {
    for (let j = 0; j <= 5; j++) {
      x += "*";
    }
  } else {
    x += "*";
  }
  x += "\n";
}

console.log(x);

for (a = 0; a < 5; a++) {
  for (let b = 0; b <= a; b++) {
    n += "*";
  }
  n += "\n";
}
console.log(n);

for (y = 0; y < 8; y++) {
  if (y % 2 != 0) {
    for (k = 0; k < 4; k++) {
      s += "# ";
    }
  } else {
    for (z = 0; z < 4; z++) {
      s += " #";
    }
  }
  s += "\n";
}
console.log(s);

let number = 6023100 + 20;
let formatNum = number.toLocaleString("id");

console.log("Rp. " + formatNum);
