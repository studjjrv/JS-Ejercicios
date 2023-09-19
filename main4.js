class Persona{
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }

    saludar(){
        return `Hola ${this._nombre}, tienes ${this._edad} años de edad . Un placer tenerte en este curso`
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, curso){
        super(nombre,edad)
        this._curso = curso
    }

    presentar(){
        return `Hola ${this._nombre}, tienes ${this._edad} años de edad . Un placer tenerte en este curso llamado ${this._curso}`
    }
}

let persona1 = new Persona('Jose',37)
console.log(persona1.saludar())

let estudiante = new Estudiante('Pedro', 50, 'Progrmación Full Stack')
console.log(estudiante.presentar())
