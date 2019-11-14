let numEtage = prompt("Combien d'etage boss?")

function pyramide_de_mario(n) {

  for(let i=1; i<= n; i++)
  {
    let str1 = ' '.repeat((n-i));
    let str2 = '#'.repeat(i*1);

    console.log(str1 + str2);
  }
}


pyramide_de_mario(numEtage);
