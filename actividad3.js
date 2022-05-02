// EJERCICIO 1//
var numero= prompt ("ingresa un numero") 
if (numero%2==0){
    alert("Es divisible entre 2")
}
else{
    alert("No es divisible entre 2")
}


// EJERCICIO 2//
var num= prompt ("ingresa un numero") 
if (num%2==0){

    alert("Par")
}
else{
    alert("Impar")
}



// EJERCICIO 3//

if (prompt ("ingresa un numero")==1000){
    console.log ("Ganaste un premio")
}
else{
    alert("Lo siento, sigue participando")
}


// EJERCICIO 4//

var a= Number (prompt("ingresa un numero"))
var b= Number (prompt("ingresa otro numero")) 
if(a>b){
    console.log("El menor es"+b)
}
if (a<b){
    console.log("El menor es"+a)
}


// EJERCICIO 5 // 

var a= Number (prompt("ingresa el primer numero"))
var b= Number (prompt("ingresa el sedundo numero")) 
var c= Number (prompt("ingresa el tercer numero")) 
if(a>b && a>c){
    console.log("El mayor es el primero" +a)
}else if (b==c){
        console.log("El segundo y tercero son iguales")
    }else if(b>a && b>c){
        console.log("El mayor es el segundo" +b)
    }else if(a==c){
        console.log("el primero y tercero son iguales" +b +c)
    }else if (c>a && c>b){
    console.log("El mayor es el tercero" +c)
    }if (b==a){
    console.log("el primero y segundo son iguales" +c +a )
}


// EJERCICIO 6//
var nombre= prompt("Nombre")
var edad= prompt("Edad")

if(edad >= 18){
    console.log("Puede pasar")
    if (nombre=="Mario" || nombre=="Carlos")
        console.log("Puede pasar a VIP")
} else {
    console.log("No puede pasar")
}
  


