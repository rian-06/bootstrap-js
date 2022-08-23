$(document).ready(function(){

    //executa o alerta ao ler o documento scipt
alert("OIe turmaaa!!!")


//Função que escreve mensagem na tela ao clicar no elemento com o btnOlaMundo
$("#btnOlaMundo") .click(function() {
    alert("Ola mundo!!! Meu JS esta OK");
    $("body").addClass("btnolamundo");
});

$("#btnfundo").click(function() {
    $("body").addClass("fundo");
});

$("#btnOcultar").click(function() {
 $("h1").hide();
});

$("#btnMostrar").click(function() {
    $("h1").show();
   });



  });