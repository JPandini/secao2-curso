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

/* 
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
  } */






//==================================================================================

/*   // ---------arrays----------


var lista = ['Matheus', 'Joao', 150]; //0, 1, 2 
console.log(lista[1]);
console.log(lista.length);

console.log(lista.indexOf('Matheus'))

lista[1] = 'Joao Vitor';
console.log(lista[1])
lista.push('José')
console.log(lista)

lista.shift(); //remove o primeiro item da lista

lista.pop(); //remove o ultimo item da lista

console.log(lista)

console.log(lista.join('; '));   */







//================================================================
//loop -- While = enquanto 

/*
var x = 0;

while (x<=10){
  document.write('<br> O valor de x é: ' + x)

  x++;

}
*/
//----- FOR = PARA -----
/*
var x = 10;

for (i=0 ;i<=x; i++){
  document.write('<br> O valor de i é: '+i);
}
*/


// ------- SWITCH ------------
/*
function Pedir(){
  var valor = prompt('Escolha o que você deseja de 1 a 4: ');

  //console.log(typeof parseInt(valor)); --OR-- console.log(typeof Number(valor));

  
  switch(parseInt(valor)){ // or Number(valor)
    case 1:
      alert('1 - Suco')
      break;
    
    case 2: 
      alert('2 - Água')
      break;
    

    case 3: 
      alert('3 - Sorvete')
      break;

    case 4: 
      alert('4 - Garçom')
      break;

//    case 'João':
//      alert('Olá João')
//      break;

    
    default:
      alert('Somente de 1 a 4!')
      break;
  }
  
}
*/

//------DATAS--------
/*
var data = new Date();
console.log(data);

console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getFullYear());

console.log(data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear())
*/

var peso;
var altura;
var imc;
var resultado;

function Calcular(event){
  event.preventDefault();

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;

  imc = peso / altura**2

  resultado = document.getElementById('resultado');

  if(imc < 17){ 
    //resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: ' +imc.toFixed(2)+ '<br/> Cuidado, você está muito abaixo do peso!'
  }
  else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = '<br/> Seu resultado foi: ' +imc.toFixed(2)+ '<br/> Cuidado, você está abaixo do peso!'
  }
  else if(imc > 18.5 && imc <= 24.99){
    resultado.innerHTML = '<br/> Seu resultado foi: ' +imc.toFixed(2)+ '<br/> Você está no peso ideal, continue assim!'
  }
  else if(imc > 25 && imc <= 29.99){
    resultado.innerHTML = '<br/> Seu resultado foi: ' +imc.toFixed(2)+ '<br/> Você está acima do peso!'
  }
  else if(imc >= 30){
    resultado.innerHTML = '<br/> Seu resultado foi: ' +imc.toFixed(2)+ '<br/> Você está obeso!'
  }
  else {
    resultado.innerHTML = '<br/> Tente novamente!'
  }

  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';


}


