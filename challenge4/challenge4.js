
var numero_escolhido = Math.floor(Math.random() * (10 - 1 + 1) + 1); // Número aleatório entre 1 e 10
var chances = 2;

function atualizarChances() {
    document.getElementById("tema").innerHTML = `Você tem ${chances} chances.`;
}


atualizarChances();

for (var i = 0; i < 2; i++) { 
    alert("Vamos lá!");
    var num = prompt("Digite um número");

    if (num == numero_escolhido) {
        document.getElementById("tema").innerHTML = "Parabéns, você acertou!";
        break; 
    } else {
        chances--; 
        if (chances === 0) {
            document.getElementById("tema").innerHTML = "Suas chances acabaram! :(";
        } else {
            atualizarChances(); 
        }
    }
}
