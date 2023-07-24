(()=>{
const btn= document.querySelector("[data-form-btn]");

const createtask =(evento)=>{
    evento.preventDefault();
    const input=document.querySelector("[data-form-input]");
    const value=input.value
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value='';
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkcomplete());
    const tittleTask=document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText=value;
    taskContent.appendChild(tittleTask);
    const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  //task.innerHTML= content;
task.appendChild(taskContent);
  list.appendChild(task);
};

btn.addEventListener("click", createtask); 

const checkcomplete =() =>{
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask);
    return i;
};

const completeTask = (evento) =>{
    const element = evento.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};
})();