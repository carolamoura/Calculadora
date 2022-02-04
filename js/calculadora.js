function calculadora(){
    const operacao = prompt ("Escolha uma operação:\n 1 - Soma {+} \n 2 - Subtração {-} \n 3 - Multiplicação {*} \n 4 - Divisão Real {/} \n 5 - Divisão inteira {%}\n 6 - Potenciação {**}");
    
let n1 = parseFloat(prompt("insira um valor: "));
let n2 = parseFloat(prompt("Insira outro valor: "));
let resultado;

function soma(){
    resultado = (n1 + n2);
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtracao(){
    resultado = (n1 - n2);
    alert(`${n1} - ${n2} = ${resultado}`);
}
function multiplicacao(){
    resultado = (n1 * n2);
    alert(`${n1} * ${n2} = ${resultado}`);
}
function divisaoReal(){
    resultado = (n1 / n2);
    alert(`${n1} / ${n2} = ${resultado}`);
}
function divisaoInteira(){
    resultado = (n1 % n2);
    alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`);
}
function potenciacao(){
    resultado = (n1 ** n2);
    alert(`${n1} elevado a ${n2}  é igual a ${resultado}`);
}
function novaOperacao(){
    let opcao = prompt('Deseja fazer uma nova operação? 1 - sim \n 2 - não');

    if (opcao == 1){
        calculadora();
    }else if (opcao == 2){
        alert('ok, até mais!')
        
    }else {
        alert('Digite um numero válido');
        novaOperacao();
    }
           
}




if (operacao == 1){
    soma();
    novaOperacao();
} else if (operacao == 2){
    subtracao();
    novaOperacao();
}else if (operacao == 3){
    multiplicacao();
    novaOperacao();
}else if (operacao == 4){
    divisaoReal();
    novaOperacao();
}else if (operacao == 5){
    divisaoInteira();
    novaOperacao();
}else if (operacao == 6){
    potenciacao();
    novaOperacao();
}
    
}
calculadora();