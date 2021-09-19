// selecionar tudo.
// selecionar o form de tarefas.
const todoForm = document.querySelector('.todo-form');
// Selecionar o input. 
const todoInput = document.querySelector('.todo-input');
// Selecionar <ul> com class="todo-items".
const todoItemsList = document.querySelector('.todo-items');

// array que armazena cada todos.
let todos = [];
let id = localStorage.getItem("id")
if (id === null) {
  id = 0;
}else{
  id = parseInt(id)
}

// Add um eventListener no form, e lista para submit. 
todoForm.addEventListener('submit', function (event) {
  // Evitar que a página recarregue ao enviar o formulário.
  event.preventDefault();
  addTodo(todoInput.value); // chamar a função addTodo com o valor atual do input.
});

// Função para adicionar tarefa.
function addTodo(item) {
  if (item == '') {
    alert("Didite uma tarefa!!!")
  } else {
    const todo = {
      id: id,
      name: item,
      completed: false
    };
    todos.push(todo);
    id++
 addToLocalStorage(todos);
    todoInput.value = '';

  }
}

// função para renderizar tarefas fornecidas para a tela.
function renderTodos(todos) {
  // Limpar tudo dentro <ul> com class=todo-items.
  todoItemsList.innerHTML = '';
  // Percorrer cada item dentro de todos.
  todos.forEach(function (item) {
    // verifique se o item está completo.
    const checked = item.completed ? 'checked' : null;

    // Fazer um <li> elemento e preencher.
    // <li> </li>
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    // Se o item for concluído, adicione uma classe a <li> chamada <li> chamada 'checked', que adicionará o line-through.
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    //Add o <li> to the <ul>
    todoItemsList.append(li);
  });

}
//Função para adicionar todos ao local storage.
function addToLocalStorage(todos) {
  //Converta o array em string e armazene-o.
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem("id",id)
  //Renderiza na tela.
  renderTodos(todos);
}

//Função  obter tudo do local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  //Se existe referência
  if (reference) {
    //Converte de volta para array e armazena em todos array.
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

//Alternar o valor para concluído e não concluído
function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      //Alternar o valor 
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

//Exclui um todo do array todos, em seguida, atualiza o localstorage e renderiza a lista atualizada para a tela.
function deleteTodo(id) {
  var confirmar = confirm("Deseja excluir o item?");
  if (confirmar) {
    // filtra o <li> com o id e atualiza o array todos
    todos = todos.filter(function (item) {
      return item.id != id;
    });

    //Atualizar localStorage
    addToLocalStorage(todos);
  }

}

//Obter tudo de localStorage
getFromLocalStorage();

//Depois disso, addEventListener <ul> com class = todoItems. Porque precisamos add o evento de clique em todos os botões de delete-button e checkbox.
todoItemsList.addEventListener('click', function (event) {
  //Verificar se o evento está na checkbox.
  if (event.target.type === 'checkbox') {
    //Alternar o estado.
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // Verificar se é um delete-button.
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});
