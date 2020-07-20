//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);


//Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
   //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
//completed or check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"> </i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//append to the list
todoList.appendChild(todoDiv);

//clearing the inpput value
todoInput.value="";
/*
<!-- structure for every to-do list item-->
<div class="todo">
                 
            <li></li>
            <button>delete</button>
            
            <button>checked</button>


            </div>
   */ 
}

function deleteCheck(e)
{
    const item = e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        /* go to parent element from here to delete the list */ 
        const todo = item.parentElement;
        todo.remove();

    }

    //for check mark
   
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
/*
function addBtn () {
    var textList = document.getElementById("input-text").value;
        document.getElementById("list-demo").innerHTML += textList+"<button ><i class='fas fa-trash-alt'></i></button> <button><i class='fas fa-edit'></i></button>" +"<br>" ;
        // for clearing the input box
        document.getElementById('input-text').value = '';
    }
    */
