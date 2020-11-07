//DOM Travesal

const close = document.querySelectorAll(".close");
const container = document.querySelector(".container");
let conf = true;

//option 1
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//   });
// }

//option 2
// close.forEach((e, i) => {
//   e.addEventListener("click", (t) => {
//     conf = confirm(`anda yakin ingin menghapus kontak ke ${i}`);

//     conf == true
//       ? (t.target.parentElement.style.display = "none")
//       : console.log("cancel");
//   });
// });

//option 3
// container.addEventListener("click", (e) => {
//   if (e.target.className == "close") {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//   }
// });

container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    conf = confirm(`anda yakin ingin menghapus kontak`);
    if (conf == true) {
      e.target.parentElement.style.display = "none";
      e.preventDefault();
    }
  }
});
