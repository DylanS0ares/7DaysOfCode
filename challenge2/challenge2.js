var resposta_nome = prompt("Qual seu nome?");
var resposta_idade = prompt("Quantos anos você tem?");
var resposta_linguagem = prompt("Qual linguagem de programação você está estudando?");
        if (resposta_idade!=null && resposta_linguagem != null && resposta_nome!=null){
            alert("Olá "+resposta_nome+", você tem "+resposta_idade+" anos e já está aprendendo "+resposta_linguagem+"!");
        }
var resposta_yn = prompt("Você gosta de estudar "+ resposta_linguagem+" Responda com o número 1 para SIM ou 2 para NÃO.");

if(resposta_yn==1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");

}else{
    alert(" Ahh que pena... Já tentou aprender outras linguagens?");
}