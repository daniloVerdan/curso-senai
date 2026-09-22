age = 17

if (age < 18) {
    console.log("Você é menor de idade!")
} else if (age <= 60) {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é idoso!")
}

switch (age) {
    case age < 18:
        console.log("Menor de idade!")
    case age <60:
        console.log("Maior de idade!")
    default:
        console.log("Idoso!")
}

result = 1 

try {
    console.log(result)
    throw new Error("Erro novo detectado")
}  catch (error) {
    console.log(error)
    console.log("Sistema fora do ar, tente novamente mais tarde!")
}  finally {
    console.log("Fim!")
}

//Laços de repetição (loops)
let execute = tre
while (execute) {
    let response = window.prompt('Deseja continuar? 1 - sim 2 - não)')
    if(response === '2') {
        execute = false
    }
}

console.log('fim')

let age = 19
while (age < 25) {
    console.log('não pode entrar!!')
    age+1
}

value = 0
do {
    value++
    console.log('hi')
} while (value < 10)


for(step = 0; step < 10; step++) {
    console.log(step)
}