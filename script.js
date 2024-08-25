const ListContainer = document.getElementById("List-container");
const inputBox = document.getElementById("input-box");

function addTask(){

if (inputBox.value === ''){
    alert("Enter Some Data");
}else{
let li= document.createElement("li");
li.innerHTML = inputBox.value;
ListContainer.appendChild(li);

}
inputBox.value = "";

}