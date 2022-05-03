// 1 CONCATENA LOS SIGUIENTES ARREGLOS//
var animals=['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];
console.log animals.concat(comingSoonAnimals);
(8) ['eagle', 'parrot', 'monkey', 'boar', 'lion', 'panter', 'dragon', 'turtle']


//ACOMODA DE MENOR A MAYOR//
var arr=[4,6,1,0,8,2]
arr.sort (function(a,b){return a-b});
(6) [0, 1, 2, 4, 6, 8]


//AGREGA UN NUEVO ANIMAL//
var animals=['eagle','parrot','monkey','boar','lion']
animals.push=('cow')

animals
(5) ['eagle', 'parrot', 'monkey', 'boar', 'cow']


//ELIMINA EAGLE//
var animals=['eagle','parrot','monkey','boar','lion','cow']
animals.shift()
'eagle'
animals
(5) ['parrot', 'monkey', 'boar', 'lion', 'cow']

