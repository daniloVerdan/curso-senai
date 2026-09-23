/*const campoInput = document.getElementById("nome")
const campoHeader = document.getElementById("tituloNome")
const campoInput = document.getElementById("nome")
const campoInput = document.getElementById("nome")
const campoInput = document.getElementById("nome")*/


const numero = document.getElementById("numero")
const nome = document.getElementById("nome")
const validade = document.getElementById("validade")
const cvv = document.getElementById("cvv")

const mostrarNumero = document.getElementById("mostrarNumero")
const mostrarNome = document.getElementById("mostrarNome")
const mostrarValidade = document.getElementById("mostrarValidade")
const mostrarCvv = document.getElementById("mostrarCvv")

/*campoInput.addEventListener('input', (event) => {
    const valorDigitado = event.target.value
    
    
    // inserir os dados no h1
    campoHeader.textContent = valorDigitado

)*/

numero.addEventListener("input", function() {
    mostrarNumero.textContent = numero.value;
});

nome.addEventListener("input", function() {
    mostrarNome.textContent = nome.value;
});

validade.addEventListener("input", function() {
    mostrarValidade.textContent = validade.value;
});
cvv.addEventListener("input", function() {
    mostrarCvv.textContent = cvv.value;
});
