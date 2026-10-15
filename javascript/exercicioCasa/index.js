const consoleHTML = document.getElementById("console");

console.log = function (...mensagens) {
    consoleHTML.textContent += mensagens.join(" ") + "\n";
};

//Se input for divisiivel por 3 = Fizz
//Se input for divisivel por 5 = Buzz
//Se input for divisivel por 3 e 5 = fizzBuzz
//Se input não for divisivel por 3 e 5 = input
//Se input não for numero = not a number

/*function fizzBuzz(input) {
    if (typeof input !== 'number') return 'Not a number';
    if (input % 3 === 0 && input % 5 === 0) return 'fizzBuzz';
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    return input;
    

}

let result = fizzBuzz(16);
console.log(result);*/

/*const names = [
    'Hole-in-one!', //1
    'Eagle', //<= par -2
    'Birdie', // par -1
    'Par', //par = par
    'Bogey', // par + 1
    'Double Bogey', // par + 2
    'Go Home', // >= par + 3
];

function golfScore(par, strokes) {
    if (strokes === 1) return names[0];
    if (strokes <= par - 2) return names[1];
    if (strokes === par -1) return names[2];
    if (strokes === par) return names[3];
    if (strokes === par +1) return names[4];
    if (strokes === par +2) return names[5];
    if (strokes >= par +3) return names[6];
}
let result = golfScore(4, 5);
console.log(result);*/

/*function checkSpeed (speed) {
    if (speed <= 65) {
        console.log(speed);
    } else if (speed >= 66 && speed <= 70) {
        console.log('points: 1');
    } else if (speed > 70 && speed <= 75) {
        console.log('points: 2');
    } else if (speed > 75 && speed <= 80) {
        console.log('points: 3');
    } else if (speed > 80 && speed <= 85) {
        console.log('points: 4');
    } else if (speed > 85 && speed <= 90) {
        console.log('points: 5');
    } else {
        console.log('license suspended')
    }
}

checkSpeed(91);*/

/*function checkSpeed (speed) {
    const speedLimit = 60;
    const kmPerPoint = 5;
    if (speed <= speedLimit + kmPerPoint) 
        console.log(speed);

    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint - 0.1);
        if (points > 5)
            console.log('License suspended')
        else
            console.log('points: ', points)
    }
}

checkSpeed(91);*/

/*
//conta quantos elementos string  tem dentro de um array
const array = ['Oi', 2, true, 'js'];

function countString(array) {
    let count = 0;

    for (let element of array)
        if (typeof element === 'string')
            count++;
    return count;

}

let result = countString(array);
console.log(result);

//count = 0;
//for of loop;
*/


    // retorna os itens do array que tiverem string
    // const countries = {
    //     name: 'Japan',
    //     population: 125,
    //     capital: 'Tokio',
    //     economyPosition: 3
    // }

    // function showString (obj) {
    //     for (let key in obj)
    //         if (typeof obj[key] == 'string')
    //             console.log(key, obj[key]);
    // }

    // showString(countries)


// console.log("olá, mundo!")

// Tipoos Primitivos
// const numero = 5;
// const numeroDecimal = 5.43533;
// const texto = "Olá, Mundo!";

// console.log(texto);

// Tipos de Referencia
// const array = [5, 25, "texto1", "texto2", [5,97]];
// const object = {
//     chave1: "valor1",
//     chave2: 5,
//     chave3: "valor3",
//     chave4: [5,97],
//     chave5: {
//         novaChave: 5,
//     },
// };

// console.log(array[1])
// console.log(object.chave2)

// const { chave4 } = object

// console.log(chave4)

// const [valor1, valor2, valor3, valor4, valor5] = array;

// console.log(valor1, valor2)

// const array = [5, 25, "texto1", "texto2", [5,97]];

// const array2 = [...array];
// array2[0] = 123123
// console.log(array2)
// console.log(array)

// da pra fazer a mesma logica com objeto

// == comparação não estrita = estou comparando valores
// === comparação estrita = estou comparando valores e tipos

// if (5 === "5") {
//     console.log("sim, é igual");
// } else {
//     console.log("não é igual");
    
// }

// 5 == "5" ? console.log("Sim, é igual!") : console.log("Não é igual!")


// function consoleOi() {
//     // tudo que eu vou fazer dentro da função
//     console.log("Oi")

//     //return // posso ou não retornar uma informação
    
// }

// const retornoDaFuncao = consoleOi();
// consoleOi();

/*const consoleLogOi = () => {
    console.log("oi");

    return "oi de novo";
}

const retornoDaFuncao = consoleLogOi();
console.log(retornoDaFuncao);*/

/*const array = ['oi', 2, true, 3, 'danilo'];

function countString(array) {
    let count = 0;

    for (let element of array)
        if (typeof element === '')
            count++;
    return count;


}

let result = countString(array);
console.log(result);*/

// x = 0;
// x += 5;
// x += 4;

// console.log(x);

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;
//     }

//     return sum;

    
// }

// console.log(sum(10))

// const marks = [70, 75, 80, 85, 99];

// function calculateGrade(array) {
//     const average = calculateAverage(array);

//     if (average < 60) return 'E';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';

// }

// function calculateAverage (array) {
//     let sum = 0;
//     for (let mark of array)
//         sum += mark;
//     return sum / array.length;

// }

// console.log(calculateGrade(marks))



function showStars (rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*'
        console.log(pattern);
    }
}

showStars(10)