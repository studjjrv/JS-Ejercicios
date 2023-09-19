let edades = [{edad:18},{edad:8},{edad:12},{edad:38},{edad:28},{edad:16},]
let contador = 0
let adultos = edades.filter(
    function mayorDeEdad(edades){
             
        return edades.edad >=18 
        
    }
)
console.log(`Solo hay ${adultos.length} personas mayores de edad`,adultos)



 

