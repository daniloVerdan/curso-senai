const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const itens = document.querySelector('.item')
const botao = document.querySelector("#modo-escuro")


todoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = todoInput.value
    
    const item = document.createElement('li')
    item.classList.add('item')
    item.innerText = text
    todoList.appendChild(item)

    item.addEventListener('click', ()=>{
        item.classList.toggle('riscado') 
    })
})


botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
});