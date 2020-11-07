//function

console.log("belajar function");
//-----------------------------

function jmlhBilangan(a, b) {
  let total;
  a > 5 ? (total = a * b) : (total = a + b);
  return total;
}

function print() {
  let a = parseFloat(Math.random().toFixed(2) * 100);
  let b = parseFloat(Math.random().toFixed(3) * 1000);
  let num = Math.round(a * b);
  console.log("I Love U " + num);
}

function formatNum(num) {
  return num.toLocaleString("id");
}

function countVolumeKubus(x, y) {
  let volumeX = x * x * x;
  let volumeY = y * y * y;
  let total = volumeX + volumeY;
  return total;
}

let dateNow = new Date();
let hour = dateNow.getHours();
let minute = dateNow.getMinutes();

function knowingDate() {
  if (hour >= 6 && hour < 12) {
    return "Selamat Pagi";
  } else if (hour >= 12 && hour <= 15) {
    return "Selamat Siang Menjelang sore";
  } else {
    return "Selamat Malam";
  }
}

//print

console.log(`Tanggal ${dateNow.getDate()} Jam ${hour}:${minute}`);
console.log(jmlhBilangan(2, 17));
print();
console.log(knowingDate());
console.log(formatNum(78127318));
console.log("hasil 2 volume kubus = " + formatNum(countVolumeKubus(9, 8)));

//format date example 1
const o_date = new Intl.DateTimeFormat();
const f_date = (m_ca, m_it) => Object({ ...m_ca, [m_it.type]: m_it.value });
const m_date = o_date.formatToParts().reduce(f_date, {});
console.log(m_date.day + "-" + m_date.month + "-" + m_date.year);

// format date example 2
const o_date_hi = new Intl.DateTimeFormat("id");
const a_date_hi = o_date_hi.formatToParts();
let dateFormat = a_date_hi.map(({ type, value }) => {
  return `${value}`;
});
console.log(a_date_hi);
console.log(`${dateFormat[0]}/${dateFormat[2]}/${dateFormat[4]}`);
