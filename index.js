const input = document.getElementById("todo");
const button = document.getElementById("add");
button.addEventListener("click", function(){
    const task = document.createElement("li");
    task.textContent=input.value;
    document.body.appendChild(task);
    input.value="";
});


const completed = document.getElementById("completed");
completed.addEventListener("click", function (){
    const tasks = document.querySelectorAll("li");
    tasks.forEach(function(task){
        task.style.textDecoration ="line-through";
    
    })
})

const deleted = document.getElementById("delete");
deleted.addEventListener("click", function(){
    const allTasks = document.querySelectorAll("li");
    allTasks.forEach(function(task){
        task.remove();
    })
})