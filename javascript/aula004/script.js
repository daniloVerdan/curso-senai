function calcularIdade() {
    const inputName = document.getElementById('name').value
    const inputBirthDate = document.getElementById('birthdate').value
    const resultado = document.getElementById('resultado').value
    const resultadoPodeDirigir = document.getElementById('resultadoPodeDirigir').value
    const today = new Date()


    console.log(today)
    if(!inputBirthDate) {
        resultado.textContent = 'Por favor, insira uma data válida'
        resultado.style.backgroundColor = 'red'
    }
    else if(!inputName) {
        resultado.textContent = 'Por favor, insira um nome valido'
        resultado.style.backgroundColor = 'red'
    }
}