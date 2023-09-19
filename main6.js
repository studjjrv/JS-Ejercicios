function cambiar(palabraOriginal,nuevaPalabra){

    
    let frase = 'A cada cochino, le llega su sábado'
    console.log(`FRASE ORIGINAL: ${frase}`)
    return(`FRASE CAMBIADA: ${frase.replace(palabraOriginal, nuevaPalabra)}`)

}

console.log(cambiar('cochino','preñada'))

