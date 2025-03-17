const n = Number(prompt("Digite um número:"));
const numero = document.getElementById("numero");
const texto = document.getElementById("texto");

numero.innerHTML = n;
texto.innerHTML = `<p>raiz quadrada: ${n ** 0.5}</p>
<p>é inteiro: ${Number.isInteger(n)}</p>
<p>é Nan: ${isNaN(n)}</p>
<p>arr pra baixo: ${Math.floor(n)}</p>
<p>arr pra cima: ${Math.ceil(n)}</p>
<p>duas casas: ${n.toFixed(2)}</p>`;