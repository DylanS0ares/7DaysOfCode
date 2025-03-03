var tipo, aprender, n;
var arra = [];

tipo = prompt("Qual área você quer seguir 1- Back-end ou 2- Front-end?");
if (tipo == 2) {
    alert("Legal");
    aprender = prompt("O que você deseja aprender? 1- React ou 2- Vue?");
    if (aprender == 1) {
        alert("Interessante!");
        n = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");
    } else if (aprender == 2) {
        n = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");
    }
} else if (tipo == 1) {
    aprender = prompt("O que você deseja aprender? 1- C# ou 2- Java?");
    alert("BACANA NÃO LIGO");
    if (aprender == 1) {
        alert("Interessante!");
        n = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");
    } else if (aprender == 2) {
        n = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");
    }
}

while (n === "sim" || n === "y" || n === "yes") {
    arra.push(prompt("Quais são as tecnologias nas quais você gostaria de se especializar?"));
    n = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (sim/não)");
    if (n === "não" || n === "n" || n === "nao") {
        break;  
    }
}

alert("Tecnologias que você gostaria de aprender: " + arra.join(", "));
