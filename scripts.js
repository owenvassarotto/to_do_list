const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btnAdd = document.getElementById('btn-add');

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

btnAdd.addEventListener("click", addTask);

//The following code allows when clicking on the task to apply the styles of the .checked class and also allows pressing the span to remove the task.
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

//a function to save task information in local storage
function saveData(){
   localStorage.setItem("data", listContainer.innerHTML); 
}
//this function retrieves data from the local storage using the getItem()
function showTaks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaks();