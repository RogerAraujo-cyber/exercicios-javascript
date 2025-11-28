// let frutas = ["Goiaba","Morango", "Melancia", "Uva", "Pera;"]; //array/lista vazia
//                 //0      //1         //2       //3     //4

let filmes = ["Ação", "Romance", "Ficção", "Terror"]; //array/lista vazia

// console. log("A lista de frutas tem " + frutas.length + " itens.")

// console. log("A primeira fruta é a: " + frutas [0]);

/// Acesse o item 4 da lista e exiba-o no ocnsole

// console. log("O item 4 da lista é  " + frutas [3]);

// console. log(frutas);
// for(let i = 0; i <= frutas.length; i++){
// console. log (frutas[i]);
// }

// Crie uma listahe tarefas, contendo no maximo 10 intens
// E exiba cada tarefa


console. log("A lista de filmes tem  " + filmes. length + "itens.")

//exiba um em um

// console. log (filmes);
// for(let i = 0; i <= filmes.length; i++ ){
//     console. log(filmes[i])
// }
           
// versao mais facil
filmes.forEach((filme) => {
console. log(filme);
})