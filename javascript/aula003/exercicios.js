//conversor de temperatura

//formula para conversão:
/*Fórmulas de Conversão
Celsius para Fahrenheit: (celsius * 9/5) + 32
Fahrenheit para Celsius: (fahrenheit - 32) * 5/9
Celsius para Kelvin: celsius + 273.15*/


// celsius para fahrenheit

/**
 * 
 * @param {numero} celsius 
 * @returns {numero} fahrenheit
 */
function celciusFarenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit;
}
console.log(celciusFarenheit(30))

//farenheit para celcius

/**
 * 
 * @param {numero} fahrenheit 
 * @returns {numero} celsius
 */
function farenheitCelcius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius;
}
console.log(farenheitCelcius(86))

//conversão de quilometro para metro e vice-versa

/**
 * 
 * @param {numero} quilometro 
 * @returns {numero} metro
 */
function quilometroMetro(quilometro) {
    let metro = quilometro * 1000
    return metro;
}
console.log(quilometroMetro(10))

/**
 * 
 * @param {numero} metro 
 * @returns {numero} quilometro
 */
function metroQuilometro(metro) {
    let quilometro = metro / 1000
    return quilometro;
}
console.log(metroQuilometro(10000))

//calcula tempo de viagem

/**
 * 
 * @param {numero} recebe dustancia e divide por vm
 * @returns {} divide a distancia pela vm
 */

function calculaTempoViagem(distancia, vm) {
    return vm = distancia / vm
}

console.log(calculaTempoViagem(200, 100))

// fibonacci

/**
 * 
 * @param {numero} recebe um numero ex: 5
 * @returns {numero} diz os primeiros 5 numeros da tabela
 */

function fibonacci(numero) {
    if (numero <= 1) return numero;
    return fibonacci (numero - 1) + fibonacci (numero - 2);
}
console.log(fibonacci(8));


function fibonacciAteN(n) {
    let ant = 0
    let atual = 1
    let prox = ant + atual
    let somatorio = ant + atual + prox

    console.log(ant)
    console.log(atual)
    console.log(prox)

    while(prox < n) {
        ant = atual
        atual = prox
        prox = ant + atual
        if (prox > n) {
            break
        }
        somatorio += prox
        console.log(prox)
    }
    console.log(`o somatorio é: ${somatorio}`)
}

fibonacciAteN(10)