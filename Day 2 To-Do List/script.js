const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function addTask(){
    
        // var html = "<li>";
        // var todo = document.getElementById("toddo").value;  
        // html     += todo;
        // html     += " <span onclick=is_remvoe();> ✗ </span></li>";

        // document.getElementById('todo-list').innerHTML += html;
    if(inputBox.value === ''){
        alert("You must write something here!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    SaveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        // console.log(e.target.tagName + ' li here');
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        // console.log(e.target.tagName + ' li here');
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

// function is_remvoe()
// {
//     alert('remove function call');
// }