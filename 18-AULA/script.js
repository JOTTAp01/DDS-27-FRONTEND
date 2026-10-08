console.log("AOBA")

// LAÇOS DE REPETIÇÃO
// i = variável de controle
// i < 10 = duração do laço
// i++ = aumenta a interação de 1 em 1


/*
for(var i = 0; i < 3; i++ ){
    console.log("Eu sou o milior");
}

console.log("ACA BOU !")

//WHILE = ENQUANTO

var contagem = 1
while(contagem < 51){
    console.log("Oi, meu chapa");
    contagem = contagem + 5
}

console.log("FIN ALI SOU !?");

// ARRAY

var lista = ['Arroz', 6, true, "outro", 7.7, ["Sim",["Não"]]]

// mostra o array
console.log(lista);

// mostra um elemento especifico
console.log(lista[3]);

//length - retorna o numero de itens no array
console.log(lista.length)

// LISTA DE TIMES
var times = ["São Paulo", "Gama", "Santos", "Real Madrid", "Desportiva"]

// interage com valor fixo
for(var i = 0; i < 5; i++){
    console.log("O time atual é:", times[i]);
}

// interage com valor retornado
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:", times[i]);
}
*/


// Funções para interagir com um array
var frutas = ["Melancia", "Melão", "Morango"]

// Array Original
console.log(frutas);

// PARA ADIÇÃO DE ELEMENTOS
// push - adiciona no fim do array

frutas.push("Uva")
console.log(frutas);

// unshift - adiciona no inicio do array
frutas.unshift("Maracujá")
console.log(frutas);


// para remoção de elementos
// pop - remove o último elemento
var frutaRetirada = frutas.pop()
console.log("A última fruta era:", frutaRetirada)

frutas.unshift("Banana")

// shift - remover do inicio do array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era:", exPrimeiraFruta);

//includes - descobrir se há um valor especifico nesse array
console.log("Garçom, tem pitu?:", frutas.includes("Pitu"));
console.log("Garçom, tem pitu?:", frutas.includes("Maracujá"));

//sort - ordenar o array
frutas.sort()
console.log(frutas);


// reverse - inverter o array
frutas.reverse()
console.log(frutas);

// convertendo o array
console.log(frutas.toString())

// junta o array e troca o separador deles 
console.log(frutas.join(" - "));


// SLICE - copia 
//(em qual indice começa, quantos elemenos serão copiados)
var parteCopiada = frutas.slice(2,3)
console.log("Cópia:", parteCopiada);


//SPLICE
// para remover
var removidos = frutas.splice()


//para adicionar
var removidos = frutas.splice(1,2)
console.log("Removidos:", removidos);


//para adicionar
//adiciona, sem substituir ninguém
frutas.splice(2, 0, "Coca-Cola", "Laranja", "Caju")
console.log(frutas);


//adicionar com substituição
frutas.splice(1,3, "Computador", "Mouse")
console.log (frutas);
