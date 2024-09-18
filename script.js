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
saveTask();
}

ListContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
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