const newTask = document.querySelector(".add-box");
const tasks = document.querySelector(".task-list");
const clearAll = document.querySelector(".clear-tasks-btn");
const taskAlert = document.querySelector(".task-alert");
let taskChildren = Array.from(tasks.children);

function addTask(event){
    const task = newTask.value.trim();
    newTask.value = "";
    if(task.length){
        tasks.innerHTML += `<li>
                                <span>${task}</span>
                                <i class="bi bi-trash"></i>
                            </li>`;
    }

    taskAlert.innerHTML = `You have ${tasks.children.length} tasks pending.`;
    taskChildren = Array.from(tasks.children);
}

tasks.addEventListener("click", event =>{
    if(event.target.classList.contains("bi-trash")){
        event.target.parentElement.remove();
        taskAlert.innerHTML = `You have ${tasks.children.length} tasks pending.`;
        taskChildren = Array.from(tasks.children);
    }
});

clearAll.addEventListener("click", event =>{
    tasks.innerHTML = "";
    taskAlert.innerHTML = `You have ${tasks.children.length} tasks pending.`;
    taskChildren = Array.from(tasks.children);
});

function searchTasks(event){
    const term = event.target.value.trim().toLowerCase();
    if(term.length) filterTask(term);
    else    restore();
}

function restore(){
    document.querySelector(".search-box").value = "";
    tasks.innerHTML = "";
    taskChildren.forEach(child => tasks.appendChild(child));
}

function filterTask(term){
    const newTaskList = taskChildren.filter(task => task.children[0].textContent.toLowerCase().includes(term));
    tasks.innerHTML = "";
    newTaskList.forEach(child => tasks.appendChild(child));
}

