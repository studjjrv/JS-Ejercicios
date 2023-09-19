let palabras = ['Hola','como','estas','que','haces','hoy','domingo']

var aleatorio = palabras[Math.floor(Math.random() * palabras.length)]
console.log(aleatorio)

let array = aleatorio.split("")
console.log(array)

let maxIntentos = 7
let intentos = 0
let letras
let palabraAdivinada = []

do {
    letras = prompt(`Ingrese une letra de la palabra ${palabraAdivinada.join("")}`)
    if(array.includes(letras)){
        for(let i=0; i<array.length; i++){
            if(array[i] == letras){
                palabraAdivinada[i] = letras
            }
        }
    }else{
        intentos++
        console.log(`Letra incorrecta, te quedan ${intentos} intentos`)
    }
    
}while(intentos <= maxIntentos && palabraAdivinada.join("") !== aleatorio)

if(palabraAdivinada.join("") == aleatorio){
    console.log(`Has ganado, acertaste las palabra correctamente ${aleatorio}`)
}else{
    console.log('Lo siento has consumido todos los intentos')
}

//console.log(`La palabra seleccionada aleatoriamente tiene ${array.length} letras. Debes adivinar la palabra`)






