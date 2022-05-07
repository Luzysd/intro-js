// 1 

const sentence = 'hola mundo';

const word = 'mundo';

console.log(`La palabra "${word}" ${sentence.includes(word) ? 'está' : 'no está'} en la oración`);



//2

const array = [1,2,3,4,10,11];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
31


// 3

function palindromeChecker(str){
    const strReversed= str.split("").reverse().join("");

    return strReversed=== str ? "es palindromo" : "no es palindromo"
}
console.log(palindromeChecker("madam"))
console.log(palindromeChecker("computadora"))


//4

function convertirAF(celcius){
    let fahrenheit;
    fahrenheit= (celcius*9/5)+32
    return fahrenheit
}

function convertirAc (fahrenheit){
    let celcius;
    celcius=(fahrenheit-32)*5/9
    return celcius
}

console.log(convertirAF(32));
console.log(convertirAc(89.6))