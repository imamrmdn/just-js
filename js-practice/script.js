// Javascript Example

let date = Date((d) => {});

document.body.innerHTML = "<h1>Time is</h1>" + date;

alert("selamat datang");
let activity = true;

while (activity === true) {
  let nama = prompt("masukan nama");

  if (nama === null || nama === "" || nama === undefined) {
    alert("tidak ada nama");
  } else {
    alert(nama);
  }
  //confirm bersifat true / false
  activity = confirm("anda yakin ingin mengulang?");
  console.log(activity);
}
alert("thx");

console.log(date);
