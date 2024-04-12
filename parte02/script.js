//FUNÇÕES DE STRING
let texto = String(

"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, totam! Ipsa sint, minima odio eius magnam eaque officiis veritatis totam inventore ipsum ducimus? Sint iusto natus eum fuga itaque modi."

);

console.log("TAMANHO: " + texto.length);
console.log("MAIÚSCULO" + texto.toUpperCase());
console.log("minúsculo" + texto.toLowerCase());
console.log("Caracter na posição" + texto.charAt(2));

//FUNÇÃO DE NÚMEROS
let num = 10;

//BIBLIOTECA MATEMATICA
console.log("PI: "+ Math.PI);
console.log("PI redondo: " +Math.round(Math.PI));
console.log("PI com 4 depois da vírgula: " + Math.PI.toFixed(4));

//DECISÃO
let idade = 16;
 if (idade >=18) {
console.log("Você pode apostar no jogo do tigrinho");
 } else {
    console.log("Você NÂO pode apostar no jogo do tigrinho");
     }

     let textinho;

     if(textinho){
        console.log("Tem algo definido");
     } else if(textinho == " ") {
        console.log("Espaço em branco");
     } else {
        console.log("Tem muita coisa escrita lá.Conteúdo: " + textinho);
     }

     let opcao = 1;
     switch(opcao) {
        case 0:
            console.log("0");
            break;
        default:
            console.log("Diferente");
            break;
     }

     let idade2 = 18;

     let msg = idade>= 18? "Maior de 18" : "Menor de 18";

     console.log(msg);

     //LAÇOS
     let i = 10;
     let x = 0;

     while(true){
        console.log(i++);

        if (i== 10) break;
     }

     for(let i=0;i<10;i++) {
        console.log(i+1);
     }

     let x = 0;

     while(true); {
        console.log(x);
        x++;

        if (x >=10) break;
     }

        