let num = prompt("Donne moi un nombre je te donne le factoriel")
let r = 1;

for (var i = 0; i < num; i++) {
  r = r * (num - i);
}

console.log("the factorial of "+ num + " is:" + r);
