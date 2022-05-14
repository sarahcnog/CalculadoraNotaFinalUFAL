function Calcular() {
  var elementoNotaAB1 = document.getElementById("valorAB1");
  var valorAB1 = elementoNotaAB1.value;
  var NotaAB1 = parseFloat(valorAB1);
  var elementoNotaAB2 = document.getElementById("valorAB2");
  var valorAB2 = elementoNotaAB2.value;
  var NotaAB2 = parseFloat(valorAB2);
  var elementoNotaRV = document.getElementById("valorRV");
  var valorRV = elementoNotaRV.value;
  var NotaRV = parseFloat(valorRV);

  if (NotaRV >= NotaAB1 && NotaAB1 < NotaAB2) {
    var NotaAB1a = NotaRV;
    var NotaAB2a = NotaAB2;
  } else if (NotaRV >= NotaAB2 && NotaAB2 < NotaAB1) {
    var NotaAB2a = NotaRV;
    var NotaAB1a = NotaAB1;
  } else {
    var NotaAB1a = NotaAB1;
    var NotaAB2a = NotaAB2;
  }

  console.log(NotaAB1a);
  console.log(NotaAB2a);

  var media = (NotaAB1a + NotaAB2a) / 2;
  console.log(media);
  var mediaFixada = media.toFixed(1);
  console.log(mediaFixada);

  var notaFinal = (55 - 6 * mediaFixada) / 4;
  var notaFixada = notaFinal.toFixed(2);

  if (mediaFixada >= 7) {
    var resultado = "Você não precisa fazer a Prova Final. Já passou!";
  } else if (mediaFixada >= 5 && mediaFixada < 7) {
    var resultado =
      "Sua média é " +
      mediaFixada +
      ". Você poderá fazer a Prova Final e precisa tirar " +
      notaFixada +
      " para passar na matéria.";
  } else {
    var resultado =
      "Sua média é " + mediaFixada + ". Você não poderá fazer a Prova Final!";
  }
  var printresultado = document.getElementById("resultado");
  printresultado.innerHTML = resultado;
}