//DOM Events
//Event pd js merepresentasikan sebuah kejadian yang terjadi didalam DOM
//kejadia tsb bisa dilakukan oleh user (trigger)

const p3 = document.querySelector("section#a p.p3");
const p2 = document.querySelector(".p2");
const p4 = document.querySelector("section#b p");
const p1 = document.querySelector(".p1");

function changeColor() {
  p2.style.backgroundColor = "red";
}

function changeColors() {
  p3.style.backgroundColor = "teal";
}

p2.onclick = changeColor;

const li1 = document.querySelector("section#b ul li:nth-child(1)");

p4.addEventListener("click", () => {
  const newList = document.createElement("li");
  const newListText = document.createTextNode("List Baru");

  newList.appendChild(newListText);
  console.log(newList);

  const listNew = document.querySelector("ul");

  listNew.insertBefore(newList, li1);
});

p1.addEventListener("click", () => {
  p1.style.backgroundColor = "teal";
  p1.style.color = "white";
});

p1.addEventListener("click", () => {
  p1.innerHTML = "Paragraf Awal";
});

li1.addEventListener("mouseenter", () => {
  li1.style.backgroundColor = "yellow";
});

li1.addEventListener("mouseleave", () => {
  li1.style.backgroundColor = "teal";
});
//perbedaan antara event handler dan event listener
//event handler akan menimpa fungsi sebelumnya jika ada 2 fungsi
//event listener akan menjalankan semua fungsi tidak akan menimpa fungsi yang sebelumnya
