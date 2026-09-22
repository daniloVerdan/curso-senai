//console.log("Hello, World!");

// declarando variavel sem valor
var user 
console.log(user)  

// declarando uma variavel com valor
var userEmail = "danilo@gmail.com"
console.clear()
console.log(userEmail)

var userEmail = "daniloooooo@gmail.com"
console.log(userEmail)


//redeclarando varieveis(js é case sensitive, ter atenção com os nomes das variaveis)
console.clear()
var produto = 'arroz'
console.log(produto)

var produto = 'feijão'
console.log(produto)

console.clear()
//let só pode declarar 1 vez por escopo
let usuario
console.log(usuario)

let number = 10
console.log(number)
number = 11
console.log(number)

//usamos const para declarar variaveis que não podem ser alteradas
console.clear()
const pi = 3.14
console.log(pi)

console.clear()
//escopo
// se eu declarar as variaveis dentro de um bloco, elas só podem ser acessadas dentro desse bloco
// var é uma variavel global, let e const são variaveis de escopo
// var pode ser acessada fora do bloco, let e const não podem
var aluno1 = 'Pedro'
let aluno2 = 'Gustavo'
const aluno3 = 'Thiago'


{
    console.log(aluno1, aluno2, aluno3)
}

//boas praticas

let lastname // pode fazer mas é uma péssima pratica

let lastName // camelcase

let last_name // snakecase 

let ação // não é uma boa pratica usar acentos em variaveis

let $email = 'danilo@gmail.com' //pode

let _email = 'danilo@gmail.com' //pode

// let 1Pedro //não pode começar com numero


console.log(typeof('Arroz'))
console.log(typeof(1))
console.log(typeof(11.4))
console.log(typeof(true))
console.log(typeof(false))
console.log(typeof(lastname))

var x = null
console.log(typeof(x)) //object, retorna objeto, null é considerado um objeto, mas na verdade é um tipo primitivo

//coerção implicita ou type coercion, quando o js converte um tipo de dado para outro tipo de dado automaticamente
console.log('10' + 1) //string
console.log('10' - 1) //number
console.log('10' * 2) //number
console.log('10' / 2) //number

console.log('5'+'1') //string

console.log(5+5) //10
console.log('5'+'5') //55
console.log('5'+5) //55
console.log('5'-5) //0
console.log(true + 1) //2
console.log(false + 1) //1
console.log(null + 1) //1
console.log(undefined + 1) //NaN
// se eu declarar 5 como string, ele vai ser convertido para number automaticamente, mas se eu declarar 5 como string e 1 como string, ele vai concatenar as duas strings, e não somar os valores resultando em 51, e não 6. Isso é a coerção implicita, o js converte automaticamente os tipos de dados para realizar a operação.  

// Type casting, quando o desenvolvedor converte um tipo de dado para outro tipo de dado manualmente
console.log(Number('5') + 1) //6
console.log(String(5) + 1) //51
console.log(parseInt('42')) //42
console.log(parseFloat('42.5')) //42.5
console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean('')) //false
console.log(Boolean('hello')) //true
console.log(parseInt('1010', 2)) //10, converte binario para decimal
console.log(parseInt('ff', 16)) //255, converte hexadecimal para decimal
console.log(parseInt('08')) 

// diferença de parseInt para Number, parseInt converte apenas o número inteiro, enquanto Number converte o número inteiro e o decimal. Exemplo:
console.log(parseInt('42.5')) //42
console.log(Number('42.5')) //42.5  

// se houver numero e texto na string o ParseInt vai pegar apenas o numero, enquanto o Number vai retornar NaN. Exemplo:
console.log(parseInt('42abc')) //42
console.log(Number('42abc')) //NaN

console.clear()

// operações aritméticas
console.log('Soma:', 1+3)
console.log('Subtração:', 1-3)
console.log('Multiplicação:', 1*3)
console.log('Multiplicação Decimal', 1.4*3.3)
console.log('Divisão:', 1/3)
console.log('Módulo:', 1%3) //resto da divisão
console.log('Exponenciação:', 2**8) //2 elevado a 3 

// Incrementador
var numberToIncrement = 0
numberToIncrement++
console.log(numberToIncrement++) //1
console.log(++numberToIncrement) //3
console.log(numberToIncrement += 12) //15

// Decrementador
var numberToDecrement = 0 //0
numberToDecrement-- //1
console.log(numberToDecrement--) //-1
console.log(--numberToDecrement) //-3
console.log(numberToDecrement -= 11) //-14

// isso é um comentario de uma linha

/* 
isso é um comentario de multiplas linhas
que pode ser usado para explicar o código
ou para desativar temporariamente uma parte do código
*/

/**
 * 
 * @param {*} base 
 * @param {*} altura 
 * @returns 
 */

function calcularAreaTriangulo(base, altura) {
    console.log((base * altura)/2)
    
}

calcularAreaTriangulo(5, 2)


function calcularVolumeCilindro(raio, altura) {
    console.log(Math.PI * Math.pow(raio, 2) * altura)
}

calcularVolumeCilindro(5, 2)

/**
 * 
 * @param {float} raio raio da base do cilindro
 * @param {float} altura altura do cilindro
 * @returns {float} volume do cilindro
 */

function calcularVolumeCilindro2(raio, altura) {
    console.log(3.14 * (raio ** 2) * altura)
}

calcularVolumeCilindro2(5, 2)

/**
 * 
 * @param {float} raio raio da base do cilindro
 * @param {float} altura altura do cilindro
 * @returns {float} volume do cilindro
 */

function calcularVolumeCilindro3(raio, altura) {
    return 3.14 * (raio ** 2) * altura
}

console.log(calcularVolumeCilindro3(35.0, 5.2))
    
/**
 * 
 * @param {float} lado lado do quadrado
 * @returns {float} área do quadrado
 */ 
function calcularAreaQuadrado(lado) {
    console.log(lado * lado)
}

calcularAreaQuadrado(5)

function formulaBhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return {delta, x1, x2};
}

const resultado = formulaBhaskara(1, -10, 5);
console.log(resultado);