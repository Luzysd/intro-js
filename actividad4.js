//  WHILE //

var numero=prompt("Ingresa un numero")
var i=1
var multiplo=""

while (i<=numero) {
  if((i%5)==0) multiplo=multiplo+""+i;
  i++;
}
console.log(multiplo)

//DO WHILE//

var numero=prompt("Ingresa un numero")
var i=1
var multiplo=""

do {
  if((i%5)==0) multiplo=multiplo+""+i;
  i++;
} while (i<=numero);
console.log(multiplo)

//FOR//
var num="";

for (let i =1; i <=50; i++){
   if(i%2!=0) num= num+""+i;   
}
console.log(num)



