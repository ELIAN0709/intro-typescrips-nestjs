export let name:string | boolean = 'Elian'; // constate llamada name typo de dato string
export const ega: number = 22;
export const isValid:boolean = true;

// type save type
name = 'Erazo'; // error de constante 
name = true // error de tipado (string)

// tamplate string 
export const templateString = `esto es un string multi 
linea
que puede tener
" doble
' simple
expresiones \$${name} alt + 92  
expresion  ${1+1}
numeros ${ega}
boolean ${isValid}` // alt + 96 

/*
console.log(name)
console.log(ega)
console.log(typeof isValid)
console.log(templateString)
*/