let counter = 0;
class TodoItem {
    constructor(){
        this.id = counter;
        this.html = `<div class='toDo'>
            <p>${document.getElementById('toDoContent').value}</p>
            <button class="remove" id="${counter}" onclick="removeToDo(toDos, this)"><i class="fa-solid fa-trash"></i></button>
        </div>`;
    }
}

const list = document.getElementById('toDoList')
const toDos = [];
const removeToDo = (arr, btn) => {
    for (let i in arr){
        if (arr[i].id == btn.id){
            toDos.splice(i, 1);
            updateList();
        } 
    }
}

const updateList = () => {
    list.innerHTML = ``;
        for (let i = 0; i < toDos.length; i++){
            list.innerHTML += toDos[i].html;
        }
    
}

document.getElementById('addToDo').addEventListener('click', function(){
    counter++;
    toDos.push(new TodoItem);
    document.getElementById('toDoContent').value = ``;
    updateList();
    removeBtns = document.querySelectorAll('.remove');
    console.log(removeBtns);
});





