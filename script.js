const ListContainer = document.getElementById("List-container");
const inputBox = document.getElementById("input-box");

function addTask(){

if (inputBox.value === ''){
    alert("Enter Some Data");
}else{
let li= document.createElement("li");
li.innerHTML = inputBox.value;
ListContainer.appendChild(li);

let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);

}
inputBox.value = "";
saveTask();
}

ListContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.classList.remove();
        saveTask();
    }
});

function saveTask(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}

showTask();