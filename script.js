function menuAcao(){
    let menu ="";

    alert("Escolha uma opção:\n1. Meu Saldo\n2. Depósito\n3. Saque\n4. Transferência\n5. Sair");

    menu = prompt("Digite o número da opção desejada:")


if(menu == '1'){
    alert('Saldo')
}
else if(menu =='2'){
    alert('Deposito')
}
else if (menu=='3'){
    alert('Saque')
}
else if (menu=='4'){
    alert('Transferencia')
}
else if(menu=='5'){
    alert('Programa encerrado');
    return;
    window.close()
}
else{
alert('Opcao Invalida');}

menuAcao()
}

function idade(){
    let idade = prompt("digite a sua idade");
    
    if (idade >= 16 && idade < 18) {
        alert("Você não é obrigado a votar.");
    } 
    else if (idade < 16) {
        alert("Você ainda não pode votar.");
    } 
    else if (idade >= 18 && idade < 70) {
        alert("Você é obrigado a votar.");
    } 
    else if (idade >= 70) {
        alert("Você não é obrigado a votar.");
    }
    else {
        alert("Idade invalida.")
    }
    }

function calcularMedia(){

    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let media = (nota1+nota2)/2;

    if (media === 10) {
        alert("Aprovado com distinção");
    } else if (media >= 7) {
        alert ("Aprovado");
    } else if (media < 7) {
        alert ("Reprovado");
    } else if (media > 10){
        alert ("Nota Inválida")
    } else {
        alert("Nota Inválida")
    }
}

function ordenarNumeros(){
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 >= numero2 && numero1 >= numero3){
        if (numero2 >= numero3) {
            alert("Em ordem crescente: " + numero1 + " , " + numero2 + " , " + numero3);
        } else{
            alert("Em ordem crescente: " + numero1 + " , " + numero3 + " ,  " + numero2);
        }
    } else if (numero2 >= numero1 && numero2 >= numero3){
        if(numero3 >= numero1){
            alert("Em ordem crescente: " + numero2 + " , " + numero3 + " , " + numero1);
        } else{
            alert("Em ordem crescente: " + numero2 + " , " + numero1 + " , " + numero3);
        } 
    } else if (numero3 >= numero1 && numero3 >= numero2){
            if(numero2 >= numero1){
                alert("Em ordem crescente: " + numero3 + " , " + numero2 + " , " + numero1);
            } else{
                alert("Em ordem crescente: " + numero3 + " , " + numero1 + " , " + numero2);
            }
    }
}

function verificarLetra(){
    let letra = prompt("Digite uma letra:")
    
    if (letra.length == 1){
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        alert("É uma vogal");
    } else{
        alert("É uma consoante");
    }
    } else{
        alert("Digite apenas uma letra");
}
}

function contador(){
    for(let cont = 0; cont < 20; cont ++){
        console.log(cont + 1)
    }
}

function contadorReverso(){
    for(let cont = 21; cont > 1; cont --){
        console.log(cont - 1)
    }
}

function mostrarSequencia(arr){
    console.log(arr)
    if (!arr) return
    console.log(arr.sort())
}

function ordenarTresNumeros(){
    let numerosLista = [];
    let numeroPrimeiro = parseFloat(prompt("Digite o primeiro número:"));
    numerosLista.push(numeroPrimeiro);
    let numeroSegundo = parseFloat(prompt("Digite o segundo número:"));
    numerosLista.push(numeroSegundo);
    let numeroTerceiro = parseFloat(prompt("Digite o terceiro número:"));
    numerosLista.push(numeroTerceiro);
    console.log(numerosLista.sort());
    
}

function perfilShow(){
    const pessoa = {
        nome: [prompt("Digite seu nome:"),prompt("Digite seu sobrenome:")],
        idade: prompt("Digite sua idade:"),
        endereco: {
          rua: prompt("Digite sua rua:"),
          numero: prompt("Digite o numero de sua casa"),
          bairro: prompt("Digite seu bairro")
        },
        parentes: prompt("Digite quantas pessoas moram com voce"),
        primeiro_nome: function() {
          return this.nome[0];
        },
        sobrenome: function() {
          return this.nome[1];
        },
        perfil: function() {
          return `Meu nome e ${this.primeiro_nome()} ${this.sobrenome()}. Tenho ${this.idade} anos. Meu endereço e: ${this.endereco.rua}, ${this.endereco.numero}, ${this.endereco.bairro}. Moro com ${this.parentes} pessoas.`;
        }
      };
      
      alert(pessoa.perfil());
      
}

function alterarCor(){
    let corEscolhida = document.querySelector(".corEscolhida").value;
    document.body.style.backgroundColor = corEscolhida
}

let result = document.querySelector('.contador');
let valorContador = 0;
contadorElemento = 0;
function clickMenos(){
    if(valorContador >= 0){
    result.innerHTML = valorContador--;
    }else{
        alert("O numero nao pode ser negativo")
    }
}

function clickMais(){
    result.innerHTML = valorContador++;
 }