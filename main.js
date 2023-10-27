//Código da estação 1 | Constante e QuerySelector
const aplausos = document.querySelector("#som_tecla_aplausos");

//Código da estação 2 | Funções
function tocaSom(nome){
    alert(nome);
}
tocaSom("clap, clap, clap"); 

//Código da estação 3 | Variável let e Condicional
let controle = "tocar";

if(controle == "tocar"){
    alert("Áudio pronto para tocar.");
}else{
    alert("O áudio não está pronto.");
 }

 //Código da estação 4 |  Listas e Laço de repetição
 const buttons = document.querySelectorAll("button");
 let contador = 0;
 while (contador < buttons.length){
    buttons[contador].textContent = contador;
 }
