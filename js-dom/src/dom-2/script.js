// DOM 2

//-----------

const p2 = document.querySelector(".p2");
const pList = p2.classList.add("label");
// p2.classList.remove("label");

//true jika classnya belum ada maka iya akan menambahkan class baru bernama label
//false jika class label sudah ada maka iya akan menghapus class label tersebut
// p2.classList.toggle("label");

//mencari class di item keberapa
//p2.classList.item(2)

//p2.classList.replace('yang mau direplace', 'class baru')

//-----------------------------------------------

const newP = document.createElement("p");
const newTextP = document.createTextNode("The New Paragraf");

newP.appendChild(newTextP);

const sectionA = document.getElementById("a");
sectionA.appendChild(newP);

//
const button = document.getElementsByTagName("button")[0];

sectionA.insertBefore(newP, button);

//
const newLi = document.createElement("li");
const newLiText = document.createTextNode("List Baru From Javascript");

newLi.appendChild(newLiText);

const sectionB = document.querySelector("section#b ul");
sectionB.appendChild(newLi);

//
//
