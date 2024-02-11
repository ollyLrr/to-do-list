
let btn = document.querySelector('#btn');
let taskInput = document.querySelector('#task');
let list = document.querySelector('.list');
let listChecks;

btn.addEventListener("click",()=>{
   
    let taskText = taskInput.value;
    if(taskText ===""){
        alert("Please fill out the task")
    }
    else{
        createTask(taskText);
        taskInput.value = '';
    }
    
    listChecks= list.querySelectorAll('input[type="checkbox"');

})

RemoveTask();
function RemoveTask() {



    list.addEventListener("click",(e)=>{
        if (e.target.className === "delete") {
            e.target.closest('.newTaskContainer').remove();}
        
        
    });
   

}


function createTask(taskText){
   let newTaskContainer =  document.createElement("div");
   newTaskContainer.className = "newTaskContainer";


   let newTask =  document.createElement("input");
   newTask.type = "text";
   newTask.className = "taskItem";
   newTask.value = taskText;
    newTask.readOnly = true;

   let checkTask = document.createElement("input");
   checkTask.className = "checkTask";
   checkTask.type = "checkbox";
   checkTask.checked = false;
   
   checkTask.addEventListener ('click', ()=>{
    if (checkTask.checked){
        newTask.classList.add('completed');
    } else {
        newTask.classList.remove('completed');
    }
   })

   let btnEdit =  document.createElement("button");
   btnEdit.innerText = "Edit";
   btnEdit.className = "edit";

   btnEdit.addEventListener('click', ()=> {
    if (btnEdit.innerText === "Edit"){
        newTask.readOnly = false;
        
        newTask.focus();
        btnEdit.innerText = "Save"
    } else{
        
        newTask.readOnly = true;
        btnEdit.innerText = "Edit";
        
    }
   })

   let btnDelete =  document.createElement("button");
   btnDelete.innerText = "Delete";
   btnDelete.className = "delete";
     


    newTaskContainer.insertAdjacentElement("beforeend",checkTask);
    newTaskContainer.insertAdjacentElement("beforeend",newTask);
    newTaskContainer.insertAdjacentElement("beforeend",btnEdit);
    newTaskContainer.insertAdjacentElement("beforeend",btnDelete);

    list.insertAdjacentElement("beforeend",newTaskContainer);


}