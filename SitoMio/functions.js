// Funzioni varie atte a migliorare la pagina e renderla bella
// Copia il contenuto di una textarea e lo scrive su un paragrafo
$(function(){
$("#btn1").click(function(){
  $("#result").html($("#txtinput").val());
  });
});
/*
Copia il contenuto di una textarea, crea un elemento di una lista (#mango) e ne incollla il contenuto
Viene fixato in quanto la funzione in se tenderebbe a modificare gli ultimi due elementi della lista anziche' l'ultimo
Inoltre ho implementato una funzione per rendere a schermo
anche i capolinea e le spaziature sostituendo il /n macchina con <br/>
*/
$(function(){
$("#btn2").click(function(){
  $("#mango").append($('<li class="listItem bg-gradient-blue">Del Testo perche altrimenti non genera il li</li>'));
  $(".listItem:last-child").html($("#txtinput").val());
  });
});
