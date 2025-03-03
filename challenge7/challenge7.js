
while(true){
    alert("Bem vindo a calculadora!");
    var first =parseFloat(prompt("Digite o primeiro número:"));
    var second =parseFloat(prompt("Digite o segundo número:"));
    let operation =prompt("Digite a operação desejada:");
    calculadora(operation,first,second);
 

function calculadora(operation,first,second){
    switch(operation){
        case "+":
            alert(first + second);
            break; 
        case"-":
            alert(first+second);
            break; 
        case"*":
            alert(first * second);
            break;  
        case"/":
            alert(first / second);  
            break;
        default:   
            alert("Operação inválida");
            break;
    }
}
}