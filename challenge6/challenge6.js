// [][1] - Frutas
// [][2] - laticinios
// [][3] - congelados
// [][4] - doces

let ListaDeCompras =[[],[],[],[]];
let ListaTotal =[];
let resposta,categoria,comida;
let resultado = true;


document.addEventListener("DOMContentLoaded",function(){

    document.getElementById('yes').addEventListener('click',function(){
        resposta = "sim";
        processarResposta(resposta);
    });
    document.getElementById('Lista').addEventListener('click',function(){
        alert ( ListaTotal.join(', '));
                alert("Lista de Compras: "+('\n')+
                      "Frutas: "+ListaDeCompras[0].join(", ")+('\n')+
                      "Laticínios: "+ListaDeCompras[1].join(", ")+('\n')+
                      "Congelados: "+ListaDeCompras[2].join(", ")+('\n')+
                      "Doces: "+ListaDeCompras[3].join(", "));
            
        
    });
    document.getElementById('remove').addEventListener('click',function(){
        if(ListaTotal.length == 0){
            alert("Não há comida na lista");
            return;}
            else{
                retiraComida();
            }
    })
    
});

function processarResposta(resposta){
    
    resposta = resposta.toLocaleLowerCase();
    
        if(resposta == "sim"){}
            comida = prompt("Qual comida você deseja inserir?");
            ListaTotal.push(comida);
            categoria = prompt("Em qual categoria essa comida se encaixa? 1- frutas , 2- laticínios, 3- congelados, 4- doces");
            switch(categoria){
                case '1':
                    ListaDeCompras[0].push(comida);
                    break;
                case '2':
                    ListaDeCompras[1].push(comida);
                    break;
                case '3':
                    ListaDeCompras[2].push(comida);
                    break;
                case '4':
                    ListaDeCompras[3].push(comida);
                    break;
            }
        }
function retiraComida(){
    comida = prompt("Qual comida você deseja remover?");
    let index = ListaTotal.indexOf(comida);
    if(index > -1){
        ListaTotal.splice(index,1);
        for(let i = 0; i < ListaDeCompras.length; i++){
            index = ListaDeCompras[i].indexOf(comida);
            if(index > -1){
                ListaDeCompras[i].splice(index,1);
            }
        }
    }else{
        alert("Não há comida com esse nome");
        retiraComida();
    }
}

