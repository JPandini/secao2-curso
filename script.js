/* -------------Primeiro teste ==> prompt, variaveis, e escrever da pagina com html dentro do js-------------
 var nome = prompt("Qual seu nome?");  
var sobrenome = prompt("Qual seu sobre nome?")
console.log('Olá ' + nome ," ", sobrenome );
document.write("<h1>Seja bem vindo ", nome , " ",sobrenome, "</h1>")
document.write("<img src ='https://sujeitoprogramador.com/steve.png' alt='Foto Steve' />")*/

/*
var == variavel normal 
let == variavel usada apenas em um escopro de um codigo
const == quase igual a let, porem o valor nao pode ser alterado 
*/


var area = document.getElementById('area')

function entrar(){
    var nome = prompt('Digite seu nome: ');

    

    if(nome === '' || nome === null){
        alert('Ops, algo deu errado...')
        area.innerHTML = 'Algo deu errado, tente novamente!'
    }
    else{
        area.innerHTML = 'Bem vindo ' + nome + '! ';

        let botaoSair = document.createElement("button");
        botaoSair.innerText = 'Sair da conta';
        botaoSair.onclick = sair;
        area.appendChild(botaoSair)

    }
} 

function sair(){
    alert('voce saiu!')
    area.innerHTML = 'Voce saiu da conta!'
}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;
  
    if(media >= 7){
      console.log("Aluno aprovado com a média: " + media)
    }else if(media < 7){
      console.log("Aluno reprovado com a média: " + media)
    }
  
  }
  
  function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;
  
    console.log(mensagem);
  }

