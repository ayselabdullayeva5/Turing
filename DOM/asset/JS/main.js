// Bir neçə <div>, <p> və <button> elementi olan HTML səhifəsi yaradın.
// JavaScript istifadə edərək bu elementləri aşağıdakı metodlarla seçin:
// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll
let myDiv = document.getElementById("myDiv");
let paragraphs = document.getElementsByClassName("text");
let allButtons = document.getElementsByTagName("button");
let firstParagraph = document.querySelector(".text");
let allParagraphs = document.querySelectorAll(".text");
// Bir HTML səhifəsində <p> etiketi daxilində mətn yerləşdirin.
// JavaScript vasitəsilə həmin məzmunu dəyişin.
const contentBox = document.querySelector("p");
contentBox.onclick = function () {
    this.innerText = "Məzmun uğurla dəyişdirildi!";
};
// Bir düymə və <div> elementi yaradın.
// Düyməyə kliklədikdə <div>-in arxa fon rəngi dəyişsin.
document.querySelector("button").onclick = function() {
    document.querySelector("div").style.backgroundColor= "lightgreen";
};
// ul (siyahı) elementi yaradın.
// JavaScript vasitəsilə düyməyə klik etdikdə .
// Başqa bir düymə vasitəsilə .
document.getElementById("btn").onclick = function() {
    let newItem = document.createElement("li");
    newItem.innerText = " New item";
    document.getElementById("list").appendChild(newItem);
};