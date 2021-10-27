const inputNewTask = document.querySelector(".inputNewTask");
const buttonAddTask = document.querySelector(".buttonAddTask");
const tasks = document.querySelector(".tasks");

function inputClear()
{
    inputNewTask.value = "";
    inputNewTask.focus();
}

function getSavedTasks()
{
    const taskList = JSON.parse(localStorage.getItem("tasks"));
    taskList.forEach(element => {
        NewTask(element);
    });
}

function createRemoveButton(li)
{
    li.innerText += " "; 
    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.setAttribute("class","remove");
    li.appendChild(removeButton);
}

function saveTasks()
{
    const liTasks = tasks.querySelectorAll("li");
    const taskList = [];
    for(let task of liTasks)
    {
        let taskText = task.innerText; 
        taskText = taskText.replace(" Remove","");
        console.log(taskText)
        taskList.push(taskText);
    }

    console.log(taskList);
    const JSONtask = JSON.stringify(taskList);
    localStorage.setItem("tasks",JSONtask);
}

function NewTask(taskText)
{
    console.log(`Task Text: ${taskText}`);
    const li = document.createElement("li");
    li.innerText = taskText;
    tasks.appendChild(li);
    inputClear();
    createRemoveButton(li);
    saveTasks();
}

inputNewTask.addEventListener("keypress",function(event){
    if(event.keyCode === 13)
    {
        console.log("ENTER Pressed.");
        if(!inputNewTask.value) return;
        NewTask(inputNewTask.value);
    }
});

buttonAddTask.addEventListener("click",function(event){

    if(!inputNewTask.value) return;
    NewTask(inputNewTask.value);

});

document.addEventListener("click",function(element){

    if(element.target.classList.contains("remove"))
    {
        console.log(element.target.parentElement);
        element.target.parentElement.remove();
        saveTasks();
    }
})
getSavedTasks();