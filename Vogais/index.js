function contarVogais(str) {
  str = str.toLowerCase();
  const vogais = "aãâáàeêéèiîíìoõôóòuûúù";
  let contagem = 0;

  for(let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contagem++;
    }
  }

  return contagem;
}

const palavra = prompt("Digite uma palavra: ");
console.log(`O número de vogais em ${palavra} é: ${contarVogais(palavra)}`)