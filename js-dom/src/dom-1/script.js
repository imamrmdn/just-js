// DOM (Document Object Model)
// - DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi
//----------------

const header = document.getElementById("judul");

header.style.color = "teal";
header.style.backgroundColor = "yellow";
header.innerHTML = "Imam Ramadhan Front End Dev";

const paragraf = document.getElementsByTagName("p");

//merubah html collection menjadi sebuah element
const h1 = document.getElementsByTagName("h1")[0];
//h1.style.fontSize = "60px";

//mengembalikan sebuah html collection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "dirubah dari js nya";

for (let i = 0; i < paragraf.length; i++) {
  paragraf[2].style.backgroundColor = "lightBlue";
}

//mengembalikan element
const p4 = document.querySelector("section#b ul li:nth-child(2)");
p4.style.color = "red";

const pAll = document.querySelectorAll("p");

for (let i = 0; i < pAll.length; i++) {
  pAll[i].style.color = "purple";
}

const section = document.getElementById("b").querySelector("li:nth-child(3)");
section.innerHTML = "List dari JavaScript";
section.style.backgroundColor = "blue";
section.style.color = "green";

console.log(paragraf);
console.log(section);
