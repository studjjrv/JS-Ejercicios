//8.- Recorre e imprime cada uno de los valores de cada uno de los elementos

var usuarios = [
    {nombre: 'Luis', edad: 33, hobbies: ['videojuegos', 'música', 'cine']},
    {nombre: 'Juanito', edad: 30},
    {nombre: 'Pedro', edad: 21, hobbies: ['deportes', 'leer']}
]

for(let i in usuarios){
    for(let j in usuarios[i]){
        console.log(`Tu ${j} es : ${usuarios[i][j]}`)
       //console.table(usuarios[i][j])
    }
    
}

//9.- Agregamos a paula y su edad
usuarios.push({nombre:'Paola', edad:25})
console.table(usuarios)


//10.- Buscamos a pedro y eliminamos sus hobbies
var encontrar = usuarios.find(e => e.nombre === 'Pedro');
console.table(encontrar);
var eliminar  = delete encontrar.hobbies
console.table(usuarios);

//11.- Buscamos a Juanito y agrega hobbies 'Diseñar'
var mostrar = usuarios.find(e => e.nombre === 'Juanito').hobbies=['Diseñar']
console.table(usuarios)
