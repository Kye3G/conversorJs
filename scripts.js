let bto = window.document.getElementById("bt");

function clicar(){
let valor = parseFloat(window.document.getElementById("valuePrimeCoins").value);
let moeda = window.document.getElementById("selectCoins").value;
let result = window.document.getElementById("resultado1");


  if (moeda === "Dolar"){
    result.innerHTML = "O resultado dessa operação é igual a $" + (valor * 4.95).toFixed(2);
  } else if (moeda === "Euro"){
    result.innerHTML = "O resultado dessa operação é igual a (€)" + (valor * 5.34).toFixed(2);
  } else if (moeda === "Iene"){
    result.innerHTML = "O resultado dessa operação é igual a ¥" + (valor * 0.033186694).toFixed(2);
  } else if (moeda === "Kwanza"){
    result.innerHTML = "O resultado dessa operação é igual a AON" + (valor * 0.0059814139).toFixed(2);
  } else {
    result.innerHTML = "Insira uma moeda disponível "
  }
}

function entrou(){
  bto.style.background = "green"
}

function saiu(){
  bto.style.background = "white"
}
