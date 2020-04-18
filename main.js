var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [];

function renderTodos(){ 

    listElement.innerHTML = '';

    for (todo of todos){
       var todoElement = document.createElement('li');
       var todoText = document.createTextNode(todo);
       todoElement.setAttribute('class', 'item');

       var linkElement = document.createElement('a');
       linkElement.setAttribute('href', '#');
       linkElement.setAttribute('class', 'a');
       linkElement.innerHTML = 'Excluir';

       var pos = todos.indexOf(todo);
       linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

       todoElement.appendChild(todoText);
       todoElement.appendChild(linkElement);

       listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToFirebase();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}

// id generator
function idGenerator() {
    let timestamp = new Date();
    let id = timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();
        return id;
}


