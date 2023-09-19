let libros = {
    'Cien años de soledad':{autor:'Gabriel Garcia Marquez', puntuacion:469, año_publicacion: 1967}, 
    'El señor de los anillos':{autor:'J. R. R. Tolkien', puntuacion: 389, año_publicacion: 1954}, 
    'Un mundo feliz':{autor:'Aldous Huxley' , puntuacion: 374 , año_publicacion:1932 }
}
for(let i in libros){   
    console.log(`Titulo: ${i}. Autor: ${libros[i].autor}`)
}

